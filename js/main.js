// ─── INVENTORY (lee desde localStorage si el admin lo actualizó) ─────────────
const DEFAULT_INVENTORY = [
  { id:1, name:"Saco 'Cielo' Silk-Line", price:285000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800",
    desc:"Saco de seda fría, corte estructurado, forro de lujo.", stock:8,
    specs:{"Material":"Seda fría premium","Corte":"Estructurado","Forro":"Lujo","Origen":"Colombia"} },
  { id:2, name:"Vestido Gala Nightfall", price:320000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
    desc:"Vestido de noche, caída perfecta, exclusivo.", stock:3,
    specs:{"Silueta":"A-line","Tela":"Chifón","Largo":"Maxi","Ocasión":"Gala / Noche"} },
  { id:3, name:"MacBook Pro M3 Elite", price:1850000, store:"divino", type:"tech",
    img:"https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg",
    desc:"Chip M3, 18 GB RAM, pantalla Liquid Retina XDR.", stock:5,
    specs:{"Chip":"Apple M3","RAM":"18 GB","Almacenamiento":"512 GB SSD","Pantalla":"Liquid Retina XDR 14\""} },
  { id:4, name:"Camisa Lino 'Nube'", price:95000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800",
    desc:"Lino premium, bordado artesanal.", stock:12,
    specs:{"Material":"Lino premium","Bordado":"Artesanal","Cuello":"Clásico","Tallas":"XS–XL"} },
  { id:5, name:"Bolso Cuero Artesanal", price:210000, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
    desc:"Cuero genuino, costura a mano, edición limitada.", stock:2,
    specs:{"Material":"Cuero genuino","Costura":"A mano","Edición":"Limitada","Dimensiones":"32 × 24 × 10 cm"} },
  { id:6, name:"Victoria's Secret Amber Romance", price:10000, store:"divino", type:"fragancias",
    img:"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg",
    desc:"Ámbar resinoso y crema de vainilla. Un aroma cálido, denso y sofisticadamente dulce.", stock:20,
    specs:{"Familia":"Oriental","Notas base":"Ámbar, Vainilla","Notas corazón":"Gardenia","Presentación":"Loción 250 ml"} },
  { id:16, name:"Victoria's Secret Romance", price:10000, store:"divino", type:"fragancias",
    img:"https://victoriassecretbeautycr.vtexassets.com/arquivos/ids/172845-1200-1600?v=638030941474070000&width=1200&height=1600&aspect=true",
    desc:"Pétalos de rosa. Almizcle puro. Enamorándome de ti.", stock:15,
    specs:{"Familia":"Floral","Notas base":"Almizcle blanco","Notas corazón":"Rosa, Lila","Presentación":"Loción 250 ml"} },
  { id:17, name:"Victoria's Secret Romantic", price:10000, store:"divino", type:"fragancias",
    img:"https://cdnx.jumpseller.com/la-perfumeria-cl/image/69524237/resize/540/540?1762793584",
    desc:"Floral – clásico, femenino y delicado.", stock:18,
    specs:{"Familia":"Floral","Notas base":"Sándalo","Notas corazón":"Jazmín, Rosa","Presentación":"Loción 250 ml"} },
  { id:7, name:"NVIDIA RTX 4090 Lab", price:1100000, store:"family", type:"tech",
    img:"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg",
    desc:"24 GB GDDR6X, máxima potencia gráfica.", stock:4,
    specs:{"VRAM":"24 GB GDDR6X","Núcleos CUDA":"16384","TDP":"450 W","Interfaz":"PCIe 4.0 x16"} },
  { id:8, name:"Teclado Custom 'Cell'", price:145000, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800",
    desc:"Switches mecánicos Cherry MX, aluminio CNC.", stock:7,
    specs:{"Switches":"Cherry MX Red","Cuerpo":"Aluminio CNC","Conectividad":"USB-C","Retroiluminación":"RGB"} },
  { id:9, name:"iPhone 15 Pro Max", price:980000, store:"family", type:"celulares",
    img:"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800",
    desc:"Titanio, cámara 48MP, chip A17 Pro.", stock:6,
    specs:{"Chip":"A17 Pro","Cámara":"48 MP triple","Almacenamiento":"256 GB","Material":"Titanio grado 5"} },
  { id:10, name:"AirPods Pro 2 Gen", price:210000, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800",
    desc:"Cancelación activa de ruido, audio espacial.", stock:11,
    specs:{"ANC":"Activa adaptativa","Audio":"Espacial personalizado","Batería":"6h + 24h estuche","Chip":"H2"} },
  { id:11, name:'Monitor 4K OLED 32"', price:620000, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
    desc:"OLED, 120Hz, HDR True Black 400.", stock:3,
    specs:{"Panel":"OLED","Resolución":"3840×2160","Tasa de refresco":"120 Hz","HDR":"True Black 400"} },
  { id:12, name:"Reloj Cronógrafo Noir", price:890000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",
    desc:"Acero inoxidable, movimiento suizo, edición limitada.", stock:2,
    specs:{"Movimiento":"Suizo automático","Caja":"Acero 316L","Cristal":"Zafiro antirreflejo","Resistencia al agua":"100m"} },
  { id:13, name:"Collar Perlas Barrocas", price:350000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    desc:"Perlas de agua dulce, cierre de oro 18k.", stock:5,
    specs:{"Perlas":"Agua dulce barrocas","Cierre":"Oro 18k","Largo":"45 cm","Certificado":"Incluido"} },
  { id:14, name:"Perfume 'Ámbar Nuit'", price:145000, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=800",
    desc:"Ámbar, oud y rosa. Fragancia exclusiva 50ml.", stock:9,
    specs:{"Familia":"Oriental","Notas base":"Oud, Ámbar","Notas corazón":"Rosa búlgara","Volumen":"50 ml"} },
  { id:15, name:"Aretes Diamante Micro", price:420000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    desc:"0.5ct VVS2, montura de platino.", stock:4,
    specs:{"Diamantes":"0.5 ct VVS2","Montura":"Platino 950","Corte":"Brillante","Certificado":"GIA"} },
  { id:18, name:"Perfume 'Blanche Iris'", price:130000, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800",
    desc:"Iris, musgo blanco y sándalo. 30ml.", stock:7,
    specs:{"Familia":"Floral-verde","Notas base":"Sándalo","Notas corazón":"Iris","Volumen":"30 ml"} }
];

