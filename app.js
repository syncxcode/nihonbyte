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
  const bottomNavHub = document.getElementById("bottomNavHub");
  const sidebarDuoNav = document.getElementById("sidebar-duo-nav");
  
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
  const languageSwitch = document.getElementById("languageSwitch");
  const languageSwitchIcon = document.getElementById("languageSwitchIcon");

  let originalOverflow = '';
  let originalPosition = '';
  let originalTop = '';
  let originalWidth = '';
  let savedScrollPosition = 0;
  let mobileSidebarOpenedByHamburger = false;

  const DESKTOP_LAYOUT_QUERY = "(min-width: 769px)";

  const FLAG_SVG = {
    id: '<defs><clipPath id="flagCircleId"><circle cx="32" cy="32" r="24"/></clipPath></defs><g clip-path="url(#flagCircleId)"><rect x="8" y="8" width="48" height="24" fill="#e11d48"/><rect x="8" y="32" width="48" height="24" fill="#ffffff"/></g><circle cx="32" cy="32" r="24" fill="none" stroke="#cbd5e1" stroke-width="2"/>',
    en: '<defs><clipPath id="flagCircleEn"><circle cx="32" cy="32" r="24"/></clipPath></defs><g clip-path="url(#flagCircleEn)"><rect x="8" y="8" width="48" height="48" fill="#ffffff"/><rect x="8" y="8" width="48" height="8" fill="#b91c1c"/><rect x="8" y="24" width="48" height="8" fill="#b91c1c"/><rect x="8" y="40" width="48" height="8" fill="#b91c1c"/><rect x="8" y="8" width="24" height="24" fill="#1d4ed8"/></g><circle cx="32" cy="32" r="24" fill="none" stroke="#cbd5e1" stroke-width="2"/>'
  };

  const PRACTICE_PROGRESS_KEY_PREFIX = "nihonbyte.practice.progress.v1";

  function getPracticeProgressStorageKey(uid) {
    return `${PRACTICE_PROGRESS_KEY_PREFIX}.${uid}`;
  }

  function readPracticeProgressLocal(uid) {
    try {
      const raw = localStorage.getItem(getPracticeProgressStorageKey(uid));
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.error("Gagal baca progress local:", error);
      return null;
    }
  }

  function writePracticeProgressLocal(uid, data) {
    try {
      localStorage.setItem(getPracticeProgressStorageKey(uid), JSON.stringify(data));
    } catch (error) {
      console.error("Gagal simpan progress local:", error);
    }
  }

  function openMenuHub(){

  const grid = document.getElementById("grid");
  const hub = document.getElementById("menuHubContainer");

  grid.style.display = "none";
  hub.style.display = "block";

  renderMenuHub();

}

  function openStudy(){

const grid = document.getElementById("grid");
const hub = document.getElementById("menuHubContainer");

hub.style.display="none";
grid.style.display="grid";

}

  function currentLang() {
    return window.NIHONBYTE_I18N?.state?.current || "id";
  }

  function tMeaning(text) {
    return window.NIHONBYTE_I18N?.tMeaning ? window.NIHONBYTE_I18N.tMeaning(text) : text;
  }

  function shouldSkipTranslationNode(node) {
    if (!node) return true;
    const parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest("script, style, textarea, input, option")) return true;
    if (parent.closest('[data-role="sentence-jp"], [data-role="sentence-kana"], [data-role="sentence-romaji"], .kanji, .kana, .romaji')) return true;
    return false;
  }

  function translateRenderedContent(root = document.body) {
    if (currentLang() !== "en" || !root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode) {
      if (!shouldSkipTranslationNode(textNode)) {
        const original = textNode.nodeValue;
        const trimmed = original?.trim();
        if (trimmed) {
          const translated = tMeaning(trimmed);
          if (translated && translated !== trimmed) {
            textNode.nodeValue = original.replace(trimmed, translated);
          }
        }
      }
      textNode = walker.nextNode();
    }

    root.querySelectorAll("[aria-label], [title], [placeholder]").forEach((el) => {
      ["aria-label", "title", "placeholder"].forEach((attr) => {
        const value = el.getAttribute(attr);
        if (!value) return;
        const translated = tMeaning(value);
        if (translated && translated !== value) el.setAttribute(attr, translated);
      });
    });
  }


  let translateObserver = null;
  let translateRaf = null;

  function queueTranslateRenderedContent() {
    if (currentLang() !== "en") return;
    if (translateRaf) cancelAnimationFrame(translateRaf);
    translateRaf = requestAnimationFrame(() => {
      translateRaf = null;
      translateRenderedContent(document.body);
    });
  }

  function setupTranslateObserver() {
    if (translateObserver) return;
    translateObserver = new MutationObserver(() => queueTranslateRenderedContent());
    translateObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["aria-label", "title", "placeholder"]
    });
  }

  function updateLanguageSwitchIcon() {
    if (!languageSwitchIcon) return;
    languageSwitchIcon.innerHTML = currentLang() === "en" ? FLAG_SVG.en : FLAG_SVG.id;
  }

  function updateLanguageSwitchLabel() {
    if (!languageSwitch) return;
    const label = currentLang() === "en" ? "Switch Language" : "Ganti Bahasa";
    const textEl = languageSwitch.querySelector("span");
    if (textEl) textEl.textContent = label;
    languageSwitch.setAttribute("aria-label", label);
    languageSwitch.setAttribute("title", label);
  }

  function isDesktopLayout() {
    return window.matchMedia(DESKTOP_LAYOUT_QUERY).matches;
  }

  function isMobilePortraitLayout() {
    return !isDesktopLayout() && window.matchMedia("(orientation: portrait)").matches;
  }

  function isHamburgerDrawerMode() {
    if (!hamburger) return false;
    const style = window.getComputedStyle(hamburger);
    return style.display !== "none" && style.visibility !== "hidden";
  }

  function applyResponsiveSidebarLayout({ preserveMobileState = false } = {}) {
    if (!sidebar || !overlay || !hamburger) return;

    if (!isHamburgerDrawerMode()) {
      mobileSidebarOpenedByHamburger = false;
      sidebar.classList.add("active");
      overlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
    } else if (preserveMobileState) {
      sidebar.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("sidebar-open");
      hamburger.setAttribute("aria-expanded", "true");
    } else {
      mobileSidebarOpenedByHamburger = false;
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  }

  // ==========================================
  // NAVIGATION (Duolingo-ish)
  // - Desktop: sidebar ringkas (primary nav)
  // - Mobile: drawer minimal (shortcut), navigasi utama tetap bottom navbar
  // Catatan: mode ini murni UI/UX (tanpa "shop", 100% gratis)
  // ==========================================

  let duoNavInitialized = false;

  function setupDuoSidebarNav() {
    if (!sidebarDuoNav || duoNavInitialized) return;
    duoNavInitialized = true;

    // Aktifkan mode CSS.
    document.body.classList.add("duo-nav-enabled");

    // Event delegation biar rapi + gampang re-render.
    sidebarDuoNav.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-duo-nav]");
      if (!btn) return;
      const action = btn.dataset.duoNav || "";
      handleDuoSidebarNavAction(action);
    });

    renderDuoSidebarNav();
  }

  function renderDuoSidebarNav() {
    if (!sidebarDuoNav) return;

    const desktopMarkup = `
      <button type="button" class="duo-nav-item" data-duo-nav="learn" aria-label="Flashcard">
        <img class="duo-nav-icon" src="./assets/icons/duotone-native/nav-flashcard-stack.svg?v=2" alt="" aria-hidden="true">
        <span>Flashcard</span>
      </button>


      <button type="button" class="duo-nav-item" data-duo-nav="practice" aria-label="Latihan">
        <img class="duo-nav-icon" src="./assets/icons/duotone-native/nav-latihan-target.svg?v=2" alt="" aria-hidden="true">
        <span>Latihan</span>
      </button>


      <button type="button" class="duo-nav-item" data-duo-nav="menu" aria-label="Belajar (Menu)">
        <img class="duo-nav-icon" src="./assets/icons/duotone-native/nav-belajar-open-book.svg?v=2" alt="" aria-hidden="true">
        <span>Belajar</span>
      </button>

      <button type="button" class="duo-nav-item" data-duo-nav="favorit" aria-label="Favorit">
        <img class="duo-nav-icon" src="./assets/icons/duotone-native/nav-favorit-heart.svg?v=2" alt="" aria-hidden="true">
        <span>Favorit</span>
      </button>

      <button type="button" class="duo-nav-support" data-duo-nav="support" aria-label="Dukung Pengembang">
        <img class="duo-nav-icon" src="./assets/icons/duotone-native/nav-dukung-hand-heart.svg?v=2" alt="" aria-hidden="true">
        <span>Dukung Pengembang</span>
      </button>
    `;

    const mobileMarkup = `
      <button type="button" class="duo-nav-item" data-duo-nav="favorit" aria-label="Favorit">
        <img class="duo-nav-icon" src="./assets/icons/duotone-native/nav-favorit-heart.svg?v=2" alt="" aria-hidden="true">
        <span>Favorit</span>
      </button>

      <button type="button" class="duo-nav-item" data-duo-nav="support" aria-label="Dukung Pengembang">
        <img class="duo-nav-icon" src="./assets/icons/duotone-native/nav-dukung-hand-heart.svg?v=2" alt="" aria-hidden="true">
        <span>Dukung Pengembang</span>
      </button>
    `;

    sidebarDuoNav.innerHTML = isDesktopLayout() ? desktopMarkup : mobileMarkup;
    syncDuoSidebarNav();
  }

  function handleDuoSidebarNavAction(action) {
    if (!action) return;

    // GUARD: blokir navigasi sidebar saat latihan aktif
    if (isTesting || document.body.classList.contains('training-session')) {
      openInfoModal("<h3>Latihan sedang berjalan</h3><p>Selesaikan dulu sesi latihan ya</p>");
      return;
    }

    if (action === "learn") {
      selectedLevel = "all";
      selectedType = "verb-adj-only";
      currentPage = 1;
      lastQueryState = "";
      if (typeof category !== "undefined" && category) category.value = "all";
      if (search) search.value = "";
      if (modalSearchInput) modalSearchInput.value = "";
      viewMode = "vocab";
      render();
      closeSidebar();
      return;
    }

    if (action === "menu") {
      viewMode = "menu";
      if (search) search.value = "";
      render();
      closeSidebar();
      return;
    }

    if (action === "practice") {
      viewMode = "practice-hub";
      render();
      closeSidebar();
      return;
    }

    if (action === "open-filter") {
      document.getElementById("searchBtn")?.click();
      closeSidebar();
      return;
    }

    if (action === "open-bottom-menu") {
      navigateBottomTab("menu");
      closeSidebar();
      return;
    }

    if (action === "open-bottom-practice") {
      navigateBottomTab("practice");
      closeSidebar();
      return;
    }

    if (action === "support") {
      document.getElementById("supportBtn")?.click();
      closeSidebar();
      return;
    }

    if (action === "favorit") {
      if (!window.currentUser) {
        openInfoModal("<h3>Login Dulu</h3><p>Login untuk melihat koleksi kata favorit kamu.</p>");
        return;
      }
      viewMode = "favorit";
      if (search) search.value = "";
      if (category) category.value = "all";
      render();
      closeSidebar();
      return;
    }

    if (action === "switch-language") {
      document.getElementById("languageSwitch")?.click();
      closeSidebar();
      return;
    }

    if (action.startsWith("letters:")) {
      const script = action.split(":")[1] || "hiragana";
      if (!ensureLoginForMenu()) return;
      viewMode = `letters:${script}`;
      if (search) search.value = "";
      render();
      closeSidebar();
      return;
    }
  }

  function syncDuoSidebarNav() {
    if (!sidebarDuoNav) return;

    // Reset state.
    sidebarDuoNav.querySelectorAll(".is-active").forEach((el) => el.classList.remove("is-active"));

    let activeKey = "learn";
    if (viewMode === "practice-hub") activeKey = "practice";
    else if (viewMode === "menu") activeKey = "menu";
    else if (viewMode === "support") activeKey = "support";
    else if (viewMode === "favorit") activeKey = "favorit";
    else if (viewMode.startsWith("letters:")) activeKey = "letters";
    else if (
      viewMode === "grammar" || viewMode.startsWith("grammar:") ||
      viewMode.startsWith("dev:")
    ) {
      activeKey = "menu";
    }

    // Mark active.
    const mainActive = sidebarDuoNav.querySelector(`[data-duo-nav="${activeKey}"]`);
    if (mainActive) mainActive.classList.add("is-active");

    if (viewMode.startsWith("letters:")) {
      const sub = sidebarDuoNav.querySelector(`[data-duo-nav="${viewMode}"]`);
      if (sub) sub.classList.add("is-active");
    }
  }

  let accessMode = "locked";
  let isEmailRegisterMode = false;
  let shouldOpenVerificationModalAfterSignup = false;


  const authActionUrl = window.location.origin && window.location.origin !== "null"
    ? `${window.location.origin}${window.location.pathname}`
    : "https://nihonbyte.web.app/";

  const avatarPresets = [
    { id: "aqua", label: "Aqua", color: "#0ea5e9", emoji: "AQ" },
    { id: "fox", label: "Fox", color: "#f97316", emoji: "FX" },
    { id: "dragon", label: "Dragon", color: "#10b981", emoji: "DR" },
    { id: "bird", label: "Bird", color: "#6366f1", emoji: "BD" },
    { id: "panda", label: "Panda", color: "#8b5cf6", emoji: "PN" },
    { id: "cat", label: "Cat", color: "#f43f5e", emoji: "CT" },
    { id: "ball", label: "Ball", color: "#14b8a6", emoji: "BL" },
    { id: "bike", label: "Bike", color: "#3b82f6", emoji: "BK" },
    { id: "bird2", label: "Robin", color: "#ef4444", emoji: "RB" },
    { id: "cheese", label: "Cheese", color: "#eab308", emoji: "CH" },
    { id: "football", label: "Football", color: "#f59e0b", emoji: "FB" },
    { id: "ramen", label: "Ramen", color: "#06b6d4", emoji: "RM" }
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

  function applyGuestDownloadRestrictions() {
    const isGuest = accessMode === "guest";
    document.querySelectorAll(".download-card-btn").forEach((btn) => {
      btn.classList.toggle("guest-restricted", isGuest);
      btn.setAttribute("aria-disabled", isGuest ? "true" : "false");
      btn.title = isGuest ? "Login untuk mengunduh kartu" : "Download Flashcard";
    });
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

    if (isGuest) {
      if (loggedOutView) loggedOutView.style.display = "block";
      if (loggedInView) loggedInView.style.display = "none";
      if (logoutFloatingBtn) logoutFloatingBtn.style.display = "none";
    }

    if (searchBtn) {
      searchBtn.disabled = isGuest;
      searchBtn.classList.toggle("guest-restricted", isGuest);
      searchBtn.setAttribute("aria-disabled", isGuest ? "true" : "false");
      searchBtn.title = isGuest ? "Pencarian dikunci di mode tamu" : "Buka pencarian & filter";
    }

    applyGuestDownloadRestrictions();
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
    const status = user.emailVerified ? "Sudah terverifikasi" : "Belum terverifikasi";
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
    setAccessMode("guest");
    viewMode = "menu";
    if (search) search.value = "";
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
        applyUserAvatar(user, cachedUserProfile);
        window.currentUser = user;
        updateAccountStatusUI(user);
        setAccessMode("logged-in");
        if (verificationHoldNote) verificationHoldNote.style.display = "none";

        // Cek onboarding dari local (fallback baca Firestore untuk data lama)
        try {
          let localProgress = readPracticeProgressLocal(user.uid);

          if (!localProgress?.onboardingDone && window.firebaseDb && window.doc && window.getDoc) {
            const legacyRef = window.doc(window.firebaseDb, "users", user.uid, "practice", "progress");
            const legacySnap = await window.getDoc(legacyRef);
            if (legacySnap.exists() && legacySnap.data()?.onboardingDone) {
              localProgress = legacySnap.data();
              writePracticeProgressLocal(user.uid, localProgress);
            }
          }

          if (!localProgress?.onboardingDone) {
            window.location.replace("./onboard/onboarding.html");
            return;
          }

          window._practiceProgress = localProgress;
        } catch (e) {
          console.error("Cek onboarding local gagal:", e);
          window.location.replace("./onboard/onboarding.html");
          return;
        }

        viewMode = "menu";
        selectedType = "verb-adj-only";
        selectedLevel = "all";
        if (search) search.value = "";
        await loadUserBookmarks(user.uid); // Load bookmarks saat login
        applyLevelGate(); // Apply level gate sesuai unlocked levels
        // Load progress dari Firestore
        await loadAllProgress(user.uid);
        render();
        if (shouldOpenVerificationModalAfterSignup && !user.emailVerified) {
          openAccountModal();
        }
        shouldOpenVerificationModalAfterSignup = false;
      } else if (user && !isVerifiedUser(user)) {
        if (window.currentUser) window.currentUser = null;
        window._practiceProgress = null;
        if (loggedOutView) loggedOutView.style.display = "block";
        if (loggedInView) loggedInView.style.display = "none";
        if (logoutFloatingBtn) logoutFloatingBtn.style.display = "none";
        setAccessMode("locked");
        updateAccountStatusUI(user);
        if (verificationHoldNote) {
          verificationHoldNote.textContent = "Email belum terverifikasi. Silakan verifikasi dulu sebelum masuk ke aplikasi.";
          verificationHoldNote.style.display = "block";
        }
      } else {
        loggedOutView.style.display = "block";
        loggedInView.style.display = "none";
        if (logoutFloatingBtn) logoutFloatingBtn.style.display = "none";
        loginBtn.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google"><span>Masuk dengan Google</span>`;
        window.currentUser = null;
        window._practiceProgress = null;
        updateAccountStatusUI(null);
        if (accessMode !== "guest") setAccessMode("locked");
        shouldOpenVerificationModalAfterSignup = false;
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
    // Pakai window.innerHeight (bukan 100dvh) agar akurat setelah rotasi di iOS
    const vh = window.innerHeight + 'px';
    document.body.style.height = vh;
    document.documentElement.style.height = vh;
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
    "goi-word-formation": "Pembentukan Kata",
    "goi-context-expression": "Ekspresi yang didefinisikan secara kontekstual",
    "goi-paraphrase": "Parafrasa",
    "goi-usage": "Penggunaan",
    "bunpou-form": "Tata bahasa kalimat (Memilih bentuk tata bahasa)",
    "bunpou-composition": "Tata bahasa kalimat (Komposisi kalimat)",
    "bunpou-text": "Tata Bahasa Teks",
    "dokkai-short": "Pemahaman Bacaan (Pendek)",
    "dokkai-medium": "Pemahaman Bacaan (Teks berukuran sedang)",
    "dokkai-long": "Pemahaman Bacaan (Bacaan Panjang)",
    "dokkai-information": "Pengambilan Informasi",
    "dokkai-integrated": "Pemahaman Terpadu",
    "dokkai-thematic": "Pemahaman Tematik (Bacaan panjang)",
    "dokkai-reading": "Dokkai Membaca",
    "choukai-listening": "Choukai Mendengarkan",
  };

  const goiSectionOrder = [
    "goi-kanji-reading",
    "goi-orthography",
    "goi-word-formation",   // N2 only
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

    // Soal per sesi dibedakan per level (~1 mnt/soal, dibagi rata 3 sesi)
    // N5: 6/sesi=18 (~20 mnt) | N4: 8/sesi=24 (~25 mnt) | N3: 10/sesi=30 (~30 mnt)
    // N2: 12/sesi=36 (~35 mnt) | N1: 13/sesi=39 (~40 mnt)
    const soalPerSession =
      level === "N5" ? 6 :
      level === "N4" ? 8 :
      level === "N3" ? 10 :
      level === "N2" ? 12 : 13; // N1

    sessions.forEach((session, idx) => {
      const questionsData = source[session.key] || [];
      const shuffledData = shuffleArray([...questionsData]).slice(0, soalPerSession);
      
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

    // CONDITIONAL SESSIONS PER LEVEL
    let sessions = [];
    let soalPerSession = 10; // default untuk N5

    if (level === "N5") {
      // N5: 4 sessions, 10 soal each = 40 total, ~20 menit
      sessions = [
        { key: "goi-kanji-reading", label: latihanSectionLabel["goi-kanji-reading"] },
        { key: "goi-orthography", label: latihanSectionLabel["goi-orthography"] },
        { key: "goi-context-expression", label: latihanSectionLabel["goi-context-expression"] },
        { key: "goi-paraphrase", label: latihanSectionLabel["goi-paraphrase"] }
      ];
      soalPerSession = 10;
    } else if (level === "N4") {
      // N4: 5 sessions (add goi-usage), 8 soal each = 40 total, ~25 menit
      sessions = [
        { key: "goi-kanji-reading", label: latihanSectionLabel["goi-kanji-reading"] },
        { key: "goi-orthography", label: latihanSectionLabel["goi-orthography"] },
        { key: "goi-context-expression", label: latihanSectionLabel["goi-context-expression"] },
        { key: "goi-paraphrase", label: latihanSectionLabel["goi-paraphrase"] },
        { key: "goi-usage", label: latihanSectionLabel["goi-usage"] }
      ];
      soalPerSession = 8;
    } else if (level === "N3") {
      // N3: 5 sessions (add goi-usage), 9 soal each = 45 total, ~30 menit
      sessions = [
        { key: "goi-kanji-reading", label: latihanSectionLabel["goi-kanji-reading"] },
        { key: "goi-orthography", label: latihanSectionLabel["goi-orthography"] },
        { key: "goi-context-expression", label: latihanSectionLabel["goi-context-expression"] },
        { key: "goi-paraphrase", label: latihanSectionLabel["goi-paraphrase"] },
        { key: "goi-usage", label: latihanSectionLabel["goi-usage"] }
      ];
      soalPerSession = 9;
    } else if (level === "N2") {
      // N2: 5 sessions (no ortografi, add word-formation), 9 soal each = 45 total, ~35 menit
      sessions = [
        { key: "goi-kanji-reading",     label: latihanSectionLabel["goi-kanji-reading"] },
        { key: "goi-word-formation",    label: latihanSectionLabel["goi-word-formation"] },
        { key: "goi-context-expression",label: latihanSectionLabel["goi-context-expression"] },
        { key: "goi-paraphrase",        label: latihanSectionLabel["goi-paraphrase"] },
        { key: "goi-usage",             label: latihanSectionLabel["goi-usage"] }
      ];
      soalPerSession = 9;
    } else if (level === "N1") {
      // N1: 4 sessions (no ortografi, no word-formation), distribusi 13+13+12+12 = 50 total, ~50 menit
      sessions = [
        { key: "goi-kanji-reading",     label: latihanSectionLabel["goi-kanji-reading"],     count: 13 },
        { key: "goi-context-expression",label: latihanSectionLabel["goi-context-expression"], count: 13 },
        { key: "goi-paraphrase",        label: latihanSectionLabel["goi-paraphrase"],         count: 12 },
        { key: "goi-usage",             label: latihanSectionLabel["goi-usage"],              count: 12 }
      ];
      soalPerSession = 13;
    } else {
      return all;
    }

    sessions.forEach((session, idx) => {
      const questionsData = source[session.key] || [];
      
      // Acak dulu, terus ambil sesuai soalPerSession (atau session.count kalau ada)
      const take = session.count || soalPerSession;
      const shuffledData = shuffleArray([...questionsData]).slice(0, take);
      
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
    const source = window.latihanDokkaiReal && window.latihanDokkaiReal[level] ? window.latihanDokkaiReal[level] : {};
    const all = [];

    // CONDITIONAL SESSIONS PER LEVEL (dengan waktu yang tepat)
    let sessions = [];
    let textPerSession = 5;

    if (level === "N5") {
      // N5: 3 subsesi, 40 menit
      sessions = [
        { key: "dokkai-short", label: latihanSectionLabel["dokkai-short"] },
        { key: "dokkai-medium", label: latihanSectionLabel["dokkai-medium"] },
        { key: "dokkai-information", label: latihanSectionLabel["dokkai-information"] }
      ];
      textPerSession = 5;
    } else if (level === "N4") {
      // N4: 3 subsesi, 55 menit
      sessions = [
        { key: "dokkai-short", label: latihanSectionLabel["dokkai-short"] },
        { key: "dokkai-medium", label: latihanSectionLabel["dokkai-medium"] },
        { key: "dokkai-information", label: latihanSectionLabel["dokkai-information"] }
      ];
      textPerSession = 5;
    } else if (level === "N3") {
      // N3: 4 subsesi, 70 menit
      sessions = [
        { key: "dokkai-short", label: latihanSectionLabel["dokkai-short"] },
        { key: "dokkai-medium", label: latihanSectionLabel["dokkai-medium"] },
        { key: "dokkai-long", label: latihanSectionLabel["dokkai-long"] },
        { key: "dokkai-information", label: latihanSectionLabel["dokkai-information"] }
      ];
      textPerSession = 4;
    } else if (level === "N2") {
      // N2: 5 subsesi, 70 menit
      sessions = [
        { key: "dokkai-short", label: latihanSectionLabel["dokkai-short"] },
        { key: "dokkai-medium", label: latihanSectionLabel["dokkai-medium"] },
        { key: "dokkai-integrated", label: latihanSectionLabel["dokkai-integrated"] },
        { key: "dokkai-thematic", label: latihanSectionLabel["dokkai-thematic"] },
        { key: "dokkai-information", label: latihanSectionLabel["dokkai-information"] }
      ];
      textPerSession = 4;
    } else if (level === "N1") {
      // N1: 6 subsesi, 70 menit
      sessions = [
        { key: "dokkai-short", label: latihanSectionLabel["dokkai-short"] },
        { key: "dokkai-medium", label: latihanSectionLabel["dokkai-medium"] },
        { key: "dokkai-long", label: latihanSectionLabel["dokkai-long"] },
        { key: "dokkai-integrated", label: latihanSectionLabel["dokkai-integrated"] },
        { key: "dokkai-thematic", label: latihanSectionLabel["dokkai-thematic"] },
        { key: "dokkai-information", label: latihanSectionLabel["dokkai-information"] }
      ];
      textPerSession = 4;
    } else {
      return all;
    }

    sessions.forEach((session, idx) => {
      const passagesData = source[session.key] || [];
      
      // Acak urutan teks, terus ambil sesuai textPerSession
      const shuffledPassages = shuffleArray([...passagesData]).slice(0, textPerSession);
      
      shuffledPassages.forEach((passage, passageIndex) => {
        passage.questions.forEach((q) => {
          all.push({
            passage: passage.passage,
            prompt: q.question,
            options: q.options,
            answer: q.answer,
            translation: q.translation,
            level: level,
            section: session.key,
            sectionLabel: session.label,
            sectionIndex: idx + 1,
            sectionTotal: sessions.length,
            passageIndex: passageIndex + 1,
            passageTotal: shuffledPassages.length
          });
        });
      });
    });

    return all;
  }

  function generateExerciseOptions(question) {
    // MANTRA BARU: Kalau soal dari format JLPT bawa 'options', pakai itu & acak urutannya!
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
      openInfoModal("<h3>Mode Latihan Wajib Login <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><rect x='3' y='11' width='18' height='11' rx='2' ry='2'/><path d='M7 11V7a5 5 0 0 1 10 0v4'/></svg></h3><p>Silakan masuk dengan Google atau Email dulu untuk membuka fitur latihan.</p>");
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

    // Timer dibedakan per mainType dan level
    let defaultMinutes = 20;
    if (mainType === "bunpou") {
      defaultMinutes = level === "N5" ? 20 : level === "N4" ? 25 : level === "N3" ? 30 : level === "N2" ? 35 : 40; // N1=40
    } else if (mainType === "dokkai") {
      defaultMinutes = level === "N5" ? 40 : (level === "N4" ? 55 : 40); // N5=40m, N4=55m
    } else { // Goi
      defaultMinutes = level === "N5" ? 20 : (level === "N4" ? 25 : 20);
    }
    sessionTimeLeft = defaultMinutes * 60;

    renderQuiz();
    startTimer();
  }

  // ==========================================
  // CHOUKAI â€” LISTENING COMPREHENSION
  // Session-based, mirip logika Goi (multi-sesi per level)
  // ==========================================

  // State choukai
  let choukaiIndex    = 0;
  let choukaiScore    = 0;
  let choukaiData_    = [];   // soal aktif (sudah diacak, flat array dari semua sesi)
  let choukaiLevel_   = "N5";
  let choukaiReplay   = 2;    // max replay
  let choukaiSlow     = false;
  let choukaiPlaying  = false;
  let choukaiAnswered = false;
  let choukaiTimer    = null; // interval ID untuk countdown
  let choukaiTimeLeft = 0;    // sisa waktu (detik)

  // Waktu per level (menit)
  const CHOUKAI_TIME = { N5: 30, N4: 35, N3: 40, N2: 50, N1: 55 };

  // Bangun flat array soal dari semua sesi level
  function buildChoukaiSessionQuestions(level) {
    const levelData = (typeof choukaiData !== "undefined" && choukaiData[level]) ? choukaiData[level] : null;
    const availability = (typeof CHOUKAI_AVAILABILITY !== "undefined" && CHOUKAI_AVAILABILITY[level]) ? CHOUKAI_AVAILABILITY[level] : [];
    const sessionsMeta = (typeof CHOUKAI_SESSIONS !== "undefined") ? CHOUKAI_SESSIONS : {};
    const all = [];

    if (!levelData || availability.length === 0) return all;

    availability.forEach((sessionKey, idx) => {
      const pool = levelData[sessionKey] || [];
      if (pool.length === 0) return;
      const shuffled = shuffleArray([...pool]);
      // Ambil maks 5 soal per sesi (bisa disesuaikan)
      const picked = shuffled.slice(0, 5).map(q => ({
        ...q,
        sessionKey,
        sessionLabel: sessionsMeta[sessionKey]?.label || sessionKey,
        sessionKanji: sessionsMeta[sessionKey]?.kanji || "",
        sessionIndex: idx + 1,
        sessionTotal: availability.length,
      }));
      all.push(...picked);
    });

    return all;
  }

  // SVG icons untuk choukai (mengganti emoji)
  const CHOUKAI_SVG = {
    speaker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    play:    `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    stop:    `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
    replay:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 .49-3.93"/></svg>`,
    turtle:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M5 12H3"/><path d="M21 12h-2"/><path d="M8 7l-1-2"/><path d="M17 7l1-2"/><path d="M8 17l-1 2"/><path d="M17 17l1 2"/></svg>`,
    bell:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    check:   `<svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
    cross:   `<svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    clock:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  };

  function _startChoukaiTimer() {
    clearInterval(choukaiTimer);
    choukaiTimer = setInterval(() => {
      choukaiTimeLeft = Math.max(0, choukaiTimeLeft - 1);
      // Pakai #quiz-timer â€” ID yang sama dengan Dokkai/Goi
      const timerEl = document.getElementById("quiz-timer");
      if (timerEl) timerEl.textContent = formatSessionTime(choukaiTimeLeft);
      if (choukaiTimeLeft <= 0) {
        clearInterval(choukaiTimer);
        _endChoukai(true);
      }
    }, 1000);
  }

  // Render HTML choukai ke #grid â€” gaya Dokkai (split screen)
  function renderChoukai() {
    const item    = choukaiData_[choukaiIndex];
    const total   = choukaiData_.length;
    const isN5    = choukaiLevel_ === "N5";
    const labels  = ["A", "B", "C", "D"];

    if (!item) { _endChoukai(true); return; }

    const waveBars = Array.from({ length: 10 }, () =>
      `<div class="choukai-wave-bar"></div>`
    ).join("");

    const optBtns = item.options.map((opt, i) => `
      <button class="quiz-opt-btn-pro" data-choukai-index="${i}">${opt}</button>`
    ).join("");

    const slowBtn = isN5
      ? `<button class="choukai-btn-slow" id="choukaiSlowBtn" title="Putar lebih lambat">
           <span class="choukai-slow-icon">${CHOUKAI_SVG.turtle}</span> Lambat
         </button>`
      : "";

    grid.className = "";
    grid.classList.add("quiz-active-mode");
    document.body.classList.add("training-session");

    if (resultInfo) resultInfo.textContent = "é ‘å¼µã£ã¦ãã ã•ã„";

    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.style.display = "none";
    }

    const sessionLabel = item.sessionLabel || "";
    const sessionKanji = item.sessionKanji ? ` · ${item.sessionKanji}` : "";

    // â”€â”€ STRUKTUR IDENTIK DOKKAI â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    grid.innerHTML = `
      <div class="dokkai-wrapper-pro">
        <button id="finishBtnManual">Akhiri Test</button>

        <!-- KIRI: Audio Player (menggantikan passage teks Dokkai) -->
        <div class="dokkai-passage-side">
          <div class="choukai-player-panel">
            <div class="choukai-stage" id="choukaiStage">
              <span class="choukai-speaker-icon">${CHOUKAI_SVG.speaker}</span>
              <div class="choukai-waveform">${waveBars}</div>
              <span class="choukai-idle-hint">Tekan Putar untuk memulai</span>
            </div>

            <div class="choukai-status-label" id="choukaiStatus">Siap diputar</div>

            <div class="choukai-controls">
              <button class="choukai-btn-play" id="choukaiPlayBtn">
                <span class="choukai-play-icon">${CHOUKAI_SVG.play}</span> Putar
              </button>
              ${slowBtn}
              <div class="choukai-replay-counter" id="choukaiReplayCounter">
                <div class="choukai-replay-dot" id="choukaiDot1"></div>
                <div class="choukai-replay-dot" id="choukaiDot2"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- KANAN: Soal + Pilihan (identik sisi kanan Dokkai) -->
        <div class="dokkai-question-side">
          <p class="quiz-section-title">聴解 / Choukai (Mendengarkan) &bull; ${choukaiLevel_}</p>
          <p class="quiz-subtitle">${sessionLabel}${sessionKanji}</p>

          <div class="quiz-head-pro">
            <div class="quiz-progress-text">Soal ${choukaiIndex + 1}/${total}</div>
            <div class="quiz-timer-text">Timer <span id="quiz-timer">${formatSessionTime(choukaiTimeLeft)}</span></div>
          </div>

          <div class="quiz-qcard-pro" style="min-height: 80px !important; padding: 15px 25px !important;">
            <h2 class="quiz-question-main" style="font-size: clamp(1rem, 2.5vw, 1.4rem) !important; color: #64748b !important; font-weight: 600 !important;">Dengarkan dan pilih jawaban yang benar</h2>
          </div>

          <div class="choukai-options locked" id="choukaiOptions">
            ${optBtns}
          </div>
        </div>
      </div>
    `;

    // reset state visual
    choukaiPlaying  = false;
    choukaiAnswered = false;
    choukaiSlow     = false;
    _updateReplayDots();

    // Event: Putar
    document.getElementById("choukaiPlayBtn")?.addEventListener("click", () => {
      if (choukaiPlaying) return;
      if (choukaiAnswered) return;
      _playChoukaiAudio();
    });

    // Event: Lambat (N5 only)
    document.getElementById("choukaiSlowBtn")?.addEventListener("click", () => {
      choukaiSlow = !choukaiSlow;
      const btn = document.getElementById("choukaiSlowBtn");
      if (btn) btn.classList.toggle("is-active", choukaiSlow);
    });

    // Event: Jawaban
    document.querySelectorAll(".quiz-opt-btn-pro[data-choukai-index]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.choukaiIndex, 10);
        _checkChoukaiAnswer(idx);
      });
    });

    // Event: Akhiri Test â€” sama persis Dokkai (via #finishBtnManual)
    document.getElementById("finishBtnManual")?.addEventListener("click", confirmEndChoukai);
  }

  // Fungsi confirm akhiri â€” konsisten dengan confirmEndQuiz()
  function confirmEndChoukai() {
    openConfirmModal(
      "Akhiri Sesi Choukai?",
      "Skor saat ini akan langsung dihitung dan disimpan. Yakin ingin mengakhiri sesi mendengarkan ini?",
      () => _endChoukai(false)
    );
  }

  // Ambil semua voice Jepang yang tersedia di browser
  function getJaVoices() {
    const all = window.speechSynthesis.getVoices();
    const ja  = all.filter(v => v.lang.startsWith("ja"));
    return ja;
  }

  // Putar bel "tingâ€¦ tongâ€¦" via Web Audio API (tanpa file)
  function playBell(cb) {
    try {
      const ctx  = new (window.AudioContext || window.webkitAudioContext)();
      const gain = ctx.createGain();
      gain.connect(ctx.destination);

      function tone(freq, start, dur) {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.gain.setValueAtTime(0.35, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
        osc.start(start);
        osc.stop(start + dur);
      }

      const t = ctx.currentTime;
      tone(1047, t,        0.9);  // ting â€” C6
      tone(784,  t + 0.65, 1.1);  // tong â€” G5

      setTimeout(cb, 1900);
    } catch (e) {
      // fallback: langsung lanjut tanpa bel
      setTimeout(cb, 200);
    }
  }

  // Putar dialog â†’ bel â†’ soal TTS â†’ unlock pilihan
  function _playChoukaiAudio() {
    if (choukaiPlaying || choukaiAnswered) return;

    const item   = choukaiData_[choukaiIndex];
    const rate   = choukaiSlow ? 0.6 : 0.9;
    const voices = getJaVoices();

    const maleVoice   = voices.find(v => /male/i.test(v.name))   || voices[0] || null;
    const femaleVoice = voices.find(v => /female/i.test(v.name)) || voices[1] || voices[0] || null;

    choukaiPlaying = true;
    choukaiReplay  = Math.max(0, choukaiReplay - 1);
    _updateReplayDots();

    const stage  = document.getElementById("choukaiStage");
    const status = document.getElementById("choukaiStatus");
    const playBtn = document.getElementById("choukaiPlayBtn");

    if (stage)  stage.classList.add("is-playing");
    if (status) { status.textContent = "Sedang diputarâ€¦"; status.classList.add("active"); }
    if (playBtn) { playBtn.innerHTML = `${CHOUKAI_SVG.stop} Stop`; playBtn.disabled = false; }

    // Tombol replay dinonaktifkan selama audio berjalan
    const slowBtn = document.getElementById("choukaiSlowBtn");
    if (slowBtn) slowBtn.disabled = true;

    window.speechSynthesis.cancel();

    const utterances = item.script.map(line => {
      const u   = new SpeechSynthesisUtterance(line.text);
      u.lang    = "ja-JP";
      u.rate    = rate;
      u.pitch   = line.gender === "female" ? 1.4 : 0.75;
      if (line.gender === "female" && femaleVoice) u.voice = femaleVoice;
      if (line.gender === "male"   && maleVoice)   u.voice = maleVoice;
      return u;
    });

    // Setelah semua dialog selesai â†’ bel â†’ baca soal â†’ unlock
    utterances[utterances.length - 1].onend = () => {
      if (stage)  stage.classList.remove("is-playing");
      if (status) { status.innerHTML = `<span style="display:inline-flex;align-items:center;gap:5px;vertical-align:middle;width:16px;height:16px">${CHOUKAI_SVG.bell}</span> Dengarkan pertanyaanâ€¦`; }

      playBell(() => {
        // Baca soal via TTS
        const qUtter   = new SpeechSynthesisUtterance(item.question);
        qUtter.lang    = "ja-JP";
        qUtter.rate    = 0.85;
        qUtter.pitch   = 1.0;
        if (femaleVoice) qUtter.voice = femaleVoice;

        qUtter.onend = () => {
          choukaiPlaying = false;
          _unlockChoukaiOptions();
          if (status) { status.textContent = "Pilih jawaban yang tepat"; status.classList.remove("active"); }
          if (playBtn) {
            playBtn.innerHTML = `${CHOUKAI_SVG.replay} Ulangi`;
            playBtn.disabled = choukaiReplay <= 0;
          }
          if (slowBtn) slowBtn.disabled = false;
        };

        window.speechSynthesis.speak(qUtter);
      });
    };

    utterances.forEach(u => window.speechSynthesis.speak(u));
  }

  function _unlockChoukaiOptions() {
    const opts = document.getElementById("choukaiOptions");
    if (opts) opts.classList.remove("locked");
  }

  function _updateReplayDots() {
    const d1 = document.getElementById("choukaiDot1");
    const d2 = document.getElementById("choukaiDot2");
    if (d1) d1.classList.toggle("used", choukaiReplay < 2);
    if (d2) d2.classList.toggle("used", choukaiReplay < 1);
  }

  function _checkChoukaiAnswer(selectedIdx) {
    if (choukaiAnswered) return;
    choukaiAnswered = true;

    const item  = choukaiData_[choukaiIndex];
    const btns  = document.querySelectorAll(".quiz-opt-btn-pro[data-choukai-index]");
    const opts  = document.getElementById("choukaiOptions");

    if (opts) opts.classList.add("locked");
    window.speechSynthesis.cancel();

    if (selectedIdx === item.answer) choukaiScore++;

    btns.forEach((btn, i) => {
      btn.disabled = true;
      btn.style.cursor = "default";
      if (i === item.answer) {
        btn.style.background = "#4ade80";
        btn.style.color = "white";
        btn.style.borderColor = "#22c55e";
      } else if (i === selectedIdx) {
        btn.style.background = "#fb7185";
        btn.style.color = "white";
        btn.style.borderColor = "#e11d48";
      }
    });

    const status = document.getElementById("choukaiStatus");
    if (status) {
      const isCorrect = selectedIdx === item.answer;
      const icon = isCorrect ? CHOUKAI_SVG.check : CHOUKAI_SVG.cross;
      const msg  = isCorrect ? "Benar! " : "Salah. ";
      status.innerHTML = `<span style="display:inline-flex;align-items:center;gap:5px;vertical-align:middle;width:16px;height:16px">${icon}</span> ${msg}${item.explanation || ""}`;
      status.classList.toggle("active", isCorrect);
    }

    setTimeout(() => {
      choukaiIndex++;
      if (choukaiIndex < choukaiData_.length) {
        choukaiReplay   = 2;
        choukaiAnswered = false;
        renderChoukai();
      } else {
        _endChoukai(true);
      }
    }, 2200);
  }

  function _endChoukai(finished) {
    window.speechSynthesis.cancel();
    clearInterval(choukaiTimer);
    isTesting = false;
    document.body.classList.remove("training-session");
    unlockQuizScroll();

    const total = choukaiData_.length;
    const pct   = total > 0 ? Math.round((choukaiScore / total) * 100) : 0;
    saveScoreToCloud("choukai", choukaiLevel_, choukaiScore, total, pct);

    const isPass = pct >= 60;
    const passQuotes = [
      "Pendengaranmu tajam! Lanjutkan dengan level berikutnya! é ‘å¼µã‚Œï¼",
      "Luar biasa! Telingamu sudah terbiasa dengan ritme bahasa Jepang!",
      "Sugoii! Latihan mendengarkan membuahkan hasil. Gas terus!"
    ];
    const failQuotes = [
      "Jangan menyerah! Mendengarkan membutuhkan latihan berulang. Coba lagi!",
      "Latihan lagi ya! Fokus pada intonasi dan kecepatan bicara penutur.",
      "Setiap kesalahan adalah pelajaran. Ulangi dan kamu pasti bisa!"
    ];
    const gradeMsg = isPass
      ? passQuotes[Math.floor(Math.random() * passQuotes.length)]
      : failQuotes[Math.floor(Math.random() * failQuotes.length)];
    const statusLabel = isPass ? "LULUS" : "BELUM LULUS";
    const colorTheme  = isPass ? "#16a34a" : "#dc2626";

    const message = `
      <div class="qr-wrap">
        <div class="qr-left">
          <div class="qr-status" style="color:${colorTheme}">${statusLabel}</div>
          <div class="qr-score">${pct}<span class="qr-denom">/100</span></div>
          <div class="qr-stats">Benar: <strong>${choukaiScore}</strong> / ${total} soal</div>
          <div class="qr-stats" style="font-size:0.82rem;margin-top:4px;color:#64748b;">聴解 · ${choukaiLevel_}</div>
        </div>
        <div class="qr-right">
          <p class="qr-msg">${gradeMsg}</p>
          <div class="qr-actions">
            <button class="qr-btn qr-btn--menu" onclick="location.reload()">Kembali ke Menu</button>
          </div>
        </div>
      </div>
    `;
    openInfoModal(message);
    kanjiModal.classList.add("quiz-result-active");
  }

  function startChoukai(level) {
    if (!isLoggedInUser()) {
      openInfoModal("<h3>Mode Latihan Wajib Login</h3><p>Silakan masuk dengan Google atau Email dulu untuk membuka fitur latihan.</p>");
      return;
    }

    const pool = buildChoukaiSessionQuestions(level);
    if (pool.length === 0) {
      openInfoModal("<h3>Data Belum Tersedia</h3><p>Data Choukai untuk level " + level + " belum tersedia. Silakan pilih level lain.</p>");
      return;
    }

    choukaiData_  = pool;
    choukaiLevel_ = level;
    choukaiIndex  = 0;
    choukaiScore  = 0;
    choukaiReplay = 2;
    choukaiTimeLeft = (CHOUKAI_TIME[level] || 30) * 60;
    isTesting     = true;

    lockQuizScroll();
    renderChoukai();
    _startChoukaiTimer();
  }

  // ==========================================
  // FITUR NERBANGIN SKOR KE FIREBASE CLOUD
  // ==========================================
  // ==========================================
  // FITUR NERBANGIN SKOR KE FIREBASE CLOUD
  // ==========================================
  function renderQuiz() {
    if (quizIndex >= currentQuizData.length) {
      endQuiz();
      return;
    }

    const item = currentQuizData[quizIndex];

    // FIX LABEL BIAR DOKKAI GAK DITULIS KOSAKATA LAGI
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
    
    if (resultInfo) resultInfo.textContent = "é ‘å¼µã£ã¦ãã ã•ã„";

    grid.className = "";
    grid.classList.add("quiz-active-mode");
    document.body.classList.add("training-session");

    // CEK APAKAH INI DOKKAI?
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

    // MANTRA BARU: Rekam jejak jawaban user (buat di-review nanti)
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

    // LOGIKA LULUS / GAGAL (Batas 75)
    if (percentage >= 75) {
      statusLabel = "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><polyline points='20 6 9 17 4 12'/></svg> LULUS";
      colorTheme = "#4ade80"; 
      const passQuotes = [
        "Kerja kerasmu tidak mengkhianati hasil! Pertahankan semangat ini, Bosku!",
        "Sugoii! Jalan menuju skor N1 semakin terbuka lebar. Gas terus!",
        "Luar biasa! Sensei bangga padamu wkwkwk. Jangan cepat puas ya!"
      ];
      gradeMsg = passQuotes[Math.floor(Math.random() * passQuotes.length)];
    } else {
      statusLabel = "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg> GAGAL";
      colorTheme = "#fb7185"; 
      const failQuotes = [
        "Jangan putus asa! Kegagalan adalah bumbu penyedap kesuksesan. Yuk review lagi!",
        "Belum lulus bukan berarti gak bisa. Tarik napas, pelajari salahnya, hajar lagi!",
        "Ganbatte! Samurai yang kuat adalah yang paling sering bangkit dari kekalahan!"
      ];
      gradeMsg = failQuotes[Math.floor(Math.random() * failQuotes.length)];
    }

    const message = `
      <div class="qr-wrap">
        <div class="qr-left">
          <div class="qr-status" style="color:${colorTheme}">${statusLabel}</div>
          <div class="qr-score">${percentage}<span class="qr-denom">/100</span></div>
          <div class="qr-stats">Benar: <strong>${score}</strong> / ${totalSoal} soal</div>
        </div>
        <div class="qr-right">
          <p class="qr-msg">${gradeMsg}</p>
          <div class="qr-actions">
            <button class="qr-btn qr-btn--review" onclick="window.renderReview()"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><circle cx='11' cy='11' r='8'/><line x1='21' y1='21' x2='16.65' y2='16.65'/></svg> Tinjau</button>
            <button class="qr-btn qr-btn--menu" onclick="location.reload()"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/><polyline points='9 22 9 12 15 12 15 22'/></svg> Kembali</button>
          </div>
        </div>
      </div>
    `;
    openInfoModal(message);
    kanjiModal.classList.add("quiz-result-active");
  }

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CUSTOM CONFIRM MODAL â€” Pengganti browser confirm() yang jelek
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function openConfirmModal(title, body, onOk) {
    const overlay   = document.getElementById("confirmModal");
    const titleEl   = document.getElementById("confirmModalTitle");
    const bodyEl    = overlay?.querySelector(".confirm-modal-body");
    const okBtn     = document.getElementById("confirmModalOk");
    const cancelBtn = document.getElementById("confirmModalCancel");
    if (!overlay) { if (onOk) onOk(); return; }

    if (titleEl) titleEl.textContent = title || "Yakin?";
    if (bodyEl)  bodyEl.textContent  = body  || "";

    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    okBtn?.focus();

    function cleanup() {
      overlay.classList.remove("active");
      overlay.setAttribute("aria-hidden", "true");
    }
    function handleOk()     { cleanup(); if (onOk) onOk(); }
    function handleCancel() { cleanup(); }

    okBtn?.addEventListener("click",     handleOk,     { once: true });
    cancelBtn?.addEventListener("click", handleCancel, { once: true });
  }

  function confirmEndQuiz() {
    openConfirmModal(
      "Akhiri Sesi Latihan?",
      "Skor saat ini akan langsung dihitung dan disimpan. Yakin ingin mengakhiri?",
      () => endQuiz()
    );
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
          <h2 style="margin:0; color:#1e293b; font-size:1.5rem;"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><circle cx='11' cy='11' r='8'/><line x1='21' y1='21' x2='16.65' y2='16.65'/></svg> Evaluasi Latihan</h2>
          <button onclick="location.reload()" style="background:#ef4444; color:white; border:none; padding:8px 20px; border-radius:8px; cursor:pointer; font-weight:bold;">Tutup & Selesai</button>
        </div>
        
        <div class="review-content">
    `;

    currentQuizData.forEach((q, index) => {
      const isCorrect = q.userAnswer === q.answer;
      const statusText = isCorrect ? "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><polyline points='20 6 9 17 4 12'/></svg> BENAR" : "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg> SALAH";
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
                <strong><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><line x1='9' y1='21' x2='15' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/><path d='M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z'/></svg> Penjelasan / Arti:</strong><br>
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
            <h3 style="color: #ff4d6d; margin-bottom: 10px;">é›†ä¸­ã—ã¦ï¼ (Fokus!) <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg></h3>
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
      document.querySelector('#levelGrid .level-btn--all')?.classList.add("active");
      
      // 3. Reset Kategori Khusus (Lepas semua pilihan)
      document.querySelectorAll("#categoryGrid .cat-btn").forEach(b => b.classList.remove("active"));

      // 4. Apply level gate sesuai onboarding - SELALU apply saat modal dibuka
      _applySearchLevelGate(true);
      // ----------------------------------------

      filterModal.classList.add("active");
      filterModal.setAttribute("aria-hidden", "false");
      
      // FOKUS INPUT: Hanya jalan di Desktop (lebar layar > 768px). 
      // Di HP tidak akan fokus otomatis, jadi keyboard tidak akan tiba-tiba muncul!
      if (modalSearchInput && window.innerWidth > 768) {
        modalSearchInput.focus();
      }

      // â”€â”€ Mobile: pasang readonly agar keyboard tidak muncul saat modal buka â”€â”€
      // Keyboard baru muncul kalau user sengaja tap input
      if (modalSearchInput && window.innerWidth <= 767) {
        modalSearchInput.setAttribute('readonly', 'readonly');
        modalSearchInput.addEventListener('touchstart', function _removeMobileReadonly() {
          modalSearchInput.removeAttribute('readonly');
          modalSearchInput.removeEventListener('touchstart', _removeMobileReadonly);
        }, { once: true });
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

    // ==================== TOGGLE LEVEL â€” multiple select ====================
    // SEMUA: lepas semua N, aktifkan SEMUA
    // N-chip: bisa pilih banyak sekaligus, klik lagi = lepas
    // Kalau semua N dilepas â†’ SEMUA otomatis aktif kembali
    document.querySelectorAll("#levelGrid .level-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const isAll = btn.dataset.level === "all";
        const nBtns = document.querySelectorAll("#levelGrid .level-btn:not(.level-btn--all)");
        const allBtn = document.querySelector("#levelGrid .level-btn--all");

        if (isAll) {
          // Klik SEMUA: lepas semua N, aktifkan SEMUA
          nBtns.forEach(b => b.classList.remove("active"));
          if (allBtn) allBtn.classList.add("active");
        } else {
          // Klik N-chip: toggle
          btn.classList.toggle("active");
          // Cek apakah ada N yang aktif
          const anyNActive = [...nBtns].some(b => b.classList.contains("active"));
          if (allBtn) allBtn.classList.toggle("active", !anyNActive);
        }
      });
    });

    // Category buttons â€” multiple toggle, klik lagi = lepas
    document.querySelectorAll("#categoryGrid .cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        // Cek apakah ada LOCKED_VOCAB_TYPES yang aktif â†’ apply level gate
        const activeTypes = [...document.querySelectorAll("#categoryGrid .cat-btn.active")].map(b => b.dataset.type);
        const hasLockedType = activeTypes.some(t => LOCKED_VOCAB_TYPES.includes(t));
        _applySearchLevelGate(hasLockedType);
      });
    });

    function applyModalFilter() {
      // Kumpulkan semua level aktif (bisa lebih dari satu)
      const allBtn = document.querySelector("#levelGrid .level-btn--all");
      const isAllLevel = allBtn && allBtn.classList.contains("active");
      const activeLevels = isAllLevel
        ? ["all"]
        : [...document.querySelectorAll("#levelGrid .level-btn:not(.level-btn--all).active")].map(b => b.dataset.level);

      // Kumpulkan semua kategori aktif (bisa lebih dari satu)
      const activeTypes = [...document.querySelectorAll("#categoryGrid .cat-btn.active")].map(b => b.dataset.type);

      // Set ke single value (kompatibel dengan render existing)
      // Multi-level: simpan sebagai comma string, render akan handle
      selectedLevel = activeLevels.length === 0 ? "all" : (activeLevels.length === 1 ? activeLevels[0] : activeLevels.join(","));

      // Multi-cat: ambil yang pertama untuk kompatibilitas, atau "all" kalau kosong
      if (modalSearchInput && modalSearchInput.value.trim() !== "" && activeTypes.length === 0) {
        selectedType = "all";
      } else {
        selectedType = activeTypes.length === 0 ? "verb-adj-only" : (activeTypes.length === 1 ? activeTypes[0] : activeTypes[0]);
      }

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
        selectedType = "verb-adj-only";
        if (search) search.value = "";
        if (modalSearchInput) modalSearchInput.value = "";

        document.querySelectorAll(".level-btn, .cat-btn").forEach(b => b.classList.remove("active"));
        document.querySelector('#levelGrid .level-btn--all')?.classList.add("active");

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
    console.log('NihonByte iOS Safe Mode AKTIF');

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

  // ===== ORIENTATION CHANGE FIX (iOS + Android blank screen on rotate) =====
  //
  // BUG FIX: Sebelumnya render() dipanggil tanpa cek isTesting,
  //     sehingga rotasi saat latihan aktif mengirim user kembali ke menu.
  //
  //     Solusi:
  //     - Saat isTesting / training-session aktif â†’ hanya re-apply layout
  //       (re-render DOM quiz via renderQuiz()) tanpa reset state.
  //     - Saat tidak sedang latihan â†’ render() normal seperti biasa.
  //
  // Fungsi helper: layout-only refresh saat sedang latihan
  function _refreshQuizLayout() {
    // Update tinggi body agar vh unit akurat di iOS
    document.body.style.height = window.innerHeight + 'px';
    document.documentElement.style.height = window.innerHeight + 'px';

    // Pastikan class training-session & quiz-active-mode masih terpasang
    document.body.classList.add('training-session');
    if (grid) {
      grid.className = '';
      grid.classList.add('quiz-active-mode');
    }

    // Re-render isi quiz (soal + opsi) tanpa reset state apapun
    if (typeof renderQuiz === 'function') {
      renderQuiz();
    }

    // Force repaint ringan agar CSS media query landscape/portrait aktif
    requestAnimationFrame(() => {
      document.documentElement.style.display = 'none';
      void document.documentElement.offsetHeight;
      document.documentElement.style.display = '';
    });
  }

  window.addEventListener('orientationchange', () => {
    // Delay karena iOS butuh waktu sebelum innerHeight ter-update
    setTimeout(() => {
      const inQuiz = isTesting || document.body.classList.contains('training-session');

      if (inQuiz) {
        // Sedang latihan: jangan render() â†’ nanti user dilempar ke menu
        _refreshQuizLayout();
      } else if (viewMode === 'kanji-card-single') {
        // Sedang di kanji-card: rerender layout saja, kartu tidak reset
        document.body.style.height = window.innerHeight + 'px';
        if (window.kanjiCardUI && typeof window.kanjiCardUI.rerender === 'function') {
          window.kanjiCardUI.rerender();
        }
      } else {
        // Tidak sedang latihan: render normal
        document.body.style.height = window.innerHeight + 'px';
        document.documentElement.style.display = 'none';
        document.documentElement.offsetHeight; // trigger reflow
        document.documentElement.style.display = '';
        if (typeof render === 'function') render();
      }
    }, 300);
  });

  // Fallback: deteksi orientasi via resize (Android & browser modern)
  let _lastOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  window.addEventListener('resize', () => {
    const _nowOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    if (_nowOrientation !== _lastOrientation) {
      _lastOrientation = _nowOrientation;

      const inQuiz = isTesting || document.body.classList.contains('training-session');
      if (inQuiz) {
        // Orientasi berubah saat latihan â†’ hanya refresh layout, jangan reset ke menu
        setTimeout(() => _refreshQuizLayout(), 150);
      } else if (viewMode === 'kanji-card-single') {
        // Sedang di kanji-card: rerender layout saja, kartu tidak reset
        document.body.style.height = window.innerHeight + 'px';
        setTimeout(() => {
          if (window.kanjiCardUI && typeof window.kanjiCardUI.rerender === 'function') {
            window.kanjiCardUI.rerender();
          }
        }, 150);
      } else {
        document.body.style.height = window.innerHeight + 'px';
        setTimeout(() => {
          if (typeof render === 'function') render();
        }, 150);
      }
    }
  });

  let selectedLevel = "all";
  let selectedType = "verb-adj-only";
  let viewMode = "menu";
  let currentPage = 1;      
  let lastQueryState = "";
  let userBookmarks = new Set(); // Set of bookmarked word IDs
  
  const typeLabelMap = {
    "verb-godan": "Kata Kerja Godan",
    "verb-ru": "Kata Kerja Ichidan",
    "verb-suru": "Kata Kerja Suru",
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
    "pattern": "Grammar (文法)",
    "activity": "Kosakata Aktivitas",
    "noun-hobby": "Kosakata Hobi",
    "noun-sports": "Kosakata Olahraga",
    "noun-color": "Kosakata Warna",
    "noun-hotel": "Kosakata Perhotelan",
    "noun-construction": "Kosakata Konstruksi",
  };

  // Kategori Kotoba (untuk menu hub / bottom nav hub).
  // Urutan sengaja dibuat "paling umum" dulu biar tidak terasa berantakan.
  const KOTOBA_CATEGORY_KEYS = [
    "noun",
    "activity",
    "noun-number-counter",
    "noun-time-weather",
    "noun-place",
    "noun-house-family",
    "noun-work",
    "noun-profession",
    "noun-school",
    "noun-restaurant",
    "noun-color",
    "noun-animal",
    "noun-sports",
    "noun-hobby",
    "question",
    "adv",
    "noun-vehicle",
    "noun-factory",
    "noun-agriculture",
    "noun-caregiving",
    "noun-hotel",
    "noun-construction",
    "noun-body-medical",
  ];

  const KOTOBA_SHORT_LABELS = {
    noun: "Semua",
    activity: "Aktivitas",
    "noun-number-counter": "Angka",
    "noun-time-weather": "Waktu",
    "noun-place": "Tempat",
    "noun-house-family": "Rumah",
    "noun-work": "Kerja",
    "noun-profession": "Profesi",
    "noun-school": "Sekolah",
    "noun-restaurant": "Restoran",
    "noun-color": "Warna",
    "noun-animal": "Binatang",
    "noun-sports": "Olahraga",
    "noun-hobby": "Hobi",
    question: "Tanya",
    adv: "Keterangan",
    "noun-vehicle": "Kendaraan",
    "noun-factory": "Pabrik",
    "noun-agriculture": "Tani",
    "noun-caregiving": "Keperawatan",
    "noun-hotel": "Hotel",
    "noun-construction": "Konstruksi",
    "noun-body-medical": "Kesehatan",
  };

  function shouldShowLevelInResult(typeKey) {
    return ["verb-godan", "verb-ru", "verb-suru", "adj-i", "adj-na"].includes(typeKey);
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
          subtitle: "Gojuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["A", "\u3042", "\u3044", "\u3046", "\u3048", "\u304A"],
            ["KA", "\u304B", "\u304D", "\u304F", "\u3051", "\u3053"],
            ["SA", "\u3055", "\u3057", "\u3059", "\u305B", "\u305D"],
            ["TA", "\u305F", "\u3061", "\u3064", "\u3066", "\u3068"],
            ["NA", "\u306A", "\u306B", "\u306C", "\u306D", "\u306E"],
            ["HA", "\u306F", "\u3072", "\u3075", "\u3078", "\u307B"],
            ["MA", "\u307E", "\u307F", "\u3080", "\u3081", "\u3082"],
            ["YA", "\u3084", "", "\u3086", "", "\u3088"],
            ["RA", "\u3089", "\u308A", "\u308B", "\u308C", "\u308D"],
            ["WA", "\u308F", "", "", "", "\u3092"],
            ["N", "\u3093", "", "", "", ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["GA", "\u304C", "\u304E", "\u3050", "\u3052", "\u3054"],
            ["ZA", "\u3056", "\u3058", "\u305A", "\u305C", "\u305E"],
            ["DA", "\u3060", "\u3062", "\u3065", "\u3067", "\u3069"],
            ["BA", "\u3070", "\u3073", "\u3076", "\u3079", "\u307C"],
            ["PA", "\u3071", "\u3074", "\u3077", "\u307A", "\u307D"],
          ],
        },
        {
          subtitle: "Yoon",
          rows: [
            ["", "YA", "YU", "YO"],
            ["K", "\u304D\u3083", "\u304D\u3085", "\u304D\u3087"],
            ["S", "\u3057\u3083", "\u3057\u3085", "\u3057\u3087"],
            ["T", "\u3061\u3083", "\u3061\u3085", "\u3061\u3087"],
            ["N", "\u306B\u3083", "\u306B\u3085", "\u306B\u3087"],
            ["H", "\u3072\u3083", "\u3072\u3085", "\u3072\u3087"],
            ["M", "\u307F\u3083", "\u307F\u3085", "\u307F\u3087"],
            ["R", "\u308A\u3083", "\u308A\u3085", "\u308A\u3087"],
            ["G", "\u304E\u3083", "\u304E\u3085", "\u304E\u3087"],
            ["J", "\u3058\u3083", "\u3058\u3085", "\u3058\u3087"],
            ["B", "\u3073\u3083", "\u3073\u3085", "\u3073\u3087"],
            ["P", "\u3074\u3083", "\u3074\u3085", "\u3074\u3087"],
          ],
        },
      ],
    },
    katakana: {
      title: "Poster Katakana",
      sections: [
        {
          subtitle: "Gojuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["A", "\u30A2", "\u30A4", "\u30A6", "\u30A8", "\u30AA"],
            ["KA", "\u30AB", "\u30AD", "\u30AF", "\u30B1", "\u30B3"],
            ["SA", "\u30B5", "\u30B7", "\u30B9", "\u30BB", "\u30BD"],
            ["TA", "\u30BF", "\u30C1", "\u30C4", "\u30C6", "\u30C8"],
            ["NA", "\u30CA", "\u30CB", "\u30CC", "\u30CD", "\u30CE"],
            ["HA", "\u30CF", "\u30D2", "\u30D5", "\u30D8", "\u30DB"],
            ["MA", "\u30DE", "\u30DF", "\u30E0", "\u30E1", "\u30E2"],
            ["YA", "\u30E4", "", "\u30E6", "", "\u30E8"],
            ["RA", "\u30E9", "\u30EA", "\u30EB", "\u30EC", "\u30ED"],
            ["WA", "\u30EF", "", "", "", "\u30F2"],
            ["N", "\u30F3", "", "", "", ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["GA", "\u30AC", "\u30AE", "\u30B0", "\u30B2", "\u30B4"],
            ["ZA", "\u30B6", "\u30B8", "\u30BA", "\u30BC", "\u30BE"],
            ["DA", "\u30C0", "\u30C2", "\u30C5", "\u30C7", "\u30C9"],
            ["BA", "\u30D0", "\u30D3", "\u30D6", "\u30D9", "\u30DC"],
            ["PA", "\u30D1", "\u30D4", "\u30D7", "\u30DA", "\u30DD"],
          ],
        },
        {
          subtitle: "Yoon",
          rows: [
            ["", "YA", "YU", "YO"],
            ["K", "\u30AD\u30E3", "\u30AD\u30E5", "\u30AD\u30E7"],
            ["S", "\u30B7\u30E3", "\u30B7\u30E5", "\u30B7\u30E7"],
            ["T", "\u30C1\u30E3", "\u30C1\u30E5", "\u30C1\u30E7"],
            ["N", "\u30CB\u30E3", "\u30CB\u30E5", "\u30CB\u30E7"],
            ["H", "\u30D2\u30E3", "\u30D2\u30E5", "\u30D2\u30E7"],
            ["M", "\u30DF\u30E3", "\u30DF\u30E5", "\u30DF\u30E7"],
            ["R", "\u30EA\u30E3", "\u30EA\u30E5", "\u30EA\u30E7"],
            ["G", "\u30AE\u30E3", "\u30AE\u30E5", "\u30AE\u30E7"],
            ["J", "\u30B8\u30E3", "\u30B8\u30E5", "\u30B8\u30E7"],
            ["B", "\u30D3\u30E3", "\u30D3\u30E5", "\u30D3\u30E7"],
            ["P", "\u30D4\u30E3", "\u30D4\u30E5", "\u30D4\u30E7"],
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
    recommendationRow.style.setProperty("display", "none", "important");
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
    kanjiModal.classList.remove("quiz-result-active");
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
    
    if (targetType === "verb-suru") {
      return wordType === "verb-suru";
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
    const typeOrder = ["verb-godan", "verb-ru", "verb-suru", "adj-i", "adj-na"];
    const levelOrder = ["N5", "N4", "N3", "N2", "N1"];
    return list
      .filter((word) => typeOrder.includes(word.type))
      .sort((a, b) => {
        const la = levelOrder.indexOf(a.level);
        const lb = levelOrder.indexOf(b.level);
        if (la !== lb) return la - lb;
        const ta = typeOrder.indexOf(a.type);
        const tb = typeOrder.indexOf(b.type);
        if (ta !== tb) return ta - tb;
        return (a.romaji || "").localeCompare(b.romaji || "", "en", { sensitivity: "base" });
      });
  }

  const LOCKED_VOCAB_TYPES = ["verb-godan", "verb-ru", "verb-suru", "adj-i", "adj-na"];

  function getFilteredWords() {
    const key = (search.value || "").toLowerCase().trim();
    const selectedFromDropdown = category ? category.value : "all";
    if (typeof vocabularyData === "undefined") return []; // Safety check

    // Ambil level yang unlock dari onboarding
    const prog = window._practiceProgress;
    const unlockedLevels = prog?.levelStatus
      ? ["N5","N4","N3","N2","N1"].filter(l => prog.levelStatus[l] === "active" || prog.levelStatus[l] === "completed")
      : null; // null = belum onboarding / tidak ada restrict

    const filtered = vocabularyData.filter((word) => {
      const effectiveType = selectedType === "all" ? selectedFromDropdown : selectedType;
      const isLockedType = LOCKED_VOCAB_TYPES.includes(word.type);

      if (isLockedType) {
        // Vocab inti: filter berdasarkan level unlock dari onboarding
        if (unlockedLevels && !unlockedLevels.includes(word.level)) return false;
        // Kalau user juga pilih level spesifik di search, ikutin itu juga
        if (selectedLevel !== "all" && word.level !== selectedLevel) return false;
      } else {
        // Kotoba, activity, ekspresi: bebas, tapi tetap ikut selectedLevel kalau user pilih
        if (selectedLevel !== "all" && word.level !== selectedLevel) return false;
      }

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
    const wordId = word.id || word.kanji || word.kana || "";
    const isBookmarked = userBookmarks.has(String(wordId));
    const bookmarkFill = isBookmarked ? "#ff4d6d" : "none";
    const bookmarkStroke = isBookmarked ? "#ff4d6d" : "currentColor";
    
    return `
      <div class="card-image ${expandedClass}" id="${cardId}" data-word-id="${wordId}">

        <!-- Bookmark button (kiri atas) -->
        <button class="card-action-btn bookmark-card-btn ${isBookmarked ? 'is-bookmarked' : ''}"
          type="button"
          data-word-id="${wordId}"
          onclick="toggleBookmark(event, '${wordId}')"
          title="${isBookmarked ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}"
          style="position:absolute;top:10px;left:10px;right:auto;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${bookmarkFill}" stroke="${bookmarkStroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>

        <!-- Download button (kanan atas) -->
        <button class="card-action-btn download-card-btn" type="button" onclick="downloadAsImage(event, '${cardId}')" title="Download Flashcard"
          style="position:absolute;top:10px;right:10px;left:auto;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>

        <!-- Play audio button (kanan bawah) -->
        <button class="card-action-btn play-audio-btn" type="button" data-text="${word.kana || ''}" aria-label="Putar audio"><svg viewBox='0 0 24 24' fill='currentColor' stroke='none' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><polygon points='5 3 19 12 5 21 5 3'/></svg></button>
        
        <div class="card-overlay" style="position: relative; z-index: 2;">
          <div class="kanji">${word.kanji || "â€”"}</div>
          <div class="kana">${word.kana || "â€”"}</div>
          <div class="romaji">${word.romaji || ""}</div>
          <div class="meaning">${tMeaning(word.meaning) || "â€”"}</div>
          
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

    // MANTRA JATAH KARTU (Desktop: 12, HP: 10)
    const currentState = "ekspresi-poster";
    if (lastQueryState !== currentState) {
      currentPage = 1;
      lastQueryState = currentState;
    }
    const itemsPerPage = window.innerWidth > 768 ? 12 : 10;
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
        <div class="wide-kanji">${word.kanji || "â€”"}</div>
        <div class="wide-kana">${word.kana || "â€”"}</div>
        <div class="wide-romaji">${word.romaji || ""}</div>
        <div class="wide-meaning">${tMeaning(word.meaning) || "â€”"}</div>
        <button class="wide-play-btn" type="button" data-text="${word.kana || word.kanji || ''}" aria-label="Putar"><svg viewBox='0 0 24 24' fill='currentColor' stroke='none' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><polygon points='5 3 19 12 5 21 5 3'/></svg></button>
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
    
    // MANTRA JATAH KARTU (Desktop: 12, HP: 10)
    const currentState = "activity-poster";
    if (lastQueryState !== currentState) {
      currentPage = 1;
      lastQueryState = currentState;
    }
    const itemsPerPage = window.innerWidth > 768 ? 12 : 10;
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
        <div class="wide-kanji">${word.kanji || "â€”"}</div>
        <div class="wide-kana">${word.kana || "â€”"}</div>
        <div class="wide-romaji">${word.romaji || ""}</div>
        <div class="wide-meaning">${tMeaning(word.meaning) || "â€”"}</div>
        <button class="wide-play-btn" type="button" data-text="${word.kana || word.kanji || ''}" aria-label="Putar"><svg viewBox='0 0 24 24' fill='currentColor' stroke='none' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><polygon points='5 3 19 12 5 21 5 3'/></svg></button>
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
    const status = percentage >= 75 ? "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><polyline points='20 6 9 17 4 12'/></svg> LULUS" : "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg> TIDAK LULUS";
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

    const postersFragment = document.createDocumentFragment();

    // LOOPING UTAMA (Mecah 3 Poster)
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
      
      if (section.subtitle === "Yoon") secElem.classList.add("yoon-section");

      let rowsToRender = section.rows;

      // Putar jadi Horizontal KHUSUS DESKTOP
      if (isDesktop) {
        rowsToRender = transpose(rowsToRender);
      }

      const gridContainer = document.createElement("div");
      gridContainer.className = isDesktop ? "letter-grid-desktop" : "letter-grid-mobile";
      
      const colCount = rowsToRender[0].length; 
      gridContainer.style.gridTemplateColumns = `repeat(${colCount}, minmax(0, 1fr))`;

      // Render batch sekali (lebih hemat layout/repaint di device mobile asli)
      const cellsHtml = rowsToRender
        .map((row, rowIndex) =>
          row
            .map((cell, colIndex) => {
              if (cell === "") return '<div class="letter-empty"></div>';
              const isLabel = /^[A-Z]*$/.test(cell);
              if (isLabel) {
                const isVokal = isDesktop ? (colIndex === 0) : (rowIndex === 0);
                const cls = `letter-label${isVokal ? " label-vokal" : ""}`;
                return `<div class="${cls}">${cell}</div>`;
              }
              return `<div class="letter-cell">${cell}</div>`;
            })
            .join("")
        )
        .join("");
      gridContainer.innerHTML = cellsHtml;
      
      // INI BAGIAN YANG TADI GAK SENGAJA KEHAPUS SAMA LU BOSKU!
      secElem.appendChild(gridContainer);
      poster.querySelector(".letter-poster-body").appendChild(secElem);
      postersFragment.appendChild(poster);
    }); // <-- Ini penutup data.sections.forEach yang hilang tadi

    grid.appendChild(postersFragment);
    
    if(resultInfo) resultInfo.textContent = script.charAt(0).toUpperCase() + script.slice(1);
  }
  
  // renderPatternPoster DIHAPUS â€” diganti oleh modul grammar-logic.js

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

  function openModal(word, customRecs = null) {
    if (accessMode === "guest") {
      openInfoModal("<h3>Mode Tamu</h3><p>Expand kartu dikunci. Silakan login untuk membuka detail kanji card.</p>");
      return;
    }
    if (!word) return;
    modalSubtitle.style.display = "block";
    recommendationRow.style.display = "flex";
    expandedCard.innerHTML = cardImageTemplate(word, true);
    recommendationRow.innerHTML = "";
    const recs = customRecs || getRecommendations(word);
    recs.forEach((item) => {
      const recBtn = document.createElement("article");
      recBtn.className = "recommendation-item";
      recBtn.setAttribute("role", "button");
      recBtn.setAttribute("tabindex", "0");
      recBtn.innerHTML = `
        <span class="rec-kanji">${item.kanji || "â€”"}</span>
        <span class="rec-kana">${item.kana || "â€”"}</span>
        <button class="rec-audio-btn" type="button" data-text="${item.kana || ""}" aria-label="Putar audio ${item.kanji || item.kana || ''}"><svg viewBox='0 0 24 24' fill='currentColor' stroke='none' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><polygon points='5 3 19 12 5 21 5 3'/></svg></button>
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
      if (recommendationRow) {
      recommendationRow.scrollLeft = 0;
    }
  }

  function closeModal() {
    stopTestTimer();
    kanjiModal.classList.remove("active");
    kanjiModal.classList.remove("quiz-result-active");
    kanjiModal.setAttribute("aria-hidden", "true");
    unlockPageScrollForKanjiModal();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  modalClose.addEventListener("click", () => {
    if (kanjiModal.classList.contains("quiz-result-active")) return;
    closeModal();
  });
  modalBackdrop.addEventListener("click", () => {
    if (kanjiModal.classList.contains("quiz-result-active")) return;
    closeModal();
  });
  kanjiModal.addEventListener("click", (e) => {
    if (kanjiModal.classList.contains("quiz-result-active")) return;
    if (!e.target.closest(".kanji-modal-content")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (kanjiModal.classList.contains("quiz-result-active")) return;
      closeModal();
      closeSidebar();
    }
  });

  let lastHamburgerTouchTs = 0;

  function handleHamburgerToggle() {
    if (!isHamburgerDrawerMode()) return;
    if (isTesting) {
      openInfoModal(`
        <div style="text-align: center; padding: 10px;">
          <h3 style="color: #ff4d6d; margin-bottom: 10px;">Ujian Sedang Berlangsung!</h3>
          <p style="font-size: 1.1rem;">Selesaikan test terlebih dahulu sebelum membuka menu lain. Fokus, Bosku!</p>
        </div>
      `);
      return; // Stop di sini, sidebar tidak akan terbuka!
    }
    if (document.body.classList.contains("sidebar-open")) {
      mobileSidebarOpenedByHamburger = false;
      closeSidebar();
      return;
    }

    mobileSidebarOpenedByHamburger = true;
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("sidebar-open");
    hamburger.setAttribute("aria-expanded", "true");

    // --- TAMBAHAN BARU: Kembalikan scroll sidebar ke paling atas ---
    sidebar.scrollTop = 0;

    savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    originalOverflow = '';
    originalPosition = document.body.style.position || '';
    originalTop = document.body.style.top || '';
    originalWidth = document.body.style.width || '';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollPosition}px`;
    document.body.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';
  }

  hamburger.addEventListener("touchend", (event) => {
    lastHamburgerTouchTs = Date.now();
    event.preventDefault();
    handleHamburgerToggle();
  }, { passive: false });

  hamburger.addEventListener("click", (event) => {
    if (Date.now() - lastHamburgerTouchTs < 450) {
      event.preventDefault();
      return;
    }
    handleHamburgerToggle();
  });

  overlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    if (!isHamburgerDrawerMode()) {
      mobileSidebarOpenedByHamburger = false;
      sidebar.classList.add("active");
      overlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      hamburger.setAttribute("aria-expanded", "false");
      return;
    }

    mobileSidebarOpenedByHamburger = false;
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
    const audioButton = event.target.closest(".play-audio-btn, .rec-audio-btn, .wide-play-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
      return;
    }
  });

  recommendationRow.addEventListener("click", (event) => {
    if (event.target.closest(".recommendation-item")) {
      event.stopPropagation();
    }

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
        openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Filter kategori sidebar khusus pengguna yang sudah login.</p>");
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

  document.querySelectorAll(".grammar-menu-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (accessMode === "guest") {
        openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Menu sidebar hanya terbuka untuk pengguna login.</p>");
        return;
      }
      viewMode = "grammar";
      if (search) search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });
  
  document.querySelectorAll(".test-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.dataset.level;
      const kind = button.dataset.kind;
      if (["N3", "N2", "N1"].includes(level)) {
        openInfoModal("Mohon maaf, fitur test level ini masih dalam proses pengembangan. Silakan kembali lagi nanti");
        closeSidebar();
        return;
      }
      startTest(level, kind);
      closeSidebar();
    });
  });

  document.querySelectorAll(".js-reset-logo").forEach((logoElem) => logoElem.addEventListener("click", () => {
    const isPracticeLockedMode = isTesting || document.body.classList.contains("training-session");

    // PROTEKSI MODE LATIHAN/TEST + MODE TAMU: reset via logo dikunci total
    if (isPracticeLockedMode || accessMode === "guest") {
      if (isPracticeLockedMode) {
        const messages = [
          "<h3>è«¦ã‚ãªã„ã§ (Jangan Menyerah)!</h3><p>Latihan sedang berjalan. Selesaikan dulu sebelum kembali ke beranda.</p>",
          "<h3>ã¡ã‚‡ã£ã¨å¾…ã£ã¦! (Tunggu Sebentar!)</h3><p>Mode latihan sedang dikunci agar progres kamu tidak hilang.</p>",
          "<h3>Fokus, Bosku!</h3><p>Bereskan sesi latihan dulu, setelah itu baru reset ke halaman awal.</p>"
        ];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        openInfoModal(`<div style="text-align: center; padding: 10px;">${randomMsg}</div>`);
      }
      return;
    }

    if (document.body.classList.contains("review-mode-active")) {
      location.reload();
      return;
    }

    // RESET TOTAL: balik ke halaman awal (Menu) + reset state kartu ke default render
    selectedLevel = "all";
    selectedType = "verb-adj-only";
    currentPage = 1;
    lastQueryState = "";
    if (typeof category !== "undefined" && category) category.value = "all";
    if (search) search.value = "";
    if (modalSearchInput) modalSearchInput.value = "";
    viewMode = "menu";

    document.querySelectorAll(".sidebar-filter-btn").forEach((btn) => btn.classList.remove("active"));

    render();
    closeSidebar();
    window.scrollTo({ top: 0, behavior: "auto" });
  }));
  
  document.getElementById("supportBtn")?.addEventListener("click", () => {
    viewMode = "support";
    if (search) search.value = "";
    if (category) category.value = "all";
    render();
    closeSidebar();
  });

  document.getElementById("favoritBtn")?.addEventListener("click", () => {
    if (!window.currentUser) {
      openInfoModal("<h3>Login Dulu</h3><p>Login untuk melihat koleksi kata favorit kamu.</p>");
      return;
    }
    viewMode = "favorit";
    if (search) search.value = "";
    if (category) category.value = "all";
    render();
    closeSidebar();
  });


  // ==========================================
  // Mobile Bottom Nav (Facebook-ish, versi NihonByte)
  // - Tujuan: UX mobile lebih native + clean
  // - Tidak mengubah flow latihan (dokkai split-screen tetap)
  // ==========================================
  const bottomNav = document.getElementById("bottomNav");

  function setBottomNavActive(tab) {
    if (!bottomNav) return;
    bottomNav.querySelectorAll(".bottom-nav__item").forEach((btn) => {
      const isActive = btn.dataset.tab === tab;
      btn.classList.toggle("is-active", isActive);
      if (isActive) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    });
  }

  function navigateBottomTab(tab) {
    if (accessMode === "guest") {
      openInfoModal("<h3>Mode Tamu</h3><p>Navigasi navbar mobile dikunci. Silakan login untuk membuka Beranda, Latihan, Dasbor, dan Menu.</p>");
      return;
    }

    // Safety: kalau sedang latihan/test, jangan lompat view
    if (document.body.classList.contains("training-session") || isTesting) {
      openInfoModal("<h3>Latihan sedang berjalan</h3><p>Selesaikan dulu sesi latihan ya</p>");
      return;
    }

    if (document.body.classList.contains("review-mode-active")) {
      location.reload();
      return;
    }

    if (tab === "home") {
      closeBottomNavHub();
      selectedLevel = "all";
      selectedType = "verb-adj-only";
      if (typeof category !== "undefined" && category) category.value = "all";
      if (search) search.value = "";
      if (modalSearchInput) modalSearchInput.value = "";
      viewMode = "vocab";
      render();
      closeSidebar();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setBottomNavActive("home");
      return;
    }

    if (tab === "practice") {
      viewMode = "practice-hub";
      closeSidebar();
      openBottomNavHub("practice");
      setBottomNavActive("practice");
      return;
    }

    if (tab === "menu") {
      viewMode = "menu";
      closeSidebar();
      openBottomNavHub("menu");
      setBottomNavActive("menu");
      return;
    }

    if (tab === "dashboard") {
      closeBottomNavHub();
      setBottomNavActive("dashboard");
      openDashboard();
      closeSidebar();
      return;
    }
  }

  function syncBottomNav() {
    // Dipanggil dari render() biar konsisten walau user buka via sidebar
    if (!bottomNav) return;

    let tab = "home";

    if (viewMode === "practice-hub") tab = "practice";
    else if (viewMode === "dashboard") tab = "dashboard";
    else if (
      viewMode === "menu" ||
      viewMode === "support" ||
      viewMode.startsWith("letters:") ||
      viewMode === "grammar" || viewMode.startsWith("grammar:") ||
      viewMode.startsWith("dev:")
    ) {
      tab = "menu";
    } else if (viewMode.startsWith("test:")) {
      tab = "home";
    }

    setBottomNavActive(tab);
  }

  let lastScrollY = window.scrollY;
  let isBottomNavHidden = false;

  function setBottomNavVisibility(shouldHide) {
    if (!bottomNav) return;
    if (isBottomNavHidden === shouldHide) return;
    isBottomNavHidden = shouldHide;
    bottomNav.classList.toggle("is-hidden", shouldHide);
  }

  function handleBottomNavAutoHide() {
    if (!bottomNav) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile || document.body.classList.contains("training-session") || document.body.classList.contains("review-mode-active")) {
      setBottomNavVisibility(false);
      lastScrollY = window.scrollY;
      return;
    }

    const currentY = window.scrollY;
    const delta = currentY - lastScrollY;

    if (currentY <= 8 || delta < -6) {
      setBottomNavVisibility(false);
    } else if (delta > 8 && currentY > 120) {
      setBottomNavVisibility(true);
    }

    lastScrollY = currentY;
  }

  if (bottomNav) {
    bottomNav.addEventListener("click", (event) => {
      const btn = event.target.closest(".bottom-nav__item");
      if (!btn) return;
      navigateBottomTab(btn.dataset.tab || "home");
    });

    window.addEventListener("scroll", handleBottomNavAutoHide, { passive: true });
    window.addEventListener("resize", handleBottomNavAutoHide);
    // iOS fix: scroll event kurang reliable di Safari, pakai touchmove juga
    window.addEventListener("touchmove", handleBottomNavAutoHide, { passive: true });
    handleBottomNavAutoHide();
  }

  document.querySelectorAll(".exercise-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const mainType = button.dataset.main || button.dataset.type || "";
      const section = button.dataset.section || mainType;
      const level = button.dataset.level;

      // Bunpou: semua level aktif (N5-N1). Goi N2/N1 masih dev mode.
      const isGoiBunpouDokkaiDev = false; // goi N2/N1 unlocked
      
      // Choukai N5 sudah tersedia, N4-N1 masih dev mode
      const isChoukaiActive = ["choukai", "listening"].includes(mainType);
      const isChoukaiDev    = false;

      if (isChoukaiActive) {
        startChoukai(level);
        closeSidebar();
        return;
      }

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
  
  // ==========================================
  // HALAMAN FAVORIT
  // ==========================================
  function renderFavoritPage() {
    grid.classList.add("hub-mode");
    grid.classList.remove("support-mode");
    grid.style.removeProperty("grid-template-columns");

    updateFavoritBadge();

    const bookmarkedWords = (typeof vocabularyData !== "undefined")
      ? vocabularyData.filter(w => userBookmarks.has(String(w.id || w.kanji || w.kana || "")))
      : [];

    const countText = bookmarkedWords.length > 0
      ? `${bookmarkedWords.length} kata tersimpan`
      : "Belum ada kata tersimpan";

    const cardsHTML = bookmarkedWords.length === 0
      ? `<div class="favorit-empty">
          <div class="favorit-empty-icon"><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true'><circle cx='12' cy='12' r='3'/><path d='M12 2a2 2 0 0 1 2 2c0 1.5-2 3-2 3s-2-1.5-2-3a2 2 0 0 1 2-2z'/><path d='M12 22a2 2 0 0 1-2-2c0-1.5 2-3 2-3s2 1.5 2 3a2 2 0 0 1-2 2z'/><path d='M2 12a2 2 0 0 1 2-2c1.5 0 3 2 3 2s-1.5 2-3 2a2 2 0 0 1-2-2z'/><path d='M22 12a2 2 0 0 1-2 2c-1.5 0-3-2-3-2s1.5-2 3-2a2 2 0 0 1 2 2z'/></svg></div>
          <p class="favorit-empty-title">Belum ada kata tersimpan</p>
          <p class="favorit-empty-sub">Tap ikon bookmark di kartu untuk menyimpan kata favoritmu</p>
        </div>`
      : `<div class="favorit-cards-row">
          ${bookmarkedWords.map(word => {
            const wordId = String(word.id || word.kanji || word.kana || "");
            return `
              <div class="favorit-mini-card" data-word-id="${wordId}" data-word='${JSON.stringify(word).replace(/'/g, "&#39;")}'>
                <div class="favorit-mini-inner">
                  <button class="favorit-mini-remove" data-word-id="${wordId}" title="Hapus dari favorit">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff4d6d" stroke="#ff4d6d" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                  </button>
                  <div class="favorit-mini-kanji">${word.kanji || word.kana || "â€”"}</div>
                  <div class="favorit-mini-kana">${word.kana || ""}</div>
                  <div class="favorit-mini-meaning">${tMeaning(word.meaning) || "â€”"}</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>`;

    grid.innerHTML = `
      <section class="hub-screen menu-hub-screen favorit-hub-screen">
        <header class="hub-header menu-hub-header favorit-hub-header">
          <h2>
            <span class="menu-hub-title-pill favorit-title-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;vertical-align:middle">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              Favorit
            </span>
          </h2>
          <p>${countText} â€” kata yang kamu simpan dari kartu kosakata</p>
          ${bookmarkedWords.length > 0 ? `<button class="favorit-clear-btn" id="favoritClearBtn">Hapus Semua</button>` : ""}
        </header>

        <div class="hub-section menu-hub-section-card favorit-card-section">
          ${cardsHTML}
        </div>
      </section>
    `;

    if (resultInfo) resultInfo.textContent = "Favorit";

    // Event: klik kartu â†’ buka modal
    grid.querySelectorAll(".favorit-mini-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".favorit-mini-remove")) return;
        try {
          const word = JSON.parse(card.dataset.word);
          const recs = bookmarkedWords.filter(w =>
            String(w.id || w.kanji || w.kana) !== String(word.id || word.kanji || word.kana)
          ).slice(0, 6);
          openModal(word, recs);
        } catch(err) {}
      });
    });

    // Event: tombol hapus per kartu
    grid.querySelectorAll(".favorit-mini-remove").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = String(btn.dataset.wordId);
        userBookmarks.delete(id);
        if (window.currentUser) saveUserBookmarks(window.currentUser.uid);
        refreshBookmarkStateOnCards();
        renderFavoritPage();
      });
    });

    // Event: hapus semua
    document.getElementById("favoritClearBtn")?.addEventListener("click", () => {
      if (!confirm("Hapus semua kata dari favorit?")) return;
      userBookmarks.clear();
      if (window.currentUser) saveUserBookmarks(window.currentUser.uid);
      refreshBookmarkStateOnCards();
      renderFavoritPage();
    });
  }

  // Update badge angka di tombol sidebar
  function updateFavoritBadge() {
    const badge = document.getElementById("favoritCount");
    if (!badge) return;
    if (userBookmarks.size > 0) {
      badge.textContent = userBookmarks.size;
      badge.style.display = "inline-flex";
    } else {
      badge.style.display = "none";
    }
  }

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
    if(resultInfo) resultInfo.textContent = "Terima kasih atas dukungan Anda";
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
  const titlePrefix = mode === "exercise" ? "Latihan" : "Grammar (文法)";
  
  const container = document.createElement("div");
  container.className = "empty-state";
  container.style.padding = "40px 20px";
  container.style.marginTop = "20px";

  container.innerHTML = `
    <div style="text-align: center;">
      <h2 style="color: #ff4d6d; margin-bottom: 20px;">${titlePrefix} ${type}</h2>
      <p style="font-size: 1.2rem; font-weight: 600; color: #1f2937; margin-bottom: 10px;">
        Kategori yang anda pilih, masih dalam proses Pengembangan, silahkan kembali lagi nanti.
      </p>
      <p style="font-style: italic; color: #4b5563; margin-bottom: 25px;">
        The category you selected is still under development, please come back later.
      </p>
      <p style="font-size: 1.4rem; font-weight: 800; color: #ff4d6d; line-height: 1.6;">
        é¸æŠžã•ã‚ŒãŸã‚«ãƒ†ã‚´ãƒªãƒ¼ã¯ç¾åœ¨é–‹ç™ºä¸­ã§ã™ã€‚<br>å¾Œã»ã©ã‚‚ã†ä¸€åº¦ã”ç¢ºèªãã ã•ã„ã€‚
      </p>
    </div>
  `;

  grid.appendChild(container);
  if (resultInfo) resultInfo.textContent = `${titlePrefix} ${type} ${level} (Coming Soon)`;
}
  
  
  // ==========================================
  // HUB KHUSUS BOTTOM NAV (Mobile)
  // - Terpisah dari grid utama
  // ==========================================
  function closeBottomNavHub() {
    if (!bottomNavHub) return;
    bottomNavHub.hidden = true;
    bottomNavHub.innerHTML = "";
    document.body.classList.remove("bottom-nav-hub-open");
  }

  function openBottomNavHub(kind) {
    if (!bottomNavHub || window.innerWidth > 767) return false;

    const isPractice = kind === "practice";
    const levels = ["N5", "N4", "N3", "N2", "N1"];

    const kotobaChips = KOTOBA_CATEGORY_KEYS.map((key) => {
      const label = KOTOBA_SHORT_LABELS[key] || typeLabelMap[key] || key;
      return `<button type="button" class="bottom-nav-hub__chip" data-menu-action="set-type" data-type="${key}">${label}</button>`;
    }).join("");

    const prog = window._practiceProgress;
    const unlockedLevels = prog?.levelStatus
      ? levels.filter((lvl) => prog.levelStatus[lvl] === "active" || prog.levelStatus[lvl] === "completed")
      : levels;

    const totalProg = calcTotalProgress();
    const isPracticeLockedByProgress = totalProg.total > 0 && totalProg.pct < 90;

    const renderPracticeLevelButtons = (mainType, sectionOverride = null) =>
      levels
        .map((lvl) => {
          const lockedByLevel = !unlockedLevels.includes(lvl);
          const isLocked = isPracticeLockedByProgress || lockedByLevel;
          return `<button type="button" class="bottom-nav-hub__chip${isLocked ? " hub-level-btn--locked" : ""}" data-practice="${mainType}" data-section="${sectionOverride || mainType}" data-level="${lvl}"${isLocked ? " disabled aria-disabled=\"true\"" : ""}>${lvl}</button>`;
        })
        .join("");

    const practiceLockBanner = isPracticeLockedByProgress
      ? `
          <div class="latihan-lock-banner">
            <div class="latihan-lock-banner__inner">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>Selesaikan <strong>${totalProg.pct}% dari 90%</strong> progres belajar untuk membuka semua soal</span>
            </div>
          </div>
        `
      : "";

    bottomNavHub.innerHTML = isPractice
      ? `
        <section class="bottom-nav-hub__screen bottom-nav-hub__screen--practice" aria-label="Latihan cepat dari navbar">
          ${practiceLockBanner}
          <header class="bottom-nav-hub__header">
            <h2>Latihan</h2>
            <p>Halaman ini berisi pilihan latihan JLPT dengan kategori terpisah.</p>
            <p>Supaya kamu bisa langsung fokus ke materi yang ingin diperdalam.</p>
          </header>
          <div class="bottom-nav-hub__practice-wrapper">
          <div class="bottom-nav-hub__group">
            <h3 class="bottom-nav-hub__capsule bottom-nav-hub__capsule--goi">言語知識（文字・語彙）Kosakata</h3>
            <div class="bottom-nav-hub__chips">
              ${renderPracticeLevelButtons("goi")}
            </div>
          </div>
          <div class="bottom-nav-hub__group">
            <h3 class="bottom-nav-hub__capsule bottom-nav-hub__capsule--bunpou">言語知識（文法）Tata Bahasa</h3>
            <div class="bottom-nav-hub__chips">
              ${renderPracticeLevelButtons("bunpou")}
            </div>
          </div>
          <div class="bottom-nav-hub__group">
            <h3 class="bottom-nav-hub__capsule bottom-nav-hub__capsule--dokkai">読解 Dokkai (Membaca)</h3>
            <div class="bottom-nav-hub__chips">
              ${renderPracticeLevelButtons("dokkai", "dokkai-reading")}
            </div>
          </div>

          <div class="bottom-nav-hub__group">
            <h3 class="bottom-nav-hub__capsule bottom-nav-hub__capsule--choukai">聴解 Choukai (Mendengarkan)</h3>
            <div class="bottom-nav-hub__chips">
              ${renderPracticeLevelButtons("listening")}
            </div>
          </div>
          </div>
        </section>
      `
      : `
        <section class="bottom-nav-hub__screen bottom-nav-hub__screen--menu" aria-label="Menu cepat dari navbar">
          <header class="bottom-nav-hub__header">
            <h2><span class="menu-hub-title-pill">Menu</span></h2>
            <p>Akses cepat ke fitur utama NihonByte dalam satu halaman menu yang ringkas dan mudah dipakai.</p>
          </header>
          <div class="bottom-nav-hub__menu-grid">
            <div class="bottom-nav-hub__menu-card bottom-nav-hub__menu-card--letters">
              <span class="bottom-nav-hub__menu-icon bottom-nav-hub__menu-icon--letters" aria-hidden="true">
                <img src="./assets/icons/duotone-native/menu-huruf-scroll.svg?v=2" alt="">
              </span>
              <div class="bottom-nav-hub__menu-body">
                <strong>Huruf</strong>
                <div class="bottom-nav-hub__letter-btn-row">
                  <button type="button" class="bottom-nav-hub__letter-btn" data-menu-action="letters" data-script="hiragana" aria-label="Hiragana">あ</button>
                  <button type="button" class="bottom-nav-hub__letter-btn" data-menu-action="letters" data-script="katakana" aria-label="Katakana">ア</button>
                </div>
                <span>Hiragana & Katakana</span>
              </div>
            </div>
            <button type="button" class="bottom-nav-hub__menu-card" data-menu-action="patterns">
              <span class="bottom-nav-hub__menu-icon bottom-nav-hub__menu-icon--grammar" aria-hidden="true">
                <img src="./assets/icons/duotone-native/menu-grammar-open-book.svg?v=2" alt="">
              </span>
              <span class="bottom-nav-hub__menu-body">
                <strong>Grammar (文法)</strong>
                <span>Pola grammar JLPT...</span>
              </span>
            </button>
            <button type="button" class="bottom-nav-hub__menu-card bottom-nav-hub__menu-card--expressions" data-menu-action="expressions">
              <span class="bottom-nav-hub__menu-icon bottom-nav-hub__menu-icon--expressions" aria-hidden="true">
                <img src="./assets/icons/duotone-native/menu-ungkapan.svg?v=2" alt="">
              </span>
              <span class="bottom-nav-hub__menu-body">
                <strong>Ungkapan Umum</strong>
                <span>Ekspresi sehari-hari</span>
              </span>
            </button>

          </div>

          <div class="bottom-nav-hub__group bottom-nav-hub__group--kotoba">
            <h3 class="bottom-nav-hub__capsule bottom-nav-hub__capsule--kotoba">Kotoba (Kosakata)</h3>
            <div class="bottom-nav-hub__chips">
              ${kotobaChips}
            </div>
          </div>
        </section>
      `;

    bottomNavHub.hidden = false;
    document.body.classList.add("bottom-nav-hub-open");

    // â”€â”€ Reset scroll ke atas setiap pindah tab (mobile portrait only) â”€â”€
    if (window.innerWidth <= 767) {
      bottomNavHub.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'instant' });
      const contentPanel = document.querySelector('.content-panel');
      if (contentPanel) contentPanel.scrollTop = 0;
    }

    bottomNavHub.querySelectorAll("[data-practice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mainType = btn.dataset.practice || "";
        const section = btn.dataset.section || mainType;
        const level = btn.dataset.level || "N5";

        closeBottomNavHub();

        const isGoiBunpouDokkaiDev = false; // goi N2/N1 unlocked
        const isChoukaiActive = ["choukai", "listening"].includes(mainType);
        const isChoukaiDev    = false;

        if (isChoukaiActive) {
          startChoukai(level);
          return;
        }

        if (isGoiBunpouDokkaiDev || isChoukaiDev) {
          const devTitleMap = {
            goi: "Pengetahuan Bahasa (Kosakata)",
            bunpou: "Pengetahuan Bahasa (Tata Bahasa)",
            dokkai: "Dokkai Membaca",
            choukai: "Choukai Mendengarkan",
            listening: "Choukai Mendengarkan",
          };
          viewMode = `dev:exercise:${devTitleMap[mainType] || mainType}:${level}`;
          render();
          return;
        }

        startExercise(mainType, section, level);
      });
    });

    bottomNavHub.querySelectorAll("[data-menu-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.menuAction || "";
        const script = btn.dataset.script || "";
        const level = btn.dataset.level || "N5";
        const type = btn.dataset.type || "";

        closeBottomNavHub();

        if (action === "support") {
          document.getElementById("supportBtn")?.click();
          return;
        }

        if (action === "switch-language") {
      document.getElementById("languageSwitch")?.click();
      closeSidebar();
      return;
        }

        if (action === "open-filter") {
          document.getElementById("searchBtn")?.click();
          return;
        }

        if (action === "letters") {
          if (!ensureLoginForMenu()) return;
          viewMode = `letters:${script || "hiragana"}`;
          if (search) search.value = "";
          render();
          return;
        }

        if (action === "patterns") {
          if (!ensureLoginForMenu()) return;
          viewMode = "grammar";
          render();
          return;
        }

        if (action === "set-type") {
          if (!ensureLoginForMenu()) return;
          viewMode = "vocab";
          selectedLevel = "all";
          selectedType = type || "all";
          if (search) search.value = "";
          render();
          return;
        }

        if (action === "expressions") {
          if (!ensureLoginForMenu()) return;
          viewMode = "vocab";
          selectedLevel = "all";
          selectedType = "ekspresi";
          if (category) category.value = "ekspresi";
          if (search) search.value = "";
          render();
        }
      });
    });

    if (resultInfo) resultInfo.textContent = isPractice ? "Latihan" : "Menu";
    return true;
  }

  // ==========================================
  // HUB VIEWS (Mobile-first)
  // - viewMode: "menu" dan "practice-hub"
  // ==========================================

  function ensureLoginForMenu() {
    if (accessMode === "guest") {
      openInfoModal("<h3>Akses Tamu Terbatas</h3><p>Menu ini hanya terbuka untuk pengguna login, Silakan Masuk Dengan Google atau Email.</p>");
      return false;
    }
    return true;
  }

  function renderMenuHub() {
    grid.classList.add("hub-mode");
    grid.classList.remove("support-mode");
    grid.style.removeProperty("grid-template-columns");

    const kotobaButtons = KOTOBA_CATEGORY_KEYS.map((key) => {
      const fullLabel = typeLabelMap[key] || key;
      const shortLabel = KOTOBA_SHORT_LABELS[key] || fullLabel;
      const safeTitle = String(fullLabel).replace(/"/g, "&quot;");
      return `<button type="button" class="hub-level-btn hub-level-btn--category" data-hub="set-type" data-type="${key}" title="${safeTitle}">${shortLabel}</button>`;
    }).join("");

    grid.innerHTML = `
      <section class="hub-screen menu-hub-screen">
        <header class="hub-header menu-hub-header">
          <h2><span class="menu-hub-title-pill">Menu</span></h2>
          <p>Akses cepat ke fitur utama NihonByte dalam satu halaman menu yang ringkas dan mudah dipakai.</p>
        </header>

        ${renderMenuPanelGrid()}

        <div class="hub-section menu-hub-section-card menu-hub-section-card--kotoba">
          <h3 class="menu-section-title-pill">Kotoba (Kosakata)</h3>
          <div class="hub-details hub-details--always-open">
            <div class="hub-levels">
              ${kotobaButtons}
            </div>
          </div>
        </div>
      </section>
    `;

    if (resultInfo) resultInfo.textContent = "Menu";

    grid.querySelectorAll("[data-hub]").forEach((btn) => {
      btn.addEventListener("click", () => handleHubAction(btn));
    });
  }

    function getMenuPanelCards() {
    return [
      {
        action: "letters",
        script: "hiragana",
        title: "Huruf",
        description: "Hiragana & Katakana",
        iconPath: "./assets/icons/duotone-native/menu-huruf-scroll.svg?v=2"
      },
      {
        action: "grammar",
        title: "Grammar (文法)",
        description: "Pola grammar JLPT plus contoh kalimat yang aplikatif",
        iconPath: "./assets/icons/duotone-native/menu-grammar-open-book.svg?v=2"
      },
      {
        action: "expressions",
        title: "Ungkapan Umum",
        description: "Ekspresi harian untuk percakapan natural sehari-hari",
        iconPath: "./assets/icons/duotone-native/menu-ungkapan.svg?v=2"
      },

    ];
  }

  function renderMenuPanelGrid() {
    const cards = getMenuPanelCards()
      .map(({ action, script = "", level = "", title, description, iconPath = "" }) => {
        // Special case: Huruf - card statis dengan icon asset + tombol script
        if (action === "letters") {
          return `
            <div class="menu-panel-card menu-panel-card--static menu-panel-card--letters">
              <span class="menu-panel-card__icon-wrap menu-panel-card__icon-wrap--letters" aria-hidden="true">
                <img src="${iconPath}" class="menu-panel-card__icon" alt="">
              </span>
              <div class="menu-panel-card__body">
                <strong>${title}</strong>
                <div class="letter-btn-pair">
                  <button type="button" class="letter-circle-btn" data-hub="letters" data-script="hiragana" title="Hiragana" aria-label="Buka Hiragana">
                    <span aria-hidden="true">\u3042</span>
                  </button>
                  <button type="button" class="letter-circle-btn" data-hub="letters" data-script="katakana" title="Katakana" aria-label="Buka Katakana">
                    <span aria-hidden="true">\u30A2</span>
                  </button>
                </div>
              </div>
            </div>
          `;
        }

        const scriptAttr = script ? ` data-script="${script}"` : "";
        const levelAttr = level ? ` data-level="${level}"` : "";
        return `
          <button type="button" class="menu-panel-card menu-panel-card--${action}" data-hub="${action}"${scriptAttr}${levelAttr}>
            <span class="menu-panel-card__icon-wrap" aria-hidden="true">
              <img src="${iconPath}" class="menu-panel-card__icon" alt="">
            </span>
            <div class="menu-panel-card__body">
              <strong>${title}</strong>
              <span>${description}</span>
            </div>
          </button>
        `;
      })
      .join("");

    return `<div class="menu-panel-grid">${cards}</div>`;
  }
  function handleHubAction(btn) {
    const action = btn.dataset.hub || "";
    const script = btn.dataset.script || "";
    const level = btn.dataset.level || "N5";
    const type = btn.dataset.type || "";

    if (action === "practice") {
      viewMode = "practice-hub";
      render();
      return;
    }

    if (action === "support") {
      document.getElementById("supportBtn")?.click();
      return;
    }

    if (action === "open-filter") {
      document.getElementById("searchBtn")?.click();
      return;
    }

    if (action === "set-type") {
      if (!ensureLoginForMenu()) return;
      viewMode = "vocab";
      selectedLevel = "all";
      selectedType = type || "all";
      if (search) search.value = "";
      render();
      return;
    }

    if (action === "letters") {
      if (!ensureLoginForMenu()) return;
      if (!script) {
        openInfoModal("<h3>Huruf</h3><p>Pilih Hiragana / Katakana.</p>");
        return;
      }
      viewMode = `letters:${script}`;
      if (search) search.value = "";
      closeModal();
      render();
      return;
    }

    if (action === "patterns") {
      if (!ensureLoginForMenu()) return;
      viewMode = "grammar";
      render();
      return;
    }

    if (action === "expressions") {
      if (!ensureLoginForMenu()) return;
      viewMode = "vocab";
      selectedLevel = "all";
      selectedType = "ekspresi";
      if (category) category.value = "ekspresi";
      if (search) search.value = "";
      render();
      return;
    }

    if (action === "grammar") {
      if (!ensureLoginForMenu()) return;
      viewMode = "grammar";
      if (search) search.value = "";
      closeModal();
      render();
      return;
    }
  }

  // Practice lock poster (fallback) and onboarding shortcut renderer.
  function renderPracticeLockScreen(title, subtitle) {
    grid.classList.add("hub-mode");
    grid.classList.remove("support-mode", "kc-grid-mode");
    grid.style.removeProperty("grid-template-columns");
    grid.innerHTML = `
      <div class="prc-lock-poster">
        <div class="prc-lock-poster__bg">
          <div class="prc-lock-poster__orb prc-lock-poster__orb--1"></div>
          <div class="prc-lock-poster__orb prc-lock-poster__orb--2"></div>
          <div class="prc-lock-poster__orb prc-lock-poster__orb--3"></div>
          <div class="prc-lock-poster__grid-lines"></div>
        </div>
        <div class="prc-lock-poster__inner">
          <div class="prc-lock-poster__left">
            <div class="prc-lock-poster__badge">LOCKED</div>
            <h2 class="prc-lock-poster__title">${title}</h2>
            <p class="prc-lock-poster__subtitle">${subtitle}</p>
            <p class="prc-lock-poster__desc">
              Selesaikan <strong>90% kosakata inti</strong> di mode Practice terlebih dahulu untuk membuka akses ke fitur ini.
            </p>
            <button class="prc-lock-poster__btn" id="prc-lock-cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Mulai Practice
            </button>
          </div>
          <div class="prc-lock-poster__right">
            <div class="prc-lock-poster__icon-wrap">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="56" fill="rgba(225,29,72,0.08)" stroke="rgba(225,29,72,0.2)" stroke-width="2"/>
                <circle cx="60" cy="60" r="40" fill="rgba(225,29,72,0.06)" stroke="rgba(225,29,72,0.15)" stroke-width="1.5"/>
                <rect x="36" y="54" width="48" height="36" rx="6" fill="rgba(225,29,72,0.12)" stroke="#e11d48" stroke-width="2.5"/>
                <path d="M44 54V42a16 16 0 0 1 32 0v12" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="60" cy="72" r="5" fill="#e11d48"/>
                <line x1="60" y1="77" x2="60" y2="84" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="prc-lock-poster__steps">
              <div class="prc-lock-poster__step"><span class="prc-lock-poster__step-num">01</span><span class="prc-lock-poster__step-text">Pilih level di Practice</span></div>
              <div class="prc-lock-poster__step"><span class="prc-lock-poster__step-num">02</span><span class="prc-lock-poster__step-text">Selesaikan 90% vocab inti + grammar</span></div>
              <div class="prc-lock-poster__step"><span class="prc-lock-poster__step-num">03</span><span class="prc-lock-poster__step-text">Fitur terbuka otomatis</span></div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("prc-lock-cta")?.addEventListener("click", () => {
      renderPracticeOnboardingInGrid();
    });
  }

  function renderPracticeOnboardingInGrid() {
    const LEVELS = ["N5", "N4", "N3", "N2", "N1"];
    const LEVEL_LABELS = {
      N5: "\u57fa\u790e",
      N4: "\u521d\u7d1a",
      N3: "\u4e2d\u7d1a",
      N2: "\u4e0a\u7d1a",
      N1: "\u6700\u4e0a\u7d1a"
    };
    const LEVEL_SVGS = {
      N5: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" fill="#fff0f3"/><circle cx="28" cy="28" r="26" stroke="#e11d48" stroke-width="2"/><text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#e11d48" font-family="Ubuntu,sans-serif">N5</text><text x="28" y="36" text-anchor="middle" font-size="9" fill="#9f1239" font-family="Shippori Mincho,serif">\u57fa\u790e</text></svg>`,
      N4: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" fill="#eff6ff"/><circle cx="28" cy="28" r="26" stroke="#2563eb" stroke-width="2"/><text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" font-family="Ubuntu,sans-serif">N4</text><text x="28" y="36" text-anchor="middle" font-size="9" fill="#1e40af" font-family="Shippori Mincho,serif">\u521d\u7d1a</text></svg>`,
      N3: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" fill="#f0fdf4"/><circle cx="28" cy="28" r="26" stroke="#16a34a" stroke-width="2"/><text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a" font-family="Ubuntu,sans-serif">N3</text><text x="28" y="36" text-anchor="middle" font-size="9" fill="#14532d" font-family="Shippori Mincho,serif">\u4e2d\u7d1a</text></svg>`,
      N2: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" fill="#fefce8"/><circle cx="28" cy="28" r="26" stroke="#ca8a04" stroke-width="2"/><text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#ca8a04" font-family="Ubuntu,sans-serif">N2</text><text x="28" y="36" text-anchor="middle" font-size="9" fill="#713f12" font-family="Shippori Mincho,serif">\u4e0a\u7d1a</text></svg>`,
      N1: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" fill="#fdf4ff"/><circle cx="28" cy="28" r="26" stroke="#9333ea" stroke-width="2"/><text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#9333ea" font-family="Ubuntu,sans-serif">N1</text><text x="28" y="36" text-anchor="middle" font-size="9" fill="#581c87" font-family="Shippori Mincho,serif">\u6700\u4e0a\u7d1a</text></svg>`
    };

    grid.classList.add("hub-mode");
    grid.classList.remove("support-mode", "kc-grid-mode");
    grid.style.removeProperty("grid-template-columns");
    grid.innerHTML = `
      <div class="prc-ob-poster">
        <div class="prc-ob-poster__bg">
          <div class="prc-ob-orb prc-ob-orb--1"></div>
          <div class="prc-ob-orb prc-ob-orb--2"></div>
          <div class="prc-ob-orb prc-ob-orb--3"></div>
          <div class="prc-ob-kanji-float prc-ob-kanji-float--1">\u8a9e</div>
          <div class="prc-ob-kanji-float prc-ob-kanji-float--2">\u5b66</div>
          <div class="prc-ob-kanji-float prc-ob-kanji-float--3">\u529b</div>
          <div class="prc-ob-kanji-float prc-ob-kanji-float--4">\u6587</div>
        </div>
        <div class="prc-ob-poster__inner">
          <div class="prc-ob-poster__header">
            <div class="prc-ob-poster__badge">NihonByte Practice</div>
            <h2 class="prc-ob-poster__title">Mulai<br>Perjalananmu</h2>
            <p class="prc-ob-poster__sub">\u65e5\u672c\u8a9e\u80fd\u529b\u8a66\u9a13</p>
            <p class="prc-ob-poster__desc">Pilih level JLPT yang sesuai kemampuanmu. Jika memilih di atas N5, kamu akan dites terlebih dahulu.</p>
          </div>
          <div class="prc-ob-poster__levels">
            ${LEVELS.map((lvl, i) => `
              <button class="prc-ob-level-card" data-level="${lvl}" style="animation-delay:${i * 0.06}s">
                <div class="prc-ob-level-card__icon">${LEVEL_SVGS[lvl]}</div>
                <div class="prc-ob-level-card__body">
                  <span class="prc-ob-level-card__name">${lvl}</span>
                  <span class="prc-ob-level-card__label">${LEVEL_LABELS[lvl]}</span>
                </div>
                <div class="prc-ob-level-card__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    grid.querySelectorAll(".prc-ob-level-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.replace("./onboard/onboarding.html");
      });
    });
  }

  function renderPracticeHub() {
    grid.classList.add("hub-mode");
    grid.classList.remove("support-mode");
    grid.style.removeProperty("grid-template-columns");

    const levels = ["N5", "N4", "N3", "N2", "N1"];

    // Ambil level yang unlock dari onboarding
    const prog = window._practiceProgress;
    const unlockedLevels = prog?.levelStatus
      ? levels.filter(l => prog.levelStatus[l] === "active" || prog.levelStatus[l] === "completed")
      : levels; // kalau tidak ada progress, semua unlock (dev / fallback)

    const renderLevelButtons = (main, sectionOverride = null) =>
      levels
        .map((lvl) => {
          const isLocked = !unlockedLevels.includes(lvl);
          return `<button type="button" class="hub-level-btn hub-level-btn--patterns${isLocked ? " hub-level-btn--locked" : ""}" data-main="${main}" data-section="${sectionOverride || main}" data-level="${lvl}"${isLocked ? " disabled aria-disabled=\"true\"" : ""}>${lvl}</button>`;
        })
        .join("");

    grid.innerHTML = `
      <section class="hub-screen hub-screen--practice">
        <div class="hub-practice-shell">
          <header class="hub-header hub-header--practice">
            <h2><span class="practice-hub-title-pill">Latihan</span></h2>
            <p>Halaman ini berisi pilihan latihan JLPT dengan kategori terpisah.</p>
            <p>Supaya kamu bisa langsung fokus ke materi yang ingin diperdalam.</p>
          </header>

          <div class="hub-practice-divider" aria-hidden="true"></div>

          <div class="hub-practice-wrapper">
          <div class="hub-section">
            <h3 class="hub-section-capsule hub-section-capsule--goi">言語知識（文字・語彙）Kosakata</h3>
            <div class="hub-levels">
              ${renderLevelButtons("goi")}
            </div>
          </div>

          <div class="hub-section">
            <h3 class="hub-section-capsule hub-section-capsule--bunpou">言語知識（文法）Tata Bahasa</h3>
            <div class="hub-levels">
              ${renderLevelButtons("bunpou")}
            </div>
          </div>

          <div class="hub-section">
            <h3 class="hub-section-capsule hub-section-capsule--dokkai">読解 Dokkai (Membaca)</h3>
            <div class="hub-levels">
              ${renderLevelButtons("dokkai", "dokkai-reading")}
            </div>
          </div>

          <div class="hub-section">
            <h3 class="hub-section-capsule hub-section-capsule--choukai">聴解 Choukai (Mendengarkan)</h3>
            <div class="hub-levels">
              ${levels.map((lvl) => `<button type="button" class="hub-level-btn hub-level-btn--patterns" data-main="listening" data-section="listening" data-level="${lvl}">${lvl}</button>`).join("")}
            </div>
          </div>
        </div>
        </div>
      </section>
    `;

    if (resultInfo) resultInfo.textContent = "Latihan";

    // Check progress â€” kalau < 90%, tampilkan lock overlay di atas hub
    const _prog = calcTotalProgress();
    if (_prog.total > 0 && _prog.pct < 90) {
      // Tambah lock banner di atas hub
      const lockBanner = document.createElement("div");
      lockBanner.className = "latihan-lock-banner";
      lockBanner.innerHTML = `
        <div class="latihan-lock-banner__inner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Selesaikan <strong>${_prog.pct}% dari 90%</strong> progres belajar untuk membuka semua soal</span>
        </div>
      `;
      const shell = grid.querySelector(".hub-practice-shell");
      if (shell) shell.insertBefore(lockBanner, shell.firstChild);

      // Disable semua level buttons
      grid.querySelectorAll(".hub-level-btn").forEach(btn => {
        btn.disabled = true;
        btn.classList.add("hub-level-btn--locked");
      });
      return;
    }

    grid.querySelectorAll(".hub-level-btn").forEach((btn) => {
      btn.addEventListener("click", () => launchExerciseFromHub(btn));
    });
  }

  function launchExerciseFromHub(button) {
    const mainType = button.dataset.main || button.dataset.type || "";
    const section = button.dataset.section || mainType;
    const level = button.dataset.level;

    const isGoiBunpouDokkaiDev = false; // goi N2/N1 unlocked
    const isChoukaiActive = ["choukai", "listening"].includes(mainType);
    const isChoukaiDev    = false;

    if (isChoukaiActive) {
      startChoukai(level);
      return;
    }

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
      return;
    }

    startExercise(mainType, section, level);
  }


