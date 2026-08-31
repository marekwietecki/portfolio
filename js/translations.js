const translations = {
  pl: {
    // meta titles
    meta_main: "Marek Wietecki | Strona Główna",
    meta_about: "Marek Wietecki | O mnie",
    meta_offer: "Marek Wietecki | Oferta",
    meta_privacy: "Marek Wietecki | Polityka Prywatności",

    // nav
    nav_offer: "Oferta",
    nav_about: "O mnie",
    nav_projects: "Projekty",

    // cookies
    cookies_text:
      "🍪 Używam cookies do analizy ruchu i ciągłego ulepszania działania strony.",
    cookies_primary_button: "Akceptuję",
    cookies_secondary_button: "Odrzucam",

    // footer
    footer_link_main: "Strona Główna",
    footer_link_projects: "Projekty",
    footer_link_contact: "Kontakt",
    footer_link_cv: "CV",
    footer_link_privacy: "Polityka Prywatności",
    cv_download_button: "Pobierz CV",
    cv_update_note:
      "CV jest częścią portfolio i aktualizuję je na bieżąco — pobrany plik zawsze odzwierciedla najnowszą wersję.",
    cv_print_hint:
      "Wskazówka: w oknie drukowania odznacz opcję „Nagłówki i stopki”, żeby uzyskać czystszy eksport.",

    cv_role: "UX & Product Designer",

    cv_about_h2: "O mnie",
    cv_about_p1:
      "Jestem <strong>UX & Product Designerem</strong> oraz inżynierem informatyki z ukończonymi specjalizacjami User Experience i zarządzanie projektami oraz Projektowanie Aplikacji Mobilnych. Wiedzę dotyczącą <strong>projektowania produktów cyfrowych</strong> łączę ze znajomością podstaw <strong>programowania</strong> oraz <strong>marketingu internetowego</strong>, co pozwala mi całościowo rozumieć produkty cyfrowe.",
    cv_about_p2:
      "Posiadam ponad 15-letnie doświadczenie w <strong>pracy zespołowej</strong> — od projektów inżynierskich po różnorodne inicjatywy grupowe. Nauczyło mnie ono dbania o relacje i zaufanie w zespołach, klarownej komunikacji oraz odpowiedzialności za wspólny wynik.",

    cv_details_h2: "Szczegóły",
    cv_details_portfolio_label: "PORTFOLIO",
    cv_details_mail_label: "MAIL",
    cv_details_phone_label: "TELEFON",
    cv_details_address_label: "ADRES",
    cv_details_address_value: "Łomianki, Polska",

    cv_skills_h2: "Umiejętności",
    cv_skill_figma: "Figma",
    cv_skill_customer_journey: "Customer Journey",
    cv_skill_user_research: "User Research",
    cv_skill_product_strategy: "Strategia Produktowa",
    cv_skill_agile: "Agile",
    cv_skill_usability_testing: "Testy Użyteczności",
    cv_skill_design_systems: "Systemy Projektowe",
    cv_skill_claude_code: "Claude Code",
    cv_skill_html_css_js: "HTML & CSS/JS",
    cv_skill_react_native: "React Native",
    cv_skill_ga4: "GA4",
    cv_skill_graphic_design: "Projektowanie graficzne",
    cv_skill_git: "Git",
    cv_skill_mobile_design: "Mobile Design (iOS i Android)",
    cv_skill_motion_design: "Motion Design",

    cv_languages_h2: "Języki",
    cv_lang_polish_name: "Polski",
    cv_lang_polish_level: "– język ojczysty",
    cv_lang_english_name: "Angielski",
    cv_lang_english_level: "– C1",
    cv_lang_spanish_name: "Hiszpański",
    cv_lang_spanish_level: "– A2/B1",
    cv_lang_german_name: "Niemiecki",
    cv_lang_german_level: "– A1",

    cv_experience_h2: "Doświadczenie",

    cv_exp1_title: "UX Designer (Freelance)",
    cv_exp1_item1:
      "Kompleksowe projektowanie i wdrażanie stron internetowych oraz interfejsów cyfrowych dla klientów indywidualnych.",
    cv_exp1_item2:
      "Zbieranie wymagań biznesowych i prowadzenie warsztatów/konsultacji z klientami w celu zdefiniowania celów projektu oraz potrzeb użytkowników końcowych.",
    cv_exp1_item3:
      "Tworzenie makiet (wireframes) oraz wysokiej wierności prototypów (Hi-Fi) w programie Figma, dbanie o spójność wizualną (UI) oraz intuicyjną architekturę informacji.",
    cv_exp1_item4:
      "Współtworzenie strategii rozwoju biznesu klientów poprzez przekładanie ich celów rynkowych na efektywne rozwiązania produktowe, architekturę informacji oraz mierzalne ścieżki konwersji.",
    cv_exp1_item5:
      "Zarządzanie harmonogramem projektów, budżetem oraz komunikacją z klientem na każdym etapie cyklu życia produktu.",
    cv_exp1_date: "Czerwiec 2025 – Obecnie",
    cv_exp1_location: "Warszawa",

    cv_exp2_title: "UX & Web Designer, PlanetRoad",
    cv_exp2_item1:
      "Analiza konkurencji, określanie grup docelowych, analiza potrzeb biznesowych i celów klienta.",
    cv_exp2_item2:
      "Definiowanie problemów użytkownika, projektowanie ścieżek użytkownika, mapowanie doświadczeń użytkownika i definiowanie kluczowych punktów styku użytkownika z produktem.",
    cv_exp2_item3:
      "Projektowanie responsywnego interfejsu firmowej strony internetowej wg. myśli Mobile First, wdrożenie zaprojektowanej strony internetowej.",
    cv_exp2_item4:
      "Dostosowanie strony do zasad dostępności WCAG, prowadzenie testów użyteczności moderowanych i niemoderowanych, optymalizacja strony pod kątem SEO.",
    cv_exp2_item5:
      "Iteracyjne usprawnianie projektu na podstawie testów użyteczności i wymagań klienta.",
    cv_exp2_item6:
      "Tworzenie identyfikacji wizualnej marki, projektowanie grafik na potrzeby firmy, założenie i konfiguracja firmowych kanałów Social Media.",
    cv_exp2_date: "Maj 2024 – Obecnie",
    cv_exp2_location: "Warszawa",

    cv_exp3_title:
      "Prowadzenie indywidualnych zajęć edukacyjnych (Matematyka i j. Angielski)",
    cv_exp3_item1:
      "Rozwijanie umiejętności przystępnego tłumaczenia skomplikowanych i abstrakcyjnych zagadnień.",
    cv_exp3_item2:
      "Diagnozowanie indywidualnych barier w nauce (analiza potrzeb) i elastyczne dostosowywanie metod do odbiorcy.",
    cv_exp3_item3:
      "Budowanie cierpliwości, empatii i umiejętności aktywnego słuchania.",
    cv_exp3_date: "Listopad 2023 – Obecnie",
    cv_exp3_location: "Łomianki",

    cv_projects_h2: "Projekty",
    cv_proj1_title: "Monexo — Aplikacja Mobilna",
    cv_proj1_desc:
      "Projekt aplikacji mobilnej do wymiany walut — odpowiedź na realne problemy użytkowników istniejących rozwiązań FinTech. Pełny proces od researchu po testy użyteczności.",
    cv_proj1_tag: "Fintech · Mobile App · Figma",
    cv_proj2_title: "HabitBubbl — Progresywna Aplikacja Mobilna",
    cv_proj2_desc:
      "Kompleksowe narzędzie do budowania nawyków i zarządzania celami — projekt inżynierski łączący UX/UI, architekturę informacji i wdrożenie PWA.",
    cv_proj2_tag: "PWA · Productivity · Figma · Storybook",
    cv_proj3_title: "Customer Journey Map — Betfan",
    cv_proj3_desc:
      "Zmapowanie ścieżki użytkownika platformy bukmacherskiej od reklamy do zakładu oraz zaprojektowanie mechanizmów motywacyjnych budujących nawyk powrotu.",
    cv_proj3_tag: "Customer Journey · Gamification",
    cv_proj4_title: "Audyt WKDZIK.pl",
    cv_proj4_desc:
      "Samodzielny audyt UX i wydajności sklepu e-commerce w celu identyfikacji szczegółów ograniczających realną sprzedaż.",
    cv_proj4_tag: "UX Audit · E-commerce",

    cv_education_h2: "Wykształcenie",

    cv_edu1_title: "Inżynier Informatyki, Uniwersytet Vizja",
    cv_edu1_item1:
      "Specjalizacja User Experience & Zarządzanie Projektami.",
    cv_edu1_item2: "Specjalizacja Projektowanie Aplikacji Mobilnych.",
    cv_edu1_date: "Październik 2022 – Lipiec 2026",
    cv_edu1_location: "Warszawa",

    cv_edu2_title: "Wykształcenie Średnie, LO im. Króla Jana III Sobieskiego",
    cv_edu2_item1: "Rozszerzona Matematyka i j. Angielski.",
    cv_edu2_date: "Wrzesień 2019 – Maj 2022",
    cv_edu2_location: "Warszawa",

    cv_certs_h2: "Certyfikaty",

    cv_cert1_desc:
      "Nauka wykorzystywania ChatGPT, Midjourney, Hotjar i Formless w celu usprawnienia procesu projektowego.",
    cv_cert1_date: "Grudzień 2025",

    cv_cert2_desc:
      "Pojęcie procesu jako produktu, który ewoluuje i jest dostosowany do potrzeb konkretnego typu projektu lub klienta.",
    cv_cert2_date: "Listopad 2025",

    cv_cert3_desc:
      "Certyfikat poświadczający umiejętności języka angielskiego na poziomie C1.",
    cv_cert3_date: "Lipiec 2025",

    cv_cert4_desc:
      "Rola prototypu w cyklu życia produktu. Nauka budowania interaktywnych prototypów w Figmie i ProtoPie.",
    cv_cert4_date: "Październik 2024",

    cv_cert5_desc:
      "Nauka tworzenia Design Systemów w praktyce, wykorzystując narzędzia usprawniające proces tworzenia Design Systemu.",
    cv_cert5_date: "Wrzesień 2024",

    cv_cert6_title: "Szkolenie: Prowadź Warsztaty metodą Design Thinking",
    cv_cert6_desc:
      "Nauka wykorzystywania metody Design Thinking w prowadzeniu efektywnych warsztatów oraz angażowania interesariuszy.",
    cv_cert6_date: "Lipiec 2024",

    cv_cert7_desc:
      "Kompleksowa nauka poprzez praktykę blisko 30 technik i narzędzi projektowych, będącymi fundamentem pracy UX Designera.",
    cv_cert7_date: "Styczeń 2024 – Kwiecień 2024",

    cv_cert8_desc: "Nauka narzędzia Webflow do projektowania stron no-code.",
    cv_cert8_date: "Styczeń 2024",

    cv_cert9_desc: "Nauka projektowania interfejsów mobilnych w Figmie.",
    cv_cert9_date: "Grudzień 2023",

    cv_cert10_title: "Umiejętności Jutra – Marketing Internetowy, Google",
    cv_cert10_desc:
      "Kompleksowa nauka praktycznych umiejętności z różnych dziedzin Marketingu Internetowego, w tym User Experience.",
    cv_cert10_date: "Czerwiec 2023",

    cv_interests_h2: "Zainteresowania",
    cv_interest1: "Piłka Nożna",
    cv_interest2: "Czytanie Książek",
    cv_interest3: "Nauka Języków",

    footer_copyright:
      "© Marek Wietecki 2026. Treści chronione prawem autorskim.",

    // hero
    hero_hi: "Cześć!",
    hero_hi2: "Od ponad 3 lat działam jako",
    hero_title: "Projektuję prosto dla ludzi i skutecznie dla biznesu.",
    hero_subtitle:
      "Tworzę produkty cyfrowe, które łączą intuicyjne doświadczenia użytkowników z realnymi zyskami firm. Wierzę, że w świecie interfejsów to małe detale robią największą różnicę.",
    hero_button_primary: "Zobacz projekty",
    hero_button_secondary: "Poznaj moją ofertę",

    // hero — rozdroże dla firm / rekruterów
    hero_fork_kicker: "Cześć! Miło Cię widzieć.",
    hero_fork_title: "Co Cię tu sprowadza?",
    hero_fork_subtitle: "Dobierz ścieżkę, a dopasuję to, co widzisz.",
    hero_fork_business_tag: "Dla firmy",
    hero_fork_business_title: "Szukam designera",
    hero_fork_business_desc:
      "Zobacz ofertę, proces i jak mogę pomóc Twojemu biznesowi.",
    hero_fork_business_cta: "Zobacz jak mogę pomóc",
    hero_fork_recruiter_tag: "Dla rekrutera",
    hero_fork_recruiter_title: "Oglądam portfolio",
    hero_fork_recruiter_desc:
      "Zobacz moje projekty, doświadczenie i poznaj mnie lepiej.",
    hero_fork_recruiter_cta: "Zobacz moje projekty",
    hero_fork_skip_prefix: "Wolisz rozejrzeć się sam?",
    hero_fork_skip_link: "Zobacz stronę bez podziału",
    audience_chip_prefix: "Widzisz wersję:",
    hero_fork_switch_short: "Zmień",

    // hero — wersja dla firm
    hero_business_kicker: "Szukasz designera?",
    hero_business_title: "Zaprojektuję produkt, który sprzeda się sam.",
    hero_business_subtitle:
      "Od researchu po finalny UI — pomagam firmom budować produkty cyfrowe, które użytkownicy rozumieją od pierwszego kliknięcia.",
    hero_business_button_primary: "Zobacz ofertę",
    hero_business_button_secondary: "Umów rozmowę",

    // hero — wersja dla rekrutera
    hero_recruiter_subtitle:
      "Zobacz moje projekty, doświadczenie i poznaj mnie lepiej.",
    hero_recruiter_button_primary: "Zobacz projekty",
    hero_recruiter_button_secondary: "Poznaj mnie",

    // ustawienia — przełącznik ścieżki
    settings_audience_business: "Dla firm",
    settings_audience_recruiter: "Dla rekrutera",

    projects_title: "Moje Projekty",
    projects_monexo_title: "Monexo aplikacja mobilna",
    projects_monexo_subtitle:
      "Jak wypełniłem lukę na rynku internetowej wymiany walut tworząc prostą aplikację z transaparentnym podejściem?",
    projects_planetroad_website_title: "Strona Internetowa PlanetRoad",
    projects_planetroad_website_subtitle:
      "Jak przebudowałem stronę firmową, aby umożliwiła klientom poznanie pełnej oferty i doświadczenia PlanetRoad?",
    projects_zpsiegonanasze_title: "Landing Page Z Psiego Na Nasze",
    projects_zpsiegonanasze_subtitle:
      "Jak zbudowałem strategię rozwoju biznesu dzięki jakościowej stronie docelowej?",
    projects_habitbubbl_title: "Progresywna Aplikacja Habit Bubbl",
    projects_habitbubbl_subtitle:
      "Jak stworzyłem aplikację, która pomaga, ludziom pokochać produktywność?",
    projects_planetroad_visualidentity_title:
      "Identyfikacja Wizualna PlanetRoad",
    projects_planetroad_visualidentity_subtitle:
      "Jak wdrożyłem PlanetRoad w świat cyfrowy, tworząc spójną komunikację wizualną?",
    projects_betfan_badge: "Betfan",
    projects_betfan_title: "Customer Journey Map & Gamifikacja Retencji",
    projects_betfan_subtitle:
      "Jak przekształcić okazjonalnego gracza w zaangażowanego fana?",
    projects_betfan_desc:
      "BETFAN to platforma bukmacherska stawiająca na emocje, progres i szybkie zawieranie zakładów w celu budowania wysokiej retencji graczy. Projekt polegał na zmapowaniu customer journey od reklamy do kuponu oraz zaprojektowaniu mechanizmów motywacyjnych budujących nawyk powrotu do aplikacji.",
    projects_betfan_role_label: "Rola:",
    projects_betfan_role_val: "Product Designer",
    projects_betfan_scope_label: "Zakres odpowiedzialności:",
    projects_betfan_scope_val:
      "Customer Journey Map, System Lojalizacji, Wyznaczenie Mierników Sukcesu (KPI)",
    projects_betfan_duration_label: "Czas trwania:",
    projects_betfan_duration_val: "2 tygodnie",
    projects_betfan_methodology_label: "Metodyka:",
    projects_betfan_methodology_val:
      "Design Thinking — mapowanie Customer Journey, identyfikacja punktów drop-offu oraz projektowanie mechanizmów retencji przy użyciu framework'a Octalisys i motywacji w oparciu o pętle nawyków (Habit Loop) i wskaźniki biznesowe (KPI).",
    projects_betfan_img_alt:
      "Okładka projektu Customer Journey & Gamifies Loyalty dla Betfan",

    projects_betfan_context_title: "Kontekst",
    projects_betfan_context_desc:
      "BETFAN to dynamiczna platforma bukmacherska, w której kluczowym wyzwaniem biznesowym jest niska retencja po rejestracji oraz zjawisko „jednorazowego gracza”, wchodzącego do aplikacji wyłącznie przy okazji dużych wydarzeń sportowych.",

    projects_betfan_problem_title: "Problem",
    projects_betfan_problem_desc:
      "Nowi gracze często porzucają proces onboardingowy ze względu na tarcie na ścieżce od reklamy do zawarcia pierwszego zakładu, a brak stałych bodźców motywacyjnych i wyrazistego poczucia progresu sprawia, że nie wracają regularnie do produktu.",

    projects_betfan_goals_title: "Cele",
    projects_betfan_goals_item1:
      "🎯 <b>Optymalizacja Customer Journey</b> — zmapowanie ścieżki użytkownika, wyeliminowanie barier i skrócenie czasu do zawarcia pierwszego zakładu.",
    projects_betfan_goals_item2:
      "🎯 <b>Budowa nawyku i retencji</b> — zaprojektowanie pętli zaangażowania (Daily Quests, Streaks) budujących poczucie progresu i zachęcających do stałego powrotu.",

    projects_betfan_constraints_title: "Ograniczenia",
    projects_betfan_constraints_item1:
      "⚠️ <b>Wysoki spadek motywacji przy porażce</b> — konieczność łagodzenia negatywnych emocji po przegranym kuponie.",
    projects_betfan_constraints_item2:
      "⚠️ <b>Rentowność biznesowa nagród</b> — zachowanie umiaru w bonusach, aby uniknąć ujemnego ROI i sztucznego podtrzymywania aktywności.",
    projects_betfan_constraints_item3:
      "⚠️ <b>Logika doświadczenia ponad UI</b> — skupienie na psychologii użytkownika, flow i wyzwalaczach behawioralnych zamiast na samej warstwie wizualnej ekranów.",

    projects_betfan_persona_title: "Persona dla Customer Journey",
    projects_betfan_persona_intro:
      "Celem utworzenia persony jest lepsze zrozumienie problemu <strong>niski retencji graczy po rejestracji</strong> oraz zjawiska tzw. „jednorazowego gracza”, który otwiera aplikację wyłącznie podczas kluczowych wydarzeń sportowych (np. Liga Mistrzów). Dzięki utworzonej postaci łatwiej dostrzec potencjalne przeszkody lub tarcie, które może napotkać na swojej drodze użytkownik serwisu.",
    projects_betfan_persona_card_title:
      "👱🏼‍♂️ Persona: Michał (28 lat) — „Weekendowy Wojownik”",
    projects_betfan_persona_who:
      "<strong>Kim jest:</strong> Pracuje w biurze, piłka nożna to jego pasja i odskocznia. Ogląda mecze od Ekstraklasy po Ligę Mistrzów.",
    projects_betfan_persona_behavior:
      "<strong>Zachowanie:</strong> Multi-screening (TV + telefon na żywo), szukanie Social Proof na grupach FB.",
    projects_betfan_persona_motivation:
      "<strong>Motywacje:</strong> Rywalizacja z kolegami z biura, uznanie znajomości sportu, szukanie emocji i zabawy.",
    projects_betfan_persona_needs:
      "<strong>Potrzeby:</strong> Szybkość i prostota stawiania kuponu (np. w trakcie przerwy reklamowej).",

    projects_betfan_cjm_title: "2. Customer Journey Map (Interaktywna Ścieżka)",
    projects_betfan_cjm_desc:
      "Przeanalizuj poszczególne kroki Michała — przełączaj kroki strzałkami lub kliknij w wybrany etap, aby zobaczyć ekran telefonu, poziom emocji oraz zidentyfikowane ryzyka i szanse UX.",
    projects_betfan_cjm_prev_aria: "Poprzedni krok",
    projects_betfan_cjm_next_aria: "Następny krok",
    projects_betfan_cjm_action_default: "1. Pierwszy kontakt z aplikacją",
    projects_betfan_cjm_phase_default: "Faza: Awareness",
    projects_betfan_cjm_emotion_label: "Emocje użytkownika:",
    projects_betfan_cjm_emotion_default: "😐 Neutralne / Ciekawość",
    projects_betfan_cjm_risk_title: "Zagrożenie / Psyche Flow",
    projects_betfan_cjm_risk_default: "Opis zagrożenia...",
    projects_betfan_cjm_opportunity_title: "Szansa / Rozwiązanie",
    projects_betfan_cjm_opportunity_default: "Opis szansy...",

    projects_betfan_gamification_title:
      "System Gamifikacji: Daily Quest & Streaks",
    projects_betfan_gamification_desc:
      "Aby utrzymać Michała w aplikacji również w „nudny wtorek”, zaprojektowałem mechanizm budowania nawyku oparty na micro-taskach i nagrodach lojalnościowych.",
    projects_betfan_pillar1_title: "🏛️ Filar 1: Daily Quest & Streak",
    projects_betfan_pillar1_desc:
      "Codzienne proste wyzwanie (np. „Postaw AKO za 10 zł”). 5 dni z rzędu odblokowuje Fan Box ze zniżkami/freebetami.",
    projects_betfan_pillar2_title: "🏛️ Filar 2: Tagi Statusu & Achievementy",
    projects_betfan_pillar2_desc:
      "Użytkownik odblokowuje tytuły (np. „Snajper”, „Weteran Ekstraklasy”), którymi może chwalić się w społeczności.",
    projects_betfan_pillar3_title: "🏛️ Filar 3: Soft-landing po Porażce",
    projects_betfan_pillar3_desc:
      "Przegrany kupon i tak daje +5% do paska progresu odznaki. Zmniejsza to poczucie porażki.",

    projects_betfan_implementation_title:
      "Wdrożenie, KPI i Współpraca Cross-functional",
    projects_betfan_implementation_desc:
      "Projekt wymagał ścisłej współpracy z wieloma zespołami oraz zdefiniowania jasnych wskaźników sukcesu:",
    projects_betfan_implementation_item1:
      "<strong>CRM & Loyalty:</strong> Konfiguracja PUSH z powiadomieniami o wygasającym streaku.",
    projects_betfan_implementation_item2:
      "<strong>Mierniki Sukcesu (KPI):</strong> Monitorowanie Retention Rate, Average Bets per User oraz Bonus Burn Rate.",
    projects_betfan_implementation_item3:
      "<strong>Red Flagi:</strong> Sygnał ostrzegawczy przy ujemnym ROI bonusów lub sztucznym podtrzymywaniu streaków bez realnego obrotu.",

    projects_betfan_recruitment_note:
      "Projekt zrealizowany jako zadanie w procesie rekrutacyjnym do Betfan.",

    projects_betfan_impact_title: "Oczekiwany Efekt",
    projects_betfan_impact_desc:
      "Projekt powstał bez dostępu do danych produkcyjnych — poniżej kierunek, w jaki miały działać zaproponowane mechanizmy, powiązany z metrykami zdefiniowanymi w KPI:",
    projects_betfan_impact_item1:
      "<strong>Regularność powrotów:</strong> system streaków i powiadomienia PUSH miały podnosić Retention Rate poprzez budowanie nawyku codziennego zaglądania do aplikacji.",
    projects_betfan_impact_item2:
      "<strong>Zdrowe zaangażowanie:</strong> tempo nagród oparte na frameworku Octalysis miało zwiększać Average Bets per User bez zachęcania do ryzykownego, impulsywnego obstawiania.",
    projects_betfan_impact_item3:
      "<strong>Kontrola kosztu bonusów:</strong> red-flagi przy podejrzanych wzorcach miały ograniczać Bonus Burn Rate i chronić marżę przed nadużyciami.",
    projects_betfan_impact_quote:
      "Bez wdrożenia i testów A/B to hipotezy oparte na mechanizmach motywacyjnych, nie zmierzone wyniki — realną skuteczność dałoby się ocenić dopiero po miesiącach działania w produkcie.",

    projects_betfan_after_title: "Po Projekcie",
    projects_betfan_after_p1:
      "Ten projekt zrealizowałem jako zadanie w procesie rekrutacyjnym do Betfan. Sam proces — mapowanie customer journey pod kątem emocji i ryzyka w produkcie bukmacherskim — był jednym z bardziej wymagających etycznie projektów, jakie robiłem: trzeba było równoważyć retencję biznesową z odpowiedzialnym podejściem do mechanizmów nagradzania.",
    projects_betfan_after_p2:
      "Kierunek, w jaki poszły później realne działania Betfan w obszarze lojalizacji, pokrył się z logiką zaproponowanych przeze mnie mechanizmów — co traktuję jako potwierdzenie, że przyjęte założenia miały sens.",

    projects_betfan_navloop_text: "Zobacz kolejny projekt:",
    projects_betfan_navloop_link: "Progresywna Aplikacja HabitBubbl",

    projects_betfan_floatnav_about: "O Projekcie",
    projects_betfan_floatnav_persona: "Persona",
    projects_betfan_floatnav_cjm: "Customer Journey",
    projects_betfan_floatnav_gamification: "Gamifikacja",
    projects_betfan_floatnav_implementation: "Wdrożenie & KPI",
    projects_betfan_floatnav_impact: "Efekt",
    projects_betfan_floatnav_after: "Po Projekcie",
    projects_betfan_floatnav_toggle: "Spis treści",
    projects_betfan_cjm_step1_stepNum: "Krok 01",
    projects_betfan_cjm_step1_title: "Reklama / Baner",
    projects_betfan_cjm_step1_action: "1. Zobaczenie reklamy z promocją",
    projects_betfan_cjm_step1_phase: "Awareness (Świadomość)",
    projects_betfan_cjm_step1_emotion: "🤔 Ciekawość / Sceptycyzm",
    projects_betfan_cjm_step1_risk:
      "Szum informacyjny, brak wyróżnienia oferty na tle konkurencji i generyczny przekaz reklamowy.",
    projects_betfan_cjm_step1_opportunity:
      "Mocny Social Proof, reklamy nawiązujące do emocji meczowych w czasie rzeczywistym oraz jasny bonus powitalny.",

    projects_betfan_cjm_step2_stepNum: "Krok 02",
    projects_betfan_cjm_step2_title: "Pierwszy kontakt",
    projects_betfan_cjm_step2_action: "2. Wejście na stronę / do aplikacji",
    projects_betfan_cjm_step2_phase: "Awareness (Świadomość)",
    projects_betfan_cjm_step2_emotion: "🧐 Oczekiwanie / Pobudzenie",
    projects_betfan_cjm_step2_risk:
      "Przeładowanie ekranu startowego komunikatami powodujące dezorientację po pierwszym kliknięciu.",
    projects_betfan_cjm_step2_opportunity:
      "Czysty ekran lądowania (Landing Page) z natychmiastową prezentacją propozycji wartości i przyciskiem Call To Action.",

    projects_betfan_cjm_step3_stepNum: "Krok 03",
    projects_betfan_cjm_step3_title: "Wybór rejestracji",
    projects_betfan_cjm_step3_action: "3. Wybór metody zakładania konta",
    projects_betfan_cjm_step3_phase: "Interest (Zainteresowanie)",
    projects_betfan_cjm_step3_emotion: "🔍 Chęć szybkiego przejścia procesów",
    projects_betfan_cjm_step3_risk:
      "Zbytnie skomplikowanie wyboru (np. brak opcji Konto Tymczasowe / Szybka rejestracja).",
    projects_betfan_cjm_step3_opportunity:
      "Wyraźne wyróżnienie rejestracji bez dowodu osobistego oraz wsparcie logowania przez bankowość lub Social Media.",

    projects_betfan_cjm_step4_stepNum: "Krok 04",
    projects_betfan_cjm_step4_title: "Zakładanie konta",
    projects_betfan_cjm_step4_action:
      "4. Wypełnianie formularza rejestracyjnego",
    projects_betfan_cjm_step4_phase: "Interest (Zainteresowanie)",
    projects_betfan_cjm_step4_emotion:
      "⌛ Zniecierpliwienie / Obawa o prywatność",
    projects_betfan_cjm_step4_risk:
      "Długie formularze i konieczność ręcznego wpisywania danych powodują duży spadek motywacji (drop-off).",
    projects_betfan_cjm_step4_opportunity:
      "Wdrożenie One-Click onboarding, automatyczne uzupełnianie danych oraz przyznanie statusu 'Debiutant'.",

    projects_betfan_cjm_step5_stepNum: "Krok 05",
    projects_betfan_cjm_step5_title: "Doładowanie konta",
    projects_betfan_cjm_step5_action: "5. Pierwsza wpłata środków",
    projects_betfan_cjm_step5_phase: "Purchase (Zakup)",
    projects_betfan_cjm_step5_emotion: "💳 Niepewność / Obawa o bezpieczeństwo",
    projects_betfan_cjm_step5_risk:
      "Brak ulubionej metody płatności (np. BLIK / Apple Pay) lub zbyt wysoki minimalny próg wpłaty.",
    projects_betfan_cjm_step5_opportunity:
      "Szybkie płatności BLIK jednym kliknięciem oraz natychmiastowe wizualne przyznanie bonusu startowego.",

    projects_betfan_cjm_step6_stepNum: "Krok 06",
    projects_betfan_cjm_step6_title: "Oczekiwanie na środki",
    projects_betfan_cjm_step6_action: "6. Księgowanie wpłaty",
    projects_betfan_cjm_step6_phase: "Purchase (Zakup)",
    projects_betfan_cjm_step6_emotion: "⏳ Oczekiwanie / Presja czasu",
    projects_betfan_cjm_step6_risk:
      "Opóźnienia w księgowaniu niszczą impuls do natychmiastowego postawienia zakładu przed meczem.",
    projects_betfan_cjm_step6_opportunity:
      "Natychmiastowy feedback wizualny i informacja o zaksięgowaniu środków na koncie w czasie rzeczywistym.",

    projects_betfan_cjm_step7_stepNum: "Krok 07",
    projects_betfan_cjm_step7_title: "Wybór kategorii",
    projects_betfan_cjm_step7_action: "7. Nawigacja po ofercie sportowej",
    projects_betfan_cjm_step7_phase: "Purchase (Zakup)",
    projects_betfan_cjm_step7_emotion: "🎯 Zagubienie w gąszczu oferty",
    projects_betfan_cjm_step7_risk:
      "Przeładowany interfejs sprawia, że Michał nie może szybko znaleźć interesującego go meczu.",
    projects_betfan_cjm_step7_opportunity:
      "Personalizowany dashboard na bazie ulubionych lig oraz szybkie filtry 'Popularne dzisiaj'.",

    projects_betfan_cjm_step8_stepNum: "Krok 08",
    projects_betfan_cjm_step8_title: "Dodawanie zdarzeń",
    projects_betfan_cjm_step8_action: "8. Komponowanie kuponu (AKO)",
    projects_betfan_cjm_step8_phase: "Purchase (Zakup)",
    projects_betfan_cjm_step8_emotion: "⚡ Ekscytacja / Budowanie strategii",
    projects_betfan_cjm_step8_risk:
      "Brak jasnej informacji o zmianie kursów na żywo lub skomplikowane zarządzanie koszykiem.",
    projects_betfan_cjm_step8_opportunity:
      "Akwizycja mikro-gestami, podpowiedzi popularnych typów i automatyczny przelicznik ewentualnej wygranej.",

    projects_betfan_cjm_step9_stepNum: "Krok 09",
    projects_betfan_cjm_step9_title: "Wybór stawki & Kupon",
    projects_betfan_cjm_step9_action:
      "9. Ustalenie stawki i postawienie kuponu",
    projects_betfan_cjm_step9_phase: "Purchase (Zakup)",
    projects_betfan_cjm_step9_emotion: "🔥 Wysokie napięcie / Ważenie ryzyka",
    projects_betfan_cjm_step9_risk:
      "Brak szybkiego wyboru domyślnych stawek (np. 10 zł, 20 zł) spowalnia proces w trakcie przerwy reklamowej.",
    projects_betfan_cjm_step9_opportunity:
      "Quick-Bet – szybkie przyciski kwotowe i wyrazisty, natychmiast potwierdzający przycisk 'Postaw Kupon'.",

    projects_betfan_cjm_step10_stepNum: "Krok 10",
    projects_betfan_cjm_step10_title: "Obserwacja kuponu",
    projects_betfan_cjm_step10_action: "10. Śledzenie meczu i wyników na żywo",
    projects_betfan_cjm_step10_phase: "Retention (Retencja)",
    projects_betfan_cjm_step10_emotion: "💓 Silne emocje / Oczekiwanie",
    projects_betfan_cjm_step10_risk:
      "Gdy mecz nie idzie po myśli Michała, opuszcza aplikację z poczuciem porażki.",
    projects_betfan_cjm_step10_opportunity:
      "Cash-out na żywo, animowane statystyki match-center oraz punkty do streaku/wyzwań nawet przy braku wygranej.",

    projects_betfan_cjm_step11_stepNum: "Krok 11",
    projects_betfan_cjm_step11_title: "Wynik & Social Proof",
    projects_betfan_cjm_step11_action:
      "11. Zakończenie zakładu i udostępnienie",
    projects_betfan_cjm_step11_phase: "Advocacy (Lojalność)",
    projects_betfan_cjm_step11_emotion:
      "🎉 Duma z wygranej / 🛡️ Soft-landing po przegranej",
    projects_betfan_cjm_step11_risk:
      "Gorycz porażki powoduje brak powrotu do aplikacji na dłuższy czas.",
    projects_betfan_cjm_step11_opportunity:
      "Łatwe generowanie grafik z wygranym kuponem do Social Media oraz nagroda pocieszenia (+5% do paska postępu odznaki).",

    // PROJECT WKDZIK
    projects_wkdzik_badge: "Case Study / Audyt UX",
    projects_wkdzik_title: "Audyt WKDZIK.pl",
    projects_wkdzik_subtitle:
      "Jak małe poprawki mogą znacznie ulepszyć doświadczenie użytkownika?",
    projects_wkdzik_desc:
      "WKDZIK.pl to rozwijający się sklep e-commerce marki energetyków „Dzik”, z dużą i zaangażowaną społecznością. Przeprowadziłem samodzielny audyt UX i wydajności strony, żeby sprawdzić, ile realnej sprzedaży ucieka przez detale, które łatwo przeoczyć.",
    projects_wkdzik_role_label: "Rola:",
    projects_wkdzik_role_val: "UX Designer (audyt własny)",
    projects_wkdzik_scope_label: "Zakres odpowiedzialności:",
    projects_wkdzik_scope_val:
      "Audyt UX/UI, Analiza Wydajności, Rekomendacje Wdrożeniowe",
    projects_wkdzik_duration_label: "Czas trwania:",
    projects_wkdzik_duration_val: "3 dni",
    projects_wkdzik_methodology_label: "Metodyka:",
    projects_wkdzik_methodology_val:
      "Audyt heurystyczny ścieżki zakupowej + testy wydajności (Google Lighthouse), oparte na danych porównawczych z branży e-commerce.",
    projects_wkdzik_cover_title: "🐗 Audyt WKDZIK.pl",
    projects_wkdzik_cover_subtitle:
      "od 5–6s ładowania do realnych punktów procentowych konwersji",

    projects_wkdzik_context_title: "Kontekst",
    projects_wkdzik_context_desc:
      "Mimo mocnego brandu i lojalnej społeczności, strona traciła sprzedaż przez rzeczy, których na pierwszy rzut oka nikt nie zauważa: ciężkie grafiki, ciasne odstępy i elementy interfejsu, które łatwo pomylić ze sobą w trakcie zakupów.",

    projects_wkdzik_problem_title: "Problem",
    projects_wkdzik_problem_desc:
      "Strona ładowała się wolno — nowemu użytkownikowi zajmowało to 5–6 sekund, głównie przez nieoptymalizowane zdjęcia. Do tego kilka miejsc na ścieżce zakupowej wprowadzało w błąd: od zbyt ciasnych odstępów, przez przycisk „Dodaj do koszyka” wyglądający niemal identycznie jak baner z adresem siedziby firmy, po nieczytelny ekran potwierdzenia dodania produktu.",

    projects_wkdzik_goals_title: "Cele",
    projects_wkdzik_goals_item1:
      "🎯 <b>Przyspieszyć ładowanie strony</b> — bez utraty jakości wizualnej grafik.",
    projects_wkdzik_goals_item2:
      "🎯 <b>Uporządkować hierarchię wizualną</b> — odstępy i kontrast między elementami tak, aby strona „oddychała”.",
    projects_wkdzik_goals_item3:
      "🎯 <b>Wyeliminować mylące elementy</b> na ścieżce od produktu do koszyka.",

    projects_wkdzik_owca_title: "Zgadnij: która owca waży mniej?",
    projects_wkdzik_owca_desc:
      "Dwie identycznie wyglądające grafiki. Jedna z nich waży 37 razy mniej niż druga — i gołym okiem różnicy po prostu nie widać. Kliknij tę, która Twoim zdaniem mogłaby spokojnie trafić na stronę główną.",
    projects_wkdzik_owca_hint: "Kliknij jedną z owiec, żeby zobaczyć wynik 👇",
    projects_wkdzik_owca_label_a: "Wersja A",
    projects_wkdzik_owca_label_b: "Wersja B",
    projects_wkdzik_owca_alt_a: "Owca z energetykiem — wersja A",
    projects_wkdzik_owca_alt_b: "Owca z energetykiem — wersja B",
    projects_wkdzik_owca_result:
      "<b>Nie dało się zgadnąć — i o to chodzi. 😄</b> Obie wersje wyglądają identycznie. Wersja B waży 1,5 MB, wersja A po bezstratnej kompresji — tylko 40 KB.",
    projects_wkdzik_owca_stat1_number: "40 KB",
    projects_wkdzik_owca_stat1_label: "po optymalizacji",
    projects_wkdzik_owca_stat2_number: "1,5 MB",
    projects_wkdzik_owca_stat2_label: "przed optymalizacją",
    projects_wkdzik_owca_stat3_number: "-97%",
    projects_wkdzik_owca_stat3_label: "wagi pliku",
    projects_wkdzik_owca_stat4_number: "37×",
    projects_wkdzik_owca_stat4_label: "lżej, bez utraty jakości",
    projects_wkdzik_owca_context:
      "To jedno zdjęcie widoczne od razu na górze strony głównej. Przy miliardowych obrotach Amazon policzył, że każde dodatkowe 100 ms opóźnienia kosztowało ich 1% sprzedaży. Google z kolei podaje, że 53% użytkowników mobilnych opuszcza stronę, jeśli ładuje się dłużej niż 3 sekundy — a nowy użytkownik czekał na WKDZIK.pl 5–6 sekund.",

    projects_wkdzik_space_title: "Kilka pikseli, inne wrażenie",
    projects_wkdzik_space_desc:
      "Za mało światła między elementami sprawia, że nawet dobry design wygląda tanio. Przesuń suwak i zobacz, jak sam odstęp wewnątrz kafelka zmienia jego odbiór — kolor się nie zmienia, zmienia się tylko przestrzeń.",
    projects_wkdzik_space_hint: "Przesuń suwak, żeby dodać „oddech” kafelkowi",
    projects_wkdzik_space_tile_title: "DZIK Energy 500ml",
    projects_wkdzik_space_tile_price: "4,99 zł",
    projects_wkdzik_space_label_tight: "bardzo ciasno",
    projects_wkdzik_space_label_better: "lepiej",
    projects_wkdzik_space_label_premium: "premium ✨",
    projects_wkdzik_space_unit_label: "odstępu —",
    projects_wkdzik_label_before: "Przed",
    projects_wkdzik_label_after: "Po",

    projects_wkdzik_clarity_title: "Który przycisk to „Dodaj do koszyka”?",
    projects_wkdzik_clarity_desc:
      "Na karcie produktu przycisk dodania do koszyka wyglądał niemal identycznie jak baner z adresem siedziby firmy — ten sam kolor, ta sama forma. Zobacz stan „Przed” i „Po”, żeby poczuć różnicę.",
    projects_wkdzik_clarity_address:
      "WK sp. z o.o. — ul. Mszczonowska 13, 05-090 Janki",
    projects_wkdzik_clarity_cta: "Dodaj do koszyka",
    projects_wkdzik_clarity_feedback_default:
      "Kliknij którykolwiek blok powyżej — spróbuj trafić w przycisk zakupu.",
    projects_wkdzik_clarity_feedback_after:
      "Teraz nie ma wątpliwości, który blok to zakup, a który to adres.",
    projects_wkdzik_clarity_click_before:
      "Trafiłeś? W realu część użytkowników klikała adres firmy, myśląc, że to koszyk.",
    projects_wkdzik_clarity_click_after:
      "Dokładnie tak — teraz trudno się pomylić.",

    projects_wkdzik_impact_title: "Potencjalny efekt wdrożenia",
    projects_wkdzik_impact_desc:
      "Żadna z powyższych poprawek nie wymaga przebudowy sklepu od zera — to detale, które da się wdrożyć szybko, a które realnie przekładają się na liczby:",
    projects_wkdzik_impact_card1_number: "-80%",
    projects_wkdzik_impact_card1_label:
      "średnia redukcja wagi grafik po kompresji",
    projects_wkdzik_impact_card2_number: "<2s",
    projects_wkdzik_impact_card2_label: "docelowy czas ładowania, zamiast 5–6s",
    projects_wkdzik_impact_card3_number: "53%",
    projects_wkdzik_impact_card3_label:
      "użytkowników mobile opuszcza stronę >3s (Google)",
    projects_wkdzik_impact_card4_number: "+2%",
    projects_wkdzik_impact_card4_label:
      "szacowany wzrost obrotu przy konwersji zaledwie 2 na 100 niezdecydowanych",
    projects_wkdzik_impact_profit_number: "+200 000 zł",
    projects_wkdzik_impact_profit_label:
      "Przy zysku netto na poziomie 10 mln zł rocznie (2025), te 2% wzrostu konwersji to dodatkowe 200 000 zł czystego zysku — bez zwiększania budżetu marketingowego.",
    projects_wkdzik_impact_quote:
      "Dokręcanie śruby w UX przekłada się na realne zyski.",

    projects_wkdzik_after_title: "Po audycie",
    projects_wkdzik_after_p1:
      "To, co znalazłem, to efekt wstępnego przeglądu — bez dostępu do danych analitycznych, które pozwoliłyby precyzyjnie wskazać, gdzie użytkownicy najczęściej rezygnują z zakupu. Każdy sklep ma takie momenty — pytanie tylko, czy są zmierzone.",
    projects_wkdzik_after_p2:
      "Sport i społeczność WK Dzik są mi bliskie, a rzetelny audyt UX to tani sposób na sprawdzenie, ile sprzedaży realnie leży na stole. Mała inwestycja, potencjalnie duży zwrot.",

    projects_wkdzik_floatnav_about: "O Projekcie",
    projects_wkdzik_floatnav_owca: "Owca Test",
    projects_wkdzik_floatnav_space: "Przestrzeń",
    projects_wkdzik_floatnav_clarity: "Klarowność",
    projects_wkdzik_floatnav_impact: "Efekt",
    projects_wkdzik_floatnav_after: "Po Audycie",
    projects_wkdzik_floatnav_toggle: "Spis treści",

    projects_wkdzik_navloop_text: "Zobacz kolejny projekt:",
    projects_wkdzik_navloop_link: "Aplikacja Mobilna Monexo",

    // quick contact
    contact_title: "Porozmawiajmy o współpracy",
    contact_subtitle:
      "Szukasz UX Designera do zespołu, czy masz projekt do omówienia?",
    btn_linkedin: "Napisz na LinkedIn",
    btn_cv: "Zobacz CV (PDF)",
    contact_or: "lub po prostu napisz e-mail:",

    // form
    form_title: "Masz pomysł na projekt?",
    form_subtitle: "Zobaczmy, czy gramy do jednej bramki",
    form_name: "Imię / Nazwa:",
    form_name_placeholder: "np. Jan Kowalski / Nazwa firmy",
    form_email: "Adres e-mail:",
    form_email_placeholder: "jan.kowalski@example.com",
    form_message: "Wiadomość:",
    form_message_placeholder:
      "Chciał(a)bym zlecić projekt strony internetowej dla mojej firmy...",
    form_button: "Wyślij wiadomość",

    // ABOUT
    about_breadcrumbs_main: "Strona Główna",
    about_breadcrumbs_current: "O Mnie",
    about_main_badge: "Cześć, tu Marek 👋",
    about_main_heading:
      "Napędzają mnie ambitne cele, rozwój i przekraczanie własnych granic.",
    about_main_lead:
      "Cenię dyscyplinę, ale równie mocno wierzę, że dobra atmosfera i pozytywna energia pomagają osiągać najlepsze efekty. Sport nauczył mnie konsekwencji, a podróże pokazały, jak wiele można zrozumieć, patrząc na świat z różnych perspektyw.",
    about_main_role: "UX / Product Designer",
    about_main_cv_button: "Zobacz CV",
    about_clock_location: "Warszawa, Polska",
    about_gallery_photo1_caption: "Ursus Wwa 22'",
    about_gallery_photo2_caption: "Marsa Alam 26'",
    about_gallery_photo3_caption: "Como Lake 24'",
    about_gallery_modal_alt: "Zdjęcie z galerii",
    about_gallery_cursor_label: "Galeria",
    about_stats_experience_label: "lata doświadczenia",
    about_stats_certifications_label: "ukończonych certyfikacji",
    about_stats_projects_label: "zrealizowanych projektów",
    about_timeline_title: "Moja Droga",
    about_timeline_step1_year: "2011 – 2022",
    about_timeline_step1_title: "Szkoła charakteru",
    about_timeline_step1_text:
      "Ponad 10 lat intensywnej gry w piłkę nożną. Nauka komunikacji, dyscypliny, pracy zespołowej, działania pod presją i dbania o relacje.",
    about_timeline_step2_year: "2022 – 2024",
    about_timeline_step2_title: "Fundamenty & Edukacja",
    about_timeline_step2_text:
      "Rozpoczęcie studiów informatycznych. Intensywna nauka UX/Product Design. Zdobywanie certyfikatów umiejętności projektowych.",
    about_timeline_step3_year: "2024+",
    about_timeline_step3_title: "Partner Strategiczny",
    about_timeline_step3_text:
      "Pierwsza praca komercyjna. Pierwsze projekty klienckie. Ukończenie studiów Inżynierskich. Łączenie potrzeb i strategii biznesowych z designem. Rozpoczęcie działalności freelancerskiej.",

    about_certificates_title: "Moje Certyfikaty",
    about_certificates_item1_alt: "Certyfikat Nueve - Masterclass UX",
    about_certificates_item1_caption: "UX Masterclass",
    about_certificates_item2_alt:
      "Certyfikat Nueve - Dawania i odbierania feedbacku zdobyty podczas Masterclass UX",
    about_certificates_item2_caption: "Certyfikat Teamworku",
    about_certificates_item3_alt: "Certyfikat Nueve - App Design Intro",
    about_certificates_item3_caption: "App Design Intro",
    about_certificates_item4_alt: "Cambridge Advanced English Certificate",
    about_certificates_item4_caption: "Cambridge Advanced English Certificate",
    about_certificates_item5_alt:
      "Certyfikat Google & SGH - Marketing Internetowy - Umiejętności Jutra",
    about_certificates_item5_caption:
      "Umiejętności Jutra - Marketing Internetowy",
    about_certificates_item6_alt:
      "Załącznik do Certyfikatu Google & SGH - Marketing Internetowy - Umiejętności Jutra",
    about_certificates_item6_caption: "Załącznik do Umiejętności Jutra",
    about_certificates_item7_alt: "Certyfikat Nueve Design - Design with AI",
    about_certificates_item7_caption: "Design with AI",
    about_certificates_item8_alt:
      "Certyfikat Nueve Design - Perfect Design Process",
    about_certificates_item8_caption: "Perfect Design Process",
    about_certificates_item9_alt: "Certyfikat Nueve Design - Prototype Pro",
    about_certificates_item9_caption: "Prototype Pro",
    about_certificates_item10_alt:
      "Certyfikat uczestnictwa - Warsztaty Design Thinking",
    about_certificates_item10_caption: "Warsztaty Design Thinking",
    about_certificates_item11_alt:
      "Certyfikat Nueve Design - Design System Intro",
    about_certificates_item11_caption: "Design System Intro",
    about_certificates_item12_alt:
      "Certyfikat Projektowania Witryn Internetowych",
    about_certificates_item12_caption: "Projektowanie witryn Internetowych",
    about_certificates_item13_alt:
      "Certyfikat ukończenia Claude 101 od Anthropic",
    about_certificates_item13_caption: "Claude 101",
    about_certificates_item14_alt:
      "Certyfikat ukończenia Claude Code 101 od Anthropic",
    about_certificates_item14_caption: "Claude Code 101",
    about_certificates_show_more: "Pokaż więcej certyfikatów",
    about_certificates_show_less: "Pokaż mniej certyfikatów",
    // OFFER
    offer_breadcrumbs_main: "Strona Główna",
    offer_breadcrumbs_current: "Oferta",
    offer_badge: "W czym mogę Ci pomóc?",
    offer_heading: "Przekształcam pomysły w dochodowe produkty cyfrowe.",
    offer_subtext:
      "Nie tylko tworzę ładne ekrany. Projektuję doświadczenia poparte analityką, buduję interaktywne prototypy i wdrażam gotowe strony na serwer. Kompleksowo.",
    offer_interfaces_header: "Projektowanie Interfejsów - UX/UI",
    offer_interfaces_description:
      "Tworzę intuicyjne systemy dedykowane dla web i mobile. Dbam o każdy krok użytkownika, eliminując błędy poznawcze.",
    offer_interfaces_list_1: "Aplikacje mobilne i webowe",
    offer_interfaces_list_2: "Landing pages zoptymalizowane pod konwersję",
    offer_interfaces_list_3: "Interaktywne, klikalne prototypy high-fidelity",
    offer_interfaces_list_4: "Praca na Design Systemamach",
    offer_interfaces_example: "Aplikacja Mobilna Monexo ➚",
    offer_strategy_example: "Customer Journey Betfan ➚",
    offer_analitycs_example: "Strona Internetowa PlanetRoad ➚",
    offer_strategy_header: "Audyty, Strategia & CJM",
    offer_strategy_description:
      "Twoja strona nie zarabia, a użytkownicy uciekają? Mapuję ich ścieżki i znajduje krytyczne wąskie gardła w procesie.",
    offer_strategy_list_1: "Profesjonalne audyty UX / UI",
    offer_strategy_list_2: "Mapowanie Customer Journey (CJM)",
    offer_strategy_list_3: "Projektowanie procesów biznesowych",
    offer_strategy_list_4: "Identyfikacja wizualna i spójny branding",
    offer_analitycs_header: "Wdrożenie & Analityka",
    offer_analitycs_description:
      " Zamykam proces tam, gdzie inni designerzy kończą pracę. Dostarczam działający produkt z podpiętą analityką.",
    offer_analitycs_list_1: "Wdrożenie stron na serwer i konfiguracja domen",
    offer_analitycs_list_2: "Podpięcie analityki (Google Ads, tagi, konwersje)",
    offer_analitycs_list_3: "Przygotowanie assetów i prostej grafiki",
    offer_analitycs_list_4: "Optymalizacja stron pod SEO i wydajność",
    offer_cta_heading:
      "Masz projekt w głowie? Zobaczmy, czy gramy do jednej bramki.",
    offer_cta_p1: "Rozliczam się w pełni bezpiecznie przez platform",
    offer_cta_p2: "(wystawiam fakturę VAT, brak ryzyka dla obydwu stron).",
    offer_cta_button_secondary: "Zobacz moje projekty",
    offer_cta_button_primary: "Porozmawiajmy o projekcie",

    offer_process_badge: "Jak pracuję?",
    offer_process_title:
      "Wiesz, co dzieje się z projektem na każdym etapie",
    offer_process_desc:
      "Stawiam na otwartą komunikację, jasno określone etapy i regularne podsumowania. Od początku wiesz, nad czym aktualnie pracuję, jakie decyzje zostały podjęte i co wydarzy się dalej. Dzięki temu wspólnie rozwijamy projekt bez chaosu, niejasności i rozproszonej komunikacji.",
    offer_process_step1_title: "Poznajemy cele",
    offer_process_step1_desc:
      "Rozmawiamy o Twoim biznesie, użytkownikach i oczekiwanych efektach. Ustalamy zakres, priorytety oraz sposób mierzenia sukcesu projektu.",
    offer_process_step2_title: "Ustalamy zasady współpracy",
    offer_process_step2_desc:
      "Określamy harmonogram, sposób komunikacji, terminy spotkań oraz momenty, w których potrzebny będzie Twój feedback.",
    offer_process_step3_title: "Badam i definiuję kierunek",
    offer_process_step3_desc:
      "Analizuję potrzeby użytkowników, rynek i konkurencję. Wnioski przekładam na strategię oraz konkretne założenia projektowe.",
    offer_process_step4_title: "Projektuję i testuję",
    offer_process_step4_desc:
      "Tworzę architekturę, makiety i interaktywny prototyp. Prezentuję postępy, zbieram feedback i sprawdzam kluczowe rozwiązania.",
    offer_process_step5_title: "Dopracowujemy rozwiązanie",
    offer_process_step5_desc:
      "Wspólnie analizujemy projekt i podejmujemy decyzje na podstawie celów, danych oraz potrzeb użytkowników.",
    offer_process_step6_title: "Wspieram wdrożenie",
    offer_process_step6_desc:
      "Przygotowuję pliki, komponenty i dokumentację. Wspieram implementację oraz weryfikuję zgodność produktu z projektem.",
    offer_process_step7_title: "Rozliczamy się bezpiecznie",
    offer_process_step7_desc:
      "Rozliczam się w pełni bezpiecznie przez platformę Useme. Wystawiam fakturę VAT, a cały proces jest uporządkowany i pozbawiony ryzyka dla obydwu stron.",

    offer_projecthub_badge: "Project Hub",
    offer_projecthub_title: "Cały projekt w jednym miejscu",
    offer_projecthub_desc:
      "Współpracę organizuję w dedykowanym Project Hubie. Masz stały dostęp do postępów, materiałów, terminów i podjętych decyzji, bez przeszukiwania wiadomości oraz załączników.",
    offer_projecthub_item1: "Aktualny status i następne działania",
    offer_projecthub_item2: "Zakres, cele i mierniki sukcesu",
    offer_projecthub_item3: "Harmonogram i kamienie milowe",
    offer_projecthub_item4: "Materiały, prototypy i linki do Figmy",
    offer_projecthub_item5: "Feedback oraz rejestr decyzji",
    offer_projecthub_item6: "Podsumowania spotkań i dokumentacja",

    offer_testimonials_title:
      "Zobacz, co mówią o współpracy ze mną moi klienci",
    offer_testimonials_subtitle:
      "Opinie osób i firm, z którymi miałem przyjemność pracować",
    offer_testimonial1_text:
      "„Polecam współpracę z <b>Markiem Wieteckim</b>. Komunikacja była sprawna, a wszelkie poprawki zostały niezwłocznie opracowane z należytą starannością oraz zgodnie z oczekiwaniami zamawiającego.”",
    offer_testimonial1_role: "Prezes Fundacji Fair",
    offer_testimonial2_text:
      "„Rzetelny fachowiec z świetnym podejściem do klienta. Bardzo dobrze zrozumiał nasze potrzeby biznesowe i doradził rozwiązania, na które sami byśmy nie wpadli.”",
    offer_testimonial2_role: "CEO PlanetRoad",
    offer_testimonial3_text:
      "„Współpraca przebiegła bezproblemowo. Strona działa szybko, wygląda nowocześnie i co najważniejsze – zaczęła przynosić pierwszych klientów od razu po wdrożeniu.”",
    offer_testimonial3_role: "Własny Biznes",

    // PRIVACY
    privacy_breadcrumbs_main: "Strona Główna",
    privacy_breadcrumbs_current: "Polityka Prywatności",
    privacy_h1: "Polityka Prywatności",
    privacy_1_heading: "1. Administrator Danych",
    privacy_1_part1: "Administratorem Twoich danych osobowych jest",
    privacy_1_part2: "kontakt e-mail:",
    privacy_2_heading: "2. Jakie dane zbieram i w jakim celu?",
    privacy_2_item1_title: "Formularz kontaktowy i korespondencja e-mail:",
    privacy_2_item1_txt:
      "Gdy kontaktujesz się ze mną przez formularz na stronie lub piszesz bezpośrednio na podany adres e-mail, przekazujesz swoje dane osobowe (np. imię, adres e-mail oraz treść wiadomości). Dane te są przetwarzane wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie oraz prowadzenia uzgodnień związanych ze świadczeniem usług.",
    privacy_2_item2_title:
      "Pliki cookies oraz narzędzia analityczno-reklamowe:",
    privacy_2_item2_txt:
      "Strona wykorzystuje pliki cookies (ciasteczka) oraz narzędzia dostarczane przez podmioty trzecie w celach analitycznych, statystycznych i optymalizacji działań marketingowych:",
    privacy_2_ga_title: "Google Analytics:",
    privacy_2_ga_txt:
      "służy do zbierania anonimowych statystyk dotyczących ruchu na stronie oraz sposobu jej wykorzystania przez użytkowników,",
    privacy_2_ads_title: "Google Ads:",
    privacy_2_ads_txt:
      "służy do mierzenia skuteczności kampanii reklamowych oraz dopasowywania przekazu reklamowego do odbiorców,",
    privacy_2_clarity_title: "Microsoft Clarity:",
    privacy_2_clarity_txt:
      "służy do analizy zachowania użytkowników na stronie (m.in. poprzez anonimowe nagrania sesji i mapy cieplne) w celu poprawy wygody i funkcjonalności serwisu.",
    privacy_3_heading: "3. Zarządzanie plikami cookies",
    privacy_3_txt:
      "Analityczne i reklamowe pliki cookies są zapisywane w Twojej przeglądarce wyłącznie za Twoją zgodą, wyrażoną za pośrednictwem banera zgód (Cookie Banner) wyświetlanego podczas pierwszej wizyty na stronie. W każdej chwili możesz zmienić swoje preferencje lub wycofać zgodę, czyszcząc pliki cookies w ustawieniach swojej przeglądarki internetowej.",
    privacy_4_heading: "4. Okres przechowywania danych",
    privacy_4_txt:
      "Dane przekazane w ramach formularza kontaktowego lub korespondencji e-mail przetwarzane są przez czas niezbędny do obsługi zapytania, a następnie przez okres niezbędny do zabezpieczenia ewentualnych roszczeń lub realizacji obowiązków prawnych. Dane zbierane przez narzędzia analityczne przechowywane są zgodnie z domyślnymi okresami retencji ustalonymi przez dostawców tych usług.",
    privacy_5_heading: "5. Odbiorcy danych",
    privacy_5_intro:
      "W związku z funkcjonowaniem strony i realizacją moich usług, Twoje dane mogą być powierzane lub udostępniane zaufanym podmiotom trzecim dostarczającym rozwiązania techniczne i analityczne:",
    privacy_5_netlify_title: "Netlify, Inc.",
    privacy_5_netlify_txt:
      "– dostawca hostingu i infrastruktury serwerowej strony,",
    privacy_5_google_title: "Google Ireland Limited",
    privacy_5_google_txt:
      "– dostawca usług analitycznych i reklamowych (Google Analytics, Google Ads),",
    privacy_5_ms_title: "Microsoft Ireland Operations Limited",
    privacy_5_ms_txt: "– dostawca usługi analitycznej Microsoft Clarity.",
    privacy_6_heading: "6. Twoje prawa",
    privacy_6_intro:
      "Zgodnie z przepisami RODO przysługują Ci następujące prawa związane z przetwarzaniem Twoich danych osobowych:",
    privacy_6_right1:
      "Prawo dostępu do treści swoich danych oraz otrzymania ich kopii,",
    privacy_6_right2: "Prawo do sprostowania (poprawiania) swoich danych,",
    privacy_6_right3:
      'Prawo do usunięcia danych ("prawo do bycia zapomnianym"),',
    privacy_6_right4: "Prawo do ograniczenia przetwarzania danych,",
    privacy_6_right5:
      "Prawo do wniesienia sprzeciwu wobec przetwarzania danych,",
    privacy_6_right6:
      "Prawo do wycofania zgody na przetwarzanie danych w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem).",
    privacy_6_contact_part1:
      "W celu realizacji powyższych praw skontaktuj się ze mną pod adresem e-mail:",
    privacy_back_btn: "Powrót do strony głównej",

    // 404
    p404_breadcrumbs_main: "Strona Główna",
    p404_breadcrumbs_current: "Strona nie istnieje",
    p404_text:
      "Wygląda na to, że strona na którą próbujesz się dostać nie istnieje lub została przeniesiona.",
    p404_nav: "Wróć na Stronę Główną",

    // side nav
    side_nav_about: "O Projekcie",
    side_nav_research: "Badania",
    side_nav_ideation: "Ideacja",
    side_nav_iterations: "Iteracje",
    side_nav_storybook: "Storybook",
    side_nav_final_effect: "Efekt Końcowy",
    side_nav_post_project: "Po Projekcie",

    // PROJECT APP MONEXO
    project_app_monexo_title: "Aplikacja Mobilna",
    project_app_monexo_desc:
      "Monexo to mobilna aplikacja do wymiany walut, którą zaprojektowałem jako odpowiedź na realne problemy użytkowników korzystających z istniejących rozwiązań FinTech.",
    project_app_monexo_role_label: "Rola:",
    project_app_monexo_role_val: "UX Designer; Front-end Developer",
    project_app_monexo_scope_label: "Zakres odpowiedzialności:",
    project_app_monexo_scope_val:
      "Research, Koncept produktu, Architektura informacji, Projekt interfejsu, Testy użyteczności",
    project_app_monexo_duration_label: "Czas trwania:",
    project_app_monexo_duration_val: "13 tygodni",
    project_app_monexo_methodology_label: "Metodyka:",
    project_app_monexo_methodology_val:
      "Lean UX / Design Thinking – iteracyjne projektowanie oparte na badaniach użytkowników, testach użyteczności i analizie konkurencji, z priorytetyzacją funkcji w ramach MVP.",
    project_app_monexo_context_title: "Kontekst",
    project_app_monexo_context_text:
      "Analiza rynku wykazała, że wiele istniejących aplikacji do wymiany walut jest nieczytelnych, przeładowanych informacjami i opartych na niejasnym modelu prowizji, co stworzyło niepotrzebną barierę dla użytkowników chcących wykonać prostą wymianę walut.",
    project_app_monexo_problem_title: "Problem",
    project_app_monexo_problem_text:
      "Użytkownicy często nie mieli pewności co do rzeczywistego kosztu transakcji, gubili się w interfejsie i musieli przechodzić przez zbyt wiele kroków, aby wykonać podstawową operację.",
    project_app_monexo_goals_title: "Cele",
    project_app_monexo_goal_1_b: "Uproszczenie procesu wymiany walut",
    project_app_monexo_goal_1_text:
      " do maksymalnie kilku intuicyjnych kroków.",
    project_app_monexo_goal_2_b: "Pełna transparentność kursów i opłat",
    project_app_monexo_goal_2_text:
      " — brak ukrytych prowizji i niejasnych przeliczeń.",
    project_app_monexo_goal_3_b: "Budowa zaufania do produktu FinTech",
    project_app_monexo_goal_3_text:
      " poprzez czytelną komunikację i przewidywalność procesu.",
    project_app_monexo_constraints_title: "Ograniczenia",
    project_app_monexo_constraint_1_b: "Wysokie wymagania dotyczące zaufania",
    project_app_monexo_constraint_1_text:
      " — aplikacja finansowa musi być postrzegana jako bezpieczna i wiarygodna.",
    project_app_monexo_constraint_2_b:
      "Konieczność jasnego komunikowania kosztów",
    project_app_monexo_constraint_2_text:
      " bez przeciążania użytkownika danymi.",
    project_app_monexo_constraint_3_b: "Minimalizacja złożoności interfejsu",
    project_app_monexo_constraint_3_text:
      " przy zachowaniu pełnej kontroli użytkownika.",
    project_app_monexo_constraint_4_b: "Projekt mobile-first",
    project_app_monexo_constraint_4_text:
      ", dostosowany do szybkiego i częstego użycia.",
    project_app_monexo_research_title: "Badania i Wnioski",
    project_app_monexo_market_title:
      "Czy ludzie potrzbują naszego produktu? - Analiza rynku i trendów branżowych",
    project_app_monexo_market_p1_part1:
      "Przeanalizowałem rynek i trendy w branży, przeglądając raporty oraz topowe aplikacje, aby zrozumieć, czego naprawdę potrzebują użytkownicy. Zauważyłem, że przy rosnących wymaganiach użytkowników ",
    project_app_monexo_market_p1_b:
      "podstawowe funkcje są często ukrywane, by uwydatnić nowe możliwości",
    project_app_monexo_market_p1_part2:
      ". W mojej aplikacji postawiłem na spełnianie podstawowych potrzeb w pierwszej kolejności, a funkcje dodatkowe zostały bardziej zagnieżdżone, tak by nie przeszkadzały w codziennym szybkim zarządzaniu finansami.",
    project_app_monexo_market_p2_part1:
      "Jednocześnie zidentyfikowałem popularne funkcjonalności, takie jak ",
    project_app_monexo_market_p2_b1:
      "portfele wielowalutowe, automatyczne zlecenia zakupu walut",
    project_app_monexo_market_p2_part2: " czy ",
    project_app_monexo_market_p2_b2: "obsługa kryptowalut",
    project_app_monexo_market_p2_part3:
      ", które odpowiadają na realne potrzeby użytkowników w planowaniu transakcji i zarządzaniu pieniędzmi, umożliwiając im pełniejszą kontrolę nad finansami.",
    project_app_monexo_competition_title: "Analiza problemów konkurencji",
    project_app_monexo_comp_p1_intro:
      "Podczas analizy konkurencyjnych aplikacji i opinii użytkowników zidentyfikowałem kluczowe problemy, które znacząco wpływają na odczucia użytkownika:",
    project_app_monexo_comp_p1_b1: "Zbyt skomplikowane menu",
    project_app_monexo_comp_p1_text1:
      " – użytkownicy wyrażając opinie na temat konkurencji często skarżą się na chaos w opcjach i trudności w szybkim wykonaniu podstawowych operacji.",
    project_app_monexo_comp_p1_b2: "Nieintuicyjna nawigacja",
    project_app_monexo_comp_p1_text2:
      " – Użytkownicy często miewają również problemy z dotarciem do pożądanej funkcji w aplikacji.",
    project_app_monexo_comp_p1_b3: "Brak transparentności w opłatach",
    project_app_monexo_comp_p1_text3:
      " – użytkownicy odczuwają brak przejrzystości i spójności w opłatach i niepewność co do zwrotów oraz oprocentowania.",
    project_app_monexo_comp_p2_intro:
      "Analiza pozwoliła mi zidentyfikować kluczowe problemy użytkowników, które miałem zamiar rozwiązać w następujący sposób:",
    project_app_monexo_comp_p2_b1: "Uproszczeniu menu i hierarchii funkcji",
    project_app_monexo_comp_p2_text1:
      ", aby kluczowe działania były dostępne w 2–3 krokach;",
    project_app_monexo_comp_p2_b2: "Wprowadzenie podglądu transakcji",
    project_app_monexo_comp_p2_text2:
      ", a także informowania użytkownika na bieżąco o opłatach i statusach wymian;",
    project_app_monexo_comp_p2_b3:
      "Zapewnienie transparentności kosztów i komunikacji",
    project_app_monexo_comp_p2_text3:
      ", aby użytkownik zawsze wiedział, jakie opłaty i oprocentowanie obowiązują jego środki.",
    project_app_monexo_ideation_title: "Ideacja",
    project_app_monexo_target_title: "Dla kogo będzie nasza aplikacja?",
    project_app_monexo_target_p_part1:
      "Kształtowanie produktu rozpocząłem od stworzenia trzech ",
    project_app_monexo_target_p_b: "person",
    project_app_monexo_target_p_part2:
      " dla naszego produktu. To pokazało mi, jakie potrzeby użytkowników są dla nich najważniejsze.",
    project_app_monexo_fig_personae: "User Persony",
    project_app_monexo_needs_b: "Głównymi potrzebami",
    project_app_monexo_needs_intro: " naszych użytkowników okazały się być:",
    project_app_monexo_needs_1: "• Szybkość dostępu do najważniejszych funkcji",
    project_app_monexo_needs_2: "• Prostota w obsłudze aplikacji",
    project_app_monexo_needs_3:
      "• Transparentność w opłatach za transakcje oraz",
    project_app_monexo_needs_4:
      "• Poczucie kontroli nad transakcjami w aplikacji",
    project_app_monexo_prio_title: "Co będzie najważniejsze? - Priorytetyzacja",
    project_app_monexo_prio_p_part1: "Używając ",
    project_app_monexo_prio_p_b: "MoSCow",
    project_app_monexo_prio_p_part2:
      " ustaliłem, które funkcje będą kluczowe, które najlepiej żeby się znalazły, a które są jedynie opcjonalnymi usprawnieniami.",
    project_app_monexo_fig_moscow: "Priorytetyzacja techniką MoSCoW",
    project_app_monexo_mvp_intro_part1: "W ramy ",
    project_app_monexo_mvp_intro_b: "MVP",
    project_app_monexo_mvp_intro_part2: " weszły funkcjonalności:",
    project_app_monexo_mvp_1:
      "• Wirtualnego portfela z możliwością podglądu posiadanych walut",
    project_app_monexo_mvp_2: "• Przeglądu kursów NBP",
    project_app_monexo_mvp_3: "• Wymiany walut",
    project_app_monexo_mvp_4: "• Historii transakcji",
    project_app_monexo_mvp_5: "• Doładowania konta",
    project_app_monexo_mvp_6:
      "• Rejestracji, Logowania, Zmiany hasła i Usunięcia konta",
    project_app_monexo_style_title: "W jakim stylu?",
    project_app_monexo_style_p_part1: "Stworzyłem skromny ",
    project_app_monexo_style_p_b: "Style Guide",
    project_app_monexo_style_p_part2:
      " z podstawowymi elementami interfejsu, tak aby aplikacja była spójna i estetyczna.",
    project_app_monexo_fig_typography: "Style Guide - Typography",
    project_app_monexo_fig_components: "Style Guide - Components & Rules",
    project_app_monexo_fig_colors: "Style Guide - Colors & Themes",
    project_app_monexo_style_desc:
      "Interfejs aplikacji został zaprojektowany w estetyce minimalistycznej, z jedną główną akcją użytkownika — „Wymień walutę”. A kolorystyka i typografia wspierają czytelność, spokój oraz poczucie bezpieczeństwa, co jest kluczowe w produktach FinTech.",
    project_app_monexo_wireframes_title: "Teraz pytanie gdzie co umieścić?",
    project_app_monexo_wireframes_p_part1: "Wykorzystując ",
    project_app_monexo_wireframes_p_b: "wireframe'y",
    project_app_monexo_wireframes_p_part2:
      " rozmieściłem elementy na ekranach aplikacji tak, aby wyczerpać główne zapotrzebowania naszej grupy docelowej oraz priorytetowe funkcje aplikacji.",
    project_app_monexo_fig_wireframes1: "Wireframe'y cz.1",
    project_app_monexo_fig_wireframes2: "Wireframe'y cz.2",
    project_app_monexo_breadboards_title:
      "I dokąd z tych ekranów będzie można przejść?",
    project_app_monexo_breadboards_p_part1: "Zająłem się więc zaprojektowaniem",
    project_app_monexo_breadboards_p_b: " Breadboardów",
    project_app_monexo_breadboards_p_part2:
      " - wszystkich możliwych ścieżek z poszczególnych ekranów, tak aby użytkownik mógł w łatwy sposób dostać się tam gdzie tego potrzebuje. W aplikacji wykorzystuje tab navigation, co już znacznie ułatwia przemieszczanie się pomiędzy ekranami, a linki w dobrych miejscach jedynie podpowiadają co i gdzie zrobić jako następny krok.",
    project_app_monexo_fig_breadboards1: "Breadboardy cz.1",
    project_app_monexo_fig_breadboards2: "Breadboardy cz.2",
    project_app_monexo_iterations_title: "Iteracje",
    project_app_monexo_iterations_intro:
      "Projekt właściwego produktu przeprowadzałem iteracyjnie, implementując poszczególne funkcjonalności, testując je i dostosowując je do potrzeb użytkowników produktu.",
    project_app_monexo_iter1_title:
      "Na początku to co kluczowe do funkcjonowania aplikacji - MVP & walidacja podstawowych flow",
    project_app_monexo_iter1_p:
      "Zaprojektowałem MVP obejmujące kluczowe funkcje: sprawdzanie kursów oraz wymianę walut. Celem tej iteracji było szybkie zweryfikowanie głównych założeń produktu, struktury informacji oraz podstawowego flow wymiany.",
    project_app_monexo_iter_sort_title:
      "Czemu lista kursów sortowana alfabetycznie nie będzie dobrym wyjściem?",
    project_app_monexo_iter_sort_p1:
      "Podczas projektowania ekranu kursów zdałem sobie sprawę, że lista walut z Api Narodowego Banku Polskiego wydaje listę walut w porządku alfabetycznym. Wiedziałem, że taki porządek schowa głęboko np. Amerykańskiego Dolara czy też Euro. Zdecydowałem się tutaj na zagłębienie się w to, które waluty są w polsce wymieniane najczęściej. Okazało się, że poza Dolarem, Euro czy Funtem dalej popularny jest Frank Szwajcarski oraz Korona Czeska, które to waluty wywindowałem priorytetowo na początek listy.",
    project_app_monexo_iter_sort_p2:
      "Następnie poddałem prototyp testom użyteczności, na klikalnym prototypie, aby sprawdzić czy wybrane rozwiązania spełniają potrzeby użytkowników. Owe testy wykazały, że język użyty w niektórych miejscach sprawiał problem użytkownikom i wprowadzał ich w zakłopotanie, oraz że doładowywanie konta jest niepotrzebnie schowane i zbyt zagnieżdżone, a dostanie się do niego sprawia użytkownikom niemały problem.",
    project_app_monexo_fig_iter1: "Walidacja podstawowych flow",
    project_app_monexo_prototype_link: "Otwórz interaktywny prototyp",
    project_app_monexo_prototype_note:
      "(dostępny tylko na PC i Laptopy, ze względu na ograniczenia Figma Make)",
    project_app_monexo_iter2_title:
      "Do których funkcji dostęp powinien być najwygodniejszy? - Priorytetyzacja kluczowych akcji w nawigacji",
    project_app_monexo_iter2_p1_part1:
      "Wnioski z testów użyteczności jasno pokazały, że użytkownicy mieli ",
    project_app_monexo_iter2_p1_b:
      "trudność z odnalezieniem funkcji doładowania konta",
    project_app_monexo_iter2_p1_part2:
      ". Kluczowa akcja była ukryta zbyt głęboko w strukturze profilu, co powodowało frustrację i wydłużało czas realizacji zadania.",
    project_app_monexo_iter2_p2:
      "Na podstawie tych obserwacji zdecydowałem się na przebudowę dolnej nawigacji. Ekran profilu został usunięty z głównego paska tabów, a jego miejsce zajęła funkcja doładowania konta — jedna z najważniejszych akcji w całym systemie. Przeniosłem profil użytkownika do kompaktowej ikony dostępnej na wszystkich głównych ekranach, tak aby dalej był bardzo dostępny.",
    project_app_monexo_iter2_p3:
      "Zmiana ta znacząco skróciła ścieżkę do wykonania transakcji oraz uczyniła interfejs bardziej intuicyjnym. Po iteracji użytkownicy bez dodatkowych wskazówek potrafili szybko zasilić konto i przejść do wymiany walut.",
    project_app_monexo_fig_iter2: "Priorytetyzacja kluczowych funkcji",
    project_app_monexo_iter2_p4:
      "W kolejnych testach tym razem niemoderowanych testach użyteczności i First-Click użytkownicy znacznie szybciej wykonywali zadanie - cały proces zakupu waluty.",
    project_app_monexo_iter2_effect:
      "Efekt: użytkownik może szybciej i bezbłędnie ocenić stan finansów i zrealizować transakcję w krótszym czasie, co zwiększa wygodę i satysfakcję z korzystania z aplikacji.",
    project_app_monexo_iter3_title:
      "W jaki sposób ułatwiam proces użytkownikowi? - Doprecyzowanie komunikatów systemowych",
    project_app_monexo_iter3_p1:
      "Testy użyteczności wykazały, że przekaz na niektórych ekranach był zbyt domyślny i niejednoznaczne, co powodowało dezorientację użytkowników oraz obawy przed błędnym wykonaniem operacji.",
    project_app_monexo_iter3_p2:
      "W odpowiedzi na ten problem wzbogaciłem ekrany o krótkie, zrozumiałe informacje uzupełniające, aby użytkownicy wiedzieli o wszystkich kosztach i zasadach działania systemu, aby upewnić ich i uspokoić podczas ich działań w aplikacji.",
    project_app_monexo_iter3_p3:
      "Przeprowadziłem walidację komunikatów systemowych, aby sprawdzić, czy są zrozumiałe dla użytkowników. Testy wykazały, że techniczne i niejednoznaczne komunikaty wprowadzały dezorientację i obawy przed błędnym wykonaniem operacji.",
    project_app_monexo_fig_iter3_1: "Ulepszenie Komunikacji Kursu Walut",
    project_app_monexo_fig_iter3_2: "Ulepszenie Komunikacji Kosztów Transackji",
    project_app_monexo_fig_iter3_3:
      "Poprawa Widoczności Linków na Ekranie Głównym",
    project_app_monexo_iter3_nav_opt:
      "Dodatkowo zoptymalizowałem nawigację pod najczęstszy scenariusz użycia (sprawdzenie kursu → doładowanie → wymiana), skracając czas realizacji celu poprzez ustawienie kart w kolejności najczęściej powtarzanego flow. Oraz podmieniłem niektóre ikony na bardziej intuicyjne odpowiedniki tak, aby użytkownik jeszcze szybciej i łatwiej dostawał się w porządane miejsce.",
    project_app_monexo_fig_iter3_4: "Poprawa Intuciyjności Menu",
    project_app_monexo_iter3_effect:
      "Efekt: użytkownicy czują większą kontrolę nad procesem i zaufanie do aplikacji, co przekłada się na płynniejsze i pewniejsze korzystanie z funkcji wymiany walut.",
    project_app_monexo_final_title: "Efekt Końcowy",
    project_app_monexo_final_subtitle: "Co ostatecznie powstało?",
    project_app_monexo_fig_light1: "Finalne Jasne Ekrany cz.1",
    project_app_monexo_fig_light2: "Finalne Jasne Ekrany cz.2",
    project_app_monexo_fig_dark1: "Finalne Ciemne Ekrany cz.1",
    project_app_monexo_fig_dark2: "Finalne Ciemne Ekrany cz.2",
    project_app_monexo_final_p1:
      "Projekt Monexo pozwolił mi przejść przez pełny proces projektowy — od analizy problemu i rynku, przez ideację i testy użyteczności, aż po iteracyjne doskonalenie interfejsu i komunikacji.",
    project_app_monexo_final_p2:
      "Skupiłem się na projektowaniu rozwiązań, które są proste dla użytkownika, przewidywalne w działaniu i wspierają cele biznesowe poprzez budowanie zaufania do produktu finansowego.",
    project_app_monexo_final_check1:
      "✅ Zaprojektowana aplikacja upraszcza proces wymiany walut spełniając przede wszsytkim główne potrzeby przeciętnego użytkownika.",
    project_app_monexo_final_check2:
      "✅ Transparentna komunikacja kursów i opłat buduje zaufanie użytkowników i chęć długofalowej relacji z produktem.",
    project_app_monexo_final_github:
      "👨‍💻 Projekt jest w pełni zaimplementowany i dostępny w repozytorium GitHub. Znajdziesz tam kompletną aplikację mobilną, integrację z API NBP, logikę biznesową Web Service oraz bazę danych. Repozytorium zawiera też instrukcję uruchomienia, co pozwala przetestować działanie aplikacji np. na własnym urządzeniu.",
    project_app_monexo_after_title: "Po Projekcie",
    project_app_monexo_takeaways_title: "Kluczowe Wnioski",
    project_app_monexo_takeaway_part1: "Świadoma i dokładna ",
    project_app_monexo_takeaway_b: "obsługa stanów sieciowych",
    project_app_monexo_takeaway_part2:
      " jest kluczowa dla spójnego i przewidywalnego doświadczenia użytkownika w aplikacji mobilnej - internet mobilny nie jest tak niezawodny jak internet kablowy i zdecydowanie częściej jest podatny na różnego rodzaju przerwania.",
    project_app_monexo_next_steps_title: "Następne Kroki",
    project_app_monexo_next_1_b: "Obsługa wielu portfeli walutowych",
    project_app_monexo_next_1_text:
      " - architektura interfejsu została zaprojektowana z myślą o łatwej rozbudowie o wiele portfeli (np. osobny portfel oszczędnościowy).",
    project_app_monexo_next_2_b: "Automatyczne zlecenia wymiany walut",
    project_app_monexo_next_2_text:
      " - możliwość ustawiania zleceń zakupu przy określonym kursie, z zabezpieczeniami budżetowymi zapobiegającymi powstawaniu debetu.",
    project_app_monexo_next_3_b: "Rozszerzenie o kryptowaluty",
    project_app_monexo_next_3_text:
      " - potencjał integracji z rynkiem kryptowalut poprzez API giełd, umożliwiający przechowywanie i wymianę zarówno walut tradycyjnych, jak i cyfrowych.",
    project_app_monexo_next_project_label: "Zobacz kolejny projekt:",
    project_app_monexo_next_project_link: "Strona Internetowa - PlanetRoad",

    // PROJECT WEB PLANET
    project_web_planetroad_nav_offer: "Oferta",
    project_web_planetroad_nav_about: "O Mnie",
    project_web_planetroad_project_title: "Strona Internetowa",
    project_web_planetroad_project_description:
      "Nowa strona internetowa firmy PlanetRoad, którą zaprojektowałem w celu uproszczenia klientom poznania firmy, prezentacji dotychczasowych realizacji w czytelny i atrakcyjny sposób oraz ułatwienia kontaktu z firmą",
    project_web_planetroad_role_label: "Rola:",
    project_web_planetroad_role_value: "UX Designer",
    project_web_planetroad_responsibilities_label: "Zakres odpowiedzialności:",
    project_web_planetroad_responsibilities_value:
      "Research, Koncept produktu, Projekt interfejsu, Implementacja strony, Testy użyteczności",
    project_web_planetroad_duration_label: "Czas trwania:",
    project_web_planetroad_duration_value: "34 tygodnie",
    project_web_planetroad_methodology_label: "Metodyka:",
    project_web_planetroad_methodology_value: "Lean UX",
    project_web_planetroad_banner_badge: "Strona Internetowa",
    project_web_planetroad_context_heading: "Kontekst",
    project_web_planetroad_context_text:
      "Klient potrzebował przebudowania strony internetowej, tak aby umożliwiała ona prezentacje ukończonych projektów i budowania profesjonalnego wizerunku firmy. Moim głównym celem było stworzenie strony intuicyjnej, spójnej z nową identyfikacją wizualną i łatwej w obsłudze dla użytkowników o zróżnicowanym zaawansowaniu technicznym (trudno jednoznacznie zcharakteryzować w tym aspekcie głównych klientów firmy)",
    project_web_planetroad_problem_heading: "Problem",
    project_web_planetroad_problem_text:
      "Użytkownicy nie mieli możliwości poznania oferty i doświadczenia firmy oraz łatwego kontaktu z zespołem PlanetRoad, gdyż dotychczasowa strona nie eksponowała doświadczenia i jakości realizacji, a kontakt z firmą nie był bezpośrednio dostępny na stronie.",
    project_web_planetroad_goals_heading: "Cele",
    project_web_planetroad_goal_1_label: "Ułatwienie klientowi poznania firmy",
    project_web_planetroad_goal_1_text:
      "– szybki dostęp do informacji o działalności i doświadczeniu PlanetRoad.",
    project_web_planetroad_goal_2_label:
      "Prezentacja dotychczasowych realizacji",
    project_web_planetroad_goal_2_text:
      " w czytelny i atrakcyjny sposób, podkreślający profesjonalizm firmy.",
    project_web_planetroad_goal_3_label: "Uproszczenie kontaktu z firmą",
    project_web_planetroad_goal_3_text:
      "– intuicyjna nawigacja, widoczne formularze i łatwy dostęp do danych kontaktowych.",
    project_web_planetroad_goal_4_label:
      "Profesjonalna i spójna obecność w sieci",
    project_web_planetroad_goal_4_text:
      "– strona wspiera wizerunek firmy zgodny z nową identyfikacją wizualną.",
    project_web_planetroad_constraints_heading: "Ograniczenia",
    project_web_planetroad_constraint_1_label:
      "Strona musi odpowiadać sektorowi B2B",
    project_web_planetroad_constraint_1_text:
      "– utrzymać profesjonalny i wiarygodny wizerunek firmy.",
    project_web_planetroad_constraint_2_label:
      "Nowa strona musi być spójna z istniejącą identyfikacją wizualną",
    project_web_planetroad_constraint_2_text:
      "– kolory, typografia i styl graficzny muszą pasować do nowego brandingu.",
    project_web_planetroad_constraint_3_label:
      "Brak wcześniejszego doświadczenia firmy w digitalu",
    project_web_planetroad_constraint_3_text:
      "– strona musi być intuicyjna dla użytkownika, który wcześniej nie korzystał z cyfrowych narzędzi.",
    project_web_planetroad_constraint_4_label:
      "Konieczność zachowania dostępności informacji",
    project_web_planetroad_constraint_4_text:
      " podczas wdrożenia – firma musi nadal być w pełni dostępna dla klientów.",
    project_web_planetroad_research_heading: "Badania",
    project_web_planetroad_research_p1:
      "Projekt nowej strony internetowej dla PlanetRoad rozpocząłem od audytu starej strony i poznania szczegółowych oczekiwań mojego Klienta.",
    project_web_planetroad_research_p2_bold1: "Rozmowa z CEO",
    project_web_planetroad_research_p2_text1:
      " zarysowała mi obraz tego, jak miałaby wyglądać strona firmy. PlanetRoad skupia się głównie na ",
    project_web_planetroad_research_p2_bold2: "współpracy B2B",
    project_web_planetroad_research_p2_text2:
      " - (np. Developerami) oraz jednostkami samorządowymi. Dlatego priorytetem jest profesjonalizm, oraz budowanie zaufania do marki i zwiększania jej wiarygodności. Sam CEO dał mi również kilka swoich pomysłów odnośnie informacji, które chciałby posiadać na stronie oraz klika użytecznych linków do dolnej nawigacji strony które mogłem później wkomponować w projekt.",
    project_web_planetroad_research_p3_lead: "Następnie przeprowadziłem",
    project_web_planetroad_research_p3_bold: "analizę konkurencji",
    project_web_planetroad_research_p3_text:
      " w branży drogowej, która ujawniła dużą powtarzalność wizualną - wiele firm korzystało z podobnych układów stron i schematycznych kompozycji. W tym przypadku problemem nie było więc wyróżnienie się spośród konkurencji, a zachowanie balansu pomiędzy profesjonalizmem i technicznym charakterem strony, a nieco bardziej nowoczesnym podejściem do projektowania stron internetowych.",
    project_web_planetroad_research_p4_lead: "Kolejno",
    project_web_planetroad_research_p4_bold:
      "zbadałem oczekiwania użytkowników",
    project_web_planetroad_research_p4_text:
      " i najczęściej wyszukiwane informacje o firmach z branży, aby zapewnić użyteczność nowej strony internetowej pod kątem UX i SEO. Analiza treści pokazała, że kluczowe są: przejrzysta oferta, szybki kontakt oraz portfolio poprzednich projektów.",
    project_web_planetroad_research_p5_lead: "Potem przeszedłem do",
    project_web_planetroad_research_p5_bold: "analizy ścieżki użytkownika",
    project_web_planetroad_research_p5_text:
      ", która pozwoliła mi lepiej zrozumieć, jakie działania podejmuje potencjalny klient od momentu wejścia na stronę do skontaktowania się z firmą. Zmapowanie tych etapów umożliwiło mi zaplanowanie logicznej i intuicyjnej struktury strony — tak, aby użytkownik mógł łatwo odnaleźć informacje o usługach, przeglądać realizacje i bezproblemowo przejść do sekcji kontaktu.",
    project_web_planetroad_research_p6_lead: "Równolegle przeprowadziłem",
    project_web_planetroad_research_p6_bold: "analizę SEO",
    project_web_planetroad_research_p6_text:
      " w celu poznania najczęściej wyszukiwanych fraz związanych z branżą drogową i projektowaniem infrastruktury. Wyniki pozwoliły mi dobrać odpowiednie słowa kluczowe do treści oraz zaplanować strukturę nagłówków i sekcji. Dzięki temu strona jest nie tylko atrakcyjna wizualnie, ale również lepiej widoczna w wyszukiwarkach internetowych.",
    project_web_planetroad_research_p7_lead: "Przeprowadziłem także",
    project_web_planetroad_research_p7_bold: "audyt techniczny starej strony",
    project_web_planetroad_research_p7_text:
      ", który ujawnił problemy z prędkością ładowania, nieczytelnością na urządzeniach mobilnych oraz brakiem wyraźnych ścieżek konwersji. Te obserwacje stały się podstawą do zaprojektowania nowego układu i optymalizacji strony pod kątem wydajności oraz zgodności z aktualnymi standardami webowymi.",
    project_web_planetroad_caption_research_insights: "Wnioski z badań",
    project_web_planetroad_ideation_heading: "Ideacja",
    project_web_planetroad_ideation_p1:
      "Na etapie ideacji przełożyłem wnioski z badań na konkretne założenia projektowe. Skupiłem się na zaprojektowaniu struktury strony, która w pierwszych sekundach odpowiada na kluczowe pytania użytkownika: czym firma się zajmuje, jakie realizacje ma za sobą i jak szybko można nawiązać kontakt.",
    project_web_planetroad_ideation_p2_lead: "Projekt zacząłem od",
    project_web_planetroad_ideation_p2_bold: "priorytetyzacji",
    project_web_planetroad_ideation_p2_text:
      " - jako główny cel wyznaczyłem ułatwienie klientom zapoznania się z firmą i ukończonymi przez nią projektami. Za nieco mniej ważną przyjąłem estetykę wykonania strony, mimo wszystko chciałem, aby przyciągała klienta swoim wizualnie przyjemnym dla oka wyglądem. Najniższy priorytet nadałem natomiast utrzymaniu spójności z innymi kanałami komunikacji (działając według wcześniej stworzonej Identyfikacji Wizualnej ten cel niejako sam się wypełnia).",
    project_web_planetroad_ideation_p3:
      "Równolegle pracowałem na niskopoziomowych wireframe’ach, testując różne układy treści i hierarchię informacji, zanim przeszedłem do finalnego interfejsu.",
    project_web_planetroad_ideation_p4:
      "Na etapie projektowania zadbałem o dostępność i czytelność elementów interfejsu, tworząc layouty zgodne z regułami WCAG. Stworzyłem Style Guide obejmujący kolory, typografię i komponenty, zapewniając spójność wizualną strony.",
    project_web_planetroad_caption_info_architecture: "Architektura Informacji",
    project_web_planetroad_caption_user_flow: "Główne User Flow",
    project_web_planetroad_caption_wf_hero: "Wireframe'y - Sekcja Hero",
    project_web_planetroad_caption_wf_team: "Wireframe'y - Sekcja Team",
    project_web_planetroad_caption_wf_numbers:
      "Wireframe'y - Sekcja W Liczbach",
    project_web_planetroad_caption_wf_experience:
      "Wireframe'y - Podstrona Doświadczenie",
    project_web_planetroad_caption_visual_identity:
      "Identyfikacja Wizualna PlanetRoad",
    project_web_planetroad_brand_identity_link_text:
      "Pełną Identyfikację Wizualną można zobaczyć pod ",
    project_web_planetroad_brand_identity_link_anchor: "tym linkiem",
    project_web_planetroad_iterations_heading: "Iteracje",
    project_web_planetroad_iterations_sub_old:
      "Tak strona wyglądała przed remake'iem:",
    project_web_planetroad_caption_old_www_1: "Strona przed remake'iem - cz.1",
    project_web_planetroad_caption_old_www_2: "Strona przed remake'iem - cz.2",
    project_web_planetroad_iterations_p1:
      "Jak widać na wyżej załączonym obrazku strona przekazywała podstawowe informacje o firmie, jednak nie dawała potencjalnemu przyszłemu kontrahentowi zbyt wielu szczegółów i nie przekonywała do podjęcia współpracy.",
    project_web_planetroad_iterations_p2:
      "Aby to zmienić zacząłem zmieniać firmową stronę od podstaw, aby stała się ona prawdziwą wizytówką firmy. Na początku zastanowiłem się...",
    project_web_planetroad_iter1_subheading:
      "Jak zbuduję zaufanie użytkownika od pierwszego kontaktu? — Rozszerzenie struktury strony",
    project_web_planetroad_iter1_p1_lead:
      "Na wczesnym etapie rozwoju strony stwierdziłem, że:",
    project_web_planetroad_iter1_p1_bold1:
      "Hero nie informuje użytkownika bezpośrednio czym się zajmujemy",
    project_web_planetroad_iter1_p1_text1:
      " - dla użytkownika, który trafi na naszą stronę poprzez organiczne wyszukiwanie może być to mylącę. Ponad to ",
    project_web_planetroad_iter1_p1_bold2:
      "strona główna nie daje wystarczająco dużo przestrzeni na budowanie zaufania i opowiedzenie historii firmy",
    project_web_planetroad_iter1_p1_text2:
      ". W rozmowach z CEO oraz podczas audytu konkurencji wyraźnie widać było, że firmy z branży drogowej, które skutecznie pozyskują klientów B2B, ",
    project_web_planetroad_iter1_p1_bold3:
      "eksponują ludzi stojących za marką oraz twarde liczby potwierdzające skalę działalności",
    project_web_planetroad_iter1_p2_text1:
      "Aby rozwiązać te problemy, w pierwszej iteracji stworzyłem sekcję Hero od zera, a także rozszerzyłem stronę główną o dwie nowe sekcje: ",
    project_web_planetroad_iter1_p2_bold1: "prezentację zespołu",
    project_web_planetroad_iter1_p2_text2:
      " (przygotowanie i obróbka zdjęć) oraz ",
    project_web_planetroad_iter1_p2_bold2: "doświadczenie firmy w liczbach",
    project_web_planetroad_iter1_p2_text3:
      " (podliczenie statystyk firmowych). Równolegle wydzieliłem także, dwie nowe podstrony ",
    project_web_planetroad_iter1_p2_bold3: "„Kontakt”",
    project_web_planetroad_iter1_p2_text4:
      ", który wcześniej był jedynie linkiem i ",
    project_web_planetroad_iter1_p2_bold4: "„Doświadczenie”",
    project_web_planetroad_iter1_p2_text5:
      ", przenosząc formularz kontaktowy ze strony głównej oraz dodając pierwsze referencje z wcześniejszych projektów.",
    project_web_planetroad_iter1_p3_text1:
      "Ten etap był również momentem edukacyjnym dla klienta — ",
    project_web_planetroad_iter1_p3_bold:
      "uświadomiłem, jak kluczowe jest systematyczne zbieranie referencji po zakończonych realizacjach",
    project_web_planetroad_iter1_p3_text2:
      ", które wcześniej schodziły na dalszy plan w natłoku bieżących obowiązków. W pryszłości stają się one jednak wizytówką i świadectwem aktywności firmy.",
    project_web_planetroad_iter1_p4_text1: "Efektem tych zmian było ",
    project_web_planetroad_iter1_p4_bold:
      "lepsze rozłożenie treści, wyraźniejsza hierarchia informacji i mocniejsze pierwsze wrażenie",
    project_web_planetroad_iter1_p4_text2:
      ", co bezpośrednio wspierało cele wizerunkowe i sprzedażowe strony.",
    project_web_planetroad_caption_hero_new: "Nowa sekcja Hero",
    project_web_planetroad_caption_numbers_new:
      'Nowa sekcja strony głównej - "PlanetRoad w liczbach"',
    project_web_planetroad_caption_team_new:
      'Nowa sekcja strony głównej - "Team"',
    project_web_planetroad_caption_contact_new: "Nowa podstrona - Kontakt",
    project_web_planetroad_caption_experience_new:
      "Nowa podstrona - Doświadczenie",
    project_web_planetroad_iter2_subheading:
      "Dlaczego szybkość strony ma znaczenie w B2B? — Optymalizacja wydajności i SEO",
    project_web_planetroad_iter2_p1:
      "Według najnowszych badań ponad 50% użytkowników opuści stronę gdy ładuje się ona dłużej niż 3 sekundy! Mając tą świadomość i wiedząc, że mogłoby to zniwelować wszelkie korzyści wynikające z posiadania strony dla firmy, po dodaniu dużej ilości nowej treści na stronę zdecydowałem się przetestować i w razie potrzeby poprawić performance strony.",
    project_web_planetroad_iter2_p2_text1:
      "Okazało się, że po rozbudowie struktury strony zauważalnym problemem stała się ",
    project_web_planetroad_iter2_p2_bold1: "spadająca wydajność strony",
    project_web_planetroad_iter2_p2_text2:
      ", szczególnie na urządzeniach mobilnych. Analiza w Google PageSpeed Insights oraz Lighthouse wykazała, że ",
    project_web_planetroad_iter2_p2_bold2:
      "ciężkie grafiki znacząco wydłużają czas ładowania",
    project_web_planetroad_iter2_p2_text3:
      ", co negatywnie wpływa zarówno na doświadczenie użytkownika, jak i pozycjonowanie.",
    project_web_planetroad_iter2_p3_text1:
      "W ramach tej iteracji przeprowadziłem ",
    project_web_planetroad_iter2_p3_bold: "gruntowną optymalizację techniczną",
    project_web_planetroad_iter2_p3_text2:
      ": konwersję zdjęć do formatu WebP, poprawę struktury HTML, optymalizację ładowania zasobów oraz korekty SEO na stronie aby zadbać o pozycjonowanie w google.",
    project_web_planetroad_iter2_p4_text1: "Po wdrożeniu zmian ",
    project_web_planetroad_iter2_p4_bold:
      "czas ładowania strony uległ wyraźnej poprawie",
    project_web_planetroad_iter2_p4_text2:
      ", a strona zaczęła spełniać zalecenia Core Web Vitals, co stworzyło solidne fundamenty pod dalszy rozwój i wysoką widoczność w wyszukiwarce. Ze względu na brak dostępu do archiwalnych raportów Lighthouse, efekty zostały oszacowane na podstawie realnych danych m.in. redukcji wagi zasobów oraz znajomości dobrych praktyk wydajnościowych.",
    project_web_planetroad_caption_optimalization: "Optymalizacja strony",
    project_web_planetroad_iter3_subheading:
      "Jak połączyć potrzeby użytkownika z celami biznesowymi? — Priorytetyzacja oferty",
    project_web_planetroad_iter3_p1_text1:
      "W kolejnej iteracji wspólnie z CEO zidentyfikowaliśmy, że ",
    project_web_planetroad_iter3_p1_bold1:
      "obenca oferta firmy jest mało konkretna i niejednoznaczna z perspektywy biznesowej",
    project_web_planetroad_iter3_p1_text2:
      ". Podczas warsztatów i rozmów strategicznych okazało się także, że ",
    project_web_planetroad_iter3_p1_bold2:
      "nie wszystkie usługi mają taką samą rentowność i znaczenie dla rozwoju firmy",
    project_web_planetroad_iter3_p2_text1: "W odpowiedzi na ten problem ",
    project_web_planetroad_iter3_p2_bold1:
      "sporządziliśmy kompletną listę wszystkich realizowanych usług",
    project_web_planetroad_iter3_p2_text2:
      ", które następnie zostały opisane, wycenione, oszacowane czasowo oraz ",
    project_web_planetroad_iter3_p2_bold2:
      "priorytetyzowane pod kątem opłacalności biznesowej",
    project_web_planetroad_iter3_p2_text3:
      ". Kolejnym krokiem było stworzenie dedykowanej podstrony dla realizacji, tak aby klienci mogli zorientować się we własnym zakresie w naszej ofercie jeszcze przed pierwszym kontaktem z firmą.",
    project_web_planetroad_iter3_p3_text1: "Efektem była ",
    project_web_planetroad_iter3_p3_bold: "klarowna, uporządkowana oferta",
    project_web_planetroad_iter3_p3_text2:
      ", która wspiera zarówno proces sprzedaży, jak i dalsze decyzje strategiczne.",
    project_web_planetroad_caption_realizacje: "Nowa podstrona - Realizacje",
    project_web_planetroad_iter4_subheading:
      "Jak pomagam użytkownikowi szybko znaleźć właściwą usługę? — Uproszczenie prezentacji realizacji",
    project_web_planetroad_iter4_p1_text1:
      "Analizując zachowania użytkowników i przeprowadzając szybkie testy użyteczności, zauważyłem, że ",
    project_web_planetroad_iter4_p1_bold1:
      "tematyczne grupowanie realizacji na stronie głównej było mało czytelne dla nowych użytkowników",
    project_web_planetroad_iter4_p1_text2:
      ". Osoby odwiedzające stronę chciały przede wszystkim szybko sprawdzić, ",
    project_web_planetroad_iter4_p1_bold2:
      "czy firma wykonuje konkretną usługę",
    project_web_planetroad_iter4_p2_text1: "Dlatego zdecydowałem się ",
    project_web_planetroad_iter4_p2_bold1:
      "zmniejszyć szczegółowość informacji na stronie głównej",
    project_web_planetroad_iter4_p2_text2: ", eksponując ",
    project_web_planetroad_iter4_p2_bold2: "konkretne nazwy usług",
    project_web_planetroad_iter4_p2_text3:
      ", a bardziej rozbudowane opisy przenosząc na dedykowane podstrony realizacji.",
    project_web_planetroad_iter4_p3_text1:
      "Podczas wielokrotnego przeglądania strony oraz prostych testów użyteczności doszedłem do wniosku, że ",
    project_web_planetroad_iter4_p3_bold:
      "warstwa wizualna nie zawsze wspierała zrozumienie prezentowanych usług",
    project_web_planetroad_iter4_p3_text2:
      ". Część zdjęć była odbierana jako zbyt ogólna lub niejednoznaczna, co utrudniało szybkie powiązanie obrazu z konkretną realizacją.",
    project_web_planetroad_iter4_p4_text1:
      "Przy ograniczonym budżecie zdecydowałem się na rozwiązanie pragmatyczne — ",
    project_web_planetroad_iter4_p4_bold:
      "samodzielnie przygotowałem scenografię i wykonałem zdjęcia",
    project_web_planetroad_iter4_p4_text2:
      ", które w czytelny sposób pokazywały charakter i zakres realizowanych usług.",
    project_web_planetroad_iter4_p5_text1: "Dzięki temu ",
    project_web_planetroad_iter4_p5_bold:
      "prezentacja oferty stała się spójniejsza",
    project_web_planetroad_iter4_p5_text2:
      ", a użytkownicy mogli szybciej zrozumieć, czym firma faktycznie się zajmuje — bez konieczności wczytywania się w szczegółowe opisy.",
    project_web_planetroad_iter4_p6_text1: "Po tej zmianie ",
    project_web_planetroad_iter4_p6_bold:
      "nawigacja stała się prostsza i bardziej intuicyjna",
    project_web_planetroad_iter4_p6_text2:
      ", a użytkownicy szybciej mogą odnaleźć interesujące ich obszary oferty.",
    project_web_planetroad_caption_offer_main:
      "Dostosowanie oferty na stronie głównej",
    project_web_planetroad_caption_photo_edit1:
      "Dostosowanie pierwszego obrazka pod firmę",
    project_web_planetroad_caption_photo_edit2:
      "Dostosowanie drugiego zdjęcia pod firmę",
    project_web_planetroad_caption_photo_take1:
      "Zrobienie pierwszego zdjęcia pod firmę",
    project_web_planetroad_caption_photo_take2:
      "Zrobienie drugiego zdjęcia pod firmę",
    project_web_planetroad_iter_h3_3:
      "Jak skracam czas decyzji w procesie przetargowym? — Sortowanie i grupowanie referencji",
    project_web_planetroad_iter_p_12:
      "W trakcie rozwoju strony firma ukończyła kilka projektów, a liczba referencji znacząco wzrosła. Wpłynęło to na <b>wydłużenie czasu wyszukiwania konkretnej referencji</b>",
    project_web_planetroad_iter_p_13:
      "Podczas rozmowy z CEO poprosiłem go o znalezienie najdłuższej referencji z zakresu PFU. Zadanie zajęło mu <b>około 3 minuty</b>, mimo znajomości struktury strony.",
    project_web_planetroad_iter_p_14:
      "Ta informacja jasno pokazała, że <b>obecny sposób prezentacji referencji nie wspiera realnych potrzeb biznesowych</b>. W odpowiedzi na ten problem <b>pogrupowałem referencje według rodzaju realizowanej usługi</b>, gdyż potencjalny klient firmy szuka wykonawcy z doświadczeniem w konkretnym typie projektu np. Program Funkcjonalno-Użytkowy o określonych w wymaganiach parametrach.",
    project_web_planetroad_iter_p_15:
      "Efektem było <b>znaczące skrócenie czasu wyszukiwania konkretnych referencji i wsparcie realnego procesu przetargowego</b>.",
    project_web_planetroad_fig_title_24: "Kategoryzacja Referencji",
    project_web_planetroad_iter_h3_4:
      "Jak wzmacniam poczucie bezpieczeństwa użytkownika? — Transparentność i RODO",
    project_web_planetroad_iter_p_16:
      "Wraz z rozwojem strony pojawiła się potrzeba <b>lepszego zadbania o transparentność przetwarzania danych osobowych</b>, zarówno z perspektywy formalnej, jak i wizerunkowej.",
    project_web_planetroad_iter_p_17:
      "Stworzyłem <b>dedykowaną stronę polityki prywatności</b>, jasno komunikującą sposób przetwarzania danych klientów. Teraz każdy zainteresowany może z poziomu dolnej nawigacji dostać się na tę podstronę i rozwiać swoje ewentualne wątpliwości.",
    project_web_planetroad_iter_p_18:
      "Efektem była <b>większa wiarygodność firmy i poczucie bezpieczeństwa po stronie użytkowników</b>.",
    project_web_planetroad_fig_title_25: "Podstrona z Polityką Prywatności",
    project_web_planetroad_iter_h3_5:
      "Jak pokazuję realną wartość pracy zespołu? — Wizualna prezentacja efektów realizacji",
    project_web_planetroad_iter_p_19:
      "Rewolucja Social Mediów ostatnich lat jasno pokazała, że <b>wizualne przedstawienie efektów pracy</b> mają ogromny wpływ na postrzeganą wartość usług, a krótkie filmiki to klucz do zdobycia uwagi odbiorcy.",
    project_web_planetroad_iter_p_20:
      'W odpowiedzi na powyższy wynik analizy wzbogaciłem podstrony "Doświadczenia" oraz "Realizacje" <b>o materiał wideo, pokazując proces - zdjęcia projektu oraz zdjęcia „przed i po”</b>.',
    project_web_planetroad_iter_p_21:
      "Dzięki temu potencjalni klienci mogą <b>lepiej zrozumieć zakres pracy firmy i zobaczyć finalny efekt inwestycji</b>.",
    project_web_planetroad_fig_title_26:
      "Sekcja przedstawiająca konkretną realizację",
    project_web_planetroad_final_h2: "Efekt Końcowy",
    project_web_planetroad_final_p_1:
      "✅ Zwiększyłem widoczność firmy w internecie i wygenerowałem zapytania od potencjalnych klientów dzięki przejrzystej prezentacji oferty i portfolio.",
    project_web_planetroad_final_p_2:
      "✅ Wyróżniłem firmę na tle konkurencji poprzez klarowne przedstawienie usług i dotychczasowych realizacji wymaganych w przetargach.",
    project_web_planetroad_final_p_3:
      "✅ Zapewniłem spójność strony z nową identyfikacją wizualną, wzmacniając profesjonalny wizerunek marki B2B.",
    project_web_planetroad_final_p_4:
      "✅ Poprawiłem doświadczenie użytkownika i szanse na konwersję dzięki intuicyjnej nawigacji i łatwemu kontaktowi.",
    project_web_planetroad_fig_title_27: "Widok strony PlanetRoad",
    project_web_planetroad_final_link_text:
      "Stronę w pełnym wymiarze można zobaczyć pod linkiem www.planetroad.pl.",
    project_web_planetroad_thumb_1: "Miniatura 1",
    project_web_planetroad_thumb_2: "Miniatura 2",
    project_web_planetroad_thumb_3: "Miniatura 3",
    project_web_planetroad_thumb_4: "Miniatura 4",
    project_web_planetroad_thumb_5: "Miniatura 5",
    project_web_planetroad_thumb_6: "Miniatura 6",
    project_web_planetroad_thumb_7: "Miniatura 7",
    project_web_planetroad_thumb_8: "Miniatura 8",
    project_web_planetroad_thumb_9: "Miniatura 9",
    project_web_planetroad_thumb_10: "Miniatura 10",
    project_web_planetroad_thumb_11: "Miniatura 11",
    project_web_planetroad_thumb_12: "Miniatura 12",
    project_web_planetroad_thumb_13: "Miniatura 13",
    project_web_planetroad_thumb_14: "Miniatura 14",
    project_web_planetroad_thumb_15: "Miniatura 15",
    project_web_planetroad_thumb_16: "Miniatura 16",
    project_web_planetroad_thumb_17: "Miniatura 17",
    project_web_planetroad_thumb_18: "Miniatura 18",
    project_web_planetroad_thumb_19: "Miniatura 19",
    project_web_planetroad_thumb_20: "Miniatura 20",
    project_web_planetroad_thumb_21: "Miniatura 21",
    project_web_planetroad_thumb_22: "Miniatura 22",
    project_web_planetroad_thumb_23: "Miniatura 23",
    project_web_planetroad_thumb_24: "Miniatura 24",
    project_web_planetroad_thumb_25: "Miniatura 25",
    project_web_planetroad_thumb_26: "Miniatura 26",
    project_web_planetroad_thumb_27: "Miniatura 27",
    project_web_planetroad_after_h2: "Po Projekcie",
    project_web_planetroad_after_h3_1: "Kluczowe Wnioski",
    project_web_planetroad_after_p_1_part1:
      "🧠 W projektach B2B kluczowe znaczenie ma ",
    project_web_planetroad_after_p_1_b:
      "jasna struktura informacji i szybkie budowanie zaufania",
    project_web_planetroad_after_p_1_part2:
      " — użytkownicy nie eksplorują strony, lecz skanują ją w poszukiwaniu potwierdzenia kompetencji i wiarygodności firmy.",
    project_web_planetroad_after_p_2:
      "🧠 Wydajność techniczna strony oraz dostępność (WCAG) nie są jedynie dodatkiem — w przypadku klientów z sektora publicznego i dużych inwestorów stają się realnym kryterium oceny profesjonalizmu firmy. Natomiast jeżeli chodzi o rankingi przetargowe, to wydajność i dostępność może się nawet przełożyć na podpisanie dużego kontraktu lub jego niepodpisanie, gdy zleceniodawcy strona nie będzie się ładować wzrasta ryzyko, że ją opuści.",
    project_web_planetroad_after_h3_2: "Następne Kroki",
    project_web_planetroad_after_p_3:
      "\n– każda realizacja mogłaby zostać rozwinięta o opis problemu, zakres prac, zastosowane rozwiązania oraz efekty, co jeszcze silniej wzmacniałoby ekspercki wizerunek marki i ułatwiało decyzje zakupowe.",
    project_web_planetroad_after_p_3_b:
      "🔜 Rozbudowa sekcji realizacji o case studies",
    project_web_planetroad_after_p_4:
      "\n– osobne strony dla projektów drogowych, organizacji ruchu czy konsultingu technicznego umożliwiłyby lepsze pozycjonowanie SEO i precyzyjne dopasowanie komunikacji do różnych grup klientów.",
    project_web_planetroad_after_p_4_b:
      "🔜 Wprowadzenie dedykowanych landing pages pod konkretne usługi",
    project_web_planetroad_after_p_5:
      "\n– sekcja artykułów lub aktualności branżowych (np. zmiany w przepisach, dobre praktyki projektowe) mogłaby budować długofalową widoczność w Google oraz pozycjonować PlanetRoad jako lidera wiedzy w branży.",
    project_web_planetroad_after_p_5_b:
      "🔜 Rozszerzenie strony o treści eksperckie",
    project_web_planetroad_after_p_6:
      "\n– dalsza analiza zachowań użytkowników (scroll depth, click maps, A/B testy) pozwoliłaby jeszcze lepiej dopasować układ strony i zwiększyć liczbę zapytań ofertowych bez konieczności zwiększania ruchu.",
    project_web_planetroad_after_p_6_b:
      "🔜 Zaawansowana analityka i optymalizacja konwersji",
    project_web_planetroad_navloop_text: "Zobacz kolejny projekt: ",
    project_web_planetroad_navloop_link: "Identyfikacja Wizualna - PlanetRoad",

    // PROJECT HABITBUBBL
    project_habitbubbl_badge: "Habit Bubbl",
    project_habitbubbl_title: "Progresywna Aplikacja Mobilna",
    project_habitbubbl_desc:
      "Kompleksowe narzędzie wspierające produktywność i realizację celów — progresywna aplikacja mobilna (PWA) łącząca zarządzanie zadaniami, budowanie nawyków i długoterminowe cele w jednym systemie.",
    project_habitbubbl_role_label: "Rola:",
    project_habitbubbl_role_val: "UX/UI Designer & Front-end Developer",
    project_habitbubbl_scope_label: "Zakres odpowiedzialności:",
    project_habitbubbl_scope_val:
      "Research, Architektura Informacji, Projekt UX/UI, Implementacja PWA, Badania Użyteczności, Optymalizacja Wydajności",
    project_habitbubbl_duration_label: "Czas trwania:",
    project_habitbubbl_duration_val: "4 miesiące",
    project_habitbubbl_methodology_label: "Metodyka:",
    project_habitbubbl_methodology_val:
      "Proces iteracyjny mobile-first i offline-first — od desk research, przez architekturę informacji i projekt UI w Figmie, po badania użyteczności i optymalizację w Google Lighthouse.",

    project_habitbubbl_about_h2: "1. O Projekcie",
    project_habitbubbl_context_title: "Kontekst",
    project_habitbubbl_about_p1:
      "<strong>Habit Bubbl</strong> to progresywna aplikacja mobilna (PWA) stworzona jako projekt dyplomowy na kierunku Informatyka (Uniwersytet Vizja) pod kierunkiem dra inż. Marcina Kacprowicza.",
    project_habitbubbl_problem_title: "Problem",
    project_habitbubbl_about_p3:
      "Grupa docelowa to osoby dorosłe aktywne zawodowo (ze szczególnym uwzględnieniem grupy wiekowej 18–30 lat), które mierzą się z brakiem motywacji, trudnościami w organizacji czasu, prokrastynacją oraz wysokim obciążeniem poznawczym wynikającym z łączenia pracy i obowiązków domowych — a dostępne na rynku aplikacje produktywnościowe nie oferują żadnego wsparcia, gdy zabraknie im samodyscypliny.",
    project_habitbubbl_goals_title: "Cel",
    project_habitbubbl_goal1:
      "🎯 <b>Skuteczna realizacja codziennych zadań i budowanie trwałych nawyków</b> prowadzących do osiągania długoterminowych celów, niezależnie od stopnia ich trudności.",
    project_habitbubbl_goal2:
      "🎯 <b>Duży nacisk na techniki UX</b> — zoptymalizowaną ścieżkę użytkownika, intuicyjny interfejs oraz elementy gamifikacji — wspierające regularność działań i poczucie realnego postępu.",
    project_habitbubbl_constraints_title: "Ograniczenia",
    project_habitbubbl_constraint1:
      "⚠️ <b>Niestabilność połączeń mobilnych</b> — aż 56% użytkowników smartfonów regularnie doświadcza problemów z siecią, więc aplikacja musiała w pełni działać offline.",
    project_habitbubbl_constraint2:
      "⚠️ <b>Realizacja solo w ramach pracy dyplomowej</b> — od researchu po wdrożenie i optymalizację, bez zespołu, w 4 miesiące.",
    project_habitbubbl_constraint3:
      "⚠️ <b>Minimalizacja obciążenia poznawczego</b> — interfejs musiał zostać prosty i intuicyjny mimo łączenia trzech warstw (zadania, nawyki, cele) w jednym systemie.",

    project_habitbubbl_research_h2: "2. Badania",
    project_habitbubbl_research_p1:
      "Zamiast ograniczonej, autorskiej ankiety wybrałem analizę danych już dostępnych w internecie (desk research), opierając założenia na globalnych raportach rynkowych (m.in. Statista, Google Web.dev, Global Wireless Solutions).",
    project_habitbubbl_research_p2:
      "Na rynku istnieje wiele aplikacji wspierających produktywność — m.in. Microsoft To Do, InnerGrow Habit czy Apple Reminders. Ich zaletą jest prostota, ale analiza konkurencji ujawniła wspólną, istotną lukę funkcjonalną:",
    project_habitbubbl_research_item1:
      "<strong>Brak mechanizmów motywacyjnych:</strong> gdy użytkownik nie wykona zadania, żadna z tych aplikacji nie oferuje wbudowanego sposobu na pomoc mu wrócić na właściwe tory.",
    project_habitbubbl_research_item2:
      "<strong>Brak powiązań strukturalnych:</strong> zadanie, nawyk i cel funkcjonują osobno — nie ma połączenia, które wspierałoby regularność i budowanie trwałych nawyków.",
    project_habitbubbl_research_item3:
      "<strong>Brak celów w ogóle:</strong> większość nawet najmniejszych zadań użytkownicy wykonują w imię większego celu, a żadna z analizowanych aplikacji go nie uwzględnia.",
    project_habitbubbl_research_p3:
      "Dane ilościowe potwierdziły też słuszność wyboru architektury: ponad połowa globalnego ruchu w internecie pochodzi z urządzeń mobilnych, a aż <strong>56%</strong> ich użytkowników regularnie doświadcza problemów ze stabilnością sieci. Skalę potencjału PWA pokazuje przykład Alibaby, która po przejściu na tę architekturę odnotowała średnio <strong>76-procentowy</strong> wzrost konwersji i zaangażowania użytkowników.",
    project_habitbubbl_research_p4:
      "Habit Bubbl odpowiada na zidentyfikowaną lukę zintegrowanym systemem, w którym pojedyncze działania budują nawyki, a te bezpośrednio przekładają się na postęp w realizacji celów głównych.",

    project_habitbubbl_ideation_h2: "3. Ideacja",
    project_habitbubbl_ideation_p1:
      "Architekturę informacji oparłem na czterech ekranach — Liście Zadań, Kalendarzu, Nawykach ze statystykami oraz Ekranie Bohatera — połączonych Tab Navigation, znaną użytkownikom z natywnych aplikacji mobilnych. Dla kluczowych funkcji przygotowałem w FigJam user flows, które przeanalizowałem pod kątem liczby kroków i potencjalnych pain pointów.",
    project_habitbubbl_ideation_p2:
      "Jedną z decyzji podjętych na tym etapie było celowe <strong>wykluczenie edycji pojedynczego zadania</strong> — żeby nie obciążać użytkownika nadmiarem opcji na ekranie głównym, edycję zostawiłem tylko dla powtarzalnych nawyków i długoterminowych celów.",
    project_habitbubbl_ideation_p3:
      "Pracę nad warstwą wizualną zacząłem od logo i style guide w stylu „Liquid Glass\", który wyznaczył ramy projektowe: spójną kolorystykę, minimalizację obciążenia poznawczego oraz dostępność (kontrast, wielkość elementów interaktywnych). Interfejs zaprojektowałem w Figmie — od makiet niskiej wierności, przez makiety wysokiej wierności, po interaktywny prototyp — weryfikując założenia jeszcze przed implementacją.",
    project_habitbubbl_ideation_stack_label:
      "<strong>Stos technologiczny i narzędzia:</strong>",
    project_habitbubbl_ideation_stack_item1:
      "<strong>Projektowanie UX/UI:</strong> Figma (makiety lo-fi/hi-fi, design system), FigJam (user flows, diagramy).",
    project_habitbubbl_ideation_stack_item2:
      "<strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+).",
    project_habitbubbl_ideation_stack_item3:
      "<strong>PWA i architektura:</strong> Service Worker (tryb offline, cache), Web App Manifest (instalowalność), IndexedDB (asynchroniczna baza lokalna, wydajniejsza niż Local Storage przy większej ilości danych).",
    project_habitbubbl_ideation_stack_item4:
      "<strong>Narzędzia i testy:</strong> Visual Studio Code, Chrome DevTools, Google Lighthouse.",

    project_habitbubbl_iterations_h2: "4. Iteracje",
    project_habitbubbl_iterations_p1:
      "Przeprowadziłem serię badań użyteczności — testy scenariuszowe, testy first-click oraz analizę heurystyczną — na grupie docelowych użytkowników. Ujawniły one złamania heurystyk elastyczności i obsługi błędów (H7, H9) oraz spójności (H4), a także bariery dostępności WCAG (kontrast poniżej 4.5:1 na neonowych elementach tła). Każdy znaleziony problem przełożył się na konkretną poprawkę:",
    project_habitbubbl_iterations_item1:
      "<strong>Zbyt agresywny kolor i nieczytelne tło:</strong> intensywna fuksja na ekranie startowym męczyła wzrok, a słabe przyciemnienie tła sprawiało, że teksty pod spodem przebijały i dekoncentrowały. Złagodziłem odcień i wdrożyłem pełne tło ponad warstwą danych w onboardingu.",
    project_habitbubbl_iterations_item2:
      "<strong>Gesty w przewodniku ignorowane:</strong> użytkownicy intuicyjnie próbowali przewijać tutorial gestem swipe zamiast klikać kropki nawigacyjne, a po włączeniu powiadomień brakowało potwierdzenia. Dodałem pełną obsługę swipe oraz systemowe potwierdzenie po aktywacji powiadomień.",
    project_habitbubbl_iterations_item3:
      "<strong>Niespójne nazewnictwo sekcji głównej:</strong> etykieta „today's tasks\" nie pasowała do zawartości, bo mieszała zadania i nawyki. Zmieniłem nazwę i nagłówek na „To Do Today\".",
    project_habitbubbl_iterations_item4:
      "<strong>Za małe tarcie przy usuwaniu:</strong> kliknięcie gdziekolwiek w kafelek natychmiast odznaczało nawyk, a usunięcie wymagało tylko dwóch kliknięć, bez cofnięcia. Wprowadziłem mechanizm przytrzymania — element znika dopiero po 3 sekundach.",
    project_habitbubbl_iterations_item5:
      "<strong>Brak feedbacku XP i błędy audio:</strong> po odhaczeniu zadania brakowało wyraźnej informacji o zdobytym XP, a dźwięk odhaczenia aktywował się błędnie też przy cofaniu zaznaczenia. Dodałem wyskakujący „bąbelek z XP\" i podpiąłem dźwięk pękającej bańki wyłącznie pod pozytywną akcję ukończenia.",
    project_habitbubbl_iterations_item6:
      "<strong>Blokująca się lista nawyków na mobile:</strong> elementy nachodziły na siebie, a interfejs okazjonalnie blokował się przy edycji kilku pozycji naraz. Zmieniłem architekturę na rozwijaną listę pionową, eliminując nakładanie się elementów.",
    project_habitbubbl_iterations_item7:
      "<strong>Spowolnienia głównego wątku:</strong> dynamiczne renderowanie wielu „bąbelków\" nawyków blokowało interfejs na słabszych urządzeniach (długie Long Tasks, słabe FCP/LCP). Zoptymalizowałem kod pod kątem Total Blocking Time i usunąłem render-blocking CSS z krytycznej ścieżki renderowania.",
    project_habitbubbl_hero_alt: "Habit Bubbl - baner projektu",
    project_habitbubbl_styleguide_alt: "Style Guide aplikacji Habit Bubbl",
    project_habitbubbl_styleguide_caption:
      "Style guide „Liquid Glass\" (1/2) — paleta kolorów i typografia",
    project_habitbubbl_styleguide2_alt:
      "Style Guide aplikacji Habit Bubbl - strona 2",
    project_habitbubbl_styleguide2_caption:
      "Style guide „Liquid Glass\" (2/2) — DNA komponentów, wersje logo, spacing",
    project_habitbubbl_lofi_alt: "Makiety niskiej wierności Habit Bubbl",
    project_habitbubbl_lofi_caption:
      "Makiety niskiej wierności — Today, Calendar, Habits, Hero, Modal",

    project_habitbubbl_storybook_h2: "5. Systematyzacja Komponentów: Storybook",
    project_habitbubbl_storybook_p1:
      "Po ukończeniu głównej wersji aplikacji chciałem usystematyzować swoją pracę i jeszcze mocniej skupić się na komponentach interfejsu — dlatego wdrożyłem Storybook (26 stories dla 5 komponentów) do istniejącej aplikacji vanilla JS/HTML/CSS, bez kroku budowania. Zamiast wymuszać framework, dobrałem narzędzie (@storybook/html-vite) do faktycznej architektury kodu — funkcje zwracające węzły DOM, które aplikacja już traktowała jak komponenty.",
    project_habitbubbl_storybook_item1:
      "<strong>Świadomy zakres, nie przepisywanie od zera:</strong> nie refaktoryzowałem całego ~2000-liniowego pliku UI na bibliotekę komponentów. Wydzieliłem tylko elementy z realnym powodem — rzeczywistą czystością funkcji albo potwierdzonym powielaniem tego samego znacznika na 4 podstronach.",
    project_habitbubbl_storybook_item2:
      "<strong>Izolacja komponentów ujawniła realne błędy:</strong> animacja pierścienia postępu była martwa przez niedopasowaną nazwę klasy CSS (naprawione), a dodatek do testowania dostępności wykrył brakujące atrybuty „for\" w etykietach formularza — po znalezieniu 2 z 8 przypadków, przejrzałem cały modal i naprawiłem wszystkie osiem.",
    project_habitbubbl_storybook_item3:
      "<strong>Redesign „premium glass\" bez nowych wartości:</strong> podniosłem bąbelki zadań o jeden poziom na istniejącej pięciopoziomowej skali tokenów „--glass-*\" (tło, rozmycie, obramowanie, cień) — żadna wartość nie została wymyślona od nowa.",
    project_habitbubbl_storybook_link: "Zobacz Storybook →",

    project_habitbubbl_final_h2: "6. Efekt Końcowy",
    project_habitbubbl_final_p1:
      "Aplikacja składa się z czterech głównych modułów wspierających produktywność:",
    project_habitbubbl_final_item1:
      "<strong>Lista Zadań:</strong> Zarządzanie bieżącymi obowiązkami w danym dniu.",
    project_habitbubbl_final_item2:
      "<strong>Kalendarz:</strong> Planowanie przyszłych działań oraz weryfikacja historii zadań.",
    project_habitbubbl_final_item3:
      "<strong>Ekran Nawyków i Statystyk:</strong> Śledzenie regularności i analiza stopnia utrwalenia nawyków.",
    project_habitbubbl_final_item4:
      "<strong>Ekran Bohatera (Gamifikacja):</strong> Zarządzanie długoterminowymi celami, podgląd statystyk rozwoju oraz poziomu zaawansowania użytkownika.",
    project_habitbubbl_screenscore_caption:
      "Splash Screen, Today, Calendar oraz Habits",
    project_habitbubbl_screens_caption:
      "Onboarding, dodawanie nawyku, przewodnik i system nagród (Level Up)",
    project_habitbubbl_final_p2:
      "Optymalizacja wydajności — podział jednego pliku CSS (86 KB) na mniejsze arkusze ładowane tylko tam, gdzie są potrzebne, lokalne hostowanie czcionek zamiast Google Fonts, minifikacja CSS oraz konwersja grafik do WebP i dźwięków do MP3 — przełożyła się na wymierną poprawę wyników Google Lighthouse:",
    project_habitbubbl_impact_card1_number: "-52%",
    project_habitbubbl_impact_card1_label:
      "First Contentful Paint: z 2,35 s do 1,13 s",
    project_habitbubbl_impact_card2_number: "-52%",
    project_habitbubbl_impact_card2_label:
      "Largest Contentful Paint: z 2,85 s do 1,38 s",
    project_habitbubbl_impact_card3_number: "100/100",
    project_habitbubbl_impact_card3_label:
      "wynik Google Lighthouse w niemal wszystkich kategoriach",
    project_habitbubbl_impact_card4_number: "do -44%",
    project_habitbubbl_impact_card4_label:
      "mniej pobieranych stylów CSS na podstronę",

    project_habitbubbl_after_h2: "7. Po Projekcie",
    project_habitbubbl_takeaways_h3: "Kluczowe Wnioski",
    project_habitbubbl_after_p1:
      "🧠 Wykorzystanie architektury PWA w połączeniu z zasadami UX oraz mechanizmami grywalizacji pozwoliło stworzyć lekkie, wydajne i niezależne od połączenia internetowego narzędzie. Połączenie zadań, nawyków i celów w jednym systemie skutecznie redukuje obciążenie poznawcze i pomaga utrzymać długofalową motywację użytkowników.",
    project_habitbubbl_after_p2:
      "🔁 Implementacja w PWA pozwoliła mi przetestować każdą funkcję w praktyce, także w trybie offline, i wprowadzać poprawki na podstawie własnych obserwacji zachowań użytkowników — nie tylko założeń projektowych.",
    project_habitbubbl_roadmap_h3: "Perspektywy Rozwoju",
    project_habitbubbl_roadmap_p1:
      "Trzy kierunki, w które rozwijałbym Habit Bubbl dalej:",
    project_habitbubbl_roadmap_item1:
      "🔜 <strong>Grywalizacja społecznościowa (priorytet):</strong> konta z synchronizacją w chmurze, ekran znajomych ze wspólnymi wyzwaniami i rywalizacją, system losowych nagród z personalizowanymi awatarami.",
    project_habitbubbl_roadmap_item2:
      "🔜 <strong>Rozbudowa systemu RPG i nagród:</strong> naliczanie XP per konkretny nawyk z rozwojem powiązanej umiejętności Bohatera, odblokowywane skórki interfejsu.",
    project_habitbubbl_roadmap_item3:
      "🔜 <strong>Optymalizacja UX i danych:</strong> system flag do kategoryzacji i filtrowania zadań, zaawansowane sortowanie celów wg terminu realizacji, zapamiętywanie ulubionych lokalizacji dla szybszego planowania.",
    project_habitbubbl_navloop_text: "Zobacz kolejny projekt:",
    project_habitbubbl_navloop_link: "Audyt WKDZIK.PL",

    // PROJECT VI PLANETROAD
    // Identyfikacja Wizualna - PlanetRoad
    project_vi_planetroad_title: "Identyfikacja Wizualna",
    project_vi_planetroad_subtitle: "PlanetRoad",
    project_vi_planetroad_intro:
      "PlanetRoad jest firmą projektującą drogi w Polsce od niespełna 30 lat. W internecie firma posiadała jedynie prostą stronę internetową i nie dawała klientowi większej szansy się poznać ani zapaść w pamięć z pozytywnej strony. Współpracę z firmą zacząłem od stworzenia identyfikacji wizualnej, która pomoże firmie wejść w świat cyfrowy i zaistnieć w internecie.",
    project_vi_planetroad_img_alt_logo: "Logo PlanetRoad",
    project_vi_planetroad_goal_title: "Cel",
    project_vi_planetroad_goal_1_b:
      "Stworzenie spójnej identyfikacji wizualnej",
    project_vi_planetroad_goal_1_text:
      " wspierającej profesjonalny i wiarygodny wizerunek firmy w środowisku cyfrowym.",
    project_vi_planetroad_goal_2_b:
      "Ujednolicenie sposobu komunikacji wizualnej",
    project_vi_planetroad_goal_2_text:
      " w różnych kanałach (druk, web, social media).",
    project_vi_planetroad_goal_3_b:
      "Przygotowanie marki do dalszej ekspansji cyfrowej",
    project_vi_planetroad_goal_3_text:
      " (np. przyszłe kampanie, portfolio online, przetargi publiczne).",
    project_vi_planetroad_constraints_title: "Ograniczenia",
    project_vi_planetroad_constraint_1_b: "Firma działa w sektorze B2B",
    project_vi_planetroad_constraint_1_text:
      ", co wymaga utrzymania wizerunku profesjonalnego, stonowanego i wiarygodnego.",
    project_vi_planetroad_constraint_2_part1: " Nowa ",
    project_vi_planetroad_constraint_2_b:
      "identyfikacja wizualna musi pozostać spójna z istniejącym logo",
    project_vi_planetroad_constraint_2_part2:
      ", które firma zdecydowała się zachować podczas tworzenia nowej strony internetowej i wdrażania komunikacji w mediach społecznościowych.",
    project_vi_planetroad_constraint_3_b:
      "Brak wcześniejszego doświadczenia firmy",
    project_vi_planetroad_constraint_3_text:
      " w komunikacji wizualnej i marketingu cyfrowym",
    project_vi_planetroad_constraint_4_b: "Konieczność utrzymania ciągłości",
    project_vi_planetroad_constraint_4_text:
      " w działaniach firmy w trakcie wdrożenia",
    project_vi_planetroad_process_title: "Proces Projektowy",
    project_vi_planetroad_step1_title: "01 Badania i Analiza",
    project_vi_planetroad_step1_p1:
      "Projekt identyfikacji wizualnej dla PlanetRoad rozpocząłem od serii analiz i rozmów z przedstawicielami firmy, w tym wywiadu z CEO. Celem było zrozumienie, jak marka funkcjonuje na rynku i znalezienie możliwości w jaki sposób może wyróżnić się spośród konkurencji w swojej branży.",
    project_vi_planetroad_step1_p2_b1: "Wywiad z CEO",
    project_vi_planetroad_step1_p2_part1:
      " powiedział mi między innymi, że PlanetRoad skupia się głównie na ",
    project_vi_planetroad_step1_p2_b2: "współpracy B2B",
    project_vi_planetroad_step1_p2_part2:
      " - z większymi firmami (np. Developerami) oraz jednostkami samorządowymi. Dlatego priorytetem projektowym stało się stworzenie wizerunku opartego na profesjonalizmie, zaufaniu i wiarygodności, przy jednoczesnym zachowaniu nowoczesnego charakteru.",
    project_vi_planetroad_step1_p3_part1: "Następnie przeprowadziłem ",
    project_vi_planetroad_step1_p3_b: "analizę konkurencji",
    project_vi_planetroad_step1_p3_part2:
      " w branży drogowej, która ujawniła dużą powtarzalność wizualną - wiele firm korzystało z podobnych układów stron i schematycznych kompozycji. Postanowiłem więc zaprojektować system identyfikacji, który wyróżni PlanetRoad, zachowując jednocześnie czytelność, funkcjonalność i wysoką jakość wizualną oddającą również tożsamość marki.",
    project_vi_planetroad_step1_p4_b:
      "Analiza psychologicznego znaczenia kolorów",
    project_vi_planetroad_step1_p4_text:
      " wykorzystywanych w logo potwierdziła trafność ich wyboru:",
    project_vi_planetroad_step1_color_blue:
      "• Błękit - budzi zaufanie i spokój, kojarzy się z nowoczesnością i innowacyjnością.",
    project_vi_planetroad_step1_color_navy:
      "• Granat - symbolizuje profesjonalizm i odpowiedzialność.",
    project_vi_planetroad_step1_color_summary:
      "W połączeniu tworzą one wiarygodny i spójny zestaw barw, wspierający komunikację marki.",
    project_vi_planetroad_step1_p5_part1: "Przygotowując się do stworzenia ",
    project_vi_planetroad_step1_p5_b: "alternatywnych wersji Logo",
    project_vi_planetroad_step1_p5_part2:
      " zagłębiłem się w praktyki globalnych marek (m.in. Coca-Cola, Disney, Chanel) i przeanalizowałem ich podejście do tworzenia systemów identyfikacji o wysokiej elastyczności. Wnioski z tej analizy stały się podstawą do zaprojektowania zestawu wariantów logo o różnym stopniu szczegółowości, zachowujących spójność i rozpoznawalność w różnych kontekstach.",
    project_vi_planetroad_step1_p6:
      "Kolejno zbadałem oczekiwania użytkowników i najczęściej wyszukiwane informacje o firmach z branży, aby zapewnić użyteczność nowej strony internetowej pod kątem UX i SEO. Analiza treści pokazała, że kluczowe są: przejrzysta oferta, szybki kontakt oraz portfolio projektów.",
    project_vi_planetroad_step1_p7:
      "Na koniec przeanalizowałem także komunikację branży w mediach społecznościowych, by opracować wizualny styl dopasowany do specyfiki kanałów, zachowując spójność z identyfikacją wizualną i stroną internetową.",
    project_vi_planetroad_step2_title: "02 Strategia",
    project_vi_planetroad_step2_p1:
      "Na podstawie wyników badań opracowałem strategię wizualną, której celem było połączenie profesjonalnego wizerunku z nowoczesnym charakterem i prostotą form.",
    project_vi_planetroad_step2_p2:
      "Postawiłem na minimalizm i klarowną komunikację wizualną — każda decyzja projektowa (od doboru kolorów po typografię) wynikała z założenia, że marka ma wzbudzać zaufanie, stabilność i nowoczesność.",
    project_vi_planetroad_step2_p3:
      "System identyfikacji wizualnej został zaprojektowany jako spójny, skalowalny i elastyczny — tak, aby można go było łatwo wdrażać w materiałach cyfrowych i drukowanych, na stronie internetowej oraz w kanałach social media.",
    project_vi_planetroad_step3_colors_title: "03 Design - Paleta Barw",
    project_vi_planetroad_step3_colors_p1:
      "Na bazie dwóch barw, które zostały użyte jako motyw przewodni dla logo stworzyłem całą gamę odcieni, aby móc swobodnie i elastycznie zarządząć treściami tworzonymi dla firmy. Opracowałem paletę odcieni opartą na neutralnych szarościach i niebieskim, kojarzącym się z technologią, ale przede wszystkim z zaufaniem.",
    project_vi_planetroad_img_alt_colors1:
      "Odcienie Barw Brandowych w Identyfikacji Wizualnej PlanetRoad",
    project_vi_planetroad_img_alt_colors2:
      "Odcienie Barw neutralnych i semantycznych w Identyfikacji Wizualnej PlanetRoad",
    project_vi_planetroad_step3_logo_title: "03 Design - Logo",
    project_vi_planetroad_step3_logo_p1:
      "Alternatywne wersje logo stworzyłem w celu uzyskania elastyczności w wykorzystywaniu logo w różnego typu materiałach firmowych.",
    project_vi_planetroad_step3_logo_p2:
      "Stworzyłem zarówno wariant dla ciemnego tła, jak i różne rozmiary Logo, które są zamiennie wykorzystywane zależnie od zapotrzebowania i miejsca przeznaczonego na logo.",
    project_vi_planetroad_img_alt_logo_variants:
      "Nowe wersje kolorystyczne i wielkościowe logo PlanetRoad opracowane w ramach identyfikacji wizualnej.",
    project_vi_planetroad_step3_fonts_title: "03 Design - Fonty",
    project_vi_planetroad_step3_fonts_p1:
      "Aby font wspierał profesjonalny charakter firmy zdecydowałem się wybrać nieskomplikowany, czytelny i elegancki font Inter. Łączy on dwie najważniejsze dla danego projektu cechy czyli czytelność i elegancję.",
    project_vi_planetroad_step3_fonts_p2_part1: "Na pomocniczy font wybrałem ",
    project_vi_planetroad_step3_fonts_p2_part2:
      ". Jego zadaniem jest znaczące przełamanie profesjonalnej i stonowanej estetyki, a zarazem zwrócenie uwagi użytkownika na dany fragment tekstu.",
    project_vi_planetroad_img_alt_fonts:
      "Czcionki użytkowane przez PlanetRoad wyselekcjonowane w ramach Identyfikacji Wizualnej",
    project_vi_planetroad_step4_website_title:
      "04 Wdrożenie - Nowa strona Internetowa",
    project_vi_planetroad_step4_website_p1_part1:
      "Nowa strona została zaprojektowana w oparciu o identyfikację wizualną firmy. Posiada przejrzysty układ, spójną komunikację i intuicyjną nawigację. Serdecznie zachęcam do odwiedzenia strony i zagłębienia się w projekt pod adresem: ",
    project_vi_planetroad_img_alt_website:
      "Widoki sekcji Hero poszczególnych podstron, a także strony głównej strony internetowej PlanetRoad",
    project_vi_planetroad_step4_sm_title:
      "04 Wdrożenie - Social media branding",
    project_vi_planetroad_step4_sm_p1:
      "Social media branding: stworzyłem grafiki i wdrożyłem spójny styl wizualny, dzięki czemu firma mogła zaistnieć w kanałach komunikacji, których wcześniej nie miała.",
    project_vi_planetroad_img_alt_sm:
      "Widoki sekcji Hero poszczególnych podstron, a także strony głównej strony internetowej PlanetRoad",
    project_vi_planetroad_behance_text1: "Odwiedź mój projekt na ",
    project_vi_planetroad_behance_text2:
      ", aby zobaczyć interaktywny prototyp.",
    project_vi_planetroad_result_title: "Efekt Końcowy",
    project_vi_planetroad_result_1:
      "✅ Firma PlanetRoad otrzymała spójną i profesjonalną identyfikację wizualną.",
    project_vi_planetroad_result_2:
      "✅ Nowa strona i pojawienie się w social mediach pomagają firmie zaistnieć w internecie, czego wcześniej brakowało.",
    project_vi_planetroad_result_3:
      "✅ Wdrożona identyfikacja wizualna pozwala firmie budować zaufanie i ekspercki wizerunek w branży projektów drogowych.",
    project_vi_planetroad_thumb_1: "Miniatura 1",
    project_vi_planetroad_thumb_2: "Miniatura 2",
    project_vi_planetroad_thumb_3: "Miniatura 3",
    project_vi_planetroad_thumb_4: "Miniatura 4",
    project_vi_planetroad_thumb_5: "Miniatura 5",
    project_vi_planetroad_thumb_6: "Miniatura 6",
    project_vi_planetroad_thumb_7: "Miniatura 7",
    project_vi_planetroad_thumb_8: "Miniatura 8",
    project_vi_planetroad_after_title: "Po Projekcie",
    project_vi_planetroad_takeaways_title: "Kluczowe Wnioski",
    project_vi_planetroad_takeaway_part1:
      "Projektowanie elastycznego systemowo sygnetu i spójnej palety barw zapewniających ",
    project_vi_planetroad_takeaway_b:
      "skalowalność na każdym punkcie styku z marką",
    project_vi_planetroad_takeaway_part2:
      " jest fundamentem silnej tożsamości. Dobry branding musi funkcjonować równie precyzyjnie jako mikroskopijny favicon w przeglądarce, cyfrowy avatar w social mediach, jak i na wielkoformatowych materiałach drukowanych.",
    project_vi_planetroad_next_steps_title: "Następne Kroki",
    project_vi_planetroad_next_2_b:
      "System szablonów dla Social Media & Marketingu",
    project_vi_planetroad_next_2_text:
      " - przygotowanie spójnych komponentów graficznych w Figmie dla postów, relacji (Stories) oraz bannerów reklamowych, zapewniających łatwą komunikację wizualną.",
    project_vi_planetroad_next_3_b: "Materiały Drukowane i Merch",
    project_vi_planetroad_next_3_text:
      " - przeniesienie identyfikacji na fizyczne nośniki reklamy: wizytówki, papier firmowy oraz wzorniki dokumentów.",
    project_vi_planetroad_next_project_label: "Zobacz kolejny projekt:",
    project_vi_planetroad_next_project_link: "Customer Journey - Betfan",
  },
  en: {
    // meta titles
    meta_main: "Marek Wietecki | Main Page",
    meta_about: "Marek Wietecki | About Me",
    meta_offer: "Marek Wietecki | Offer",
    meta_privacy: "Marek Wietecki | Privacy Policy",

    //   nav_home: "Home",
    nav_offer: "Offer",
    nav_about: "About me",
    nav_projects: "Projects",

    cookies_text:
      "🍪 I use cookies to analyze traffic and to continuously improve the website.",
    cookies_primary_button: "Accept",
    cookies_secondary_button: "Reject",

    footer_link_main: "Main",
    footer_link_projects: "Projects",
    footer_link_contact: "Contact",
    footer_link_cv: "CV",
    footer_link_privacy: "Privacy Policy",
    cv_download_button: "Download CV",
    cv_update_note:
      "The CV is part of the portfolio and I keep it up to date — the downloaded file always reflects the latest version.",
    cv_print_hint:
      "Tip: uncheck “Headers and footers” in the print dialog for a cleaner export.",

    cv_role: "UX & Product Designer",

    cv_about_h2: "About Me",
    cv_about_p1:
      "I'm a <strong>UX & Product Designer</strong> and computer science engineer with completed specializations in User Experience & Project Management and Mobile App Design. I combine knowledge of <strong>digital product design</strong> with a grounding in <strong>programming</strong> and <strong>online marketing</strong>, which lets me understand digital products holistically.",
    cv_about_p2:
      "I have over 15 years of experience in <strong>teamwork</strong> — from engineering projects to a variety of group initiatives. It has taught me to nurture relationships and trust within teams, communicate clearly, and take responsibility for the shared outcome.",

    cv_details_h2: "Details",
    cv_details_portfolio_label: "PORTFOLIO",
    cv_details_mail_label: "MAIL",
    cv_details_phone_label: "PHONE",
    cv_details_address_label: "ADDRESS",
    cv_details_address_value: "Łomianki, Poland",

    cv_skills_h2: "Skills",
    cv_skill_figma: "Figma",
    cv_skill_customer_journey: "Customer Journey",
    cv_skill_user_research: "User Research",
    cv_skill_product_strategy: "Product Strategy",
    cv_skill_agile: "Agile",
    cv_skill_usability_testing: "Usability Testing",
    cv_skill_design_systems: "Design Systems",
    cv_skill_claude_code: "Claude Code",
    cv_skill_html_css_js: "HTML & CSS/JS",
    cv_skill_react_native: "React Native",
    cv_skill_ga4: "GA4",
    cv_skill_graphic_design: "Graphic Design",
    cv_skill_git: "Git",
    cv_skill_mobile_design: "Mobile Design (iOS & Android)",
    cv_skill_motion_design: "Motion Design",

    cv_languages_h2: "Languages",
    cv_lang_polish_name: "Polish",
    cv_lang_polish_level: "– native",
    cv_lang_english_name: "English",
    cv_lang_english_level: "– C1",
    cv_lang_spanish_name: "Spanish",
    cv_lang_spanish_level: "– A2/B1",
    cv_lang_german_name: "German",
    cv_lang_german_level: "– A1",

    cv_experience_h2: "Experience",

    cv_exp1_title: "UX Designer (Freelance)",
    cv_exp1_item1:
      "End-to-end design and implementation of websites and digital interfaces for individual clients.",
    cv_exp1_item2:
      "Gathering business requirements and running workshops/consultations with clients to define project goals and end-user needs.",
    cv_exp1_item3:
      "Creating wireframes and high-fidelity prototypes in Figma, ensuring visual consistency (UI) and intuitive information architecture.",
    cv_exp1_item4:
      "Co-shaping clients' business growth strategy by translating their market goals into effective product solutions, information architecture, and measurable conversion paths.",
    cv_exp1_item5:
      "Managing project timelines, budgets, and client communication at every stage of the product lifecycle.",
    cv_exp1_date: "June 2025 – Present",
    cv_exp1_location: "Warsaw",

    cv_exp2_title: "UX & Web Designer, PlanetRoad",
    cv_exp2_item1:
      "Competitor analysis, target audience definition, and analysis of business needs and client goals.",
    cv_exp2_item2:
      "Defining user problems, designing user flows, mapping user experience, and identifying key touchpoints between users and the product.",
    cv_exp2_item3:
      "Designing a responsive interface for the company website following a Mobile First approach, and implementing the designed website.",
    cv_exp2_item4:
      "Aligning the site with WCAG accessibility guidelines, running moderated and unmoderated usability tests, and optimizing the site for SEO.",
    cv_exp2_item5:
      "Iteratively improving the design based on usability testing and client requirements.",
    cv_exp2_item6:
      "Building the brand's visual identity, designing graphics for the company, and setting up and configuring the company's social media channels.",
    cv_exp2_date: "May 2024 – Present",
    cv_exp2_location: "Warsaw",

    cv_exp3_title: "Private Tutoring (Mathematics and English)",
    cv_exp3_item1:
      "Developing the ability to explain complex and abstract topics in an accessible way.",
    cv_exp3_item2:
      "Diagnosing individual learning barriers (needs analysis) and flexibly adapting methods to each student.",
    cv_exp3_item3:
      "Building patience, empathy, and active-listening skills.",
    cv_exp3_date: "November 2023 – Present",
    cv_exp3_location: "Łomianki",

    cv_projects_h2: "Projects",
    cv_proj1_title: "Monexo — Mobile App",
    cv_proj1_desc:
      "A currency-exchange mobile app designed as a response to real problems in existing FinTech products. Full process from research to usability testing.",
    cv_proj1_tag: "Fintech · Mobile App · Figma",
    cv_proj2_title: "HabitBubbl — Progressive Mobile App",
    cv_proj2_desc:
      "A complete toolkit for habit-building and goal management — an engineering thesis project combining UX/UI, information architecture, and PWA implementation.",
    cv_proj2_tag: "PWA · Productivity · Figma · Storybook",
    cv_proj3_title: "Customer Journey Map — Betfan",
    cv_proj3_desc:
      "Mapped the user journey of a sports betting platform from ad to bet slip and designed motivational mechanisms to build a return-to-app habit.",
    cv_proj3_tag: "Customer Journey · Gamification",
    cv_proj4_title: "WKDZIK.pl Audit",
    cv_proj4_desc:
      "Self-initiated UX and performance audit of an e-commerce store to identify details limiting real sales.",
    cv_proj4_tag: "UX Audit · E-commerce",

    cv_education_h2: "Education",

    cv_edu1_title: "Computer Science Engineering, Vizja University",
    cv_edu1_item1: "Specialization in User Experience & Project Management.",
    cv_edu1_item2: "Specialization in Mobile App Design.",
    cv_edu1_date: "October 2022 – July 2026",
    cv_edu1_location: "Warsaw",

    cv_edu2_title: "Secondary Education, King Jan III Sobieski High School",
    cv_edu2_item1: "Advanced Mathematics and English.",
    cv_edu2_date: "September 2019 – May 2022",
    cv_edu2_location: "Warsaw",

    cv_certs_h2: "Certificates",

    cv_cert1_desc:
      "Learning to use ChatGPT, Midjourney, Hotjar, and Formless to streamline the design process.",
    cv_cert1_date: "December 2025",

    cv_cert2_desc:
      "Understanding process as a product that evolves and adapts to the needs of a given project type or client.",
    cv_cert2_date: "November 2025",

    cv_cert3_desc:
      "Certificate confirming English language proficiency at the C1 level.",
    cv_cert3_date: "July 2025",

    cv_cert4_desc:
      "The role of the prototype in the product lifecycle. Learning to build interactive prototypes in Figma and ProtoPie.",
    cv_cert4_date: "October 2024",

    cv_cert5_desc:
      "Learning to build design systems in practice, using tools that streamline the design system creation process.",
    cv_cert5_date: "September 2024",

    cv_cert6_title: "Training: Running Design Thinking Workshops",
    cv_cert6_desc:
      "Learning to apply the Design Thinking method to run effective workshops and engage stakeholders.",
    cv_cert6_date: "July 2024",

    cv_cert7_desc:
      "Hands-on learning of nearly 30 design techniques and tools forming the foundation of a UX Designer's work.",
    cv_cert7_date: "January 2024 – April 2024",

    cv_cert8_desc: "Learning the Webflow tool for no-code website design.",
    cv_cert8_date: "January 2024",

    cv_cert9_desc: "Learning to design mobile interfaces in Figma.",
    cv_cert9_date: "December 2023",

    cv_cert10_title: "Skills for Tomorrow – Online Marketing, Google",
    cv_cert10_desc:
      "Comprehensive, hands-on learning across various areas of online marketing, including User Experience.",
    cv_cert10_date: "June 2023",

    cv_interests_h2: "Interests",
    cv_interest1: "Football",
    cv_interest2: "Reading Books",
    cv_interest3: "Language Learning",

    footer_copyright: "© Marek Wietecki 2026. Copyrighted content.",

    hero_hi: "Hello!",
    hero_hi2: "From over 3 years i'm working as",
    hero_title: "I design simply for users and effectively for business.",
    hero_subtitle:
      "I create digital products that combine intuitive user experiences with real business profits. I believe that in the world of interfaces, it's the small details that make the biggest difference.",
    hero_button_primary: "Check out my projects",
    hero_button_secondary: "Check out my offer",

    // hero — business / recruiter fork
    hero_fork_kicker: "Hi! Great to see you.",
    hero_fork_title: "What brings you here?",
    hero_fork_subtitle: "Pick a path and I'll tailor what you see.",
    hero_fork_business_tag: "For businesses",
    hero_fork_business_title: "I'm looking for a designer",
    hero_fork_business_desc:
      "See the offer, process, and how I can help your business.",
    hero_fork_business_cta: "See how I can help",
    hero_fork_recruiter_tag: "For recruiters",
    hero_fork_recruiter_title: "I'm browsing the portfolio",
    hero_fork_recruiter_desc:
      "See my projects, experience, and get to know me better.",
    hero_fork_recruiter_cta: "See my projects",
    hero_fork_skip_prefix: "Prefer to look around yourself?",
    hero_fork_skip_link: "See the page without the split",
    audience_chip_prefix: "Showing:",
    hero_fork_switch_short: "Switch",

    // hero — business variant
    hero_business_kicker: "Looking for a designer?",
    hero_business_title: "I'll design a product that sells itself.",
    hero_business_subtitle:
      "From research to final UI — I help businesses build digital products users understand from the first click.",
    hero_business_button_primary: "See the offer",
    hero_business_button_secondary: "Book a call",

    // hero — recruiter variant
    hero_recruiter_subtitle:
      "See my projects, experience, and get to know me better.",
    hero_recruiter_button_primary: "See my projects",
    hero_recruiter_button_secondary: "Get to know me",

    // settings — audience switcher
    settings_audience_business: "For businesses",
    settings_audience_recruiter: "For recruiters",

    projects_title: "My Projects",
    projects_monexo_title: "Monexo Mobile App",
    projects_monexo_subtitle:
      "How i fulfilled a gap in the online exchange market by creating a simple app with transparent approach?",
    projects_planetroad_website_title: "PlanetRoad Website",
    projects_planetroad_website_subtitle:
      "How i rebuild company's website, so it allows clients aknowledging full offer and experience of PlanetRoad?",
    projects_zpsiegonanasze_title: "Landing Page Z Psiego Na Nasze",
    projects_zpsiegonanasze_subtitle:
      "How i build business growth strategy thanks to a quality landing page?",
    projects_habitbubbl_title: "Habit Bubbl Progressive App",
    projects_habitbubbl_subtitle:
      "How i build an app, which helps people love productivity?",
    projects_planetroad_visualidentity_title: "PlanetRoad Visual Identity",
    projects_planetroad_visualidentity_subtitle:
      "How i introduced PlanetRoad to the digital world, creating a coherent visual identity?",
    projects_betfan_badge: "Betfan",
    projects_betfan_title: "Customer Journey Map & Retention Gamification",
    projects_betfan_subtitle:
      "How to turn an occasional player into an engaged fan?",
    projects_betfan_desc:
      "BETFAN is a sports betting platform focused on emotions, progress, and quick bet placement to build high player retention. The project involved mapping the customer journey from ad to bet slip and designing motivational mechanisms to foster a daily app return habit.",
    projects_betfan_role_label: "Role:",
    projects_betfan_role_val: "Product Designer",
    projects_betfan_scope_label: "Scope of Responsibility:",
    projects_betfan_scope_val:
      "Customer Journey Map, Loyalty System, Defining Key Performance Indicators (KPIs)",
    projects_betfan_duration_label: "Duration:",
    projects_betfan_duration_val: "2 weeks",
    projects_betfan_methodology_label: "Methodology:",
    projects_betfan_methodology_val:
      "Design Thinking — Customer Journey mapping, drop-off point identification, and designing retention mechanisms using the Octalysis framework, Habit Loop motivation, and business metrics (KPIs).",
    projects_betfan_img_alt:
      "Cover image for Betfan Customer Journey & Gamified Loyalty project",

    projects_betfan_context_title: "Context",
    projects_betfan_context_desc:
      "BETFAN is a dynamic sports betting platform where the key business challenge is low post-registration retention and the phenomenon of the 'one-time player' who opens the app exclusively during major sporting events.",

    projects_betfan_problem_title: "Problem",
    projects_betfan_problem_desc:
      "New players frequently drop out of the onboarding process due to friction between seeing an ad and placing their first bet. Additionally, a lack of continuous motivational triggers and a clear sense of progress prevents them from returning regularly.",

    projects_betfan_goals_title: "Goals",
    projects_betfan_goals_item1:
      "🎯 <b>Customer Journey Optimization</b> — Map the user path, eliminate friction, and shorten the time to place the first bet.",
    projects_betfan_goals_item2:
      "🎯 <b>Habit Building & Retention</b> — Design engagement loops (Daily Quests, Streaks) that build a sense of progress and encourage regular returns.",

    projects_betfan_constraints_title: "Constraints",
    projects_betfan_constraints_item1:
      "⚠️ <b>High motivation drop upon loss</b> — The need to cushion negative emotions following a lost bet slip.",
    projects_betfan_constraints_item2:
      "⚠️ <b>Business profitability of rewards</b> — Maintaining moderation with bonuses to avoid negative ROI and artificially sustained activity.",
    projects_betfan_constraints_item3:
      "⚠️ <b>Experience logic over UI</b> — Focusing on user psychology, flow, and behavioral triggers rather than just the visual UI layer.",

    projects_betfan_persona_title: "Persona for Customer Journey",
    projects_betfan_persona_intro:
      "The goal of creating this persona is to better understand the issue of <strong>low post-registration player retention</strong> and the 'one-time player' phenomenon—users who only open the app during major sporting events (e.g., Champions League). This character makes it easier to spot potential obstacles and friction along the user path.",
    projects_betfan_persona_card_title:
      "👱🏼‍♂️ Persona: Michał (28) — “Weekend Warrior”",
    projects_betfan_persona_who:
      "<strong>Who he is:</strong> Works an office job; football is his passion and getaway. He watches matches ranging from local leagues to the Champions League.",
    projects_betfan_persona_behavior:
      "<strong>Behavior:</strong> Multi-screening (TV + live phone usage), seeking Social Proof in Facebook groups.",
    projects_betfan_persona_motivation:
      "<strong>Motivations:</strong> Friendly rivalry with office colleagues, recognition of sports knowledge, seeking thrill and fun.",
    projects_betfan_persona_needs:
      "<strong>Needs:</strong> Quick and seamless bet placement (e.g., during commercial breaks).",

    projects_betfan_cjm_title: "2. Customer Journey Map (Interactive Path)",
    projects_betfan_cjm_desc:
      "Analyze Michał's individual steps — use the arrows or click on a specific phase to inspect the phone screen, emotion levels, and identified UX risks and opportunities.",
    projects_betfan_cjm_prev_aria: "Previous step",
    projects_betfan_cjm_next_aria: "Next step",
    projects_betfan_cjm_action_default: "1. First contact with the app",
    projects_betfan_cjm_phase_default: "Phase: Awareness",
    projects_betfan_cjm_emotion_label: "User Emotion:",
    projects_betfan_cjm_emotion_default: "😐 Neutral / Curiosity",
    projects_betfan_cjm_risk_title: "Risk / Psyche Flow",
    projects_betfan_cjm_risk_default: "Risk description...",
    projects_betfan_cjm_opportunity_title: "Opportunity / Solution",
    projects_betfan_cjm_opportunity_default: "Opportunity description...",

    projects_betfan_gamification_title:
      "Gamification System: Daily Quest & Streaks",
    projects_betfan_gamification_desc:
      "To keep Michał engaged even on a 'boring Tuesday', I designed a habit-forming mechanism based on micro-tasks and loyalty rewards.",
    projects_betfan_pillar1_title: "🏛️ Pillar 1: Daily Quest & Streak",
    projects_betfan_pillar1_desc:
      "A simple daily challenge (e.g., 'Place an accumulator bet for 10 PLN'). Completing 5 days in a row unlocks a Fan Box with discounts/freebets.",
    projects_betfan_pillar2_title: "🏛️ Pillar 2: Status Tags & Achievements",
    projects_betfan_pillar2_desc:
      "Users unlock titles (e.g., 'Sniper', 'League Veteran') that they can show off within the community.",
    projects_betfan_pillar3_title: "🏛️ Pillar 3: Soft Landing After Loss",
    projects_betfan_pillar3_desc:
      "A lost bet slip still grants +5% towards the badge progress bar, reducing the feeling of defeat.",

    projects_betfan_implementation_title:
      "Implementation, KPIs & Cross-functional Collaboration",
    projects_betfan_implementation_desc:
      "The project required close collaboration across multiple teams and setting clear success metrics:",
    projects_betfan_implementation_item1:
      "<strong>CRM & Loyalty:</strong> Configuring push notifications for expiring streaks.",
    projects_betfan_implementation_item2:
      "<strong>Success Metrics (KPIs):</strong> Tracking Retention Rate, Average Bets per User, and Bonus Burn Rate.",
    projects_betfan_implementation_item3:
      "<strong>Red Flags:</strong> Warning triggers for negative bonus ROI or artificial streak maintenance without real turnover.",

    projects_betfan_recruitment_note:
      "Completed as a task during Betfan's recruitment process.",

    projects_betfan_impact_title: "Expected Impact",
    projects_betfan_impact_desc:
      "The project was built without access to production data — below is the direction the proposed mechanisms were meant to move, tied to the KPIs defined earlier:",
    projects_betfan_impact_item1:
      "<strong>Return regularity:</strong> the streak system and expiry push notifications were meant to raise Retention Rate by building a daily-return habit.",
    projects_betfan_impact_item2:
      "<strong>Healthy engagement:</strong> reward pacing based on the Octalysis framework was meant to grow Average Bets per User without encouraging risky, impulsive betting.",
    projects_betfan_impact_item3:
      "<strong>Bonus cost control:</strong> red flags on suspicious patterns were meant to keep Bonus Burn Rate in check and protect margin from abuse.",
    projects_betfan_impact_quote:
      "Without implementation and A/B testing, these are hypotheses grounded in motivational mechanics, not measured results — real effectiveness could only be judged after months live in the product.",

    projects_betfan_after_title: "After the Project",
    projects_betfan_after_p1:
      "I completed this project as a task during Betfan's recruitment process. The process itself — mapping the customer journey for emotion and risk in a betting product — was one of the more ethically demanding projects I've worked on: balancing business retention against a responsible approach to reward mechanics.",
    projects_betfan_after_p2:
      "The direction Betfan's actual loyalty work later took lined up with the logic behind the mechanisms I proposed — which I take as confirmation that the underlying assumptions held up.",

    projects_betfan_navloop_text: "See next project:",
    projects_betfan_navloop_link: "Progressive App HabitBubbl",

    projects_betfan_floatnav_about: "About Project",
    projects_betfan_floatnav_persona: "Persona",
    projects_betfan_floatnav_cjm: "Customer Journey",
    projects_betfan_floatnav_gamification: "Gamification",
    projects_betfan_floatnav_implementation: "Implementation & KPIs",
    projects_betfan_floatnav_impact: "Impact",
    projects_betfan_floatnav_after: "After the Project",
    projects_betfan_floatnav_toggle: "Table of contents",

    projects_betfan_cjm_step1_stepNum: "Step 01",
    projects_betfan_cjm_step1_title: "Ad / Banner",
    projects_betfan_cjm_step1_action: "1. Seeing a promotional ad",
    projects_betfan_cjm_step1_phase: "Awareness",
    projects_betfan_cjm_step1_emotion: "🤔 Curiosity / Skepticism",
    projects_betfan_cjm_step1_risk:
      "Information noise, lack of offer differentiation against competitors, and generic ad messaging.",
    projects_betfan_cjm_step1_opportunity:
      "Strong Social Proof, real-time match emotion ads, and a clear welcome bonus.",

    projects_betfan_cjm_step2_stepNum: "Step 02",
    projects_betfan_cjm_step2_title: "First Touchpoint",
    projects_betfan_cjm_step2_action: "2. Entering the website / app",
    projects_betfan_cjm_step2_phase: "Awareness",
    projects_betfan_cjm_step2_emotion: "🧐 Anticipation / Excitement",
    projects_betfan_cjm_step2_risk:
      "Overloaded home screen messages causing disorientation upon first tap.",
    projects_betfan_cjm_step2_opportunity:
      "Clean landing page with an instant value proposition and clear Call To Action button.",

    projects_betfan_cjm_step3_stepNum: "Step 03",
    projects_betfan_cjm_step3_title: "Registration Choice",
    projects_betfan_cjm_step3_action: "3. Choosing account creation method",
    projects_betfan_cjm_step3_phase: "Interest",
    projects_betfan_cjm_step3_emotion: "🔍 Desire for a quick process",
    projects_betfan_cjm_step3_risk:
      "Overcomplicating choices (e.g., lack of a Temporary Account / Quick Registration option).",
    projects_betfan_cjm_step3_opportunity:
      "Prominently highlighting ID-free registration and supporting bank/Social Media login.",

    projects_betfan_cjm_step4_stepNum: "Step 04",
    projects_betfan_cjm_step4_title: "Account Creation",
    projects_betfan_cjm_step4_action: "4. Filling out the registration form",
    projects_betfan_cjm_step4_phase: "Interest",
    projects_betfan_cjm_step4_emotion: "⌛ Impatience / Privacy concern",
    projects_betfan_cjm_step4_risk:
      "Long forms and manual data entry cause high user drop-off.",
    projects_betfan_cjm_step4_opportunity:
      "Implementing One-Click onboarding, autofill features, and granting 'Rookie' status.",

    projects_betfan_cjm_step5_stepNum: "Step 05",
    projects_betfan_cjm_step5_title: "Account Top-up",
    projects_betfan_cjm_step5_action: "5. First deposit",
    projects_betfan_cjm_step5_phase: "Purchase",
    projects_betfan_cjm_step5_emotion: "💳 Uncertainty / Security concern",
    projects_betfan_cjm_step5_risk:
      "Missing preferred payment methods (e.g., BLIK / Apple Pay) or a high minimum deposit limit.",
    projects_betfan_cjm_step5_opportunity:
      "1-click BLIK fast payments and immediate visual confirmation of the welcome bonus.",

    projects_betfan_cjm_step6_stepNum: "Step 06",
    projects_betfan_cjm_step6_title: "Awaiting Deposit",
    projects_betfan_cjm_step6_action: "6. Processing payment",
    projects_betfan_cjm_step6_phase: "Purchase",
    projects_betfan_cjm_step6_emotion: "⏳ Waiting / Time pressure",
    projects_betfan_cjm_step6_risk:
      "Processing delays kill the impulse to place an immediate pre-match bet.",
    projects_betfan_cjm_step6_opportunity:
      "Instant visual feedback and real-time confirmation of credited funds.",

    projects_betfan_cjm_step7_stepNum: "Step 07",
    projects_betfan_cjm_step7_title: "Category Selection",
    projects_betfan_cjm_step7_action: "7. Browsing sports offer",
    projects_betfan_cjm_step7_phase: "Purchase",
    projects_betfan_cjm_step7_emotion: "🎯 Overwhelmed by options",
    projects_betfan_cjm_step7_risk:
      "Cluttered interface prevents user from quickly finding the desired match.",
    projects_betfan_cjm_step7_opportunity:
      "Personalized dashboard based on favorite leagues and quick 'Trending Today' filters.",

    projects_betfan_cjm_step8_stepNum: "Step 08",
    projects_betfan_cjm_step8_title: "Adding Events",
    projects_betfan_cjm_step8_action: "8. Building a bet slip (Accumulator)",
    projects_betfan_cjm_step8_phase: "Purchase",
    projects_betfan_cjm_step8_emotion: "⚡ Excitement / Strategy building",
    projects_betfan_cjm_step8_risk:
      "Lack of clear live odds updates or cumbersome bet slip management.",
    projects_betfan_cjm_step8_opportunity:
      "Micro-gesture interaction, popular pick suggestions, and automatic payout calculator.",

    projects_betfan_cjm_step9_stepNum: "Step 09",
    projects_betfan_cjm_step9_title: "Stake & Bet Placement",
    projects_betfan_cjm_step9_action: "9. Setting stake and placing bet",
    projects_betfan_cjm_step9_phase: "Purchase",
    projects_betfan_cjm_step9_emotion: "🔥 High tension / Risk assessment",
    projects_betfan_cjm_step9_risk:
      "Lack of quick preset stakes (e.g., $10, $20) slows down placement during ad breaks.",
    projects_betfan_cjm_step9_opportunity:
      "Quick-Bet feature with preset amount buttons and a prominent, instantly confirming 'Place Bet' button.",

    projects_betfan_cjm_step10_stepNum: "Step 10",
    projects_betfan_cjm_step10_title: "Bet Tracking",
    projects_betfan_cjm_step10_action: "10. Following live match & results",
    projects_betfan_cjm_step10_phase: "Retention",
    projects_betfan_cjm_step10_emotion: "💓 Strong emotions / Anticipation",
    projects_betfan_cjm_step10_risk:
      "If the match goes south, the user closes the app with a feeling of defeat.",
    projects_betfan_cjm_step10_opportunity:
      "Live cash-out, animated match-center stats, and streak/challenge progress even on a lost bet.",

    projects_betfan_cjm_step11_stepNum: "Step 11",
    projects_betfan_cjm_step11_title: "Result & Social Proof",
    projects_betfan_cjm_step11_action: "11. Bet settlement & sharing",
    projects_betfan_cjm_step11_phase: "Advocacy",
    projects_betfan_cjm_step11_emotion:
      "🎉 Pride in winning / 🛡️ Soft-landing after loss",
    projects_betfan_cjm_step11_risk:
      "Bitterness of defeat leads to long-term app churn.",
    projects_betfan_cjm_step11_opportunity:
      "Easy creation of shareable winning bet graphics for Social Media and a consolation reward (+5% badge progress).",

    // PROJECT WKDZIK
    projects_wkdzik_badge: "Case Study / UX Audit",
    projects_wkdzik_title: "WKDZIK.pl Audit",
    projects_wkdzik_subtitle:
      "How can small fixes significantly improve the user experience?",
    projects_wkdzik_desc:
      "WKDZIK.pl is a growing e-commerce store for the energy drink brand 'Dzik', with a large and engaged community. I ran a self-initiated UX and performance audit to find out how much real revenue was slipping away through easy-to-miss details.",
    projects_wkdzik_role_label: "Role:",
    projects_wkdzik_role_val: "UX Designer (self-initiated audit)",
    projects_wkdzik_scope_label: "Scope of Responsibility:",
    projects_wkdzik_scope_val:
      "UX/UI Audit, Performance Analysis, Implementation Recommendations",
    projects_wkdzik_duration_label: "Duration:",
    projects_wkdzik_duration_val: "3 days",
    projects_wkdzik_methodology_label: "Methodology:",
    projects_wkdzik_methodology_val:
      "Heuristic evaluation of the purchase path + performance testing (Google Lighthouse), benchmarked against e-commerce industry data.",
    projects_wkdzik_cover_title: "🐗 WKDZIK.pl Audit",
    projects_wkdzik_cover_subtitle:
      "from a 5–6s load time to real percentage points of conversion",

    projects_wkdzik_context_title: "Context",
    projects_wkdzik_context_desc:
      "Despite a strong brand and a loyal community, the store was losing sales to things nobody notices at first glance: heavy images, cramped spacing, and interface elements that were easy to mix up while shopping.",

    projects_wkdzik_problem_title: "Problem",
    projects_wkdzik_problem_desc:
      "The site loaded slowly — a new user waited 5–6 seconds, mostly due to unoptimized images. On top of that, several spots along the purchase path were misleading: cramped spacing, an 'Add to cart' button that looked almost identical to the company address banner, and an unclear add-to-cart confirmation screen.",

    projects_wkdzik_goals_title: "Goals",
    projects_wkdzik_goals_item1:
      "🎯 <b>Speed up page load</b> — without losing visual image quality.",
    projects_wkdzik_goals_item2:
      "🎯 <b>Clean up the visual hierarchy</b> — spacing and contrast between elements so the page can 'breathe'.",
    projects_wkdzik_goals_item3:
      "🎯 <b>Remove misleading elements</b> along the path from product to cart.",

    projects_wkdzik_owca_title: "Guess: which sheep weighs less?",
    projects_wkdzik_owca_desc:
      "Two identical-looking images. One of them weighs 37 times less than the other — and you simply can't tell the difference by eye. Click the one you think could safely go on the homepage.",
    projects_wkdzik_owca_hint: "Click one of the sheep to see the result 👇",
    projects_wkdzik_owca_label_a: "Version A",
    projects_wkdzik_owca_label_b: "Version B",
    projects_wkdzik_owca_alt_a: "Sheep with an energy drink — version A",
    projects_wkdzik_owca_alt_b: "Sheep with an energy drink — version B",
    projects_wkdzik_owca_result:
      "<b>There was no way to guess — and that's the point. 😄</b> Both versions look identical. Version B weighs 1.5 MB, while version A, after lossless compression, is just 40 KB.",
    projects_wkdzik_owca_stat1_number: "40 KB",
    projects_wkdzik_owca_stat1_label: "after optimization",
    projects_wkdzik_owca_stat2_number: "1.5 MB",
    projects_wkdzik_owca_stat2_label: "before optimization",
    projects_wkdzik_owca_stat3_number: "-97%",
    projects_wkdzik_owca_stat3_label: "file size",
    projects_wkdzik_owca_stat4_number: "37×",
    projects_wkdzik_owca_stat4_label: "lighter, no quality loss",
    projects_wkdzik_owca_context:
      "That's a single image visible right at the top of the homepage. At their scale, Amazon calculated that every extra 100ms of delay cost them 1% of sales. Google reports that 53% of mobile users abandon a page that takes longer than 3 seconds to load — and a new user waited 5–6 seconds on WKDZIK.pl.",

    projects_wkdzik_space_title: "A few pixels, a different feeling",
    projects_wkdzik_space_desc:
      "Too little breathing room between elements makes even good design look cheap. Drag the slider and watch how the spacing inside a tile alone changes how it reads — the color stays the same, only the space changes.",
    projects_wkdzik_space_hint:
      "Drag the slider to give the tile some room to breathe",
    projects_wkdzik_space_tile_title: "DZIK Energy 500ml",
    projects_wkdzik_space_tile_price: "4.99 zł",
    projects_wkdzik_space_label_tight: "very tight",
    projects_wkdzik_space_label_better: "better",
    projects_wkdzik_space_label_premium: "premium ✨",
    projects_wkdzik_space_unit_label: "of spacing —",
    projects_wkdzik_label_before: "Before",
    projects_wkdzik_label_after: "After",

    projects_wkdzik_clarity_title: "Which button is 'Add to cart'?",
    projects_wkdzik_clarity_desc:
      "On the product card, the add-to-cart button looked almost identical to the banner showing the company's registered address — same color, same shape. Compare the 'Before' and 'After' states to feel the difference.",
    projects_wkdzik_clarity_address:
      "WK sp. z o.o. — ul. Mszczonowska 13, 05-090 Janki",
    projects_wkdzik_clarity_cta: "Add to cart",
    projects_wkdzik_clarity_feedback_default:
      "Click either block above — try to land on the purchase button.",
    projects_wkdzik_clarity_feedback_after:
      "Now there's no doubt which block is the purchase button and which is the address.",
    projects_wkdzik_clarity_click_before:
      "Got it right? In reality, some users clicked the company address thinking it was the cart button.",
    projects_wkdzik_clarity_click_after:
      "Exactly — now it's hard to get it wrong.",

    projects_wkdzik_impact_title: "Potential impact of implementation",
    projects_wkdzik_impact_desc:
      "None of the fixes above require rebuilding the store from scratch — they're details that can be shipped quickly, and they translate into real numbers:",
    projects_wkdzik_impact_card1_number: "-80%",
    projects_wkdzik_impact_card1_label:
      "average image size reduction after compression",
    projects_wkdzik_impact_card2_number: "<2s",
    projects_wkdzik_impact_card2_label: "target load time, down from 5–6s",
    projects_wkdzik_impact_card3_number: "53%",
    projects_wkdzik_impact_card3_label:
      "of mobile users leave a page that loads in >3s (Google)",
    projects_wkdzik_impact_card4_number: "+2%",
    projects_wkdzik_impact_card4_label:
      "estimated revenue increase from converting just 2 in 100 undecided visitors",
    projects_wkdzik_impact_profit_number: "+200,000 zł",
    projects_wkdzik_impact_profit_label:
      "At a net profit of around 10M zł a year (2025), that 2% conversion lift is an extra 200,000 zł in clean profit — without increasing the marketing budget.",
    projects_wkdzik_impact_quote:
      "Tightening the UX screws translates into real profit.",

    projects_wkdzik_after_title: "After the Audit",
    projects_wkdzik_after_p1:
      "What I found here is the result of an initial review — without access to analytics data that would pinpoint exactly where users most often abandon a purchase. Every store has these moments — the only question is whether they're actually measured.",
    projects_wkdzik_after_p2:
      "Sport and the WK Dzik community are close to my heart, and a solid UX audit is a cheap way to find out how much revenue is really on the table. A small investment, potentially a big return.",

    projects_wkdzik_floatnav_about: "About Project",
    projects_wkdzik_floatnav_owca: "Sheep Test",
    projects_wkdzik_floatnav_space: "Spacing",
    projects_wkdzik_floatnav_clarity: "Clarity",
    projects_wkdzik_floatnav_impact: "Impact",
    projects_wkdzik_floatnav_after: "After the Audit",
    projects_wkdzik_floatnav_toggle: "Table of contents",

    projects_wkdzik_navloop_text: "See next project:",
    projects_wkdzik_navloop_link: "Monexo Mobile App",

    // quick contact
    contact_title: "Let's work together",
    contact_subtitle:
      "Looking for a UX Designer for your team or have a project in mind?",
    btn_linkedin: "Message on LinkedIn",
    btn_cv: "View CV (PDF)",
    contact_or: "or simply send an email:",

    // form
    form_title: "You have a project idea?",
    form_subtitle: "Let's see if we're playing to the same goal",
    form_name: "Name / Company:",
    form_name_placeholder: "e.g. John Doe / Company Name",
    form_email: "Email address:",
    form_email_placeholder: "john.doe@example.com",
    form_message: "Message:",
    form_message_placeholder:
      "I would like a design project of my company's website...",
    form_button: "Send a message",

    // ABOUT
    about_breadcrumbs_main: "Home",
    about_breadcrumbs_current: "About Me",
    about_main_badge: "Hey, it's Marek 👋",
    about_main_heading:
      "I'm driven by ambitious goals, growth, and pushing past my own limits.",
    about_main_lead:
      "I value discipline, but I believe just as strongly that a good atmosphere and positive energy help bring out the best results. Sport taught me consistency, and travel has shown me how much you can understand by looking at the world from different perspectives.",
    about_main_role: "UX / Product Designer",
    about_main_cv_button: "View CV",
    about_clock_location: "Warsaw, Poland",
    about_gallery_photo1_caption: "Ursus, Warsaw '22",
    about_gallery_photo2_caption: "Marsa Alam '26",
    about_gallery_photo3_caption: "Lake Como '24",
    about_gallery_modal_alt: "Gallery photo",
    about_gallery_cursor_label: "Gallery",
    about_stats_experience_label: "years of experience",
    about_stats_certifications_label: "completed certifications",
    about_stats_projects_label: "completed projects",
    about_timeline_title: "My Journey",
    about_timeline_step1_year: "2011 – 2022",
    about_timeline_step1_title: "A School of Character",
    about_timeline_step1_text:
      "Over 10 years of competitive football. Learning communication, discipline, teamwork, performing under pressure, and building relationships.",
    about_timeline_step2_year: "2022 – 2024",
    about_timeline_step2_title: "Foundations & Education",
    about_timeline_step2_text:
      "Started a Computer Science degree. Intensive learning of UX/Product Design. Earned design skill certifications.",
    about_timeline_step3_year: "2024+",
    about_timeline_step3_title: "Strategic Partner",
    about_timeline_step3_text:
      "First commercial job. First client projects. Completed my engineering degree. Combining business needs and strategy with design. Started freelancing.",

    about_certificates_title: "My Certifications",
    about_certificates_item1_alt: "Nueve Certificate - UX Masterclass",
    about_certificates_item1_caption: "UX Masterclass",
    about_certificates_item2_alt:
      "Nueve Certificate - Giving and Receiving Feedback, earned during the UX Masterclass",
    about_certificates_item2_caption: "Teamwork Certificate",
    about_certificates_item3_alt: "Nueve Certificate - App Design Intro",
    about_certificates_item3_caption: "App Design Intro",
    about_certificates_item4_alt: "Cambridge Advanced English Certificate",
    about_certificates_item4_caption: "Cambridge Advanced English Certificate",
    about_certificates_item5_alt:
      "Google & SGH Certificate - Digital Marketing - Skills of Tomorrow",
    about_certificates_item5_caption: "Skills of Tomorrow - Digital Marketing",
    about_certificates_item6_alt:
      "Appendix to the Google & SGH Certificate - Digital Marketing - Skills of Tomorrow",
    about_certificates_item6_caption: "Appendix to Skills of Tomorrow",
    about_certificates_item7_alt: "Nueve Design Certificate - Design with AI",
    about_certificates_item7_caption: "Design with AI",
    about_certificates_item8_alt:
      "Nueve Design Certificate - Perfect Design Process",
    about_certificates_item8_caption: "Perfect Design Process",
    about_certificates_item9_alt: "Nueve Design Certificate - Prototype Pro",
    about_certificates_item9_caption: "Prototype Pro",
    about_certificates_item10_alt:
      "Certificate of Participation - Design Thinking Workshop",
    about_certificates_item10_caption: "Design Thinking Workshop",
    about_certificates_item11_alt:
      "Nueve Design Certificate - Design System Intro",
    about_certificates_item11_caption: "Design System Intro",
    about_certificates_item12_alt: "Website Design Certificate",
    about_certificates_item12_caption: "Web Design",
    about_certificates_item13_alt:
      "Certificate of Completion Claude 101 by Anthropic",
    about_certificates_item13_caption: "Claude 101",
    about_certificates_item14_alt:
      "Certificate of Completion Claude Code 101 by Anthropic",
    about_certificates_item14_caption: "Claude Code 101",
    about_certificates_show_more: "Show more certificates",
    about_certificates_show_less: "Show fewer certificates",

    // OFFER
    offer_breadcrumbs_main: "Main Page",
    offer_breadcrumbs_current: "Offer",
    offer_badge: "How can i help You?",
    offer_heading: "I turn ideas into profitable digital products.",
    offer_subtext:
      "I don't only make beautiful screens. I'm designing experiences based on analitycs, building interactive prototypes and implementing complete websites on the server. Comprehensively.",
    offer_interfaces_header: "Interfaces Design - UX/UI",
    offer_interfaces_description:
      "I design intuitive web and mobile systems. I focus on every step of the user journey, eliminating cognitive friction.",
    offer_interfaces_list_1: "Mobile and web applications",
    offer_interfaces_list_2: "Conversion-optimized landing pages",
    offer_interfaces_list_3: "Interactive, clickable high-fidelity prototypes",
    offer_interfaces_list_4: "Design Systems development and scaling",
    offer_interfaces_example: "Monexo Mobile App ➚",
    offer_strategy_header: "Audits, Strategy & CJM",
    offer_strategy_description:
      "Is your website failing to convert, and users are dropping off? I map out their journeys and identify critical bottlenecks in the process.",
    offer_strategy_list_1: "Professional UX / UI audits",
    offer_strategy_list_2: "Customer Journey Mapping (CJM)",
    offer_strategy_list_3: "Business process design",
    offer_strategy_list_4: "Visual identity and cohesive branding",
    offer_strategy_example: "Customer Journey Betfan ➚",
    offer_analitycs_header: "Development & Analytics",
    offer_analitycs_description:
      "I bridge the gap where other designers stop. I deliver a fully functional product integrated with advanced web analytics.",
    offer_analitycs_list_1: "Website deployment and domain configuration",
    offer_analitycs_list_2:
      "Analytics integration (Google Ads, tracking tags, conversions)",
    offer_analitycs_list_3: "Asset preparation and clean graphic design",
    offer_analitycs_list_4: "SEO optimization and performance tuning",
    offer_analitycs_example: "PlanetRoad Website➚",
    offer_cta_heading:
      "Have a project in mind? Let's see if we're playing to the same goal.",
    offer_cta_p1:
      "Secure and fully compliant billing through a trusted platform",
    offer_cta_p2:
      "(VAT invoice provided, ensuring zero risk for both parties).",
    offer_cta_button_secondary: "View my projects",
    offer_cta_button_primary: "Let's discuss your project",

    offer_process_badge: "How I Work",
    offer_process_title:
      "You'll know what's happening with the project at every stage",
    offer_process_desc:
      "I focus on open communication, clearly defined stages, and regular check-ins. From the start, you know what I'm working on, what decisions have been made, and what's coming next — so we build the project together without chaos, ambiguity, or scattered communication.",
    offer_process_step1_title: "We define the goals",
    offer_process_step1_desc:
      "We talk about your business, your users, and the outcomes you expect. We set the scope, priorities, and how we'll measure the project's success.",
    offer_process_step2_title: "We set the ground rules",
    offer_process_step2_desc:
      "We agree on the timeline, how we'll communicate, meeting cadence, and the moments where I'll need your feedback.",
    offer_process_step3_title: "I research and define the direction",
    offer_process_step3_desc:
      "I analyze user needs, the market, and the competition, and turn the findings into a strategy and concrete design assumptions.",
    offer_process_step4_title: "I design and test",
    offer_process_step4_desc:
      "I build the information architecture, wireframes, and an interactive prototype. I present progress, gather feedback, and validate key decisions.",
    offer_process_step5_title: "We refine the solution",
    offer_process_step5_desc:
      "We review the design together and make decisions based on goals, data, and user needs.",
    offer_process_step6_title: "I support the rollout",
    offer_process_step6_desc:
      "I prepare files, components, and documentation, support implementation, and verify the build matches the design.",
    offer_process_step7_title: "We settle up securely",
    offer_process_step7_desc:
      "I invoice fully securely through the Useme platform. I issue a VAT invoice, and the whole process is orderly and risk-free for both sides.",

    offer_projecthub_badge: "Project Hub",
    offer_projecthub_title: "Your whole project in one place",
    offer_projecthub_desc:
      "I run collaboration through a dedicated Project Hub. You get constant access to progress, materials, deadlines, and decisions made — without digging through messages and attachments.",
    offer_projecthub_item1: "Current status and next steps",
    offer_projecthub_item2: "Scope, goals, and success metrics",
    offer_projecthub_item3: "Timeline and milestones",
    offer_projecthub_item4: "Materials, prototypes, and Figma links",
    offer_projecthub_item5: "Feedback and a decision log",
    offer_projecthub_item6: "Meeting summaries and documentation",

    offer_testimonials_title:
      "See what my clients say about working with me",
    offer_testimonials_subtitle:
      "Reviews from people and companies I've had the pleasure of working with",
    offer_testimonial1_text:
      "\"I recommend working with <b>Marek Wietecki</b>. Communication was smooth, and every revision was handled promptly, with care, and in line with what we asked for.\"",
    offer_testimonial1_role: "President, Fundacja Fair",
    offer_testimonial2_text:
      "\"A reliable professional with a great client approach. He understood our business needs very well and suggested solutions we wouldn't have thought of ourselves.\"",
    offer_testimonial2_role: "CEO, PlanetRoad",
    offer_testimonial3_text:
      "\"The collaboration went smoothly. The site is fast, looks modern, and — most importantly — started bringing in first customers right after launch.\"",
    offer_testimonial3_role: "Business Owner",

    // PRIVACY
    privacy_breadcrumbs_main: "Main Page",
    privacy_breadcrumbs_current: "Privacy Policy",
    privacy_h1: "Privacy Policy",
    privacy_1_heading: "1. Data Administrator",
    privacy_1_part1: "The administrator of your personal data is",
    privacy_1_part2: "e-mail contact:",
    privacy_2_heading: "2. What data do I collect and for what purpose?",
    privacy_2_item1_title: "Contact form and e-mail correspondence:",
    privacy_2_item1_txt:
      "When you contact me via the form on the website or write directly to the provided e-mail address, you provide your personal data (e.g. name, e-mail address and message content). This data is processed solely to answer your inquiry and conduct arrangements related to the provision of services.",
    privacy_2_item2_title: "Cookies and analytical/advertising tools:",
    privacy_2_item2_txt:
      "The website uses cookies and tools provided by third parties for analytical, statistical and marketing optimization purposes:",
    privacy_2_ga_title: "Google Analytics:",
    privacy_2_ga_txt:
      "used to collect anonymous statistics regarding website traffic and how users use it,",
    privacy_2_ads_title: "Google Ads:",
    privacy_2_ads_txt:
      "used to measure the effectiveness of advertising campaigns and tailor advertising content to recipients,",
    privacy_2_clarity_title: "Microsoft Clarity:",
    privacy_2_clarity_txt:
      "used to analyze user behavior on the website (including through anonymous session recordings and heatmaps) to improve usability and functionality of the service.",
    privacy_3_heading: "3. Cookie Management",
    privacy_3_txt:
      "Analytical and advertising cookies are stored in your browser only with your consent, expressed via the consent banner (Cookie Banner) displayed during your first visit to the website. You can change your preferences or withdraw your consent at any time by clearing cookies in your web browser settings.",
    privacy_4_heading: "4. Data Retention Period",
    privacy_4_txt:
      "Data provided via the contact form or e-mail correspondence is processed for the time necessary to handle the inquiry, and then for the period necessary to secure potential claims or fulfill legal obligations. Data collected by analytical tools is stored in accordance with default retention periods set by the service providers.",
    privacy_5_heading: "5. Data Recipients",
    privacy_5_intro:
      "In connection with the operation of the website and the provision of my services, your data may be entrusted or shared with trusted third parties providing technical and analytical solutions:",
    privacy_5_netlify_title: "Netlify, Inc.",
    privacy_5_netlify_txt:
      "– provider of hosting and server infrastructure for the website,",
    privacy_5_google_title: "Google Ireland Limited",
    privacy_5_google_txt:
      "– provider of analytical and advertising services (Google Analytics, Google Ads),",
    privacy_5_ms_title: "Microsoft Ireland Operations Limited",
    privacy_5_ms_txt: "– provider of Microsoft Clarity analytical service.",
    privacy_6_heading: "6. Your Rights",
    privacy_6_intro:
      "Under GDPR regulations, you have the following rights related to the processing of your personal data:",
    privacy_6_right1:
      "Right of access to the content of your data and to receive a copy of it,",
    privacy_6_right2: "Right to rectification (correction) of your data,",
    privacy_6_right3: 'Right to erasure of data ("right to be forgotten"),',
    privacy_6_right4: "Right to restriction of processing,",
    privacy_6_right5: "Right to object to data processing,",
    privacy_6_right6:
      "Right to withdraw consent to data processing at any time (without affecting the lawfulness of processing based on consent before its withdrawal).",
    privacy_6_contact_part1:
      "In order to exercise the above rights, please contact me at the e-mail address:",
    privacy_back_btn: "Back to Main Page",

    // 404
    p404_breadcrumbs_main: "Main Page",
    p404_breadcrumbs_current: "Page doesn't exist",
    p404_text:
      "It looks like the page you're trying to reach doesn't exist or has been moved.",
    p404_nav: "Go to the Main Page",

    // side nav
    side_nav_about: "About",
    side_nav_research: "Research",
    side_nav_ideation: "Ideation",
    side_nav_iterations: "Iterations",
    side_nav_storybook: "Storybook",
    side_nav_final_effect: "Final Result",
    side_nav_post_project: "Post-Project",

    // PROJECT APP MONEXO
    project_app_monexo_title: "Mobile App",
    project_app_monexo_desc:
      "Monexo is a mobile currency exchange application that I designed as a response to real problems faced by users of existing FinTech solutions.",
    project_app_monexo_role_label: "Role:",
    project_app_monexo_role_val: "UX Designer; Front-end Developer",
    project_app_monexo_scope_label: "Scope of responsibility:",
    project_app_monexo_scope_val:
      "Research, Product Concept, Information Architecture, Interface Design, Usability Testing",
    project_app_monexo_duration_label: "Duration:",
    project_app_monexo_duration_val: "13 weeks",
    project_app_monexo_methodology_label: "Methodology:",
    project_app_monexo_methodology_val:
      "Lean UX / Design Thinking – iterative design based on user research, usability testing, and competitor analysis, prioritizing MVP features.",
    project_app_monexo_context_title: "Context",
    project_app_monexo_context_text:
      "Market analysis showed that many existing currency exchange applications are unclear, overloaded with information, and rely on vague commission models, creating unnecessary friction for users seeking simple currency transactions.",
    project_app_monexo_problem_title: "Problem",
    project_app_monexo_problem_text:
      "Users often lacked certainty about the true transaction costs, got lost in the interface, and had to navigate too many steps for basic operations.",
    project_app_monexo_goals_title: "Goals",
    project_app_monexo_goal_1_b: "Simplify the currency exchange process",
    project_app_monexo_goal_1_text: " down to a few intuitive steps.",
    project_app_monexo_goal_2_b: "Full transparency of rates and fees",
    project_app_monexo_goal_2_text:
      " — no hidden commissions or obscure calculations.",
    project_app_monexo_goal_3_b: "Build trust in a FinTech product",
    project_app_monexo_goal_3_text:
      " through clear communication and process predictability.",
    project_app_monexo_constraints_title: "Constraints",
    project_app_monexo_constraint_1_b: "High trust requirements",
    project_app_monexo_constraint_1_text:
      " — a financial application must be perceived as secure and reliable.",
    project_app_monexo_constraint_2_b: "Need to clearly communicate costs",
    project_app_monexo_constraint_2_text:
      " without overwhelming the user with data.",
    project_app_monexo_constraint_3_b: "Minimizing interface complexity",
    project_app_monexo_constraint_3_text:
      " while maintaining full user control.",
    project_app_monexo_constraint_4_b: "Mobile-first design",
    project_app_monexo_constraint_4_text:
      ", tailored for fast and frequent use.",
    project_app_monexo_research_title: "Research & Insights",
    project_app_monexo_market_title:
      "Do people need our product? - Market Analysis & Industry Trends",
    project_app_monexo_market_p1_part1:
      "I analyzed market trends, reviewing reports and top applications to understand what users truly need. I noticed that as user expectations grow, ",
    project_app_monexo_market_p1_b:
      "core features are often hidden to highlight new capabilities",
    project_app_monexo_market_p1_part2:
      ". In my app, I prioritized fulfilling primary needs first, keeping extra features nested so they don't interfere with daily financial management.",
    project_app_monexo_market_p2_part1:
      "At the same time, I identified popular features such as ",
    project_app_monexo_market_p2_b1:
      "multi-currency wallets, automatic exchange orders",
    project_app_monexo_market_p2_part2: " or ",
    project_app_monexo_market_p2_b2: "cryptocurrency support",
    project_app_monexo_market_p2_part3:
      ", which respond to real user needs in transaction planning and money management, granting them fuller financial control.",
    project_app_monexo_competition_title: "Competitor Problem Analysis",
    project_app_monexo_comp_p1_intro:
      "During my analysis of competitor applications and user reviews, I identified key issues significantly impacting user experience:",
    project_app_monexo_comp_p1_b1: "Overly complex menus",
    project_app_monexo_comp_p1_text1:
      " – users often complain about chaotic options and difficulty executing basic operations quickly.",
    project_app_monexo_comp_p1_b2: "Unintuitive navigation",
    project_app_monexo_comp_p1_text2:
      " – users frequently struggle to reach desired functions within the app.",
    project_app_monexo_comp_p1_b3: "Lack of fee transparency",
    project_app_monexo_comp_p1_text3:
      " – users feel a lack of transparency and consistency regarding fees, returns, and interest rates.",
    project_app_monexo_comp_p2_intro:
      "The analysis helped me target key user friction points, which I planned to address by:",
    project_app_monexo_comp_p2_b1: "Simplifying menus and feature hierarchy",
    project_app_monexo_comp_p2_text1:
      " so key actions are accessible in 2–3 steps;",
    project_app_monexo_comp_p2_b2: "Introducing transaction previews",
    project_app_monexo_comp_p2_text2:
      " and keeping users continuously informed about fees and exchange statuses;",
    project_app_monexo_comp_p2_b3:
      "Ensuring cost and communication transparency",
    project_app_monexo_comp_p2_text3:
      " so users always know applicable fees and rates.",
    project_app_monexo_ideation_title: "Ideation",
    project_app_monexo_target_title: "Who is our app for?",
    project_app_monexo_target_p_part1:
      "I began shaping the product by defining three ",
    project_app_monexo_target_p_b: "user personae",
    project_app_monexo_target_p_part2:
      " for our product. This revealed which needs mattered most to them.",
    project_app_monexo_fig_personae: "User Personae",
    project_app_monexo_needs_b: "Primary needs",
    project_app_monexo_needs_intro: " of our users were:",
    project_app_monexo_needs_1: "• Fast access to key features",
    project_app_monexo_needs_2: "• Simplicity of app usage",
    project_app_monexo_needs_3: "• Transparent transaction fees",
    project_app_monexo_needs_4: "• A sense of control over transactions",
    project_app_monexo_prio_title:
      "What will be most important? - Prioritization",
    project_app_monexo_prio_p_part1: "Using ",
    project_app_monexo_prio_p_b: "MoSCoW",
    project_app_monexo_prio_p_part2:
      " prioritization, I established which features were essential, which were desirable, and which were optional enhancements.",
    project_app_monexo_fig_moscow: "MoSCoW Prioritization",
    project_app_monexo_mvp_intro_part1: "The ",
    project_app_monexo_mvp_intro_b: "MVP",
    project_app_monexo_mvp_intro_part2: " scope included:",
    project_app_monexo_mvp_1: "• Virtual wallet displaying held currencies",
    project_app_monexo_mvp_2: "• NBP exchange rate review",
    project_app_monexo_mvp_3: "• Currency exchange process",
    project_app_monexo_mvp_4: "• Transaction history",
    project_app_monexo_mvp_5: "• Account top-up",
    project_app_monexo_mvp_6:
      "• Registration, Login, Password Change, Account Deletion",
    project_app_monexo_style_title: "In what visual style?",
    project_app_monexo_style_p_part1: "I created a concise ",
    project_app_monexo_style_p_b: "Style Guide",
    project_app_monexo_style_p_part2:
      " with essential UI components to keep the app consistent and aesthetic.",
    project_app_monexo_fig_typography: "Style Guide - Typography",
    project_app_monexo_fig_components: "Style Guide - Components & Rules",
    project_app_monexo_fig_colors: "Style Guide - Colors & Themes",
    project_app_monexo_style_desc:
      "The app interface was designed with a minimalist aesthetic around a single primary action — 'Exchange Currency'. Color palette and typography foster clarity, calm, and security essential for FinTech products.",
    project_app_monexo_wireframes_title: "Now, where to place everything?",
    project_app_monexo_wireframes_p_part1: "Using ",
    project_app_monexo_wireframes_p_b: "wireframes",
    project_app_monexo_wireframes_p_part2:
      ", I organized elements across screens to cover core target group requirements and priority app features.",
    project_app_monexo_fig_wireframes1: "Wireframes Part 1",
    project_app_monexo_fig_wireframes2: "Wireframes Part 2",
    project_app_monexo_breadboards_title: "And where can users navigate next?",
    project_app_monexo_breadboards_p_part1: "I mapped out ",
    project_app_monexo_breadboards_p_b: "Breadboards",
    project_app_monexo_breadboards_p_part2:
      " — all possible user flows from each screen. Tab navigation simplifies screen movement, while contextual links suggest natural next steps.",
    project_app_monexo_fig_breadboards1: "Breadboards Part 1",
    project_app_monexo_fig_breadboards2: "Breadboards Part 2",
    project_app_monexo_iterations_title: "Iterations",
    project_app_monexo_iterations_intro:
      "Product design was conducted iteratively: implementing individual features, testing, and refining according to user needs.",
    project_app_monexo_iter1_title:
      "First, the essential core - MVP & basic flow validation",
    project_app_monexo_iter1_p:
      "I designed an MVP covering essential functions: rate checking and currency exchange, aiming to quickly validate core product assumptions, information architecture, and exchange flows.",
    project_app_monexo_iter_sort_title:
      "Why alphabetical rate sorting wasn't optimal",
    project_app_monexo_iter_sort_p1:
      "When designing the rate screen, I realized NBP API lists currencies alphabetically, hiding high-demand currencies like USD or EUR deep down. Researching Polish currency exchange trends showed Swiss Franc and Czech Koruna are also popular, so I prioritized these currencies at the top of the list.",
    project_app_monexo_iter_sort_p2:
      "I then ran usability tests on an interactive prototype. Feedback revealed some phrasing was confusing, and account top-up was hidden too deeply in profile settings, causing user difficulty.",
    project_app_monexo_fig_iter1: "Validation of basic flows",
    project_app_monexo_prototype_link: "Open interactive prototype",
    project_app_monexo_prototype_note:
      "(available on PC & Laptops only, due to Figma Make limits)",
    project_app_monexo_iter2_title:
      "Which features need the most convenient access? - Navigation prioritization",
    project_app_monexo_iter2_p1_part1:
      "Usability test insights clearly showed that users ",
    project_app_monexo_iter2_p1_b: "struggled to find the top-up feature",
    project_app_monexo_iter2_p1_part2:
      ". The action was buried deep within profile settings, causing frustration and task delay.",
    project_app_monexo_iter2_p2:
      "I restructured the bottom navigation accordingly, replacing the Profile tab with Top-Up — one of the most vital user actions. Profile was moved to a compact icon header accessible across screens.",
    project_app_monexo_iter2_p3:
      "This change significantly shortened transaction paths and made navigation intuitive. Post-iteration tests confirmed users topped up accounts quickly without hints.",
    project_app_monexo_fig_iter2: "Prioritizing key functions",
    project_app_monexo_iter2_p4:
      "Subsequent unmoderated usability and First-Click tests demonstrated substantially faster task completion for currency purchases.",
    project_app_monexo_iter2_effect:
      "Effect: Users assess finances faster and complete transactions seamlessly, increasing app convenience and satisfaction.",
    project_app_monexo_iter3_title:
      "How I simplified the process for users - Refining system microcopy",
    project_app_monexo_iter3_p1:
      "Usability testing highlighted that copy on certain screens was too implicit, leading to confusion and fear of error during operation.",
    project_app_monexo_iter3_p2:
      "I added short, clear contextual info clarifying costs and system rules, reassuring users as they navigate through steps.",
    project_app_monexo_iter3_p3:
      "System copy validation confirmed that technical phrasing had created uncertainty, which was resolved by clearer microcopy.",
    project_app_monexo_fig_iter3_1: "Improving Currency Rate Communication",
    project_app_monexo_fig_iter3_2: "Improving Transaction Cost Communication",
    project_app_monexo_fig_iter3_3: "Improving Main Screen Link Visibility",
    project_app_monexo_iter3_nav_opt:
      "Additionally, navigation was optimized for the primary usage path (check rate → top up → exchange), reducing completion time. Icons were updated to more intuitive symbols for faster recognition.",
    project_app_monexo_fig_iter3_4: "Improving Menu Intuitiveness",
    project_app_monexo_iter3_effect:
      "Effect: Users experience greater process control and confidence, resulting in smoother currency exchanges.",
    project_app_monexo_final_title: "Final Result",
    project_app_monexo_final_subtitle: "What was ultimately built?",
    project_app_monexo_fig_light1: "Final Light Mode Screens Part 1",
    project_app_monexo_fig_light2: "Final Light Mode Screens Part 2",
    project_app_monexo_fig_dark1: "Final Dark Mode Screens Part 1",
    project_app_monexo_fig_dark2: "Final Dark Mode Screens Part 2",
    project_app_monexo_final_p1:
      "The Monexo project allowed me to execute a full end-to-end design process — from market analysis and ideation to usability testing and iterative interface refinement.",
    project_app_monexo_final_p2:
      "I focused on crafting simple, predictable user solutions supporting business objectives by fostering product trust.",
    project_app_monexo_final_check1:
      "✅ The application simplifies currency exchange while addressing core user needs.",
    project_app_monexo_final_check2:
      "✅ Transparent exchange rates and fee communications build user trust and long-term engagement.",
    project_app_monexo_final_github:
      "👨‍💻 The project is fully implemented and available on GitHub, featuring a complete mobile application, NBP API integration, Web Service business logic, and database backend along with setup instructions.",
    project_app_monexo_after_title: "After the Project",
    project_app_monexo_takeaways_title: "Key Takeaways",
    project_app_monexo_takeaway_part1: "Conscious and meticulous ",
    project_app_monexo_takeaway_b: "handling of network states",
    project_app_monexo_takeaway_part2:
      " is crucial for a consistent and predictable user experience in a mobile app — mobile internet is not as reliable as broadband and is significantly more prone to connectivity interruptions.",
    project_app_monexo_next_steps_title: "Next Steps",
    project_app_monexo_next_1_b: "Multi-currency wallet support",
    project_app_monexo_next_1_text:
      " - the interface architecture was designed for easy expansion to multiple wallets (e.g., a separate savings wallet).",
    project_app_monexo_next_2_b: "Automated exchange orders",
    project_app_monexo_next_2_text:
      " - ability to set buy orders at a specific exchange rate, with budget safeguards to prevent overdrafts.",
    project_app_monexo_next_3_b: "Cryptocurrency integration",
    project_app_monexo_next_3_text:
      " - potential integration with the crypto market via exchange APIs, enabling storage and exchange of both fiat and digital currencies.",
    project_app_monexo_next_project_label: "See next project:",
    project_app_monexo_next_project_link: "Website - PlanetRoad",

    // PROJECT WEB PLANET
    project_web_planetroad_project_title: "Website",
    project_web_planetroad_project_description:
      "A new website for PlanetRoad, which I designed to make it easier for clients to get to know the company, showcase past projects in a clear and appealing way, and simplify contacting the team.",
    project_web_planetroad_role_label: "Role:",
    project_web_planetroad_role_value: "UX Designer",
    project_web_planetroad_responsibilities_label: "Scope of Responsibilities:",
    project_web_planetroad_responsibilities_value:
      "Research, Product Concept, Interface Design, Website Implementation, Usability Testing",
    project_web_planetroad_duration_label: "Duration:",
    project_web_planetroad_duration_value: "34 weeks",
    project_web_planetroad_methodology_label: "Methodology:",
    project_web_planetroad_methodology_value: "Lean UX",
    project_web_planetroad_banner_badge: "Website",
    project_web_planetroad_context_heading: "Context",
    project_web_planetroad_context_text:
      "The client needed a redesigned website to showcase completed projects and build a professional brand image. My main objective was to create an intuitive, cohesive website aligned with the new visual identity and easy to navigate for users with varying levels of technical literacy (as it was difficult to pinpoint a single user profile in this regard).",
    project_web_planetroad_problem_heading: "Problem",
    project_web_planetroad_problem_text:
      "Users were unable to easily learn about the company's offerings, experience, or contact the PlanetRoad team, as the existing website failed to showcase project quality and experience, and contact options were not directly accessible.",
    project_web_planetroad_goals_heading: "Goals",
    project_web_planetroad_goal_1_label:
      "Make it easier for clients to get to know the company",
    project_web_planetroad_goal_1_text:
      "– quick access to information about PlanetRoad’s background and experience.",
    project_web_planetroad_goal_2_label: "Showcase completed projects",
    project_web_planetroad_goal_2_text:
      " in a clear, attractive manner highlighting the company's professionalism.",
    project_web_planetroad_goal_3_label: "Simplify contacting the firm",
    project_web_planetroad_goal_3_text:
      "– intuitive navigation, visible forms, and easy access to contact details.",
    project_web_planetroad_goal_4_label:
      "Professional and cohesive online presence",
    project_web_planetroad_goal_4_text:
      "– supporting a brand image aligned with the new visual identity.",
    project_web_planetroad_constraints_heading: "Constraints",
    project_web_planetroad_constraint_1_label:
      "The website must suit the B2B sector",
    project_web_planetroad_constraint_1_text:
      "– maintaining a professional and reliable corporate image.",
    project_web_planetroad_constraint_2_label:
      "The new site must be consistent with the existing visual identity",
    project_web_planetroad_constraint_2_text:
      "– colors, typography, and graphic style must match the new branding.",
    project_web_planetroad_constraint_3_label:
      "Lack of prior digital experience by the client",
    project_web_planetroad_constraint_3_text:
      "– the site must be intuitive for users unaccustomed to digital tools.",
    project_web_planetroad_constraint_4_label:
      "Maintaining information availability",
    project_web_planetroad_constraint_4_text:
      " during rollout – the company must remain fully reachable to clients throughout the process.",
    project_web_planetroad_research_heading: "Research",
    project_web_planetroad_research_p1:
      "I started the PlanetRoad website redesign project with an audit of the old site and gaining a deep understanding of my Client's expectations.",
    project_web_planetroad_research_p2_bold1: "An interview with the CEO",
    project_web_planetroad_research_p2_text1:
      " outlined the vision for how the company's website should look. PlanetRoad focuses primarily on ",
    project_web_planetroad_research_p2_bold2: "B2B partnerships",
    project_web_planetroad_research_p2_text2:
      " - (e.g., developers) and local government units. Therefore, professionalism, building brand trust, and increasing credibility were top priorities. The CEO also shared ideas regarding key information to feature and provided useful links for footer navigation.",
    project_web_planetroad_research_p3_lead: "Next, I conducted a",
    project_web_planetroad_research_p3_bold: "competitor analysis",
    project_web_planetroad_research_p3_text:
      " in the road infrastructure industry, which revealed significant visual repetition — many companies relied on similar layouts and repetitive compositions. Here, the challenge wasn't merely standing out, but striking a balance between technical professionalism and a modern approach to web design.",
    project_web_planetroad_research_p4_lead: "I then",
    project_web_planetroad_research_p4_bold: "researched user expectations",
    project_web_planetroad_research_p4_text:
      " and frequently searched terms regarding industry firms to ensure the usability of the new site from both UX and SEO perspectives. Content analysis showed three essentials: a clear offer, quick contact options, and a project portfolio.",
    project_web_planetroad_research_p5_lead: "After that, I moved on to",
    project_web_planetroad_research_p5_bold: "user journey analysis",
    project_web_planetroad_research_p5_text:
      ", which helped me better understand the steps a potential client takes from landing on the site to reaching out. Mapping these stages allowed me to structure a logical, intuitive page hierarchy so users could easily find services, view projects, and get in touch.",
    project_web_planetroad_research_p6_lead: "In parallel, I conducted an",
    project_web_planetroad_research_p6_bold: "SEO analysis",
    project_web_planetroad_research_p6_text:
      " to identify top search terms related to road construction and infrastructure design. The findings helped select optimal keywords and structure headers and sections effectively, ensuring the site is not only visually appealing but also visible in search engines.",
    project_web_planetroad_research_p7_lead: "I also carried out a",
    project_web_planetroad_research_p7_bold:
      "technical audit of the old website",
    project_web_planetroad_research_p7_text:
      ", which uncovered issues with loading speeds, poor mobile readability, and a lack of clear conversion funnels. These insights formed the foundation for designing a new layout and optimizing performance according to modern web standards.",
    project_web_planetroad_caption_research_insights: "Research Insights",
    project_web_planetroad_ideation_heading: "Ideation",
    project_web_planetroad_ideation_p1:
      "During the ideation phase, I translated research findings into concrete design decisions. I focused on structuring the site so that within the first few seconds it answers core user questions: what the company does, what projects it has completed, and how to quickly get in touch.",
    project_web_planetroad_ideation_p2_lead: "I started the project with",
    project_web_planetroad_ideation_p2_bold: "prioritization",
    project_web_planetroad_ideation_p2_text:
      " - setting the primary goal as making it effortless for clients to explore the company and its completed work. Visual aesthetics were treated as a secondary priority, though still essential for creating an engaging experience. The lowest priority was assigned to cross-channel consistency, as adherence to the newly established Visual Identity naturally resolved this requirement.",
    project_web_planetroad_ideation_p3:
      "In parallel, I worked on low-fidelity wireframes, testing various content layouts and information hierarchies before committing to the final interface.",
    project_web_planetroad_ideation_p4:
      "Throughout the design phase, I ensured accessibility and interface legibility by adhering to WCAG standards. I established a Style Guide covering color schemes, typography, and UI components to guarantee visual consistency.",
    project_web_planetroad_caption_info_architecture:
      "Information Architecture",
    project_web_planetroad_caption_user_flow: "Main User Flow",
    project_web_planetroad_caption_wf_hero: "Wireframes - Hero Section",
    project_web_planetroad_caption_wf_team: "Wireframes - Team Section",
    project_web_planetroad_caption_wf_numbers:
      "Wireframes - In Numbers Section",
    project_web_planetroad_caption_wf_experience:
      "Wireframes - Experience Page",
    project_web_planetroad_caption_visual_identity:
      "PlanetRoad Visual Identity",
    project_web_planetroad_brand_identity_link_text:
      "The full Visual Identity system can be viewed at ",
    project_web_planetroad_brand_identity_link_anchor: "this link",
    project_web_planetroad_iterations_heading: "Iterations",
    project_web_planetroad_iterations_sub_old:
      "This is how the website looked before the redesign:",
    project_web_planetroad_caption_old_www_1: "Pre-redesign website - part 1",
    project_web_planetroad_caption_old_www_2: "Pre-redesign website - part 2",
    project_web_planetroad_iterations_p1:
      "As shown above, the previous site conveyed basic company information, but lacked the detail and persuasiveness needed to convert potential B2B clients.",
    project_web_planetroad_iterations_p2:
      "To change this, I began rebuilding the corporate website from the ground up to make it a true brand showcase. First, I considered...",
    project_web_planetroad_iter1_subheading:
      "How to build user trust from first contact? — Expanding the site structure",
    project_web_planetroad_iter1_p1_lead:
      "Early in the site's development, I identified that:",
    project_web_planetroad_iter1_p1_bold1:
      "The Hero section failed to immediately communicate what the company does",
    project_web_planetroad_iter1_p1_text1:
      " - which could confuse visitors arriving via organic search. Furthermore, ",
    project_web_planetroad_iter1_p1_bold2:
      "the homepage provided insufficient space to build trust and tell the company's story",
    project_web_planetroad_iter1_p1_text2:
      ". Discussions with the CEO and competitor audits highlighted that successful B2B infrastructure firms ",
    project_web_planetroad_iter1_p1_bold3:
      "highlight the people behind the brand along with concrete metrics demonstrating operational scale",
    project_web_planetroad_iter1_p2_text1:
      "To address these issues, the first iteration redesigned the Hero section from scratch and added two new key sections to the homepage: ",
    project_web_planetroad_iter1_p2_bold1: "a team presentation",
    project_web_planetroad_iter1_p2_text2: " (photo curation and editing) and ",
    project_web_planetroad_iter1_p2_bold2: "company experience in numbers",
    project_web_planetroad_iter1_p2_text3:
      " (compiling firm statistics). I also established two dedicated subpages: ",
    project_web_planetroad_iter1_p2_bold3: "“Contact”",
    project_web_planetroad_iter1_p2_text4:
      " (previously just a direct link) and ",
    project_web_planetroad_iter1_p2_bold4: "“Experience”",
    project_web_planetroad_iter1_p2_text5:
      ", moving the contact form off the main page and embedding initial project testimonials.",
    project_web_planetroad_iter1_p3_text1:
      "This phase also served as an educational milestone for the client — ",
    project_web_planetroad_iter1_p3_bold:
      "I emphasized the critical importance of systematically gathering client testimonials upon project completion",
    project_web_planetroad_iter1_p3_text2:
      ", a practice previously overlooked during daily operations. Over time, these testimonials serve as proof of active capability and quality.",
    project_web_planetroad_iter1_p4_text1: "The result of these changes was ",
    project_web_planetroad_iter1_p4_bold:
      "improved content distribution, clearer information hierarchy, and a stronger first impression",
    project_web_planetroad_iter1_p4_text2:
      ", directly supporting the site's branding and business acquisition goals.",
    project_web_planetroad_caption_hero_new: "New Hero Section",
    project_web_planetroad_caption_numbers_new:
      'New Homepage Section - "PlanetRoad in Numbers"',
    project_web_planetroad_caption_team_new: 'New Homepage Section - "Team"',
    project_web_planetroad_caption_contact_new: "New Subpage - Contact",
    project_web_planetroad_caption_experience_new: "New Subpage - Experience",
    project_web_planetroad_iter2_subheading:
      "Why page speed matters in B2B — Performance and SEO optimization",
    project_web_planetroad_iter2_p1:
      "Recent studies indicate that over 50% of users leave a page if it takes longer than 3 seconds to load. Aware that poor load times could negate the benefits of the new design, I tested and optimized site performance after adding rich multimedia content.",
    project_web_planetroad_iter2_p2_text1:
      "Expanding the page structure initially caused a noticeable ",
    project_web_planetroad_iter2_p2_bold1: "drop in page performance",
    project_web_planetroad_iter2_p2_text2:
      ", particularly on mobile devices. Diagnostics via Google PageSpeed Insights and Lighthouse revealed that ",
    project_web_planetroad_iter2_p2_bold2:
      "uncompressed image assets significantly delayed load times",
    project_web_planetroad_iter2_p2_text3:
      ", negatively impacting user experience and search rankings.",
    project_web_planetroad_iter2_p3_text1: "During this iteration, I executed ",
    project_web_planetroad_iter2_p3_bold: "thorough technical optimization",
    project_web_planetroad_iter2_p3_text2:
      ": converting images to WebP format, refining HTML structure, optimizing resource loading, and implementing on-page SEO adjustments to enhance Google rankings.",
    project_web_planetroad_iter2_p4_text1: "Following implementation, ",
    project_web_planetroad_iter2_p4_bold:
      "page load speed improved significantly",
    project_web_planetroad_iter2_p4_text2:
      ", meeting Core Web Vitals recommendations and establishing a solid foundation for organic search growth. While historical Lighthouse logs were unavailable, performance gains were estimated based on measurable asset weight reduction and established web optimization standards.",
    project_web_planetroad_caption_optimalization: "Website Optimization",
    project_web_planetroad_iter3_subheading:
      "Aligning user needs with business goals — Service offer prioritization",
    project_web_planetroad_iter3_p1_text1:
      "In the next iteration, working alongside the CEO, we identified that ",
    project_web_planetroad_iter3_p1_bold1:
      "the existing service offer lacked clarity and business alignment",
    project_web_planetroad_iter3_p1_text2:
      ". Strategic discussions revealed that ",
    project_web_planetroad_iter3_p1_bold2:
      "not all services held equal profitability or strategic importance for company growth",
    project_web_planetroad_iter3_p2_text1: "To solve this, ",
    project_web_planetroad_iter3_p2_bold1:
      "we compiled a comprehensive inventory of all provided services",
    project_web_planetroad_iter3_p2_text2:
      ", which were then detailed, priced, estimated for turnaround times, and ",
    project_web_planetroad_iter3_p2_bold2:
      "prioritized according to business profitability",
    project_web_planetroad_iter3_p2_text3:
      ". Next, I built a dedicated projects subpage so prospective clients could evaluate offerings prior to initial contact.",
    project_web_planetroad_iter3_p3_text1: "The outcome was ",
    project_web_planetroad_iter3_p3_bold:
      "a clear, structured service portfolio",
    project_web_planetroad_iter3_p3_text2:
      " supporting both the sales process and long-term business strategy.",
    project_web_planetroad_caption_realizacje: "New Subpage - Projects",
    project_web_planetroad_iter4_subheading:
      "Helping users quickly find the right service — Streamlining project showcases",
    project_web_planetroad_iter4_p1_text1:
      "By analyzing user behavior and conducting quick usability tests, I observed that ",
    project_web_planetroad_iter4_p1_bold1:
      "the thematic grouping of projects on the main page was unclear to new visitors",
    project_web_planetroad_iter4_p1_text2:
      ". Users primarily wanted to verify ",
    project_web_planetroad_iter4_p1_bold2:
      "whether the firm handled specific service types",
    project_web_planetroad_iter4_p2_text1: "Consequently, I decided to ",
    project_web_planetroad_iter4_p2_bold1:
      "reduce information density on the homepage",
    project_web_planetroad_iter4_p2_text2: ", highlighting ",
    project_web_planetroad_iter4_p2_bold2: "explicit service names",
    project_web_planetroad_iter4_p2_text3:
      " while moving detailed descriptions to dedicated project subpages.",
    project_web_planetroad_iter4_p3_text1:
      "During iterative page reviews and simple usability checks, I found that ",
    project_web_planetroad_iter4_p3_bold:
      "the visual imagery did not always clearly communicate the offered services",
    project_web_planetroad_iter4_p3_text2:
      ". Certain stock photos felt overly generic, making it difficult for users to connect visuals with specific service capabilities.",
    project_web_planetroad_iter4_p4_text1:
      "Given budget constraints, I took a practical approach — ",
    project_web_planetroad_iter4_p4_bold:
      "I personally staged and photographed authentic visual assets",
    project_web_planetroad_iter4_p4_text2:
      " that accurately represented the nature and scope of the firm's services.",
    project_web_planetroad_iter4_p5_text1: "As a result, ",
    project_web_planetroad_iter4_p5_bold:
      "the service presentation became far more cohesive",
    project_web_planetroad_iter4_p5_text2:
      ", enabling visitors to grasp the core capabilities quickly without sifting through long text passages.",
    project_web_planetroad_iter4_p6_text1: "Following this update, ",
    project_web_planetroad_iter4_p6_bold:
      "navigation became simpler and more intuitive",
    project_web_planetroad_iter4_p6_text2:
      ", allowing users to reach relevant service areas faster.",
    project_web_planetroad_caption_offer_main: "Homepage Offer Adjustments",
    project_web_planetroad_caption_photo_edit1:
      "Customizing first corporate image asset",
    project_web_planetroad_caption_photo_edit2:
      "Customizing second corporate image asset",
    project_web_planetroad_caption_photo_take1:
      "Taking first original company photo",
    project_web_planetroad_caption_photo_take2:
      "Taking second original company photo",
    project_web_planetroad_iter_h3_3:
      "How do I reduce decision-making time in the tender process? — Sorting and grouping references",
    project_web_planetroad_iter_p_12:
      "As the website developed, the company completed several projects, and the number of references increased significantly. This led to <b>longer search times for specific references</b>",
    project_web_planetroad_iter_p_13:
      "During a conversation with the CEO, I asked him to find the longest PFU reference. The task took him <b>about 3 minutes</b>, despite knowing the structure of the website.",
    project_web_planetroad_iter_p_14:
      "This clearly showed that <b>the current presentation of references did not support actual business needs</b>. In response to this issue, <b>I grouped references by the type of service provided</b>, as a potential client looks for a contractor with experience in a specific project type, e.g., Functional and Utility Program with requirements matching specific parameters.",
    project_web_planetroad_iter_p_15:
      "The result was <b>a significant reduction in search time for specific references and support for the real tender process</b>.",
    project_web_planetroad_fig_title_24: "Reference Categorization",
    project_web_planetroad_iter_h3_4:
      "How do I enhance user sense of security? — Transparency and GDPR",
    project_web_planetroad_iter_p_16:
      "With the growth of the website came the need to <b>better ensure transparency in personal data processing</b>, both from a formal and brand image perspective.",
    project_web_planetroad_iter_p_17:
      "I created a <b>dedicated privacy policy page</b> clearly communicating how client data is processed. Now, anyone interested can access this subpage from the bottom navigation and resolve any doubts.",
    project_web_planetroad_iter_p_18:
      "The result was <b>higher company credibility and a greater sense of security for users</b>.",
    project_web_planetroad_fig_title_25: "Privacy Policy Subpage",
    project_web_planetroad_iter_h3_5:
      "How do I show the real value of the team's work? — Visual presentation of project outcomes",
    project_web_planetroad_iter_p_19:
      "The social media revolution in recent years clearly showed that <b>visual presentation of work results</b> has a huge impact on perceived service value, and short videos are key to capturing user attention.",
    project_web_planetroad_iter_p_20:
      'In response to this analysis, I enriched the "Experience" and "Projects" subpages <b>with video material showing the process - project photos as well as \'before and after\' photos</b>.',
    project_web_planetroad_iter_p_21:
      "As a result, potential clients can <b>better understand the scope of work and see the final result of the investment</b>.",
    project_web_planetroad_fig_title_26:
      "Section showcasing a specific project",
    project_web_planetroad_final_h2: "Final Outcome",
    project_web_planetroad_final_p_1:
      "✅ Increased company online visibility and generated inquiries from potential clients thanks to a transparent presentation of the offer and portfolio.",
    project_web_planetroad_final_p_2:
      "✅ Differentiated the company from competitors through a clear display of services and past projects required in tenders.",
    project_web_planetroad_final_p_3:
      "✅ Ensured website consistency with the new visual identity, strengthening the professional B2B brand image.",
    project_web_planetroad_final_p_4:
      "✅ Improved user experience and conversion chances through intuitive navigation and easy contact.",
    project_web_planetroad_fig_title_27: "PlanetRoad website view",
    project_web_planetroad_final_link_text:
      "The full version of the website can be viewed at www.planetroad.pl.",
    project_web_planetroad_thumb_1: "Thumbnail 1",
    project_web_planetroad_thumb_2: "Thumbnail 2",
    project_web_planetroad_thumb_3: "Thumbnail 3",
    project_web_planetroad_thumb_4: "Thumbnail 4",
    project_web_planetroad_thumb_5: "Thumbnail 5",
    project_web_planetroad_thumb_6: "Thumbnail 6",
    project_web_planetroad_thumb_7: "Thumbnail 7",
    project_web_planetroad_thumb_8: "Thumbnail 8",
    project_web_planetroad_thumb_9: "Thumbnail 9",
    project_web_planetroad_thumb_10: "Thumbnail 10",
    project_web_planetroad_thumb_11: "Thumbnail 11",
    project_web_planetroad_thumb_12: "Thumbnail 12",
    project_web_planetroad_thumb_13: "Thumbnail 13",
    project_web_planetroad_thumb_14: "Thumbnail 14",
    project_web_planetroad_thumb_15: "Thumbnail 15",
    project_web_planetroad_thumb_16: "Thumbnail 16",
    project_web_planetroad_thumb_17: "Thumbnail 17",
    project_web_planetroad_thumb_18: "Thumbnail 18",
    project_web_planetroad_thumb_19: "Thumbnail 19",
    project_web_planetroad_thumb_20: "Thumbnail 20",
    project_web_planetroad_thumb_21: "Thumbnail 21",
    project_web_planetroad_thumb_22: "Thumbnail 22",
    project_web_planetroad_thumb_23: "Thumbnail 23",
    project_web_planetroad_thumb_24: "Thumbnail 24",
    project_web_planetroad_thumb_25: "Thumbnail 25",
    project_web_planetroad_thumb_26: "Thumbnail 26",
    project_web_planetroad_thumb_27: "Thumbnail 27",
    project_web_planetroad_after_h2: "Post-Project Insights",
    project_web_planetroad_after_h3_1: "Key Takeaways",
    project_web_planetroad_after_p_1_part1: "🧠 In B2B projects, ",
    project_web_planetroad_after_p_1_b:
      "clear information structure and fast trust-building",
    project_web_planetroad_after_p_1_part2:
      " is essential — users don't explore the site deeply; they scan it to quickly confirm the company's expertise and credibility.",
    project_web_planetroad_after_p_2:
      "🧠 Technical performance and accessibility (WCAG) aren't just extra additions — for public sector clients and major investors, they become real criteria for judging professionalism. Furthermore, in competitive bidding rankings, performance and accessibility can determine whether a contract is awarded or lost if slow loading leads users to abandon the site.",
    project_web_planetroad_after_h3_2: "Next Steps",
    project_web_planetroad_after_p_3:
      "\n– each project could be expanded into a case study outlining the challenge, scope of work, solutions applied, and results, reinforcing an expert image and facilitating purchasing decisions.",
    project_web_planetroad_after_p_3_b:
      "🔜 Expanding portfolio items with case studies",
    project_web_planetroad_after_p_4:
      "\n– dedicated subpages for road design, traffic management, or technical consulting would allow better SEO positioning and targeted communication tailored to specific client segments.",
    project_web_planetroad_after_p_4_b:
      "🔜 Creating dedicated landing pages for specific services",
    project_web_planetroad_after_p_5:
      "\n– an insights or news section (e.g., regulatory changes, design best practices) could build long-term visibility on Google and position PlanetRoad as an industry thought leader.",
    project_web_planetroad_after_p_5_b:
      "🔜 Adding expert content and industry insights",
    project_web_planetroad_after_p_6:
      "\n– further user behavior analysis (scroll depth, click maps, A/B testing) would refine page layout and increase lead generation without needing more traffic.",
    project_web_planetroad_after_p_6_b:
      "🔜 Advanced analytics and conversion rate optimization",
    project_web_planetroad_navloop_text: "See next project: ",
    project_web_planetroad_navloop_link: "Visual Identity - PlanetRoad",

    // PROJECT HABITBUBBL
    project_habitbubbl_badge: "Habit Bubbl",
    project_habitbubbl_title: "Progressive Mobile App",
    project_habitbubbl_desc:
      "A complete toolkit for productivity and goal achievement — a progressive mobile app (PWA) bringing task management, habit-building, and long-term goals into one system.",
    project_habitbubbl_role_label: "Role:",
    project_habitbubbl_role_val: "UX/UI Designer & Front-end Developer",
    project_habitbubbl_scope_label: "Scope:",
    project_habitbubbl_scope_val:
      "Research, Information Architecture, UX/UI Design, PWA Implementation, Usability Testing, Performance Optimization",
    project_habitbubbl_duration_label: "Duration:",
    project_habitbubbl_duration_val: "4 months",
    project_habitbubbl_methodology_label: "Methodology:",
    project_habitbubbl_methodology_val:
      "An iterative mobile-first and offline-first process — from desk research, through information architecture and UI design in Figma, to usability testing and Google Lighthouse optimization.",

    project_habitbubbl_about_h2: "1. About the Project",
    project_habitbubbl_context_title: "Context",
    project_habitbubbl_about_p1:
      "<strong>Habit Bubbl</strong> is a progressive mobile app (PWA) built as my engineering thesis in Computer Science (Vizja University), supervised by Dr. Eng. Marcin Kacprowicz.",
    project_habitbubbl_problem_title: "Problem",
    project_habitbubbl_about_p3:
      "The target audience is working adults (with a particular focus on the 18–30 age group) dealing with low motivation, difficulty organizing their time, procrastination, and the high cognitive load of balancing work with home responsibilities — and the productivity apps on the market offer no support once their self-discipline runs out.",
    project_habitbubbl_goals_title: "Goal",
    project_habitbubbl_goal1:
      "🎯 <b>Effectively completing daily tasks and building lasting habits</b> that feed into long-term goals, regardless of how difficult they are.",
    project_habitbubbl_goal2:
      "🎯 <b>A strong focus on UX techniques</b> — an optimized user journey, an intuitive interface, and gamification elements — supporting regularity and a genuine sense of progress.",
    project_habitbubbl_constraints_title: "Constraints",
    project_habitbubbl_constraint1:
      "⚠️ <b>Unstable mobile connections</b> — as many as 56% of smartphone users regularly run into network issues, so the app had to work fully offline.",
    project_habitbubbl_constraint2:
      "⚠️ <b>Built solo as a thesis project</b> — from research through implementation and optimization, without a team, in 4 months.",
    project_habitbubbl_constraint3:
      "⚠️ <b>Minimizing cognitive load</b> — the interface had to stay simple and intuitive despite bringing three layers (tasks, habits, goals) into one system.",

    project_habitbubbl_research_h2: "2. Research",
    project_habitbubbl_research_p1:
      "Instead of a limited, custom survey, I chose desk research based on data already available online, grounding the assumptions in global market reports (Statista, Google Web.dev, Global Wireless Solutions, among others).",
    project_habitbubbl_research_p2:
      "There are plenty of productivity apps on the market — Microsoft To Do, InnerGrow Habit, Apple Reminders among them. Their strength is simplicity, but the competitive analysis revealed one shared, significant functional gap:",
    project_habitbubbl_research_item1:
      "<strong>No motivational mechanisms:</strong> when a user misses a task, none of these apps offer a built-in way to help them get back on track.",
    project_habitbubbl_research_item2:
      "<strong>No structural links:</strong> tasks, habits, and goals exist in isolation — there's no connection that would support regularity or building lasting habits.",
    project_habitbubbl_research_item3:
      "<strong>No goals at all:</strong> users complete even the smallest tasks in service of a bigger goal, yet none of the analyzed apps account for that.",
    project_habitbubbl_research_p3:
      "The quantitative data also confirmed the architecture choice was sound: over half of global internet traffic comes from mobile devices, and as many as <strong>56%</strong> of mobile users regularly run into network stability issues. The scale of PWA's potential is shown by Alibaba, which saw an average <strong>76% increase</strong> in conversion and user engagement after adopting the architecture.",
    project_habitbubbl_research_p4:
      "Habit Bubbl addresses that gap with an integrated system where individual actions build habits, which in turn feed directly into progress on the underlying goals.",

    project_habitbubbl_ideation_h2: "3. Ideation",
    project_habitbubbl_ideation_p1:
      "I based the information architecture on four screens — Task List, Calendar, Habits with statistics, and the Hero screen — connected via Tab Navigation, familiar to users from native mobile apps. For the key features, I mapped out user flows in FigJam and analyzed them for step count and potential pain points.",
    project_habitbubbl_ideation_p2:
      "One decision made at this stage was deliberately <strong>excluding single-task editing</strong> — to avoid overloading the user with options on the main screen, I kept editing to recurring habits and long-term goals only.",
    project_habitbubbl_ideation_p3:
      "I started the visual work with a logo and a \"Liquid Glass\" style guide, which set the design constraints: consistent colors, minimizing cognitive load, and accessibility (contrast, size of interactive elements). I designed the interface in Figma — from low-fidelity wireframes, through high-fidelity mockups, to an interactive prototype — validating assumptions before implementation began.",
    project_habitbubbl_ideation_stack_label:
      "<strong>Tech stack and tools:</strong>",
    project_habitbubbl_ideation_stack_item1:
      "<strong>UX/UI design:</strong> Figma (lo-fi/hi-fi mockups, design system), FigJam (user flows, diagrams).",
    project_habitbubbl_ideation_stack_item2:
      "<strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+).",
    project_habitbubbl_ideation_stack_item3:
      "<strong>PWA & architecture:</strong> Service Worker (offline mode, caching), Web App Manifest (installability), IndexedDB (asynchronous local database, faster than Local Storage at larger data volumes).",
    project_habitbubbl_ideation_stack_item4:
      "<strong>Tools & testing:</strong> Visual Studio Code, Chrome DevTools, Google Lighthouse.",

    project_habitbubbl_iterations_h2: "4. Iterations",
    project_habitbubbl_iterations_p1:
      "I ran a series of usability studies — scenario testing, first-click testing, and heuristic analysis — with target users. They surfaced violations of flexibility and error-handling heuristics (H7, H9) and consistency (H4), plus WCAG accessibility barriers (contrast below 4.5:1 on neon background elements). Every finding turned into a specific fix:",
    project_habitbubbl_iterations_item1:
      "<strong>Overly aggressive color and unreadable background:</strong> the intense fuchsia on the splash screen tired the eyes, and weak background dimming let text underneath bleed through and distract. I softened the hue and added a full background layer above the data layer during onboarding.",
    project_habitbubbl_iterations_item2:
      "<strong>Guide gestures ignored:</strong> users instinctively tried to swipe through the tutorial instead of using the nav dots, and there was no confirmation after enabling notifications. I added full swipe support and a system confirmation after notifications are enabled.",
    project_habitbubbl_iterations_item3:
      "<strong>Inconsistent naming on the main section:</strong> the \"today's tasks\" label didn't match its contents, since it mixed tasks and habits. I renamed the heading to \"To Do Today.\"",
    project_habitbubbl_iterations_item4:
      "<strong>Too little friction on deletion:</strong> tapping anywhere on a habit tile instantly unchecked it, and deleting an item took only two clicks with no undo. I introduced a hold-to-delete gesture — the item disappears only after 3 seconds.",
    project_habitbubbl_iterations_item5:
      "<strong>No XP feedback and audio bugs:</strong> completing a task gave no clear indication of XP earned, and the check-off sound incorrectly fired when unchecking too. I added a pop-up \"XP bubble\" and tied the bubble-pop sound exclusively to the positive completion action.",
    project_habitbubbl_iterations_item6:
      "<strong>Habit list breaking on mobile:</strong> elements overlapped, and the interface occasionally froze when editing several items at once. I switched the layout to a vertically expandable list, eliminating the overlap.",
    project_habitbubbl_iterations_item7:
      "<strong>Main-thread slowdowns:</strong> dynamically rendering many habit \"bubbles\" blocked the interface on weaker devices (long Long Tasks, poor FCP/LCP). I optimized the code for Total Blocking Time and removed render-blocking CSS from the critical rendering path.",
    project_habitbubbl_hero_alt: "Habit Bubbl - project banner",
    project_habitbubbl_styleguide_alt: "Habit Bubbl app style guide",
    project_habitbubbl_styleguide_caption:
      "\"Liquid Glass\" style guide (1/2) — color palette and typography",
    project_habitbubbl_styleguide2_alt: "Habit Bubbl app style guide - page 2",
    project_habitbubbl_styleguide2_caption:
      "\"Liquid Glass\" style guide (2/2) — component DNA, logo versions, spacing",
    project_habitbubbl_lofi_alt: "Habit Bubbl low-fidelity wireframes",
    project_habitbubbl_lofi_caption:
      "Low-fidelity wireframes — Today, Calendar, Habits, Hero, Modal",

    project_habitbubbl_storybook_h2: "5. Systemizing Components: Storybook",
    project_habitbubbl_storybook_p1:
      "After finishing the main version of the app, I wanted to systemize my workflow and focus even more on components — so I introduced Storybook (26 stories across 5 components) into the existing vanilla JS/HTML/CSS app, with no build step. Rather than forcing a framework, I picked the tool (@storybook/html-vite) to fit the codebase's actual architecture — plain functions returning DOM nodes, the exact shape the app already used for its components.",
    project_habitbubbl_storybook_item1:
      "<strong>Deliberate scope, not a rewrite:</strong> I didn't refactor the entire ~2,000-line UI file into a component library. I only extracted pieces with a real reason to move — genuine functional purity, or proven duplication of the same markup across all 4 pages.",
    project_habitbubbl_storybook_item2:
      "<strong>Isolating components surfaced real bugs:</strong> the progress-ring animation was silently dead due to a mismatched CSS class name (fixed), and the accessibility addon flagged missing \"for\" attributes on form labels — after it caught 2 of 8 instances, I audited the whole modal and fixed all eight.",
    project_habitbubbl_storybook_item3:
      "<strong>\"Premium glass\" redesign with zero new values:</strong> I stepped the task bubbles up one tier on the project's existing five-level \"--glass-*\" token scale (background, blur, border, shadow) — nothing was invented from scratch.",
    project_habitbubbl_storybook_link: "View Storybook →",

    project_habitbubbl_final_h2: "6. Final Result",
    project_habitbubbl_final_p1:
      "The app consists of four main modules supporting productivity:",
    project_habitbubbl_final_item1:
      "<strong>Task List:</strong> managing the current day's tasks.",
    project_habitbubbl_final_item2:
      "<strong>Calendar:</strong> planning ahead and reviewing past tasks.",
    project_habitbubbl_final_item3:
      "<strong>Habits & Stats screen:</strong> tracking regularity and how well habits have stuck.",
    project_habitbubbl_final_item4:
      "<strong>Hero screen (gamification):</strong> managing long-term goals, and viewing growth stats and user level.",
    project_habitbubbl_screenscore_caption:
      "Splash Screen, Today, Calendar, and Habits",
    project_habitbubbl_screens_caption:
      "Onboarding, adding a habit, the guide, and the reward system (Level Up)",
    project_habitbubbl_final_p2:
      "Performance work — splitting one 86 KB CSS file into smaller sheets loaded only where needed, hosting fonts locally instead of via Google Fonts, CSS minification, and converting images to WebP and audio to MP3 — translated into a measurable Google Lighthouse improvement:",
    project_habitbubbl_impact_card1_number: "-52%",
    project_habitbubbl_impact_card1_label:
      "First Contentful Paint: 2.35s to 1.13s",
    project_habitbubbl_impact_card2_number: "-52%",
    project_habitbubbl_impact_card2_label:
      "Largest Contentful Paint: 2.85s to 1.38s",
    project_habitbubbl_impact_card3_number: "100/100",
    project_habitbubbl_impact_card3_label:
      "Google Lighthouse score in nearly every category",
    project_habitbubbl_impact_card4_number: "up to -44%",
    project_habitbubbl_impact_card4_label:
      "less CSS downloaded per page",

    project_habitbubbl_after_h2: "7. After the Project",
    project_habitbubbl_takeaways_h3: "Key Takeaways",
    project_habitbubbl_after_p1:
      "🧠 Building on a PWA architecture together with UX principles and gamification mechanics let me create a lightweight, fast tool that works independently of the network connection. Bringing tasks, habits, and goals into one system meaningfully cuts cognitive load and helps sustain long-term user motivation.",
    project_habitbubbl_after_p2:
      "🔁 Implementing it as a PWA let me test every feature in practice, offline included, and make adjustments based on my own observations of user behavior — not just design assumptions.",
    project_habitbubbl_roadmap_h3: "Where I'd Take It Next",
    project_habitbubbl_roadmap_p1:
      "Three directions I'd develop Habit Bubbl in further:",
    project_habitbubbl_roadmap_item1:
      "🔜 <strong>Social gamification (priority):</strong> accounts with cloud sync, a friends screen with shared challenges and leaderboards, a random-reward system with personalized avatars.",
    project_habitbubbl_roadmap_item2:
      "🔜 <strong>Expanding the RPG & rewards system:</strong> XP tracked per specific habit feeding into the related Hero skill's level, unlockable interface skins.",
    project_habitbubbl_roadmap_item3:
      "🔜 <strong>UX & data optimization:</strong> a flag system for categorizing and filtering tasks, advanced goal sorting by deadline, and remembering favorite locations for faster task planning.",
    project_habitbubbl_navloop_text: "See next project:",
    project_habitbubbl_navloop_link: "WKDZIK.PL Audit",

    // PROJECT VI PLANETROAD
    project_vi_planetroad_title: "Visual Identity",
    project_vi_planetroad_subtitle: "PlanetRoad",
    project_vi_planetroad_intro:
      "PlanetRoad is a road design company in Poland with nearly 30 years of experience. Online, the company only had a basic website, which didn't allow clients to get to know them or make a memorable, positive impression. I began my collaboration with the company by creating a visual identity to help them transition into the digital space and establish an online presence.",
    project_vi_planetroad_img_alt_logo: "PlanetRoad Logo",
    project_vi_planetroad_goal_title: "Goal",
    project_vi_planetroad_goal_1_b: "Create a consistent visual identity",
    project_vi_planetroad_goal_1_text:
      " supporting a professional and trustworthy company image in the digital environment.",
    project_vi_planetroad_goal_2_b: "Unify visual communication methods",
    project_vi_planetroad_goal_2_text:
      " across various channels (print, web, social media).",
    project_vi_planetroad_goal_3_b:
      "Prepare the brand for further digital expansion",
    project_vi_planetroad_goal_3_text:
      " (e.g. future campaigns, online portfolio, public tenders).",
    project_vi_planetroad_constraints_title: "Constraints",
    project_vi_planetroad_constraint_1_b:
      "The company operates in the B2B sector",
    project_vi_planetroad_constraint_1_text:
      ", which requires maintaining a professional, subdued, and reliable image.",
    project_vi_planetroad_constraint_2_part1: " The new ",
    project_vi_planetroad_constraint_2_b:
      "visual identity must remain consistent with the existing logo",
    project_vi_planetroad_constraint_2_part2:
      ", which the company decided to keep while creating a new website and launching social media communication.",
    project_vi_planetroad_constraint_3_b: "Lack of prior company experience",
    project_vi_planetroad_constraint_3_text:
      " in visual communication and digital marketing.",
    project_vi_planetroad_constraint_4_b: "Necessity of maintaining continuity",
    project_vi_planetroad_constraint_4_text:
      " in business operations during implementation.",
    project_vi_planetroad_process_title: "Design Process",
    project_vi_planetroad_step1_title: "01 Research & Analysis",
    project_vi_planetroad_step1_p1:
      "I started the visual identity project for PlanetRoad with a series of analyses and conversations with company representatives, including an interview with the CEO. The goal was to understand how the brand operates in the market and find opportunities to stand out from the competition.",
    project_vi_planetroad_step1_p2_b1: "The CEO interview",
    project_vi_planetroad_step1_p2_part1:
      " revealed, among other things, that PlanetRoad mainly focuses on ",
    project_vi_planetroad_step1_p2_b2: "B2B collaboration",
    project_vi_planetroad_step1_p2_part2:
      " - with larger companies (e.g. real estate developers) and local government units. Therefore, the main design priority was to build an image based on professionalism, trust, and credibility, while maintaining a modern feel.",
    project_vi_planetroad_step1_p3_part1: "Next, I conducted a ",
    project_vi_planetroad_step1_p3_b: "competitor analysis",
    project_vi_planetroad_step1_p3_part2:
      " in the road construction industry, which revealed significant visual repetition — many companies used similar page layouts and formulaic compositions. Thus, I decided to design an identity system that would set PlanetRoad apart while preserving clarity, functionality, and high visual quality reflecting brand identity.",
    project_vi_planetroad_step1_p4_b: "Color psychology analysis",
    project_vi_planetroad_step1_p4_text:
      " of the colors used in the logo confirmed the appropriateness of their choice:",
    project_vi_planetroad_step1_color_blue:
      "• Light Blue - evokes trust and calm, associated with modernity and innovation.",
    project_vi_planetroad_step1_color_navy:
      "• Dark Blue - symbolizes professionalism and responsibility.",
    project_vi_planetroad_step1_color_summary:
      "Together, they form a reliable and cohesive palette supporting brand communication.",
    project_vi_planetroad_step1_p5_part1: "In preparation for creating ",
    project_vi_planetroad_step1_p5_b: "alternative logo variants",
    project_vi_planetroad_step1_p5_part2:
      ", I researched the practices of global brands (including Coca-Cola, Disney, Chanel) and analyzed their approaches to designing highly flexible identity systems. Insights from this analysis formed the basis for designing a set of logo variants with different levels of detail that maintain consistency and recognition across various contexts.",
    project_vi_planetroad_step1_p6:
      "Next, I examined user expectations and the most frequently searched information about companies in the industry to ensure the new website's usability regarding UX and SEO. Content analysis showed that clear offerings, quick contact, and a project portfolio were key.",
    project_vi_planetroad_step1_p7:
      "Finally, I analyzed industry communication on social media to develop a visual style tailored to the channel specifics while maintaining consistency with the visual identity and website.",
    project_vi_planetroad_step2_title: "02 Strategy",
    project_vi_planetroad_step2_p1:
      "Based on the research results, I developed a visual strategy aimed at combining a professional image with a modern character and simplicity of form.",
    project_vi_planetroad_step2_p2:
      "I focused on minimalism and clear visual communication — every design decision (from color selection to typography) stemmed from the assumption that the brand should inspire trust, stability, and modernity.",
    project_vi_planetroad_step2_p3:
      "The visual identity system was designed to be cohesive, scalable, and flexible — easily implementable across digital and print media, website, and social media channels.",
    project_vi_planetroad_step3_colors_title: "03 Design - Color Palette",
    project_vi_planetroad_step3_colors_p1:
      "Based on the two core colors used in the logo, I created a full range of shades to manage content creation flexibly. I developed a palette based on neutral grays and blue, associated with technology and, above all, trust.",
    project_vi_planetroad_img_alt_colors1:
      "Brand color shades in PlanetRoad Visual Identity",
    project_vi_planetroad_img_alt_colors2:
      "Neutral and semantic color shades in PlanetRoad Visual Identity",
    project_vi_planetroad_step3_logo_title: "03 Design - Logo",
    project_vi_planetroad_step3_logo_p1:
      "I created alternative logo versions to gain flexibility when using the logo across various company materials.",
    project_vi_planetroad_step3_logo_p2:
      "I designed both dark-background variants and different logo sizes, which are used interchangeably depending on requirements and placement constraints.",
    project_vi_planetroad_img_alt_logo_variants:
      "New color and size variants of the PlanetRoad logo created as part of the visual identity.",
    project_vi_planetroad_step3_fonts_title: "03 Design - Fonts",
    project_vi_planetroad_step3_fonts_p1:
      "To support the company's professional image, I selected the straightforward, legible, and elegant Inter font. It combines the two most important qualities for this project: readability and elegance.",
    project_vi_planetroad_step3_fonts_p2_part1:
      "As an auxiliary font, I chose ",
    project_vi_planetroad_step3_fonts_p2_part2:
      ". Its purpose is to break up the professional, subdued aesthetic and draw user attention to specific text fragments.",
    project_vi_planetroad_img_alt_fonts:
      "Fonts used by PlanetRoad selected as part of the Visual Identity",
    project_vi_planetroad_step4_website_title:
      "04 Implementation - New Website",
    project_vi_planetroad_step4_website_p1_part1:
      "The new website was designed based on the company's visual identity. It features a clean layout, cohesive communication, and intuitive navigation. I invite you to visit the website and explore the project at: ",
    project_vi_planetroad_img_alt_website:
      "Views of Hero sections of individual subpages, as well as the main page of the PlanetRoad website",
    project_vi_planetroad_step4_sm_title:
      "04 Implementation - Social Media Branding",
    project_vi_planetroad_step4_sm_p1:
      "Social media branding: I created graphics and implemented a consistent visual style, allowing the company to establish a presence in channels it hadn't used before.",
    project_vi_planetroad_img_alt_sm:
      "Views of Hero sections of individual subpages, as well as the main page of the PlanetRoad website",
    project_vi_planetroad_behance_text1: "Visit my project on ",
    project_vi_planetroad_behance_text2: " to see the interactive prototype.",
    project_vi_planetroad_result_title: "Final Result",
    project_vi_planetroad_result_1:
      "✅ PlanetRoad received a consistent and professional visual identity.",
    project_vi_planetroad_result_2:
      "✅ The new website and social media presence help the company establish an online footprint, which was previously missing.",
    project_vi_planetroad_result_3:
      "✅ The implemented visual identity allows the company to build trust and an expert image in the road design industry.",
    project_vi_planetroad_thumb_1: "Thumbnail 1",
    project_vi_planetroad_thumb_2: "Thumbnail 2",
    project_vi_planetroad_thumb_3: "Thumbnail 3",
    project_vi_planetroad_thumb_4: "Thumbnail 4",
    project_vi_planetroad_thumb_5: "Thumbnail 5",
    project_vi_planetroad_thumb_6: "Thumbnail 6",
    project_vi_planetroad_thumb_7: "Thumbnail 7",
    project_vi_planetroad_thumb_8: "Thumbnail 8",
    project_vi_planetroad_after_title: "After the Project",
    project_vi_planetroad_takeaways_title: "Key Takeaways",
    project_vi_planetroad_takeaway_part1:
      "Designing a flexible brand mark system and a consistent color palette that ensure ",
    project_vi_planetroad_takeaway_b:
      "scalability across every brand touchpoint",
    project_vi_planetroad_takeaway_part2:
      " is the foundation of a strong brand identity. Effective branding must perform equally well as a tiny browser favicon, a digital social media avatar, and on large-scale printed materials.",
    project_vi_planetroad_next_steps_title: "Next Steps",
    project_vi_planetroad_next_2_b: "Social Media & Marketing Template System",
    project_vi_planetroad_next_2_text:
      " - creating a cohesive set of graphic components in Figma for posts, Stories, and advertising banners, enabling efficient and consistent visual communication.",
    project_vi_planetroad_next_3_b: "Print Materials & Merchandise",
    project_vi_planetroad_next_3_text:
      " - extending the visual identity to physical brand assets such as business cards, letterheads, and document templates.",
    project_vi_planetroad_next_project_label: "See next project:",
    project_vi_planetroad_next_project_link: "Customer Journey - Betfan",
  },
};

