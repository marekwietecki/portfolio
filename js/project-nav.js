document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".floatingNavWrapper a");
  const floatingNav = document.querySelector(".floatingNav");
  const mobileToggle = document.querySelector(".floatingNavToggle");
  const mobileLabel = document.querySelector(".floatingNavLabel");
  const footer = document.querySelector("footer, #footer");

  if (!sections.length || !navLinks.length) return;

  // 1. Ukrywanie nawigacji po wjechaniu w sekcję footer (IntersectionObserver)
  if (footer && floatingNav) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            floatingNav.classList.add("hidden");
            // Dodatkowo zamykamy rozwijane menu, jeśli było otwarte
            floatingNav.classList.remove("open");
            if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
          } else {
            floatingNav.classList.remove("hidden");
          }
        });
      },
      {
        root: null,
        threshold: 0, // Reaguje od razu, gdy pierwsza krawędź stopki pojawi się w oknie
      }
    );

    observer.observe(footer);
  }

  // 2. Śledzenie aktywnej sekcji przy scrollowaniu (offset 130px od góry)
  function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 130;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");

        if (mobileLabel) {
          mobileLabel.textContent = link.textContent;
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("resize", updateActiveLink);
  updateActiveLink();

  // 3. Smooth scroll po kliknięciu w link z offsetem + zamykanie menu
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 104,
          behavior: "smooth",
        });
      }

      if (floatingNav && floatingNav.classList.contains("open")) {
        floatingNav.classList.remove("open");
        if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // 4. Obsługa otwierania/zamykania rozwijanego menu
  if (mobileToggle && floatingNav) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = floatingNav.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!floatingNav.contains(e.target) && floatingNav.classList.contains("open")) {
        floatingNav.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});