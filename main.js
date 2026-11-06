/**
 * S·K·Y (Skin Keeps Youth) — Engine & Interactions
 * Features:
 * - GSAP 3.12.5 + ScrollTrigger pinned CDN integration for hero reveal
 * - All 5 home sections and services screen copy dynamically driven by i18n.json
 * - Language switcher (UK default, ES, EN, RU) with persistent state & TODO visibility
 * - Both hero CTA and Section 5 CTA open services.html
 * - Full prefers-reduced-motion support
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
      "cta": "Обрати процедуру",
      "about_label": "ХТО МИ",
      "about_name": "МАРІЯ СТЕФАНЮК",
      "about_role": "КОСМЕТОЛОГ",
      "about_body": "S.K.Y. — приватна практика естетичної косметології на узбережжі Коста-дель-Соль. Без потоку. Один клієнт — один час. Кожен протокол збирається під конкретну шкіру, а не під прайс.",
      "about_chip": "СЕРТИФІКАЦІЯ FDA",
      "equip_label": "НА ЧОМУ ПРАЦЮЄМО",
      "equip_lead": "Амбасадор Zemits в Іспанії",
      "equip_item1": "ZEMITS VERSTAND HD PRO — станція 8 в 1 для догляду за обличчям",
      "equip_item2": "ZEMITS ABIGON PRO — професійна корекція фігури",
      "equip_item3": "ZEMITS SKYFRAX PRO — мікроголковий RF-ліфтинг",
      "proto_label": "ПРОФЕСІЙНІ ПРОТОКОЛИ",
      "proto_body": "Працюємо з тим, чого немає у вільному продажу: професійні пілінги, протоколи корекції мелазми та пігментації, курси під конкретну проблему шкіри.",
      "how_label": "ЯК ЦЕ ПРАЦЮЄ",
      "how_n1": "01",
      "how_t1": "ДІАГНОСТИКА",
      "how_d1": "Розбираємо стан шкіри, спосіб життя і те, чим ви користуєтесь зараз.",
      "how_n2": "02",
      "how_t2": "ПРОТОКОЛ",
      "how_d2": "Складаємо курс: що робимо в кабінеті, що ви робите вдома, у якій послідовності й скільки це займе.",
      "how_n3": "03",
      "how_t3": "СУПРОВІД",
      "how_d3": "Лишаємось на зв'язку між візитами. Коригуємо догляд, коли шкіра змінюється — сезон, перельоти, сонце.",
      "how_langs": "Українська · Español · English · Русский",
      "how_cta": "Обрати процедуру",
      "services_back": "← Назад",
      "services_card1": "Процедури",
      "services_card2": "Виїзд",
      "services_card3": "Ін'єкції",
      "services_card4": "Догляд"
    },
    "es": {
      "wordmark": "S·K·Y",
      "tagline": "TODO ЗБЕРЕЖЕННЯ МОЛОДОСТІ ШКІРИ",
      "descriptor": "TODO КЛАСИЧНА ТА АПАРАТНА КОСМЕТОЛОГІЯ",
      "slogan_line1": "TODO МОЛОДІСТЬ ПОЧИНАЄТЬСЯ",
      "slogan_line2": "TODO ЗІ ШКІРИ",
      "cta": "TODO Обрати процедуру",
      "about_label": "TODO ХТО МИ",
      "about_name": "TODO МАРІЯ СТЕФАНЮК",
      "about_role": "TODO КОСМЕТОЛОГ",
      "about_body": "TODO S.K.Y. — приватна практика естетичної косметології на узбережжі Коста-дель-Соль. Без потоку. Один клієнт — один час. Кожен протокол збирається під конкретну шкіру, а не під прайс.",
      "about_chip": "TODO СЕРТИФІКАЦІЯ FDA",
      "equip_label": "TODO НА ЧОМУ ПРАЦЮЄМО",
      "equip_lead": "TODO Амбасадор Zemits в Іспанії",
      "equip_item1": "TODO ZEMITS VERSTAND HD PRO — станція 8 в 1 для догляду за обличчям",
      "equip_item2": "TODO ZEMITS ABIGON PRO — професійна корекція фігури",
      "equip_item3": "TODO ZEMITS SKYFRAX PRO — мікроголковий RF-ліфтинг",
      "proto_label": "TODO ПРОФЕСІЙНІ ПРОТОКОЛИ",
      "proto_body": "TODO Працюємо з тим, чого немає у вільному продажу: професійні пілінги, протоколи корекції мелазми та пігментації, курси під конкретну проблему шкіри.",
      "how_label": "TODO ЯК ЦЕ ПРАЦЮЄ",
      "how_n1": "TODO 01",
      "how_t1": "TODO ДІАГНОСТИКА",
      "how_d1": "TODO Розбираємо стан шкіри, спосіб життя і те, чим ви користуєтесь зараз.",
      "how_n2": "TODO 02",
      "how_t2": "TODO ПРОТОКОЛ",
      "how_d2": "TODO Складаємо курс: що робимо в кабінеті, що ви робите вдома, у якій послідовності й скільки це займе.",
      "how_n3": "TODO 03",
      "how_t3": "TODO СУПРОВІД",
      "how_d3": "TODO Лишаємось на зв'язку між візитами. Коригуємо догляд, коли шкіра змінюється — сезон, перельоти, сонце.",
      "how_langs": "TODO Українська · Español · English · Русский",
      "how_cta": "TODO Обрати процедуру",
      "services_back": "TODO ← Назад",
      "services_card1": "TODO Процедури",
      "services_card2": "TODO Виїзд",
      "services_card3": "TODO Ін'єкції",
      "services_card4": "TODO Догляд"
    },
    "en": {
      "wordmark": "S·K·Y",
      "tagline": "TODO ЗБЕРЕЖЕННЯ МОЛОДОСТІ ШКІРИ",
      "descriptor": "TODO КЛАСИЧНА ТА АПАРАТНА КОСМЕТОЛОГІЯ",
      "slogan_line1": "TODO МОЛОДІСТЬ ПОЧИНАЄТЬСЯ",
      "slogan_line2": "TODO ЗІ ШКІРИ",
      "cta": "TODO Обрати процедуру",
      "about_label": "TODO ХТО МИ",
      "about_name": "TODO МАРІЯ СТЕФАНЮК",
      "about_role": "TODO КОСМЕТОЛОГ",
      "about_body": "TODO S.K.Y. — приватна практика естетичної косметології на узбережжі Коста-дель-Соль. Без потоку. Один клієнт — один час. Кожен протокол збирається під конкретну шкіру, а не під прайс.",
      "about_chip": "TODO СЕРТИФІКАЦІЯ FDA",
      "equip_label": "TODO НА ЧОМУ ПРАЦЮЄМО",
      "equip_lead": "TODO Амбасадор Zemits в Іспанії",
      "equip_item1": "TODO ZEMITS VERSTAND HD PRO — станція 8 в 1 для догляду за обличчям",
      "equip_item2": "TODO ZEMITS ABIGON PRO — професійна корекція фігури",
      "equip_item3": "TODO ZEMITS SKYFRAX PRO — мікроголковий RF-ліфтинг",
      "proto_label": "TODO ПРОФЕСІЙНІ ПРОТОКОЛИ",
      "proto_body": "TODO Працюємо з тим, чого немає у вільному продажу: професійні пілінги, протоколи корекції мелазми та пігментації, курси під конкретну проблему шкіри.",
      "how_label": "TODO ЯК ЦЕ ПРАЦЮЄ",
      "how_n1": "TODO 01",
      "how_t1": "TODO ДІАГНОСТИКА",
      "how_d1": "TODO Розбираємо стан шкіри, спосіб життя і те, чим ви користуєтесь зараз.",
      "how_n2": "TODO 02",
      "how_t2": "TODO ПРОТОКОЛ",
      "how_d2": "TODO Складаємо курс: що робимо в кабінеті, що ви робите вдома, у якій послідовності й скільки це займе.",
      "how_n3": "TODO 03",
      "how_t3": "TODO СУПРОВІД",
      "how_d3": "TODO Лишаємось на зв'язку між візитами. Коригуємо догляд, коли шкіра змінюється — сезон, перельоти, сонце.",
      "how_langs": "TODO Українська · Español · English · Русский",
      "how_cta": "TODO Обрати процедуру",
      "services_back": "TODO ← Назад",
      "services_card1": "TODO Процедури",
      "services_card2": "TODO Виїзд",
      "services_card3": "TODO Ін'єкції",
      "services_card4": "TODO Догляд"
    },
    "ru": {
      "wordmark": "S·K·Y",
      "tagline": "TODO ЗБЕРЕЖЕННЯ МОЛОДОСТІ ШКІРИ",
      "descriptor": "TODO КЛАСИЧНА ТА АПАРАТНА КОСМЕТОЛОГІЯ",
      "slogan_line1": "TODO МОЛОДІСТЬ ПОЧИНАЄТЬСЯ",
      "slogan_line2": "TODO ЗІ ШКІРИ",
      "cta": "TODO Обрати процедуру",
      "about_label": "TODO ХТО МИ",
      "about_name": "TODO МАРІЯ СТЕФАНЮК",
      "about_role": "TODO КОСМЕТОЛОГ",
      "about_body": "TODO S.K.Y. — приватна практика естетичної косметології на узбережжі Коста-дель-Соль. Без потоку. Один клієнт — один час. Кожен протокол збирається під конкретну шкіру, а не під прайс.",
      "about_chip": "TODO СЕРТИФІКАЦІЯ FDA",
      "equip_label": "TODO НА ЧОМУ ПРАЦЮЄМО",
      "equip_lead": "TODO Амбасадор Zemits в Іспанії",
      "equip_item1": "TODO ZEMITS VERSTAND HD PRO — станція 8 в 1 для догляду за обличчям",
      "equip_item2": "TODO ZEMITS ABIGON PRO — професійна корекція фігури",
      "equip_item3": "TODO ZEMITS SKYFRAX PRO — мікроголковий RF-ліфтинг",
      "proto_label": "TODO ПРОФЕСІЙНІ ПРОТОКОЛИ",
      "proto_body": "TODO Працюємо з тим, чого немає у вільному продажу: професійні пілінги, протоколи корекції мелазми та пігментації, курси під конкретну проблему шкіри.",
      "how_label": "TODO ЯК ЦЕ ПРАЦЮЄ",
      "how_n1": "TODO 01",
      "how_t1": "TODO ДІАГНОСТИКА",
      "how_d1": "TODO Розбираємо стан шкіри, спосіб життя і те, чим ви користуєтесь зараз.",
      "how_n2": "TODO 02",
      "how_t2": "TODO ПРОТОКОЛ",
      "how_d2": "TODO Складаємо курс: що робимо в кабінеті, що ви робите вдома, у якій послідовності й скільки це займе.",
      "how_n3": "TODO 03",
      "how_t3": "TODO СУПРОВІД",
      "how_d3": "TODO Лишаємось на зв'язку між візитами. Коригуємо догляд, коли шкіра змінюється — сезон, перельоти, сонце.",
      "how_langs": "TODO Українська · Español · English · Русский",
      "how_cta": "TODO Обрати процедуру",
      "services_back": "TODO ← Назад",
      "services_card1": "TODO Процедури",
      "services_card2": "TODO Виїзд",
      "services_card3": "TODO Ін'єкції",
      "services_card4": "TODO Догляд"
    }
  };

  let translations = fallbackI18n;
  let currentLang = 'uk';

  // Read saved language from localStorage if available
  try {
    const saved = localStorage.getItem('sky_lang');
    if (saved && ['uk', 'es', 'en', 'ru'].includes(saved)) {
      currentLang = saved;
    }
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', initApp);

  function initApp() {
    loadTranslations();
    setupLanguageSwitcher();
    setupHeroScrollAnimation();
  }

  /**
   * Load i18n from i18n.json with fallback
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
   * Applies the selected language strings across all sections on the current page
   */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem('sky_lang', lang);
    } catch (e) {}

    const data = translations[lang];

    // Wordmark is ALWAYS "S·K·Y" (never translated)
    const txtWordmark = document.getElementById('txtWordmark');
    if (txtWordmark) txtWordmark.textContent = "S·K·Y";

    // Hero Section elements
    setElementText('txtTagline', data.tagline);
    setElementText('txtDescriptor', data.descriptor);
    setElementText('txtSloganLine1', data.slogan_line1);
    setElementText('txtSloganLine2', data.slogan_line2);
    setElementText('txtCta', data.cta);

    // Section 2: About
    setElementText('txtAboutLabel', data.about_label);
    setElementText('txtAboutName', data.about_name);
    setElementText('txtAboutRole', data.about_role);
    setElementText('txtAboutBody', data.about_body);
    setElementText('txtAboutChip', data.about_chip);

    // Section 3: Equipment
    setElementText('txtEquipLabel', data.equip_label);
    setElementText('txtEquipLead', data.equip_lead);
    setElementText('txtEquipItem1', data.equip_item1);
    setElementText('txtEquipItem2', data.equip_item2);
    setElementText('txtEquipItem3', data.equip_item3);

    // Section 4: Protocols
    setElementText('txtProtoLabel', data.proto_label);
    setElementText('txtProtoBody', data.proto_body);

    // Section 5: How it works
    setElementText('txtHowLabel', data.how_label);
    setElementText('txtHowN1', data.how_n1);
    setElementText('txtHowT1', data.how_t1);
    setElementText('txtHowD1', data.how_d1);
    setElementText('txtHowN2', data.how_n2);
    setElementText('txtHowT2', data.how_t2);
    setElementText('txtHowD2', data.how_d2);
    setElementText('txtHowN3', data.how_n3);
    setElementText('txtHowT3', data.how_t3);
    setElementText('txtHowD3', data.how_d3);
    setElementText('txtHowLangs', data.how_langs);
    setElementText('txtHowCta', data.how_cta);

    // Services Screen elements
    setElementText('txtServicesBack', data.services_back);
    setElementText('txtServicesCard1', data.services_card1);
    setElementText('txtServicesCard2', data.services_card2);
    setElementText('txtServicesCard3', data.services_card3);
    setElementText('txtServicesCard4', data.services_card4);

    // Update active button state in all switchers (top nav and Section 5 footer)
    const allLangButtons = document.querySelectorAll('.lang-btn, .how-lang-btn');
    allLangButtons.forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.documentElement.lang = lang;
  }

  function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) {
      el.textContent = text;
    }
  }

  function setupLanguageSwitcher() {
    const allLangButtons = document.querySelectorAll('.lang-btn, .how-lang-btn');
    allLangButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang) applyLanguage(lang);
      });
    });
  }

  /**
   * Hero Scroll Animation with GSAP + ScrollTrigger
   * Travelling shadow with subtle parallax:
   * - Layer 1: Plate scales down from 1.12 to 1.04 (ease-out), translates from translateY(-3%) to translateY(3%) (linear)
   * - Layer 2: Shadow overlay translates from translateX(-62%) to translateX(6%) (linear)
   * - Progress 0.55 - 0.85: Text layer and CTA fade from 1 to 0 and translate up 40px
   * - Progress 0.88 - 1.00: Hero sticky container fades out from 1 to 0, releasing into section 2
   * - prefers-reduced-motion: if true, show hero at progress 0 with no animation
   */
  function setupHeroScrollAnimation() {
    const heroScroll = document.getElementById('heroScroll');
    const heroSticky = document.getElementById('heroSticky');
    const heroPlateLayer = document.getElementById('heroPlateLayer');
    const heroShadowOverlay = document.getElementById('heroShadowOverlay');
    const heroTextLayer = document.getElementById('heroTextLayer');
    const heroCtaWrapper = document.getElementById('heroCtaWrapper');

    if (!heroScroll || !heroSticky || !heroPlateLayer || !heroShadowOverlay) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (typeof gsap !== 'undefined') {
        gsap.set(heroPlateLayer, { scale: 1.12, yPercent: -3 });
        gsap.set(heroShadowOverlay, { xPercent: -62 });
        gsap.set([heroTextLayer, heroCtaWrapper], { opacity: 1, y: 0 });
        gsap.set(heroSticky, { opacity: 1 });
      }
      return;
    }

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Initial state at progress 0.00
    gsap.set(heroPlateLayer, { scale: 1.12, yPercent: -3 });
    gsap.set(heroShadowOverlay, { xPercent: -62 });
    gsap.set([heroTextLayer, heroCtaWrapper], { opacity: 1, y: 0 });
    gsap.set(heroSticky, { opacity: 1 });

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'none' }
    });

    // 0.00 - 1.00: Shadow overlay translates from translateX(-62%) to translateX(6%) (linear)
    tl.to(heroShadowOverlay, {
      xPercent: 6,
      duration: 1.0,
      ease: 'none'
    }, 0);

    // 0.00 - 1.00: Plate translates from translateY(-3%) to translateY(3%) (subtle vertical parallax, linear)
    tl.to(heroPlateLayer, {
      yPercent: 3,
      duration: 1.0,
      ease: 'none'
    }, 0);

    // 0.00 - 1.00: Plate scales down from 1.12 to 1.04 (gentle pull-back, ease-out)
    tl.to(heroPlateLayer, {
      scale: 1.04,
      duration: 1.0,
      ease: 'power2.out'
    }, 0);

    // 0.55 - 0.85: Text layer and CTA fade from opacity 1 to 0, and translate up 40px
    tl.to([heroTextLayer, heroCtaWrapper], {
      opacity: 0,
      y: -40,
      duration: 0.30,
      ease: 'power2.out'
    }, 0.55);

    // 0.88 - 1.00: Hero sticky container fades out from opacity 1 to 0, releasing into section 2
    tl.to(heroSticky, {
      opacity: 0,
      duration: 0.12,
      ease: 'power2.out'
    }, 0.88);

    ScrollTrigger.create({
      trigger: heroScroll,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      animation: tl
    });

    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });
  }
})();
