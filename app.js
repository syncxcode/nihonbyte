(() => {
  const data = window.NIHONBYTE_META_DATA;
  const vocabData = window.vocabularyData || [];
  const latihanGoiReal = window.latihanGoiReal || {};
  const latihanBunpouReal = window.latihanBunpouReal || {};
  const latihanDokkaiReal = window.latihanDokkaiReal || {};

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
    photoURL: './assets/profile-default.svg',
    exp: 0,
    level: 1,
    points: 0,
    streak: 0,
    lastLoginDate: '',
    following: [],
    roadmap: { activeUnitIndex: 0, completedUnitIds: [], lastPracticeAt: '' },
    mission: { dayKey: '', xpEarnedToday: 0, quizCountToday: 0, studyMinutesToday: 0, claimedRewards: [] },
    recentActivity: 'Mulai belajar di roadmap.'
  };

  const state = {
    currentUser: null,
    profile: structuredClone(defaultProfile),
    selectedType: 'verb-godan',
    users: [],
    scoreHistory: [],
    authReady: false,
    practiceSession: null
  };

  const goiSections = ['goi-kanji-reading', 'goi-orthography', 'goi-context-expression', 'goi-paraphrase'];
  const bunpouSections = ['bunpou-form', 'bunpou-composition', 'bunpou-text'];

  const toast = (m) => alert(m);
  const needFirebase = () => !(window.firebaseAuth && window.firebaseDb && window.fs);
  const todayKey = () => new Date().toISOString().slice(0, 10);
  const computeLevel = (exp) => Math.max(1, Math.floor((exp || 0) / 120) + 1);
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  function ensureDailyMissionBucket() {
    const day = todayKey();
    if (!state.profile.mission || state.profile.mission.dayKey !== day) {
      state.profile.mission = { dayKey: day, xpEarnedToday: 0, quizCountToday: 0, studyMinutesToday: 0, claimedRewards: [] };
    }
  }

  function buildMissionRows() {
    ensureDailyMissionBucket();
    return Object.entries(DAILY_TARGETS).map(([key, meta]) => {
      const progress = Math.min(meta.total, state.profile.mission[key] || 0);
      return { ...meta, key, progress, percent: Math.round((progress / meta.total) * 100) };
    });
  }

  function resolveRoadmapState() {
    const completed = new Set(state.profile.roadmap?.completedUnitIds || []);
    const activeIndex = Math.min(data.roadmap.length - 1, state.profile.roadmap?.activeUnitIndex || 0);
    return data.roadmap.map((u, i) => ({ ...u, status: completed.has(u.id) ? 'done' : i === activeIndex ? 'active' : 'locked' }));
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
    $('#roadmap-path').innerHTML = roadmap.map((item, i) => `<article class="lesson-node">
      <div class="node-icon ${item.status === 'done' ? 'done' : item.status === 'locked' ? 'locked' : ''}">${item.status === 'done' ? '✓' : item.status === 'locked' ? '🔒' : i + 1}</div>
      <div><strong>${item.title}</strong><div>${item.skill}</div></div>
      <span>${item.status === 'active' ? 'START' : item.status === 'done' ? 'REVIEW' : 'LOCKED'}</span>
    </article>`).join('');
  }

  function renderMissions() {
    const rowHTML = buildMissionRows().map((row) => `<article class="mission-item"><h4>${row.title}</h4><div class="progress"><span style="width:${row.percent}%"></span></div><small>${row.progress}/${row.total} • reward ${row.reward}</small></article>`).join('');
    $('#daily-missions').innerHTML = rowHTML;
    $('#mission-detail-list').innerHTML = `<div class="list-card">${rowHTML}</div>`;
  }

  function renderVocab() {
    const list = vocabData.filter((v) => v.type === state.selectedType).slice(0, 80);
    $('#vocab-list').innerHTML = list.map((v) => `<article class="list-card"><strong>${v.kanji || '-'}</strong><div>${v.kana} • ${v.romaji}</div><small>${v.meaning}</small></article>`).join('') || '<p>Tidak ada data.</p>';
  }

  function buildPracticeQuestions(mainType, level) {
    if (mainType === 'goi') {
      return goiSections.flatMap((key) => shuffle((latihanGoiReal[level]?.[key] || [])).slice(0, 8).map((q) => ({ ...q, section: key })));
    }
    if (mainType === 'bunpou') {
      return bunpouSections.flatMap((key) => shuffle((latihanBunpouReal[level]?.[key] || [])).slice(0, 8).map((q) => ({ ...q, section: key })));
    }
    return shuffle(latihanDokkaiReal[level] || []).slice(0, 15).map((q) => ({ ...q, section: 'dokkai-reading' }));
  }

  function renderPracticeMenu() {
    if (state.practiceSession) return;
    $('#quiz-list').innerHTML = '<div class="list-card">Pilih level N5-N1 lalu klik <b>Mulai Latihan</b>.</div>';
  }

  function renderPracticeQuestion() {
    const s = state.practiceSession;
    if (!s) return;
    if (s.index >= s.questions.length) return finishPractice();
    const item = s.questions[s.index];
    $('#quiz-list').innerHTML = `<article class="panel quiz-panel"><p><b>${s.mainType.toUpperCase()} ${s.level}</b> • Soal ${s.index + 1}/${s.questions.length}</p>
      <h3>${item.question}</h3>
      <div class="quiz-options">${(item.options || []).map((opt) => `<button class="follow-btn" data-opt="${opt.replace(/"/g, '&quot;')}">${opt}</button>`).join('')}</div>
    </article>`;

    $$('#quiz-list [data-opt]').forEach((btn) => {
      btn.onclick = () => {
        const pick = btn.dataset.opt;
        if (pick === item.answer) s.correct += 1;
        s.index += 1;
        renderPracticeQuestion();
      };
    });
  }

  async function saveScoreToCloud(exerciseType, level, score, total, percentage) {
    if (!state.currentUser || needFirebase()) return;
    const { doc, setDoc, serverTimestamp } = window.fs;
    const timeId = Date.now().toString();
    await setDoc(doc(window.firebaseDb, 'users', state.currentUser.uid, 'history_latihan', timeId), {
      kategori: exerciseType,
      level,
      benar: score,
      total,
      nilai: percentage,
      tanggal: new Date().toLocaleString('id-ID'),
      createdAt: serverTimestamp()
    });
  }

  async function finishPractice() {
    const s = state.practiceSession;
    if (!s) return;
    const total = s.questions.length;
    const percent = total ? Math.round((s.correct / total) * 100) : 0;
    await saveScoreToCloud(s.mainType, s.level, s.correct, total, percent);
    await addProgress({ exp: Math.max(10, s.correct * 2), points: Math.max(5, s.correct), minutes: 8, quizDone: 1, activity: `Latihan ${s.mainType.toUpperCase()} ${s.level} nilai ${percent}` });
    state.practiceSession = null;
    $('#quiz-list').innerHTML = `<article class="list-card"><h3>Hasil latihan: ${percent}/100</h3><p>Benar ${s.correct} dari ${total} soal.</p><button id="restart-practice" class="primary-btn">Latihan Lagi</button></article>`;
    $('#restart-practice').onclick = () => renderPracticeMenu();
  }

  function renderProfile() {
    const photo = state.profile.photoURL || state.currentUser?.photoURL || './assets/profile-default.svg';
    const r = state.profile.roadmap || {};
    const historyMarkup = state.scoreHistory.map((h) => `<article class="history-card"><div><strong>${String(h.kategori || '-').toUpperCase()} ${h.level || ''}</strong><small>${h.tanggal || '-'}</small></div><b>${h.nilai || 0}%</b></article>`).join('') || '<p class="muted">Belum ada riwayat latihan.</p>';

    $('#profile-card').innerHTML = `<section class="dashboard-shell"><div class="dashboard-cover"></div>
      <article class="dashboard-profile-card"><div class="dashboard-avatar-wrap"><img src="${photo}" alt="avatar"></div>
      <h3>${state.profile.displayName}</h3><p class="dashboard-email">${state.profile.email || '-'}</p>
      <p>XP ${state.profile.exp} • Level ${state.profile.level} • Poin ${state.profile.points}</p>
      <p>Roadmap: unit #${(r.activeUnitIndex || 0) + 1} • selesai ${(r.completedUnitIds || []).length}/${data.roadmap.length}</p></article>
      <article class="panel"><h3>Data Score Latihan</h3>${historyMarkup}</article></section>`;
  }

  function renderLeaderboard() {
    const users = [...state.users].sort((a, b) => (b.points || 0) - (a.points || 0));
    $('#leaderboard-list').innerHTML = users.map((u, i) => `<article class="list-card user-row"><div><strong>#${i + 1} ${u.displayName || 'User'}</strong><div>Level ${u.level || 1} • XP ${u.exp || 0}</div></div><strong>${u.points || 0}</strong></article>`).join('') || '<p>Belum ada user.</p>';
  }

  function renderCommunity() {
    $('#community-feed').innerHTML = state.users.slice(0, 12).map((u) => `<article class="list-card"><strong>${u.displayName || 'User'}</strong><p>${u.recentActivity || 'Sedang belajar roadmap.'}</p></article>`).join('') || '<p>Komunitas kosong.</p>';
  }

  function syncAuthUI() {
    const logged = !!state.currentUser;
    $('#logged-out').classList.toggle('hidden', logged);
    $('#logged-in').classList.toggle('hidden', !logged);
    const photo = state.profile.photoURL || state.currentUser?.photoURL || './assets/profile-default.svg';
    const name = state.profile.displayName || 'Guest';
    $('#logged-in').innerHTML = `<button class="profile-pill" data-view-target="profile"><img src="${photo}" alt="avatar"><div><strong>${name}</strong><span>Dasbor</span></div></button><button id="logout" class="ghost-btn">Keluar</button>`;
    $('#logged-in [data-view-target]')?.addEventListener('click', () => $('[data-view="profile"]')?.click());
    $('#logout')?.addEventListener('click', async () => {
      await updatePresence(false);
      await window.signOut(window.firebaseAuth);
    });
  }

  async function persistProfile(patch) {
    if (!state.currentUser || needFirebase()) return;
    const { doc, setDoc, serverTimestamp } = window.fs;
    const next = { ...state.profile, ...patch };
    next.level = computeLevel(next.exp);
    state.profile = next;
    await setDoc(doc(window.firebaseDb, 'users', state.currentUser.uid), { ...patch, level: next.level, updatedAt: serverTimestamp() }, { merge: true });
  }

  async function loadUsers() {
    if (needFirebase()) return;
    const { collection, getDocs, query, orderBy, limit } = window.fs;
    const snap = await getDocs(query(collection(window.firebaseDb, 'users'), orderBy('points', 'desc'), limit(50)));
    state.users = snap.docs.map((d) => ({ uid: d.id, ...(d.data() || {}) }));
  }

  async function loadHistory() {
    if (!state.currentUser || needFirebase()) return;
    const { collection, getDocs, query, orderBy, limit } = window.fs;
    const snap = await getDocs(query(collection(window.firebaseDb, 'users', state.currentUser.uid, 'history_latihan'), orderBy('createdAt', 'desc'), limit(20)));
    state.scoreHistory = snap.docs.map((d) => d.data());
  }

  async function ensureUserDoc(user) {
    const { doc, getDoc, setDoc, serverTimestamp } = window.fs;
    const ref = doc(window.firebaseDb, 'users', user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, { ...structuredClone(defaultProfile), displayName: user.displayName || user.email?.split('@')[0] || 'User', email: user.email || '', photoURL: user.photoURL || defaultProfile.photoURL, createdAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
    }
  }

  async function loadMyProfile() {
    if (!state.currentUser || needFirebase()) return;
    const { doc, getDoc } = window.fs;
    const snap = await getDoc(doc(window.firebaseDb, 'users', state.currentUser.uid));
    const dataDoc = snap.data() || {};
    state.profile = { ...structuredClone(defaultProfile), ...dataDoc, displayName: dataDoc.displayName || state.currentUser.displayName || 'User', email: dataDoc.email || state.currentUser.email || '', photoURL: dataDoc.photoURL || state.currentUser.photoURL || defaultProfile.photoURL };
    ensureDailyMissionBucket();
  }

  async function updatePresence(isOnline) {
    if (!state.currentUser || needFirebase()) return;
    const { doc, updateDoc, serverTimestamp } = window.fs;
    await updateDoc(doc(window.firebaseDb, 'users', state.currentUser.uid), { presence: { isOnline, lastActiveAt: serverTimestamp() } });
  }

  async function addProgress({ exp = 0, points = 0, minutes = 0, quizDone = 0, activity = 'Belajar roadmap' }) {
    if (!state.currentUser) return toast('Login dulu agar progres tersimpan.');
    ensureDailyMissionBucket();
    const mission = { ...state.profile.mission, xpEarnedToday: (state.profile.mission.xpEarnedToday || 0) + exp, quizCountToday: (state.profile.mission.quizCountToday || 0) + quizDone, studyMinutesToday: (state.profile.mission.studyMinutesToday || 0) + minutes };
    await persistProfile({ exp: (state.profile.exp || 0) + exp, points: (state.profile.points || 0) + points, mission, recentActivity: activity });
    await reloadData();
  }

  async function reloadData() {
    if (state.currentUser) await loadMyProfile();
    else state.profile = structuredClone(defaultProfile);
    await loadUsers();
    await loadHistory();
    renderTopStats(); renderRoadmap(); renderMissions(); renderPracticeMenu(); renderVocab(); renderLeaderboard(); renderCommunity(); renderProfile(); syncAuthUI();
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

    $('#practice-start').onclick = () => {
      const mainType = $('#practice-type').value;
      const level = $('#practice-level').value;
      const questions = buildPracticeQuestions(mainType, level);
      if (!questions.length) return toast(`Soal ${mainType.toUpperCase()} ${level} belum tersedia.`);
      state.practiceSession = { mainType, level, questions, index: 0, correct: 0 };
      renderPracticeQuestion();
    };
  }

  async function initAuthBindings() {
    if (needFirebase()) return toast('Firebase belum siap.');
    $('#google-login').onclick = async () => window.signInWithPopup(window.firebaseAuth, window.firebaseProvider).catch((e) => toast(e.message));
    $('#email-login').onclick = async () => window.signInWithEmailAndPassword(window.firebaseAuth, $('#email-input').value.trim(), $('#password-input').value).catch((e) => toast(e.message));
    $('#email-register').onclick = async () => window.createUserWithEmailAndPassword(window.firebaseAuth, $('#email-input').value.trim(), $('#password-input').value).catch((e) => toast(e.message));

    window.onAuthStateChanged(window.firebaseAuth, async (user) => {
      state.currentUser = user || null;
      if (user) {
        await ensureUserDoc(user);
        await updatePresence(true);
      }
      await reloadData();
    });
  }

  function waitFirebaseAndInitAuth() {
    if (!needFirebase()) return initAuthBindings();
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (!needFirebase()) {
        clearInterval(timer);
        initAuthBindings();
      }
      if (tries >= 40) clearInterval(timer);
    }, 250);
  }

  function init() {
    setupNavigation();
    $('#continue-btn').onclick = async () => {
      await addProgress({ exp: 8, points: 6, minutes: 5, activity: 'Lanjut roadmap' });
      $('[data-view="practice"]')?.click();
    };
    $('#daily-login-close').onclick = () => $('#daily-login-modal').close();
    reloadData();
    waitFirebaseAndInitAuth();
  }

  window.addEventListener('nihonbyte:firebase-ready', () => { if (!state.authReady) waitFirebaseAndInitAuth(); });
  init();
})();