function getInventory() {
  try {
    const saved = localStorage.getItem('lm-inventory');
    return saved ? JSON.parse(saved) : DEFAULT_INVENTORY;
  } catch(e) { return DEFAULT_INVENTORY; }
}

let inventory = getInventory();

// ─── ESTADO ──────────────────────────────────────────────────────────────────
let cart = [];
try { cart = JSON.parse(localStorage.getItem('lm-cart') || '[]'); } catch(e) { cart = []; }
let wishlist = [];
try { wishlist = JSON.parse(localStorage.getItem('lm-wishlist') || '[]'); } catch(e) {}
let recentViews = [];
try { recentViews = JSON.parse(localStorage.getItem('lm-recent') || '[]'); } catch(e) {}
let currentStore = null;
let allStoreItems = [];

function saveCart() { localStorage.setItem('lm-cart', JSON.stringify(cart)); }

// ─── CARRITO ─────────────────────────────────────────────────────────────────
function addToCart(id) {
  inventory = getInventory(); // refresca por si admin cambió algo
  const item = inventory.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  refreshCartUI();
  openCart();
  showToast(item.name + ' añadido', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  refreshCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = (item.qty || 1) + delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  refreshCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  refreshCartUI();
}

function refreshCartUI() {
  const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll('.cart-count').forEach(function(el) {
    el.textContent = count;
    el.classList.add('bump');
    setTimeout(function() { el.classList.remove('bump'); }, 300);
  });

  const wrap = document.getElementById('cart-items-wrap');
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">◻</div><div>Tu bolsa está vacía</div></div>';
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = '0';
    return;
  }

  let total = 0;
  wrap.innerHTML = cart.map(function(item) {
    const qty = item.qty || 1;
    const subtotal = item.price * qty;
    total += subtotal;
    return '<div class="cart-item">' +
      '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '">' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">₡' + subtotal.toLocaleString() + '</div>' +
        '<div class="cart-qty-row">' +
          '<button class="qty-btn" onclick="changeQty(' + item.id + ',-1)">−</button>' +
          '<span class="qty-val">' + qty + '</span>' +
          '<button class="qty-btn" onclick="changeQty(' + item.id + ',1)">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')" title="Eliminar">✕</button>' +
    '</div>';
  }).join('');

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = total.toLocaleString();
}

