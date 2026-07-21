/* ─────────────────────────────────────────────────────────────
   Anil & Victor · Interaktionen
   Intro-Animation · Sprachwahl · Countdown · Scroll-Effekte
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var LANGS = ["de", "tr", "en", "it", "fr"];
  var WEDDING_DATE = new Date("2026-09-19T15:00:00+02:00");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var currentLang = "de";

  /* ═══ Intro overlay ═══ */
  var intro = document.getElementById("intro");
  if (intro) {
    if (reducedMotion) {
      intro.remove();
    } else {
      document.body.classList.add("no-scroll");
      var introOpened = false;
      var introTimers = [];
      var closeIntro = function () {
        if (!intro) return;
        introTimers.forEach(window.clearTimeout);
        intro.classList.add("intro-leave");
        document.body.classList.remove("no-scroll");
        window.setTimeout(function () {
          if (intro) { intro.remove(); intro = null; }
        }, 1000);
      };
      var openEnvelope = function () {
        if (introOpened || !intro) return;
        introOpened = true;
        intro.classList.add("opening");
        introTimers.push(window.setTimeout(function () { intro.classList.add("out"); }, 450));
        introTimers.push(window.setTimeout(function () { intro.classList.add("settle"); }, 1200));
        introTimers.push(window.setTimeout(closeIntro, 4200));
      };
      // Fallback: öffnet sich von selbst, falls niemand klickt
      var autoOpen = window.setTimeout(openEnvelope, 6000);
      intro.addEventListener("click", function () {
        if (!introOpened) {
          window.clearTimeout(autoOpen);
          openEnvelope();
        } else {
          closeIntro();
        }
      });
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

  /* ═══ Toast ═══ */
  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 4200);
  }

  /* ═══ RSVP form → Telegram ═══
     Die Zugangsdaten sind nur Base64-kodiert, nicht verschlüsselt –
     auf einer statischen Seite gibt es keinen Ort für echte Geheimnisse.
     Bei Missbrauch: Token im BotFather regenerieren und hier ersetzen. */
  var TG = {
    a: "ODU5MjI1NzE0Mg==",
    b: "QUFIdFAxZFRxM1JWdGZxUENaZ2VDUFV5cnZpYXFYVkJheGc=",
    c: "LTU0Nzg5NTE2NzE="
  };
  var ATTEND_LABELS = { couple: "Zusage – zu zweit 🎉", single: "Zusage – alleine 🎉", no: "Absage 😢" };

  var rsvpForm = document.getElementById("rsvpForm");
  var rsvpSuccess = document.getElementById("rsvpSuccess");
  var submitBtn = document.getElementById("rsvpSubmit");
  var sending = false;

  function showRsvpSuccess() {
    rsvpForm.hidden = true;
    rsvpSuccess.hidden = false;
  }

  function rsvpFail() {
    sending = false;
    submitBtn.disabled = false;
    submitBtn.textContent = I18N[currentLang]["form.submit"];
    showToast(I18N[currentLang]["form.error"]);
  }

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (sending) return;
      var name = document.getElementById("rsvpName").value.trim();
      var attend = rsvpForm.querySelector('input[name="attend"]:checked');
      if (!name || !attend) {
        rsvpForm.reportValidity();
        return;
      }
      if (document.getElementById("rsvpWebsite").value) {
        showRsvpSuccess(); // Honeypot gefüllt → Bot, still schlucken
        return;
      }
      sending = true;
      submitBtn.disabled = true;
      submitBtn.textContent = I18N[currentLang]["form.sending"];
      var allergies = document.getElementById("rsvpAllergies").value.trim();
      var comments = document.getElementById("rsvpComments").value.trim();
      var text =
        "💌 Neue RSVP über die Website\n" +
        "👤 " + name + "\n" +
        "👥 " + ATTEND_LABELS[attend.value] + "\n" +
        "🍽️ Essenswünsche: " + (allergies || "–") + "\n" +
        "💬 Kommentar: " + (comments || "–") + "\n" +
        "🌐 Sprache: " + currentLang.toUpperCase();
      var url = "https://api.telegram.org/bot" + atob(TG.a) + ":" + atob(TG.b) + "/sendMessage";
      fetch(url, {
        method: "POST",
        body: new URLSearchParams({ chat_id: atob(TG.c), text: text })
      })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (d && d.ok) { showRsvpSuccess(); } else { rsvpFail(); }
        })
        .catch(rsvpFail);
    });
  }
})();
