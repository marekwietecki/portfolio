document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".sideNavWrapper a");
  const sideNav = document.querySelector(".sideNav");
  const mobileToggle = document.querySelector(".mobileNavToggle");
  const mobileLabel = document.querySelector(".mobileNavLabel");

  if (!sections.length || !navLinks.length) return;

  // 1. Śledzenie aktywnej sekcji przy scrollowaniu
  function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");

        // Zamiast innerHTML — używamy textContent do aktualizacji nagłówka na mobile
        if (mobileLabel) {
          mobileLabel.textContent = link.textContent;
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("resize", updateActiveLink);
  updateActiveLink();

  // 2. Smooth scroll po kliknięciu w link + zamykanie mobilnego menu
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }

      // Zamknij menu na mobile po kliknięciu
      if (sideNav && sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // 3. Obsługa otwierania/zamykania rozwijanego menu na mobile
  if (mobileToggle && sideNav) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = sideNav.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Zamykanie menu po kliknięciu poza nawigację
    document.addEventListener("click", (e) => {
      if (!sideNav.contains(e.target) && sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
