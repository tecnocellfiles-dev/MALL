// ═══════════════════════════════════════════════════════════
// MAIN.JS — Luxury Mall · v3.0
// ═══════════════════════════════════════════════════════════

// ─── INVENTARIO ───────────────────────────────────────────────────────────────
const DEFAULT_INVENTORY = [
  { id:1, name:"Saco 'Cielo' Silk-Line", price:285000, stock:8, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800",
    desc:"Saco de seda fría, corte estructurado, forro de lujo.",
    specs:{"Material":"Seda fría premium","Corte":"Estructurado","Forro":"Lujo","Origen":"Colombia"} },
  { id:2, name:"Vestido Gala Nightfall", price:320000, stock:3, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
    desc:"Vestido de noche, caída perfecta, exclusivo.",
    specs:{"Silueta":"A-line","Tela":"Chifón","Largo":"Maxi","Ocasión":"Gala / Noche"} },
  { id:3, name:"MacBook Pro M3 Elite", price:1850000, stock:5, store:"divino", type:"tech",
    img:"https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg",
    desc:"Chip M3, 18 GB RAM, pantalla Liquid Retina XDR.",
    specs:{"Chip":"Apple M3","RAM":"18 GB","Almacenamiento":"512 GB SSD","Pantalla":"Liquid Retina XDR 14\""} },
  { id:4, name:"Camisa Lino 'Nube'", price:95000, stock:12, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800",
    desc:"Lino premium, bordado artesanal.",
    specs:{"Material":"Lino premium","Bordado":"Artesanal","Cuello":"Clásico","Tallas":"XS–XL"} },
  { id:5, name:"Bolso Cuero Artesanal", price:210000, stock:2, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
    desc:"Cuero genuino, costura a mano, edición limitada.",
    specs:{"Material":"Cuero genuino","Costura":"A mano","Edición":"Limitada","Dimensiones":"32 × 24 × 10 cm"} },
  { id:6, name:"Victoria's Secret Amber Romance", price:10000, stock:20, store:"divino", type:"fragancias",
    img:"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg",
    desc:"Ámbar resinoso y crema de vainilla. Aroma cálido y sofisticado.",
    specs:{"Familia":"Oriental","Notas base":"Ámbar, Vainilla","Notas corazón":"Gardenia","Presentación":"Loción 250 ml"} },
  { id:16, name:"Victoria's Secret Romance", price:10000, stock:15, store:"divino", type:"fragancias",
    img:"https://victoriassecretbeautycr.vtexassets.com/arquivos/ids/172845-1200-1600?v=638030941474070000&width=1200&height=1600&aspect=true",
    desc:"Pétalos de rosa. Almizcle puro. Enamorándome de ti.",
    specs:{"Familia":"Floral","Notas base":"Almizcle blanco","Notas corazón":"Rosa, Lila","Presentación":"Loción 250 ml"} },
  { id:17, name:"Victoria's Secret Romantic", price:10000, stock:18, store:"divino", type:"fragancias",
    img:"https://cdnx.jumpseller.com/la-perfumeria-cl/image/69524237/resize/540/540?1762793584",
    desc:"Floral – clásico, femenino y delicado.",
    specs:{"Familia":"Floral","Notas base":"Sándalo","Notas corazón":"Jazmín, Rosa","Presentación":"Loción 250 ml"} },
  { id:7, name:"NVIDIA RTX 4090 Lab", price:1100000, stock:4, store:"family", type:"tech",
    img:"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg",
    desc:"24 GB GDDR6X, máxima potencia gráfica.",
    specs:{"VRAM":"24 GB GDDR6X","Núcleos CUDA":"16384","TDP":"450 W","Interfaz":"PCIe 4.0 x16"} },
  { id:8, name:"Teclado Custom 'Cell'", price:145000, stock:7, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800",
    desc:"Switches mecánicos Cherry MX, aluminio CNC.",
    specs:{"Switches":"Cherry MX Red","Cuerpo":"Aluminio CNC","Conectividad":"USB-C","Retroiluminación":"RGB"} },
  { id:9, name:"iPhone 15 Pro Max", price:980000, stock:6, store:"family", type:"celulares",
    img:"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800",
    desc:"Titanio, cámara 48MP, chip A17 Pro.",
    specs:{"Chip":"A17 Pro","Cámara":"48 MP triple","Almacenamiento":"256 GB","Material":"Titanio grado 5"} },
  { id:10, name:"AirPods Pro 2 Gen", price:210000, stock:11, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800",
    desc:"Cancelación activa de ruido, audio espacial.",
    specs:{"ANC":"Activa adaptativa","Audio":"Espacial personalizado","Batería":"6h + 24h estuche","Chip":"H2"} },
  { id:11, name:'Monitor 4K OLED 32"', price:620000, stock:3, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
    desc:"OLED, 120Hz, HDR True Black 400.",
    specs:{"Panel":"OLED","Resolución":"3840×2160","Tasa de refresco":"120 Hz","HDR":"True Black 400"} },
  { id:12, name:"Reloj Cronógrafo Noir", price:890000, stock:2, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",
    desc:"Acero inoxidable, movimiento suizo, edición limitada.",
    specs:{"Movimiento":"Suizo automático","Caja":"Acero 316L","Cristal":"Zafiro antirreflejo","Resistencia al agua":"100m"} },
  { id:13, name:"Collar Perlas Barrocas", price:350000, stock:5, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    desc:"Perlas de agua dulce, cierre de oro 18k.",
    specs:{"Perlas":"Agua dulce barrocas","Cierre":"Oro 18k","Largo":"45 cm","Certificado":"Incluido"} },
  { id:14, name:"Perfume 'Ámbar Nuit'", price:145000, stock:9, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=800",
    desc:"Ámbar, oud y rosa. Fragancia exclusiva 50ml.",
    specs:{"Familia":"Oriental","Notas base":"Oud, Ámbar","Notas corazón":"Rosa búlgara","Volumen":"50 ml"} },
  { id:15, name:"Aretes Diamante Micro", price:420000, stock:4, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    desc:"0.5ct VVS2, montura de platino.",
    specs:{"Diamantes":"0.5 ct VVS2","Montura":"Platino 950","Corte":"Brillante","Certificado":"GIA"} },
  { id:18, name:"Perfume 'Blanche Iris'", price:130000, stock:7, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800",
    desc:"Iris, musgo blanco y sándalo. 30ml.",
    specs:{"Familia":"Floral-verde","Notas base":"Sándalo","Notas corazón":"Iris","Volumen":"30 ml"} }
];

