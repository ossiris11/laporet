import re

with open('index.html', 'r') as f:
    html = f.read()

replacement = """    <div class="video-container" id="globalVideoContainer">
        <video id="heroVideo" autoplay muted playsinline>
            <source src="пролет_должен_начинаться_с_ван.mp4" type="video/mp4">
        </video>
        <div class="video-overlay portfolio-overlay"></div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════
         PORTFOLIO HERO SECTION
         ═══════════════════════════════════════════════════════════════ -->
    <section class="hero-section portfolio-hero" id="hero">
        <!-- Navbar -->
        <header class="navbar portfolio-navbar">
            <a href="#" class="logo">
                <i class="ph-bold ph-cube-transparent logo-icon"></i>
                <div class="logo-brand">
                    <span class="logo-title">Creative</span>
                </div>
            </a>

            <nav class="nav-links">
                <a href="#work" class="nav-link active">Work</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="nav-actions">
                <button class="btn btn-outline nav-cta-btn">
                    <span>LET'S WORK TOGETHER</span>
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
                    HELLO, I'M
                </div>

                <h1 class="main-title animate-fade-up" style="animation-delay: 0.2s;">
                    Creative Designer<br>
                    & Developer
                </h1>

                <h2 class="sub-title portfolio-subtitle accent-text-gradient animate-fade-up" style="animation-delay: 0.3s;">
                    I build immersive digital experiences
                </h2>

                <div class="cta-group portfolio-cta-group animate-fade-up" style="animation-delay: 0.5s;">
                    <a href="#work" class="btn btn-primary portfolio-btn">
                        <span>VIEW MY WORK</span>
                    </a>
                    <a href="#cv" class="btn btn-outline portfolio-btn-outline">
                        <span>DOWNLOAD CV</span>
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
                    <span>Available for work</span>
                </div>
            </div>
        </div>
    </section>"""

# We need to replace from <div class="video-container" id="globalVideoContainer"> to </section> before the features section
# We will use regex
pattern = re.compile(r'\s*<div class="video-container" id="globalVideoContainer">.*?</section>', re.DOTALL)
html = pattern.sub('\n' + replacement, html, count=1)

with open('index.html', 'w') as f:
    f.write(html)

print("HTML updated")
