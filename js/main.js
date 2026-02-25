const allProducts = {};
let cart = [];

// Base de datos de modelos reales
const techModels = [
    { name: "MacBook Pro M3 Max", basePrice: 1550000, img: "https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg" },
    { name: "ASUS ROG Zephyrus G16", basePrice: 1250000, img: "https://intelec.co.cr/wp-content/uploads/2024/01/ASUS-ROG-ZEPHYRUS.jpg" },
    { name: "HP Victus Gaming Blue", basePrice: 585000, img: "https://intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg" },
    { name: "MSI Cyborg RTX 4050", basePrice: 695000, img: "https://intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg" }
];

// Cursor Personalizado
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.style.transform = 'translateY(-100%)';
    }, 1500);
    buildStore();
});

function buildStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    for(let i = 1; i <= 59; i++) {
        const base = techModels[i % techModels.length];
        const id = `item-${i}`;
        const price = base.basePrice + (i * 1200);

        allProducts[id] = {
            name: `${base.name} P-Series`,
            price: price,
            img: base.img,
            specs: ["32GB RAM DDR5", "1TB SSD NVMe", "Garantía Global", "Procesador Optimizado"]
        };

        grid.innerHTML += `
            <div class="product-card-premium" style="opacity:0; transform:translateY(30px); transition: 1s forwards; transition-delay: ${i * 0.05}s">
                <div class="product-img-box">
                    <img src="${base.img}" alt="${base.name}">
                </div>
                <div class="product-info">
                    <p style="font-size:0.6rem; letter-spacing:2px; opacity:0.5">FAMILYCELL STOCK #${100+i}</p>
                    <h3 style="margin:10px 0; font-family:'Syncopate'; font-size:0.9rem">${allProducts[id].name}</h3>
                    <span class="price-tag">₡${price.toLocaleString()}</span>
                    <button class="modern-link" style="background:none; border:none; margin-top:20px; cursor:pointer" onclick="openProductDetail('${id}')">
                        CONFIGURAR <span class="arrow">→</span>
                    </button>
                </div>
            </div>
        `;
    }

    // Activar animación de entrada
    setTimeout(() => {
        document.querySelectorAll('.product-card-premium').forEach(card => card.style.opacity = "1");
        document.querySelectorAll('.product-card-premium').forEach(card => card.style.transform = "translateY(0)");
    }, 100);
}

function openProductDetail(id) {
    const p = allProducts[id];
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2 style="font-family:Syncopate; color:var(--accent); font-size:1.5rem">${p.name}</h2>
        <div style="margin:30px 0">
            ${p.specs.map(s => `<p style="padding:10px 0; border-bottom:1px solid #111; font-size:0.8rem">/ ${s}</p>`).join('')}
        </div>
        <button class="checkout-btn" onclick="addToCart('${p.name}', ${p.price}); closeSpecs();">AÑADIR A LA ORDEN</button>
    `;
    document.getElementById('specs-modal').style.display = 'flex';
}

function toggleCart() { document.getElementById('side-cart').classList.toggle('active'); }
function closeSpecs() { document.getElementById('specs-modal').style.display = 'none'; }

function addToCart(name, price) {
    cart.push({name, price});
    updateCartUI();
    if(!document.getElementById('side-cart').classList.contains('active')) toggleCart();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    const countElement = document.getElementById('cart-count');
    
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    countElement.innerText = cart.length;
    totalElement.innerText = `₡${total.toLocaleString()}`;
    
    cartItems.innerHTML = cart.map((item, idx) => `
        <div style="padding:20px 0; border-bottom:1px solid #111">
            <p style="font-size:0.7rem; opacity:0.5">ITEM ${idx+1}</p>
            <p style="font-family:Syncopate; font-size:0.8rem">${item.name}</p>
            <p style="color:var(--accent)">₡${item.price.toLocaleString()}</p>
        </div>
    `).join('');
}

function sendToWhatsApp() {
    const text = `Hola LuxuryMall, deseo adquirir: ${cart.map(i => i.name).join(', ')}. Total: ${document.getElementById('cart-total').innerText}`;
    window.open(`https://wa.me/506XXXXXXXX?text=${encodeURIComponent(text)}`);
}