function getInventory() {
  try {
    var saved = localStorage.getItem('lm-inventory');
    if (!saved) return DEFAULT_INVENTORY;
    var parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_INVENTORY;
    // Validate structure — must have at minimum id, name, price, store
    if (!parsed[0].id || !parsed[0].name || !parsed[0].store) {
      localStorage.removeItem('lm-inventory');
      return DEFAULT_INVENTORY;
    }
    // Migrate: ensure every item has img and gallery fields
    parsed.forEach(function(item) {
      if (!item.img) item.img = '';
      if (!item.gallery) item.gallery = item.img ? [{url:item.img, isMain:true}] : [];
      if (!item.specs) item.specs = {};
      // services: stock can be null/undefined — that's fine
    });
    return parsed;
  } catch(e) {
    try { localStorage.removeItem('lm-inventory'); } catch(_) {}
    return DEFAULT_INVENTORY;
  }
}

var inventory = getInventory();
window._inventory = inventory;

// ─── CARRITO ──────────────────────────────────────────────────────────────────
var cart = [];
try { cart = JSON.parse(localStorage.getItem('lm-cart') || '[]'); } catch(e) { cart = []; }

function saveCart() { localStorage.setItem('lm-cart', JSON.stringify(cart)); }

function addToCart(id) {
  inventory = getInventory();
  window._inventory = inventory;
  var item = inventory.find(function(i) { return i.id === id; });
  if (!item) return;
  var existing = cart.find(function(i) { return i.id === id; });
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ id:item.id, name:item.name, price:item.price, img:item.img, store:item.store, qty:1 });
  }
  saveCart();
  refreshCartUI();
  openCart();
  showToast(item.name + ' añadido', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(function(i) { return i.id !== id; });
  saveCart();
  refreshCartUI();
}

