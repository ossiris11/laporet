import re

with open('styles.css', 'r') as f:
    content = f.read()

# Replace transition: all with transition: transform, opacity, background-color, border-color, color
# Actually, just replace `transition: all ` with `transition: transform ` and add others if needed.
# Better: let's just do `transition: transform var(--duration-normal) var(--ease-out-custom), opacity var(--duration-normal) var(--ease-out-custom), background-color var(--duration-normal) var(--ease-out-custom)`
content = content.replace('transition: all', 'transition: transform')
content = content.replace('var(--ease-out)', 'var(--ease-out-custom)')

# Add :active { transform: scale(0.97); } to .btn and .nav-link
btn_replacement = """.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 1.8rem;
    border-radius: var(--radius-pill);
    font-weight: 500;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: none;
    transition: transform 160ms var(--ease-out-custom), background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
    will-change: transform;
}
.btn:active {
    transform: scale(0.97);
}"""
content = re.sub(r'\.btn\s*\{.*?(?=\n\n|\n\.btn-primary)', btn_replacement, content, flags=re.DOTALL)

with open('styles.css', 'w') as f:
    f.write(content)
