const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const yearTarget = document.querySelector('[data-year]');
const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('[data-copy-status]');
const revealItems = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.site-nav a');
const sections = [...document.querySelectorAll('section[id]')];
const languageButtons = document.querySelectorAll('[data-lang]');
const translatableText = document.querySelectorAll('[data-i18n]');
const translatableAttributes = document.querySelectorAll('[data-i18n-attr]');
const emailAddress = 'ariftazegullu.developer@gmail.com';
const storageKey = 'arif-portfolio-language';

const translations = {
  en: {
    pageTitle: 'Arif Tazegüllü — Software Developer | C# .NET & Mobile Apps',
    metaDescription:
      'Arif Tazegüllü — Software Developer focused on C# .NET backend systems and practical mobile apps. Portfolio, mobile apps, projects, LinkedIn and contact links.',
    brandAria: 'Go to homepage',
    brandSubtitle: 'C# .NET · Mobile Apps',
    navAria: 'Main navigation',
    navToggleAria: 'Toggle navigation',
    languageAria: 'Language selection',
    navApps: 'Apps',
    navProfile: 'Profile',
    navProjects: 'Projects',
    navStack: 'Stack',
    navAbout: 'About',
    navContact: 'Contact',
    heroEyebrow: 'Software Developer · C# .NET · Mobile Apps',
    heroTitle: 'Software developer building backend systems and mobile apps.',
    heroLead:
      'I am a Software Developer focused on C# .NET backend engineering, enterprise systems and practical mobile apps. My portfolio brings together professional experience, independent app work and GitHub Pages projects.',
    heroAppsButton: 'View Mobile Apps',
    heroLinkedinButton: 'LinkedIn Profile',
    heroContactButton: 'Contact Me',
    heroStatsAria: 'Profile highlights',
    heroStatRoleLabel: 'Role',
    heroStatRoleValue: 'Software Developer',
    heroStatStackLabel: 'Core Stack',
    heroStatMobileLabel: 'Mobile Apps',
    mockupSmall: 'App Portfolio',
    mockupTitle: 'Apps by Arif',
    mockupText: 'Small, focused tools for real user problems.',
    focusAria: 'Core focus areas',
    focusSoftwareDeveloper: 'Software Developer',
    profileEyebrow: 'LinkedIn profile',
    profileTitle: 'Professional profile, updated from LinkedIn.',
    profileIntro:
      'A concise profile area for professional credibility: role, current company, education, location and public profile link.',
    profileRoleLabel: 'Current role',
    profileRoleTitle: 'Software Developer',
    profileRoleText:
      'C# .NET focused developer with enterprise backend experience and a growing mobile app portfolio.',
    profileCompanyLabel: 'Company',
    profileCompanyText: 'Professional software development experience in enterprise-scale systems.',
    profileEducationLabel: 'Education',
    profileEducationText: 'Engineering background supporting backend, data and product-oriented software work.',
    profileLocationLabel: 'Location',
    profileLocationText: 'Building professional backend systems and independent mobile products from Istanbul.',
    appsEyebrow: 'Mobile app showcase',
    appsTitle: 'Focused mobile apps with room for store and product links.',
    appsIntro:
      'Each app card is prepared for App Store, Google Play, GitHub, demo and privacy policy links, so the site can grow with every product release.',
    statusStorePrep: 'Store Prep',
    statusInReview: 'In Review',
    statusPrivateBuild: 'Private Build',
    tripReadyText:
      'A lightweight travel packing and checklist app designed for practical trip preparation, offline-first usage and simple daily utility.',
    yksText:
      'A clean TYT/AYT score calculator focused on fast input, estimated score ranges and a simple publishing-first mobile experience.',
    financeText:
      'A personal expense tracking app with installments, fixed expenses, credit card cycles, monthly views and multi-device sync experiments.',
    appStoreSoon: 'App Store Soon',
    googlePlaySoon: 'Google Play Soon',
    privacy: 'Privacy',
    githubSoon: 'GitHub Soon',
    caseStudySoon: 'Case Study Soon',
    githubPrivate: 'GitHub Private',
    educationTag: 'Education',
    projectsEyebrow: 'Selected projects',
    projectsTitle: 'Web projects, experiments and public repositories.',
    projectsIntro:
      'This area keeps selected public projects visible while the main site shifts toward a modern app portfolio.',
    legacyWebApp: 'Legacy Web App',
    questionsText: 'A small browser-based question practice tool from the earlier version of this website.',
    repository: 'Repository',
    githubProfileText: 'Source code, experiments and future public repositories can be linked here.',
    open: 'Open',
    visit: 'Visit',
    stackEyebrow: 'Technical stack',
    stackTitle: 'C# .NET depth, mobile product direction.',
    stackIntro:
      'The site presents a balanced profile: C# .NET backend experience, SQL-oriented engineering, and a growing portfolio of practical mobile applications.',
    backendTitle: 'Backend Engineering',
    backendText: 'C# .NET, SQL, API design, enterprise systems and production-oriented software development.',
    mobileTitle: 'Mobile Development',
    mobileText: 'React Native, Expo, TypeScript, responsive UI, local-first flows and store-ready app structures.',
    dataTitle: 'Data, Cloud & Sync',
    dataText: 'Firebase, Firestore, SQLite, data synchronization patterns and scalable app foundations.',
    productTitle: 'Product Thinking',
    productText: 'Small focused products, practical use cases, launch discipline and iterative improvement after release.',
    aboutEyebrow: 'About',
    aboutTitle: 'Developer profile',
    aboutTextOne:
      'I am a Software Developer with a strong foundation in C# .NET and SQL. My professional background is rooted in enterprise backend engineering, while my independent work focuses on React Native and Expo mobile apps that solve practical everyday problems.',
    aboutTextTwo:
      'This website is designed as a central portfolio for my LinkedIn profile, mobile apps, technical projects, privacy policy pages and future public releases.',
    timelineSoftwareTitle: 'Software Developer',
    timelineSoftwareText: 'C# .NET and SQL development for enterprise-scale systems.',
    timelineMobileTitle: 'Cross-platform mobile apps',
    timelineMobileText: 'React Native and Expo apps prepared for iOS, Android, web and store publishing workflows.',
    timelineProductTitle: 'Independent product portfolio',
    timelineProductText: 'Focused mobile products, store publishing and practical app experiments.',
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s connect.',
    contactIntro: 'For professional contact, app feedback, collaboration or technical discussions, use the links below.',
    sendEmail: 'Send Email',
    copyEmail: 'Copy Email',
    emailCopied: 'Email copied to clipboard.',
    copyrightPrefix: '©',
    footerBuilt: 'Built for GitHub Pages.',
    backToTop: 'Back to top'
  },
  tr: {
    pageTitle: 'Arif Tazegüllü — Yazılım Geliştirici | C# .NET & Mobil Uygulamalar',
    metaDescription:
      'Arif Tazegüllü — C# .NET backend sistemleri ve pratik mobil uygulamalar geliştiren yazılım geliştirici. Portfolyo, mobil uygulamalar, projeler, LinkedIn ve iletişim bağlantıları.',
    brandAria: 'Ana sayfaya git',
    brandSubtitle: 'C# .NET · Mobil Uygulamalar',
    navAria: 'Ana menü',
    navToggleAria: 'Menüyü aç veya kapat',
    languageAria: 'Dil seçimi',
    navApps: 'Uygulamalar',
    navProfile: 'Profil',
    navProjects: 'Projeler',
    navStack: 'Teknolojiler',
    navAbout: 'Hakkımda',
    navContact: 'İletişim',
    heroEyebrow: 'Yazılım Geliştirici · C# .NET · Mobil Uygulamalar',
    heroTitle: 'Backend sistemleri ve mobil uygulamalar geliştiren yazılım geliştirici.',
    heroLead:
      'C# .NET backend geliştirme, kurumsal sistemler ve pratik mobil uygulamalar odağında çalışan bir yazılım geliştiriciyim. Bu portfolyo profesyonel deneyimimi, bağımsız uygulama çalışmalarımı ve GitHub Pages projelerimi bir araya getirir.',
    heroAppsButton: 'Mobil Uygulamaları Gör',
    heroLinkedinButton: 'LinkedIn Profili',
    heroContactButton: 'İletişime Geç',
    heroStatsAria: 'Profil öne çıkanları',
    heroStatRoleLabel: 'Rol',
    heroStatRoleValue: 'Yazılım Geliştirici',
    heroStatStackLabel: 'Ana Teknolojiler',
    heroStatMobileLabel: 'Mobil Uygulamalar',
    mockupSmall: 'Uygulama Portfolyosu',
    mockupTitle: 'Arif’in Uygulamaları',
    mockupText: 'Gerçek kullanıcı problemleri için küçük ve odaklı araçlar.',
    focusAria: 'Ana odak alanları',
    focusSoftwareDeveloper: 'Yazılım Geliştirici',
    profileEyebrow: 'LinkedIn profili',
    profileTitle: 'LinkedIn bilgileriyle güncellenmiş profesyonel profil.',
    profileIntro:
      'Profesyonel güvenilirlik için kısa bir profil alanı: rol, mevcut şirket, eğitim, konum ve açık profil bağlantısı.',
    profileRoleLabel: 'Mevcut rol',
    profileRoleTitle: 'Yazılım Geliştirici',
    profileRoleText:
      'C# .NET odağında, kurumsal backend deneyimine sahip ve mobil uygulama portfolyosunu büyüten geliştirici.',
    profileCompanyLabel: 'Şirket',
    profileCompanyText: 'Kurumsal ölçekli sistemlerde profesyonel yazılım geliştirme deneyimi.',
    profileEducationLabel: 'Eğitim',
    profileEducationText: 'Backend, veri ve ürün odaklı yazılım çalışmalarını destekleyen mühendislik temeli.',
    profileLocationLabel: 'Konum',
    profileLocationText: 'İstanbul’dan profesyonel backend sistemleri ve bağımsız mobil ürünler geliştiriyorum.',
    appsEyebrow: 'Mobil uygulama vitrini',
    appsTitle: 'Store ve ürün linkleri için hazır alanlara sahip odaklı mobil uygulamalar.',
    appsIntro:
      'Her uygulama kartı App Store, Google Play, GitHub, demo ve gizlilik politikası bağlantıları için hazırlandı; böylece site her ürün yayınıyla büyüyebilir.',
    statusStorePrep: 'Store Hazırlığı',
    statusInReview: 'İncelemede',
    statusPrivateBuild: 'Özel Geliştirme',
    tripReadyText:
      'Pratik seyahat hazırlığı, offline kullanım ve günlük fayda odağıyla tasarlanan hafif bir valiz ve kontrol listesi uygulaması.',
    yksText:
      'Hızlı giriş, tahmini puan aralıkları ve sade yayın öncelikli mobil deneyim odağına sahip temiz bir TYT/AYT puan hesaplama uygulaması.',
    financeText:
      'Taksitler, sabit giderler, kredi kartı dönemleri, aylık görünümler ve çok cihazlı senkronizasyon denemeleri içeren kişisel harcama takip uygulaması.',
    appStoreSoon: 'App Store Yakında',
    googlePlaySoon: 'Google Play Yakında',
    privacy: 'Gizlilik',
    githubSoon: 'GitHub Yakında',
    caseStudySoon: 'Vaka Analizi Yakında',
    githubPrivate: 'GitHub Özel',
    educationTag: 'Eğitim',
    projectsEyebrow: 'Seçili projeler',
    projectsTitle: 'Web projeleri, denemeler ve açık repolar.',
    projectsIntro:
      'Bu alan, ana site modern bir uygulama portfolyosuna dönüşürken seçili açık projeleri görünür tutar.',
    legacyWebApp: 'Eski Web Uygulaması',
    questionsText: 'Bu web sitesinin önceki sürümünden küçük, tarayıcı tabanlı bir soru pratik aracı.',
    repository: 'Repo',
    githubProfileText: 'Kaynak kodları, denemeler ve gelecekteki açık repolar burada bağlantılanabilir.',
    open: 'Aç',
    visit: 'Git',
    stackEyebrow: 'Teknik yetkinlikler',
    stackTitle: 'C# .NET derinliği, mobil ürün yönelimi.',
    stackIntro:
      'Site dengeli bir profili sunar: C# .NET backend deneyimi, SQL odaklı mühendislik ve büyüyen pratik mobil uygulama portfolyosu.',
    backendTitle: 'Backend Geliştirme',
    backendText: 'C# .NET, SQL, API tasarımı, kurumsal sistemler ve üretim odaklı yazılım geliştirme.',
    mobileTitle: 'Mobil Geliştirme',
    mobileText: 'React Native, Expo, TypeScript, responsive arayüz, local-first akışlar ve store’a hazır uygulama yapıları.',
    dataTitle: 'Veri, Cloud ve Senkronizasyon',
    dataText: 'Firebase, Firestore, SQLite, veri senkronizasyon desenleri ve ölçeklenebilir uygulama temelleri.',
    productTitle: 'Ürün Bakışı',
    productText: 'Küçük ve odaklı ürünler, pratik kullanım senaryoları, yayın disiplini ve sürüm sonrası iteratif geliştirme.',
    aboutEyebrow: 'Hakkımda',
    aboutTitle: 'Geliştirici profili',
    aboutTextOne:
      'C# .NET ve SQL tarafında güçlü temele sahip bir yazılım geliştiriciyim. Profesyonel geçmişim kurumsal backend geliştirme üzerine kurulu; bağımsız çalışmalarımda ise günlük problemlere çözüm üreten React Native ve Expo mobil uygulamalarına odaklanıyorum.',
    aboutTextTwo:
      'Bu web sitesi LinkedIn profilim, mobil uygulamalarım, teknik projelerim, gizlilik politikası sayfalarım ve gelecekteki açık yayınlarım için merkezi bir portfolyo olarak tasarlandı.',
    timelineSoftwareTitle: 'Yazılım Geliştirici',
    timelineSoftwareText: 'Kurumsal ölçekli sistemler için C# .NET ve SQL geliştirme.',
    timelineMobileTitle: 'Çapraz platform mobil uygulamalar',
    timelineMobileText: 'iOS, Android, web ve store yayın süreçlerine uygun React Native ve Expo uygulamaları.',
    timelineProductTitle: 'Bağımsız ürün portfolyosu',
    timelineProductText: 'Odaklı mobil ürünler, store yayını ve pratik uygulama denemeleri.',
    contactEyebrow: 'İletişim',
    contactTitle: 'Bağlantı kuralım.',
    contactIntro: 'Profesyonel iletişim, uygulama geri bildirimi, iş birliği veya teknik konular için aşağıdaki bağlantıları kullanabilirsiniz.',
    sendEmail: 'E-posta Gönder',
    copyEmail: 'E-postayı Kopyala',
    emailCopied: 'E-posta panoya kopyalandı.',
    copyrightPrefix: '©',
    footerBuilt: 'GitHub Pages için hazırlandı.',
    backToTop: 'Yukarı dön'
  }
};

