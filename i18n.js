(function initI18N() {
  const STORAGE_KEY = "nihonbyte_language";
  const manualMeaningEn = {
    "Bermain kartu": "Play cards",
    "Mendengar musik": "Listen to music",
    "Pergi ke bioskop": "Go to the cinema",
    "Menggambar": "Draw",
    "Bernyanyi": "Sing",
    "Menonton film": "Watch a movie",
    "Makan": "Eat",
    "Minum": "Drink"
  };

  const ui = {
    id: {
      "auth-gate-email-toggle": "Masuk / Daftar dengan Email",
      "continue-guest-btn": "Masuk sebagai tamu (akses terbatas)",
      "login-email-btn": "Masuk / Daftar Email",
      "guest-sidebar-btn": "Lanjut sebagai tamu",
      "dashboard-btn": "Dasbor",
      "account-btn": "Akun",
      "logout-btn": "Keluar",
      "email-auth-submit": "Masuk dengan Email",
      "email-auth-switch-mode": "Belum punya akun? Daftar",
      "email-auth-reset": "Lupa password",
      "resend-verification-btn": "Kirim ulang verifikasi email"
    },
    en: {
      "auth-gate-email-toggle": "Sign in / Register with Email",
      "continue-guest-btn": "Continue as guest (limited access)",
      "login-email-btn": "Sign in / Register with Email",
      "guest-sidebar-btn": "Continue as guest",
      "dashboard-btn": "Dashboard",
      "account-btn": "Account",
      "logout-btn": "Sign out",
      "email-auth-submit": "Sign in with Email",
      "email-auth-switch-mode": "Don\'t have an account? Register",
      "email-auth-reset": "Forgot password",
      "resend-verification-btn": "Resend email verification"
    }
  };

  function collectMeanings() {
    const set = new Set();
    if (typeof vocabularyData !== "undefined" && Array.isArray(vocabularyData)) {
      vocabularyData.forEach((w) => w?.meaning && set.add(w.meaning));
    }
    const walk = (val) => {
      if (!val) return;
      if (Array.isArray(val)) return val.forEach(walk);
      if (typeof val === "object") {
        if (typeof val.meaning === "string") set.add(val.meaning);
        Object.values(val).forEach(walk);
      }
    };
    if (typeof window.verbFormsData !== "undefined" && Array.isArray(window.verbFormsData)) walk(window.verbFormsData);
    return Array.from(set);
  }

  const state = {
    current: localStorage.getItem(STORAGE_KEY) || "id",
    meanings: collectMeanings()
  };

  function tMeaning(text) {
    if (!text || state.current === "id") return text;
    const merged = { ...(window.NIHONBYTE_MEANING_EN || {}), ...manualMeaningEn };
    return merged[text] || text;
  }

  function applyStaticText() {
    const dict = state.current === "en" ? ui.en : ui.id;
    Object.entries(dict).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const icon = el.querySelector("svg.inline-menu-icon");
      if (icon) {
        const iconMarkup = icon.outerHTML;
        el.innerHTML = `${iconMarkup} ${value}`;
      } else {
        el.textContent = value;
      }
    });
  }

  function setLanguage(lang) {
    state.current = lang === "en" ? "en" : "id";
    localStorage.setItem(STORAGE_KEY, state.current);
    document.documentElement.lang = state.current === "en" ? "en" : "id";
    applyStaticText();
    if (typeof window.refreshLanguage === "function") window.refreshLanguage();
  }

  window.NIHONBYTE_I18N = {
    state,
    setLanguage,
    applyStaticText,
    tMeaning
  };
})();