function changeQty(id, delta) {
  var item = cart.find(function(i) { return i.id === id; });
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
  // Total de unidades para el badge
  var count = cart.reduce(function(s, i) { return s + (i.qty || 1); }, 0);
  document.querySelectorAll('.cart-count').forEach(function(el) {
    el.textContent = count;
    el.classList.add('bump');
    setTimeout(function() { el.classList.remove('bump'); }, 300);
  });

  var wrap = document.getElementById('cart-items-wrap');
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">◻</div><div>Tu bolsa está vacía</div></div>';
    document.querySelectorAll('#cart-total').forEach(function(el) { el.textContent = '0'; });
    return;
  }

  // ── CÁLCULO DEL TOTAL ── precio × cantidad, acumulado
  var grandTotal = 0;
  var html = cart.map(function(item) {
    var qty = item.qty || 1;
    var lineTotal = item.price * qty;
    grandTotal += lineTotal;             // <-- acumulamos aquí
    return '<div class="cart-item">' +
      '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '">' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">₡' + lineTotal.toLocaleString() + '</div>' +
        '<div class="cart-qty-row">' +
          '<button class="qty-btn" onclick="changeQty(' + item.id + ',-1)">−</button>' +
          '<span class="qty-val">' + qty + '</span>' +
          '<button class="qty-btn" onclick="changeQty(' + item.id + ',1)">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')" title="Eliminar">✕</button>' +
    '</div>';
  }).join('');

  wrap.innerHTML = html;

  // Actualizar TODOS los #cart-total del DOM
  document.querySelectorAll('#cart-total').forEach(function(el) {
    el.textContent = grandTotal.toLocaleString();
  });
}

function openCart()   {
  document.getElementById('cart-panel').classList.add('open');
  var o = document.getElementById('cart-overlay'); if (o) o.classList.add('open');
}
function closeCart()  {
  document.getElementById('cart-panel').classList.remove('open');
  var o = document.getElementById('cart-overlay'); if (o) o.classList.remove('open');
}
function toggleCart() {
  document.getElementById('cart-panel').classList.contains('open') ? closeCart() : openCart();
}

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────
function sendWhatsApp() {
  if (cart.length === 0) return;
  if (window.saveOrderToAccount) window.saveOrderToAccount(cart);
  var total = cart.reduce(function(s,i) { return s + i.price*(i.qty||1); }, 0);
  var lines = cart.map(function(i) {
    var qty = i.qty||1;
    return '• ' + i.name + (qty>1?' ×'+qty:'') + ' — ₡' + (i.price*qty).toLocaleString();
  }).join('\n');
  var msg = '¡Hola! Quiero hacer un pedido 🛍️\n\n' + lines + '\n\n*TOTAL: ₡' + total.toLocaleString() + '*';
  // Store-specific WhatsApp links
  var waLinks = {
    divino:   'https://api.whatsapp.com/message/LQMOAQKS3LFII1?autoload=1&app_absent=0&utm_source=ig',
    family:   'https://web.whatsapp.com/send?phone=50687443315&text=',
    elegance: 'https://api.whatsapp.com/message/FW6MOU7RBY2LJ1?autoload=1&app_absent=0&utm_source=ig'
  };
  var storeKey = window._currentStore || document.body.dataset.store || 'family';
  var waBase = waLinks[storeKey] || waLinks.family;
  if (storeKey === 'family') {
    window.open(waBase + encodeURIComponent(msg), '_blank');
  } else {
    window.open(waBase, '_blank');
  }
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
function showToast(msg, type) {
  type = type || 'info';
  // Buscar el wrap existente o crear uno nuevo — compatible con admin y tiendas
  var wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    wrap.style.cssText = 'position:fixed;bottom:32px;right:32px;z-index:99999;display:flex;flex-direction:column;gap:8px;';
    document.body.appendChild(wrap);
  }
  var t = document.createElement('div');
  t.className = 'toast toast-' + type;
  t.style.cssText = 'display:flex;align-items:center;gap:10px;padding:12px 20px;font-size:0.7rem;letter-spacing:2px;text-transform:uppercase;font-weight:600;opacity:0;transform:translateX(20px);transition:opacity 0.3s,transform 0.3s;backdrop-filter:blur(10px);min-width:220px;';
  var icons = {success:'✓', info:'◈', error:'✕'};
  var colors = {success:'rgba(76,175,125,0.95)', info:'rgba(20,20,20,0.95)', error:'rgba(224,48,48,0.95)'};
  t.style.background = colors[type] || colors.info;
  t.style.color = '#fff';
  if (type === 'info') t.style.border = '1px solid rgba(245,240,232,0.1)';
  t.innerHTML = '<span style="font-size:1rem;font-weight:700;">' + (icons[type]||'◈') + '</span><span>' + msg + '</span>';
  wrap.appendChild(t);
  requestAnimationFrame(function() { t.style.opacity='1'; t.style.transform='translateX(0)'; });
  setTimeout(function() {
    t.style.opacity='0'; t.style.transform='translateX(20px)';
    setTimeout(function() { if(t.parentNode) t.remove(); }, 400);
  }, 2800);
}
window.showToast = showToast;

