document.addEventListener("DOMContentLoaded", () => {
    const settingsToggle = document.getElementById("settingsToggle");
    const settingsDropdown = document.getElementById("settingsDropdown");
  
    if (!settingsToggle || !settingsDropdown) return;
  
    // Funkcja otwierająca/zamykająca menu
    function toggleDropdown() {
      const isOpen = settingsDropdown.classList.contains("open");
      
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    }
  
    function openDropdown() {
      settingsDropdown.classList.add("open");
      settingsToggle.setAttribute("aria-expanded", "true");
    }
  
    function closeDropdown() {
      settingsDropdown.classList.remove("open");
      settingsToggle.setAttribute("aria-expanded", "false");
    }
  
    // 1. Kliknięcie w przycisk ikony
    settingsToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Zapobiega natychmiastowemu przechwyceniu przez document
      toggleDropdown();
    });
  
    // 2. Kliknięcie poza menu (zamknięcie)
    document.addEventListener("click", (e) => {
      if (
        settingsDropdown.classList.contains("open") &&
        !settingsDropdown.contains(e.target) &&
        !settingsToggle.contains(e.target)
      ) {
        closeDropdown();
      }
    });
  
    // 3. Naciśnięcie klawisza ESC (zamknięcie)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && settingsDropdown.classList.contains("open")) {
        closeDropdown();
        settingsToggle.focus(); // Przywraca ostrość na przycisk dla dostępności (a11y)
      }
    });
  });