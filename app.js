/* ==========================================================================
   LAPARET VELIKIY NOVGOROD — REDESIGNED APP ENGINE
   Skills: GSAP ScrollTrigger, motion-framer principles, taste-skill,
           ui-ux-pro-max, modern-web-design
   ========================================================================== */

// ── PRODUCTS DATABASE ────────────────────────────────────────────────────
const PRODUCTS = [
    {
        id: 'laparet-0', name: 'Стикс',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'beton', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 3690,
        image: 'https://laparet.ru/static/catalog/product/315648/thumb_508x508.jpg?24072026192810',
        badge: 'Новинка',
        url: 'https://laparet.ru/collection/stiks_laparet.html'
    },
    {
        id: 'laparet-1', name: 'Нуволе',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'mramor', surface: 'matovaya', surfaceName: 'Матовая',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 3590,
        image: 'https://laparet.ru/static/catalog/product/315647/thumb_508x508.jpg?24072026192724',
        badge: 'Новинка',
        url: 'https://laparet.ru/collection/nuvole_laparet.html'
    },
    {
        id: 'laparet-2', name: 'Хроматика',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'derevo', surface: 'matovaya', surfaceName: 'Матовая',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 4590,
        image: 'https://laparet.ru/static/catalog/product/315640/thumb_508x508.jpg?24072026192918',
        badge: 'Новинка',
        url: 'https://laparet.ru/collection/khromatika_laparet.html'
    },
    {
        id: 'laparet-3', name: 'Люмен',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'derevo', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 1890,
        image: 'https://laparet.ru/static/catalog/product/315639/thumb_508x508.jpg?24072026192811',
        badge: null,
        url: 'https://laparet.ru/collection/lyumen_laparet.html'
    },
    {
        id: 'laparet-4', name: 'Брума',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'onyx', surface: 'matovaya', surfaceName: 'Матовая',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 4390,
        image: 'https://laparet.ru/static/catalog/product/315638/thumb_508x508.jpg?24072026192808',
        badge: null,
        url: 'https://laparet.ru/collection/bruma_laparet.html'
    },
    {
        id: 'laparet-5', name: 'Калакатта',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'onyx', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 4190,
        image: 'https://laparet.ru/static/catalog/product/315637/thumb_508x508.jpg?24072026192758',
        badge: 'Хит Продаж',
        url: 'https://laparet.ru/collection/kalakatta_laparet.html'
    },
    {
        id: 'laparet-6', name: 'Астон',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'onyx', surface: 'matovaya', surfaceName: 'Матовая',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 3890,
        image: 'https://laparet.ru/static/catalog/product/313667/thumb_508x508.jpg?24072026192821',
        badge: null,
        url: 'https://laparet.ru/collection/aston_laparet.html'
    },
    {
        id: 'laparet-7', name: 'Лапальма',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'mramor', surface: 'matovaya', surfaceName: 'Матовая',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 1890,
        image: 'https://laparet.ru/static/catalog/product/313490/thumb_508x508.jpg?24072026192859',
        badge: null,
        url: 'https://laparet.ru/collection/lapalma_laparet.html'
    },
    {
        id: 'laparet-8', name: 'Тайм',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'beton', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 3990,
        image: 'https://laparet.ru/static/catalog/product/313489/thumb_508x508.jpg?24072026192746',
        badge: null,
        url: 'https://laparet.ru/collection/time_laparet.html'
    },
    {
        id: 'laparet-9', name: 'Аляска',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'beton', surface: 'matovaya', surfaceName: 'Матовая',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 4190,
        image: 'https://laparet.ru/static/catalog/product/313488/thumb_508x508.jpg?24072026192715',
        badge: null,
        url: 'https://laparet.ru/collection/alaska_laparet.html'
    },
    {
        id: 'laparet-10', name: 'Неон',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'onyx', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 4490,
        image: 'https://laparet.ru/static/catalog/product/313409/thumb_508x508.jpg?24072026192821',
        badge: 'Хит Продаж',
        url: 'https://laparet.ru/collection/neon_laparet.html'
    },
    {
        id: 'laparet-11', name: 'Натив',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'onyx', surface: 'matovaya', surfaceName: 'Матовая',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 3990,
        image: 'https://laparet.ru/static/catalog/product/313408/thumb_508x508.jpg?24072026192713',
        badge: null,
        url: 'https://laparet.ru/collection/native_laparet.html'
    },
    {
        id: 'laparet-12', name: 'Поэма',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'beton', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 4390,
        image: 'https://laparet.ru/static/catalog/product/313406/thumb_508x508.jpg?24072026192800',
        badge: null,
        url: 'https://laparet.ru/collection/poeme_laparet.html'
    },
    {
        id: 'laparet-13', name: 'Беринг',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'mramor', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 4090,
        image: 'https://laparet.ru/static/catalog/product/310599/thumb_508x508.jpg?24072026192848',
        badge: null,
        url: 'https://laparet.ru/collection/bering_laparet.html'
    },
    {
        id: 'laparet-14', name: 'Санлайт',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'onyx', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 4390,
        image: 'https://laparet.ru/static/catalog/product/310537/thumb_508x508.jpg?24072026192714',
        badge: null,
        url: 'https://laparet.ru/collection/sunlight_laparet.html'
    },
    {
        id: 'laparet-15', name: 'Диско',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'mramor', surface: 'matovaya', surfaceName: 'Матовая',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 2490,
        image: 'https://laparet.ru/static/catalog/product/310519/thumb_508x508.jpg?24072026192859',
        badge: 'Хит Продаж',
        url: 'https://laparet.ru/collection/disco_laparet.html'
    },
    {
        id: 'laparet-16', name: 'Канзас',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'derevo', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 3690,
        image: 'https://laparet.ru/static/catalog/product/310518/thumb_508x508.jpg?24072026192846',
        badge: null,
        url: 'https://laparet.ru/collection/kanzas_laparet.html'
    },
    {
        id: 'laparet-17', name: 'Этнис',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'beton', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 2390,
        image: 'https://laparet.ru/static/catalog/product/310516/thumb_508x508.jpg?24072026192847',
        badge: null,
        url: 'https://laparet.ru/collection/etnis_laparet.html'
    },
    {
        id: 'laparet-18', name: 'Джава',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'onyx', surface: 'matovaya', surfaceName: 'Матовая',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 3690,
        image: 'https://laparet.ru/static/catalog/product/310468/thumb_508x508.jpg?24072026192735',
        badge: null,
        url: 'https://laparet.ru/collection/java_laparet.html'
    },
    {
        id: 'laparet-19', name: 'Ферри',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'mramor', surface: 'matovaya', surfaceName: 'Матовая',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 4090,
        image: 'https://laparet.ru/static/catalog/product/310451/thumb_508x508.jpg?24072026192810',
        badge: null,
        url: 'https://laparet.ru/collection/ferry_laparet.html'
    },
    {
        id: 'laparet-20', name: 'Монбланк',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'beton', surface: 'matovaya', surfaceName: 'Матовая',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 3290,
        image: 'https://laparet.ru/static/catalog/product/310442/thumb_508x508.jpg?24072026192834',
        badge: 'Хит Продаж',
        url: 'https://laparet.ru/collection/monblanc_laparet.html'
    },
    {
        id: 'laparet-21', name: 'Органик',
        category: 'plitka', categoryName: 'Настенная плитка',
        texture: 'onyx', surface: 'matovaya', surfaceName: 'Матовая',
        size: '30×90 см', boxArea: 1.35, pricePerM2: 3390,
        image: 'https://laparet.ru/static/catalog/product/310100/thumb_508x508.jpg?24072026192712',
        badge: null,
        url: 'https://laparet.ru/collection/organic_laparet.html'
    },
    {
        id: 'laparet-22', name: 'Шанс',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'beton', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 2190,
        image: 'https://laparet.ru/static/catalog/product/309965/thumb_508x508.jpg?24072026192917',
        badge: null,
        url: 'https://laparet.ru/collection/chance_laparet.html'
    },
    {
        id: 'laparet-23', name: 'Лэнд',
        category: 'keramogranit', categoryName: 'Керамогранит',
        texture: 'derevo', surface: 'polirovannaya', surfaceName: 'Полированная',
        size: '60×120 см', boxArea: 1.44, pricePerM2: 4390,
        image: 'https://laparet.ru/static/catalog/product/309964/thumb_508x508.jpg?24072026192857',
        badge: null,
        url: 'https://laparet.ru/collection/land_laparet.html'
    },
];

