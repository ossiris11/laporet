import re

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_logic = """
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
"""

# Insert right after `once: true\n    });`
js = js.replace("once: true\n    });", "once: true\n    });\n" + new_logic)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("app.js animations updated")
