(function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  const mainElement = document.querySelector("main");

  if (!progressBar || !mainElement) return;

  function updateProgress() {
    const mainRect = mainElement.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Wysokość całej sekcji main pomniejszona o wysokość okna
    const totalScrollableHeight = mainRect.height - windowHeight;

    if (totalScrollableHeight <= 0) {
      progressBar.style.width = "0%";
      return;
    }

    // Dystans przescrollowany od początku sekcji main
    const scrolled = -mainRect.top;

    // Obliczenie procentu i ograniczenie go do przedziału 0% - 100%
    const progress = Math.min(
      Math.max((scrolled / totalScrollableHeight) * 100, 0),
      100
    );

    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });

  updateProgress(); // Wywołanie na start
})();
