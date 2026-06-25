const translations = {
  pl: {
    //   nav_home: "Główna",
    nav_offer: "Oferta",
    nav_about: "O mnie",

    cookies_text:
      "🍪 Używam cookies do analizy ruchu i ciągłego ulepszania działania strony.",
    cookies_primary_button: "Akceptuję",
    cookies_secondary_button: "Odrzucam",

    footer_link_main: "Strona Główna",
    footer_link_projects: "Projekty",
    footer_link_contact: "Kontakt",
    footer_link_cv: "CV",
    footer_copyright:
      "© Marek Wietecki 2026. Treści chronione prawem autorskim.",

    hero_mw: "assets/index/mwSmile.png",
    hero_hi: "Cześć!",
    hero_hi2: "Od ponad 3 lat działam jako",
    hero_title: "Projektuję prosto dla ludzi i skutecznie dla biznesu.",
    hero_subtitle:
      "Tworzę produkty cyfrowe, które łączą intuicyjne doświadczenia użytkowników z realnymi zyskami firm. Wierzę, że w świecie interfejsówto małe detale robią największą różnicę.",
    hero_button_primary: "Zobacz projekty",
    hero_button_secondary: "Poznaj moją ofertę",

    projects_title: "Moje Projekty",
    projects_monexo_title: "Aplika Mobilna Monexo",
    projects_monexo_subtitle: "Jak wypełniłem lukę na rynku internetowej wymiany walut tworząc prostą aplikację z transaparentnym podejściem?",
    projects_planetroad_website_title: "Strona Internetowa PlanetRoad",
    projects_planetroad_website_subtitle: "Jak przebudowałem stronę firmową, aby umożliwiła klientom poznanie pełnej oferty i doświadczenia PlanetRoad?",
    projects_zpsiegonanasze_title: "Landing Page Z Psiego Na Nasze",
    projects_zpsiegonanasze_subtitle: "Jak zbudowałem strategię rozwoju biznesu dzięki jakościowej stronie docelowej?",
    projects_habitbubbl_title: "Progresywna Aplikacja Habit Bubbl",
    projects_habitbubbl_subtitle: "Jak stworzyłem aplikację, która pomaga, ludziom pokochać produktywność?",
    projects_planetroad_visualidentity_title: "Identyfikacja Wizualna PlanetRoad",
    projects_planetroad_visualidentity_subtitle: "Jak wdrożyłem PlanetRoad w świat cyfrowy, tworząc spójną komunikację wizualną?",

    form_title: "Masz pomysł na projekt?",
    form_subtitle: "Zobaczmy, czy gramy do jednej bramki",
    form_name: "Imię / Nazwa:",
    form_email: "E-mail:",
    form_message: "Wiadomość:",
    form_button: "Wyślij wiadomość",

    // ABOUT
    about_hero_title: "",
  },
  en: {
    //   nav_home: "Home",
    nav_offer: "Offer",
    nav_about: "About me",

    cookies_text:
      "🍪 I use cookies to analyze traffic and to continuously improve the website.",
    cookies_primary_button: "Accept",
    cookies_secondary_button: "Reject",

    footer_link_main: "Main",
    footer_link_projects: "Projects",
    footer_link_contact: "Contact",
    footer_link_cv: "CV",
    footer_copyright: "© Marek Wietecki 2026. Copyrighted content.",

    hero_mw: "assets/index/mwSmileEng.png",
    hero_hi: "Hello!",
    hero_hi2: "From over 3 years i'm working as",
    hero_title: "I design simply for users and effectively for business.",
    hero_subtitle:
      "I create digital products that combine intuitive user experiences with real business profits. I believe that in the world of interfaces, it's the small details that make the biggest difference.",
    hero_button_primary: "See my projects",
    hero_button_secondary: "Check out my offer",

    projects_title: "My Projects",
    projects_monexo_title: "Monexo Mobile App",
    projects_monexo_subtitle: "How i fulfilled a gap in the online exchange market by creating a simple app with transparent approach?",
    projects_planetroad_website_title: "PlanetRoad Website",
    projects_planetroad_website_subtitle: "How i rebuild company's website, so it allows clients aknowledging full offer and experience of PlanetRoad?",
    projects_zpsiegonanasze_title: "Landing Page Z Psiego Na Nasze",
    projects_zpsiegonanasze_subtitle: "How i build business growth strategy thanks to a quality landing page?",
    projects_habitbubbl_title: "Habit Bubbl Progressive App",
    projects_habitbubbl_subtitle: "How i build an app, which helps people love productivity?",
    projects_planetroad_visualidentity_title: "PlanetRoad Visual Identity",
    projects_planetroad_visualidentity_subtitle: "How i introduced PlanetRoad to the digital world, creating a coherent visual identity?",


    form_title: "You have a project idea?",
    form_subtitle: "Let's see if we're playing to the same goal",
    form_name: "Name:",
    form_email: "E-mail:",
    form_message: "Message:",
    form_button: "Send a message",

    // ABOUT
    about_hero_title: "",
  },
};

function switchLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);

  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      const translationValue = translations[lang][key];

      // Jeśli element to tag <img>, podmień jego atrybut 'src'
      if (element.tagName.toLowerCase() === "img") {
        element.setAttribute("src", translationValue);
      } else {
        // W przeciwnym wypadku traktuj jak zwykły tekst
        element.innerText = translationValue;
      }
    }
  });

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "pl";
  switchLanguage(savedLang);
});