// Bezpieczne wstawianie tekstu z ograniczonym formatowaniem (whitelist).
// Rozpoznaje WYŁĄCZNIE dosłowne tagi <b> i <strong> - są tworzone jawnie
// przez createElement(), a cała reszta (łącznie z ewentualnym <script>,
// atrybutami typu onerror="..." itp.) trafia do DOM wyłącznie jako zwykły
// tekst przez textContent/createTextNode. Dzięki temu nic z treści
// tłumaczenia nigdy nie jest parsowane jako HTML/JS - w przeciwieństwie
// do innerHTML tutaj fizycznie nie ma jak wstrzyknąć działającego kodu.
function setFormattedText(element, text) {
  element.textContent = "";

  const allowedTagPattern = /<(b|strong)>([\s\S]*?)<\/\1>/gi;
  let lastIndex = 0;
  let match;

  while ((match = allowedTagPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      element.appendChild(
        document.createTextNode(text.slice(lastIndex, match.index))
      );
    }

    const tagName = match[1].toLowerCase();
    const inlineEl = document.createElement(tagName);
    inlineEl.textContent = match[2]; // treść pogrubienia też jako czysty tekst
    element.appendChild(inlineEl);

    lastIndex = allowedTagPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    element.appendChild(document.createTextNode(text.slice(lastIndex)));
  }
}

function switchLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);

  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const rawKey = element.getAttribute("data-i18n");
    // Obsługa składni "[atrybut]klucz" — tłumaczy podany atrybut
    // (np. placeholder, alt, data-title) zamiast treści elementu.
    const attrMatch = rawKey.match(/^\[([a-zA-Z-]+)\](.+)$/);
    const key = attrMatch ? attrMatch[2] : rawKey;

    if (translations[lang] && translations[lang][key]) {
      const translationValue = translations[lang][key];

      if (attrMatch) {
        element.setAttribute(attrMatch[1], translationValue);
      } else if (element.tagName.toLowerCase() === "img") {
        // Jeśli element to tag <img>, podmień jego atrybut 'src'
        element.setAttribute("src", translationValue);
      } else {
        setFormattedText(element, translationValue);
      }
    }
  });

  // Osobny atrybut data-i18n-alt tłumaczy 'alt' na <img>, niezależnie od
  // ewentualnego data-i18n na tym samym elemencie (np. podpis pod zdjęciem
  // tłumaczy treść, a data-i18n-alt tłumaczy alt tego samego obrazka).
  const altElements = document.querySelectorAll("[data-i18n-alt]");
  altElements.forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("alt", translations[lang][key]);
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
