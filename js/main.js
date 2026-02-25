const allProducts = {};
let cart = [];

// Base de datos de modelos reales para variedad
const techModels = [
    { name: "MacBook Pro M3 Max", basePrice: 1550000, img: "https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg" },
    { name: "ASUS ROG Zephyrus G16", basePrice: 1250000, img: "https://intelec.co.cr/wp-content/uploads/2024/01/ASUS-ROG-ZEPHYRUS.jpg" },
    { name: "HP Victus Gaming Blue", basePrice: 585000, img: "https://intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg" },
    { name: "MSI Cyborg RTX 4050", basePrice: 695000, img: "https://intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg" }
];

function buildStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    for(let i = 1; i <= 59; i++) {
        const base = techModels[i % techModels.length];
        const id = `luxury-pc-${i}`;
        const finalPrice = base.basePrice + (i * 1450); // Variación de precio pro

        allProducts[id] = {
            name: `${base.name} Elite Ver. ${i + 50}`,
            price: finalPrice,
            img: base.img,
            specs: ["32GB RAM DDR5", "1TB SSD NVMe", "Garantía Global 2 Años", "Pantalla 4K OLED"]
        };

        grid.innerHTML += `
            <div class="product-card-premium">
                <div class="product-img-box">
                    <img src="${base.img}" onerror="this.src='https://via.placeholder.com/300x200/111/00f2ff?text=Tech+Luxury'">
                </div>
                <span class="category" style="color:var(--accent); font-size:0.7rem; text-transform:uppercase; letter-spacing:2px">Categoría Profesional</span>
                <h3 style="font-family:'Syncopate'; font-size:1rem; margin:10px 0">${allProducts[id].name}</h3>
                <span class="price-tag">₡${finalPrice.toLocaleString('es-CR')}</span>
                <button class="btn-premium" style="width:100%; cursor:pointer" onclick="openProductDetail('${id}')">CONFIGURAR Y COMPRAR</button>
            </div>
        `;
    }
}

function openProductDetail(id) {
    const p = allProducts[id];
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src="${p.img}" style="width:200px; margin-bottom:20px">
        <h2 style="font-family:Syncopate; color:var(--accent)">${p.name}</h2>
        <div style="margin:25px 0; text-align:left">
            ${p.specs.map(s => `<p style="border-bottom:1px solid #222; padding:8px 0">✓ ${s}</p>`).join('')}
        </div>
        <button class="btn-premium" onclick="addToCart('${p.name}', ${p.price}); closeSpecs();">AÑADIR A LA BOLSA - ₡${p.price.toLocaleString()}</button>
    `;
    document.getElementById('specs-modal').style.display = 'flex';
}

// Funciones de Carrito
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
    totalElement.innerText = total.toLocaleString('es-CR');
    
    cartItems.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:15px; background:rgba(255,255,255,0.05); padding:15px; border-radius:10px">
            <span style="font-size:0.8rem">${item.name}</span>
            <span style="color:var(--accent); font-weight:bold">₡${item.price.toLocaleString()}</span>
        </div>
    `).join('');
}

window.onload = buildStore;
