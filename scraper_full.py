import requests
import xml.etree.ElementTree as ET
from bs4 import BeautifulSoup
import json
import os
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse

os.makedirs('assets/catalog', exist_ok=True)

print("Fetching sitemap...")
url = 'https://laparet.ru/sitemap-iblock-21.xml'
resp = requests.get(url)
root = ET.fromstring(resp.content)
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [u.find('sm:loc', ns).text for u in root.findall('sm:url', ns) if '/collection/' in u.find('sm:loc', ns).text]
urls = list(set(urls))
print(f"Total collections to scrape: {len(urls)}")

headers = {'User-Agent': 'Mozilla/5.0'}

def parse_collection(u):
    try:
        r = requests.get(u, headers=headers, timeout=15)
        if r.status_code != 200: return None
        
        soup = BeautifulSoup(r.text, 'html.parser')
        
        title_el = soup.find('h1')
        title = title_el.text.strip() if title_el else u.strip('/').split('/')[-1]
        
        images = []
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src')
            if src and ('/upload/' in src or '/product/' in src):
                if src.startswith('/'): src = 'https://laparet.ru' + src
                if src not in images: images.append(src)
                
        category = 'keramogranit'
        if 'plitka' in u: category = 'plitka'
        if 'laminat' in u: category = 'laminat'
        
        texture = 'mramor'
        t_text = r.text.lower()
        if 'derevo' in t_text: texture = 'derevo'
        if 'beton' in t_text: texture = 'beton'
        if 'onyx' in t_text: texture = 'onyx'
        
        local_images = []
        slug = u.strip('/').split('/')[-1]
        col_dir = f"assets/catalog/{slug}"
        os.makedirs(col_dir, exist_ok=True)
        
        for i, img_url in enumerate(images[:3]):
            ext = os.path.splitext(urlparse(img_url).path)[1]
            if not ext: ext = '.jpg'
            local_path = f"{col_dir}/{i}{ext}"
            
            if not os.path.exists(local_path):
                ir = requests.get(img_url, headers=headers, timeout=10)
                if ir.status_code == 200:
                    with open(local_path, 'wb') as f:
                        f.write(ir.content)
            local_images.append(f"assets/catalog/{slug}/{i}{ext}")
            
        return {
            'id': slug,
            'name': title,
            'url': u,
            'category': category,
            'texture': texture,
            'images': local_images,
            'pricePerM2': 2990
        }
    except Exception as e:
        print(f"Error on {u}: {e}")
        return None

results = []
with ThreadPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(parse_collection, u): u for u in urls}
    
    for count, future in enumerate(as_completed(futures), 1):
        res = future.result()
        if res:
            results.append(res)
        if count % 50 == 0:
            print(f"Processed {count}/{len(futures)} collections...")

with open('catalog_full.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Finished scraping {len(results)} collections!")
