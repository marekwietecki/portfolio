/* ==========================================================================
   BIBLIOTECZKA — dodawanie książki = jeden wpis w tablicy BOOKS.
   Potrzebna jest tylko okładka (plik w assets/about/books/); grzbiet,
   tył, strony i kolor grzbietu generują się same.

   cover   ścieżka do okładki
   title   tytuł (pełny, pokazuje się pod półką)
   author  autor
   short   (opcjonalnie) krótszy tytuł na grzbiet
   size    "thin" | "medium" | "thick" — grubość książki
   lying   true = leży na stosie obok półki (najlepiej max 2)
   spine   (opcjonalnie) kolor grzbietu, np. "#1e6ed6"; domyślnie z okładki
   ========================================================================== */
(function () {
  "use strict";

  var P = "/assets/about/books/";
  var BOOKS = [
    { cover: P + "atomowe-nawyki.webp", title: "Atomowe nawyki", author: "James Clear", size: "medium" },
    { cover: P + "dizajn-na-co-dzien.webp", title: "Dizajn na co dzień", author: "Don Norman", size: "thick", spine: "#1fa55a" },
    { cover: P + "elon-musk-co-naprawde-mysli.webp", title: "Elon Musk. Co naprawdę myśli", short: "Elon Musk. Co naprawdę myśli", author: "Elon Musk", size: "thin", spine: "#c9271d" },
    { cover: P + "dobra-strategia-zla-strategia.webp", title: "Dobra strategia, zła strategia", short: "Dobra strategia zła strategia", author: "Richard P. Rumelt", size: "medium", spine: "#17130f" },
    { cover: P + "tak-60-sekretow-perswazji.webp", title: "TAK! 60 sekretów nauki perswazji", short: "TAK! 60 sekretów nauki perswazji", author: "Cialdini, Goldstein, Martin", size: "thick", spine: "#1e1e20" },
    { cover: P + "potega-podswiadomosci.webp", title: "Potęga podświadomości", author: "Joseph Murphy", size: "medium" },
    { cover: P + "ux-dla-biznesu.webp", title: "UX dla biznesu", author: "Joel Marsh", size: "thin" },
    { cover: P + "typographic-design.webp", title: "Typographic Design: Form and Communication", short: "Typographic Design", author: "Rob Carter i in.", size: "thick" },
    { cover: P + "cognitive-science.webp", title: "Cognitive Science", author: "José Luis Bermúdez", size: "thick", lying: true },
    { cover: P + "shape-up.webp", title: "Shape Up", author: "Ryan Singer", size: "thin", lying: true },
    { cover: P + "pelna-moc-mozliwosci.webp", title: "Pełna MOC możliwości", author: "Jacek Walkiewicz", size: "thin", lying: true },
  ];

  // Grubość (px przy wysokości 220) i lekkie różnice wysokości — celowo subtelne.
  var THICKNESS = { thin: 22, medium: 30, thick: 40 };
  var HEIGHTS = [1, 0.97, 1.02, 0.95, 1.01, 0.98, 1.03];

  var root = document.getElementById("bookshelf");
  if (!root) return;
  var row = root.querySelector(".shelf-row");
  var caption = document.getElementById("booksCaption");
  var hintEl = caption && caption.querySelector(".books-hint");
  var detailEl = caption && caption.querySelector(".books-detail");

  // Wczytuje okładkę raz: proporcje + kolor grzbietu z lewej krawędzi obrazu.
  var cache = {};
  function loadCover(url) {
    if (cache[url]) return cache[url];
    cache[url] = new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        var info = { ar: img.naturalWidth / img.naturalHeight, spine: null, ink: "#fff" };
        try {
          var c = document.createElement("canvas");
          c.width = 4;
          c.height = 24;
          var ctx = c.getContext("2d", { willReadFrequently: true });
          // lewa krawędź okładki (ok. 3% szerokości) → średni kolor
          ctx.drawImage(img, 0, 0, img.naturalWidth * 0.03, img.naturalHeight, 0, 0, 4, 24);
          var d = ctx.getImageData(0, 0, 4, 24).data;
          var r = 0, g = 0, b = 0, n = d.length / 4;
          for (var i = 0; i < d.length; i += 4) { r += d[i]; g += d[i + 1]; b += d[i + 2]; }
          r = Math.round(r / n); g = Math.round(g / n); b = Math.round(b / n);
          info.spine = "rgb(" + r + "," + g + "," + b + ")";
          var lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          info.ink = lum > 0.6 ? "#1c1d21" : "#fff";
        } catch (e) {
          /* canvas zablokowany (np. file://) → kolor domyślny z CSS */
        }
        resolve(info);
      };
      img.onerror = function () { resolve({ ar: 0.75, spine: null, ink: "#fff" }); };
      img.src = url;
    });
    return cache[url];
  }

  function face(cls) {
    var el = document.createElement("div");
    el.className = "face " + cls;
    return el;
  }

  function buildBook(data, opts) {
    var el = document.createElement("div");
    el.className = "book " + (opts.lying ? "lying" : "standing");
    el.tabIndex = 0;
    el.setAttribute("role", "listitem");
    el.setAttribute("aria-label", data.title + " — " + data.author);

    var t = THICKNESS[data.size] || THICKNESS.medium;
    el.style.setProperty("--t", t);
    el.style.setProperty("--cover", "url('" + data.cover + "')");
    if (opts.scale) el.style.setProperty("--s", opts.scale);
    if (opts.lying) {
      el.style.setProperty("--below", opts.below || 0);
      el.style.setProperty("--rz", opts.rz + "deg");
    }

    var box = document.createElement("div");
    box.className = "book-box";
    var front = face("f-front");
    var back = face("f-back");
    var spine = face("f-spine");
    var pages = face("f-pages");
    var top = face("f-top");
    var bottom = face("f-bottom");

    var title = document.createElement("span");
    title.className = "spine-title";
    title.textContent = data.short || data.title;
    var author = document.createElement("span");
    author.className = "spine-author";
    author.textContent = data.author;
    spine.appendChild(title);
    spine.appendChild(author);

    [front, back, spine, pages, top, bottom].forEach(function (f) { box.appendChild(f); });
    el.appendChild(box);

    loadCover(data.cover).then(function (info) {
      el.style.setProperty("--ar", info.ar);
      el.style.setProperty("--spine", data.spine || info.spine || "#2b2d33");
      el.style.setProperty("--spine-ink", info.ink);
    });

    function show() {
      if (!detailEl) return;
      detailEl.textContent = "";
      var s = document.createElement("strong");
      s.textContent = data.title;
      detailEl.appendChild(s);
      detailEl.appendChild(document.createTextNode(data.author));
      detailEl.hidden = false;
      if (hintEl) hintEl.hidden = true;
    }
    function reset() {
      if (detailEl) detailEl.hidden = true;
      if (hintEl) hintEl.hidden = false;
    }
    el.addEventListener("mouseenter", show);
    el.addEventListener("focus", show);
    el.addEventListener("mouseleave", reset);
    el.addEventListener("blur", reset);
    return el;
  }

  var STACK_SIZE = 2; // ile leżących książek na jednym stosie
  var TILTS = [-4, 7];
  var MIN_WIDE = 0.85; // poniżej tej skali układ szeroki ustępuje kompaktowemu
  var MIN_BH = 90;

  var standing = BOOKS.filter(function (b) { return !b.lying; });
  var lying = BOOKS.filter(function (b) { return b.lying; });
  var mode = "";
  var baseBh = 0;

  function setBh(v) { root.style.setProperty("--bh", v); }

  // Układ szeroki: stojące po lewej, leżące stosy wypełniają wolne miejsce.
  // Układ kompaktowy (mały ekran): wszystkie książki stoją, bez przewijania.
  function render(m) {
    row.textContent = "";
    var gs = document.createElement("div");
    gs.className = "group-standing";
    var list = m === "wide" ? standing : standing.concat(lying);
    list.forEach(function (b, i) {
      gs.appendChild(buildBook(b, { scale: HEIGHTS[i % HEIGHTS.length] }));
    });
    row.appendChild(gs);

    if (m === "wide" && lying.length) {
      var gl = document.createElement("div");
      gl.className = "group-lying";
      for (var i = 0; i < lying.length; i += STACK_SIZE) {
        var stack = document.createElement("div");
        stack.className = "lying-stack";
        var below = 0;
        lying.slice(i, i + STACK_SIZE).forEach(function (b, j) {
          stack.appendChild(buildBook(b, { lying: true, below: below, rz: TILTS[(i + j) % TILTS.length] }));
          below += THICKNESS[b.size] || THICKNESS.medium;
        });
        gl.appendChild(stack);
      }
      row.appendChild(gl);
    }
    mode = m;
  }

  function needed() {
    var w = 0;
    Array.prototype.forEach.call(row.children, function (g) { w += g.getBoundingClientRect().width; });
    return w + (row.children.length > 1 ? 24 : 0);
  }

  function fit() {
    var avail = row.clientWidth;
    if (!avail) return;
    root.style.removeProperty("--bh");
    baseBh = parseFloat(getComputedStyle(root).getPropertyValue("--bh")) || 196;

    // 1) szeroki układ, ewentualnie lekko pomniejszony
    if (lying.length) {
      if (mode !== "wide") render("wide");
      var k = avail / needed();
      if (k >= MIN_WIDE) { setBh(Math.min(baseBh, Math.floor(baseBh * Math.min(k, 1)))); return; }
    }
    // 2) kompaktowy: wszystkie stoją, skala tak, żeby się zmieściły
    if (mode !== "compact") render("compact");
    var kc = avail / needed();
    setBh(Math.max(MIN_BH, Math.floor(baseBh * Math.min(kc, 1))));
  }

  fit();
  var raf = 0;
  function schedule() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(fit);
  }
  if (window.ResizeObserver) {
    new ResizeObserver(schedule).observe(row);
  } else {
    window.addEventListener("resize", schedule);
  }

  var count = document.getElementById("booksCount");
  if (count) count.textContent = BOOKS.length;
})();
