// ─── INVENTORY ───────────────────────────────────────────────────────────────
const inventory = [
  // DIVINO CIELO
  { id:1, name:"Saco 'Cielo' Silk-Line", price:285000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800",
    desc:"Saco de seda fría, corte estructurado, forro de lujo." },
  { id:2, name:"Vestido Gala Nightfall", price:320000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
    desc:"Vestido de noche, caída perfecta, exclusivo." },
  { id:3, name:"MacBook Pro M3 Elite", price:1850000, store:"divino", type:"tech",
    img:"https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg",
    desc:"Chip M3, 18 GB RAM, pantalla Liquid Retina XDR." },
  { id:4, name:"Camisa Lino 'Nube'", price:95000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800",
    desc:"Lino premium, bordado artesanal." },
  { id:5, name:"Bolso Cuero Artesanal", price:210000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
    desc:"Cuero genuino, costura a mano, edición limitada." },

  // FAMILYCELL
  { id:6, name:"NVIDIA RTX 4090 Lab", price:1100000, store:"family", type:"tech",
    img:"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg",
    desc:"24 GB GDDR6X, máxima potencia gráfica." },
  { id:7, name:"Teclado Custom 'Cell'", price:145000, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800",
    desc:"Switches mecánicos Cherry MX, aluminio CNC." },
  { id:8, name:"iPhone 15 Pro Max", price:980000, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800",
    desc:"Titanio, cámara 48MP, chip A17 Pro." },
  { id:9, name:"AirPods Pro 2 Gen", price:210000, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800",
    desc:"Cancelación activa de ruido, audio espacial." },
  { id:10, name:"Monitor 4K OLED 32\"", price:620000, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
    desc:"OLED, 120Hz, HDR True Black 400." },

  // ELEGANCE
  { id:11, name:"Reloj Cronógrafo Noir", price:890000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",
    desc:"Acero inoxidable, movimiento suizo, edición limitada." },
  { id:12, name:"Collar Perlas Barrocas", price:350000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    desc:"Perlas de agua dulce, cierre de oro 18k." },
  { id:13, name:"Perfume 'Ámbar Nuit'", price:145000, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=800",
    desc:"Ámbar, oud y rosa. Fragancia exclusiva 50ml." },
  { id:14, name:"Aretes Diamante Micro", price:420000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    desc:"0.5ct VVS2, montura de platino." },
  { id:15, name:"Perfume 'Blanche Iris'", price:130000, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800",
    desc:"Iris, musgo blanco y sándalo. 30ml." },
];

// ─── CART ────────────────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('lm-cart') || '[]');

function saveCart() { localStorage.setItem('lm-cart', JSON.stringify(cart)); }

function addToCart(id) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;
  cart.push({ ...item });
  saveCart();
  refreshCartUI();
  openCart();
  showToast(`${item.name} añadido`);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  refreshCartUI();
}

function refreshCartUI() {
  const count = cart.length;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 300);
  });

  const wrap = document.getElementById('cart-items-wrap');
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">Tu bolsa está vacía</div>`;
    document.getElementById('cart-total').textContent = '0';
    return;
  }

  let total = 0;
  wrap.innerHTML = cart.map((item, idx) => {
    total += item.price;
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₡${item.price.toLocaleString()}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})" title="Eliminar">✕</button>
      </div>
    `;
  }).join('');
  document.getElementById('cart-total').textContent = total.toLocaleString();
}

function openCart() {
  document.getElementById('cart-panel').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
}
function closeCart() {
  document.getElementById('cart-panel').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
}
function toggleCart() {
  document.getElementById('cart-panel').classList.contains('open') ? closeCart() : openCart();
}

function sendWhatsApp() {
  if (cart.length === 0) return;
  const total = cart.reduce((s,i) => s+i.price, 0);
  const lines = cart.map(i => `• ${i.name} - ₡${i.price.toLocaleString()}`).join('\n');
  const msg = `¡Hola! Quiero hacer un pedido en *LUXURY MALL* 🛍️\n\n${lines}\n\n*TOTAL: ₡${total.toLocaleString()}*`;
  window.open(`https://wa.me/50688888888?text=${encodeURIComponent(msg)}`, '_blank');
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ─── CURSOR ──────────────────────────────────────────────────────────────────
function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let rx=0, ry=0;
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(()=>{});
  });

  // Smooth ring via rAF
  (function loop() {
    requestAnimationFrame(loop);
  })();
}

// ─── NAV SCROLL ──────────────────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── BUILD HOME ──────────────────────────────────────────────────────────────
function buildHome() {
  // Nothing dynamic needed, HTML has store cards
}

// ─── BUILD STORE PAGE ────────────────────────────────────────────────────────
function buildStore(storeKey) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const typeFilter = params.get('type') || 'all';

  // Set active filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === typeFilter);
  });

  const filtered = inventory.filter(item =>
    item.store === storeKey && (typeFilter === 'all' || item.type === typeFilter)
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="padding:60px; color:rgba(245,240,232,0.3); letter-spacing:3px; font-size:0.75rem;">SIN PRODUCTOS EN ESTA CATEGORÍA</p>`;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <span class="product-tag tag-${item.type}">${item.type.toUpperCase()}</span>
      <div class="product-name">${item.name}</div>
      <div class="product-price">₡${item.price.toLocaleString()}</div>
      <p style="font-size:0.8rem; color:rgba(245,240,232,0.4); margin-bottom:28px; line-height:1.6;">${item.desc}</p>
      <button class="add-btn" onclick="addToCart(${item.id})"><span>AGREGAR A LA BOLSA</span></button>
    </div>
  `).join('');
}

function filterStore(type, storeKey) {
  const url = new URL(window.location);
  url.searchParams.set('type', type);
  history.replaceState({}, '', url);
  buildStore(storeKey);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  refreshCartUI();

  const body = document.body;
  if (body.dataset.store) buildStore(body.dataset.store);
  else buildHome();
});
