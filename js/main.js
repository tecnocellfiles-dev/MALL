// ─── INVENTORY ───────────────────────────────────────────────────────────────
const inventory = [
  { id:6, name:"Victoria's Secret Amber Romance", price:10000, store:"divino", type:"moda",
    img:"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg",
    desc:"Ámbar resinoso y crema de vainilla. Un aroma cálido, denso y sofisticadamente dulce." },
  { id:16, name:"Victoria's Secret Romance", price:10000, store:"divino", type:"fragancias",
    img:"https://victoriassecretbeautycr.vtexassets.com/arquivos/ids/172845-1200-1600?v=638030941474070000&width=1200&height=1600&aspect=true",
    desc:"Pétalos de rosa. Almizcle puro. Enamorándome de ti." },
  { id:17, name:"Victoria's Secret Romantic", price:10000, store:"divino", type:"fragancias",
    img:"https://cdnx.jumpseller.com/la-perfumeria-cl/image/69524237/resize/540/540?1762793584",
    desc:"Floral – clásico, femenino y delicado." }
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
  showToast(item.name + ' añadido');
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  refreshCartUI();
}

function refreshCartUI() {
  const count = cart.length;
  document.querySelectorAll('.cart-count').forEach(function(el) {
    el.textContent = count;
    el.classList.add('bump');
    setTimeout(function() { el.classList.remove('bump'); }, 300);
  });
  const wrap = document.getElementById('cart-items-wrap');
  if (!wrap) return;
  if (cart.length === 0) {
    wrap.innerHTML = '<div class="cart-empty">Tu bolsa está vacía</div>';
    document.getElementById('cart-total').textContent = '0';
    return;
  }
  let total = 0;
  wrap.innerHTML = cart.map(function(item, idx) {
    total += item.price;
    return '<div class="cart-item">' +
      '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '">' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">₡' + item.price.toLocaleString() + '</div>' +
      '</div>' +
      '<button class="cart-item-remove" onclick="removeFromCart(' + idx + ')" title="Eliminar">✕</button>' +
    '</div>';
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
  const total = cart.reduce(function(s,i) { return s+i.price; }, 0);
  const lines = cart.map(function(i) { return '• ' + i.name + ' - ₡' + i.price.toLocaleString(); }).join('\n');
  const msg = '¡Hola! Quiero hacer un pedido 🛍️\n\n' + lines + '\n\n*TOTAL: ₡' + total.toLocaleString() + '*';
  window.open('https://wa.me/50687443315?text=' + encodeURIComponent(msg), '_blank');
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2200);
}

function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let rx = 0, ry = 0, mx = 0, my = 0;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  function animateRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
}

function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', function() { nav.classList.toggle('scrolled', window.scrollY > 50); });
}

function buildStore(storeKey) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const params = new URLSearchParams(window.location.search);
  const typeFilter = params.get('type') || 'all';
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.type === typeFilter);
  });
  const filtered = inventory.filter(function(item) {
    return item.store === storeKey && (typeFilter === 'all' || item.type === typeFilter);
  });
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="padding:60px; color:rgba(245,240,232,0.3); letter-spacing:3px; font-size:0.75rem;">SIN PRODUCTOS EN ESTA CATEGORÍA</p>';
    return;
  }
  grid.innerHTML = filtered.map(function(item) {
    return '<div class="product-card">' +
      '<div class="product-img-wrap"><img src="' + item.img + '" alt="' + item.name + '" loading="lazy"></div>' +
      '<span class="product-tag tag-' + item.type + '">' + item.type.toUpperCase() + '</span>' +
      '<div class="product-name">' + item.name + '</div>' +
      '<div class="product-price">₡' + item.price.toLocaleString() + '</div>' +
      '<p style="font-size:0.8rem; color:rgba(245,240,232,0.4); margin-bottom:28px; line-height:1.6;">' + item.desc + '</p>' +
      '<button class="add-btn" onclick="addToCart(' + item.id + ')"><span>AGREGAR A LA BOLSA</span></button>' +
    '</div>';
  }).join('');
}

function filterStore(type, storeKey) {
  const url = new URL(window.location);
  url.searchParams.set('type', type);
  history.replaceState({}, '', url);
  buildStore(storeKey);
}

window.addEventListener('DOMContentLoaded', function() {
  initCursor();
  initNav();
  refreshCartUI();
  const body = document.body;
  if (body.dataset.store) buildStore(body.dataset.store);
});
