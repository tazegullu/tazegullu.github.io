const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const yearTarget = document.querySelector('[data-year]');
const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('[data-copy-status]');
const revealItems = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.site-nav a');
const sections = [...document.querySelectorAll('section[id]')];
const emailAddress = 'ariftazegullu.developer@gmail.com';

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

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
    try {
      await navigator.clipboard.writeText(emailAddress);
      copyStatus.textContent = 'Email copied to clipboard.';
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
