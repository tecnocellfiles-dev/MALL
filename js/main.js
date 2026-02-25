const inventory = [
    // ROPA DIVINO CIELO
    { id: 1, name: "Luxury Blazer 'Cielo'", price: 285000, img: "https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800", cat: "BOUTIQUE" },
    // TECH DIVINO CIELO
    { id: 2, name: "MacBook Pro M3 Max", price: 1950000, img: "https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg", cat: "SYSTEMS" },
    // LABS FAMILYCELL
    { id: 3, name: "NVIDIA RTX 4090 FE", price: 1200000, img: "https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg", cat: "COMPONENTS" },
    { id: 4, name: "Reloj Minimal 'Cell'", price: 85000, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800", cat: "ACCESSORIES" }
];

let cart = [];

// Cursor Reparado
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    // El outline sigue al punto con suavidad
    setTimeout(() => {
        outline.style.left = e.clientX + 'px';
        outline.style.top = e.clientY + 'px';
    }, 50);
});

// Construir Tienda
function buildStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    inventory.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" class="product-img">
                <span style="font-size:0.6rem; letter-spacing:3px; color:var(--accent)">${p.cat}</span>
                <h3 style="font-family:Syncopate; margin:15px 0; font-size:0.9rem">${p.name}</h3>
                <p style="font-size:1.5rem; font-weight:200">₡${p.price.toLocaleString()}</p>
                <button onclick="addToCart('${p.name}', ${p.price})" style="margin-top:30px; background:var(--accent); color:#000; border:none; padding:15px; font-family:Syncopate; font-size:0.6rem; font-weight:700; cursor:pointer">
                    RESERVAR PIEZA
                </button>
            </div>
        `;
    });
}

function addToCart(name, price) {
    cart.push({name, price});
    updateUI();
    document.getElementById('side-cart').classList.add('active');
}

function updateUI() {
    const items = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');
    let sum = 0;
    
    items.innerHTML = cart.map(i => {
        sum += i.price;
        return `<div style="padding:15px 0; border-bottom:1px solid #222">
            <p style="font-size:0.8rem">${i.name}</p>
            <p style="color:var(--accent)">₡${i.price.toLocaleString()}</p>
        </div>`;
    }).join('');
    
    total.innerText = sum.toLocaleString();
}

function toggleCart() {
    document.getElementById('side-cart').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', buildStore);