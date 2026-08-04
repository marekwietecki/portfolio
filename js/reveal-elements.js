/**
 * reveal-elements.js
 * Uniwersalny silnik scroll-reveal (fade-in + lekkie uniesienie) dla całej
 * strony marekwietecki.pl. Każda podstrona wywołuje initRevealElements()
 * z własną listą selektorów -- bo struktura treści różni się między
 * stronami (case-study vs bento vs formularz), a niektóre elementy
 * (np. .serviceCard, .projectContainer w #projects) mają już WŁASNE
 * animacje i celowo NIE powinny trafiać na tę listę (patrz komentarze
 * w plikach, które je wywołują).
 *
 * Użycie:
 *   <script src="js/reveal-elements.js"></script>
 *   <script>
 *     initRevealElements(
 *       ["main.projectContent > section > h1", "..."], // target selectors
 *       [".mini-gallery > a"]                            // (opcjonalnie) stagger selectors
 *     );
 *   </script>
 *
 * Klasa ".reveal-me" jest zawsze dołączana automatycznie -- można nią
 * ręcznie oznaczyć dowolny element w HTML bez zmian w JS.
 */
function initRevealElements(targetSelectors, staggerSelectors) {
    staggerSelectors = staggerSelectors || [];
  
    document.addEventListener("DOMContentLoaded", () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
  
      const allSelectors = [".reveal-me"].concat(targetSelectors || []);
      const targets = Array.from(
        document.querySelectorAll(allSelectors.join(", "))
      );
  
      if (targets.length === 0) return;
  
      targets.forEach((el) => el.classList.add("reveal-on-scroll"));
  
      if (prefersReducedMotion) {
        targets.forEach((el) => el.classList.add("is-visible"));
        return;
      }
  
      if (staggerSelectors.length > 0) {
        document
          .querySelectorAll(staggerSelectors.join(", "))
          .forEach((el, i) => {
            el.style.transitionDelay = `${(i % 6) * 0.08}s`;
          });
      }
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
  
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
        if (alreadyVisible) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });
    });
  }