// ── STATE ────────────────────────────────────────────────────────────────
const state = {
    cart: [],
    selectedCategory: 'all',
    calcProduct: PRODUCTS[0],
    calcReservePercent: 10
};

// ── INIT ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initVideoBackground();
    initHeroAnimations();
    initGSAPScrollAnimations();
    initCustomCursor();
    initNavbarScroll();
    renderCatalog();
    initCalculatorOptions();
    recalculateTile();
    checkCookiesNotice();
});

// ═══════════════════════════════════════════════════════════════════════════
// PORTFOLIO VIDEO BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════
async function initVideoBackground() {
    const video = document.getElementById('heroVideo');
    if (!video) return;

    
    // HTML already has autoplay muted playsinline.
    
    // Force video to start at 0
    video.currentTime = 0;

    try {
        await video.play();
        console.log('Video playing successfully');
    } catch (error) {
        console.error('Autoplay prevented or video play failed:', error);
    }

    video.addEventListener('ended', () => {
        console.log('Video reached the last frame successfully.');
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO ENTRY ANIMATIONS (motion-framer principles in vanilla GSAP)
// Staggered fade-up with spring-like easing
// ═══════════════════════════════════════════════════════════════════════════
function initHeroAnimations() {
    // Respect reduced motion (ui-ux-pro-max, taste-skill 6.B)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.hero-anim').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    const heroItems = document.querySelectorAll('.hero-anim');
    heroItems.forEach(el => {
        const delay = parseFloat(el.dataset.delay) || 0;
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: delay,
            ease: 'power3.out' // Feels like spring without overshoot
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// GSAP SCROLLTRIGGER — Section Reveals
// (gsap-scrolltrigger skill: batch animations, staggered reveals)
// ═══════════════════════════════════════════════════════════════════════════
function initGSAPScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('[data-reveal]').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    // Batch reveal for [data-reveal] elements
    ScrollTrigger.batch('[data-reveal]', {
        onEnter: batch => {
            gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                overwrite: true
            });
        },
        start: 'top 85%',
        once: true
    });

    // ── Video Cinematic Exit (Framer Motion style) ──────────────────────
    // As user scrolls past the hero section, the fixed video scales down,
    // fades out, and blurs, creating a "sticky-stack" effect that smoothly
    // transitions into the solid premium background of the next sections.
    const videoContainer = document.getElementById('globalVideoContainer');
    if (videoContainer) {
        gsap.to(videoContainer, {
            scale: 0.95,
            opacity: 0.1, // Fade almost completely to black
            filter: 'blur(12px)',
            ease: 'none',
            scrollTrigger: {
                trigger: '.portfolio-hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }


    // Stats counter animation (on scroll into view)
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(el => {
        const target = parseInt(el.dataset.count);
        ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => animateCounter(el, target)
        });
    });

    // ── Hero Content Parallax Exit ────────────────────────────────────
    // As user scrolls past hero, content fades out + moves up = cinematic exit
    gsap.to('.hero-content', {
        opacity: 0,
        y: -80,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: '20% top',
            end: '70% top',
            scrub: true
        }
    });

    // Hero footer (stats, availability card) fades out later
    gsap.to('.hero-footer', {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: '30% top',
            end: '80% top',
            scrub: true
        }
    });

    // Navbar also gets a subtle lift
    gsap.to('.navbar', {
        y: -20,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: '10% top',
            end: '50% top',
            scrub: true
        }
    });

    // ── Section Cinematic Entry & Exit ────────────────────────────────
    // Make each section fade in and scale up naturally (Emil Kowalski rule: nothing from 0)
    const sections = ['.features-section', '.catalog-section', '.calculator-section', '.design-3d-section', '.showroom-section'];
    
    sections.forEach(sec => {
        // Section Entry
        gsap.fromTo(sec, 
            { opacity: 0, scale: 0.96, filter: 'blur(4px)' },
            { 
                opacity: 1, 
                scale: 1, 
                filter: 'blur(0px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: sec,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: true
                }
            }
        );
        
        // Staggered children reveal (Taste-skill / Motion-framer)
        // If the section has elements with .bento-card, .catalog-card, or .calc-glass-panel
        const children = document.querySelectorAll(`${sec} .bento-card, ${sec} .catalog-card, ${sec} .calc-glass-panel, ${sec} .showroom-info, ${sec} .showroom-map-container`);
        if (children.length > 0) {
            gsap.fromTo(children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sec,
                        start: 'top 75%',
                        once: true
                    }
                }
            );
        }

        // Section Exit
        gsap.to(sec, {
            opacity: 0,
            y: -80,
            scale: 0.98,
            ease: 'none',
            scrollTrigger: {
                trigger: sec,
                start: 'bottom 50%',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Navbar background on scroll
    ScrollTrigger.create({
        start: 'top -80',
        onUpdate: self => {
            const navbar = document.getElementById('navbar');
            if (self.direction === 1 && self.scroll() > 80) {
                navbar.classList.add('navbar-scrolled');
            }
            if (self.scroll() < 40) {
                navbar.classList.remove('navbar-scrolled');
            }
        }
    });
}

// Counter animation (ui-ux-pro-max: animated data viz)
function animateCounter(el, target) {
    const duration = 1800;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target.toLocaleString('ru-RU');
            clearInterval(interval);
        } else {
            el.textContent = Math.floor(current).toLocaleString('ru-RU');
        }
    }, duration / steps);
}

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOM CURSOR (modern-web-design: cursor UX, taste-skill 5)
// Smooth following with GSAP, magnetic effect on buttons
// ═══════════════════════════════════════════════════════════════════════════
function initCustomCursor() {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches || window.innerWidth < 1024) return;

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow with GSAP (not requestAnimationFrame loop for perf)
    gsap.ticker.add(() => {
        gsap.set(dot, { x: mouseX - 3, y: mouseY - 3 });
        gsap.to(ring, {
            x: mouseX - 18,
            y: mouseY - 18,
            duration: 0.15,
            ease: 'power2.out'
        });
    });

    // Magnetic effect on interactive elements
    const interactiveEls = document.querySelectorAll('a, button, .pill-btn, .product-card');
    interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(ring, { scale: 1.6, borderColor: 'rgba(138,99,248,0.8)', duration: 0.25 });
            gsap.to(dot, { scale: 1.5, duration: 0.25 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(ring, { scale: 1, borderColor: 'rgba(138,99,248,0.5)', duration: 0.25 });
            gsap.to(dot, { scale: 1, duration: 0.25 });
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ═══════════════════════════════════════════════════════════════════════════
function initNavbarScroll() {
    // Add scrolled style via CSS
    const style = document.createElement('style');
    style.textContent = `
        .navbar-scrolled {
            position: fixed;
            top: 0; left: 0; right: 0;
            padding: 0.8rem 2rem !important;
            background: rgba(3,3,5,0.9);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            z-index: 100;
            animation: slideDown 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes slideDown {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// ═══════════════════════════════════════════════════════════════════════════
// CATALOG RENDER & FILTERS
// ═══════════════════════════════════════════════════════════════════════════
function filterCategory(cat, element) {
    state.selectedCategory = cat;
    if (element) {
        document.querySelectorAll('.category-pills .pill-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }
    applyFilters();
}

function applyFilters() {
    const texture = document.getElementById('textureFilter').value;
    const room = document.getElementById('roomFilter').value;
    const surface = document.getElementById('surfaceFilter').value;
    const sort = document.getElementById('sortOrder').value;
    renderCatalog(texture, room, surface, sort);
}

function renderCatalog(texture = 'all', room = 'all', surface = 'all', sort = 'popular') {
    const grid = document.getElementById('productGrid');
    const counter = document.getElementById('catalogCounter');
    grid.innerHTML = '';

    let filtered = PRODUCTS.filter(item => {
        const catMatch = state.selectedCategory === 'all' || item.category === state.selectedCategory;
        const texMatch = texture === 'all' || item.texture === texture;
        const roomMatch = room === 'all';
        const surfMatch = surface === 'all' || item.surface === surface;
        return catMatch && texMatch && roomMatch && surfMatch;
    });

    if (sort === 'price-asc') filtered.sort((a, b) => a.pricePerM2 - b.pricePerM2);
    if (sort === 'price-desc') filtered.sort((a, b) => b.pricePerM2 - a.pricePerM2);

    counter.textContent = `${filtered.length} из ${PRODUCTS.length} позиций`;

    filtered.forEach((item, index) => {
        const boxPrice = Math.round(item.pricePerM2 * item.boxArea);
        const card = document.createElement('div');
        card.className = 'product-card glassmorphism-panel';
        card.setAttribute('data-reveal', '');
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy">
                ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-size">${item.categoryName} · ${item.size} · ${item.surfaceName}</p>
                <div class="price-row">
                    <span class="price-val">${item.pricePerM2.toLocaleString('ru-RU')} ₽/м²</span>
                    <span class="price-sub">${boxPrice.toLocaleString('ru-RU')} ₽/кор.</span>
                </div>
                <div class="product-btns">
                    <button class="btn btn-primary btn-sm" onclick="addToCart('${item.id}')">В корзину</button>
                    <button class="btn btn-outline btn-sm" onclick="selectForCalc('${item.id}')">Рассчитать</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Re-trigger GSAP reveals for new cards
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
        gsap.to(grid.querySelectorAll('.product-card'), {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out'
        });
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// SMART TILE CALCULATOR
// ═══════════════════════════════════════════════════════════════════════════
function initCalculatorOptions() {
    const select = document.getElementById('calcProductSelect');
    if (!select) return;
    select.innerHTML = '';
    PRODUCTS.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} (${p.pricePerM2.toLocaleString('ru-RU')} ₽/м²)`;
        select.appendChild(opt);
    });
}

function setReserve(percent, btn) {
    state.calcReservePercent = percent;
    document.querySelectorAll('.reserve-pills .reserve-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    recalculateTile();
}

function selectForCalc(productId) {
    const select = document.getElementById('calcProductSelect');
    if (select) select.value = productId;
    recalculateTile();
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
}

function recalculateTile() {
    const productId = document.getElementById('calcProductSelect').value;
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    state.calcProduct = product;

    const width = parseFloat(document.getElementById('calcWidth').value) || 0;
    const length = parseFloat(document.getElementById('calcLength').value) || 0;

    const netArea = width * length;
    const grossArea = netArea * (1 + state.calcReservePercent / 100);
    const boxesNeeded = Math.ceil(grossArea / product.boxArea);
    const totalPrice = Math.round(boxesNeeded * product.boxArea * product.pricePerM2);

    document.getElementById('resNetArea').textContent = `${netArea.toFixed(2)} м²`;
    document.getElementById('resGrossArea').textContent = `${grossArea.toFixed(2)} м² (+${state.calcReservePercent}%)`;
    document.getElementById('resBoxes').textContent = `${boxesNeeded} кор. (${(boxesNeeded * product.boxArea).toFixed(2)} м²)`;
    document.getElementById('resTotalPrice').textContent = `${totalPrice.toLocaleString('ru-RU')} ₽`;
}

function sendCalculationToCart() {
    const product = state.calcProduct;
    const width = parseFloat(document.getElementById('calcWidth').value) || 0;
    const length = parseFloat(document.getElementById('calcLength').value) || 0;
    const grossArea = (width * length) * (1 + state.calcReservePercent / 100);
    const boxesNeeded = Math.ceil(grossArea / product.boxArea);
    addToCart(product.id, boxesNeeded);
    toggleCartDrawer();
}

// ═══════════════════════════════════════════════════════════════════════════
// CART
// ═══════════════════════════════════════════════════════════════════════════
function addToCart(productId, boxes = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(c => c.product.id === productId);
    if (existing) {
        existing.boxes += boxes;
    } else {
        state.cart.push({ product, boxes });
    }
    updateCartUI();
    showToast(`«${product.name}» добавлен в заказ`);
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(c => c.product.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const body = document.getElementById('cartDrawerBody');
    const totalEl = document.getElementById('cartTotalSum');

    const totalCount = state.cart.reduce((s, i) => s + i.boxes, 0);
    badge.textContent = totalCount;

    body.innerHTML = '';
    let grandTotal = 0;

    if (state.cart.length === 0) {
        body.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:3rem 1rem;">Корзина пуста</p>';
        totalEl.textContent = '0 ₽';
        return;
    }

    state.cart.forEach(item => {
        const itemSum = Math.round(item.boxes * item.product.boxArea * item.product.pricePerM2);
        grandTotal += itemSum;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.product.image}" class="cart-item-img" alt="${item.product.name}">
            <div class="cart-item-info">
                <div style="font-weight:600; font-size:0.9rem;">${item.product.name}</div>
                <div style="font-size:0.78rem; color:var(--text-muted);">${item.boxes} кор. (${(item.boxes * item.product.boxArea).toFixed(2)} м²)</div>
                <div class="cart-item-price">${itemSum.toLocaleString('ru-RU')} ₽</div>
            </div>
            <button onclick="removeFromCart('${item.product.id}')" style="background:none; color:#ff4d5a; font-size:1.3rem; cursor:pointer; min-width:44px; min-height:44px; display:flex; align-items:center; justify-content:center;" aria-label="Удалить">&times;</button>
        `;
        body.appendChild(div);
    });

    totalEl.textContent = `${grandTotal.toLocaleString('ru-RU')} ₽`;
}

function toggleCartDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    overlay.classList.toggle('hidden');
    if (!overlay.classList.contains('hidden')) {
        // Animate drawer in
        gsap.from('.cart-drawer', { x: 100, duration: 0.35, ease: 'power3.out' });
    }
}

function closeCartDrawer(e) {
    if (!e || e.target.id === 'cartDrawerOverlay' || e.target.classList.contains('close-btn')) {
        document.getElementById('cartDrawerOverlay').classList.add('hidden');
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// MODALS & FORMS
// ═══════════════════════════════════════════════════════════════════════════
function openConsultationModal() {
    const m = document.getElementById('consultationModal');
    m.classList.remove('hidden');
    gsap.from(m.querySelector('.modal-card'), { scale: 0.92, opacity: 0, duration: 0.3, ease: 'power3.out' });
}
function closeConsultationModal(e) {
    if (!e || e.target.id === 'consultationModal' || e.target.classList.contains('close-btn'))
        document.getElementById('consultationModal').classList.add('hidden');
}

function open3DModal() {
    document.getElementById('design-3d').scrollIntoView({ behavior: 'smooth' });
}

function openPrivacyModal(e) {
    if (e) e.preventDefault();
    const m = document.getElementById('privacyModal');
    m.classList.remove('hidden');
    gsap.from(m.querySelector('.modal-card'), { scale: 0.92, opacity: 0, duration: 0.3, ease: 'power3.out' });
}
function closePrivacyModal(e) {
    if (!e || e.target.id === 'privacyModal' || e.target.classList.contains('close-btn') || e.target.tagName === 'BUTTON')
        document.getElementById('privacyModal').classList.add('hidden');
}

function handleConsultationSubmit(e) {
    e.preventDefault();
    closeConsultationModal();
    showToast('Менеджер Laparet перезвонит вам в течение 10 минут');
}

function handleDesignSubmit(e) {
    e.preventDefault();
    showToast('Вы записаны на 3D-проект на ул. Ломоносова 20 к.1');
    document.getElementById('designForm').reset();
}

function handleCartCheckout(e) {
    e.preventDefault();
    if (state.cart.length === 0) return showToast('Корзина пуста');
    state.cart = [];
    updateCartUI();
    closeCartDrawer();
    showToast('Заказ отправлен менеджеру в Великом Новгороде');
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════
function checkCookiesNotice() {
    if (!localStorage.getItem('laparet_cookies_ok')) {
        document.getElementById('cookieNotice').classList.remove('hidden');
    }
}
function acceptCookies() {
    localStorage.setItem('laparet_cookies_ok', 'true');
    document.getElementById('cookieNotice').classList.add('hidden');
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('mobile-open');
}

function scrollToCatalog() {
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

// Toast (ui-ux-pro-max: success feedback, 3-5s auto-dismiss)
function showToast(msg) {
    const t = document.createElement('div');
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');
    t.style.cssText = `
        position: fixed; top: 1.5rem; right: 1.5rem; z-index: 9999;
        background: rgba(10,10,16,0.95);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(138,99,248,0.3);
        color: #fff; padding: 1rem 1.5rem;
        border-radius: 12px; font-weight: 600; font-size: 0.88rem;
        box-shadow: 0 12px 32px rgba(0,0,0,0.5);
        transform: translateY(-10px); opacity: 0;
        transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    `;
    t.textContent = msg;
    document.body.appendChild(t);

    // Animate in
    requestAnimationFrame(() => {
        t.style.transform = 'translateY(0)';
        t.style.opacity = '1';
    });

    // Auto-dismiss after 3.5s (ui-ux-pro-max: toast-dismiss 3-5s)
    setTimeout(() => {
        t.style.transform = 'translateY(-10px)';
        t.style.opacity = '0';
        setTimeout(() => t.remove(), 300);
    }, 3500);
}
