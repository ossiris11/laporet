import re
import json
from bs4 import BeautifulSoup

with open('laparet_cat.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

collections = []
seen = set()

# Find all links that contain an image matching the pattern
for a in soup.find_all('a', href=True):
    img = a.find('img')
    if img:
        src = img.get('data-src') or img.get('src')
        if src and '/static/catalog/product/' in src:
            title = img.get('alt') or img.get('title') or a.text.strip()
            href = a['href']
            
            if href not in seen and title:
                seen.add(href)
                collections.append({
                    'title': title,
                    'url': 'https://laparet.ru' + href if href.startswith('/') else href,
                    'image': 'https://laparet.ru' + src if src.startswith('/') else src
                })

print(f"Found {len(collections)} valid collections from laparet_cat.html")

if collections:
    with open('catalog.json', 'w', encoding='utf-8') as f:
        json.dump(collections, f, ensure_ascii=False, indent=2)
    print("catalog.json saved successfully!")
