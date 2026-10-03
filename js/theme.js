// Alternância de tema claro/escuro, persistida em localStorage.
(function () {
  function getStoredTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* localStorage indisponível (modo privado, etc.) — ignora */
    }
  }

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    updateToggleIcon();
  }

  function currentEffectiveTheme() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function updateToggleIcon() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.textContent = currentEffectiveTheme() === "dark" ? "☀️" : "🌙";
  }

  // Aplica tema salvo o mais cedo possível.
  applyTheme(getStoredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    updateToggleIcon();
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = currentEffectiveTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      setStoredTheme(next);
    });
  });
})();
