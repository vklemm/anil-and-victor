/* ─────────────────────────────────────────────────────────────
   Anil & Victor · Interaktionen
   Intro-Animation · Sprachwahl · Countdown · Scroll-Effekte
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var LANGS = ["de", "tr", "en", "it"];
  var WEDDING_DATE = new Date("2026-09-19T15:00:00+02:00");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var currentLang = "de";

  /* ═══ Intro overlay ═══ */
  var intro = document.getElementById("intro");
  if (intro) {
    if (sessionStorage.getItem("introSeen") || reducedMotion) {
      intro.remove();
    } else {
      document.body.classList.add("no-scroll");
      var closeIntro = function () {
        if (!intro) return;
        intro.classList.add("intro-leave");
        document.body.classList.remove("no-scroll");
        sessionStorage.setItem("introSeen", "1");
        window.setTimeout(function () {
          if (intro) { intro.remove(); intro = null; }
        }, 1000);
      };
      var introTimer = window.setTimeout(closeIntro, 3000);
      intro.addEventListener("click", function () {
        window.clearTimeout(introTimer);
        closeIntro();
      }, { once: true });
    }
  }

  /* ═══ Language switching ═══ */
  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) { /* private mode */ }
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var prefs = navigator.languages || [navigator.language || "de"];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) !== -1) return code;
    }
    return "de";
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    if (dict.title) document.title = dict.title;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] != null) nodes[i].textContent = dict[key];
    }
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute("aria-pressed", buttons[j].getAttribute("data-lang") === lang ? "true" : "false");
    }
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
  });

  setLang(detectLang());

  /* ═══ Header background on scroll ═══ */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ═══ Countdown ═══ */
  var elDays = document.getElementById("cdDays");
  var elHours = document.getElementById("cdHours");
  var elMinutes = document.getElementById("cdMinutes");
  var elSeconds = document.getElementById("cdSeconds");
  var grid = document.getElementById("countdownGrid");
  var married = document.getElementById("countdownMarried");
  var countdownTimer = null;

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function tick() {
    var diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) {
      grid.hidden = true;
      married.hidden = false;
      if (countdownTimer) window.clearInterval(countdownTimer);
      return;
    }
    var s = Math.floor(diff / 1000);
    elDays.textContent = String(Math.floor(s / 86400));
    elHours.textContent = pad(Math.floor((s % 86400) / 3600));
    elMinutes.textContent = pad(Math.floor((s % 3600) / 60));
    elSeconds.textContent = pad(s % 60);
  }

  tick();
  countdownTimer = window.setInterval(tick, 1000);

  /* ═══ Scroll reveal ═══ */
  var revealEls = document.querySelectorAll(".reveal");
  if (!reducedMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ═══ RSVP placeholder toast ═══ */
  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast() {
    toast.textContent = I18N[currentLang]["rsvp.toast"];
    toast.classList.add("show");
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 3400);
  }

  ["rsvpYes", "rsvpNo"].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", showToast);
  });
})();
