(function initHeader() {
    const header = document.querySelector("header");
    const spacex = document.querySelector(".spaceX");
    const headerLinks = document.querySelector(".headerLinks");
  
    if (!header) return;
  
    const HEADER_OFFSET_MULTIPLIER = 1.18;
  
    // Cień po wyjechaniu ze szczytu strony
    if (spacex) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          header.classList.toggle(
            "headerShadow",
            !entry.isIntersecting
          );
        },
        {
          threshold: 0,
        }
      );
  
      observer.observe(spacex);
    }
  
    // Dynamiczny odstęp pod fixed header
    function updatePadding() {
      if (!spacex) return;
  
      const headerHeight = header.offsetHeight;
  
      spacex.style.paddingTop =
        `${headerHeight * HEADER_OFFSET_MULTIPLIER}px`;
    }
  
    // Mobile menu
    window.toggleMenu = function () {
      if (!headerLinks) return;
  
      headerLinks.classList.toggle("show");
  
      // jeśli rozwinięcie menu zmienia wysokość headera
      requestAnimationFrame(updatePadding);
    };
  
    window.addEventListener("resize", updatePadding, {
      passive: true,
    });
  
    updatePadding();
  })();