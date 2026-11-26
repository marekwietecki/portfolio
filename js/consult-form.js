/* ==========================================================================
   Formularz "Umów darmową konsultację" — 3 kroki na oferta.html.

   Bez JS wszystkie kroki są widoczne i formularz wysyła się zwykłym POST-em
   do Formspree. Z JS: jeden krok naraz, wysyłka przez fetch (bez przeładowania
   strony), konwersja Google Ads i zdarzenia GA4 dopiero po udanej wysyłce.
   ========================================================================== */
(function () {
  "use strict";

  var form = document.getElementById("consultForm");
  if (!form) return;

  var steps = Array.prototype.slice.call(form.querySelectorAll(".form-step"));
  var total = steps.length;
  var progress = document.getElementById("formProgress");
  var stepNow = document.getElementById("stepNow");
  var bars = form.querySelectorAll(".stepper span");
  var errorBox = document.getElementById("formError");
  var doneBox = document.getElementById("formDone");
  var current = 1;
  var started = false;

  function track(name, params) {
    // gtag respektuje stan zgody (Consent Mode), więc nic nie wycieka bez zgody
    if (typeof gtag === "function") {
      try { gtag("event", name, params || {}); } catch (e) { /* ignore */ }
    }
  }

  function show(n, moveFocus) {
    current = n;
    steps.forEach(function (s, i) { s.classList.toggle("is-active", i === n - 1); });
    if (stepNow) stepNow.textContent = n;
    Array.prototype.forEach.call(bars, function (b, i) { b.classList.toggle("is-done", i < n); });
    if (moveFocus) steps[n - 1].focus({ preventScroll: false });
  }

  // Walidacja tylko widocznego kroku (ukryte pola nie blokują przejścia dalej)
  function stepValid(n) {
    var fields = steps[n - 1].querySelectorAll("input, textarea, select");
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].checkValidity()) {
        fields[i].reportValidity();
        return false;
      }
    }
    return true;
  }

  function next() {
    if (current >= total || !stepValid(current)) return;
    track("form_step_complete", { step: current, step_name: steps[current - 1].dataset.stepName });
    show(current + 1, true);
  }

  function back() {
    if (current > 1) show(current - 1, true);
  }

  function begin() {
    if (started) return;
    started = true;
    track("form_start", { form: "konsultacja" });
  }

  // --- tryb krokowy włączamy dopiero, gdy JS działa ---
  form.classList.add("is-stepped");
  if (progress) progress.hidden = false;
  show(1, false);

  form.addEventListener("click", function (e) {
    var t = e.target.closest("[data-next], [data-back]");
    if (t) {
      e.preventDefault();
      if (t.hasAttribute("data-next")) next(); else back();
      return;
    }
    // Wybór usługi myszą/dotykiem od razu przenosi dalej. Klawiatura
    // (strzałki na radio) generuje click z detail === 0 — wtedy nie skaczemy.
    var radio = e.target.closest('input[name="service"]');
    if (radio && e.detail > 0 && current === 1) {
      setTimeout(next, 220);
    }
  });

  form.addEventListener("input", begin);
  form.addEventListener("focusin", begin);

  // Enter w krokach 1–2 przechodzi dalej zamiast wysyłać formularz
  form.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" || current >= total) return;
    var tag = e.target.tagName;
    if (tag === "TEXTAREA" || tag === "BUTTON") return;
    e.preventDefault();
    next();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (current < total) { next(); return; }
    if (!stepValid(current)) return;
    // Honeypot: bot wypełnił ukryte pole — udajemy sukces i nic nie wysyłamy
    var trap = form.querySelector('input[name="_gotcha"]');
    if (trap && trap.value) { finish(); return; }

    errorBox.hidden = true;
    form.classList.add("is-sending");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        // konwersja liczona dopiero po faktycznym wysłaniu
        if (typeof trackAdsConversion === "function") trackAdsConversion();
        var svc = form.querySelector('input[name="service"]:checked');
        track("generate_lead", { form: "konsultacja", service: svc ? svc.value : "" });
        finish();
      })
      .catch(function () {
        errorBox.hidden = false;
      })
      .then(function () {
        form.classList.remove("is-sending");
      });
  });

  function finish() {
    form.classList.add("is-sent");
    if (progress) progress.hidden = true;
    errorBox.hidden = true;
    doneBox.hidden = false;
    doneBox.focus();
  }
})();