// ─── CURSOR ──────────────────────────────────────────────────────────────────
function initCursor() {
  if (window.__cursorInit) return;
  window.__cursorInit = true;

  var dot  = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');

  // Touch devices or missing elements: hide and use system cursor
  if (!dot || !ring || window.matchMedia('(pointer:coarse)').matches) {
    if (dot)  dot.style.display  = 'none';
    if (ring) ring.style.display = 'none';
    document.body.style.cursor = '';
    return;
  }

  // Start both elements fully invisible and at center (not 0,0)
  var startX = window.innerWidth  / 2;
  var startY = window.innerHeight / 2;
  var rx = startX, ry = startY;
  var mx = startX, my = startY;
  var hasMoved = false;   // cursor stays hidden until the user actually moves the mouse
  var rafActive = true;   // pauses the loop when tab loses focus

  dot.style.opacity  = '0';
  ring.style.opacity = '0';

  // Only reveal after first real mouse movement
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    if (!hasMoved) {
      hasMoved = true;
      // Snap ring to current position so it doesn't drift in from (0,0)
      rx = mx; ry = my;
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    }
  }, { passive: true });

  // Pause loop when tab loses focus — prevents drift to (0,0)
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      rafActive = false;
    } else {
      if (!rafActive) {
        rafActive = true;
        // Snap ring to last known mouse position before resuming
        rx = mx; ry = my;
        loop();
      }
    }
  });

  // Hide cursors when mouse leaves the window
  document.addEventListener('mouseleave', function() {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function() {
    if (hasMoved) {
      rx = mx; ry = my; // snap before showing again
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    }
  });

  document.addEventListener('mousedown', function() { dot.style.transform = 'translate(-50%,-50%) scale(1.5)'; });
  document.addEventListener('mouseup',   function() { dot.style.transform = 'translate(-50%,-50%) scale(1)'; });

  function loop() {
    if (!rafActive) return;
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();
}

// ─── NAV + SCROLL ─────────────────────────────────────────────────────────────
function initNav() {
  var nav=document.querySelector('nav'), btn=document.getElementById('back-to-top'), bar=document.getElementById('progress-bar');
  window.addEventListener('scroll', function(){
    var y=window.scrollY;
    if(nav) nav.classList.toggle('scrolled', y>50);
    if(btn) btn.classList.toggle('visible', y>400);
    if(bar){ var h=document.documentElement.scrollHeight-window.innerHeight; bar.style.width=(h>0?y/h*100:0)+'%'; }
  });
  if(btn) btn.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
}

// ─── STOCK ───────────────────────────────────────────────────────────────────
function getStockBadge(s) {
  if(s===undefined||s===null) return '';
  if(s<=0) return '<span class="stock-badge urgent">AGOTADO</span>';
  if(s<=2) return '<span class="stock-badge urgent">¡ÚLTIMAS '+s+'!</span>';
  if(s<=5) return '<span class="stock-badge low">POCAS UNIDADES</span>';
  return '';
}
function getStockClass(s){ return (!s&&s!==0)||s>5?'ok':s<=2?'urgent':'low'; }
function getStockLabel(s){
  if(s===undefined||s===null) return 'Disponible';
  if(s<=0) return 'AGOTADO';
  if(s<=2) return '¡Últimas '+s+' unidades!';
  if(s<=5) return 'Pocas unidades ('+s+')';
  return s+' en stock';
}

// ─── RECENT VIEWS ─────────────────────────────────────────────────────────────
var recentViews = [];
try { recentViews = JSON.parse(localStorage.getItem('lm-recent')||'[]'); } catch(e){}

function addRecentView(item) {
  recentViews = recentViews.filter(function(i){ return i.id!==item.id; });
  recentViews.unshift({id:item.id,name:item.name,img:item.img,price:item.price,store:item.store});
  if(recentViews.length>8) recentViews.pop();
  localStorage.setItem('lm-recent', JSON.stringify(recentViews));
}

function renderRecentViews(storeKey) {
  var section=document.getElementById('recent-views-section');
  if(!section) return;
  var rel=recentViews.filter(function(i){return i.store===storeKey;}).slice(0,6);
  if(rel.length<2){section.style.display='none';return;}
  section.style.display='block';
  var grid=section.querySelector('.recent-grid');
  if(grid) grid.innerHTML=rel.map(function(item){
    return '<div class="recent-card" onclick="openModal('+item.id+')">' +
      '<img src="'+item.img+'" alt="'+item.name+'" loading="lazy">' +
      '<div class="recent-name">'+item.name+'</div>' +
      '<div class="recent-price">₡'+item.price.toLocaleString()+'</div></div>';
  }).join('');
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
// ─── GALERÍA ──────────────────────────────────────────────────────────────────
function getGalleryUrls(item) {
  // gallery array takes priority; fallback to single img
  if (item.gallery && item.gallery.length > 0) {
    return item.gallery.map(function(g){ return g.url; }).filter(Boolean);
  }
  return item.img ? [item.img] : [];
}

function getMainImg(item) {
  if (item.gallery && item.gallery.length > 0) {
    var main = item.gallery.find(function(g){ return g.isMain; });
    return (main ? main.url : item.gallery[0].url) || item.img || '';
  }
  return item.img || '';
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openModal(id) {
  inventory = getInventory(); window._inventory = inventory;
  var item = inventory.find(function(i){return i.id===id;});
  if(!item) return;
  addRecentView(item);
  if(window._currentStore) renderRecentViews(window._currentStore);

  var favs   = window.getFavorites ? window.getFavorites() : JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
  var inWish = favs.includes(item.id);
  var related = inventory.filter(function(i){return i.store===item.store&&i.type===item.type&&i.id!==item.id;}).slice(0,3);
  var urls   = getGalleryUrls(item);
  var mainImg = urls.length > 0 ? urls[0] : '';

  // ── Galería HTML ──────────────────────────────────────────────────────────
  var hasMultiple = urls.length > 1;
  var galleryHTML =
    '<div class="mg-main-wrap" id="mg-main-wrap">'+
      (hasMultiple ? '<button class="mg-arrow mg-prev" onclick="mgSwitch(-1)">&#8249;</button>' : '')+
      '<div class="modal-img-wrap" id="mg-main-img-wrap" onclick="var i=document.getElementById(\'mg-main-img\');if(i)zoomImg(i.src)">'+
        '<img id="mg-main-img" src="'+mainImg+'" alt="'+item.name+'">'+
        '<div class="modal-zoom-hint">CLICK PARA AMPLIAR</div>'+
      '</div>'+
      (hasMultiple ? '<button class="mg-arrow mg-next" onclick="mgSwitch(1)">&#8250;</button>' : '')+
    '</div>'+
    (hasMultiple
      ? '<div class="mg-thumbs" id="mg-thumbs">'+
          urls.map(function(u, i){
            return '<div class="mg-thumb'+(i===0?' active':'')+'" onclick="mgGoto('+i+')">'+
              '<img src="'+u+'" alt="foto '+(i+1)+'" loading="lazy">'+
            '</div>';
          }).join('')+
        '</div>'
      : '');

  // ── Specs HTML ────────────────────────────────────────────────────────────
  var specsHTML = '';
  if(item.specs && Object.keys(item.specs).length > 0){
    specsHTML = '<div class="modal-specs"><div class="modal-specs-title">ESPECIFICACIONES</div>'+
      Object.entries(item.specs).map(function(p){
        return '<div class="modal-spec-row"><span class="spec-key">'+p[0]+'</span><span class="spec-val">'+p[1]+'</span></div>';
      }).join('')+'</div>';
  }

  // ── Duration badge for elegance ───────────────────────────────────────────
  var durationBadge = (item.store === 'elegance' && item.duration)
    ? '<div style="font-size:0.65rem;letter-spacing:3px;color:#c8956c;margin-bottom:12px;">&#9719; '+item.duration+'</div>'
    : '';

  // ── Action buttons ────────────────────────────────────────────────────────
  var actionsHTML = item.store === 'elegance'
    ? '<a href="https://api.whatsapp.com/message/FW6MOU7RBY2LJ1?autoload=1&app_absent=0&utm_source=ig" target="_blank" class="btn-modal-add" style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px;border-color:rgba(200,149,108,0.5);color:#c8956c;"><span>AGENDAR CITA</span></a>'
    : '<button class="btn-modal-add" onclick="addToCart('+item.id+');closeModal()"><span>AGREGAR A LA BOLSA</span></button>';

  // ── Related ───────────────────────────────────────────────────────────────
  var relatedHTML = related.length > 0
    ? '<div class="modal-related"><div class="modal-related-title">TAMBIÉN TE PUEDE GUSTAR</div><div class="related-grid">'+
      related.map(function(r){
        return '<div class="related-card" onclick="openModal('+r.id+')">'+
          '<img src="'+getMainImg(r)+'" alt="'+r.name+'" loading="lazy">'+
          '<div class="related-name">'+r.name+'</div>'+
          '<div class="related-price">₡'+r.price.toLocaleString()+'</div></div>';
      }).join('')+'</div></div>'
    : '';

  var modal = document.getElementById('product-modal');
  modal.innerHTML =
    '<div class="modal-backdrop" onclick="closeModal()"></div>'+
    '<div class="modal-box">'+
      '<button class="modal-close" onclick="closeModal()">&#215;</button>'+
      '<div class="modal-inner">'+
        '<div class="modal-left">'+
          galleryHTML+
        '</div>'+
        '<div class="modal-right">'+
          '<div class="modal-meta">'+
            '<span class="modal-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>'+
            '<button class="modal-share-btn" onclick="shareProduct('+item.id+')">COMPARTIR &#8599;</button>'+
          '</div>'+
          '<div class="modal-name">'+item.name+'</div>'+
          '<div class="modal-price">&#8353;'+item.price.toLocaleString()+'</div>'+
          durationBadge+
          (item.store !== 'elegance' ? '<div class="modal-stock '+getStockClass(item.stock)+'">'+getStockLabel(item.stock)+'</div>' : '')+
          '<div class="modal-desc">'+item.desc+'</div>'+
          specsHTML+
          '<div class="modal-actions">'+
            actionsHTML+
            '<button class="btn-modal-wish '+(inWish?'wishlisted':'')+'" data-wish="'+item.id+'" onclick="wishFromModal('+item.id+',this)">&#9825;</button>'+
          '</div>'+
          relatedHTML+
        '</div>'+
      '</div>'+
    '</div>';

  // Inject gallery CSS once
  if (!document.getElementById('mg-style')) {
    var s = document.createElement('style');
    s.id = 'mg-style';
    s.textContent =
      '.mg-main-wrap{position:relative;width:100%;}'+
      '.mg-arrow{position:absolute;top:50%;transform:translateY(-50%);background:rgba(8,8,8,0.7);border:1px solid rgba(245,240,232,0.15);color:var(--white);width:36px;height:36px;font-size:1.4rem;cursor:pointer;z-index:4;transition:background 0.2s;display:flex;align-items:center;justify-content:center;line-height:1;}'+
      '.mg-arrow:hover{background:rgba(201,168,76,0.3);}'+
      '.mg-prev{left:8px;}.mg-next{right:8px;}'+
      '.mg-thumbs{display:flex;gap:6px;margin-top:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:2px;}'+
      '.mg-thumbs::-webkit-scrollbar{height:3px;}.mg-thumbs::-webkit-scrollbar-thumb{background:var(--gold);}'+
      '.mg-thumb{width:60px;height:60px;flex-shrink:0;overflow:hidden;border:1px solid rgba(245,240,232,0.1);cursor:pointer;transition:border-color 0.2s;opacity:0.55;transition:opacity 0.2s,border-color 0.2s;}'+
      '.mg-thumb:hover{opacity:0.85;border-color:rgba(201,168,76,0.4);}'+
      '.mg-thumb.active{border-color:var(--gold);opacity:1;}'+
      '.mg-thumb img{width:100%;height:100%;object-fit:cover;}';
    document.head.appendChild(s);
  }

  // Store gallery state on the modal element for arrow/thumb functions
  modal._mgUrls  = urls;
  modal._mgIndex = 0;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ─── Gallery navigation ───────────────────────────────────────────────────────
function mgGoto(idx) {
  var modal = document.getElementById('product-modal');
  if (!modal || !modal._mgUrls) return;
  var urls = modal._mgUrls;
  idx = Math.max(0, Math.min(idx, urls.length - 1));
  modal._mgIndex = idx;

  var img = document.getElementById('mg-main-img');
  if (img) { img.style.opacity = '0'; setTimeout(function(){ img.src = urls[idx]; img.style.opacity = '1'; }, 120); }

  document.querySelectorAll('.mg-thumb').forEach(function(t, i){
    t.classList.toggle('active', i === idx);
  });
}

function mgSwitch(dir) {
  var modal = document.getElementById('product-modal');
  if (!modal || !modal._mgUrls) return;
  var next = (modal._mgIndex + dir + modal._mgUrls.length) % modal._mgUrls.length;
  mgGoto(next);
}

function wishFromModal(id,btn){
  var added = window.toggleFavorite ? window.toggleFavorite(id) : false;
  btn.classList.toggle('wishlisted', added);
  showToast(added?'Guardado en favoritos':'Eliminado de favoritos','info');
}
function closeModal(){
  var m=document.getElementById('product-modal'); if(m) m.classList.remove('open');
  document.body.style.overflow='';
}
function zoomImg(src){
  var o=document.getElementById('img-zoom-overlay');
  if(!o){ o=document.createElement('div'); o.id='img-zoom-overlay'; o.innerHTML='<div class="zoom-backdrop"></div><img>'; o.addEventListener('click',function(){o.classList.remove('open');}); document.body.appendChild(o); }
  o.querySelector('img').src=src; o.classList.add('open');
}
function shareProduct(id){
  var item=inventory.find(function(i){return i.id===id;}); if(!item) return;
  var text=item.name+' — ₡'+item.price.toLocaleString()+'\n'+item.desc;
  if(navigator.share) navigator.share({title:item.name,text:text,url:window.location.href}).catch(function(){});
  else navigator.clipboard.writeText(text).then(function(){showToast('Copiado','info');}).catch(function(){});
}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){closeModal();closeCart();}
  var m=document.getElementById('product-modal');
  if(m&&m.classList.contains('open')){
    if(e.key==='ArrowLeft') mgSwitch(-1);
    if(e.key==='ArrowRight') mgSwitch(1);
  }
});

// ─── TIENDA ───────────────────────────────────────────────────────────────────
function buildStore(storeKey) {
  inventory = getInventory(); window._inventory = inventory; window._currentStore = storeKey;
  var params=new URLSearchParams(window.location.search);
  var typeFilter=params.get('type')||'all';
  var searchVal=(params.get('q')||'').toLowerCase();
  var sortVal=params.get('sort')||'';

  document.querySelectorAll('.filter-btn').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.type===typeFilter);
  });
  var si=document.getElementById('search-input'); if(si&&searchVal) si.value=searchVal;

  var filtered=inventory.filter(function(item){
    return item.store===storeKey &&
      (typeFilter==='all'||item.type===typeFilter) &&
      (!searchVal || item.name.toLowerCase().includes(searchVal) ||
        (item.desc||'').toLowerCase().includes(searchVal) ||
        item.type.toLowerCase().includes(searchVal));
  });

  if(sortVal==='price-asc')  filtered.sort(function(a,b){return a.price-b.price;});
  if(sortVal==='price-desc') filtered.sort(function(a,b){return b.price-a.price;});
  if(sortVal==='name')       filtered.sort(function(a,b){return a.name.localeCompare(b.name);});
  if(sortVal==='newest')     filtered.sort(function(a,b){return b.id-a.id;});

  renderGrid(filtered);
  renderRecentViews(storeKey);
}