function openCart() {
  document.getElementById('cart-panel').classList.add('open');
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.classList.add('open');
}
function closeCart() {
  document.getElementById('cart-panel').classList.remove('open');
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.classList.remove('open');
}
function toggleCart() {
  document.getElementById('cart-panel').classList.contains('open') ? closeCart() : openCart();
}

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────
function sendWhatsApp() {
  if (cart.length === 0) return;
  const total = cart.reduce(function(s, i) { return s + (i.price * (i.qty || 1)); }, 0);
  const lines = cart.map(function(i) {
    const qty = i.qty || 1;
    return '• ' + i.name + (qty > 1 ? ' x' + qty : '') + ' — ₡' + (i.price * qty).toLocaleString();
  }).join('\n');
  const msg = '¡Hola! Quiero hacer un pedido 🛍️\n\n' + lines + '\n\n*TOTAL: ₡' + total.toLocaleString() + '*';
  window.open('https://wa.me/50687443315?text=' + encodeURIComponent(msg), '_blank');
}

// ─── WISHLIST ─────────────────────────────────────────────────────────────────
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) { wishlist.push(id); showToast('Guardado en favoritos', 'info'); }
  else { wishlist.splice(idx, 1); showToast('Eliminado de favoritos', 'info'); }
  localStorage.setItem('lm-wishlist', JSON.stringify(wishlist));
  document.querySelectorAll('[data-wish="' + id + '"]').forEach(function(btn) {
    btn.classList.toggle('wishlisted', wishlist.includes(id));
  });
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
function showToast(msg, type) {
  type = type || 'info';
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  const icons = { success:'✓', info:'◈', error:'✕' };
  t.className = 'toast toast-' + type;
  t.innerHTML = '<span class="toast-icon">' + (icons[type] || '◈') + '</span>' + msg;
  wrap.appendChild(t);
  requestAnimationFrame(function() { t.classList.add('show'); });
  setTimeout(function() {
    t.classList.remove('show');
    setTimeout(function() { t.remove(); }, 400);
  }, 2500);
}

// ─── CURSOR ──────────────────────────────────────────────────────────────────
function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  if (window.matchMedia('(pointer:coarse)').matches) {
    dot.style.display = ring.style.display = 'none'; return;
  }
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
  document.addEventListener('mousedown', function() { dot.style.transform = 'translate(-50%,-50%) scale(1.5)'; });
  document.addEventListener('mouseup', function() { dot.style.transform = 'translate(-50%,-50%) scale(1)'; });
}

// ─── NAV + SCROLL ─────────────────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('nav');
  const btn = document.getElementById('back-to-top');
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', function() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 50);
    if (btn) btn.classList.toggle('visible', y > 400);
    if (bar) {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (total > 0 ? (y / total * 100) : 0) + '%';
    }
  });
  if (btn) btn.addEventListener('click', function() { window.scrollTo({ top:0, behavior:'smooth' }); });
}

// ─── STOCK BADGE ─────────────────────────────────────────────────────────────
function getStockBadge(stock) {
  if (stock === undefined || stock === null) return '';
  if (stock <= 0) return '<span class="stock-badge urgent">AGOTADO</span>';
  if (stock <= 2) return '<span class="stock-badge urgent">¡ÚLTIMAS ' + stock + '!</span>';
  if (stock <= 5) return '<span class="stock-badge low">POCAS UNIDADES</span>';
  return '';
}

function getStockClass(stock) {
  if (stock === undefined || stock === null || stock > 5) return 'ok';
  if (stock <= 2) return 'urgent';
  return 'low';
}

function getStockLabel(stock) {
  if (stock === undefined || stock === null) return 'Disponible';
  if (stock <= 0) return 'AGOTADO';
  if (stock <= 2) return '¡Últimas ' + stock + ' unidades!';
  if (stock <= 5) return 'Pocas unidades (' + stock + ')';
  return stock + ' en stock';
}

// ─── RECENT VIEWS ─────────────────────────────────────────────────────────────
function addRecentView(item) {
  recentViews = recentViews.filter(i => i.id !== item.id);
  recentViews.unshift({ id:item.id, name:item.name, img:item.img, price:item.price, store:item.store });
  if (recentViews.length > 8) recentViews.pop();
  localStorage.setItem('lm-recent', JSON.stringify(recentViews));
}