// ==========================================
  // INI ADALAH FUNGSI RENDER() YANG BENAR
  // (Sudah mencakup semua logika dari awal sampai akhir)
  // ==========================================
  

  // Helper: disable/enable level buttons di search modal sesuai onboarding
  function _applySearchLevelGate(isLockedCategory) {
    const prog = window._practiceProgress;
    if (!prog || !prog.levelStatus || !isLockedCategory) {
      // Bebas semua level
      document.querySelectorAll("#levelGrid .level-btn:not(.level-btn--all)").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("level-btn--locked");
      });
      return;
    }
    // Disable level yang belum unlock
    document.querySelectorAll("#levelGrid .level-btn:not(.level-btn--all)").forEach(btn => {
      const lvl = btn.dataset.level;
      const unlocked = prog.levelStatus[lvl] === "active" || prog.levelStatus[lvl] === "completed";
      btn.disabled = !unlocked;
      btn.classList.toggle("level-btn--locked", !unlocked);
      if (!unlocked) btn.classList.remove("active"); // hapus active kalau locked
    });
    // Kalau semua level spesifik locked, set ke "all"
    const anyActive = [...document.querySelectorAll("#levelGrid .level-btn:not(.level-btn--all).active")].length > 0;
    if (!anyActive) {
      document.querySelector("#levelGrid .level-btn--all")?.classList.add("active");
    }
  }


  // â”€â”€ Progress Tracking â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Simpan ke Firestore: users/{uid}/progress/opened/{type}/{wordId}

  async function saveVocabProgress(word) {
    if (!window.currentUser || !window.firebaseDb || !window.doc || !window.setDoc) return;
    if (!word) return;
    const type = word.type;
    if (!LOCKED_VOCAB_TYPES.includes(type)) return; // hanya vocab inti
    const wordId = String(word.id || word.kanji || word.kana || "");
    if (!wordId) return;
    try {
      const uid = window.currentUser.uid;
      const ref = window.doc(window.firebaseDb, "users", uid, "progress", "vocabOpened");
      const patch = {};
      patch[wordId] = true;
      await window.setDoc(ref, patch, { merge: true });
      // Update cache lokal
      if (!window._vocabOpenedCache) window._vocabOpenedCache = {};
      window._vocabOpenedCache[wordId] = true;
    } catch(e) { console.error("Gagal simpan vocab progress:", e); }
  }

  async function saveGrammarProgress(patternId) {
    if (!window.currentUser || !window.firebaseDb || !window.doc || !window.setDoc) return;
    if (!patternId) return;
    try {
      const uid = window.currentUser.uid;
      const ref = window.doc(window.firebaseDb, "users", uid, "progress", "grammarOpened");
      const patch = {};
      patch[String(patternId)] = true;
      await window.setDoc(ref, patch, { merge: true });
      if (!window._grammarOpenedCache) window._grammarOpenedCache = {};
      window._grammarOpenedCache[String(patternId)] = true;
    } catch(e) { console.error("Gagal simpan grammar progress:", e); }
  }

  async function loadAllProgress(uid) {
    if (!window.firebaseDb || !window.doc || !window.getDoc) return;
    try {
      const [vocabSnap, grammarSnap] = await Promise.all([
        window.getDoc(window.doc(window.firebaseDb, "users", uid, "progress", "vocabOpened")),
        window.getDoc(window.doc(window.firebaseDb, "users", uid, "progress", "grammarOpened")),
      ]);
      window._vocabOpenedCache   = vocabSnap.exists()   ? vocabSnap.data()   : {};
      window._grammarOpenedCache = grammarSnap.exists() ? grammarSnap.data() : {};
    } catch(e) { console.error("Gagal load progress:", e); }
  }

  function calcTotalProgress() {
    const prog = window._practiceProgress;
    if (!prog?.levelStatus || typeof vocabularyData === "undefined") return { pct: 0, done: 0, total: 0 };

    const unlockedLevels = ["N5","N4","N3","N2","N1"].filter(l =>
      prog.levelStatus[l] === "active" || prog.levelStatus[l] === "completed"
    );

    // â”€â”€ Vocab inti â”€â”€
    const vocabOpened = window._vocabOpenedCache || {};
    const vocabAll = vocabularyData.filter(w =>
      LOCKED_VOCAB_TYPES.includes(w.type) && unlockedLevels.includes(w.level)
    );
    const vocabDone  = vocabAll.filter(w => {
      const id = String(w.id || w.kanji || w.kana || "");
      return vocabOpened[id];
    }).length;
    const vocabTotal = vocabAll.length;

    // â”€â”€ Grammar â”€â”€
    const grammarOpened = window._grammarOpenedCache || {};
    const grammarAll = (Array.isArray(window.grammarData) ? window.grammarData : [])
      .filter(g => unlockedLevels.includes(g.level));
    const grammarDone  = grammarAll.filter(g => grammarOpened[String(g.id)]).length;
    const grammarTotal = grammarAll.length;

    const done  = vocabDone  + grammarDone;
    const total = vocabTotal + grammarTotal;
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

    return { pct, done, total, vocabDone, vocabTotal, grammarDone, grammarTotal };
  }

  // â”€â”€ Level Gate â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Set window.grammarLevels sesuai level yang sudah unlock dari onboarding
  function applyLevelGate() {
    const prog = window._practiceProgress;
    if (!prog || !prog.levelStatus) return;
    const ALL = ["N5","N4","N3","N2","N1"];
    const unlocked = ALL.filter(l => prog.levelStatus[l] === "active" || prog.levelStatus[l] === "completed");
    if (unlocked.length === 0) return;
    window.grammarLevels   = unlocked;
  }

  function render() {
    // Reset overflow kalau ada modal yang tidak di-close sebelum navigasi
    if (!document.body.classList.contains("sidebar-open")) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // SAFETY GUARD: jangan re-render halaman saat latihan sedang aktif.
    //     Ini mencegah rotasi / navigasi tidak sengaja mengusir user dari quiz.
    if (isTesting || document.body.classList.contains('training-session')) {
      // Cukup refresh layout quiz tanpa reset state
      if (typeof _refreshQuizLayout === 'function') _refreshQuizLayout();
      return;
    }

    savedScrollPosition = 0; 

    if (!isTesting) {
      setTimeout(() => {
        var cp = document.querySelector(".content-panel");
        if (cp) {
          cp.scrollTop = 0;
        } else {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }, 50);
    }

    if (!isTesting) unlockQuizScroll();
    syncMobileTopbarLayout();
    setHistoryMode(false);
    grid.classList.remove("hub-mode", "support-mode", "kc-grid-mode");
    grid.style.removeProperty("grid-template-columns");
    grid.innerHTML = "";
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.style.display = "none";
    }

    syncBottomNav();
    syncDuoSidebarNav();
    closeBottomNavHub();

    if (viewMode === "support") {
      renderSupportPoster();
      return;
    }

    if (viewMode === "favorit") {
      renderFavoritPage();
      return;
    }

    if (viewMode === "dashboard") {
      openDashboard();
      return;
    }

    if (viewMode === "menu") {
      // Mobile: gunakan bottom nav hub bukan render ke grid
      if (!isDesktopLayout()) {
        openBottomNavHub("menu");
        setBottomNavActive("menu");
        return;
      }
      renderMenuHub();
      return;
    }

    if (viewMode === "practice-hub") {
      // Mobile: pakai bottom nav hub (sama seperti "menu"), bukan render ke grid.
      // Tanpa cek ini, rotasi landscapeâ†’portrait tetap render versi grid (desktop-style).
      if (!isDesktopLayout()) {
        openBottomNavHub("practice");
        setBottomNavActive("practice");
        return;
      }
      renderPracticeHub();
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

    if (
      viewMode === "verb-forms" ||
      viewMode.startsWith("verb-form:") ||
      viewMode === "adjective-forms" ||
      viewMode.startsWith("adjective-form:")
    ) {
      viewMode = "grammar";
    }
    
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
    
    if (viewMode.startsWith("letters:")) {
      renderLetterPoster(viewMode.split(":")[1]);
      return;
    }

    if (viewMode === "grammar") {
      window.grammarUI?.renderHub({
        grid,
        onOpenPoster: (patternId) => {
          viewMode = `grammar:${patternId}`;
          render();
        }
      });
      if (resultInfo) resultInfo.textContent = "Materi Grammar (文法)";
      return;
    }

    if (viewMode.startsWith("grammar:")) {
      const patternId = viewMode.split(":")[1];
      // Simpan progress grammar saat poster dibuka
      saveGrammarProgress(patternId);
      window.grammarUI?.renderPoster({
        grid,
        patternId,
        onBack: () => {
          viewMode = "grammar";
          render();
        }
      });
      if (resultInfo) resultInfo.textContent = `Grammar (文法) • ${patternId.toUpperCase()}`;
      return;
    }

    if (viewMode.startsWith("test:")) {
      if (!testState.active) return;
      renderCurrentTestQuestion();
      return;
    }

    window.addEventListener("resize", () => {
    syncMobileTopbarLayout();
    // TAMBAHIN INI: Biar tabel huruf langsung nyesuaiin pas layar dikecilin/digedein!
    if (viewMode.startsWith("letters:")) {
      render(); 
    }
  });

// ==== LOGIKA KARTU KOSAKATA & PAGINATION ====

    // Guard: kanji-card-single = openWord mode, jangan di-re-render
    if (viewMode === "kanji-card-single") return;

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

    const itemsPerPage = window.innerWidth > 768 ? 24 : 30; 
    const totalPages = Math.ceil(words.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedWords = words.slice(startIndex, endIndex);
    const _savedTotalPages = totalPages; // simpan buat restore

    const fragment = document.createDocumentFragment();
    paginatedWords.forEach((word) => {
      const cardButton = document.createElement("article");
      cardButton.className = "card";
      cardButton.setAttribute("role", "button");
      cardButton.setAttribute("tabindex", "0");
      
      try { cardButton.dataset.word = JSON.stringify(word); } catch (err) { return; }
      
      cardButton.innerHTML = cardImageTemplate(word);
      
      cardButton.addEventListener("click", (e) => {
        if (e.target.closest(".play-audio-btn") || e.target.closest(".download-card-btn") || e.target.closest(".bookmark-card-btn")) return;

        // Mobile: tap 1x reveal tombol, tap 2x buka modal
        const isTouchDevice = navigator.maxTouchPoints > 0 || window.matchMedia("(hover: none)").matches;
        if (isTouchDevice) {
          const cardImg = cardButton.querySelector(".card-image");
          if (!cardImg.classList.contains("touch-revealed")) {
            // Tap pertama â€” reveal tombol
            document.querySelectorAll(".card-image.touch-revealed").forEach(c => c.classList.remove("touch-revealed"));
            cardImg.classList.add("touch-revealed");
            return;
          }
          // Tap kedua â€” buka modal
          cardImg.classList.remove("touch-revealed");
        }

        try {
          var word = JSON.parse(cardButton.dataset.word);
          if (window.kanjiCardUI) {
            var contentPanel = document.querySelector(".content-panel");
            var savedScroll = contentPanel
              ? contentPanel.scrollTop
              : (window.scrollY || window.pageYOffset || 0);

            // Cabut semua card dari DOM ke fragment â€” bukan hide
            var cardFragment = document.createDocumentFragment();
            grid.querySelectorAll(".card").forEach(function(c) {
              cardFragment.appendChild(c);
            });

            const paginationContainer = document.getElementById("pagination-container");
            if (paginationContainer) {
              paginationContainer.innerHTML = "";
              paginationContainer.style.display = "none";
              paginationContainer.style.visibility = "hidden";
            }

            // Inject container kanji-card
            var kcContainer = document.createElement("div");
            kcContainer.id = "kc-single-container";
            kcContainer.style.cssText = "width:100%;grid-column:1/-1;";
            grid.appendChild(kcContainer);

            grid.classList.add("kc-grid-mode");
            grid.style.removeProperty("grid-template-columns");
            if (resultInfo) resultInfo.textContent = "";

            if (contentPanel) contentPanel.scrollTop = 0;
            else window.scrollTo({ top: 0, behavior: "instant" });

            // Set viewMode agar resize handler tahu kita sedang di single view
            viewMode = "kanji-card-single";

            // Simpan progress vocab inti saat kanji-card dibuka
            if (LOCKED_VOCAB_TYPES.includes(word.type)) {
              saveVocabProgress(word);
            }

            window.kanjiCardUI.openWord(word, {
              grid: kcContainer,
              onBackToMenu: function() {
                // Hapus container kanji-card
                kcContainer.remove();
                // Kembalikan semua card dari fragment ke grid
                grid.appendChild(cardFragment);
                if (paginationContainer) {
                  paginationContainer.style.visibility = "";
                  renderPagination(_savedTotalPages);
                }
                grid.classList.remove("kc-grid-mode");
                viewMode = "vocab";

                // Restore scroll
                setTimeout(function() {
                  if (contentPanel) contentPanel.scrollTop = savedScroll;
                  else window.scrollTo({ top: savedScroll, behavior: "instant" });
                }, 50);
              }
            });
          }
        } catch (err) {}
      });
      fragment.appendChild(cardButton);
    });
    
    grid.appendChild(fragment);
    
    // Panggil mesin tombol halaman
    if (!isGuestPreview) renderPagination(totalPages);

    if (resultInfo) {
      resultInfo.textContent = isGuestPreview
        ? (window.innerWidth <= 767 ? "Guest Mode" : `${words.length} (Preview Tamu) • Login untuk buka semua materi`)
        : formatResultInfo(words.length);
    }

    applyGuestDownloadRestrictions();
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
    const isMobileViewport = isHamburgerDrawerMode();
    const isLandscapeViewport = window.innerWidth > window.innerHeight;
    if (!isMobileViewport || isLandscapeViewport) {
      mobileSidebarOpenedByHamburger = false;
    }
    const preserveMobileSidebar = isMobileViewport
      && !isLandscapeViewport
      && mobileSidebarOpenedByHamburger
      && document.body.classList.contains("sidebar-open");
    applyResponsiveSidebarLayout({ preserveMobileState: preserveMobileSidebar });
    if (duoNavInitialized) renderDuoSidebarNav();
    if (viewMode === "grammar" || viewMode.startsWith("grammar:")) {
      grid.style.setProperty("grid-template-columns", window.innerWidth <= 767 ? "1fr" : "repeat(2, minmax(0, 1fr))", "important");
    }
    // Kanji Card: jaga layout saat rotate/resize â€” deck & kartu tidak reset
    if (viewMode === "kanji-card-single") {
      if (window.kanjiCardUI && typeof window.kanjiCardUI.rerender === "function") {
        window.kanjiCardUI.rerender();
      }
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
  setupDuoSidebarNav();
  
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
    const cleanText = (text || '').replace(/\s+/g, '').trim() || 'â€”';
    const charCount = [...cleanText].length;

    let preferredSize = 400;
    if (charCount === 2) preferredSize = 372;
    else if (charCount === 3) preferredSize = 320;
    else if (charCount === 4) preferredSize = 270;
    else if (charCount >= 5) preferredSize = 232;

    const maxWidth = 860;
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

  // ==========================================
  // BOOKMARK / FAVORIT SYSTEM
  // ==========================================

  // Load bookmarks dari Firestore saat login
  async function loadUserBookmarks(uid) {
    if (!window.firebaseDb || !window.doc || !window.getDoc) return;
    try {
      const ref = window.doc(window.firebaseDb, "users", uid, "bookmarks", "words");
      const snap = await window.getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        userBookmarks = new Set(data.ids || []);
      } else {
        userBookmarks = new Set();
      }
      // Re-render kartu yang sudah ada biar state bookmark sinkron
      refreshBookmarkStateOnCards();
    } catch (e) {
      console.error("Gagal load bookmarks:", e);
    }
  }

  // Simpan bookmarks ke Firestore
  async function saveUserBookmarks(uid) {
    if (!window.firebaseDb || !window.doc || !window.setDoc) return;
    try {
      const ref = window.doc(window.firebaseDb, "users", uid, "bookmarks", "words");
      await window.setDoc(ref, { ids: Array.from(userBookmarks) });
    } catch (e) {
      console.error("Gagal simpan bookmarks:", e);
    }
  }

  // Toggle bookmark on/off
  window.toggleBookmark = function(event, wordId) {
    event.stopPropagation();
    if (!window.currentUser) {
      openInfoModal("<h3>Login Dulu</h3><p>Simpan kata favorit kamu dengan login terlebih dahulu.</p>");
      return;
    }
    const id = String(wordId);
    if (userBookmarks.has(id)) {
      userBookmarks.delete(id);
    } else {
      userBookmarks.add(id);
    }
    saveUserBookmarks(window.currentUser.uid);
    refreshBookmarkStateOnCards();
  };

  // Update visual semua tombol bookmark di halaman yang sedang ditampilkan
  function refreshBookmarkStateOnCards() {
    document.querySelectorAll(".bookmark-card-btn").forEach((btn) => {
      const id = String(btn.dataset.wordId);
      const isBookmarked = userBookmarks.has(id);
      btn.classList.toggle("is-bookmarked", isBookmarked);
      btn.title = isBookmarked ? "Hapus dari Favorit" : "Simpan ke Favorit";
      const svg = btn.querySelector("svg");
      if (svg) {
        svg.setAttribute("fill", isBookmarked ? "#ff4d6d" : "none");
        svg.setAttribute("stroke", isBookmarked ? "#ff4d6d" : "currentColor");
      }
    });
    updateFavoritBadge();
  }

  window.downloadAsImage = function(event, cardId) {
    event.stopPropagation();

    if (accessMode === "guest") {
      openInfoModal("<h3>Mode Tamu</h3><p>Fitur download kartu dikunci. Silakan login untuk mengunduh.</p>");
      return;
    }

    const element = document.getElementById(cardId);
    if (!element) return;

    const cardOverlay = element.querySelector('.card-overlay');
    const sourceKanji = cardOverlay?.querySelector('.kanji')?.textContent?.trim() || 'â€”';
    const sourceKana = cardOverlay?.querySelector('.kana')?.textContent?.trim() || 'â€”';
    const sourceRomaji = cardOverlay?.querySelector('.romaji')?.textContent?.trim() || '';
    const sourceMeaning = cardOverlay?.querySelector('.meaning')?.textContent?.trim() || 'â€”';

    const kanjiSize = getAdaptiveDownloadKanjiSize(sourceKanji);

    const exportNode = document.createElement('div');
    exportNode.className = 'download-export-card';
    exportNode.innerHTML = `
      <div class="download-export-glass-outline"></div>
      <div class="download-export-content">
        <img class="download-export-watermark" src="./assets/logo.png" alt="NihonByte Logo">
        <div class="download-export-watermark-text">å­¦</div>
        <div class="download-export-kanji" style="font-size:${kanjiSize}px">${escapeHTML(sourceKanji)}</div>
        <div class="download-export-kana">${escapeHTML(sourceKana)}</div>
        <div class="download-export-romaji">${escapeHTML(sourceRomaji)}</div>
        <div class="download-export-meaning">${escapeHTML(sourceMeaning)}</div>
      </div>
    `;
    document.body.appendChild(exportNode);

    const getSafeDownloadName = (text = '') => (text || '')
      .replace(/[\\/:*?"<>|]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const cardName = getSafeDownloadName(sourceKanji !== 'â€”' ? sourceKanji : (sourceKana || cardId)) || 'kanji-card';

    html2canvas(exportNode, {
      backgroundColor: null,
      scale: 1,
      width: 1080,
      height: 1080,
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `card-${cardName}.png`;
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
    if (!type || !level) return; // jangan simpan record kosong

    try {
      const uid = window.currentUser.uid;
      const ts  = Date.now();
      const docRef = window.doc(window.firebaseDb, "users", uid, "history", ts.toString());
      
      await window.setDoc(docRef, {
        kategori:   type,
        level:      level,
        skor_benar: correct,
        total_soal: total,
        nilai:      percentage,
        tanggal:    new Date().toLocaleDateString("id-ID"),
        jam:        new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
        timestamp:  ts
      });
    } catch (err) {
      console.error("Gagal kirim skor:", err);
    }
  }

  const latihanCategoryLabelMap = {
    goi: "言語知識（文字・語彙） Pengetahuan Bahasa (Kosakata)",
    bunpou: "言語知識（文法） Pengetahuan Bahasa (Tata Bahasa)",
    dokkai: "読解 Dokkai (Pemahaman Membaca)",
    listening: "聴解 Choukai (Pemahaman Mendengarkan)",
    choukai: "聴解 Choukai (Pemahaman Mendengarkan)",
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
    const SVG_DASH = {
      cal:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      book:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
      target:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
      cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
      chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
      clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      warn:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dash-icon" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    };

    const historyMarkup = historyItems.length
      ? historyItems.map((d) => {
          const isLulus = (d.nilai || 0) >= 60;
          const statusClass = isLulus ? "status-lulus" : "status-remidi";
          const kategoriLabel = getLatihanCategoryLabel(d.kategori);
          return `
            <article class="dashboard-history-item">
              <div>
                <p class="dashboard-history-date">${SVG_DASH.cal} ${d.tanggal || '-'}${d.jam ? `&ensp;${SVG_DASH.clock} ${d.jam}` : ''}</p>
                <h4>${SVG_DASH.book} ${kategoriLabel}</h4>
                <span class="dashboard-level">Level ${d.level || '-'}</span>
              </div>
              <div class="dashboard-history-score ${statusClass}">${d.nilai || 0}%</div>
              <div class="dashboard-history-meta">
                <p>${SVG_DASH.target} ${d.skor_benar || 0}/${d.total_soal || 0}</p>
                <strong class="${statusClass}">${isLulus
                  ? `${SVG_DASH.check} LULUS`
                  : `${SVG_DASH.cross} GAGAL`}</strong>
              </div>
            </article>
          `;
        }).join("")
      : '<div class="dashboard-empty">Belum ada riwayat latihan tersimpan.</div>';

    const avatarPresetMarkup = avatarPresets.map((preset) => {
      const avatarUrl = buildPresetAvatarDataUrl(preset);
      return `<button type="button" class="avatar-preset-btn" data-avatar-url="${avatarUrl}" title="${preset.label}"><span style="display:inline-flex;align-items:center;justify-content:center;width:1.6em;height:1.6em;border-radius:50%;background:' + preset.color + ';color:#fff;font-size:0.65em;font-weight:700">${preset.emoji}</span></button>`;
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
          ${(function() {
            const p = calcTotalProgress();
            if (!p || p.total === 0) return '';
            const pct = p.pct;
            const isReady = pct >= 90;
            return `
              <div class="dash-progress-wrap">
                <div class="dash-progress-header">
                  <span class="dash-progress-label">Progres Belajar</span>
                  <span class="dash-progress-pct ${isReady ? 'dash-progress-pct--ready' : ''}">${pct}%</span>
                </div>
                <div class="dash-progress-bar-outer">
                  <div class="dash-progress-bar-fill ${isReady ? 'dash-progress-bar-fill--ready' : ''}" style="width:${pct}%"></div>
                </div>
                <div class="dash-progress-breakdown">
                  <span>Vocab ${p.vocabDone}/${p.vocabTotal}</span>
                  <span>Grammar ${p.grammarDone}/${p.grammarTotal}</span>
                </div>
                ${isReady ? `<div class="dash-progress-unlock-hint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                  Mode Latihan sudah terbuka!
                </div>` : ''}
              </div>
            `;
          })()}
        </div>

        <div id="dashboard-modal-backdrop" class="dashboard-modal-backdrop" hidden></div>

        <section id="dashboard-settings-modal" class="dashboard-modal" role="dialog" aria-modal="true" aria-label="Pengaturan profil" hidden>
          <button type="button" class="dashboard-modal-close" data-close-modal><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg></button>
          <h4>Pengaturan Profil</h4>
          <form id="dashboard-name-form" class="dashboard-profile-form">
            <label for="dashboard-name-input">Nama tampilan</label>
            <input id="dashboard-name-input" type="text" value="${displayName}" maxlength="40" required>
            <p class="dashboard-form-note">Nama ini yang akan tampil di sidebar & dashboard.</p>
            <button type="submit" class="dashboard-save-btn">Simpan nama</button>
          </form>
        </section>

        <section id="dashboard-avatar-modal" class="dashboard-modal" role="dialog" aria-modal="true" aria-label="Ganti avatar" hidden>
          <button type="button" class="dashboard-modal-close" data-close-modal><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg></button>
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
          <button type="button" class="dashboard-modal-close" data-close-crop><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:1em;height:1em;vertical-align:-0.15em' aria-hidden='true' stroke-width='2.5'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg></button>
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
          <h3>${SVG_DASH.chart} Riwayat Latihan</h3>
          <p class="dashboard-history-sub">Rekap berdasarkan kategori latihan yang dijalani.</p>
          <div class="dashboard-history-list">${historyMarkup}</div>
          ${options.error ? `<p class="dashboard-error">${SVG_DASH.warn} Gagal memuat sebagian data riwayat.</p>` : ''}
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
    const contentPanel = document.querySelector(".content-panel");

    if (!settingsBtn || !cameraBtn || !backdrop || !settingsModal || !avatarModal || !nameForm || !nameInput || !avatarPreview || !avatarSaveBtn) return;

    let selectedPhotoUrl = resolveProfilePhoto(user, profile);
    let photoSource = profile?.photoSource || (isGoogleUser(user) ? "google" : "default");
    let dashboardScrollState = null;

    function lockDashboardBackgroundScroll() {
      if (dashboardScrollState) return;
      dashboardScrollState = {
        bodyOverflow: document.body.style.overflow,
        htmlOverflow: document.documentElement.style.overflow,
        bodyTouchAction: document.body.style.touchAction,
        panelOverflow: contentPanel ? contentPanel.style.overflow : "",
        panelTouchAction: contentPanel ? contentPanel.style.touchAction : ""
      };

      document.body.classList.add("dashboard-modal-open");
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      if (contentPanel) {
        contentPanel.style.overflow = "hidden";
        contentPanel.style.touchAction = "none";
      }
    }

    function unlockDashboardBackgroundScroll() {
      if (!dashboardScrollState) return;
      document.body.classList.remove("dashboard-modal-open");
      document.body.style.overflow = dashboardScrollState.bodyOverflow;
      document.documentElement.style.overflow = dashboardScrollState.htmlOverflow;
      document.body.style.touchAction = dashboardScrollState.bodyTouchAction;
      if (contentPanel) {
        contentPanel.style.overflow = dashboardScrollState.panelOverflow;
        contentPanel.style.touchAction = dashboardScrollState.panelTouchAction;
      }
      dashboardScrollState = null;
    }

    function closeAllModals() {
      backdrop.hidden = true;
      settingsModal.hidden = true;
      avatarModal.hidden = true;
      const cropModal = document.getElementById("dashboard-crop-modal");
      if (cropModal) cropModal.hidden = true;
      unlockDashboardBackgroundScroll();
    }

    function openModal(type) {
      backdrop.hidden = false;
      settingsModal.hidden = type !== "settings";
      avatarModal.hidden = type !== "avatar";
      if (type === "settings") nameInput.focus();
      lockDashboardBackgroundScroll();
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
        lockDashboardBackgroundScroll();
        drawCropPreview();
      };
      img.src = dataUrl;
    }

    function closeCropModal() {
      if (!cropModal) return;
      cropModal.hidden = true;
      if (!settingsModal.hidden || !avatarModal.hidden) return;
      backdrop.hidden = true;
      unlockDashboardBackgroundScroll();
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

  async function openDashboard() {
    if (!window.currentUser) {
      alert("Silahkan Login!");
      return;
    }

    // Safety reset jika sebelumnya ada modal dashboard yang belum sempat cleanup.
    document.body.classList.remove("dashboard-modal-open");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.style.touchAction = "";
    const contentPanel = document.querySelector(".content-panel");
    if (contentPanel) {
      contentPanel.style.overflow = "";
      contentPanel.style.touchAction = "";
    }

    viewMode = "dashboard";
    if (resultInfo) resultInfo.textContent = "Dasbor saya";
    setBottomNavActive("dashboard");
    if (typeof setHistoryMode === "function") setHistoryMode(true);
    grid.innerHTML = '<div class="history-container" style="text-align:center;padding:20px;"><p>Menyiapkan dashboard...</p></div>';
    if (typeof closeSidebar === "function") closeSidebar();

    try {
      const uid = window.currentUser.uid;
      const profile = cachedUserProfile || await loadUserProfile(uid);
      cachedUserProfile = profile;
      const historyItems = (window.firebaseDb && window.doc) ? await fetchHistoryData(uid) : [];

      // Filter record invalid, sort terbaru di atas
      // Prioritas sort: field timestamp â†’ fallback _docId (doc ID = timestamp ms saat save)
      const validHistory = historyItems
        .filter(d => d.kategori && String(d.kategori).trim() !== "" && d.level && String(d.level).trim() !== "")
        .sort((a, b) => {
          const tsA = a.timestamp || Number(a._docId) || 0;
          const tsB = b.timestamp || Number(b._docId) || 0;
          return tsB - tsA;
        });

      grid.innerHTML = renderDashboard(window.currentUser, profile, validHistory);
      bindDashboardProfileEvents(window.currentUser, profile);
    } catch (err) {
      console.error("Error loading dashboard:", err);
      const profile = cachedUserProfile || null;
      grid.innerHTML = renderDashboard(window.currentUser, profile, [], { error: true });
      bindDashboardProfileEvents(window.currentUser, profile);
    }
  }

  if (dashboardBtn) {
    dashboardBtn.addEventListener("click", openDashboard);
  }

  if (userAvatarDisplay) {
    userAvatarDisplay.addEventListener("click", openDashboard);
  }

  // Fungsi helper buat ngambil data (pake modul firebase yang udah kita pasang)
  async function fetchHistoryData(uid) {
    const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js");
    const historyRef = collection(window.firebaseDb, "users", uid, "history");
    const querySnapshot = await getDocs(historyRef);
    const items = [];
    querySnapshot.forEach(doc => items.push({ _docId: doc.id, ...doc.data() }));
    return items;
  }

  // Panggil render saat pertama kali dimuat
  window.addEventListener("resize", enforceMobileTopbarOrder);
  enforceMobileTopbarOrder();

  function refreshLanguage() {
    updateLanguageSwitchIcon();
    updateLanguageSwitchLabel();
    if (window.NIHONBYTE_I18N?.applyStaticText) window.NIHONBYTE_I18N.applyStaticText();
    render();
    queueTranslateRenderedContent();
  }
  window.refreshLanguage = refreshLanguage;

  if (languageSwitch) {
    languageSwitch.addEventListener("click", () => {
      const nextLang = currentLang() === "en" ? "id" : "en";
      window.NIHONBYTE_I18N?.setLanguage(nextLang);
      // Paksa update icon + sidebar setelah state berubah
      setTimeout(() => {
        updateLanguageSwitchIcon();
        updateLanguageSwitchLabel();
        if (duoNavInitialized) renderDuoSidebarNav();
      }, 50);
    });
  }
  
  setupTranslateObserver();
  setAccessMode("locked");
  refreshLanguage();
});



