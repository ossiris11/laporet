import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update body background
body_pattern = re.compile(r'body \{([\s\S]*?)\}', re.MULTILINE)
def body_repl(match):
    inner = match.group(1)
    # Remove background-color: transparent
    inner = re.sub(r'background-color:\s*transparent;', '', inner)
    # Add new premium background
    premium_bg = """
    background: linear-gradient(135deg, #0a0a0c, #16161a, #0a0a0c);
    background-size: 300% 300%;
    animation: premiumBgShift 20s ease infinite;"""
    return "body {" + premium_bg + inner + "}"

css = body_pattern.sub(body_repl, css)

# Add the keyframes if not exists
if 'premiumBgShift' not in css:
    css += """
@keyframes premiumBgShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
"""

# 2. Update sections to be translucent glassmorphism instead of solid var(--bg-dark)
sections_pattern = re.compile(r'\.features-section, \.catalog-section, \.calculator-section, \.design-3d-section, \.showroom-section, footer \{[\s\S]*?\}', re.MULTILINE)
new_sections = """
.features-section, .catalog-section, .calculator-section, .design-3d-section, .showroom-section, footer {
    position: relative;
    z-index: 10;
    background: rgba(12, 12, 14, 0.7);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-top: 1px solid rgba(255, 255, 255, 0.03);
}
"""
css = sections_pattern.sub(new_sections, css)

# 3. Make sure .video-container doesn't have a solid background that flashes white
# In styles.css, it had background-color: var(--bg-dark); Let's remove it or make it transparent
video_bg_pattern = re.compile(r'\.video-container \{([\s\S]*?)\}')
def video_bg_repl(match):
    inner = match.group(1)
    inner = re.sub(r'background-color:[^;]+;', 'background-color: transparent;', inner)
    return ".video-container {" + inner + "}"
css = video_bg_pattern.sub(video_bg_repl, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Premium BG updated")
