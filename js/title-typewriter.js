(function initTitleTypewriter() {
  // 1. Pobierz tytuł z data-project-title w <body>, a jeśli go nie ma - z <h1> lub domyślnie "Projekt"
  const customTitle = document.body.dataset.projectTitle;
  const rawTitle =
    customTitle ||
    document.querySelector("h1")?.textContent.trim() ||
    "Projekt";

  // 2. Skonstruuj pełny tytuł
  const fullTitle = `${rawTitle} | Marek Wietecki`;
  let i = 0;

  // 3. Efekt pisania na maszynie
  function typeTitle() {
    if (i <= fullTitle.length) {
      document.title = fullTitle.slice(0, i);
      i++;
      setTimeout(typeTitle, 80);
    }
  }

  // Uruchomienie skryptu
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", typeTitle);
  } else {
    typeTitle();
  }
})();
