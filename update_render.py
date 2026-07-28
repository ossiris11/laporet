import re

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

old_code = """    filtered.forEach((item, index) => {
        const boxPrice = Math.round(item.pricePerM2 * item.boxArea);
        const card = document.createElement('div');
        card.className = 'product-card glassmorphism-panel';
        card.setAttribute('data-reveal', '');
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy">
                ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-size">${item.categoryName} · ${item.size} · ${item.surfaceName}</p>
                <div class="product-price-row">
                    <div>
                        <div class="price-m2">${item.pricePerM2.toLocaleString('ru-RU')} ₽ / м²</div>
                        <div class="price-box">${boxPrice.toLocaleString('ru-RU')} ₽ / уп.</div>
                    </div>
                    <button class="btn btn-primary add-to-cart-btn" onclick="addToCart('${item.id}')">
                        <i class="ph-bold ph-shopping-cart"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });"""

new_code = """    filtered.forEach((item, index) => {
        const boxPrice = Math.round(item.pricePerM2 * item.boxArea);
        const card = document.createElement('a');
        card.href = item.url || '#';
        card.target = '_blank';
        card.className = 'product-card glassmorphism-panel';
        card.setAttribute('data-reveal', '');
        card.style.display = 'block';
        card.style.textDecoration = 'none';
        card.style.color = 'inherit';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy">
                ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ''}
            </div>
            <div class="product-details">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-size">${item.categoryName} · ${item.size} · ${item.surfaceName}</p>
                <div class="product-price-row">
                    <div>
                        <div class="price-m2">${item.pricePerM2.toLocaleString('ru-RU')} ₽ / м²</div>
                        <div class="price-box">${boxPrice.toLocaleString('ru-RU')} ₽ / уп.</div>
                    </div>
                    <button class="btn btn-primary add-to-cart-btn" onclick="event.preventDefault(); addToCart('${item.id}')">
                        <i class="ph-bold ph-shopping-cart"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });"""

js = js.replace(old_code, new_code)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Render updated")
