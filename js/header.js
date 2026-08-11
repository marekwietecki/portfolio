(function initHeader() {
  const header = document.querySelector("header");
  const spacex = document.querySelector(".spaceX");
  const menuToggleBtn = document.querySelector(".menuToggle");
  const headerLinks = document.querySelector(".headerLinks");

  if (!header) return;

  // 1. Dodawanie cienia do headera podczas scrollowania
  if (spacex) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          header.classList.add("headerShadow");
        } else {
          header.classList.remove("headerShadow"); // Naprawiono: usuwanie cienia na samej górze
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(spacex);
  }

  // 2. Dynamiczny padding dla .spaceX (odstęp od headera)
  function updatePadding() {
    if (!spacex) return;
    const headerHeight = header.offsetHeight;
    spacex.style.paddingTop = `${headerHeight * 1.18}px`;
  }

  // 3. Obsługa menu mobilnego
  window.toggleMenu = function () {
    if (headerLinks) {
      headerLinks.classList.toggle("show");
    }
  };

  // Event listenery dla przeliczania paddingu
  window.addEventListener("resize", updatePadding, { passive: true });

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener("click", () => {
      // Dajemy chwilę na przelokowanie menu, zanim przeliczymy wysokość
      setTimeout(updatePadding, 50);
    });
  }

  // Uruchomienie przeliczenia na start
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updatePadding);
  } else {
    updatePadding();
  }
})();
