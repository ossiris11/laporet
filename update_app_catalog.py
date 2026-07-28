import json
import re
import random

with open('catalog.json', 'r', encoding='utf-8') as f:
    collections = json.load(f)

products_js = "const PRODUCTS = [\n"
textures = ['mramor', 'onyx', 'derevo', 'beton']
surfaces = [('polirovannaya', 'Полированная'), ('matovaya', 'Матовая')]
categories = [('keramogranit', 'Керамогранит'), ('plitka', 'Настенная плитка')]

for i, coll in enumerate(collections):
    cat, cat_name = random.choice(categories)
    tex = random.choice(textures)
    surf, surf_name = random.choice(surfaces)
    price = random.randint(18, 45) * 100 + 90
    size = '60×120 см' if cat == 'keramogranit' else '30×90 см'
    box = 1.44 if cat == 'keramogranit' else 1.35
    
    badge_str = "'Новинка'" if i < 3 else "'Хит Продаж'" if i % 5 == 0 else "null"
    
    products_js += f"""    {{
        id: 'laparet-{i}', name: '{coll["title"]}',
        category: '{cat}', categoryName: '{cat_name}',
        texture: '{tex}', surface: '{surf}', surfaceName: '{surf_name}',
        size: '{size}', boxArea: {box}, pricePerM2: {price},
        image: '{coll["image"]}',
        badge: {badge_str},
        url: '{coll["url"]}'
    }},
"""
products_js += "];"

with open('app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Replace existing PRODUCTS array
# It starts with "const PRODUCTS = [" and ends with "];" before "let state ="
pattern = re.compile(r'const PRODUCTS = \[.*?\];', re.DOTALL)
js_content = pattern.sub(products_js, js_content, count=1)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("app.js updated with new catalog data")
