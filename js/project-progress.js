(function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");

  if (!progressBar) return;

  function updateProgress() {
    // Realna pozycja scrolla dokumentu — działa niezależnie od tego,
    // czy to <main> czy jakiś inny kontener jest tym, co faktycznie
    // przewija się w danym layoucie (w przeciwieństwie do liczenia
    // z getBoundingClientRect() elementu <main>, co zawodzi jeśli
    // <main> ma własny overflow/scroll zamiast normalnego scrolla strony).
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const totalScrollableHeight = docHeight - windowHeight;

    if (totalScrollableHeight <= 0) {
      progressBar.style.width = "0%";
      return;
    }

    const progress = Math.min(
      Math.max((scrollTop / totalScrollableHeight) * 100, 0),
      100
    );

    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });

  updateProgress(); // Wywołanie na start
})();
