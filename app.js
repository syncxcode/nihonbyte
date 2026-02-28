(() => {
  const data = window.NIHONBYTE_META_DATA;
  const vocabData = window.vocabularyData || [];
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const DAILY_TARGETS = {
    xpEarnedToday: { title: 'Dapatkan 80 XP', total: 80, reward: 30 },
    quizCountToday: { title: 'Skor quiz > 85% di 3 latihan', total: 3, reward: 50 },
    studyMinutesToday: { title: 'Belajar 20 menit', total: 20, reward: 25 }
  };

  const defaultProfile = {
    displayName: 'Guest',
    email: '',
    exp: 0,
    level: 1,
    points: 0,
    streak: 0,
    lastLoginDate: '',
    following: [],
    roadmap: {
      activeUnitIndex: 0,
      completedUnitIds: [],
      lastPracticeAt: ''
    },
    mission: {
      dayKey: '',
      xpEarnedToday: 0,
      quizCountToday: 0,
      studyMinutesToday: 0,
      claimedRewards: []
    },
    recentActivity: 'Mulai belajar di roadmap.'
  };

  const state = {
    currentUser: null,
    profile: structuredClone(defaultProfile),
    selectedType: 'verb-godan',
    users: [],
    authReady: false
  };

  function toast(message) {
    alert(message);
  }

  function needFirebase() {
    return !(window.firebaseAuth && window.firebaseDb && window.fs);
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function computeLevel(exp) {
    return Math.max(1, Math.floor((exp || 0) / 120) + 1);
  }

  function resolveRoadmapState() {
    const completed = new Set(state.profile.roadmap?.completedUnitIds || []);
    const activeIndex = Math.min(data.roadmap.length - 1, state.profile.roadmap?.activeUnitIndex || 0);
    return data.roadmap.map((u, i) => {
      let status = 'locked';
      if (completed.has(u.id)) status = 'done';
      else if (i === activeIndex) status = 'active';
      return { ...u, status };
    });
  }

  function ensureDailyMissionBucket() {
    const day = todayKey();
    if (!state.profile.mission || state.profile.mission.dayKey !== day) {
      state.profile.mission = {
        dayKey: day,
        xpEarnedToday: 0,
        quizCountToday: 0,
        studyMinutesToday: 0,
        claimedRewards: []
      };
    }
  }

  function buildMissionRows() {
    ensureDailyMissionBucket();
    return Object.entries(DAILY_TARGETS).map(([key, meta]) => {
      const progress = Math.min(meta.total, state.profile.mission[key] || 0);
      const percent = Math.round((progress / meta.total) * 100);
      const done = progress >= meta.total;
      return {
        key,
        title: meta.title,
        total: meta.total,
        reward: meta.reward,
        progress,
        percent,
        done
      };
    });
  }

  function missionTemplate(row) {
    return `<article class="mission-item">
      <h4>${row.title}</h4>
      <div class="progress"><span style="width:${row.percent}%"></span></div>
      <small>${row.progress}/${row.total} • reward ${row.reward}</small>
    </article>`;
  }

  function renderTopStats() {
    const rows = buildMissionRows();
    const missionPercent = Math.round(rows.reduce((a, r) => a + r.percent, 0) / rows.length);
    $('#top-stats').innerHTML = [
      `⭐ XP ${state.profile.exp || 0}`,
      `📈 Level ${state.profile.level || 1}`,
      `💎 Poin ${state.profile.points || 0}`,
      `🔥 Streak ${state.profile.streak || 0}`,
      `🎯 Mission ${missionPercent}%`
    ].map((x) => `<span class="stat-chip">${x}</span>`).join('');
  }

  function renderRoadmap() {
    const roadmap = resolveRoadmapState();
    const active = roadmap.find((r) => r.status === 'active') || roadmap[0];
    $('#active-section').textContent = `${active.section} • ${active.unit}`;
    $('#active-title').textContent = active.title;

    $('#roadmap-path').innerHTML = roadmap.map((item, i) => {
      const iconClass = item.status === 'done' ? 'done' : item.status === 'locked' ? 'locked' : '';
      const icon = item.status === 'done' ? '✓' : item.status === 'locked' ? '🔒' : i + 1;
      const action = item.status === 'active' ? 'START' : item.status === 'done' ? 'REVIEW' : 'LOCKED';
      return `<article class="lesson-node">
        <div class="node-icon ${iconClass}">${icon}</div>
        <div><strong>${item.title}</strong><div>${item.skill}</div></div>
        <span>${action}</span>
      </article>`;
    }).join('');
  }

  function renderMissions() {
    const rows = buildMissionRows();
    $('#daily-missions').innerHTML = rows.map(missionTemplate).join('');
    $('#mission-detail-list').innerHTML = rows.map((r) => `<div class="list-card">${missionTemplate(r)}</div>`).join('');
  }

  function renderQuizzes() {
    const active = resolveRoadmapState().find((r) => r.status === 'active') || data.roadmap[0];
    const list = data.quizzes.filter((q) => q.unitId === active.id || q.unitId === data.roadmap[active.activeUnitIndex]?.id);
    const useList = list.length ? list : data.quizzes;
    $('#quiz-list').innerHTML = useList.map((q) => `<article class="list-card"><h4>${q.title}</h4><p>${q.questions} soal • ${q.difficulty}</p><button class="follow-btn" data-quiz="${q.id}">Kerjakan</button></article>`).join('');
    $$('#quiz-list [data-quiz]').forEach((btn) => {
      btn.onclick = async () => {
        await addProgress({ exp: 20, points: 12, minutes: 8, quizDone: 1, activity: `Selesai quiz ${btn.dataset.quiz}` });
      };
    });
  }

  function renderVocab() {
    const list = vocabData.filter((v) => v.type === state.selectedType).slice(0, 120);
    $('#vocab-list').innerHTML = list.map((v) => `<article class="list-card"><strong>${v.kanji || '-'}</strong><div>${v.kana} • ${v.romaji}</div><small>${v.meaning}</small></article>`).join('') || '<p>Tidak ada data.</p>';
  }

  function renderProfile() {
    const r = state.profile.roadmap || {};
    $('#profile-card').innerHTML = `<h3>${state.profile.displayName}</h3>
      <p>${state.profile.email || '-'}</p>
      <p>XP ${state.profile.exp} • Level ${state.profile.level} • Poin ${state.profile.points}</p>
      <p>Roadmap: unit aktif #${(r.activeUnitIndex || 0) + 1} • selesai ${(r.completedUnitIds || []).length}/${data.roadmap.length}</p>
      <p>Following: ${state.profile.following?.length || 0}</p>`;
  }

  function renderLeaderboard() {
    const users = [...state.users].sort((a, b) => (b.points || 0) - (a.points || 0));
    $('#leaderboard-list').innerHTML = users.map((u, i) => `<article class="list-card user-row"><div><strong>#${i + 1} ${u.displayName || 'User'}</strong> <span class="avatar-dot ${u.presence?.isOnline ? 'online' : ''}"></span><div>Level ${u.level || 1} • XP ${u.exp || 0}</div></div><strong>${u.points || 0}</strong></article>`).join('') || '<p>Belum ada user.</p>';
  }

  function renderCommunity() {
    $('#community-feed').innerHTML = state.users.slice(0, 15).map((u) => {
      const following = (state.profile.following || []).includes(u.uid);
      return `<article class="list-card"><div class="user-row"><div><strong>${u.displayName || 'User'}</strong> <span class="avatar-dot ${u.presence?.isOnline ? 'online' : ''}"></span></div><button class="follow-btn" data-follow="${u.uid}">${following ? 'Following' : 'Follow'}</button></div><p>${u.recentActivity || 'Sedang belajar roadmap.'}</p><small>XP ${u.exp || 0} • Poin ${u.points || 0}</small></article>`;
    }).join('') || '<p>Komunitas kosong.</p>';

    $$('#community-feed [data-follow]').forEach((btn) => {
      btn.onclick = async () => {
        if (!state.currentUser) return toast('Login dulu untuk follow user komunitas.');
        const set = new Set(state.profile.following || []);
        if (set.has(btn.dataset.follow)) set.delete(btn.dataset.follow);
        else set.add(btn.dataset.follow);
        await persistProfile({ following: [...set] });
        await reloadData();
      };
    });
  }

  function syncAuthUI() {
    const logged = !!state.currentUser;
    $('#logged-out').classList.toggle('hidden', logged);
    $('#logged-in').classList.toggle('hidden', !logged);
    $('#user-text').textContent = logged ? `Login: ${state.profile.displayName}` : 'Belum login';
  }

  async function persistProfile(patch) {
    if (!state.currentUser || needFirebase()) return;
    const { doc, setDoc, serverTimestamp } = window.fs;
    const next = { ...state.profile, ...patch };
    next.level = computeLevel(next.exp);
    state.profile = next;
    await setDoc(doc(window.firebaseDb, 'users', state.currentUser.uid), {
      ...patch,
      level: next.level,
      updatedAt: serverTimestamp()
    }, { merge: true });
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
        ...structuredClone(defaultProfile),
        displayName: user.displayName || user.email?.split('@')[0] || 'User',
        email: user.email || '',
        presence: { isOnline: true, lastActiveAt: serverTimestamp() },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }, { merge: true });
    }
  }

  async function loadMyProfile() {
    if (!state.currentUser || needFirebase()) return;
    const { doc, getDoc } = window.fs;
    const snap = await getDoc(doc(window.firebaseDb, 'users', state.currentUser.uid));
    const dataDoc = snap.data() || {};
    state.profile = {
      ...structuredClone(defaultProfile),
      ...dataDoc,
      displayName: dataDoc.displayName || state.currentUser.displayName || 'User',
      email: dataDoc.email || state.currentUser.email || ''
    };
    ensureDailyMissionBucket();
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
    const day = todayKey();
    if (state.profile.lastLoginDate === day) return;

    const prev = state.profile.lastLoginDate ? new Date(state.profile.lastLoginDate) : null;
    const diffDays = prev ? Math.round((new Date(day) - prev) / 86400000) : 99;
    const streak = diffDays === 1 ? (state.profile.streak || 0) + 1 : 1;

    await persistProfile({
      lastLoginDate: day,
      streak,
      mission: {
        dayKey: day,
        xpEarnedToday: 0,
        quizCountToday: 0,
        studyMinutesToday: 0,
        claimedRewards: []
      },
      recentActivity: `Daily login streak ${streak} hari`
    });

    $('#streak-count').textContent = `Streak ${streak} hari`;
    const modal = $('#daily-login-modal');
    if (modal.showModal) modal.showModal();
  }

  async function addProgress({ exp = 0, points = 0, minutes = 0, quizDone = 0, activity = 'Belajar roadmap' }) {
    if (!state.currentUser) return toast('Login dulu agar progres tersimpan di database.');
    ensureDailyMissionBucket();

    const mission = {
      ...state.profile.mission,
      xpEarnedToday: (state.profile.mission.xpEarnedToday || 0) + exp,
      quizCountToday: (state.profile.mission.quizCountToday || 0) + quizDone,
      studyMinutesToday: (state.profile.mission.studyMinutesToday || 0) + minutes
    };

    const roadmap = { ...(state.profile.roadmap || {}) };
    const idx = roadmap.activeUnitIndex || 0;
    if (quizDone > 0) {
      const activeUnit = data.roadmap[idx];
      const doneSet = new Set(roadmap.completedUnitIds || []);
      if (activeUnit) doneSet.add(activeUnit.id);
      roadmap.completedUnitIds = [...doneSet];
      roadmap.activeUnitIndex = Math.min(data.roadmap.length - 1, idx + 1);
      roadmap.lastPracticeAt = new Date().toISOString();
    }

    await persistProfile({
      exp: (state.profile.exp || 0) + exp,
      points: (state.profile.points || 0) + points,
      mission,
      roadmap,
      recentActivity: activity
    });

    await reloadData();
  }

  async function reloadData() {
    if (state.currentUser) {
      await loadMyProfile();
    } else {
      state.profile = structuredClone(defaultProfile);
    }
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

  function setupNavigation() {
    $$('#sidebar-nav .nav-btn').forEach((btn) => {
      btn.onclick = () => {
        $$('#sidebar-nav .nav-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        $('#page-title').textContent = btn.textContent.trim();
        $$('.view').forEach((v) => v.classList.remove('active'));
        $(`#view-${btn.dataset.view}`).classList.add('active');
      };
    });

    $$('.type-btn').forEach((btn) => {
      btn.onclick = () => {
        state.selectedType = btn.dataset.type;
        $('[data-view="practice"]')?.click();
        renderVocab();
      };
    });
  }

  async function initAuthBindings() {
    if (needFirebase()) {
      toast('Firebase belum siap. Pastikan firebase-config.js termuat dan koneksi tidak diblokir.');
      return;
    }

    $('#google-login').onclick = async () => {
      try {
        await window.signInWithPopup(window.firebaseAuth, window.firebaseProvider);
      } catch (error) {
        toast(`Login Google gagal: ${error.message}`);
      }
    };

    $('#email-login').onclick = async () => {
      try {
        const email = $('#email-input').value.trim();
        const password = $('#password-input').value;
        await window.signInWithEmailAndPassword(window.firebaseAuth, email, password);
      } catch (error) {
        toast(`Login email gagal: ${error.message}`);
      }
    };

    $('#email-register').onclick = async () => {
      try {
        const email = $('#email-input').value.trim();
        const password = $('#password-input').value;
        await window.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
      } catch (error) {
        toast(`Daftar email gagal: ${error.message}`);
      }
    };

    $('#logout').onclick = async () => {
      try {
        await updatePresence(false);
        await window.signOut(window.firebaseAuth);
      } catch (error) {
        toast(`Logout gagal: ${error.message}`);
      }
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
        await reloadData();
      }
    });

    document.addEventListener('visibilitychange', () => updatePresence(!document.hidden));
    window.addEventListener('beforeunload', () => updatePresence(false));
  }

  async function waitFirebaseAndInitAuth() {
    if (!needFirebase()) {
      state.authReady = true;
      await initAuthBindings();
      return;
    }

    let tries = 0;
    const timer = setInterval(async () => {
      tries += 1;
      if (!needFirebase()) {
        clearInterval(timer);
        state.authReady = true;
        await initAuthBindings();
      } else if (tries >= 40) {
        clearInterval(timer);
        toast('Firebase tidak terinisialisasi dalam 10 detik. Cek firebase-config.js dan script Firebase.');
      }
    }, 250);
  }

  function init() {
    setupNavigation();
    $('#continue-btn').onclick = async () => {
      await addProgress({ exp: 8, points: 6, minutes: 5, activity: 'Lanjut roadmap dari tombol Continue' });
      $('[data-view="practice"]')?.click();
    };
    $('#daily-login-close').onclick = () => $('#daily-login-modal').close();

    renderTopStats();
    renderRoadmap();
    renderMissions();
    renderQuizzes();
    renderVocab();
    renderLeaderboard();
    renderCommunity();
    renderProfile();
    syncAuthUI();

    waitFirebaseAndInitAuth();
  }

  window.addEventListener('nihonbyte:firebase-ready', () => {
    if (!state.authReady) {
      waitFirebaseAndInitAuth();
    }
  });

  init();
})();
