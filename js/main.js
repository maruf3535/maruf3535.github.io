/**
 * Site interactivity: theme toggle, mobile nav, active-link highlighting,
 * and scroll-reveal animation. No dependencies.
 */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const html = document.documentElement;

  /* ---------- Theme toggle ---------- */
  const THEME_KEY = "mhr-theme";
  const themeToggle = document.getElementById("theme-toggle");
  const iconMoon = themeToggle ? themeToggle.querySelector(".icon-moon") : null;
  const iconSun = themeToggle ? themeToggle.querySelector(".icon-sun") : null;

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    if (themeToggle) {
      const isLight = theme === "light";
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
      if (iconMoon) iconMoon.hidden = isLight;
      if (iconSun) iconSun.hidden = !isLight;
    }
  }

  const storedTheme = safeGetItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  } else {
    applyTheme("dark"); // dark is the primary/default direction for this site
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      safeSetItem(THEME_KEY, next);
    });
  }

  function safeGetItem(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
  function safeSetItem(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      /* storage unavailable — theme just won't persist */
    }
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = !mobileNav.hidden;
      setMobileNav(!isOpen);
    });

    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMobileNav(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileNav.hidden) {
        setMobileNav(false);
        navToggle.focus();
      }
    });
  }

  function setMobileNav(open) {
    mobileNav.hidden = !open;
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  /* ---------- Active nav link on scroll ---------- */
  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => sectionObserver.observe(s));
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
