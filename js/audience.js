// audience.js — dopasowanie strony do ścieżki: dla firm / dla rekrutera
(function () {
  // Link z ?audience=recruiter (lub business/general) ustawia tryb od razu
  // przy pierwszym wejściu — przydatne np. wysyłając link do CV rekruterowi.
  const urlAudience = new URLSearchParams(window.location.search).get(
    "audience"
  );
  if (["business", "recruiter", "general"].includes(urlAudience)) {
    localStorage.setItem("audience", urlAudience);
  }

  const stored = localStorage.getItem("audience") || "unset";
  document.documentElement.setAttribute("data-audience", stored);

  function applyNavLinks(audience) {
    document.querySelectorAll("[data-recruiter-href]").forEach((link) => {
      if (audience === "recruiter") {
        link.setAttribute("href", link.dataset.recruiterHref);
        link.setAttribute("data-i18n", "nav_projects");
      } else {
        link.setAttribute("href", link.dataset.businessHref);
        link.setAttribute("data-i18n", "nav_offer");
      }
    });
  }

  // Treść hero na stronie głównej — działa tylko tam, gdzie te elementy istnieją
  function applyHeroContent(audience) {
    const kicker2 = document.getElementById("heroKicker2");
    const subtitle = document.getElementById("heroSubtitle");
    const btnPrimary = document.getElementById("heroBtnPrimary");
    const btnSecondary = document.getElementById("heroBtnSecondary");
    const chipLabel = document.getElementById("audienceChipLabel");
    if (!kicker2 || !subtitle || !btnPrimary || !btnSecondary) return;

    if (audience === "business") {
      kicker2.setAttribute("data-i18n", "hero_business_kicker");
      subtitle.setAttribute("data-i18n", "hero_business_subtitle");
      btnPrimary.setAttribute("data-i18n", "hero_business_button_primary");
      btnPrimary.setAttribute("href", "oferta.html");
      btnSecondary.setAttribute(
        "data-i18n",
        "hero_business_button_secondary"
      );
      btnSecondary.setAttribute("href", "oferta.html#form");
      if (chipLabel) chipLabel.setAttribute("data-i18n", "hero_fork_business_tag");
    } else if (audience === "recruiter") {
      kicker2.setAttribute("data-i18n", "hero_hi2");
      subtitle.setAttribute("data-i18n", "hero_recruiter_subtitle");
      btnPrimary.setAttribute("data-i18n", "hero_recruiter_button_primary");
      btnPrimary.setAttribute("href", "#projects");
      btnSecondary.setAttribute(
        "data-i18n",
        "hero_recruiter_button_secondary"
      );
      btnSecondary.setAttribute("href", "o-mnie.html");
      if (chipLabel) chipLabel.setAttribute("data-i18n", "hero_fork_recruiter_tag");
    } else {
      kicker2.setAttribute("data-i18n", "hero_hi2");
      subtitle.setAttribute("data-i18n", "hero_subtitle");
      btnPrimary.setAttribute("data-i18n", "hero_button_primary");
      btnPrimary.setAttribute("href", "#projects");
      btnSecondary.setAttribute("data-i18n", "hero_button_secondary");
      btnSecondary.setAttribute("href", "oferta.html");
    }
  }

  function refreshTranslations() {
    if (typeof switchLanguage === "function") {
      switchLanguage(localStorage.getItem("selectedLanguage") || "pl");
    }
  }

  function updateAudienceButtons(audience) {
    document.querySelectorAll(".audience-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.audience === audience);
    });
  }

  function setAudience(audience) {
    localStorage.setItem("audience", audience);
    document.documentElement.setAttribute("data-audience", audience);
    applyNavLinks(audience);
    applyHeroContent(audience);
    refreshTranslations();
    updateAudienceButtons(audience);
  }
  window.setAudience = setAudience;

  document.addEventListener("DOMContentLoaded", () => {
    applyNavLinks(stored);
    applyHeroContent(stored);
    refreshTranslations();
    updateAudienceButtons(stored);
  });
})();
