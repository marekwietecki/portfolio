# Portfolio — Marek Wietecki

Personal design/UX portfolio site for Marek Wietecki, built as a static multi-page site (no build step, no framework). Live pages cover the homepage, offer, about, individual project case studies, and a privacy policy, with Polish as the primary language and English available via client-side translations.

## Tech stack

- Plain HTML5 / CSS3 / vanilla JavaScript — no bundler, framework, or package manager required
- `js/translations.js` — client-side i18n (Polish/English) applied via `data-i18n` attributes
- Google Analytics (GA4), Google Ads, and Microsoft Clarity are wired in for traffic analysis, gated behind a cookie-consent banner

## Structure

```
.
├── index.html                  # Homepage
├── oferta.html                 # Offer / services page
├── o-mnie.html                 # About page
├── polityka-prywatnosci.html   # Privacy policy
├── 404.html                    # Custom 404 page
├── projects/                   # Individual project case studies
├── inactive/                   # Pages not currently linked from the live site
├── css/                        # Stylesheets (style.css, projects.css)
├── js/                         # Scripts (translations, theming, cursor, nav, etc.)
└── assets/                     # Images, brand assets, certificates
```

## Running locally

Since this is a static site, any local HTTP server works, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.
