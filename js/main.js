let cart = [];
let total = 0;
const allProducts = {};

// Imágenes reales de respaldo por si fallan las de Intelec
const backupImg = 'https://images.unsplash.com/photo-1517336712468-07a5f2297838?q=80&w=400&auto=format&fit=crop';

const baseModels = [
    { brand: 'HP EliteBook G9', price: 235000, img: 'https://intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg', cpu: 'i3-N305' },
    { brand: 'ASUS Vivobook 15', price: 385000, img: 'https://intelec.co.cr/wp-content/uploads/2023/10/ASUS-X1404VA.jpg', cpu: 'i7-1355U' },
    { brand: 'MSI Cyborg Gamer', price: 795000, img: 'https://intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg', cpu: 'RTX 4060' },
    { brand: 'Dell Inspiron 3535', price: 295000, img: 'https://intelec.co.cr/wp-content/uploads/2023/05/DELL-INSPIRON-3535.jpg', cpu: 'Ryzen 5' }
];

function initStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    grid.innerHTML = "";

    for (let i = 1; i <= 59; i++) {
        const base = baseModels[i % baseModels.length];
        const id = `lap-${i}`;
        const finalPrice = base.price + (i * 1150);
        
        allProducts[id] = {
            title: `${base.brand} Ver. ${i + 200}`,
            img: base.img,
            price: finalPrice,
            specs: [['RAM', i % 2 === 0 ? '16GB' : '8GB'], ['SSD', '512GB NVMe'], ['CPU', base.cpu], ['Garantía', '12 Meses']]
        };

        grid.innerHTML += `
            <div class="product-card-premium">
                <div class="product-img-box" onclick="openSpecs('${id}')">
                    <img src="${base.img}" onerror="this.src='${backupImg}'">
                </div>
                <h3>${allProducts[id].title}</h3>
                <span class="price">₡${finalPrice.toLocaleString('es-CR')}</span>
                <button class="btn-add" onclick="openSpecs('${id}')">VER DETALLES</button>
            </div>
        `;
    }
}

function openSpecs(id) {
    const item = allProducts[id];
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${item.img}" style="width:130px; margin-bottom:15px" onerror="this.src='${backupImg}'">
        <h2 style="color:var(--accent); font-family:Syncopate; font-size:1.1rem">${item.title}</h2>
        <ul class="specs-list">
            ${item.specs.map(s => `<li>${s[0]}: <span>${s[1]}</span></li>`).join('')}
        </ul>
        <button class="btn-add" onclick="addToCart('${item.title}', ${item.price}); closeSpecs();">AÑADIR A BOLSA</button>
    `;
    document.getElementById('specs-modal').style.display = 'flex';
}

function closeSpecs() { document.getElementById('specs-modal').style.display = 'none'; }
function toggleCart() { document.getElementById('side-cart').classList.toggle('active'); }

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
    if(!document.getElementById('side-cart').classList.contains('active')) toggleCart();
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total.toLocaleString('es-CR');
    document.getElementById('cart-items').innerHTML = cart.map((i, index) => `
        <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #111; font-size:0.8rem">
            <span>${i.name}</span><span style="color:var(--accent)">₡${i.price.toLocaleString('es-CR')}</span>
        </div>
    `).join('');
}

function sendOrder() {
    if(cart.length === 0) return alert("Tu bolsa está vacía");
    let msg = "*NUEVO PEDIDO - LUXURY MALL*%0A%0A";
    cart.forEach(i => msg += `- ${i.name} (₡${i.price.toLocaleString('es-CR')})%0A`);
    msg += `%0A*TOTAL FINAL: ₡${total.toLocaleString('es-CR')}*`;
    window.open(`https://wa.me/506XXXXXXXX?text=${msg}`, '_blank'); // Reemplaza X con tu número
}

window.onload = initStore;