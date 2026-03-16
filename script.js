// ===== Intersection Observer for Reveal Animations =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
});

function initReveals() {
    document.querySelectorAll('[data-reveal], .history-content > *, .epoch-item').forEach(el => {
        if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
        revealObserver.observe(el);
    });
}

initReveals();

// ===== Reading Progress Bar =====
const readingProgress = document.getElementById('readingProgress');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    readingProgress.style.width = `${progress}%`;
});

// ===== Hero Parallax Flow =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scroll = window.scrollY;
        hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    }
});

// ===== Smooth Navbar Interaction =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.style.padding = '8px 0';
        header.classList.add('scrolled');
    } else {
        header.style.padding = '16px 0';
        header.classList.remove('scrolled');
    }
});

// ===== Navigation Highlighting Optimization =====
const sectionElements = document.querySelectorAll('section[id]');
const navLinkElements = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinkElements.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '-20% 0px -20% 0px'
});

sectionElements.forEach(section => navObserver.observe(section));

// ===== Mobile Menu (Enhanced) =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu on link click
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===== Lightbox Optimization =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');

document.querySelectorAll('.gallery-item, .epoch-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay span, .epoch-caption')?.textContent || '';

        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

document.getElementById('lightboxClose')?.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
});

lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Welcome Console Message =====
console.log('%c🏛️ Hacienda Quilpué | Proyecto Académico', 'color: #c9a962; font-size: 16px; font-weight: bold;');
console.log('%cInvestigación por Almendra Zuleta Díaz', 'color: #666; font-style: italic;');