function renderGrid(items) {
  var grid=document.getElementById('product-grid'); if(!grid) return;
  if(items.length===0){ grid.innerHTML='<div class="no-results">Sin productos · <em>prueba con otro filtro</em></div>'; return; }

  var favs=window.getFavorites?window.getFavorites():JSON.parse(localStorage.getItem('lm-wishlist')||'[]');

  grid.innerHTML=items.map(function(item){
    var inWish=favs.includes(item.id);
    var hasSpecs=item.specs&&Object.keys(item.specs).length>0;
    return '<div class="product-card reveal-card">'+
      getStockBadge(item.stock, item.store)+
      '<button class="wish-btn '+(inWish?'wishlisted':'')+'" data-wish="'+item.id+'" onclick="cardWish('+item.id+',this)" title="Guardar">♡</button>'+
      '<div class="product-img-wrap">'+
        '<img src="'+getMainImg(item)+'" alt="'+item.name+'" loading="lazy">'+
        '<div class="product-img-overlay" onclick="openModal('+item.id+')"><span>VER DETALLES</span></div>'+
      '</div>'+
      '<span class="product-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>'+
      '<div class="product-name">'+item.name+'</div>'+
      '<div class="product-price">₡'+item.price.toLocaleString()+'</div>'+
      '<p class="product-desc">'+item.desc+'</p>'+
      (item.store==='elegance'
        ? '<a href="https://api.whatsapp.com/message/FW6MOU7RBY2LJ1?autoload=1&app_absent=0&utm_source=ig" target="_blank" class="add-btn" style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px;border-color:rgba(200,149,108,0.4);color:#c8956c;"><span>AGENDAR CITA</span></a>'
        : (hasSpecs?'<button class="add-btn" style="margin-bottom:10px;border-color:rgba(245,240,232,0.1);" onclick="openModal('+item.id+')"><span>VER ESPECIFICACIONES</span></button>':'')+
          '<button class="add-btn" onclick="addToCart('+item.id+')"><span>AGREGAR A LA BOLSA</span></button>'
      )+
    '</div>';
  }).join('');

  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(e,i){
      if(e.isIntersecting){ setTimeout(function(){e.target.classList.add('revealed');},i*55); observer.unobserve(e.target); }
    });
  },{threshold:0.06});
  grid.querySelectorAll('.reveal-card').forEach(function(c){observer.observe(c);});
}

