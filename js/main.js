const inventory = [
    // PRODUCTOS DIVINO CIELO
    { name: "Saco 'Cielo' Silk-Line", price: 285000, cat: "divino", type: "moda", img: "https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800" },
    { name: "Vestido Gala Nightfall", price: 320000, cat: "divino", type: "moda", img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800" },
    { name: "MacBook Pro M3 Elite", price: 1850000, cat: "divino", type: "tech", img: "https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg" },
    
    // PRODUCTOS FAMILYCELL
    { name: "NVIDIA RTX 4090 Lab Edition", price: 1100000, cat: "family", type: "tech", img: "https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg" },
    { name: "Teclado Custom 'Cell'", price: 145000, cat: "family", type: "tech", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800" }
];

let cart = [];

// Reparación de Cursor: Ahora sigue el mouse con suavidad sin bloquear elementos
document.addEventListener('mousemove', (e) => {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if(dot && outline) {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        outline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: "forwards" });
    }
});

function buildStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter'); // Detecta 'divino' o 'family'

    grid.innerHTML = "";
    inventory.forEach(item => {
        if(!filter || item.cat === filter) {
            grid.innerHTML += `
                <div class="product-card-premium">
                    <img src="${item.img}" style="width:100%; height:200px; object-fit:contain; margin-bottom:20px">
                    <span style="color:var(--accent); font-size:0.7rem; letter-spacing:2px">${item.type.toUpperCase()}</span>
                    <h3 style="font-family:Syncopate; margin:10px 0; font-size:0.9rem">${item.name}</h3>
                    <p style="font-size:1.5rem; font-weight:900; color:var(--accent)">₡${item.price.toLocaleString()}</p>
                    <button class="btn-premium" style="width:100%; margin-top:20px" onclick="addToCart('${item.name}', ${item.price})">RESERVAR</button>
                </div>
            `;
        }
    });
}

function addToCart(name, price) {
    cart.push({name, price});
    updateUI();
    document.getElementById('side-cart').classList.add('active');
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    let total = 0;
    document.getElementById('cart-items').innerHTML = cart.map(i => {
        total += i.price;
        return `<div style="padding:15px 0; border-bottom:1px solid #222"><p>${i.name}</p><p style="color:var(--accent)">₡${i.price.toLocaleString()}</p></div>`;
    }).join('');
    document.getElementById('cart-total').innerText = total.toLocaleString();
}

function toggleCart() { document.getElementById('side-cart').classList.toggle('active'); }

function sendToWhatsApp() {
    const msg = `PEDIDO LUXURY MALL:\n${cart.map(i => `- ${i.name}`).join('\n')}\nTOTAL: ₡${document.getElementById('cart-total').innerText}`;
    window.open(`https://wa.me/506XXXXXXXX?text=${encodeURIComponent(msg)}`);
}

window.onload = buildStore;