function renderRecentViews(storeKey) {
  const section = document.getElementById('recent-views-section');
  if (!section) return;
  const relevant = recentViews.filter(i => i.store === storeKey).slice(0, 6);
  if (relevant.length < 2) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  const grid = section.querySelector('.recent-grid');
  if (!grid) return;
  grid.innerHTML = relevant.map(function(item) {
    return '<div class="recent-card" onclick="openModal(' + item.id + ')">' +
      '<img src="' + item.img + '" alt="' + item.name + '" loading="lazy">' +
      '<div class="recent-name">' + item.name + '</div>' +
      '<div class="recent-price">₡' + item.price.toLocaleString() + '</div>' +
    '</div>';
  }).join('');
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
function openModal(id) {
  inventory = getInventory();
  const item = inventory.find(i => i.id === id);
  if (!item) return;

  addRecentView(item);
  if (currentStore) renderRecentViews(currentStore);

  const related = inventory.filter(i => i.store === item.store && i.type === item.type && i.id !== item.id).slice(0, 3);
  const inWish = wishlist.includes(item.id);
  const stock = item.stock;

  // Specs dinámicos: funciona para CUALQUIER producto con specs o sin ellas
  let specsHTML = '';
  const specs = item.specs;
  if (specs && Object.keys(specs).length > 0) {
    const rows = Object.entries(specs).map(function(pair) {
      return '<div class="modal-spec-row"><span class="spec-key">' + pair[0] + '</span><span class="spec-val">' + pair[1] + '</span></div>';
    }).join('');
    specsHTML = '<div class="modal-specs"><div class="modal-specs-title">ESPECIFICACIONES</div>' + rows + '</div>';
  }

  const relatedHTML = related.length > 0
    ? '<div class="modal-related"><div class="modal-related-title">TAMBIÉN TE PUEDE GUSTAR</div>' +
      '<div class="related-grid">' + related.map(function(r) {
        return '<div class="related-card" onclick="openModal(' + r.id + ')">' +
          '<img src="' + r.img + '" alt="' + r.name + '" loading="lazy">' +
          '<div class="related-name">' + r.name + '</div>' +
          '<div class="related-price">₡' + r.price.toLocaleString() + '</div>' +
        '</div>';
      }).join('') + '</div></div>'
    : '';

  const tagClass = 'tag-' + item.type;

  const html =
    '<div class="modal-backdrop" onclick="closeModal()"></div>' +
    '<div class="modal-box">' +
      '<button class="modal-close" onclick="closeModal()">✕</button>' +
      '<div class="modal-inner">' +
        '<div class="modal-left">' +
          '<div class="modal-img-wrap" onclick="zoomImg(\'' + item.img + '\')">' +
            '<img src="' + item.img + '" alt="' + item.name + '">' +
            '<div class="modal-zoom-hint">CLICK PARA AMPLIAR</div>' +
          '</div>' +
        '</div>' +
        '<div class="modal-right">' +
          '<div class="modal-meta">' +
            '<span class="modal-tag ' + tagClass + '">' + item.type.toUpperCase() + '</span>' +
            '<button class="modal-share-btn" onclick="shareProduct(' + item.id + ')">COMPARTIR ↗</button>' +
          '</div>' +
          '<div class="modal-name">' + item.name + '</div>' +
          '<div class="modal-price">₡' + item.price.toLocaleString() + '</div>' +
          '<div class="modal-stock ' + getStockClass(stock) + '">' + getStockLabel(stock) + '</div>' +
          '<div class="modal-desc">' + item.desc + '</div>' +
          specsHTML +
          '<div class="modal-actions">' +
            '<button class="btn-modal-add" onclick="addToCart(' + item.id + ');closeModal()"><span>AGREGAR A LA BOLSA</span></button>' +
            '<button class="btn-modal-wish ' + (inWish ? 'wishlisted' : '') + '" data-wish="' + item.id + '" onclick="toggleWishlist(' + item.id + ')">♡</button>' +
          '</div>' +
          relatedHTML +
        '</div>' +
      '</div>' +
    '</div>';

  const modal = document.getElementById('product-modal');
  modal.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function zoomImg(src) {
  let overlay = document.getElementById('img-zoom-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'img-zoom-overlay';
    overlay.innerHTML = '<div class="zoom-backdrop"></div><img>';
    overlay.addEventListener('click', function() { overlay.classList.remove('open'); });
    document.body.appendChild(overlay);
  }
  overlay.querySelector('img').src = src;
  overlay.classList.add('open');
}

function shareProduct(id) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;
  const text = item.name + ' — ₡' + item.price.toLocaleString() + '\n' + item.desc;
  if (navigator.share) {
    navigator.share({ title: item.name, text: text, url: window.location.href }).catch(function(){});
  } else {
    navigator.clipboard.writeText(text).then(function() { showToast('Enlace copiado', 'info'); }).catch(function(){});
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

// ─── TIENDA: BUILD / FILTER / SORT / SEARCH ───────────────────────────────────
function buildStore(storeKey) {
  inventory = getInventory();
  currentStore = storeKey;
  const params = new URLSearchParams(window.location.search);
  const typeFilter = params.get('type') || 'all';
  const searchVal = (params.get('q') || '').toLowerCase();
  const sortVal = params.get('sort') || '';

  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.type === typeFilter);
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput && searchVal) searchInput.value = searchVal;

  allStoreItems = inventory.filter(function(item) {
    return item.store === storeKey;
  });

  let filtered = allStoreItems.filter(function(item) {
    const matchType = typeFilter === 'all' || item.type === typeFilter;
    const matchSearch = !searchVal ||
      item.name.toLowerCase().includes(searchVal) ||
      item.desc.toLowerCase().includes(searchVal) ||
      item.type.toLowerCase().includes(searchVal);
    return matchType && matchSearch;
  });

  filtered = sortItems(filtered, sortVal);
  renderGrid(filtered);
  renderRecentViews(storeKey);
}

function sortItems(items, val) {
  const arr = items.slice();
  if (val === 'price-asc')  arr.sort(function(a,b) { return a.price - b.price; });
  if (val === 'price-desc') arr.sort(function(a,b) { return b.price - a.price; });
  if (val === 'name')       arr.sort(function(a,b) { return a.name.localeCompare(b.name); });
  if (val === 'newest')     arr.sort(function(a,b) { return b.id - a.id; });
  return arr;
}

function renderGrid(items) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = '<div class="no-results">Sin productos · <em>prueba con otro filtro</em></div>';
    return;
  }

  grid.innerHTML = items.map(function(item) {
    const inWish = wishlist.includes(item.id);
    const hasSpecs = item.specs && Object.keys(item.specs).length > 0;
    return '<div class="product-card reveal-card">' +
      getStockBadge(item.stock) +
      '<button class="wish-btn ' + (inWish ? 'wishlisted' : '') + '" data-wish="' + item.id + '" onclick="toggleWishlist(' + item.id + ')" title="Guardar">♡</button>' +
      '<div class="product-img-wrap">' +
        '<img src="' + item.img + '" alt="' + item.name + '" loading="lazy">' +
        '<div class="product-img-overlay" onclick="openModal(' + item.id + ')"><span>VER DETALLES</span></div>' +
      '</div>' +
      '<span class="product-tag tag-' + item.type + '">' + item.type.toUpperCase() + '</span>' +
      '<div class="product-name">' + item.name + '</div>' +
      '<div class="product-price">₡' + item.price.toLocaleString() + '</div>' +
      '<p class="product-desc">' + item.desc + '</p>' +
      (hasSpecs
        ? '<button class="add-btn" style="margin-bottom:10px;background:none;border-color:rgba(245,240,232,0.1);" onclick="openModal(' + item.id + ')"><span>VER ESPECIFICACIONES</span></button>'
        : '') +
      '<button class="add-btn" onclick="addToCart(' + item.id + ')"><span>AGREGAR A LA BOLSA</span></button>' +
    '</div>';
  }).join('');

  // Scroll reveal
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.reveal-card').forEach(function(card) { observer.observe(card); });
}

// ─── FILTROS Y BÚSQUEDA (conectados al HTML) ───────────────────────────────────
function filterStore(type, storeKey) {
  const url = new URL(window.location);
  url.searchParams.set('type', type);
  url.searchParams.delete('q');
  history.replaceState({}, '', url);
  buildStore(storeKey);
}

function onSearch(val, storeKey) {
  const url = new URL(window.location);
  if (val) url.searchParams.set('q', val);
  else url.searchParams.delete('q');
  history.replaceState({}, '', url);
  buildStore(storeKey);
}

function sortProducts(val, storeKey) {
  const url = new URL(window.location);
  if (val) url.searchParams.set('sort', val);
  else url.searchParams.delete('sort');
  history.replaceState({}, '', url);
  buildStore(storeKey);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', function() {
  initCursor();
  initNav();
  refreshCartUI();
  const body = document.body;
  if (body.dataset.store) buildStore(body.dataset.store);
});
