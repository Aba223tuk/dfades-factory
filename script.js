/* D'Fades Factory — interactions */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- Mobile drawer ----- */
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.querySelector(".drawer");
  var backdrop = document.querySelector(".drawer-backdrop");

  function setDrawer(open) {
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    if (open) {
      backdrop.hidden = false;
      requestAnimationFrame(function () { backdrop.classList.add("show"); });
      document.body.style.overflow = "hidden";
    } else {
      backdrop.classList.remove("show");
      setTimeout(function () { backdrop.hidden = true; }, 250);
      document.body.style.overflow = "";
    }
  }

  toggle.addEventListener("click", function () {
    setDrawer(!drawer.classList.contains("open"));
  });
  backdrop.addEventListener("click", function () { setDrawer(false); });
  drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setDrawer(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) setDrawer(false);
  });

  /* ----- Scroll reveal ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ----- Open/closed status (daily 8:00–20:00, NY time) ----- */
  var statusEl = document.querySelector("[data-open-status]");
  var statusWrap = document.querySelector(".hero-status");
  try {
    var nyNow = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
    var mins = nyNow.getHours() * 60 + nyNow.getMinutes();
    var open = mins >= 480 && mins < 1200; // 8:00–20:00
    if (statusEl) {
      statusEl.textContent = open
        ? "Open now — until 8 PM today"
        : "Closed now — opens 8 AM, every day";
    }
    if (statusWrap && !open) statusWrap.classList.add("closed");
  } catch (e) { /* keep static fallback text */ }

  /* ----- Booking form → prefilled Instagram DM ----- */
  var form = document.getElementById("book-form");
  var formStatus = document.querySelector("[data-form-status]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var msg = "Hi! I'd like to book a " + data.get("service") +
                " for " + data.get("day") + " around " + data.get("time") +
                ". — " + data.get("name");

      function openDM() {
        window.open("https://ig.me/m/d_fadesfactory", "_blank", "noopener");
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(msg).then(function () {
          if (formStatus) formStatus.textContent = "Message copied — paste it in the DM that just opened.";
          openDM();
        }, function () {
          if (formStatus) formStatus.textContent = "Send this in the DM: “" + msg + "”";
          openDM();
        });
      } else {
        if (formStatus) formStatus.textContent = "Send this in the DM: “" + msg + "”";
        openDM();
      }
    });
  }

  /* ----- Mobile action bar appears after the hero ----- */
  var actionBar = document.querySelector(".action-bar");
  var hero = document.querySelector(".hero");
  if (actionBar && hero && "IntersectionObserver" in window) {
    var aio = new IntersectionObserver(function (entries) {
      actionBar.classList.toggle("show", !entries[0].isIntersecting);
    }, { threshold: 0.2 });
    aio.observe(hero);
  } else if (actionBar) {
    actionBar.classList.add("show");
  }

  /* ----- Active nav link highlight (desktop) ----- */
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var current = null;
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) current = entry.target.id;
      });
      navLinks.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { nio.observe(s); });
  }

  /* ----- Footer year ----- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
