(() => {
  const data = window.NIHONBYTE_META_DATA;
  const vocabData = window.vocabularyData || [];
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const defaultStats = { exp: 0, level: 1, points: 0, streak: 0, lastLoginDate: '' };
  const state = {
    currentUser: null,
    profile: { ...defaultStats, displayName: 'Guest', email: '', following: [] },
    selectedType: 'verb-godan',
    users: []
  };

  function needFirebase() {
    return !(window.firebaseAuth && window.firebaseDb && window.fs);
  }

  function toast(msg) { alert(msg); }

  function computeLevel(exp) { return Math.max(1, Math.floor(exp / 120) + 1); }

  function todayKey() { return new Date().toISOString().slice(0, 10); }

  function renderTopStats() {
    const el = $('#top-stats');
    el.innerHTML = [
      `⭐ XP ${state.profile.exp || 0}`,
      `📈 Level ${state.profile.level || 1}`,
      `💎 Poin ${state.profile.points || 0}`,
      `🔥 Streak ${state.profile.streak || 0}`
    ].map((x) => `<span class="stat-chip">${x}</span>`).join('');
  }

  function renderRoadmap() {
    const active = data.roadmap.find((r) => r.status === 'active') || data.roadmap[0];
    $('#active-section').textContent = `${active.section} • ${active.unit}`;
    $('#active-title').textContent = active.title;
    $('#roadmap-path').innerHTML = data.roadmap.map((item, i) => {
      const c = item.status === 'done' ? 'done' : item.status === 'locked' ? 'locked' : '';
      const icon = item.status === 'done' ? '✓' : item.status === 'locked' ? '🔒' : i + 1;
      return `<article class="lesson-node"><div class="node-icon ${c}">${icon}</div><div><strong>${item.title}</strong><div>${item.skill}</div></div><span>${item.xp} XP</span></article>`;
    }).join('');
  }

  function missionTemplate(m) {
    const pct = Math.min(100, Math.round((m.progress / m.total) * 100));
    return `<article class="mission-item"><h4>${m.title}</h4><div class="progress"><span style="width:${pct}%"></span></div><small>${m.progress}/${m.total} • reward ${m.reward}</small></article>`;
  }

  function renderMissions() {
    $('#daily-missions').innerHTML = data.dailyMissions.map(missionTemplate).join('');
    $('#mission-detail-list').innerHTML = data.dailyMissions.map((m) => `<div class="list-card">${missionTemplate(m)}</div>`).join('');
  }

  function renderQuizzes() {
    $('#quiz-list').innerHTML = data.quizzes.map((q) => `<article class="list-card"><h4>${q.title}</h4><p>${q.questions} soal • ${q.difficulty}</p><button class="follow-btn" data-quiz="${q.id}">Kerjakan</button></article>`).join('');
    $$('#quiz-list [data-quiz]').forEach((btn) => btn.onclick = () => handleEarn('quiz'));
  }

  function renderVocab() {
    const list = vocabData.filter((v) => v.type === state.selectedType).slice(0, 80);
    $('#vocab-list').innerHTML = list.map((v) => `<article class="list-card"><strong>${v.kanji || '-'}</strong><div>${v.kana} • ${v.romaji}</div><small>${v.meaning}</small></article>`).join('') || '<p>Tidak ada data.</p>';
  }

  function renderProfile() {
    $('#profile-card').innerHTML = `<h3>${state.profile.displayName}</h3><p>${state.profile.email || '-'}</p><p>XP ${state.profile.exp} • Level ${state.profile.level} • Poin ${state.profile.points}</p><p>Following: ${state.profile.following?.length || 0}</p>`;
  }

  function renderLeaderboard() {
    const users = [...state.users].sort((a, b) => (b.points || 0) - (a.points || 0));
    $('#leaderboard-list').innerHTML = users.map((u, i) => `<article class="list-card user-row"><div><strong>#${i + 1} ${u.displayName || 'User'}</strong> <span class="avatar-dot ${(u.presence?.isOnline) ? 'online' : ''}"></span><div>Level ${u.level || 1} • XP ${u.exp || 0}</div></div><strong>${u.points || 0}</strong></article>`).join('') || '<p>Belum ada user.</p>';
  }

  function renderCommunity() {
    const users = state.users.slice(0, 12);
    $('#community-feed').innerHTML = users.map((u) => {
      const uid = u.uid;
      const following = (state.profile.following || []).includes(uid);
      return `<article class="list-card"><div class="user-row"><div><strong>${u.displayName || 'User'}</strong> <span class="avatar-dot ${(u.presence?.isOnline) ? 'online' : ''}"></span></div><button class="follow-btn" data-follow="${uid}">${following ? 'Following' : 'Follow'}</button></div><p>${u.recentActivity || 'Sedang belajar roadmap.'}</p><small>XP ${u.exp || 0} • Poin ${u.points || 0}</small></article>`;
    }).join('') || '<p>Komunitas kosong.</p>';

    $$('#community-feed [data-follow]').forEach((btn) => {
      btn.onclick = () => toggleFollow(btn.dataset.follow);
    });
  }

  async function loadUsers() {
    if (needFirebase()) return;
    const { collection, getDocs, query, orderBy, limit } = window.fs;
    const snap = await getDocs(query(collection(window.firebaseDb, 'users'), orderBy('points', 'desc'), limit(50)));
    state.users = snap.docs.map((d) => ({ uid: d.id, ...(d.data() || {}) }));
  }

  async function ensureUserDoc(user) {
    const { doc, getDoc, setDoc, serverTimestamp } = window.fs;
    const ref = doc(window.firebaseDb, 'users', user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        displayName: user.displayName || user.email?.split('@')[0] || 'User',
        email: user.email || '',
        exp: 0,
        level: 1,
        points: 0,
        streak: 0,
        lastLoginDate: '',
        following: [],
        recentActivity: 'Baru bergabung di NihonByte.',
        presence: { isOnline: true, lastActiveAt: serverTimestamp() },
        createdAt: serverTimestamp()
      }, { merge: true });
    }
  }

  async function loadMyProfile() {
    if (!state.currentUser || needFirebase()) return;
    const { doc, getDoc } = window.fs;
    const snap = await getDoc(doc(window.firebaseDb, 'users', state.currentUser.uid));
    const p = snap.data() || {};
    state.profile = { ...defaultStats, ...p, displayName: p.displayName || state.currentUser.displayName || 'User', email: p.email || state.currentUser.email || '' };
  }

  async function persistProfile(patch) {
    if (!state.currentUser || needFirebase()) return;
    const { doc, setDoc, serverTimestamp } = window.fs;
    state.profile = { ...state.profile, ...patch };
    await setDoc(doc(window.firebaseDb, 'users', state.currentUser.uid), {
      ...patch,
      level: computeLevel((patch.exp ?? state.profile.exp) || 0),
      updatedAt: serverTimestamp()
    }, { merge: true });
  }

  async function handleEarn(source) {
    if (!state.currentUser) return toast('Login dulu untuk menyimpan XP real ke Firebase.');
    const exp = (state.profile.exp || 0) + 20;
    const points = (state.profile.points || 0) + 12;
    const level = computeLevel(exp);
    await persistProfile({ exp, points, level, recentActivity: `Selesai ${source} roadmap +20 XP` });
    await reloadData();
  }

  async function toggleFollow(uid) {
    if (!state.currentUser) return toast('Login dulu untuk follow user komunitas.');
    const set = new Set(state.profile.following || []);
    if (set.has(uid)) set.delete(uid); else set.add(uid);
    await persistProfile({ following: [...set] });
    await reloadData();
  }

  async function updatePresence(isOnline) {
    if (!state.currentUser || needFirebase()) return;
    const { doc, updateDoc, serverTimestamp } = window.fs;
    await updateDoc(doc(window.firebaseDb, 'users', state.currentUser.uid), {
      presence: { isOnline, lastActiveAt: serverTimestamp() }
    });
  }

  async function dailyLoginCheck() {
    if (!state.currentUser) return;
    const today = todayKey();
    if (state.profile.lastLoginDate === today) return;
    const prev = state.profile.lastLoginDate ? new Date(state.profile.lastLoginDate) : null;
    const diffDays = prev ? Math.round((new Date(today) - prev) / 86400000) : 99;
    const streak = diffDays === 1 ? (state.profile.streak || 0) + 1 : 1;
    const exp = (state.profile.exp || 0) + 10;
    const points = (state.profile.points || 0) + 5;
    await persistProfile({ streak, lastLoginDate: today, exp, points, level: computeLevel(exp), recentActivity: `Daily login streak ${streak} hari` });
    $('#streak-count').textContent = `Streak ${streak} hari`;
    const modal = $('#daily-login-modal');
    if (modal.showModal) modal.showModal();
  }

  function setupNav() {
    $$('#sidebar-nav .nav-btn').forEach((btn) => btn.onclick = () => {
      $$('#sidebar-nav .nav-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      $('#page-title').textContent = btn.textContent.trim();
      $$('.view').forEach((v) => v.classList.remove('active'));
      $(`#view-${btn.dataset.view}`).classList.add('active');
    });

    $$('.type-btn').forEach((btn) => btn.onclick = () => {
      state.selectedType = btn.dataset.type;
      const practice = $('[data-view="practice"]');
      if (practice) practice.click();
      renderVocab();
    });
  }

  function syncAuthUI() {
    const logged = !!state.currentUser;
    $('#logged-out').classList.toggle('hidden', logged);
    $('#logged-in').classList.toggle('hidden', !logged);
    $('#user-text').textContent = logged ? `Login: ${state.profile.displayName}` : 'Belum login';
  }

  async function reloadData() {
    await loadMyProfile();
    await loadUsers();
    renderTopStats();
    renderRoadmap();
    renderMissions();
    renderQuizzes();
    renderVocab();
    renderLeaderboard();
    renderCommunity();
    renderProfile();
    syncAuthUI();
  }

  async function initAuth() {
    if (needFirebase()) {
      toast('firebase-config.js belum tersedia / tidak valid.');
      return;
    }

    $('#google-login').onclick = async () => {
      await window.signInWithPopup(window.firebaseAuth, window.firebaseProvider);
    };
    $('#logout').onclick = async () => {
      await updatePresence(false);
      await window.signOut(window.firebaseAuth);
    };
    $('#email-login').onclick = async () => {
      await window.signInWithEmailAndPassword(window.firebaseAuth, $('#email-input').value.trim(), $('#password-input').value);
    };
    $('#email-register').onclick = async () => {
      await window.createUserWithEmailAndPassword(window.firebaseAuth, $('#email-input').value.trim(), $('#password-input').value);
    };

    window.onAuthStateChanged(window.firebaseAuth, async (user) => {
      state.currentUser = user || null;
      if (user) {
        await ensureUserDoc(user);
        await updatePresence(true);
        await reloadData();
        await dailyLoginCheck();
        await reloadData();
      } else {
        state.profile = { ...defaultStats, displayName: 'Guest', email: '', following: [] };
        await reloadData();
      }
    });

    document.addEventListener('visibilitychange', () => updatePresence(!document.hidden));
    window.addEventListener('beforeunload', () => { updatePresence(false); });
  }

  function init() {
    setupNav();
    $('#continue-btn').onclick = () => handleEarn('continue');
    $('#daily-login-close').onclick = () => $('#daily-login-modal').close();
    renderRoadmap();
    renderMissions();
    renderQuizzes();
    renderVocab();
    renderTopStats();
    renderProfile();
    initAuth();
  }

  init();
})();
