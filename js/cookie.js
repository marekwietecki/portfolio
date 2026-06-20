document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  if (!banner || !acceptBtn || !declineBtn) return;

  const consent = localStorage.getItem("cookieConsent");

  // 🔹 Jeśli brak decyzji → pokaż banner
  if (!consent) {
    banner.style.display = "flex"; // bo masz layout z divami (flex lepszy niż block)
  } else {
    banner.style.display = "none";
    applyStoredConsent(consent);
  }

  // ✅ AKCEPTACJA
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";

    updateConsent("granted");
  });

  // ❌ ODRZUCENIE
  declineBtn.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";

    updateConsent("denied");
  });
});

// 🔥 Ustawienie zgody dla powracających userów
function applyStoredConsent(consent) {
  if (consent === "accepted") {
    updateConsent("granted");
  }

  if (consent === "declined") {
    updateConsent("denied");
  }
}

// 🔥 Consent Mode v2 update
function updateConsent(status) {
  if (typeof gtag !== "function") {
    console.warn("gtag jeszcze się nie załadował");
    return;
  }

  gtag("consent", "update", {
    analytics_storage: status,
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
  });

  console.log("Consent updated:", status);
}

// 🎯 Google Ads conversion
function trackAdsConversion() {
  if (typeof gtag !== "function") {
    console.log("Brak gtag - konwersja niewysłana");
    return;
  }

  gtag("event", "conversion", {
    send_to: "AW-17997930573/nKaTCIKS0JccEM3AioZD",
  });

  console.log("Konwersja wysłana do Google Ads");
}