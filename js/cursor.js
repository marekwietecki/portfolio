document.addEventListener("DOMContentLoaded", () => {
  // Sprawdzamy, czy użytkownik używa myszki (nie dotyk)
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  // --- 1. AUTOMATYCZNE WSTRZYKIWANIE HTML KURSYRA I CANVASU ---
  const cursorHTML = `
      <canvas id="cursor-liquid-canvas"></canvas>
      <div class="cursor-dot">
        <svg viewBox="0 0 24 24">
          <path d="M5.5 3.5L19 11.5L12 13.5L9.5 20.5L5.5 3.5Z" />
        </svg>
        <span class="cursor-badge">ZOBACZ</span>
      </div>
    `;
  document.body.insertAdjacentHTML("beforeend", cursorHTML);

  // --- 2. LOGIKA KURSORA I WODY ---
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorBadge = document.querySelector(".cursor-badge");
  const canvas = document.getElementById("cursor-liquid-canvas");
  const ctx = canvas ? canvas.getContext("2d") : null;

  let mouse = { x: -100, y: -100 };
  let waterDrops = [];
  let waterRipples = [];

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Ruch myszy
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    cursorDot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

    if (Math.random() < 0.15) {
      waterDrops.push({
        x: mouse.x + (Math.random() - 0.5) * 4,
        y: mouse.y + (Math.random() - 0.5) * 4,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 5.5 + Math.random() * 4.4,
        maxRadius: 17.5 + Math.random() * 4.4,
        opacity: 0.45,
        decay: 0.018 + Math.random() * 0.005,
      });
    }
  });

  // Kliknięcie
  window.addEventListener("mousedown", (e) => {
    waterRipples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 4,
      maxRadius: 90 + Math.random() * 20,
      lineWidth: 4,
      opacity: 0.85,
      speed: 3.5,
    });

    waterRipples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 2,
      maxRadius: 65,
      lineWidth: 2,
      opacity: 0.6,
      speed: 2.2,
    });

    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 2.5;
      waterDrops.push({
        x: e.clientX,
        y: e.clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 4.5 + Math.random() * 5.5,
        maxRadius: 20,
        opacity: 0.8,
        decay: 0.02 + Math.random() * 0.01,
      });
    }
  });

  // Renderowanie Canvas
  function renderGlassWater() {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < waterRipples.length; i++) {
        const ripple = waterRipples[i];
        ctx.save();
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity * 0.7})`;
        ctx.lineWidth = ripple.lineWidth;
        ctx.shadowColor = "rgba(30, 80, 160, 0.3)";
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();

        ripple.radius += ripple.speed;
        ripple.lineWidth = Math.max(0.5, ripple.lineWidth * 0.96);
        ripple.opacity -= 0.015;

        if (ripple.opacity <= 0 || ripple.radius >= ripple.maxRadius) {
          waterRipples.splice(i, 1);
          i--;
        }
      }

      for (let i = 0; i < waterDrops.length; i++) {
        const drop = waterDrops[i];
        ctx.save();
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);

        const glassGradient = ctx.createRadialGradient(
          drop.x - drop.radius * 0.3,
          drop.y - drop.radius * 0.3,
          drop.radius * 0.1,
          drop.x,
          drop.y,
          drop.radius
        );

        glassGradient.addColorStop(
          0,
          `rgba(255, 255, 255, ${drop.opacity * 0.65})`
        );
        glassGradient.addColorStop(
          0.4,
          `rgba(240, 248, 255, ${drop.opacity * 0.12})`
        );
        glassGradient.addColorStop(
          0.85,
          `rgba(200, 220, 245, ${drop.opacity * 0.2})`
        );
        glassGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.fillStyle = glassGradient;
        ctx.fill();

        ctx.lineWidth = 0.8;
        ctx.strokeStyle = `rgba(30, 50, 80, ${drop.opacity * 0.12})`;
        ctx.stroke();
        ctx.restore();

        drop.x += drop.vx;
        drop.y += drop.vy;
        if (drop.radius < drop.maxRadius) {
          drop.radius += 0.33;
        }
        drop.opacity -= drop.decay;

        if (drop.opacity <= 0) {
          waterDrops.splice(i, 1);
          i--;
        }
      }
    }
    requestAnimationFrame(renderGlassWater);
  }
  requestAnimationFrame(renderGlassWater);

  // Hover efekty
  const links = document.querySelectorAll(
    "a, button, input, textarea, .cookie-btn, #profileImg"
  );
  links.forEach((el) => {
    if (
      el.closest(".projectContainer") ||
      el.classList.contains("projectContainer")
    )
      return;
    el.addEventListener("mouseenter", () =>
      document.body.classList.add("hovered-link")
    );
    el.addEventListener("mouseleave", () =>
      document.body.classList.remove("hovered-link")
    );
  });
  

  const projectCards = document.querySelectorAll(
    ".projectContainer, .card, [data-cursor]"
  );
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const customText = card.getAttribute("data-cursor") || "Zobacz Projekt";
      cursorBadge.textContent = customText;
      document.body.classList.add("hovered-badge");
    });
    card.addEventListener("mouseleave", () => {
      document.body.classList.remove("hovered-badge");
    });
  });
});
