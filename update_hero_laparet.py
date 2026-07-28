import re

with open('index.html', 'r') as f:
    html = f.read()

# Replace the hero section content
replacement_html = """    <!-- ═══════════════════════════════════════════════════════════════
         LAPARET HERO SECTION
         ═══════════════════════════════════════════════════════════════ -->
    <section class="hero-section portfolio-hero" id="hero">
        <div class="video-container" id="globalVideoContainer">
            <video id="heroVideo" autoplay muted playsinline>
                <source src="пролет_должен_начинаться_с_ван.mp4" type="video/mp4">
            </video>
            <div class="video-overlay portfolio-overlay"></div>
        </div>

        <!-- Navbar -->
        <header class="navbar portfolio-navbar">
            <a href="#" class="logo">
                <i class="ph-bold ph-cube-transparent logo-icon"></i>
                <div class="logo-brand">
                    <span class="logo-title">LAPARET</span>
                </div>
            </a>

            <nav class="nav-links">
                <a href="#collections" class="nav-link active">Коллекции</a>
                <a href="#catalog" class="nav-link">Каталог</a>
                <a href="#calculator" class="nav-link">Калькулятор</a>
                <a href="#design-3d" class="nav-link">3D Дизайн</a>
                <a href="#showroom" class="nav-link">Контакты</a>
            </nav>

            <div class="nav-actions">
                <button class="btn btn-outline nav-cta-btn">
                    <span>КОНСУЛЬТАЦИЯ</span>
                </button>
                <button class="mobile-menu-toggle" aria-label="Меню">
                    <i class="ph-bold ph-list"></i>
                </button>
            </div>
        </header>

        <!-- Hero Center Content -->
        <div class="hero-content portfolio-content">
            <div class="text-wrapper">
                <div class="greeting animate-fade-up" style="animation-delay: 0.1s;">
                    ОФИЦИАЛЬНЫЙ ДИЛЕР
                </div>

                <h1 class="main-title animate-fade-up" style="animation-delay: 0.2s;">
                    LAPARET<br>
                    Великий Новгород
                </h1>

                <h2 class="sub-title portfolio-subtitle accent-text-gradient animate-fade-up" style="animation-delay: 0.3s;">
                    Премиальный керамогранит и керамическая плитка
                </h2>

                <div class="cta-group portfolio-cta-group animate-fade-up" style="animation-delay: 0.5s;">
                    <a href="#catalog" class="btn btn-primary portfolio-btn">
                        <span>СМОТРЕТЬ КАТАЛОГ</span>
                    </a>
                    <a href="#showroom" class="btn btn-outline portfolio-btn-outline">
                        <span>ПОСЕТИТЬ ШОУРУМ</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Hero Footer -->
        <div class="hero-footer portfolio-footer">
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>

            <div class="glassmorphism-panel availability-card animate-fade-up" style="animation-delay: 0.6s;">
                <div class="availability-header">
                    <div class="status-indicator">
                        <div class="pulse-dot"></div>
                    </div>
                    <span>Шоурум открыт</span>
                </div>
                <p>Ждем вас по адресу: ул. Державина, 15.<br>Ежедневно с 10:00 до 20:00.</p>
            </div>
        </div>
    </section>"""

# Replace from <div class="video-container" to </section>
pattern = re.compile(r'\s*<div class="video-container".*?</section>', re.DOTALL)
html = pattern.sub('\n' + replacement_html, html, count=1)

with open('index.html', 'w') as f:
    f.write(html)

print("HTML updated")
