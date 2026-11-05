/**
 * S·K·Y (Skin Keeps Youth) — Hero Scroll-Driven Reveal Engine
 * Features:
 * - GSAP 3.12.5 + ScrollTrigger pinned CDN integration
 * - Scroll progress 0.00 to 1.00 across 300vh hero
 * - Synchronized clip-path strip reveal with dual cream edge lines
 * - Transform and opacity animations exclusively
 * - Full i18n support (UK default, ES, EN, RU) loaded from i18n.json
 * - Strict prefers-reduced-motion support
 */

(function () {
  'use strict';

  // Fallback translation dictionary in case fetch is blocked on file:// protocol
  const fallbackI18n = {
    "uk": {
      "wordmark": "S·K·Y",
      "tagline": "ЗБЕРЕЖЕННЯ МОЛОДОСТІ ШКІРИ",
      "descriptor": "КЛАСИЧНА ТА АПАРАТНА КОСМЕТОЛОГІЯ",
      "slogan_line1": "МОЛОДІСТЬ ПОЧИНАЄТЬСЯ",
      "slogan_line2": "ЗІ ШКІРИ",
      "cta": "Обрати процедуру"
    },
    "es": {
      "wordmark": "S·K·Y",
      "tagline": "LA JUVENTUD DE TU PIEL",
      "descriptor": "COSMETOLOGÍA CLÁSICA Y APARATOLOGÍA",
      "slogan_line1": "LA JUVENTUD COMIENZA",
      "slogan_line2": "EN LA PIEL",
      "cta": "Elegir tratamiento"
    },
    "en": {
      "wordmark": "S·K·Y",
      "tagline": "SKIN KEEPS YOUTH",
      "descriptor": "CLASSICAL & CLINICAL AESTHETICS",
      "slogan_line1": "YOUTH BEGINS",
      "slogan_line2": "WITH YOUR SKIN",
      "cta": "Select treatment"
    },
    "ru": {
      "wordmark": "S·K·Y",
      "tagline": "СОХРАНЕНИЕ МОЛОДОСТИ КОЖИ",
      "descriptor": "КЛАССИЧЕСКАЯ И АППАРАТНАЯ КОСМЕТОЛОГИЯ",
      "slogan_line1": "МОЛОДОСТЬ НАЧИНАЕТСЯ",
      "slogan_line2": "С КОЖИ",
      "cta": "Выбрать процедуру"
    }
  };

  let translations = fallbackI18n;
  let currentLang = 'uk';

  // DOM Elements
  const heroScroll = document.getElementById('heroScroll');
  const heroSticky = document.getElementById('heroSticky');
  const layerB = document.getElementById('layerB');
  const edgeLineLeft = document.getElementById('edgeLineLeft');
  const edgeLineRight = document.getElementById('edgeLineRight');
  const heroTextLayer = document.getElementById('heroTextLayer');
  const heroCtaWrapper = document.getElementById('heroCtaWrapper');
  const ctaBtn = document.getElementById('ctaBtn');

  // Text Elements
  const txtWordmark = document.getElementById('txtWordmark');
  const txtTagline = document.getElementById('txtTagline');
  const txtDescriptor = document.getElementById('txtDescriptor');
  const txtSloganLine1 = document.getElementById('txtSloganLine1');
  const txtSloganLine2 = document.getElementById('txtSloganLine2');
  const txtCta = document.getElementById('txtCta');
  const langButtons = document.querySelectorAll('.lang-btn');

  document.addEventListener('DOMContentLoaded', initApp);

  function initApp() {
    loadTranslations();
    setupLanguageSwitcher();
    setupScrollAnimation();
  }

  /**
   * STEP 3: Load i18n from i18n.json with fallback
   */
  async function loadTranslations() {
    try {
      const response = await fetch('./i18n.json');
      if (response.ok) {
        translations = await response.json();
      }
    } catch (e) {
      console.info('Using embedded fallback i18n dictionary (file:// protocol mode).');
    }
    applyLanguage(currentLang);
  }

  /**
   * Applies the selected language strings across the DOM
   */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const data = translations[lang];

    // Wordmark is ALWAYS "S·K·Y" (never translated)
    if (txtWordmark) txtWordmark.textContent = "S·K·Y";
    
    // Every other string updates
    if (txtTagline) txtTagline.textContent = data.tagline;
    if (txtDescriptor) txtDescriptor.textContent = data.descriptor;
    if (txtSloganLine1) txtSloganLine1.textContent = data.slogan_line1;
    if (txtSloganLine2) txtSloganLine2.textContent = data.slogan_line2;
    if (txtCta) txtCta.textContent = data.cta;

    // Update active button state
    langButtons.forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.documentElement.lang = lang;
  }

  function setupLanguageSwitcher() {
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang) applyLanguage(lang);
      });
    });
  }

  /**
   * STEP 4: Scroll Animation Driven with GSAP + ScrollTrigger
   */
  function setupScrollAnimation() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Prefers-reduced-motion: skip animation, show Layer B in full colour, static text
    if (prefersReducedMotion) {
      if (layerB) layerB.style.clipPath = 'none';
      if (edgeLineLeft) edgeLineLeft.style.display = 'none';
      if (edgeLineRight) edgeLineRight.style.display = 'none';
      return;
    }

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger CDN not available.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Initial State Check
    // Starts as vertical strip: left 58% of viewport, width 26% of viewport (right inset = 16%)
    layerB.style.clipPath = 'inset(0% 16% 0% 58%)';
    gsap.set(edgeLineLeft, { x: 0, opacity: 1 });
    gsap.set(edgeLineRight, { x: 0, opacity: 1 });
    gsap.set(heroTextLayer, { opacity: 1, y: 0 });
    gsap.set(heroCtaWrapper, { opacity: 1, y: 0 });
    gsap.set(heroSticky, { scale: 1.0, opacity: 1 });

    // Proxy object for precision synchronized clipPath animation
    const maskState = {
      leftInset: 58,  // from 58% down to 0%
      rightInset: 16  // from 16% down to 0% (widens strip right edge from 84% to 100%)
    };

    // Master Timeline across 300vh hero (total duration normalized to 1.0)
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'none' }
    });

    // 0.00 - 0.15: Nothing moves, the strip holds its starting width
    // (Timeline starts with 0.15 pause before first transition)

    // 0.15 - 0.80: Clip-path strip widens from 26% to 100% of viewport width, easing out
    tl.to(maskState, {
      leftInset: 0,
      rightInset: 0,
      duration: 0.65, // 0.80 - 0.15 = 0.65
      ease: 'power2.out',
      onUpdate: () => {
        layerB.style.clipPath = `inset(0% ${maskState.rightInset}% 0% ${maskState.leftInset}%)`;
      }
    }, 0.15);

    // 0.15 - 0.80: Left cream edge line travels from 58vw to 0vw (-58vw) and fades to 0
    tl.to(edgeLineLeft, {
      x: '-58vw',
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out'
    }, 0.15);

    // 0.15 - 0.80: Right cream edge line travels from 84vw to 100vw (+16vw) and fades to 0
    tl.to(edgeLineRight, {
      x: '16vw',
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out'
    }, 0.15);

    // 0.60 - 0.90: Text layer fades from 1 to 0 and translates up 40px
    tl.to([heroTextLayer, heroCtaWrapper], {
      opacity: 0,
      y: -40,
      duration: 0.30, // 0.90 - 0.60 = 0.30
      ease: 'power2.out'
    }, 0.60);

    // 0.85 - 1.00: Whole hero scales from 1.0 to 1.04 and fades out, releasing sticky container
    tl.to(heroSticky, {
      scale: 1.04,
      opacity: 0,
      duration: 0.15, // 1.00 - 0.85 = 0.15
      ease: 'power2.out'
    }, 0.85);

    // Connect to ScrollTrigger
    ScrollTrigger.create({
      trigger: heroScroll,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      animation: tl,
      onUpdate: (self) => {
        // Accessibility attribute state
        const isPastHero = self.progress >= 0.98;
        heroSticky.setAttribute('aria-hidden', isPastHero ? 'true' : 'false');
      }
    });

    // Smooth Scroll on CTA click to reveal full colour frame
    if (ctaBtn) {
      ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const maxScroll = heroScroll.offsetHeight - window.innerHeight;
        // Scroll to 80% where frame is fully in colour
        const targetY = maxScroll * 0.80;
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      });
    }

    // Refresh on resize
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });
  }
})();
