document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const category = document.getElementById("category");
  const search = document.getElementById("search");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const resultInfo = document.getElementById("resultInfo");
  const kanjiModal = document.getElementById("kanjiModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const expandedCard = document.getElementById("expandedCard");
  const recommendationRow = document.getElementById("recommendationRow");
  const modalSubtitle = document.getElementById("modalSubtitle");
  
  const topbar = document.querySelector(".topbar");
  
  // ==================== MODAL FILTER FINAL - BACKDROP 100% BISA KLIK ======================
  const searchBtn = document.getElementById("searchBtn");
  const filterModal = document.getElementById("filterModal");
  const filterBackdrop = document.getElementById("filterBackdrop");
  const filterModalClose = document.getElementById("filterModalClose");
  const modalSearchInput = document.getElementById("modalSearchInput");
  const applyFilterBtn = document.getElementById("applyFilterBtn");
  const resetFilterBtn = document.getElementById("resetFilterBtn");

  // ==========================================
  // MESIN LOGIN FIREBASE & PROFIL USER
  // ==========================================
  const loginBtn = document.getElementById("login-google-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const loggedOutView = document.getElementById("logged-out-view");
  const loggedInView = document.getElementById("logged-in-view");
  const userNameDisplay = document.getElementById("user-name");
  const userAvatarDisplay = document.getElementById("user-avatar");
  const authGate = document.getElementById("auth-gate");
  const authGateGoogleBtn = document.getElementById("auth-gate-google-btn");
  const continueGuestBtn = document.getElementById("continue-guest-btn");
  const guestSidebarBtn = document.getElementById("guest-sidebar-btn");
  const authGateEmailToggleBtn = document.getElementById("auth-gate-email-toggle");
  const loginEmailBtn = document.getElementById("login-email-btn");
  const emailAuthForm = document.getElementById("email-auth-form");
  const emailAuthInput = document.getElementById("email-auth-input");
  const emailAuthPassword = document.getElementById("email-auth-password");
  const emailAuthSubmitBtn = document.getElementById("email-auth-submit");
  const emailAuthSwitchModeBtn = document.getElementById("email-auth-switch-mode");
  const emailAuthResetBtn = document.getElementById("email-auth-reset");
  const accountBtn = document.getElementById("account-btn");
  const accountModal = document.getElementById("accountModal");
  const accountModalBackdrop = document.getElementById("accountModalBackdrop");
  const accountModalClose = document.getElementById("accountModalClose");
  const resendVerificationBtn = document.getElementById("resend-verification-btn");
  const accountEmailStatus = document.getElementById("account-email-status");
  const dashboardBtn = document.getElementById("dashboard-btn");
  const logoutFloatingBtn = document.getElementById("logout-floating-btn");
  const verificationHoldNote = document.getElementById("verification-hold-note");
  const sidebarGreeting = document.getElementById("sidebar-greeting");

  let originalOverflow = '';
  let originalPosition = '';
  let originalTop = '';
  let originalWidth = '';
  let savedScrollPosition = 0;

  const DESKTOP_LAYOUT_QUERY = "(min-width: 768px)";

  function isDesktopLayout() {
    return window.matchMedia(DESKTOP_LAYOUT_QUERY).matches;
  }

  function applyResponsiveSidebarLayout() {
    if (!sidebar || !overlay || !hamburger) return;

    if (isDesktopLayout()) {
      sidebar.classList.add("active");
      overlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
    } else {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  }

  let accessMode = "locked";
  let isEmailRegisterMode = false;
  let shouldOpenVerificationModalAfterSignup = false;


  const authActionUrl = window.location.origin && window.location.origin !== "null"
    ? `${window.location.origin}${window.location.pathname}`
    : "https://nihonbyte.web.app/";

  const avatarPresets = [
    { id: "aqua", label: "Aqua", color: "#0ea5e9", emoji: "🌊" },
    { id: "fox", label: "Fox", color: "#f97316", emoji: "🦊" },
    { id: "dragon", label: "Dragon", color: "#10b981", emoji: "🐉" },
    { id: "bird", label: "Bird", color: "#6366f1", emoji: "🐦" },
    { id: "panda", label: "Panda", color: "#8b5cf6", emoji: "🐼" },
    { id: "cat", label: "Cat", color: "#f43f5e", emoji: "🐱" },
    { id: "ball", label: "Ball", color: "#14b8a6", emoji: "🏀" },
    { id: "bike", label: "Bike", color: "#3b82f6", emoji: "🚲" },
    { id: "bird2", label: "Robin", color: "#ef4444", emoji: "🐤" },
    { id: "cheese", label: "Cheese", color: "#eab308", emoji: "🧀" },
    { id: "football", label: "Football", color: "#f59e0b", emoji: "🏈" },
    { id: "ramen", label: "Ramen", color: "#06b6d4", emoji: "🍜" }
  ];

  let cachedUserProfile = null;

  function buildPresetAvatarDataUrl(preset) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><radialGradient id="g" cx="30%" cy="30%" r="80%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/><stop offset="100%" stop-color="${preset.color}"/></radialGradient></defs><circle cx="60" cy="60" r="58" fill="url(#g)"/><text x="60" y="73" text-anchor="middle" font-size="50">${preset.emoji}</text></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  async function loadUserProfile(uid) {
    if (!window.firebaseDb || !window.doc || !window.getDoc) return null;
    try {
      const ref = window.doc(window.firebaseDb, "users", uid);
      const snap = await window.getDoc(ref);
      if (!snap.exists()) return null;
      const data = snap.data() || {};
      return {
        displayName: data.profileDisplayName || "",
        photoURL: data.profilePhotoURL || "",
        photoSource: data.profilePhotoSource || ""
      };
    } catch (error) {
      console.error("Gagal ambil profil user:", error);
      return null;
    }
  }

  async function saveUserProfile(uid, patch = {}) {
    if (!window.firebaseDb || !window.doc || !window.setDoc) return;
    const ref = window.doc(window.firebaseDb, "users", uid);
    await window.setDoc(ref, {
      profileDisplayName: patch.displayName || "",
      profilePhotoURL: patch.photoURL || "",
      profilePhotoSource: patch.photoSource || "",
      updatedAt: new Date().toISOString()
    }, { merge: true });
  }

  function isLoggedInUser() {
    return !!window.currentUser;
  }

  function isVerifiedUser(user) {
    if (!user) return false;
    const providerIds = Array.isArray(user.providerData) ? user.providerData.map((p) => p?.providerId) : [];
    const isGoogleUser = providerIds.includes("google.com");
    if (isGoogleUser) return true;
    return !!user.emailVerified;
  }

  function isGoogleUser(user) {
    const providerIds = Array.isArray(user?.providerData) ? user.providerData.map((p) => p?.providerId) : [];
    return providerIds.includes("google.com");
  }

  function defaultDisplayName(user) {
    return user?.displayName || (user?.email ? user.email.split("@")[0] : "Pelajar");
  }

  function setSidebarGreeting(name = "") {
    if (!sidebarGreeting) return;
    const cleanName = (name || "").trim();
    const honorName = cleanName ? `${cleanName} ーさん` : "ゲスト ーさん";

    sidebarGreeting.innerHTML = `<span class="greet-jp">こんにちは</span> <span class="greet-user">${honorName}</span>`;
    sidebarGreeting.title = `こんにちは ${honorName}`;

    const length = honorName.length;
    let fontSize = 1.2;
    if (length > 26) fontSize = 0.86;
    else if (length > 22) fontSize = 0.95;
    else if (length > 18) fontSize = 1.04;
    else if (length > 14) fontSize = 1.1;
    sidebarGreeting.style.setProperty("--greet-user-size", `${fontSize}rem`);
  }

  function generateEmailDefaultUsername(email = "") {
    const localName = (email.split("@")[0] || "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .slice(0, 10);
    const randomLetters = Math.random().toString(36).slice(2, 5);
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const baseName = localName || `huruf${randomLetters}`;
    return `user_${baseName}_${randomDigits}`;
  }

  function resolveProfilePhoto(user, profile = null) {
    if (profile?.photoURL) return profile.photoURL;
    if (isGoogleUser(user) && user?.photoURL) return user.photoURL;
    return "./assets/profile-default.svg";
  }

  function applyUserAvatar(user, profile = null) {
    userAvatarDisplay.src = resolveProfilePhoto(user, profile);
  }

  function setAccessMode(mode) {
    accessMode = mode;
    document.body.classList.toggle("auth-locked", mode === "locked");
    document.body.classList.toggle("guest-mode", mode === "guest");
    document.body.classList.toggle("logged-in-mode", mode === "logged-in");

    if (authGate) authGate.classList.toggle("active", mode === "locked");

    const sidebarButtons = document.querySelectorAll("#sidebar .sidebar-tree button");
    const sidebarSummaries = document.querySelectorAll("#sidebar .sidebar-tree summary");
    const isGuest = mode === "guest";

    sidebarButtons.forEach((btn) => {
      btn.disabled = isGuest;
      btn.classList.toggle("restricted", isGuest);
    });

    sidebarSummaries.forEach((summary) => {
      summary.classList.toggle("restricted", isGuest);
      summary.setAttribute("aria-disabled", isGuest ? "true" : "false");
    });

    if (searchBtn) {
      searchBtn.disabled = isGuest;
      searchBtn.setAttribute("aria-disabled", isGuest ? "true" : "false");
      searchBtn.title = isGuest ? "Pencarian dikunci di mode tamu" : "Buka pencarian & filter";
    }
  }

  function toggleEmailAuthPanel(forceOpen = null) {
    if (!emailAuthForm) return;
    const shouldOpen = forceOpen === null ? emailAuthForm.style.display === "none" : forceOpen;
    emailAuthForm.style.display = shouldOpen ? "grid" : "none";
  }

  function syncEmailAuthMode() {
    if (!emailAuthSwitchModeBtn || !emailAuthSubmitBtn) return;
    if (isEmailRegisterMode) {
      emailAuthSubmitBtn.textContent = "Daftar akun email";
      emailAuthSwitchModeBtn.textContent = "Sudah punya akun? Masuk";
    } else {
      emailAuthSubmitBtn.textContent = "Masuk dengan Email";
      emailAuthSwitchModeBtn.textContent = "Belum punya akun? Daftar";
    }
  }

  function clearEmailAuthForm() {
    if (emailAuthForm) emailAuthForm.reset();
    if (emailAuthInput) emailAuthInput.value = "";
    if (emailAuthPassword) emailAuthPassword.value = "";
  }

  async function loginOrRegisterWithEmail(event) {
    event.preventDefault();
    const email = (emailAuthInput?.value || "").trim();
    const password = emailAuthPassword?.value || "";

    if (!email || !password) {
      alert("Isi email dan password dulu.");
      return;
    }

    if (!window.firebaseAuth) {
      alert("Firebase belum siap. Cek file firebase-config.js");
      return;
    }

    try {
      if (isEmailRegisterMode) {
        const result = await window.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
        const defaultUsername = generateEmailDefaultUsername(email);

        if (window.updateProfile) {
          await window.updateProfile(result.user, { displayName: defaultUsername });
        }
        await saveUserProfile(result.user.uid, {
          displayName: defaultUsername,
          photoURL: "",
          photoSource: "email-default"
        });

        if (window.sendEmailVerification) {
          await window.sendEmailVerification(result.user, {
            url: authActionUrl,
            handleCodeInApp: true
          });
          alert("Akun berhasil dibuat. Email verifikasi sudah dikirim.");
        }
        shouldOpenVerificationModalAfterSignup = true;
        if (verificationHoldNote) {
          verificationHoldNote.textContent = "Akun baru ditahan sampai email terverifikasi. Cek inbox lalu login ulang.";
          verificationHoldNote.style.display = "block";
        }
      } else {
        await window.signInWithEmailAndPassword(window.firebaseAuth, email, password);
      }
      clearEmailAuthForm();
      toggleEmailAuthPanel(false);
    } catch (error) {
      alert("Auth email gagal: " + error.message);
    }
  }

  async function sendResetPassword() {
    const email = (emailAuthInput?.value || "").trim();
    if (!email) {
      alert("Isi email dulu untuk reset password.");
      return;
    }
    if (!window.firebaseAuth || !window.sendPasswordResetEmail) {
      alert("Firebase belum siap.");
      return;
    }
    try {
      await window.sendPasswordResetEmail(window.firebaseAuth, email, {
        url: authActionUrl,
        handleCodeInApp: true
      });
      alert("Link reset password sudah dikirim ke email.");
    } catch (error) {
      alert("Gagal kirim reset password: " + error.message);
    }
  }

  function updateAccountStatusUI(user) {
    if (!accountEmailStatus) return;
    if (!user) {
      accountEmailStatus.textContent = "Status verifikasi: -";
      return;
    }
    const status = user.emailVerified ? "✅ Sudah terverifikasi" : "⚠️ Belum terverifikasi";
    accountEmailStatus.textContent = `Email: ${user.email || "-"} | ${status}`;
  }

  function openAccountModal() {
    if (!window.currentUser) return;
    updateAccountStatusUI(window.currentUser);
    accountModal?.classList.add("active");
    accountModal?.setAttribute("aria-hidden", "false");
  }

  function closeAccountModal() {
    accountModal?.classList.remove("active");
    accountModal?.setAttribute("aria-hidden", "true");
  }

  async function handleEmailActionFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const oobCode = params.get("oobCode");
    if (!mode || !oobCode || !window.firebaseAuth) return;

    try {
      if (mode === "verifyEmail") {
        if (!window.applyActionCode) return;
        await window.applyActionCode(window.firebaseAuth, oobCode);
        alert("Email berhasil diverifikasi. Silakan login ulang.");
      } else if (mode === "resetPassword") {
        if (!window.verifyPasswordResetCode || !window.confirmPasswordReset) return;
        await window.verifyPasswordResetCode(window.firebaseAuth, oobCode);
        const newPassword = prompt("Masukkan password baru (minimal 6 karakter):", "");
        if (!newPassword) {
          alert("Reset password dibatalkan. Buka link reset lagi jika diperlukan.");
          return;
        }
        if (newPassword.length < 6) {
          alert("Password baru minimal 6 karakter.");
          return;
        }
        await window.confirmPasswordReset(window.firebaseAuth, oobCode, newPassword);
        alert("Password berhasil diubah. Silakan login dengan password baru.");
      }
    } catch (error) {
      alert("Proses tautan email gagal: " + error.message);
    } finally {
      const cleanUrl = `${window.location.origin}${window.location.pathname}`;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }

  function loginWithGoogle() {
    if (!window.firebaseAuth || !window.firebaseProvider) {
      alert("Mesin Firebase belum siap! Tunggu sebentar atau refresh halaman.");
      return;
    }

    if (loginBtn) loginBtn.innerHTML = "Memuat...";
    if (authGateGoogleBtn) authGateGoogleBtn.classList.add("loading");

    window.signInWithPopup(window.firebaseAuth, window.firebaseProvider)
      .then((result) => {
        console.log("Login Berhasil:", result.user.displayName);
      })
      .catch((error) => {
        console.error("Gagal Login:", error);
        alert("Gagal login: " + error.message);
        if (loginBtn) loginBtn.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google"><span>Masuk dengan Google</span>`;
      })
      .finally(() => {
        if (authGateGoogleBtn) authGateGoogleBtn.classList.remove("loading");
      });
  }

  function continueAsGuest() {
    window.currentUser = null;
    if (loggedOutView) loggedOutView.style.display = "block";
    if (loggedInView) loggedInView.style.display = "none";
    setSidebarGreeting("");
    setAccessMode("guest");
    closeSidebar();
    render();
  }

  // Fungsi Login
  if (loginBtn) {
    loginBtn.addEventListener("click", loginWithGoogle);
  }

  if (authGateGoogleBtn) {
    authGateGoogleBtn.addEventListener("click", loginWithGoogle);
  }

  if (continueGuestBtn) {
    continueGuestBtn.addEventListener("click", continueAsGuest);
  }

  if (guestSidebarBtn) {
    guestSidebarBtn.addEventListener("click", continueAsGuest);
  }

  if (authGateEmailToggleBtn) {
    authGateEmailToggleBtn.addEventListener("click", () => {
      clearEmailAuthForm();
      toggleEmailAuthPanel();
      syncEmailAuthMode();
    });
  }

  if (loginEmailBtn) {
    loginEmailBtn.addEventListener("click", () => {
      setAccessMode("locked");
      clearEmailAuthForm();
      toggleEmailAuthPanel(true);
      syncEmailAuthMode();
      closeSidebar();
    });
  }

  if (emailAuthForm) emailAuthForm.addEventListener("submit", loginOrRegisterWithEmail);

  if (emailAuthSwitchModeBtn) {
    emailAuthSwitchModeBtn.addEventListener("click", () => {
      isEmailRegisterMode = !isEmailRegisterMode;
      clearEmailAuthForm();
      syncEmailAuthMode();
    });
  }

  if (emailAuthResetBtn) {
    emailAuthResetBtn.addEventListener("click", sendResetPassword);
  }

  if (accountBtn) accountBtn.addEventListener("click", openAccountModal);
  if (accountModalClose) accountModalClose.addEventListener("click", closeAccountModal);
  if (accountModalBackdrop) accountModalBackdrop.addEventListener("click", closeAccountModal);

  if (resendVerificationBtn) {
    resendVerificationBtn.addEventListener("click", async () => {
      if (!window.currentUser || !window.sendEmailVerification) return;
      try {
        await window.sendEmailVerification(window.currentUser, {
          url: authActionUrl,
          handleCodeInApp: true
        });
        alert("Email verifikasi dikirim ulang.");
      } catch (error) {
        alert("Gagal kirim verifikasi: " + error.message);
      }
    });
  }


  // Fungsi Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.signOut(window.firebaseAuth).then(() => {
        console.log("User berhasil keluar.");
      });
    });
  }

  if (logoutFloatingBtn) {
    logoutFloatingBtn.addEventListener("click", () => {
      window.signOut(window.firebaseAuth).then(() => {
        console.log("User berhasil keluar.");
      });
    });
  }

  // Proses tautan aksi dari email (verifikasi / reset password)
  handleEmailActionFromUrl();

  // Deteksi Perubahan Status Login (Otomatis jalan saat halaman dibuka)
  if (window.firebaseAuth && window.onAuthStateChanged) {
    window.onAuthStateChanged(window.firebaseAuth, async (user) => {
      if (user && isVerifiedUser(user)) {
        loggedOutView.style.display = "none";
        loggedInView.style.display = "flex";
        if (logoutFloatingBtn) logoutFloatingBtn.style.display = "inline-flex";
        cachedUserProfile = await loadUserProfile(user.uid);
        const resolvedName = cachedUserProfile?.displayName || defaultDisplayName(user);
        userNameDisplay.textContent = resolvedName;
        setSidebarGreeting(resolvedName);
        applyUserAvatar(user, cachedUserProfile);
        window.currentUser = user;
        updateAccountStatusUI(user);
        setAccessMode("logged-in");
        if (verificationHoldNote) verificationHoldNote.style.display = "none";
        viewMode = "vocab";
        selectedType = "verb-adj-only";
        selectedLevel = "all";
        render();
        if (shouldOpenVerificationModalAfterSignup && !user.emailVerified) {
          openAccountModal();
        }
        shouldOpenVerificationModalAfterSignup = false;
      } else if (user && !isVerifiedUser(user)) {
        if (window.currentUser) window.currentUser = null;
        if (loggedOutView) loggedOutView.style.display = "block";
        if (loggedInView) loggedInView.style.display = "none";
        if (logoutFloatingBtn) logoutFloatingBtn.style.display = "none";
        setAccessMode("locked");
        updateAccountStatusUI(user);
        if (verificationHoldNote) {
          verificationHoldNote.textContent = "Email belum terverifikasi. Silakan verifikasi dulu sebelum masuk ke aplikasi.";
          verificationHoldNote.style.display = "block";
        }
        setSidebarGreeting("");
      } else {
        loggedOutView.style.display = "block";
        loggedInView.style.display = "none";
        if (logoutFloatingBtn) logoutFloatingBtn.style.display = "none";
        loginBtn.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google"><span>Masuk dengan Google</span>`;
        window.currentUser = null;
        updateAccountStatusUI(null);
        if (accessMode !== "guest") setAccessMode("locked");
        shouldOpenVerificationModalAfterSignup = false;
        setSidebarGreeting("");
      }
    });
  }

  // Fungsi untuk mengambil sejumlah N soal acak dari sebuah array
  function getRandomQuestions(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  function enforceMobileTopbarOrder() {
    const topbar = document.querySelector(".topbar");
    if (!topbar || !resultInfo || !searchBtn) return;

    if (window.innerWidth <= 767) {
      topbar.insertBefore(resultInfo, searchBtn);
      topbar.appendChild(searchBtn);
      resultInfo.style.position = "static";
      resultInfo.style.transform = "none";
      resultInfo.style.marginLeft = "auto";
      resultInfo.style.marginRight = "6px";
      searchBtn.style.marginLeft = "0";
    } else {
      resultInfo.style.position = "";
      resultInfo.style.transform = "";
      resultInfo.style.marginLeft = "";
      resultInfo.style.marginRight = "";
      searchBtn.style.marginLeft = "";
    }
  }

  let isTesting = false;
  let currentExerciseMeta = { type: "", level: "" };
  let currentQuizData = [];
  let quizIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 0;
  let sessionTimeLeft = 0;
  let bodyScrollY = 0;
  let quizOriginalBodyOverflow = "";
  let quizOriginalHtmlOverflow = "";
  let quizOriginalBodyHeight = "";
  let quizOriginalHtmlHeight = "";
  let isQuizScrollLocked = false;

// ==========================================
// 1. Mesin Latihan Baru (Sumber Khusus latihan-data.js)
// ==========================================
  function lockQuizScroll() {
    if (isQuizScrollLocked) return;
    quizOriginalBodyOverflow = document.body.style.overflow || "";
    quizOriginalHtmlOverflow = document.documentElement.style.overflow || "";
    quizOriginalBodyHeight = document.body.style.height || "";
    quizOriginalHtmlHeight = document.documentElement.style.height || "";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100dvh";
    document.documentElement.style.height = "100dvh";
    isQuizScrollLocked = true;
  }

  function unlockQuizScroll() {
    if (!isQuizScrollLocked) return;
    document.body.style.overflow = quizOriginalBodyOverflow;
    document.documentElement.style.overflow = quizOriginalHtmlOverflow;
    document.body.style.height = quizOriginalBodyHeight;
    document.documentElement.style.height = quizOriginalHtmlHeight;
    isQuizScrollLocked = false;
  }
  
  const latihanSectionLabel = {
    "goi-kanji-reading": "Membaca Kanji",
    "goi-orthography": "Ortografi",
    "goi-context-expression": "Ekspresi yang didefinisikan secara kontekstual",
    "goi-paraphrase": "Parafrasa",
    "goi-usage": "Penggunaan",
    "bunpou-form": "Tata bahasa kalimat (Memilih bentuk tata bahasa)",
    "bunpou-composition": "Tata bahasa kalimat (Komposisi kalimat)",
    "bunpou-text": "Tata Bahasa Teks",
    "dokkai-reading": "Dokkai Membaca",
    "choukai-listening": "Choukai Mendengarkan",
  };

  const goiSectionOrder = [
    "goi-kanji-reading",
    "goi-orthography",
    "goi-context-expression",
    "goi-paraphrase",
    "goi-usage",
  ];

  const bunpouSectionOrder = [
    "bunpou-form",
    "bunpou-composition",
    "bunpou-text",
  ];

  function getSectionProgress(type, section) {
    const order = type === "bunpou" ? bunpouSectionOrder : goiSectionOrder;
    const idx = order.indexOf(section);
    return { index: idx >= 0 ? idx + 1 : 1, total: order.length };
  }

  function buildBunpouSessionQuestions(level) {
    const source = window.latihanBunpouReal && window.latihanBunpouReal[level] ? window.latihanBunpouReal[level] : {};
    const all = [];

    const sessions = [
      { key: "bunpou-form", label: latihanSectionLabel["bunpou-form"] },
      { key: "bunpou-composition", label: latihanSectionLabel["bunpou-composition"] },
      { key: "bunpou-text", label: latihanSectionLabel["bunpou-text"] }
    ];

    sessions.forEach((session, idx) => {
      const questionsData = source[session.key] || [];
      
      // LOGIKA BARU: Acak, terus ambil 15 biji per kategori.
      // Total = 15 x 3 kategori = 45 Soal. Pas buat 40-55 menit.
      const shuffledData = shuffleArray([...questionsData]).slice(0, 15);
      
      const picked = shuffledData.map((q) => ({
        prompt: q.question,
        options: q.options,
        answer: q.answer,
        translation: q.translation, 
        level: level,
        section: session.key,
        sectionLabel: session.label,
        sectionIndex: idx + 1,
        sectionTotal: sessions.length
      }));
      
      all.push(...picked);
    });

    return all;
  }
  
  function buildGoiSessionQuestions(level) {
    const source = window.latihanGoiReal && window.latihanGoiReal[level] ? window.latihanGoiReal[level] : {};
    const all = [];

    const sessions = [
      { key: "goi-kanji-reading", label: latihanSectionLabel["goi-kanji-reading"] },
      { key: "goi-orthography", label: latihanSectionLabel["goi-orthography"] },
      { key: "goi-context-expression", label: latihanSectionLabel["goi-context-expression"] },
      { key: "goi-paraphrase", label: latihanSectionLabel["goi-paraphrase"] }
    ];

    sessions.forEach((session, idx) => {
      const questionsData = source[session.key] || [];
      
      // LOGIKA BARU: Acak dulu, terus ambil cuma 10 biji per kategori!
      // Jadi total soal = 10 x 4 kategori = 40 Soal. Pas buat 20-25 menit.
      const shuffledData = shuffleArray([...questionsData]).slice(0, 10);
      
      const picked = shuffledData.map((q) => ({
        prompt: q.question,
        options: q.options,
        answer: q.answer,
        translation: q.translation, 
        level: level,
        section: session.key,
        sectionLabel: session.label,
        sectionIndex: idx + 1,
        sectionTotal: sessions.length
      }));
      
      all.push(...picked);
    });

    return all;
  }

  function formatSessionTime(seconds) {
    const safe = Math.max(0, seconds);
    const mm = String(Math.floor(safe / 60)).padStart(2, "0");
    const ss = String(safe % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function getLatihanVocabularySource() {
    return Array.isArray(window.latihanVocabularyData) ? window.latihanVocabularyData : [];
  }

  function getLatihanPatternSource(level) {
    if (window.latihanPatternData && Array.isArray(window.latihanPatternData[level])) return window.latihanPatternData[level];
    return [];
  }

  function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  // TIMPA FUNGSI INI DI APP.JS LU
  function buildExerciseQuestions(mainType, section, level) {
    if (mainType === "goi") return buildGoiSessionQuestions(level);
    if (mainType === "bunpou") return buildBunpouSessionQuestions(level);
    if (mainType === "dokkai") return buildDokkaiSessionQuestions(level); 
    return [];
  }

  function buildDokkaiSessionQuestions(level) {
    const source = window.latihanDokkaiReal && window.latihanDokkaiReal[level] ? window.latihanDokkaiReal[level] : [];
    const all = [];

    // Acak urutan Teks Bacaannya (Biar gak bosen)
    const shuffledPassages = shuffleArray([...source]).slice(0, 5); // Ambil 5 teks acak per sesi

    shuffledPassages.forEach((item, passageIndex) => {
      item.questions.forEach((q) => {
        all.push({
          passage: item.passage, // Teks Induk dibawa ke setiap anak soal
          prompt: q.question,
          options: q.options,
          answer: q.answer,
          translation: q.translation,
          level: level,
          section: "dokkai-reading",
          sectionLabel: "読解 (Dokkai Membaca)",
          sectionIndex: passageIndex + 1,
          sectionTotal: shuffledPassages.length
        });
      });
    });

    return all;
  }

  function generateExerciseOptions(question) {
    // 🚀 MANTRA BARU: Kalau soal dari format JLPT bawa 'options', pakai itu & acak urutannya!
    if (question.options && Array.isArray(question.options) && question.options.length > 0) {
      return shuffleArray([...question.options]);
    }
    
    // Fallback (Cadangan) kalau format data lama
    const pool = currentQuizData.map((q) => q.answer).filter((answer) => answer !== question.answer);
    const uniqueWrong = Array.from(new Set(pool));
    const wrongChoices = shuffleArray(uniqueWrong).slice(0, 3);
    while (wrongChoices.length < 3) wrongChoices.push("-");
    return shuffleArray([question.answer, ...wrongChoices]);
  }

  function startExercise(mainType, section, level) {
    if (!isLoggedInUser()) {
      openInfoModal("<h3>Mode Latihan Wajib Login 🔒</h3><p>Silakan masuk dengan Google dulu untuk membuka fitur latihan.</p>");
      return;
    }
    const sectionKey = section || (mainType === "bunpou" ? "bunpou-form" : "goi-kanji-reading");
    const questions = buildExerciseQuestions(mainType, section, level).filter((q) => q.prompt && q.answer);

    if (questions.length < 5) {
      alert("Data latihan belum cukup di level ini. Silakan pilih level lain.");
      return;
    }

    isTesting = true;
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.style.display = "none";
    }
    currentExerciseMeta = {
      type: mainType,
      section: sectionKey,
      sectionLabel: latihanSectionLabel[sectionKey] || sectionKey,
      level,
    };

    lockQuizScroll();
    quizIndex = 0;
    score = 0;
    
    currentQuizData = questions;

    // 🚀 MANTRA BARU: Timer dibedakan antara Kosakata, Tata Bahasa, dan Dokkai
    let defaultMinutes = 20;
    if (mainType === "bunpou") {
      defaultMinutes = level === "N5" ? 40 : (level === "N4" ? 55 : 40);
    } else if (mainType === "dokkai") {
      defaultMinutes = level === "N5" ? 40 : (level === "N4" ? 55 : 40); // 🚀 N5=40m, N4=55m
    } else { // Goi
      defaultMinutes = level === "N5" ? 20 : (level === "N4" ? 25 : 20);
    }
    sessionTimeLeft = defaultMinutes * 60;

    renderQuiz();
    startTimer();
  }

  // ==========================================
  // FITUR NERBANGIN SKOR KE FIREBASE CLOUD
  // ==========================================
  async function saveScoreToCloud(exerciseType, level, correctCount, totalCount, percentage) {
    // Kalau user belum login atau main mode offline, cuekin aja (gak usah disimpen)
    if (!window.currentUser || !window.firebaseDb || !window.doc || !window.setDoc) {
      console.log("User belum login, skor cuma tampil di layar.");
      return;
    }

    try {
      const uid = window.currentUser.uid;
      const timeId = new Date().getTime().toString(); // Bikin ID unik berdasarkan detik ini
      
      // Bikin dokumen di folder: users -> [UID USER LU] -> history_latihan -> [Waktu Saat Ini]
      const scoreRef = window.doc(window.firebaseDb, "users", uid, "history_latihan", timeId);

      // Simpan datanya!
      await window.setDoc(scoreRef, {
        kategori: exerciseType,
        level: level,
        benar: correctCount,
        total_soal: totalCount,
        nilai_persen: percentage,
        waktu: new Date().toLocaleString("id-ID") // Waktu lokal Indonesia
      });
      console.log("✅ Skor berhasil diterbangkan ke Cloud!");
    } catch (err) {
      console.error("❌ Waduh, gagal nyimpen skor ke Cloud:", err);
    }
  }

  // TIMPA FUNGSI INI FULL DARI ATAS SAMPAI BAWAH DI APP.JS
  function renderQuiz() {
    if (quizIndex >= currentQuizData.length) {
      endQuiz();
      return;
    }

    const item = currentQuizData[quizIndex];

    // 🚀 FIX LABEL BIAR DOKKAI GAK DITULIS KOSAKATA LAGI
    let mainLabel = "";
    if (currentExerciseMeta.type === "bunpou") {
      mainLabel = "言語知識（文法） / Pengetahuan Bahasa (Tata Bahasa)";
    } else if (currentExerciseMeta.type === "dokkai") {
      mainLabel = "読解 / Dokkai (Membaca)";
    } else {
      mainLabel = "言語知識（文字・語彙） / Pengetahuan Bahasa (Kosakata)";
    }

    const dynamicSection = item.section || currentExerciseMeta.section;
    const dynamicSectionLabel = item.sectionLabel || currentExerciseMeta.sectionLabel;
    
    // Penyesuaian Index (Biar Dokkai nampilin Teks ke berapa)
    const sectionProgress = item.sectionIndex
      ? { index: item.sectionIndex, total: item.sectionTotal || (currentExerciseMeta.type === "bunpou" ? 3 : 5) }
      : getSectionProgress(currentExerciseMeta.type, dynamicSection);
      
    const options = generateExerciseOptions(item);
    
    if (resultInfo) resultInfo.textContent = "頑張ってください";

    grid.className = "";
    grid.classList.add("quiz-active-mode");
    document.body.classList.add("training-session");

    // 🚀 CEK APAKAH INI DOKKAI?
    const isDokkai = currentExerciseMeta.type === "dokkai";

    if (isDokkai) {
      // ==========================================
      // LAYOUT KHUSUS DOKKAI (SPLIT SCREEN)
      // ==========================================
      grid.innerHTML = `
        <div class="dokkai-wrapper-pro">
          <button id="finishBtnManual">Akhiri Test</button>

          <div class="dokkai-passage-side">
            <div class="dokkai-passage-content">
              ${item.passage ? item.passage.replace(/\n/g, '<br><br>') : "Teks bacaan tidak ditemukan."}
            </div>
          </div>

          <div class="dokkai-question-side">
            <p class="quiz-section-title">${mainLabel} • ${currentExerciseMeta.level}</p>
            <p class="quiz-subtitle">Teks ${sectionProgress.index} dari ${sectionProgress.total}</p>

            <div class="quiz-head-pro">
              <div class="quiz-progress-text">Soal ${quizIndex + 1}/${currentQuizData.length}</div>
              <div class="quiz-timer-text">Timer <span id="quiz-timer">${formatSessionTime(sessionTimeLeft)}</span></div>
            </div>

            <div class="quiz-qcard-pro" style="min-height: 120px !important; padding: 15px 25px !important;">
              <h2 class="quiz-question-main" style="font-size: clamp(1.4rem, 3vw, 2.2rem) !important;">${item.prompt}</h2>
            </div>

            <div class="quiz-options-pro">
              ${options.map((opt) => `<button class="quiz-opt-btn-pro" data-answer="${opt}">${opt}</button>`).join("")}
            </div>
          </div>
        </div>
      `;
    } else {
      // ==========================================
      // LAYOUT LAMA (GOI & BUNPOU)
      // ==========================================
      grid.innerHTML = `
        <div class="quiz-wrapper-pro">
          <button id="finishBtnManual">Akhiri Test</button>
          <p class="quiz-section-title">${mainLabel} • ${currentExerciseMeta.level}</p>
          <p class="quiz-subtitle">${sectionProgress.index}. ${dynamicSectionLabel}</p>

          <div class="quiz-head-pro">
            <div class="quiz-progress-text">Soal ${quizIndex + 1}/${currentQuizData.length}</div>
            <div class="quiz-timer-text">Timer <span id="quiz-timer">${formatSessionTime(sessionTimeLeft)}</span></div>
          </div>

          <div class="quiz-qcard-pro">
            <h1 class="quiz-question-main">${item.prompt}</h1>
          </div>

          <div class="quiz-options-pro">
            ${options.map((opt) => `<button class="quiz-opt-btn-pro" data-answer="${opt}">${opt}</button>`).join("")}
          </div>
        </div>
      `;
    }

    // Pasang Event Listener buat pilihan ganda dan tombol akhir
    document.querySelectorAll(".quiz-opt-btn-pro").forEach((btn) => {
      btn.addEventListener("click", () => checkAnswer(btn.dataset.answer));
    });

    document.getElementById("finishBtnManual")?.addEventListener("click", confirmEndQuiz);
  }
  
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      sessionTimeLeft--;
      const timerDisplay = document.getElementById("quiz-timer");
      if (timerDisplay) timerDisplay.textContent = formatSessionTime(sessionTimeLeft);

      if (sessionTimeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

  function checkAnswer(selected) {
    clearInterval(timer);
    const item = currentQuizData[quizIndex];

    // 🚀 MANTRA BARU: Rekam jejak jawaban user (buat di-review nanti)
    item.userAnswer = selected;

    if (selected === item.answer) score++;

    document.querySelectorAll(".quiz-opt-btn-pro").forEach((btn) => {
      btn.disabled = true;
      btn.style.cursor = "default";

      if (btn.dataset.answer === item.answer) {
        btn.style.background = "#4ade80";
        btn.style.color = "white";
        btn.style.borderColor = "#22c55e";
      } else if (btn.dataset.answer === selected && selected !== item.answer) {
        btn.style.background = "#fb7185";
        btn.style.color = "white";
        btn.style.borderColor = "#e11d48";
      }
    });

    setTimeout(() => {
      quizIndex++;
      renderQuiz();
    }, 900);
  }

  function endQuiz() {
    isTesting = false;
    document.body.classList.remove("training-session");
    clearInterval(timer);
    sessionTimeLeft = 0;
    unlockQuizScroll();

    const totalSoal = currentQuizData.length;
    // Hitung persentase skala 100
    const percentage = totalSoal > 0 ? Math.round((score / totalSoal) * 100) : 0;
    saveScoreToCloud(currentExerciseMeta.type, currentExerciseMeta.level, score, totalSoal, percentage);

    let statusLabel = "";
    let colorTheme = "";
    let gradeMsg = "";

    // 🚀 LOGIKA LULUS / GAGAL (Batas 75)
    if (percentage >= 75) {
      statusLabel = "LULUS ✅";
      colorTheme = "#4ade80"; 
      const passQuotes = [
        "Kerja kerasmu tidak mengkhianati hasil! Pertahankan semangat ini, Bosku! 🔥",
        "Sugoii! Jalan menuju skor N1 semakin terbuka lebar. Gas terus! 🚀",
        "Luar biasa! Sensei bangga padamu wkwkwk. Jangan cepat puas ya! ✨"
      ];
      gradeMsg = passQuotes[Math.floor(Math.random() * passQuotes.length)];
    } else {
      statusLabel = "GAGAL ❌";
      colorTheme = "#fb7185"; 
      const failQuotes = [
        "Jangan putus asa! Kegagalan adalah bumbu penyedap kesuksesan. Yuk review lagi! 💪",
        "Belum lulus bukan berarti gak bisa. Tarik napas, pelajari salahnya, hajar lagi! 💥",
        "Ganbatte! Samurai yang kuat adalah yang paling sering bangkit dari kekalahan! 🎌"
      ];
      gradeMsg = failQuotes[Math.floor(Math.random() * failQuotes.length)];
    }

    const message = `
      <div style="text-align: center; padding: 15px;">
        <h2 style="color: ${colorTheme}; margin-bottom: 5px;">${statusLabel}</h2>
        <div style="font-size: 4.5rem; font-weight: 800; margin: 15px 0; color: #ffffff; line-height: 1;">${percentage}<span style="font-size: 1.8rem; color: #9ca3af;">/100</span></div>
        <p style="font-size: 1.1rem; font-weight: 600; color: #f3f4f6; margin-bottom: 10px;">${gradeMsg}</p>
        <p style="color: #9ca3af; margin-top: 10px; font-size: 0.95rem; margin-bottom: 25px;">Benar: <strong style="color: #4ade80;">${score}</strong> | Total Soal: ${totalSoal}</p>
        
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <button onclick="window.renderReview()" style="background: #ffffff; color: #1e293b; border: 2px solid #cbd5e1; padding: 14px 30px; border-radius: 999px; cursor: pointer; font-size: 1.05rem; font-weight: bold; width: 100%; transition: all 0.2s ease;">🔍 Tinjau Latihan</button>
          <button onclick="location.reload()" style="background: #ff4d6d; color: white; border: none; padding: 14px 30px; border-radius: 999px; cursor: pointer; font-size: 1.05rem; font-weight: bold; box-shadow: 0 4px 15px rgba(255, 77, 109, 0.4); width: 100%;">🏠 KEMBALI KE MENU</button>
        </div>
      </div>
    `;
    openInfoModal(message);
  }

  function confirmEndQuiz() {
    if (confirm("Yakin ingin mengakhiri test sekarang? Skor saat ini akan langsung dihitung.")) endQuiz();
  }

  // ==========================================
  // FITUR BARU: HALAMAN TINJAU LATIHAN (REVIEW)
  // ==========================================
  // TIMPA fungsi window.renderReview yang lama dengan yang ini
  window.renderReview = function() {
    closeModal(); 
    document.body.classList.add("review-mode-active");
    grid.className = "";
    grid.classList.add("review-active-mode"); // Ini trigger CSS flexbox tadi
    
    document.body.style.overflow = "hidden";

    let reviewHTML = `
      <div class="review-wrapper">
        <div class="review-header">
          <h2 style="margin:0; color:#1e293b; font-size:1.5rem;">🔍 Evaluasi Latihan</h2>
          <button onclick="location.reload()" style="background:#ef4444; color:white; border:none; padding:8px 20px; border-radius:8px; cursor:pointer; font-weight:bold;">Tutup & Selesai</button>
        </div>
        
        <div class="review-content">
    `;

    currentQuizData.forEach((q, index) => {
      const isCorrect = q.userAnswer === q.answer;
      const statusText = isCorrect ? "✅ BENAR" : "❌ SALAH";
      const statusClass = isCorrect ? "benar" : "salah";
      const userColor = isCorrect ? "#16a34a" : "#dc2626";

      // Teks jawaban user (handle kalau kosong)
      const userAnswerDisplay = q.userAnswer ? q.userAnswer : "<i style='color:#94a3b8'>Tidak dijawab</i>";

      reviewHTML += `
        <div class="review-card ${statusClass}">
          
          <div class="review-left-col">
            <div style="margin-bottom:10px; font-weight:bold; color:#64748b; display:flex; justify-content:space-between;">
              <span>Soal ${index + 1} • ${q.sectionLabel || '-'}</span>
              <span style="color:${userColor}">${statusText}</span>
            </div>
            
            <h3 style="font-size:1.3rem; margin:0 0 15px 0; color:#0f172a; line-height:1.4;">${q.prompt}</h3>
            
            <div style="background:#f8fafc; padding:10px; border-radius:8px; border:1px solid #e2e8f0;">
              <div style="font-size:0.85rem; color:#64748b; margin-bottom:4px;">Jawabanmu:</div>
              <div style="font-size:1.1rem; font-weight:bold; color:${userColor};">${userAnswerDisplay}</div>
            </div>
          </div>

          <div class="review-right-col">
             <div style="margin-bottom:15px;">
                <div style="font-size:0.85rem; color:#64748b; margin-bottom:4px;">Kunci Jawaban:</div>
                <div style="font-size:1.2rem; font-weight:bold; color:#16a34a;">${q.answer}</div>
             </div>

             <div class="explanation-box">
                <strong>💡 Penjelasan / Arti:</strong><br>
                ${q.translation || "Tidak ada penjelasan tambahan."}
             </div>
          </div>

        </div>
      `;
    });

    reviewHTML += `
        </div> </div> `;

    grid.innerHTML = reviewHTML;
  };
      
    searchBtn.addEventListener("click", () => {
      if (accessMode === "guest") {
        openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Pencarian & filter dikunci untuk mode tamu. Silakan login untuk membuka fitur ini.</p>");
        return;
      }
      if (document.body.classList.contains("review-mode-active")) return;
      if (isTesting) {
        openInfoModal(`
          <div style="text-align: center; padding: 10px;">
            <h3 style="color: #ff4d6d; margin-bottom: 10px;">集中して！ (Fokus!) 🎯</h3>
            <p style="font-size: 1.1rem;">Selesaikan ujianmu dulu sebelum mencari kosakata lain!</p>
          </div>
        `);
        return;
      }
      bodyScrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${bodyScrollY}px`;

      // --- RESET TAMPILAN MODAL SAAT DIBUKA ---
      // 1. Kosongkan input pencarian
      if (modalSearchInput) modalSearchInput.value = "";
      
      // 2. Reset Level JLPT kembali ke "Semua Level"
      document.querySelectorAll("#levelGrid .level-btn").forEach(b => b.classList.remove("active"));
      document.querySelector('#levelGrid [data-level="all"]')?.classList.add("active");
      
      // 3. Reset Kategori Khusus (Lepas semua pilihan)
      document.querySelectorAll("#categoryGrid .cat-btn").forEach(b => b.classList.remove("active"));
      // ----------------------------------------

      filterModal.classList.add("active");
      filterModal.setAttribute("aria-hidden", "false");
      
      // FOKUS INPUT: Hanya jalan di Desktop (lebar layar > 768px). 
      // Di HP tidak akan fokus otomatis, jadi keyboard tidak akan tiba-tiba muncul!
      if (modalSearchInput && window.innerWidth > 768) {
        modalSearchInput.focus();
      }
    });
  
    function closeFilterModal() {
      filterModal.classList.remove("active");
      filterModal.setAttribute("aria-hidden", "true");

      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, bodyScrollY);
    }

    // ==================== BACKDROP FIX (ROBUST) ====================
    filterModal.addEventListener("click", (e) => {
      if (e.target === filterModal || e.target === filterBackdrop) {
        closeFilterModal();
      }
    });

    if (filterModalClose) filterModalClose.addEventListener("click", closeFilterModal);

    // ==================== TOGGLE LEVEL (klik lagi = lepas) ====================
    document.querySelectorAll("#levelGrid .level-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const isAll = btn.dataset.level === "all";
        if (isAll) {
          document.querySelectorAll("#levelGrid .level-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        } else {
          if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            document.querySelector('[data-level="all"]').classList.add("active");
          } else {
            document.querySelectorAll("#levelGrid .level-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
          }
        }
      });
    });

    // Category buttons
    // Category buttons (Bisa di-toggle / lepas pilihan)
    document.querySelectorAll("#categoryGrid .cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        // Cek apakah tombol sedang aktif
        if (btn.classList.contains("active")) {
          // Kalau sudah aktif, klik lagi berarti LEPAS pilihan (unselect)
          btn.classList.remove("active");
        } else {
          // Kalau belum aktif, matikan yang lain lalu aktifkan yang ini
          document.querySelectorAll("#categoryGrid .cat-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        }
      });
    });

    function applyModalFilter() {
      const activeLevel = document.querySelector("#levelGrid .level-btn.active")?.dataset.level || "all";
      let activeType = document.querySelector("#categoryGrid .cat-btn.active")?.dataset.type || "verb-adj-only";

      // KUNCI GLOBAL SEARCH POP-UP: Buka gembok jadi "all" kalau user cuma ngetik tapi gak milih kategori
      if (modalSearchInput && modalSearchInput.value.trim() !== "" && !document.querySelector("#categoryGrid .cat-btn.active")) {
        activeType = "all";
      }

      selectedLevel = activeLevel;
      selectedType = activeType;
      viewMode = "vocab";
      if (search && modalSearchInput) search.value = modalSearchInput.value.trim();

      closeFilterModal();
      render();
    }

    // Apply & Reset
    if (applyFilterBtn) {
      applyFilterBtn.addEventListener("click", applyModalFilter);
    }

    if (modalSearchInput) {
      modalSearchInput.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        event.preventDefault();
        applyModalFilter();
      });
    }

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener("click", () => {
        selectedLevel = "all";
        selectedType = "verb-adj-only"; // Balik ke default halaman awal
        if (search) search.value = "";
        if (modalSearchInput) modalSearchInput.value = "";

        document.querySelectorAll(".level-btn, .cat-btn").forEach(b => b.classList.remove("active"));
        document.querySelector('#levelGrid [data-level="all"]')?.classList.add("active");

        closeFilterModal();
        render();
      });
    }
  
  // ===== IOS DETECTOR - SEMUA iOS DEVICE (Safari + Chrome iOS) =====
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.platform) ||
           (navigator.platform === 'MacIntel' && 'ontouchend' in document);
  }

  if (isIOS()) {
    document.documentElement.classList.add('ios-device');
    console.log('🛡️ NihonByte iOS Safe Mode AKTIF');

    const style = document.createElement("style");
    style.innerHTML = `
      * {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);

    document.body.style.webkitOverflowScrolling = "touch";

    window.addEventListener("resize", () => {
      document.body.style.height = window.innerHeight + "px";
    });
  }

  let selectedLevel = "all";
  let selectedType = "verb-adj-only";
  let viewMode = "vocab";
  let currentPage = 1;      
  let lastQueryState = "";  
  
  const typeLabelMap = {
    "verb-godan": "Kata Kerja Godan",
    "verb-ru": "Kata Kerja Ichidan",
    "verb-irregular": "Kata Kerja Suru",
    "adj-i": "Kata Sifat I",
    "adj-na": "Kata Sifat Na",
    "noun-time-weather": "Kosakata Waktu & Cuaca",
    "noun-number-counter": "Kosakata Angka & Satuan",
    "noun-house-family": "Kosakata Rumah & Keluarga",
    "noun-body-medical": "Kosakata Tubuh & Kesehatan",
    "noun-work": "Kosakata Dunia Kerja Umum",
    "noun-vehicle": "Kosakata Kendaraan",
    "noun-caregiving": "Kosakata Keperawatan",
    "noun-animal": "Kosakata Nama Binatang",
    "noun-factory": "Kosakata Pabrik & Manufaktur",
    "noun-agriculture": "Kosakata Pertanian",
    "noun-profession": "Kosakata Profesi",
    "noun-restaurant": "Kosakata Restoran",
    "noun-school": "Kosakata Sekolah",
    "noun-place": "Kosakata Tempat & Bangunan",
    "question": "Kosakata Kata Tanya",
    "adv": "Kosakata Keterangan",
    "noun": "Kosakata",
    "ekspresi": "Ungkapan Umum",
    "expression": "Ungkapan Umum",
    "ungkapan umum": "Ungkapan Umum",
    "verb-adj-only": "Kosakata Utama",
    "pattern": "Pola Kalimat",
    "activity": "Kosakata Aktivitas",
    "noun-hobby": "Kosakata Hobi",
    "noun-sports": "Kosakata Olahraga",
    "noun-color": "Kosakata Warna",
  };

  function shouldShowLevelInResult(typeKey) {
    return ["verb-godan", "verb-ru", "verb-irregular", "adj-i", "adj-na"].includes(typeKey);
  }

  function formatResultInfo(totalCount, options = {}) {
    const { typeOverride = null, levelOverride = null, includeLevel = false } = options;
    const dropdownType = category ? category.value : "all";
    const effectiveType = typeOverride || (selectedType === "all" ? dropdownType : selectedType);
    const baseLabel = typeLabelMap[effectiveType] || "Kosakata";
    const levelValue = levelOverride || selectedLevel;
    
    if ((includeLevel || shouldShowLevelInResult(effectiveType)) && levelValue !== "all") {
      return `${totalCount} (${baseLabel}) - ${levelValue}`;
    }
    return `${totalCount} (${baseLabel})`;
  }
  
  const testState = {
    active: false,
    type: "",
    level: "",
    questions: [],
    currentIndex: 0,
    correctCount: 0,
    timeLeft: 0,
    timerId: null,
    answered: false,
  };
  
  const letterSets = {
    hiragana: {
      title: "Poster Hiragana",
      sections: [
        {
          subtitle: "Gojūon",
          rows: [
            ["",  "A",  "I",  "U",  "E",  "O"],
            ["A",  "あ", "い", "う", "え", "お"],
            ["KA", "か", "き", "く", "け", "こ"],
            ["SA", "さ", "し", "す", "せ", "そ"],
            ["TA", "た", "ち", "つ", "て", "と"],
            ["NA", "な", "に", "ぬ", "ね", "の"],
            ["HA", "は", "ひ", "ふ", "へ", "ほ"],
            ["MA", "ま", "み", "む", "め", "も"],
            ["YA", "や", "",   "ゆ", "",   "よ"],
            ["RA", "ら", "り", "る", "れ", "ろ"],
            ["WA", "わ", "",   "",   "",   "を"],
            ["N",  "ん", "",   "",   "",   ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["GA", "が", "ぎ", "ぐ", "げ", "ご"],
            ["ZA", "ざ", "じ", "ず", "ぜ", "ぞ"],
            ["DA", "だ", "ぢ", "づ", "で", "ど"],
            ["BA", "ば", "び", "ぶ", "べ", "ぼ"],
            ["PA", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
          ],
        },
        {
          subtitle: "Yōon",
          rows: [
            ["", "YA", "YU", "YO"],
            ["K", "きゃ", "きゅ", "きょ"],
            ["S", "しゃ", "しゅ", "しょ"],
            ["T", "ちゃ", "ちゅ", "ちょ"],
            ["N", "にゃ", "にゅ", "にょ"],
            ["H", "ひゃ", "ひゅ", "ひょ"],
            ["M", "みゃ", "みゅ", "みょ"],
            ["R", "りゃ", "りゅ", "りょ"],
            ["G", "ぎゃ", "ぎゅ", "ぎょ"],
            ["J", "じゃ", "じゅ", "じょ"],
            ["B", "びゃ", "びゅ", "びょ"],
            ["P", "ぴゃ", "ぴゅ", "ぴょ"],
          ],
        },
      ],
    },

    katakana: {
      title: "Poster Katakana",
      sections: [
        {
          subtitle: "Gojūon",
          rows: [
            ["",  "A",  "I",  "U",  "E",  "O"],
            ["A",  "ア", "イ", "ウ", "エ", "オ"],
            ["KA", "カ", "キ", "ク", "ケ", "コ"],
            ["SA", "サ", "シ", "ス", "セ", "ソ"],
            ["TA", "タ", "チ", "ツ", "テ", "ト"],
            ["NA", "ナ", "ニ", "ヌ", "ネ", "ノ"],
            ["HA", "ハ", "ヒ", "フ", "ヘ", "ホ"],
            ["MA", "マ", "ミ", "ム", "メ", "モ"],
            ["YA", "ヤ", "",   "ユ", "",   "ヨ"],
            ["RA", "ラ", "リ", "ル", "レ", "ロ"],
            ["WA", "ワ", "",   "",   "",   "ヲ"],
            ["N",  "ン", "",   "",   "",   ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["GA", "ガ", "ギ", "グ", "ゲ", "ゴ"],
            ["ZA", "ザ", "ジ", "ズ", "ゼ", "ゾ"],
            ["DA", "ダ", "ヂ", "ヅ", "デ", "ド"],
            ["BA", "バ", "ビ", "ブ", "ベ", "ボ"],
            ["PA", "パ", "ピ", "プ", "ペ", "ポ"],
          ],
        },
        {
          subtitle: "Yōon",
          rows: [
            ["", "YA", "YU", "YO"],
            ["K", "キャ", "キュ", "キョ"],
            ["S", "シャ", "シュ", "ショ"],
            ["T", "チャ", "チュ", "チョ"],
            ["N", "ニャ", "ニュ", "ニョ"],
            ["H", "ヒャ", "ヒュ", "ヒョ"],
            ["M", "ミャ", "ミュ", "ミョ"],
            ["R", "リャ", "リュ", "リョ"],
            ["G", "ギャ", "ギュ", "ギョ"],
            ["J", "ジャ", "ジュ", "ジョ"],
            ["B", "ビャ", "ビュ", "ビョ"],
            ["P", "ピャ", "ピュ", "ピョ"],
          ],
        },
      ],
    },
  };

  function speakWord(text) {
    if (!window.speechSynthesis || !text) return;
    const textJepangAja = text.split('(')[0].trim();
    const utterance = new SpeechSynthesisUtterance(textJepangAja);
    utterance.lang = "ja-JP";
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

  function openInfoModal(message) {
    expandedCard.innerHTML = `<div class="info-poster">${message}</div>`;
    modalSubtitle.style.display = "none";
    recommendationRow.style.display = "none";
    recommendationRow.innerHTML = "";
    kanjiModal.classList.add("active");
    kanjiModal.setAttribute("aria-hidden", "false");
    
    bodyScrollY = window.scrollY; 
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${bodyScrollY}px`;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    stopTestTimer();
    kanjiModal.classList.remove("active");
    kanjiModal.setAttribute("aria-hidden", "true");
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.body.style.overflow = "";
    window.scrollTo(0, bodyScrollY);
  }

  function matchType(wordType, targetType) {
    if (targetType === "all") return true;
    
    if (targetType === "verb-adj-only") {
      return wordType?.startsWith("verb") || wordType?.startsWith("adj") || wordType === "suru";
    }
    
    if (targetType === "verb-irregular") {
      return wordType?.startsWith("verb-irregular") || wordType?.startsWith("verb-suru") || wordType === "suru";
    }
    
    if (targetType === "noun" || targetType.startsWith("noun-")) {
      // --- START LOGIKA GABUNGAN ---
      
      // 1. Gabungan Angka & Satuan
      if (targetType === "noun-number-counter") {
        return wordType === "noun-number" || wordType === "noun-counter";
      }

      // 2. Gabungan Rumah, Dapur, & Keluarga
      if (targetType === "noun-house-family") {
        return wordType === "noun-house" || 
               wordType === "noun-kitchen" || 
               wordType === "noun-family";
      }

      // 3. Gabungan Tubuh & Medis (Kesehatan)
      if (targetType === "noun-body-medical") {
        return wordType === "noun-body" || wordType === "noun-medical";
      }

      // 4. Gabungan Waktu, Bulan, & Cuaca
      if (targetType === "noun-time-weather") {
        return wordType === "noun-time" || 
               wordType === "noun-month" || 
               wordType === "noun-weather";
      }

      // --- END LOGIKA GABUNGAN ---

      // Jika tidak cocok dengan gabungan di atas, 
      // cek apakah tipe datanya persis sama (untuk kategori tunggal)
      return wordType === targetType;
    }
    
    if (targetType === "ekspresi" || targetType === "expression" || targetType === "ungkapan umum") {
      return ["expression", "ekspresi", "ungkapan umum"].includes(wordType);
    }
    
    return wordType?.startsWith(targetType) || false;
  }
  function getHomepagePriorityWords(list) {
    const homepageOrder = ["verb-godan", "verb-ru", "verb-irregular", "adj-i", "adj-na"];
    return homepageOrder.flatMap((type) => list.filter((word) => word.type === type));
  }

  function getFilteredWords() {
    const key = (search.value || "").toLowerCase().trim();
    const selectedFromDropdown = category ? category.value : "all";
    if (typeof vocabularyData === "undefined") return []; // Safety check

    const filtered = vocabularyData.filter((word) => {
      if (selectedLevel !== "all" && word.level !== selectedLevel) return false;
      const effectiveType = selectedType === "all" ? selectedFromDropdown : selectedType;
      if (effectiveType !== "all" && !matchType(word.type, effectiveType)) return false;
      const text = [
        word.kanji || "",
        word.kana || "",
        word.romaji || "",
        word.meaning || ""
      ].join("").toLowerCase();
      return !key || text.includes(key);
    });

    if (selectedType === "verb-adj-only" && selectedLevel === "all" && !key) {
      return getHomepagePriorityWords(filtered);
    }

    return filtered;
  }

  function cardImageTemplate(word, expanded = false) {
    const expandedClass = expanded ? "expanded" : "";
    const cardId = `card-${(word.kanji || word.kana).replace(/\s+/g, '')}`;
    
    return `
      <div class="card-image ${expandedClass}" id="${cardId}">
        <button class="play-audio-btn" type="button" data-text="${word.kana || ''}" aria-label="Putar audio">▶</button>
        
        <button class="download-card-btn" type="button" onclick="downloadAsImage(event, '${cardId}')" title="Download Flashcard" style="position:absolute;top:10px;right:10px;left:auto;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:20;background:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:#ff4d6d;appearance:none;-webkit-appearance:none;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
        
        <div class="card-overlay" style="position: relative; z-index: 2;">
          <div class="kanji">${word.kanji || "—"}</div>
          <div class="kana">${word.kana || "—"}</div>
          <div class="romaji">${word.romaji || ""}</div>
          <div class="meaning">${word.meaning || "—"}</div>
          
          <img class="watermark-logo" src="./assets/logo.png" alt="NihonByte Logo" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:70%; height:auto; opacity:0; pointer-events:none; z-index:-1;">
        </div>
      </div>
    `;
  }
  
  function renderExpressionPoster() {
    grid.innerHTML = "";
    
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) paginationContainer.innerHTML = "";

    if (typeof vocabularyData === "undefined") return;
    
    const expressions = vocabularyData.filter(w =>
      w.type === "expression" || w.type === "ekspresi" || w.type === "ungkapan umum"
    );
    if (!expressions.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada ungkapan umum.</div>';
      if(resultInfo) resultInfo.textContent = formatResultInfo(0, { typeOverride: "expression" });
      return;
    }

    // 🚀 MANTRA JATAH KARTU (Desktop: 6, HP: 4)
    const currentState = "ekspresi-poster";
    if (lastQueryState !== currentState) {
      currentPage = 1;
      lastQueryState = currentState;
    }
    const itemsPerPage = window.innerWidth > 768 ? 6 : 4;
    const totalPages = Math.ceil(expressions.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedExpr = expressions.slice(startIndex, endIndex);

    const container = document.createElement("div");
    container.className = "expression-wide-grid";
    
    // Looping data yang udah dipotong
    paginatedExpr.forEach((word) => {
      const card = document.createElement("div");
      card.className = "expression-wide-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Detail ungkapan ${word.kana || word.kanji}`);
      try { card.dataset.word = JSON.stringify(word); } catch (err) { return; }
      card.innerHTML = `
        <div class="wide-kanji">${word.kanji || "—"}</div>
        <div class="wide-kana">${word.kana || "—"}</div>
        <div class="wide-romaji">${word.romaji || ""}</div>
        <div class="wide-meaning">${word.meaning || "—"}</div>
        <button class="wide-play-btn" type="button" data-text="${word.kana || word.kanji || ''}" aria-label="Putar">▶</button>
      `;
      card.addEventListener("click", (e) => {
        if (e.target.closest(".wide-play-btn")) return;
        try { openModal(JSON.parse(card.dataset.word)); } catch (err) {}
      });
      card.querySelector(".wide-play-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        speakWord(card.querySelector(".wide-play-btn").dataset.text);
      });
      container.appendChild(card);
    });
    grid.appendChild(container);
    
    renderPagination(totalPages); // Munculin navigasi < 1 2 3 >
    if(resultInfo) resultInfo.textContent = formatResultInfo(expressions.length, { typeOverride: "expression" });
  }

  function renderActivityPoster() {
    grid.innerHTML = "";
    
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) paginationContainer.innerHTML = "";

    if (typeof vocabularyData === "undefined") return;
    const activities = vocabularyData.filter(w => w.type === "activity");
    
    if (!activities.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada kosakata aktivitas.</div>';
      if(resultInfo) resultInfo.textContent = formatResultInfo(0, { typeOverride: "activity" });
      return;
    }
    
    // 🚀 MANTRA JATAH KARTU (Desktop: 6, HP: 4)
    const currentState = "activity-poster";
    if (lastQueryState !== currentState) {
      currentPage = 1;
      lastQueryState = currentState;
    }
    const itemsPerPage = window.innerWidth > 768 ? 6 : 4;
    const totalPages = Math.ceil(activities.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedAct = activities.slice(startIndex, endIndex);

    const container = document.createElement("div");
    container.className = "expression-wide-grid"; 
    
    paginatedAct.forEach((word) => {
      const card = document.createElement("div");
      card.className = "expression-wide-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Detail aktivitas ${word.kana || word.kanji}`);
      try { card.dataset.word = JSON.stringify(word); } catch (err) { return; }
      
      card.innerHTML = `
        <div class="wide-kanji">${word.kanji || "—"}</div>
        <div class="wide-kana">${word.kana || "—"}</div>
        <div class="wide-romaji">${word.romaji || ""}</div>
        <div class="wide-meaning">${word.meaning || "—"}</div>
        <button class="wide-play-btn" type="button" data-text="${word.kana || word.kanji || ''}" aria-label="Putar">▶</button>
      `;
      card.addEventListener("click", (e) => {
        if (e.target.closest(".wide-play-btn")) return;
        try { openModal(JSON.parse(card.dataset.word)); } catch (err) {}
      });
      card.querySelector(".wide-play-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        speakWord(card.querySelector(".wide-play-btn").dataset.text);
      });
      container.appendChild(card);
    });
    
    grid.appendChild(container);
    renderPagination(totalPages);
    if(resultInfo) resultInfo.textContent = formatResultInfo(activities.length, { typeOverride: "activity" });
  }

  function shuffle(array) {
    if (!Array.isArray(array)) return [];
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function stopTestTimer() {
    if (testState.timerId) {
      clearInterval(testState.timerId);
      testState.timerId = null;
    }
  }

  function startQuestionTimer(seconds) {
    stopTestTimer();
    testState.timeLeft = seconds;
    const timerElement = document.getElementById("testTimer");
    if (timerElement) timerElement.textContent = `${testState.timeLeft}s`;
    testState.timerId = setInterval(() => {
      testState.timeLeft -= 1;
      const currentTimerElement = document.getElementById("testTimer");
      if (currentTimerElement) currentTimerElement.textContent = `${testState.timeLeft}s`;
      if (testState.timeLeft <= 0) {
        stopTestTimer();
        moveToNextQuestion();
      }
    }, 1000);
  }

  function finishTest() {
    stopTestTimer();
    const total = testState.questions.length || 0;
    const correct = testState.correctCount;
    const percentage = total ? Math.round((correct / total) * 100) : 0;
    const status = percentage >= 75 ? "LULUS ✅" : "TIDAK LULUS ❌";
    openInfoModal(`Hasil Test ${testState.type.toUpperCase()} ${testState.level}<br><strong>${correct}/${total}</strong> • <strong>${percentage}%</strong><br>${status}`);
    testState.active = false;
    viewMode = "vocab";
    render();
  }

  function moveToNextQuestion() {
    if (!testState.active) return;
    testState.currentIndex += 1;
    testState.answered = false;
    if (testState.currentIndex >= testState.questions.length) {
      finishTest();
      return;
    }
    renderCurrentTestQuestion();
  }

  function renderCurrentTestQuestion() {
    grid.innerHTML = "";
    const question = testState.questions[testState.currentIndex];
    const options = shuffle(question.options);
    const isKanji = testState.type === "kanji";
    const board = document.createElement("div");
    board.className = "test-board";
    board.innerHTML = `
      <header class="test-header">
        <p class="test-progress">Soal ${testState.currentIndex + 1}/${testState.questions.length}</p>
        <p class="test-timer" id="testTimer">30s</p>
      </header>
      <div class="test-question-card">
        <h2>${isKanji ? question.kanji : question.pattern}</h2>
      </div>
      <div class="test-option-grid"></div>
      <button class="action-btn finish-test-btn" type="button">Selesai Test</button>
    `;
    const optionGrid = board.querySelector(".test-option-grid");
    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "test-option-btn";
      btn.textContent = isKanji ? opt.meaning : opt.meaning;
      btn.dataset.correct = opt.correct ? "true" : "false";
      optionGrid.appendChild(btn);
    });
    grid.appendChild(board);
    startQuestionTimer(30);
    optionGrid.addEventListener("click", (event) => {
      const btn = event.target.closest(".test-option-btn");
      if (!btn || testState.answered) return;
      testState.answered = true;
      stopTestTimer();
      const correct = btn.dataset.correct === "true";
      if (correct) testState.correctCount += 1;
      Array.from(optionGrid.children).forEach((optBtn) => {
        optBtn.disabled = true;
        if (optBtn.dataset.correct === "true") optBtn.classList.add("correct");
        else optBtn.classList.add("wrong");
      });
      setTimeout(moveToNextQuestion, 1500);
    });
    board.querySelector(".finish-test-btn").addEventListener("click", finishTest);
  }

  function startTest(level, kind) {
    viewMode = `test:${kind}:${level}`;
    testState.active = true;
    testState.type = kind;
    testState.level = level;
    testState.correctCount = 0;
    testState.currentIndex = 0;
    testState.answered = false;
    let sourceData;
    if (kind === "kanji") {
      sourceData = typeof vocabularyData !== "undefined" ? vocabularyData.filter((word) => word.level === level) : [];
    } else if (kind === "bunpou") {
      sourceData = typeof patternData !== "undefined" ? patternData[level] || [] : [];
    }
    if (!sourceData || !sourceData.length) {
      openInfoModal("Tidak ada data untuk test ini.");
      testState.active = false;
      viewMode = "vocab";
      render();
      return;
    }
    const questions = shuffle(sourceData).slice(0, 10).map((item) => {
      const correctOption = { ...item, correct: true };
      const wrongOptions = shuffle(sourceData.filter((w) => (w.kanji !== item.kanji || w.pattern !== item.pattern))).slice(0, 3).map((w) => ({ ...w, correct: false }));
      return { ...item, options: shuffle([correctOption, ...wrongOptions]) };
    });
    testState.questions = questions;
    renderCurrentTestQuestion();
  }

  function renderLetterPoster(script) {
    grid.innerHTML = "";
    
    // Hilangkan navigasi angka di bawah
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) paginationContainer.innerHTML = "";

    const data = letterSets[script];
    if (!data) return;

    const isDesktop = window.innerWidth > 768;

    const transpose = (matrix) => {
      const maxCols = Math.max(...matrix.map(row => row.length));
      return Array.from({ length: maxCols }, (_, colIndex) =>
        matrix.map(row => row[colIndex] || "")
      );
    };

    // 🚀 LOOPING UTAMA (Mecah 3 Poster)
    data.sections.forEach((section) => {
      const poster = document.createElement("article");
      poster.className = "letter-poster";
      
      // Judul Gabungan
      poster.innerHTML = `
        <h2>${data.title} • <span class="letter-poster-subtitle">${section.subtitle}</span></h2>
        <div class="letter-poster-body"></div>
      `;

      const secElem = document.createElement("div");
      secElem.className = "letter-section";
      
      if (section.subtitle === "Yōon") secElem.classList.add("yoon-section");

      let rowsToRender = section.rows;

      // Putar jadi Horizontal KHUSUS DESKTOP
      if (isDesktop) {
        rowsToRender = transpose(rowsToRender);
      }

      const gridContainer = document.createElement("div");
      gridContainer.className = isDesktop ? "letter-grid-desktop" : "letter-grid-mobile";
      
      const colCount = rowsToRender[0].length; 
      gridContainer.style.gridTemplateColumns = `repeat(${colCount}, minmax(0, 1fr))`;

      // 🚀 LOOPING HURUF
      rowsToRender.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          const cellElem = document.createElement("div");
          const isLabel = /^[A-Z]*$/.test(cell); 
          
          if (cell === "") {
              cellElem.className = "letter-empty";
          } else if (isLabel) {
              cellElem.className = "letter-label";
              cellElem.textContent = cell;
              
              // 🚀 MANTRA RADAR: Deteksi Huruf Panduan Vokal (A, I, U, E, O)
              const isVokal = isDesktop ? (colIndex === 0) : (rowIndex === 0);
              if (isVokal) {
                  cellElem.classList.add("label-vokal");
              }
          } else {
              cellElem.className = "letter-cell";
              cellElem.textContent = cell;
          }
          
          gridContainer.appendChild(cellElem);
        });
      });
      
      // 🚀 INI BAGIAN YANG TADI GAK SENGAJA KEHAPUS SAMA LU BOSKU!
      secElem.appendChild(gridContainer);
      poster.querySelector(".letter-poster-body").appendChild(secElem);
      grid.appendChild(poster);
    }); // <-- Ini penutup data.sections.forEach yang hilang tadi
    
    if(resultInfo) resultInfo.textContent = script.charAt(0).toUpperCase() + script.slice(1);
  }
  
  function renderPatternPoster(level) {
    grid.classList.add("pattern-grid-layout");
    grid.style.setProperty("grid-template-columns", window.innerWidth <= 767 ? "1fr" : "repeat(2, minmax(0, 1fr))", "important");
    grid.innerHTML = "";
    
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) paginationContainer.innerHTML = "";

    const patterns = typeof patternData !== "undefined" ? patternData[level] || [] : [];
    if (!patterns.length) {
      grid.innerHTML = '<div class="empty-state">Tidak ada pola kalimat untuk level ini.</div>';
      if(resultInfo) resultInfo.textContent = formatResultInfo(0, { typeOverride: "pattern", levelOverride: level, includeLevel: true });
      return;
    }

    // 🚀 MANTRA JATAH KARTU (Desktop: 6, HP: 4)
    const currentState = `pattern-${level}`;
    if (lastQueryState !== currentState) {
      currentPage = 1;
      lastQueryState = currentState;
    }
    const itemsPerPage = window.innerWidth >= 768 ? 6 : 4;
    const totalPages = Math.ceil(patterns.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPatterns = patterns.slice(startIndex, endIndex);

    paginatedPatterns.forEach((pattern) => {
      const card = document.createElement("article");
      card.className = "pattern-card";
      const fullExample = pattern.example || "";
      const splitMatch = fullExample.match(/^(.*?)(?:\s*\((.*?)\))?$/);
      const jpExample = (splitMatch?.[1] || "").trim();
      const idTranslation = (splitMatch?.[2] || "").trim();
      card.innerHTML = `
        <div class="pattern-title">${pattern.pattern}</div>
        <div class="pattern-example-jp">${jpExample}</div>
        <div class="pattern-example-id">${idTranslation}</div>
        <div class="pattern-meaning">${pattern.meaning}</div>
        <button class="pattern-audio-btn" type="button" data-text="${pattern.example}" aria-label="Putar audio pola">▶</button>
      `;
      grid.appendChild(card);
    });
    
    renderPagination(totalPages);
    if(resultInfo) resultInfo.textContent = formatResultInfo(patterns.length, { typeOverride: "pattern", levelOverride: level, includeLevel: true });
  }

  function syncMobileTopbarLayout() {
    const topbar = document.querySelector(".topbar");
    const isMobile = window.innerWidth <= 767;
    if (!topbar || !resultInfo) return;

    if (isMobile) {
      topbar.style.setProperty("display", "flex", "important");
      topbar.style.setProperty("align-items", "center", "important");
      resultInfo.style.setProperty("order", "3", "important");
      resultInfo.style.setProperty("position", "static", "important");
      resultInfo.style.setProperty("margin-left", "auto", "important");
      resultInfo.style.setProperty("margin-right", "6px", "important");
      resultInfo.style.setProperty("max-width", "calc(100vw - 220px)", "important");
      resultInfo.style.setProperty("white-space", "nowrap", "important");
      resultInfo.style.setProperty("overflow", "hidden", "important");
      resultInfo.style.setProperty("text-overflow", "ellipsis", "important");
      searchBtn?.style.setProperty("order", "4", "important");
    } else {
      topbar.style.removeProperty("display");
      topbar.style.removeProperty("align-items");
      ["order", "position", "margin-left", "margin-right", "max-width", "white-space", "overflow", "text-overflow"].forEach((prop) => resultInfo.style.removeProperty(prop));
      searchBtn?.style.removeProperty("order");
    }
  }

  function getRecommendations(word) {
    if (typeof vocabularyData === "undefined") return [];
    const maxItems = 10;
    const sameType = vocabularyData.filter((w) => w.type === word.type && w.kanji !== word.kanji && w.level === word.level);
    const fallback = vocabularyData.filter((w) => w.kanji !== word.kanji && w.level === word.level);
    const source = sameType.length >= maxItems ? sameType : fallback;
    return shuffle(source).slice(0, maxItems);
  }

  let kanjiModalScrollY = 0;
  let kanjiModalScrollLocked = false;

  function lockPageScrollForKanjiModal() {
    if (kanjiModalScrollLocked) return;
    kanjiModalScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${kanjiModalScrollY}px`;
    document.documentElement.style.overflow = "hidden";
    kanjiModalScrollLocked = true;
  }

  function unlockPageScrollForKanjiModal() {
    if (!kanjiModalScrollLocked) return;
    if (sidebar && sidebar.classList.contains("active")) return;
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.documentElement.style.overflow = "";
    window.scrollTo(0, kanjiModalScrollY);
    kanjiModalScrollLocked = false;
  }

  function openModal(word) {
    if (!word) return;
    modalSubtitle.style.display = "block";
    recommendationRow.style.display = "flex";
    expandedCard.innerHTML = cardImageTemplate(word, true);
    recommendationRow.innerHTML = "";
    getRecommendations(word).forEach((item) => {
      const recBtn = document.createElement("article");
      recBtn.className = "recommendation-item";
      recBtn.setAttribute("role", "button");
      recBtn.setAttribute("tabindex", "0");
      recBtn.innerHTML = `
        <span class="rec-kanji">${item.kanji || "—"}</span>
        <span class="rec-kana">${item.kana || "—"}</span>
        <button class="rec-audio-btn" type="button" data-text="${item.kana || ""}" aria-label="Putar audio ${item.kanji || item.kana || ''}">▶</button>
      `;
      recBtn.addEventListener("click", () => openModal(item));
      recBtn.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(item);
        }
      });
      recommendationRow.appendChild(recBtn);
    });
    lockPageScrollForKanjiModal();
    kanjiModal.classList.add("active");
    kanjiModal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    stopTestTimer();
    kanjiModal.classList.remove("active");
    kanjiModal.setAttribute("aria-hidden", "true");
    unlockPageScrollForKanjiModal();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  kanjiModal.addEventListener("click", (e) => {
    if (!e.target.closest(".kanji-modal-content")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeSidebar();
    }
  });

  hamburger.addEventListener("click", () => {
    if (isDesktopLayout()) return;
    if (isTesting) {
      openInfoModal(`
        <div style="text-align: center; padding: 10px;">
          <h3 style="color: #ff4d6d; margin-bottom: 10px;">Ujian Sedang Berlangsung! 🚧</h3>
          <p style="font-size: 1.1rem;">Selesaikan test terlebih dahulu sebelum membuka menu lain. Fokus, Bosku! 🔥</p>
        </div>
      `);
      return; // Stop di sini, sidebar tidak akan terbuka!
    }
    const isActive = sidebar.classList.toggle("active");
    overlay.classList.toggle("active", isActive);
    document.body.classList.toggle("sidebar-open", isActive);
    hamburger.setAttribute("aria-expanded", isActive);
    
    if (isActive) {
      // --- TAMBAHAN BARU: Kembalikan scroll sidebar ke paling atas ---
      sidebar.scrollTop = 0;
      
      savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      originalOverflow = document.body.style.overflow || '';
      originalPosition = document.body.style.position || '';
      originalTop = document.body.style.top || '';
      originalWidth = document.body.style.width || '';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition}px`;
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      closeSidebar();
    }
  });

  overlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    if (isDesktopLayout()) {
      sidebar.classList.add("active");
      overlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      hamburger.setAttribute("aria-expanded", "false");
      return;
    }

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("sidebar-open");
    hamburger.setAttribute("aria-expanded", "false");

    // ==================================================
    // KUNCI AUTO-CLOSE: Tutup semua subfolder (<details>)
    // ==================================================
    document.querySelectorAll("#sidebar details").forEach(detail => {
      detail.removeAttribute("open");
    });
    // ==================================================

    document.body.style.overflow = originalOverflow || '';
    document.body.style.position = originalPosition || '';
    document.body.style.top = originalTop || '';
    document.body.style.width = originalWidth || '';
    document.documentElement.style.overflow = '';

    if (typeof savedScrollPosition === 'number') {
      window.scrollTo(0, savedScrollPosition);
    }

    if (!kanjiModal.classList.contains("active")) {
      kanjiModalScrollLocked = false;
    }

    setTimeout(() => {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 80);
  }
  grid.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".play-audio-btn, .pattern-audio-btn, .rec-audio-btn, .wide-play-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
      return;
    }
  });

  recommendationRow.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".rec-audio-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
    }
  });

  expandedCard.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".play-audio-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
    }
  });

  document.querySelectorAll(".sidebar-filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (accessMode === "guest") {
        openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Filter kategori sidebar khusus pengguna login Google.</p>");
        return;
      }
      viewMode = "vocab";
      selectedLevel = button.dataset.level || "all";
      selectedType = button.dataset.type || "all";
      if (selectedType !== "all" && category) category.value = selectedType;
      if (search) search.value = "";
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".letter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (accessMode === "guest") {
        openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Menu sidebar hanya terbuka untuk pengguna login.</p>");
        return;
      }
      viewMode = `letters:${button.dataset.script}`;
      if (search) search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".verb-form-menu-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (accessMode === "guest") {
        openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Menu sidebar hanya terbuka untuk pengguna login.</p>");
        return;
      }
      viewMode = "verb-forms";
      if (search) search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".adjective-form-menu-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (accessMode === "guest") {
        openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Menu sidebar hanya terbuka untuk pengguna login.</p>");
        return;
      }
      viewMode = "adjective-forms";
      if (search) search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".pattern-btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (accessMode === "guest") {
      openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Menu sidebar hanya terbuka untuk pengguna login.</p>");
      return;
    }
    const level = button.dataset.level;

    // Jika user klik N3, N2, atau N1 di menu Pola Kalimat
    if (["N3", "N2", "N1"].includes(level)) {
      // Formatnya: dev : mode : tipe_materi : level
      // Kita pakai mode 'pattern' agar fungsinya nulis "Pola Kalimat"
      viewMode = `dev:pattern:Pola Kalimat:${level}`; 
      render();
      closeSidebar();
      return;
    }

    // Jika N5 atau N4 (Normal)
    viewMode = `patterns:${level}`;
    render();
    closeSidebar();
  });
});
  
  document.querySelectorAll(".test-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.dataset.level;
      const kind = button.dataset.kind;
      if (["N3", "N2", "N1"].includes(level)) {
        openInfoModal("Mohon maaf, fitur test level ini masih dalam proses pengembangan. Silakan kembali lagi nanti ✨");
        closeSidebar();
        return;
      }
      startTest(level, kind);
      closeSidebar();
    });
  });

  document.querySelectorAll(".js-reset-logo").forEach((logoElem) => logoElem.addEventListener("click", () => {
    // PROTEKSI MODE TEST: User gak boleh kabur lewat logo
    if (isTesting) {
      const messages = [
        "<h3>諦めないで (Jangan Menyerah)! 💪</h3><p>Latihan ini adalah langkahmu menuju kesuksesan. Selesaikan dulu ujiannya!!</p>",
        "<h3>ちょっと待って! (Tunggu Sebentar!) ✋</h3><p>Sayang banget skornya kalau ditinggal sekarang. Sedikit lagi kamu akan menguasai materi ini!</p>",
        "<h3>Fokus, Bosku! 🔥</h3><p>Selesaikan apa yang sudah kamu mulai. Perjalanan seribu mil dimulai dengan satu langkah (dan tidak berhenti di tengah jalan).</p>"
      ];
      
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      openInfoModal(`<div style="text-align: center; padding: 10px;">${randomMsg}</div>`);
      return;
    }

    if (document.body.classList.contains("review-mode-active")) {
       location.reload(); 
       return;
    }

    // LOGIC NORMAL: Jika tidak sedang test
    selectedLevel = "all";
    selectedType = "verb-adj-only"; // <--- INI KUNCINYA, UBAH JADI VERB-ADJ-ONLY
    if (typeof category !== 'undefined' && category) category.value = "all";
    if (search) search.value = "";
    viewMode = "vocab";

    // Hapus warna aktif di tombol sidebar (kalau abis buka dari sidebar)
    document.querySelectorAll(".sidebar-filter-btn").forEach(btn => btn.classList.remove("active"));

    render();
  }));
  
  document.getElementById("supportBtn")?.addEventListener("click", () => {
    viewMode = "support";
    if (search) search.value = "";
    if (category) category.value = "all";
    render();
    closeSidebar();
  });

  document.querySelectorAll(".exercise-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const mainType = button.dataset.main || button.dataset.type || "";
      const section = button.dataset.section || mainType;
      const level = button.dataset.level;

      // 🚀 KUNCI FIX: Buka gembok Dokkai untuk N5 dan N4! 
      // Jadi Goi, Bunpou, dan Dokkai kalau N5/N4 bakal lolos. Kalau N3-N1 baru masuk Dev Mode.
      const isGoiBunpouDokkaiDev = ["goi", "bunpou", "dokkai"].includes(mainType) && ["N3", "N2", "N1"].includes(level);
      
      // Choukai (Listening) masih digembok total karena kita belum masukin audio
      const isChoukaiDev = ["choukai", "listening"].includes(mainType);

      if (isGoiBunpouDokkaiDev || isChoukaiDev) {
        const devTitleMap = {
          goi: "Pengetahuan Bahasa (Kosakata)",
          bunpou: "Pengetahuan Bahasa (Tata Bahasa)",
          dokkai: "Dokkai Membaca",
          choukai: "Choukai Mendengarkan",
          listening: "Choukai Mendengarkan",
        };
        viewMode = `dev:exercise:${devTitleMap[mainType] || (latihanSectionLabel[section] || section)}:${level}`;
        render();
        closeSidebar();
        return;
      }

      startExercise(mainType, section, level);
      closeSidebar();
    });
  });
  
  function renderSupportPoster() {
    grid.classList.add("support-mode");
    grid.innerHTML = `
      <section class="support-poster">
        <h2>Dukung Pengembang</h2>
        <p>Nihonbyte dibuat dengan semangat berbagi ilmu Bahasa Jepang secara gratis dan terbuka untuk semua pembelajar.</p>
        <p>Dukungan Anda membantu menjaga proyek ini tetap hidup, berkembang, dan bisa menjangkau lebih banyak orang di masa depan, tanpa iklan, tanpa batasan akses.</p>
        <p>Setiap bentuk dukungan, sekecil apa pun, berarti kami bisa terus menambah materi baru, memperbaiki fitur, dan membangun komunitas belajar yang lebih baik.</p>
        <p>Terima kasih telah menjadi bagian dari perjalanan ini.</p>
        <a href="https://sociabuzz.com/syncxcode/tribe" target="_blank" rel="noopener noreferrer" class="support-btn">Klik Disini</a>
      </section>
    `;
    if(resultInfo) resultInfo.textContent = "Terima kasih atas dukungan Anda ✨";
  }

  function renderUnderDevelopment(mode, type, level) {
  grid.classList.remove("support-mode");
  grid.innerHTML = "";
  const paginationContainer = document.getElementById("pagination-container");
  if (paginationContainer) {
    paginationContainer.innerHTML = "";
    paginationContainer.style.display = "none";
  }

  // Menentukan judul berdasarkan mode
  const titlePrefix = mode === "exercise" ? "Latihan" : "Pola Kalimat";
  
  const container = document.createElement("div");
  container.className = "empty-state";
  container.style.padding = "40px 20px";
  container.style.marginTop = "20px";

  container.innerHTML = `
    <div style="text-align: center;">
      <h2 style="color: #ff4d6d; margin-bottom: 20px;">🚧 ${titlePrefix} ${type} 🚧</h2>
      <p style="font-size: 1.2rem; font-weight: 600; color: #1f2937; margin-bottom: 10px;">
        Kategori yang anda pilih, masih dalam proses Pengembangan, silahkan kembali lagi nanti.
      </p>
      <p style="font-style: italic; color: #4b5563; margin-bottom: 25px;">
        The category you selected is still under development, please come back later.
      </p>
      <p style="font-size: 1.4rem; font-weight: 800; color: #ff4d6d; line-height: 1.6;">
        選択されたカテゴリーは現在開発中です。<br>後ほどもう一度ご確認ください。
      </p>
    </div>
  `;

  grid.appendChild(container);
  if (resultInfo) resultInfo.textContent = `${titlePrefix} ${type} ${level} (Coming Soon)`;
}
  
  // ==========================================
  // INI ADALAH FUNGSI RENDER() YANG BENAR
  // (Sudah mencakup semua logika dari awal sampai akhir)
  // ==========================================
  function render() {
    savedScrollPosition = 0; 
    setTimeout(() => {
       window.scrollTo(0, 0); 
       document.documentElement.scrollTop = 0;
       document.body.scrollTop = 0;
    }, 50);

    if (!isTesting) unlockQuizScroll();
    syncMobileTopbarLayout();
    setHistoryMode(false);
    grid.classList.remove("support-mode", "pattern-grid-layout");
    grid.style.removeProperty("grid-template-columns");
    grid.innerHTML = "";
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.style.display = "none";
    }

    if (viewMode === "support") {
      renderSupportPoster();
      return;
    }

    const isExpressionView =
      viewMode === "vocab" &&
      (category?.value === "ekspresi" ||
       selectedType === "ekspresi" ||
       selectedType === "expression" ||
       selectedType === "ungkapan umum");
       
    const isActivityView = 
      viewMode === "vocab" && 
      (category?.value === "activity" || selectedType === "activity");
    
    if (viewMode.startsWith("dev:")) {
      const parts = viewMode.split(":"); 
      renderUnderDevelopment(parts[1], parts[2], parts[3]);
      return;
    }
    
    if (isExpressionView) {
      renderExpressionPoster();
      return;
    }

    if (isActivityView) {
      renderActivityPoster();
      return;
    }
    
    if (viewMode === "verb-forms") {
      window.verbFormsUI?.renderHub({
        grid,
        onOpenPoster: (formId) => {
          viewMode = `verb-form:${formId}`;
          render();
        }
      });
      if (resultInfo) resultInfo.textContent = "Materi Bentuk Kata Kerja";
      return;
    }

    if (viewMode.startsWith("verb-form:")) {
      const formId = viewMode.split(":")[1];
      window.verbFormsUI?.renderPoster({
        grid,
        formId,
        onBack: () => {
          viewMode = "verb-forms";
          render();
        }
      });
      if (resultInfo) resultInfo.textContent = `Bentuk Kata Kerja • ${formId.toUpperCase()}`;
      return;
    }

    if (viewMode === "adjective-forms") {
      window.adjectiveFormsUI?.renderHub({
        grid,
        onOpenPoster: (formId) => {
          viewMode = `adjective-form:${formId}`;
          render();
        }
      });
      if (resultInfo) resultInfo.textContent = "Materi Bentuk Kata Sifat";
      return;
    }

    if (viewMode.startsWith("adjective-form:")) {
      const formId = viewMode.split(":")[1];
      window.adjectiveFormsUI?.renderPoster({
        grid,
        formId,
        onBack: () => {
          viewMode = "adjective-forms";
          render();
        }
      });
      if (resultInfo) resultInfo.textContent = `Bentuk Kata Sifat • ${formId.toUpperCase()}`;
      return;
    }

    if (viewMode.startsWith("letters:")) {
      renderLetterPoster(viewMode.split(":")[1]);
      return;
    }

    if (viewMode.startsWith("patterns:")) {
      renderPatternPoster(viewMode.split(":")[1]);
      return;
    }

    if (viewMode.startsWith("test:")) {
      if (!testState.active) return;
      renderCurrentTestQuestion();
      return;
    }

    window.addEventListener("resize", () => {
    syncMobileTopbarLayout();
    if (viewMode.startsWith("patterns:")) {
      grid.style.setProperty("grid-template-columns", window.innerWidth <= 768 ? "1fr" : "repeat(2, minmax(0, 1fr))", "important");
    }
    // 🚀 TAMBAHIN INI: Biar tabel huruf langsung nyesuaiin pas layar dikecilin/digedein!
    if (viewMode.startsWith("letters:")) {
      render(); 
    }
  });