function getInitialLanguage() {
  const storedLanguage = window.localStorage.getItem(storageKey);
  if (storedLanguage === 'tr' || storedLanguage === 'en') return storedLanguage;

  const browserLanguage = window.navigator.language || '';
  return browserLanguage.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', dictionary.metaDescription);
  }

  translatableText.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  translatableAttributes.forEach(element => {
    const rules = element.getAttribute('data-i18n-attr');
    if (!rules) return;

    rules.split(';').forEach(rule => {
      const [attribute, key] = rule.split(':').map(item => item.trim());
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  languageButtons.forEach(button => {
    const isActive = button.getAttribute('data-lang') === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  window.localStorage.setItem(storageKey, language);
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedLanguage = button.getAttribute('data-lang');
    if (selectedLanguage === 'tr' || selectedLanguage === 'en') {
      setLanguage(selectedLanguage);
    }
  });
});

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', event => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const language = document.documentElement.lang === 'tr' ? 'tr' : 'en';
    const dictionary = translations[language];

    try {
      await navigator.clipboard.writeText(emailAddress);
      copyStatus.textContent = dictionary.emailCopied;
    } catch (error) {
      copyStatus.textContent = emailAddress;
    }

    window.setTimeout(() => {
      copyStatus.textContent = '';
    }, 3000);
  });
}

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach(item => revealObserver.observe(item));

const activeNavObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-38% 0px -54% 0px', threshold: 0.01 }
);

sections.forEach(section => activeNavObserver.observe(section));

setLanguage(getInitialLanguage());
