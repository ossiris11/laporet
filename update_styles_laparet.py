import re

with open('styles.css', 'r') as f:
    css = f.read()

# Replace variables
replacements = {
    r'--bg-dark: #030305;': '--bg-dark: #121214;',
    r'--bg-surface: #0a0a10;': '--bg-surface: #1C1C1E;',
    r'--bg-elevated: #111118;': '--bg-elevated: #2C2C2E;',
    r'--accent: #8A63F8;': '--accent: #C6A67B;',
    r'--accent-deep: #5C43FA;': '--accent-deep: #9A7B54;',
    r'--accent-hover: #9C7AFA;': '--accent-hover: #D4B68F;',
    r'--accent-blue: #5A8CFF;': '--accent-blue: #E8D3B3;',
    r'--success: #00FF88;': '--success: #A38B6B;',
    r'rgba\(20, 20, 25, 0\.4\)': 'rgba(18, 18, 20, 0.65)',
    r'#8A63F8 0%, #5C43FA 100%': '#C6A67B 0%, #9A7B54 100%',
    r'#9C7AFA 0%, #6D56FB 100%': '#D4B68F 0%, #AA8960 100%',
    r'#9C7AFA 0%, #5A8CFF 100%': '#C6A67B 0%, #FFFFFF 100%',
    r'rgba\(5,\s*5,\s*8,\s*0\.95\)\s*0%,\s*rgba\(29,\s*29,\s*53,\s*0\.182\)\s*40%,\s*rgba\(5,\s*5,\s*8,\s*0\.4\)\s*100%': 'rgba(18, 18, 20, 0.9) 0%, rgba(18, 18, 20, 0.2) 50%, rgba(18, 18, 20, 0.6) 100%',
    r'rgba\(5,5,8,0\.95\) 0%, rgba\(29,29,53,0\.18\) 40%, rgba\(5,5,8,0\.4\) 100%': 'rgba(18,18,20,0.9) 0%, rgba(18,18,20,0.2) 50%, rgba(18,18,20,0.6) 100%',
}

for pat, repl in replacements.items():
    css = re.sub(pat, repl, css)

# Make sure all sections have a solid background and high z-index to cover the video
css += """
/* Assure subsequent sections cover the fixed video */
.features-section, .catalog-section, .calculator-section, .design-3d-section, .showroom-section, footer {
    position: relative;
    z-index: 10;
    background-color: var(--bg-dark);
}
"""

with open('styles.css', 'w') as f:
    f.write(css)

print("CSS updated")