// ==== LOGIKA KARTU KOSAKATA & PAGINATION ====
    let words = getFilteredWords();
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.style.display = "flex";
    }
    
    const isGuestPreview = accessMode === "guest" && viewMode === "vocab" && selectedType === "verb-adj-only" && selectedLevel === "all" && !(search?.value || "").trim();
    if (isGuestPreview) {
      words = words.slice(0, 6);
    }

    if (!words.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada hasil untuk kombinasi folder/kategori ini.</div>';
      if (resultInfo) resultInfo.textContent = formatResultInfo(0);
      return;
    }

    // --- LOGIKA JATAH KARTU ---
    const currentState = `${selectedLevel}-${selectedType}-${search ? search.value : ""}`;
    if (lastQueryState !== currentState) {
       currentPage = 1; // Otomatis balik ke halaman 1 kalau ganti folder/pencarian
       lastQueryState = currentState;
    }

    const itemsPerPage = window.innerWidth > 768 ? 12 : 10; // Desktop 16, HP 10
    const totalPages = Math.ceil(words.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedWords = words.slice(startIndex, endIndex); // Potong array sesuai jatah

    const fragment = document.createDocumentFragment();
    paginatedWords.forEach((word) => {
      const cardButton = document.createElement("article");
      cardButton.className = "card";
      cardButton.setAttribute("role", "button");
      cardButton.setAttribute("tabindex", "0");
      
      try { cardButton.dataset.word = JSON.stringify(word); } catch (err) { return; }
      
      cardButton.innerHTML = cardImageTemplate(word);
      
      cardButton.addEventListener("click", (e) => {
        if (e.target.closest(".play-audio-btn") || e.target.closest(".download-card-btn")) return;
        try { openModal(JSON.parse(cardButton.dataset.word)); } catch (err) {}
      });
      fragment.appendChild(cardButton);
    });
    
    grid.appendChild(fragment);
    
    // Panggil mesin tombol halaman
    if (!isGuestPreview) renderPagination(totalPages);

    if (resultInfo) {
      resultInfo.textContent = isGuestPreview
        ? `${words.length} (Preview Tamu) • Login untuk buka semua materi`
        : formatResultInfo(words.length);
    }
  } // <-- Akhir dari fungsi render()

  // --- MESIN PEMBUAT TOMBOL ANGKA HALAMAN ---
  function renderPagination(totalPages) {
    const paginationContainer = document.getElementById("pagination-container");
    if (!paginationContainer) return;

    paginationContainer.innerHTML = "";
    if (totalPages <= 1) {
      paginationContainer.style.display = "none";
      return;
    }

    paginationContainer.style.display = "flex";

    // Tombol Prev (Kiri)
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn";
    prevBtn.innerHTML = "«";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => { if (currentPage > 1) { currentPage--; render(); } });
    paginationContainer.appendChild(prevBtn);

    // Hitung jendela halaman (biar angka gak kepanjangan)
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);
    if (currentPage === 1) endPage = Math.min(3, totalPages);
    if (currentPage === totalPages) startPage = Math.max(1, totalPages - 2);

    if (startPage > 1) {
      const firstBtn = document.createElement("button");
      firstBtn.className = "page-btn"; firstBtn.innerText = "1";
      firstBtn.addEventListener("click", () => { currentPage = 1; render(); });
      paginationContainer.appendChild(firstBtn);
      if (startPage > 2) paginationContainer.insertAdjacentHTML('beforeend', '<span class="page-dots">...</span>');
    }

    for (let i = startPage; i <= endPage; i++) {
      const btn = document.createElement("button");
      btn.className = `page-btn ${i === currentPage ? "active" : ""}`;
      btn.innerText = i;
      btn.addEventListener("click", () => { currentPage = i; render(); });
      paginationContainer.appendChild(btn);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) paginationContainer.insertAdjacentHTML('beforeend', '<span class="page-dots">...</span>');
      const lastBtn = document.createElement("button");
      lastBtn.className = "page-btn"; lastBtn.innerText = totalPages;
      lastBtn.addEventListener("click", () => { currentPage = totalPages; render(); });
      paginationContainer.appendChild(lastBtn);
    }

    // Tombol Next (Kanan)
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn";
    nextBtn.innerHTML = "»";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => { if (currentPage < totalPages) { currentPage++; render(); } });
    paginationContainer.appendChild(nextBtn);
  }

  if (category) {
    category.addEventListener("change", () => {
      viewMode = "vocab";
      selectedType = "all";
      render();
      closeSidebar();
    });
  }

  if (search) {
    search.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      
      // Buka gembok: Kalau user ngetik pencarian dan posisi lagi di halaman default
      if (query !== "" && selectedType === "verb-adj-only") {
        selectedType = "all";
      } 
      // Kunci lagi: Kalau pencarian dihapus bersih & gak ada kategori yg lagi aktif
      else if (query === "" && !document.querySelector("#categoryGrid .cat-btn.active") && !document.querySelector(".sidebar-filter-btn.active")) {
        selectedType = "verb-adj-only";
      }
      
      render();
    });
  }
  window.addEventListener("resize", () => {
    syncMobileTopbarLayout();
    applyResponsiveSidebarLayout();
    if (viewMode.startsWith("patterns:")) {
      grid.style.setProperty("grid-template-columns", window.innerWidth <= 767 ? "1fr" : "repeat(2, minmax(0, 1fr))", "important");
    }
  });
  if (document.documentElement.classList.contains('ios-device')) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    if(hamburger) hamburger.setAttribute("aria-expanded", "false");
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  applyResponsiveSidebarLayout();
  
  sidebar.addEventListener('click', function(e) {
    if (isDesktopLayout()) return;
    if (e.target.closest('button') || 
        e.target.closest('a') || 
        e.target.closest('[role="button"]')) {
      closeSidebar();
    }
  }, { capture: true });

  function escapeHTML(value = '') {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getAdaptiveDownloadKanjiSize(text = '') {
    const cleanText = (text || '').replace(/\s+/g, '').trim() || '—';
    const charCount = [...cleanText].length;

    let preferredSize = 360;
    if (charCount === 2) preferredSize = 330;
    else if (charCount === 3) preferredSize = 290;
    else if (charCount === 4) preferredSize = 250;
    else if (charCount >= 5) preferredSize = 220;

    const maxWidth = 1180;
    const minSize = 132;
    const fontFamily = '"Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", "MS Mincho", serif';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return preferredSize;

    let size = preferredSize;
    while (size > minSize) {
      ctx.font = `700 ${size}px ${fontFamily}`;
      const measuredWidth = ctx.measureText(cleanText).width;
      if (measuredWidth <= maxWidth) break;
      size -= 4;
    }

    return Math.max(size, minSize);
  }

  window.downloadAsImage = function(event, cardId) {
    event.stopPropagation();

    const element = document.getElementById(cardId);
    if (!element) return;

    const cardOverlay = element.querySelector('.card-overlay');
    const sourceKanji = cardOverlay?.querySelector('.kanji')?.textContent?.trim() || '—';
    const sourceKana = cardOverlay?.querySelector('.kana')?.textContent?.trim() || '—';
    const sourceRomaji = cardOverlay?.querySelector('.romaji')?.textContent?.trim() || '';
    const sourceMeaning = cardOverlay?.querySelector('.meaning')?.textContent?.trim() || '—';

    const kanjiSize = getAdaptiveDownloadKanjiSize(sourceKanji);

    const exportNode = document.createElement('div');
    exportNode.className = 'download-export-card';
    exportNode.innerHTML = `
      <div class="download-export-glass-outline"></div>
      <div class="download-export-content">
        <img class="download-export-watermark" src="./assets/logo.png" alt="NihonByte Logo">
        <div class="download-export-watermark-text">学</div>
        <div class="download-export-kanji" style="font-size:${kanjiSize}px">${escapeHTML(sourceKanji)}</div>
        <div class="download-export-kana">${escapeHTML(sourceKana)}</div>
        <div class="download-export-romaji">${escapeHTML(sourceRomaji)}</div>
        <div class="download-export-meaning">${escapeHTML(sourceMeaning)}</div>
      </div>
    `;
    document.body.appendChild(exportNode);

    html2canvas(exportNode, {
      backgroundColor: '#5f0b1f',
      scale: 1,
      width: 1600,
      height: 900,
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `kanji-card-${cardId}-hd-plus.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }).catch(err => {
      console.error('Gagal mendownload gambar:', err);
    }).finally(() => {
      exportNode.remove();
    });
  };

  const APP_VERSION = "v1.1.0";
  document.addEventListener("DOMContentLoaded", () => {
    const versionElement = document.getElementById("app-version");
    if (versionElement) {
      versionElement.innerText = APP_VERSION;
    }
  });

  // ==========================================
  // FUNGSI KIRIM SKOR KE FIREBASE CLOUD
  // ==========================================
  async function saveScoreToCloud(type, level, correct, total, percentage) {
    if (!window.currentUser || !window.firebaseDb) return;

    try {
      const uid = window.currentUser.uid;
      const docId = new Date().getTime().toString(); // Gunakan timestamp sebagai ID Unik
      
      // Simpan di folder: users -> [ID_USER] -> history -> [TIMESTAMP]
      const docRef = window.doc(window.firebaseDb, "users", uid, "history", docId);
      
      await window.setDoc(docRef, {
        kategori: type,
        level: level,
        skor_benar: correct,
        total_soal: total,
        nilai: percentage,
        tanggal: new Date().toLocaleString("id-ID")
      });
      console.log("✅ Skor berhasil mendarat di Database!");
    } catch (err) {
      console.error("❌ Gagal kirim skor:", err);
    }
  }

  const latihanCategoryLabelMap = {
    goi: "言語知識（文字・語彙） Pengetahuan Bahasa (Kosakata)",
    bunpou: "言語知識（文法） Pengetahuan Bahasa (Tata Bahasa)",
    dokkai: "読解 Dokkai Membaca",
    listening: "聴解 Mendengarkan",
    choukai: "聴解 Mendengarkan",
  };

  function getLatihanCategoryLabel(rawCategory = "") {
    return latihanCategoryLabelMap[String(rawCategory).toLowerCase()] || String(rawCategory || "-");
  }

  function setHistoryMode(isActive) {
  document.body.classList.toggle("history-mode", isActive);
  
  // Paksa ulang layout agar center sempurna
  const grid = document.getElementById("grid");
  if (grid) {
    grid.style.display = isActive ? "flex" : "";
    grid.style.justifyContent = isActive ? "center" : "";
  }
  
  const paginationContainer = document.getElementById("pagination-container");
  if (paginationContainer) paginationContainer.style.display = isActive ? "none" : "flex";
}

  function renderDashboard(user, profile, historyItems = [], options = {}) {
    const emailUser = !isGoogleUser(user);
    const photoUrl = resolveProfilePhoto(user, profile);
    const displayName = profile?.displayName || defaultDisplayName(user);
    const historyMarkup = historyItems.length
      ? historyItems.map((d) => {
          const isLulus = d.nilai >= 60;
          const statusClass = isLulus ? "status-lulus" : "status-remidi";
          const kategoriLabel = getLatihanCategoryLabel(d.kategori);
          return `
            <article class="dashboard-history-item">
              <div>
                <p class="dashboard-history-date">📅 ${d.tanggal ? d.tanggal.split(',')[0] : '-'}</p>
                <h4>📚 ${kategoriLabel}</h4>
                <span class="dashboard-level">Level ${d.level || '-'}</span>
              </div>
              <div class="dashboard-history-score ${statusClass}">${d.nilai || 0}%</div>
              <div class="dashboard-history-meta">
                <p>🎯 ${d.skor_benar || 0}/${d.total_soal || 0}</p>
                <strong class="${statusClass}">${isLulus ? 'LULUS ✅' : 'GAGAL ❌'}</strong>
              </div>
            </article>
          `;
        }).join("")
      : '<div class="dashboard-empty">Belum ada riwayat latihan tersimpan.</div>';

    const avatarPresetMarkup = avatarPresets.map((preset) => {
      const avatarUrl = buildPresetAvatarDataUrl(preset);
      return `<button type="button" class="avatar-preset-btn" data-avatar-url="${avatarUrl}" title="${preset.label}">${preset.emoji}</button>`;
    }).join("");

    return `
      <section class="dashboard-shell">
        <div class="dashboard-cover">
          <button id="dashboard-settings-btn" type="button" class="dashboard-settings-btn" aria-label="Pengaturan profil" title="Pengaturan profil">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>
        <div class="dashboard-profile-card">
          <div class="dashboard-avatar-wrap">
            <div class="dashboard-avatar-frame">
              <img id="dashboard-avatar-preview" src="${photoUrl}" alt="Avatar profil">
            </div>
            <button id="dashboard-camera-btn" class="dashboard-camera-btn" type="button" aria-label="Ubah avatar" title="Ubah avatar">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </button>
          </div>
          <h2>${displayName}</h2>
          <p class="dashboard-email">${user.email || '-'}</p>
        </div>

        <div id="dashboard-modal-backdrop" class="dashboard-modal-backdrop" hidden></div>

        <section id="dashboard-settings-modal" class="dashboard-modal" role="dialog" aria-modal="true" aria-label="Pengaturan profil" hidden>
          <button type="button" class="dashboard-modal-close" data-close-modal>✕</button>
          <h4>Pengaturan Profil</h4>
          <form id="dashboard-name-form" class="dashboard-profile-form">
            <label for="dashboard-name-input">Nama tampilan</label>
            <input id="dashboard-name-input" type="text" value="${displayName}" maxlength="40" required>
            <p class="dashboard-form-note">Nama ini yang akan tampil di sidebar & dashboard.</p>
            <button type="submit" class="dashboard-save-btn">Simpan nama</button>
          </form>
        </section>

        <section id="dashboard-avatar-modal" class="dashboard-modal" role="dialog" aria-modal="true" aria-label="Ganti avatar" hidden>
          <button type="button" class="dashboard-modal-close" data-close-modal>✕</button>
          <h4>Ganti Avatar</h4>
          <div class="dashboard-avatar-tools">
            <p>Pilih avatar default</p>
            <div class="avatar-preset-grid">${avatarPresetMarkup}</div>
            ${emailUser
              ? '<label class="dashboard-upload-label" for="dashboard-avatar-upload">Atau upload foto</label><input id="dashboard-avatar-upload" type="file" accept="image/*">'
              : '<p class="dashboard-upload-disabled">Login Google: upload dimatikan. Silakan pilih avatar default.</p>'}
            <button id="dashboard-avatar-save" type="button" class="dashboard-save-btn">Simpan avatar</button>
          </div>
        </section>

        <section id="dashboard-crop-modal" class="dashboard-modal crop-modal" role="dialog" aria-modal="true" aria-label="Crop avatar" hidden>
          <button type="button" class="dashboard-modal-close" data-close-crop>✕</button>
          <h4>Sesuaikan Foto Profil (Square)</h4>
          <div class="crop-square-wrap">
            <canvas id="dashboard-crop-canvas" width="320" height="320"></canvas>
          </div>
          <input id="dashboard-crop-zoom" type="range" min="1" max="3" step="0.01" value="1">
          <div class="crop-actions">
            <button id="dashboard-crop-cancel" type="button" class="dashboard-cancel-btn">Batal</button>
            <button id="dashboard-crop-apply" type="button" class="dashboard-save-btn">Crop & Gunakan</button>
          </div>
        </section>

        <div class="dashboard-history-panel">
          <h3>📊 Riwayat Latihan</h3>
          <p class="dashboard-history-sub">Rekap berdasarkan kategori latihan yang dijalani.</p>
          <div class="dashboard-history-list">${historyMarkup}</div>
          ${options.error ? '<p class="dashboard-error">⚠️ Gagal memuat sebagian data riwayat.</p>' : ''}
        </div>
      </section>
    `;
  }

  function bindDashboardProfileEvents(user, profile = null) {
    const settingsBtn = document.getElementById("dashboard-settings-btn");
    const cameraBtn = document.getElementById("dashboard-camera-btn");
    const backdrop = document.getElementById("dashboard-modal-backdrop");
    const settingsModal = document.getElementById("dashboard-settings-modal");
    const avatarModal = document.getElementById("dashboard-avatar-modal");
    const closeButtons = document.querySelectorAll("[data-close-modal]");
    const nameForm = document.getElementById("dashboard-name-form");
    const nameInput = document.getElementById("dashboard-name-input");
    const avatarPreview = document.getElementById("dashboard-avatar-preview");
    const avatarUpload = document.getElementById("dashboard-avatar-upload");
    const avatarSaveBtn = document.getElementById("dashboard-avatar-save");
    const presetButtons = document.querySelectorAll(".avatar-preset-btn");

    if (!settingsBtn || !cameraBtn || !backdrop || !settingsModal || !avatarModal || !nameForm || !nameInput || !avatarPreview || !avatarSaveBtn) return;

    let selectedPhotoUrl = resolveProfilePhoto(user, profile);
    let photoSource = profile?.photoSource || (isGoogleUser(user) ? "google" : "default");

    function closeAllModals() {
      backdrop.hidden = true;
      settingsModal.hidden = true;
      avatarModal.hidden = true;
      const cropModal = document.getElementById("dashboard-crop-modal");
      if (cropModal) cropModal.hidden = true;
    }

    function openModal(type) {
      backdrop.hidden = false;
      settingsModal.hidden = type !== "settings";
      avatarModal.hidden = type !== "avatar";
      if (type === "settings") nameInput.focus();
    }

    settingsBtn.addEventListener("click", () => openModal("settings"));
    cameraBtn.addEventListener("click", () => openModal("avatar"));
    backdrop.addEventListener("click", closeAllModals);
    closeButtons.forEach((btn) => btn.addEventListener("click", closeAllModals));

    presetButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedPhotoUrl = btn.dataset.avatarUrl || selectedPhotoUrl;
        photoSource = "preset";
        avatarPreview.src = selectedPhotoUrl;
        presetButtons.forEach((el) => el.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    const cropModal = document.getElementById("dashboard-crop-modal");
    const cropCanvas = document.getElementById("dashboard-crop-canvas");
    const cropZoom = document.getElementById("dashboard-crop-zoom");
    const cropApplyBtn = document.getElementById("dashboard-crop-apply");
    const cropCancelBtn = document.getElementById("dashboard-crop-cancel");
    const cropCloseBtn = document.querySelector("[data-close-crop]");

    const cropState = {
      image: null,
      scale: 1,
      minScale: 1,
      offsetX: 0,
      offsetY: 0,
      dragging: false,
      startX: 0,
      startY: 0
    };

    function drawCropPreview() {
      if (!cropCanvas || !cropState.image) return;
      const ctx = cropCanvas.getContext("2d");
      const { width, height } = cropCanvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, width, height);
      const drawW = cropState.image.width * cropState.scale;
      const drawH = cropState.image.height * cropState.scale;
      const dx = (width - drawW) / 2 + cropState.offsetX;
      const dy = (height - drawH) / 2 + cropState.offsetY;
      ctx.drawImage(cropState.image, dx, dy, drawW, drawH);
    }

    function openCropModal(dataUrl) {
      if (!cropModal || !cropCanvas || !cropZoom) return;
      const img = new Image();
      img.onload = () => {
        cropState.image = img;
        const baseScale = Math.max(cropCanvas.width / img.width, cropCanvas.height / img.height);
        cropState.minScale = baseScale;
        cropState.scale = baseScale;
        cropState.offsetX = 0;
        cropState.offsetY = 0;
        cropZoom.min = String(baseScale);
        cropZoom.max = String(baseScale * 3);
        cropZoom.value = String(baseScale);
        backdrop.hidden = false;
        cropModal.hidden = false;
        drawCropPreview();
      };
      img.src = dataUrl;
    }

    function closeCropModal() {
      if (!cropModal) return;
      cropModal.hidden = true;
      if (!settingsModal.hidden || !avatarModal.hidden) return;
      backdrop.hidden = true;
    }

    if (cropZoom) {
      cropZoom.addEventListener("input", () => {
        cropState.scale = Math.max(cropState.minScale, Number(cropZoom.value || cropState.minScale));
        drawCropPreview();
      });
    }

    if (cropCanvas) {
      cropCanvas.addEventListener("pointerdown", (event) => {
        cropState.dragging = true;
        cropState.startX = event.clientX;
        cropState.startY = event.clientY;
      });
      cropCanvas.addEventListener("pointermove", (event) => {
        if (!cropState.dragging) return;
        const dx = event.clientX - cropState.startX;
        const dy = event.clientY - cropState.startY;
        cropState.startX = event.clientX;
        cropState.startY = event.clientY;
        cropState.offsetX += dx;
        cropState.offsetY += dy;
        drawCropPreview();
      });
      ["pointerup", "pointerleave", "pointercancel"].forEach((evt) => {
        cropCanvas.addEventListener(evt, () => {
          cropState.dragging = false;
        });
      });
    }

    if (cropApplyBtn && cropCanvas) {
      cropApplyBtn.addEventListener("click", () => {
        if (!cropState.image) return;
        const outputCanvas = document.createElement("canvas");
        outputCanvas.width = 512;
        outputCanvas.height = 512;
        const outCtx = outputCanvas.getContext("2d");
        outCtx.fillStyle = "#0f172a";
        outCtx.fillRect(0, 0, 512, 512);
        const scaleRatio = 512 / cropCanvas.width;
        const drawW = cropState.image.width * cropState.scale * scaleRatio;
        const drawH = cropState.image.height * cropState.scale * scaleRatio;
        const dx = ((cropCanvas.width - cropState.image.width * cropState.scale) / 2 + cropState.offsetX) * scaleRatio;
        const dy = ((cropCanvas.height - cropState.image.height * cropState.scale) / 2 + cropState.offsetY) * scaleRatio;
        outCtx.drawImage(cropState.image, dx, dy, drawW, drawH);
        selectedPhotoUrl = outputCanvas.toDataURL("image/jpeg", 0.92);
        photoSource = "upload";
        avatarPreview.src = selectedPhotoUrl;
        closeCropModal();
      });
    }

    if (cropCancelBtn) cropCancelBtn.addEventListener("click", closeCropModal);
    if (cropCloseBtn) cropCloseBtn.addEventListener("click", closeCropModal);

    if (avatarUpload) {
      avatarUpload.addEventListener("change", () => {
        const file = avatarUpload.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
          alert("File avatar harus berupa gambar.");
          avatarUpload.value = "";
          return;
        }
        if (file.size > 4 * 1024 * 1024) {
          alert("Maksimal ukuran avatar 4MB.");
          avatarUpload.value = "";
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          const imageSrc = typeof reader.result === "string" ? reader.result : "";
          if (imageSrc) openCropModal(imageSrc);
        };
        reader.readAsDataURL(file);
      });
    }

    nameForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const displayName = (nameInput.value || "").trim();
      if (displayName.length < 2) {
        alert("Nama minimal 2 karakter.");
        return;
      }
      try {
        if (window.updateProfile && window.currentUser) {
          await window.updateProfile(window.currentUser, { displayName });
        }
        await saveUserProfile(user.uid, {
          displayName,
          photoURL: selectedPhotoUrl,
          photoSource
        });
        cachedUserProfile = { displayName, photoURL: selectedPhotoUrl, photoSource };
        userNameDisplay.textContent = displayName;
        applyUserAvatar(window.currentUser, cachedUserProfile);
        const title = document.querySelector(".dashboard-profile-card h2");
        if (title) title.textContent = displayName;
        alert("Nama profil berhasil diperbarui.");
        closeAllModals();
      } catch (error) {
        alert("Gagal menyimpan profil: " + error.message);
      }
    });

    avatarSaveBtn.addEventListener("click", async () => {
      const displayName = (nameInput.value || "").trim() || defaultDisplayName(user);
      try {
        if (window.updateProfile && window.currentUser) {
          await window.updateProfile(window.currentUser, { displayName });
        }
        await saveUserProfile(user.uid, {
          displayName,
          photoURL: selectedPhotoUrl,
          photoSource
        });
        cachedUserProfile = { displayName, photoURL: selectedPhotoUrl, photoSource };
        userNameDisplay.textContent = displayName;
        applyUserAvatar(window.currentUser, cachedUserProfile);
        alert("Avatar berhasil diperbarui.");
        closeAllModals();
      } catch (error) {
        alert("Gagal menyimpan avatar: " + error.message);
      }
    });
  }

  const historyBtn = dashboardBtn;

  if (historyBtn) {
    historyBtn.addEventListener("click", async () => {
      if (!window.currentUser) {
        alert("Silahkan Login!");
        return;
      }

      grid.innerHTML = '<div class="history-container" style="text-align:center;padding:50px;"><p>⏳ Menyiapkan dashboard...</p></div>';
      if (resultInfo) resultInfo.textContent = "Dasbor saya";
      if (typeof setHistoryMode === "function") setHistoryMode(true);
      if (typeof closeSidebar === "function") closeSidebar();

      try {
        const uid = window.currentUser.uid;
        const profile = cachedUserProfile || await loadUserProfile(uid);
        cachedUserProfile = profile;
        const q = (window.firebaseDb && window.doc) ? await fetchHistoryData(uid) : null;
        const historyItems = [];
        if (q && !q.empty) q.forEach((item) => historyItems.push(item.data()));

        grid.innerHTML = renderDashboard(window.currentUser, profile, historyItems);
        bindDashboardProfileEvents(window.currentUser, profile);
      } catch (err) {
        console.error("Error loading dashboard:", err);
        const profile = cachedUserProfile || null;
        grid.innerHTML = renderDashboard(window.currentUser, profile, [], { error: true });
        bindDashboardProfileEvents(window.currentUser, profile);
      }
    });
  }

  // Fungsi helper buat ngambil data (pake modul firebase yang udah kita pasang)
  async function fetchHistoryData(uid) {
    const { collection, getDocs, query, orderBy } = await import("https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js");
    const historyRef = collection(window.firebaseDb, "users", uid, "history");
    const q = query(historyRef, orderBy("tanggal", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }

  // Panggil render saat pertama kali dimuat
  window.addEventListener("resize", enforceMobileTopbarOrder);
  enforceMobileTopbarOrder();
  
  setAccessMode("locked");
  render();
});
