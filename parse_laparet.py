import requests
from bs4 import BeautifulSoup
import json

url = 'https://laparet.ru/collection/'
headers = {
    'User-Agent': 'Mozilla/5.0'
}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

collections = []
# Let's just find the generic catalog items
# They might be under class "catalog-item" or something
items = soup.find_all('div', class_=lambda c: c and 'item' in c.lower())

for item in items:
    a = item.find('a', href=True)
    if not a: continue
    href = a['href']
    if not href.startswith('/collection/'): continue

    img = item.find('img')
    if not img: continue
    
    img_src = img.get('src', '') or img.get('data-src', '')
    if not img_src: continue
    
    # Try to find title
    title = img.get('alt', '')
    if not title:
        title_el = item.find(['div', 'span', 'h3'], class_=lambda c: c and 'title' in c.lower() or 'name' in c.lower())
        if title_el:
            title = title_el.text.strip()
            
    if title and img_src:
        if img_src.startswith('/'):
            img_src = 'https://laparet.ru' + img_src
            
        collections.append({
            'title': title,
            'url': 'https://laparet.ru' + href,
            'image': img_src
        })

print(f"Found {len(collections)} items with general search.")

# If still 0, let's just dump the first few links to see what they look like
if len(collections) == 0:
    for a in soup.find_all('a', href=True)[:50]:
        if 'collection' in a['href']:
            print("Link:", a['href'], a.text.strip()[:30])

# Deduplicate
unique_collections = []
seen = set()
for c in collections:
    if c['url'] not in seen:
        unique_collections.append(c)
        seen.add(c['url'])

with open('catalog.json', 'w', encoding='utf-8') as f:
    json.dump(unique_collections[:30], f, ensure_ascii=False, indent=2)

print(f"Saved {len(unique_collections[:30])} collections to catalog.json")
