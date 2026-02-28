window.NIHONBYTE_META_DATA = {
  roadmap: [
    { id: 'u1', section: 'Section 1', unit: 'Unit 1', title: 'Form Basic Sentences', skill: 'Pola kalimat dasar', status: 'done', xp: 20 },
    { id: 'u2', section: 'Section 1', unit: 'Unit 2', title: 'Describing Families', skill: 'Kosakata keluarga', status: 'active', xp: 30 },
    { id: 'u3', section: 'Section 1', unit: 'Unit 3', title: 'Daily Activities', skill: 'Kata kerja harian', status: 'locked', xp: 35 },
    { id: 'u4', section: 'Section 2', unit: 'Unit 1', title: 'Shopping Mission', skill: 'Roleplay belanja', status: 'locked', xp: 40 }
  ],
  verbs: ['たべる (taberu)', 'のむ (nomu)', 'いく (iku)', 'かえる (kaeru)', 'べんきょうする (benkyou suru)'],
  dailyMissions: [
    { id: 'm1', title: 'Dapatkan 80 XP', progress: 35, total: 80, reward: 30 },
    { id: 'm2', title: 'Skor quiz > 85% di 3 latihan', progress: 1, total: 3, reward: 50 },
    { id: 'm3', title: 'Belajar 20 menit', progress: 12, total: 20, reward: 25 }
  ],
  quizzes: [
    { id: 'q1', unitId: 'u2', title: 'Quiz Keluarga 1', questions: 10, difficulty: 'Mudah' },
    { id: 'q2', unitId: 'u2', title: 'Quiz Keluarga 2', questions: 12, difficulty: 'Sedang' },
    { id: 'q3', unitId: 'u3', title: 'Quiz Aktivitas Harian', questions: 15, difficulty: 'Sedang' }
  ],
  leaderboard: [
    { id: 'me', name: 'Kamu', points: 420, exp: 860, level: 7, online: true },
    { id: 'n1', name: 'Rina', points: 510, exp: 1040, level: 8, online: true },
    { id: 'n2', name: 'Akbar', points: 470, exp: 980, level: 8, online: false },
    { id: 'n3', name: 'Yumi', points: 390, exp: 790, level: 6, online: true }
  ],
  communityPosts: [
    { id: 'p1', userId: 'n1', text: 'Baru selesai quiz roadmap Unit 2 skor 95%! 🔥', likes: 24, online: true },
    { id: 'p2', userId: 'n2', text: 'Dapet badge Kanji Sprint, ayo kejar poin mingguan!', likes: 14, online: false },
    { id: 'p3', userId: 'n3', text: 'Latihan hari ke-12 berturut! keep going ✨', likes: 19, online: true }
  ],
  badges: ['Streak 7 Hari', 'Roadmap Runner', 'Quiz Hunter', 'Top 10 Mingguan']
};