function cardWish(id,btn){
  if(window.toggleFavorite){
    var added=window.toggleFavorite(id);
    btn.classList.toggle('wishlisted',!!added);
    showToast(added?'Guardado en favoritos':'Eliminado de favoritos','info');
  } else {
    var favs=JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
    var idx=favs.indexOf(id);
    var isAdding=idx===-1;
    if(isAdding)favs.push(id); else favs.splice(idx,1);
    localStorage.setItem('lm-wishlist',JSON.stringify(favs));
    btn.classList.toggle('wishlisted',isAdding);
    showToast(isAdding?'Guardado en favoritos':'Eliminado de favoritos','info');
  }
}

function filterStore(type,storeKey){
  var url=new URL(window.location); url.searchParams.set('type',type); url.searchParams.delete('q');
  history.replaceState({},'',url); buildStore(storeKey);
}
function onSearch(val,storeKey){
  var url=new URL(window.location); if(val) url.searchParams.set('q',val); else url.searchParams.delete('q');
  history.replaceState({},'',url); buildStore(storeKey);
}
function sortProducts(val,storeKey){
  var url=new URL(window.location); if(val) url.searchParams.set('sort',val); else url.searchParams.delete('sort');
  history.replaceState({},'',url); buildStore(storeKey);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', function(){
  initCursor(); initNav(); refreshCartUI();
  if(document.body.dataset.store) buildStore(document.body.dataset.store);
});
