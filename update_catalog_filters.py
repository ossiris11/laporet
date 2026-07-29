import re

with open('catalog.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Sidebar Filters
new_filters = """
            <div class="filter-group">
                <div class="filter-title">Размер</div>
                <label class="filter-option"><input type="checkbox" class="filter-checkbox" value="60x60" data-filter="size"><span>60x60 см</span></label>
                <label class="filter-option"><input type="checkbox" class="filter-checkbox" value="120x60" data-filter="size"><span>120x60 см</span></label>
                <label class="filter-option"><input type="checkbox" class="filter-checkbox" value="80x80" data-filter="size"><span>80x80 см</span></label>
                <label class="filter-option"><input type="checkbox" class="filter-checkbox" value="20x120" data-filter="size"><span>20x120 см</span></label>
            </div>
            <div class="filter-group">
                <div class="filter-title">Поверхность</div>
                <label class="filter-option"><input type="checkbox" class="filter-checkbox" value="Матовая" data-filter="surface"><span>Матовая</span></label>
                <label class="filter-option"><input type="checkbox" class="filter-checkbox" value="Полированная" data-filter="surface"><span>Полированная</span></label>
                <label class="filter-option"><input type="checkbox" class="filter-checkbox" value="Глянцевая" data-filter="surface"><span>Глянцевая</span></label>
            </div>
"""
html = html.replace('</aside>', new_filters + '</aside>')

# 2. Update JS: Add to activeFilters
html = html.replace('texture: []', 'texture: [],\n            size: [],\n            surface: []')

# 3. Update JS: Apply filters logic
old_filter_logic = """                const catMatch = activeFilters.category.length === 0 || activeFilters.category.includes(item.category);
                const texMatch = activeFilters.texture.length === 0 || activeFilters.texture.includes(item.texture);
                return catMatch && texMatch;"""

new_filter_logic = """
                // Mock attributes for filtering
                const SURFACES = ['Матовая', 'Полированная', 'Глянцевая', 'Лаппатированная'];
                const SIZES = ['60x60', '120x60', '80x80', '20x120'];
                let hash = 0; for (let i = 0; i < item.id.length; i++) hash = item.id.charCodeAt(i) + ((hash << 5) - hash); hash = Math.abs(hash);
                item.surface = SURFACES[hash % SURFACES.length];
                item.size = SIZES[hash % SIZES.length];
                item.price = 2000 + (hash % 60) * 100;

                const catMatch = activeFilters.category.length === 0 || activeFilters.category.includes(item.category);
                const texMatch = activeFilters.texture.length === 0 || activeFilters.texture.includes(item.texture);
                const sizeMatch = activeFilters.size.length === 0 || activeFilters.size.includes(item.size);
                const surMatch = activeFilters.surface.length === 0 || activeFilters.surface.includes(item.surface);
                
                return catMatch && texMatch && sizeMatch && surMatch;"""
html = html.replace(old_filter_logic, new_filter_logic)

# 4. Update Render Card: Wrap in <a>, show price
old_card = """<div class="product-card-inner">
                        <img src="${imgUrl}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/hero_tile_bg_1784936174808.jpg'">
                        <h3>${item.name}</h3>
                        <p class="product-price">от ${item.pricePerM2} ₽/м²</p>
                        <button class="btn btn-secondary" style="width: 100%; margin-top: 15px;">В корзину</button>
                    </div>"""
new_card = """<a href="product.html?id=${item.id}" style="text-decoration: none; color: inherit;">
                    <div class="product-card-inner" style="transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                        <img src="${imgUrl}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/hero_tile_bg_1784936174808.jpg'" style="transition: transform 0.5s;">
                        <h3 style="margin-top: 15px; margin-bottom: 5px;">${item.name}</h3>
                        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">${item.size || ''} • ${item.surface || ''}</div>
                        <p class="product-price" style="font-size: 1.2rem; color: var(--accent); font-weight: bold;">от ${item.price || item.pricePerM2 || 2500} ₽/м²</p>
                    </div>
                    </a>"""
html = html.replace(old_card, new_card)

with open('catalog.html', 'w', encoding='utf-8') as f:
    f.write(html)
