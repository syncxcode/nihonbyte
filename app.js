(() => {
  const data = window.NIHONBYTE_META_DATA;
  if (!data) return;

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const DB_NAME = 'nihonbyte-meta-db';
  const STORE = 'profile';
  const PROFILE_KEY = 'main';

  const defaultProfile = {
    name: 'Kamu',
    points: 420,
    exp: 860,
    level: 7,
    streak: 1,
    follows: [],
    lastLoginDate: ''
  };

  let state = { profile: { ...defaultProfile } };

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function getProfileFromDB() {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE, 'readonly');
      const store = tx.objectStore(STORE);
      const req = store.get(PROFILE_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  }

  async function saveProfileToDB() {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(state.profile, PROFILE_KEY);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function renderTopStats() {
    const container = $('#top-stats');
    const m = data.dailyMissions.reduce((acc, i) => acc + Math.min(i.progress, i.total), 0);
    container.innerHTML = [
      `⭐ XP ${state.profile.exp}`,
      `🔥 Streak ${state.profile.streak}`,
      `💎 Poin ${state.profile.points}`,
      `🎯 Progres Misi ${m}`
    ].map((text) => `<span class="stat-chip">${text}</span>`).join('');
  }

  function renderVerbList() {
    $('#verb-list').innerHTML = data.verbs.map((v) => `<li>${v}</li>`).join('');
  }

  function renderRoadmap() {
    const active = data.roadmap.find((r) => r.status === 'active') || data.roadmap[0];
    $('#active-section').textContent = `${active.section} • ${active.unit}`;
    $('#active-title').textContent = active.title;

    $('#roadmap-path').innerHTML = data.roadmap.map((item, idx) => {
      const iconClass = item.status === 'done' ? 'done' : item.status === 'locked' ? 'locked' : '';
      const emoji = item.status === 'locked' ? '🔒' : item.status === 'done' ? '✓' : idx + 1;
      const action = item.status === 'active' ? 'START' : item.status === 'done' ? 'REVIEW' : 'LOCKED';
      return `
        <article class="lesson-node">
          <div class="node-icon ${iconClass}">${emoji}</div>
          <div>
            <h4>${item.section}, ${item.unit} — ${item.title}</h4>
            <p>${item.skill} • reward ${item.xp} XP</p>
          </div>
          <span class="roadmap-action">${action}</span>
        </article>
      `;
    }).join('');
  }

  function renderMissions() {
    const mkMission = (m) => {
      const pct = Math.min(100, Math.round((m.progress / m.total) * 100));
      return `
      <article class="mission-item">
        <h4>${m.title}</h4>
        <div class="progress"><span style="width:${pct}%"></span></div>
        <small>${m.progress}/${m.total} • reward ${m.reward} pts</small>
      </article>`;
    };
    $('#daily-missions').innerHTML = data.dailyMissions.map(mkMission).join('');
    $('#mission-detail-list').innerHTML = data.dailyMissions.map((m) => `<div class="list-card">${mkMission(m)}</div>`).join('');
  }

  function renderQuizzes() {
    $('#quiz-list').innerHTML = data.quizzes.map((q) => `
      <article class="list-card">
        <h4>${q.title}</h4>
        <p>${q.questions} soal • ${q.difficulty}</p>
        <button class="follow-btn" data-quiz="${q.id}">Kerjakan latihan</button>
      </article>
    `).join('');

    $$('#quiz-list [data-quiz]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        state.profile.exp += 15;
        state.profile.points += 10;
        if (state.profile.exp >= state.profile.level * 140) state.profile.level += 1;
        await saveProfileToDB();
        renderAll();
      });
    });
  }

  function renderLeaderboard() {
    const board = [...data.leaderboard];
    board[0] = {
      ...board[0],
      points: state.profile.points,
      exp: state.profile.exp,
      level: state.profile.level,
      online: !document.hidden
    };
    board.sort((a, b) => b.points - a.points);
    $('#leaderboard-list').innerHTML = board.map((u, idx) => `
      <article class="list-card user-row">
        <div class="user-meta">
          <strong>#${idx + 1}</strong>
          <div>
            <div>${u.name} <span class="avatar-dot ${u.online ? 'online' : ''}"></span></div>
            <small>Level ${u.level} • XP ${u.exp}</small>
          </div>
        </div>
        <strong>${u.points} pts</strong>
      </article>
    `).join('');
  }

  function renderCommunity() {
    $('#community-feed').innerHTML = data.communityPosts.map((p) => {
      const followed = state.profile.follows.includes(p.userId);
      return `
      <article class="list-card">
        <div class="user-row">
          <div class="user-meta">
            <strong>${p.userId.toUpperCase()}</strong>
            <span class="avatar-dot ${p.online ? 'online' : ''}"></span>
          </div>
          <button class="follow-btn" data-follow="${p.userId}">${followed ? 'Following' : 'Follow'}</button>
        </div>
        <p>${p.text}</p>
        <small>❤️ ${p.likes} likes</small>
      </article>`;
    }).join('');

    $$('#community-feed [data-follow]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.follow;
        const set = new Set(state.profile.follows);
        if (set.has(id)) set.delete(id); else set.add(id);
        state.profile.follows = [...set];
        await saveProfileToDB();
        renderCommunity();
      });
    });
  }

  function renderProfile() {
    const completed = data.roadmap.filter((r) => r.status === 'done').length;
    const active = data.roadmap.find((r) => r.status === 'active');
    $('#profile-card').innerHTML = `
      <article class="profile-box">
        <h3>${state.profile.name}</h3>
        <p>Level ${state.profile.level} • XP ${state.profile.exp}</p>
        <p>Poin kompetisi: ${state.profile.points}</p>
      </article>
      <article class="profile-box">
        <h3>Lencana</h3>
        <div class="badges">${data.badges.map((b) => `<span class="badge">${b}</span>`).join('')}</div>
      </article>
      <article class="profile-box">
        <h3>Progress Roadmap</h3>
        <p>Selesai unit: ${completed}/${data.roadmap.length}</p>
        <p>Latihan aktif: ${active ? active.title : '-'}</p>
      </article>
      <article class="profile-box">
        <h3>Misi Harian</h3>
        <p>Streak login: ${state.profile.streak} hari</p>
        <p>Following: ${state.profile.follows.length} user</p>
      </article>
    `;
  }

  function setupNavigation() {
    $$('#sidebar-nav .nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('#sidebar-nav .nav-btn').forEach((n) => n.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.dataset.view;
        $('#page-title').textContent = btn.textContent.trim();
        $$('.view').forEach((v) => v.classList.remove('active'));
        $(`#view-${view}`).classList.add('active');
      });
    });
  }

  async function showDailyLoginModalIfNeeded() {
    const modal = $('#daily-login-modal');
    const sameDay = state.profile.lastLoginDate === todayKey();
    if (sameDay) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.profile.streak = state.profile.lastLoginDate === yesterday ? state.profile.streak + 1 : 1;
    state.profile.lastLoginDate = todayKey();
    state.profile.exp += 10;
    await saveProfileToDB();

    $('#streak-count').textContent = `Streak ${state.profile.streak} hari`;
    $('#streak-days').innerHTML = ['Su','Mo','Tu','We','Th','Fr','Sa']
      .map((d, i) => `<div class="streak-day">${d}<br>${i < Math.min(state.profile.streak, 7) ? '✅' : '◯'}</div>`)
      .join('');

    if (typeof modal.showModal === 'function') {
      modal.showModal();
      $('#daily-login-close').onclick = () => modal.close();
    }
  }

  async function renderAll() {
    renderTopStats();
    renderVerbList();
    renderRoadmap();
    renderMissions();
    renderQuizzes();
    renderLeaderboard();
    renderCommunity();
    renderProfile();
  }

  async function init() {
    const saved = await getProfileFromDB();
    state.profile = { ...defaultProfile, ...(saved || {}) };

    setupNavigation();
    $('#continue-btn').addEventListener('click', async () => {
      const active = data.dailyMissions[0];
      active.progress = Math.min(active.total, active.progress + 10);
      state.profile.exp += 8;
      state.profile.points += 6;
      await saveProfileToDB();
      renderAll();
    });

    document.addEventListener('visibilitychange', () => renderLeaderboard());

    await showDailyLoginModalIfNeeded();
    await renderAll();
  }

  init();
})();
