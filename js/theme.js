// theme.js — przełącznik motywu z efektami przejścia dla logo
(function () {
  const LOGO_LIGHT = "assets/brand/mw_logo_web.png";
  const LOGO_DARK = "assets/brand/mw_logo_web_white.png";

  const saved = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", initialTheme);

  // Podmiana logo z płynnym zanikaniem (animated = true tylko przy kliknięciu)
  function updateLogo(theme, animated = false) {
    const logoImg = document.querySelector(".logo");
    if (!logoImg) return;

    const newSrc = theme === "dark" ? LOGO_DARK : LOGO_LIGHT;
    if (logoImg.getAttribute("src") === newSrc) return;

    if (animated) {
      // 1. Ukrywamy logo (fade out)
      logoImg.classList.add("is-changing");

      // 2. Podmieniamy obrazek po zakończeniu ukrywania (200ms)
      setTimeout(() => {
        logoImg.src = newSrc;

        // 3. Po załadowaniu nowego pliku przywracamy widoczność (fade in)
        logoImg.onload = () => {
          logoImg.classList.remove("is-changing");
        };
      }, 200);
    } else {
      // Bez animacji (przy pierwszym załadowaniu strony)
      logoImg.src = newSrc;
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateLogo(theme, true); // true = aktywuje animację fade
  }

  document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    updateLogo(currentTheme, false);

    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  });
})();
