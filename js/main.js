const allProducts = {};
let cart = [];

// Base de datos Elite
const techModels = [
    { name: "MACBOOK PRO M3 MAX", basePrice: 1550000, img: "https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg" },
    { name: "ROG ZEPHYRUS G16", basePrice: 1250000, img: "https://intelec.co.cr/wp-content/uploads/2024/01/ASUS-ROG-ZEPHYRUS.jpg" },
    { name: "HP VICTUS ELITE", basePrice: 585000, img: "https://intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg" },
    { name: "MSI CYBORG RTX 4050", basePrice: 695000, img: "https://intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg" }
];

// Cursor Dinámico
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Hover Effect en links para el cursor
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform += ' scale(2.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = cursor.style.transform.replace(' scale(2.5)', ''));
});

// Preloader & Store Build
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.style.transform = 'translateY(-100%)';
    }, 1200);
    buildStore();
});

function buildStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    for(let i = 1; i <= 59; i++) {
        const base = techModels[i % techModels.length];
        const id = `luxury-${i}`;
        const finalPrice = base.basePrice + (i * 1500);

        allProducts[id] = {
            name: `${base.name} [V-${i + 10}]`,
            price: finalPrice,
            img: base.img,
            specs: ["Arquitectura de 4nm", "32GB RAM Unificada", "Liquid Retina XDR", "Studio Quality Mic"]
        };

        grid.innerHTML += `
            <div class="product-card-premium" style="opacity:0; transform:translateY(40px);">
                <div class="product-img-box">
                    <img src="${base.img}" alt="${base.name}">
                </div>
                <div class="product-info">
                    <span style="font-size:0.6rem; opacity:0.4; letter-spacing:3px">ELITE SERIES / 00${i}</span>
                    <h3 style="font-family:'Syncopate'; margin:15px 0; font-size:1rem; letter-spacing:2px">${allProducts[id].name}</h3>
                    <span class="price-tag">₡${finalPrice.toLocaleString('es-CR')}</span>
                    <button class="modern-link" style="background:none; border:none; margin-top:30px; padding:0" onclick="openProductDetail('${id}')">
                        ADQUIRIR PIEZA <span class="arrow">→</span>
                    </button>
                </div>
            </div>
        `;
    }

    // Animación de aparición secuencial
    setTimeout(() => {
        document.querySelectorAll('.product-card-premium').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, index * 40);
        });
    }, 500);
}

function openProductDetail(id) {
    const p = allProducts[id];
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2 style="font-family:Syncopate; color:var(--accent); font-size:2rem; margin-bottom:20px">${p.name}</h2>
        <p style="font-size:0.7rem; letter-spacing:4px; margin-bottom:40px; opacity:0.5">ESPECIFICACIONES TÉCNICAS</p>
        <div style="text-align:left; margin-bottom:50px">
            ${p.specs.map(s => `<p style="padding:15px 0; border-bottom:1px solid #111; font-size:0.85rem; font-weight:200">/ ${s}</p>`).join('')}
        </div>
        <button class="checkout-btn" onclick="addToCart('${p.name}', ${p.price}); closeSpecs();">AÑADIR A LA BOLSA</button>
    `;
    document.getElementById('specs-modal').style.display = 'flex';
}

// Lógica de Carrito (Sin cambios pero incluida para funcionalidad total)
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
    totalElement.innerText = `₡${total.toLocaleString('es-CR')}`;
    cartItems.innerHTML = cart.map((item, idx) => `
        <div style="padding:25px 0; border-bottom:1px solid #111">
            <span style="font-size:0.6rem; opacity:0.3">REF. 0${idx+1}</span>
            <p style="font-family:Syncopate; font-size:0.8rem; margin:5px 0">${item.name}</p>
            <p style="color:var(--accent); font-weight:900">₡${item.price.toLocaleString()}</p>
        </div>
    `).join('');
}

function sendToWhatsApp() {
    const text = `LUXURY MALL - SOLICITUD DE PEDIDO:\n\n${cart.map(i => `• ${i.name}`).join('\n')}\n\nTOTAL: ${document.getElementById('cart-total').innerText}`;
    window.open(`https://wa.me/506XXXXXXXX?text=${encodeURIComponent(text)}`);
}