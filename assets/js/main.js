(function () {
  var root = document.documentElement;

  // ---- Dark / light toggle (remembers the choice) ----
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // ---- Mobile menu ----
  var navBtn = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (navBtn && navLinks) {
    navBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", open);
    });
  }

  // ---- Abstract / BibTeX toggles ----
  document.querySelectorAll("[data-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.getElementById(btn.dataset.toggle);
      if (!target) return;
      var show = target.hidden;
      target.hidden = !show;
      btn.setAttribute("aria-expanded", show);
    });
  });

  // ---- Copy BibTeX ----
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById(btn.dataset.copy);
      if (!el || !navigator.clipboard) return;
      navigator.clipboard.writeText(el.textContent).then(function () {
        var html = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> copied';
        setTimeout(function () { btn.innerHTML = html; }, 1500);
      });
    });
  });

  // ---- "•••" buttons that reveal the rest of a list ----
  document.querySelectorAll("[data-more]").forEach(function (btn) {
    var list = document.getElementById(btn.dataset.more);
    if (!list) return;
    var label = btn.title;
    btn.addEventListener("click", function () {
      var expand = btn.getAttribute("aria-expanded") !== "true";
      list.querySelectorAll(".more").forEach(function (li) { li.hidden = !expand; });
      btn.setAttribute("aria-expanded", expand);
      btn.title = expand ? "Show less" : label;
      btn.setAttribute("aria-label", btn.title);
    });
  });

  // ---- Publication type filters ----
  var filters = document.querySelectorAll(".filter");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      var type = f.dataset.filter;
      filters.forEach(function (o) {
        o.classList.toggle("active", o === f);
        o.setAttribute("aria-pressed", o === f);
      });
      document.querySelectorAll(".pub").forEach(function (p) {
        p.hidden = type !== "all" && p.dataset.type !== type;
      });
    });
  });
})();
