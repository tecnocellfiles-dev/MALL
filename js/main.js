const cart = [];

// Base de datos mixta (Humana y variada)
const inventory = [
    { name: "Saco 'Cielo' Silk-Line", price: 245000, cat: "boutique", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000" },
    { name: "MacBook Pro M3 Divino Edition", price: 1850000, cat: "tech", img: "https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg" },
    { name: "Vestido Gala Nightfall", price: 320000, cat: "boutique", img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000" },
    { name: "RTX 4090 Liquid Core", price: 980000, cat: "tech", img: "https://m.media-amazon.com/images/I/71Y7p9+tX6L._AC_SL1500_.jpg" },
    { name: "Reloj 'Cell' Minimalist", price: 125000, cat: "boutique", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000" }
];

// REPARACIÓN CURSOR FLUIDO
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    dot.style.opacity = "1";
    outline.style.opacity = "1";
    
    dot.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
    // El outline tiene un pequeño delay para efecto de fluidez
    outline.animate({
        transform: `translate(${x - 15}px, ${y - 15}px)`
    }, { duration: 500, fill: "forwards" });
});

// BUILD STORE
window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    if(grid) {
        inventory.forEach((item, i) => {
            grid.innerHTML += `
                <div class="product-card-premium" style="animation: fadeInUp 0.8s ease ${i*0.1}s forwards; opacity:0">
                    <div class="product-img-box" style="height:250px; overflow:hidden; margin-bottom:20px; border-radius:10px">
                        <img src="${item.img}" style="width:100%; height:100%; object-fit:cover">
                    </div>
                    <span style="font-size:0.6rem; opacity:0.5; letter-spacing:2px">${item.cat.toUpperCase()}</span>
                    <h3 style="font-family:Syncopate; font-size:0.9rem; margin:10px 0">${item.name}</h3>
                    <p class="price-tag">₡${item.price.toLocaleString()}</p>
                    <button class="btn-buy" onclick="addToCart('${item.name}', ${item.price})">AÑADIR A LA BOLSA</button>
                </div>
            `;
        });
    }
    
    // Quitar Loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = "0";
        setTimeout(() => document.getElementById('loader').style.display = "none", 1000);
    }, 1000);
});

function addToCart(name, price) {
    cart.push({name, price});
    const count = document.getElementById('cart-count');
    if(count) count.innerText = cart.length;
    updateCartUI();
    document.getElementById('side-cart').classList.add('active');
}

function updateCartUI() {
    const itemsCont = document.getElementById('cart-items');
    const totalCont = document.getElementById('cart-total');
    let total = 0;
    
    itemsCont.innerHTML = cart.map(item => {
        total += item.price;
        return `<div style="margin-bottom:15px; border-bottom:1px solid #111; padding-bottom:10px">
            <p style="font-size:0.8rem">${item.name}</p>
            <p style="color:var(--accent)">₡${item.price.toLocaleString()}</p>
        </div>`;
    }).join('');
    
    totalCont.innerText = total.toLocaleString();
}

function toggleCart() {
    document.getElementById('side-cart').classList.toggle('active');
}

function sendToWhatsApp() {
    const msg = `Hola Divino Cielo, deseo ordenar:\n${cart.map(i => `- ${i.name}`).join('\n')}\nTotal: ₡${document.getElementById('cart-total').innerText}`;
    window.open(`https://wa.me/506XXXXXXXX?text=${encodeURIComponent(msg)}`);
}