// ═══════════════════════════════════════════════════════════════════════════
// LUXURY MALL — main.js  |  Premium Edition
// Features: Modal+Specs, Search, Wishlist, Qty Controls, Sort, Parallax,
//           Scroll Reveal, Recent Views, Stock Urgency, Mobile Menu,
//           Progress Bar, Back-to-Top, Share, Zoom, Keyboard Nav
// ═══════════════════════════════════════════════════════════════════════════

// ─── INVENTORY ──────────────────────────────────────────────────────────────
const inventory = [
  { id:1,  name:"Saco 'Cielo' Silk-Line",   price:285000, store:"divino",   type:"moda",
    img:"https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800",
    desc:"Saco de seda fría, corte estructurado, forro de lujo.",
    specs:["Material: Seda 100%","Corte: Estructurado Premium","Colores: Negro, Marfil","Tallas: XS–XL","Origen: Colombia"] },
  { id:2,  name:"Vestido Gala Nightfall",    price:320000, store:"divino",   type:"moda",
    img:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
    desc:"Vestido de noche, caída perfecta, exclusivo.",
    specs:["Material: Chifón de seda","Largo: Maxi","Escote: Halter","Colores: Negro, Azul noche","Tallas: XS–L"] },
  { id:3,  name:"MacBook Pro M3 Elite",      price:1850000, store:"divino",  type:"tech",
    img:"https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg",
    desc:"Chip M3, 18 GB RAM, pantalla Liquid Retina XDR.",
    specs:["CPU: Apple M3 Pro","RAM: 18 GB unificada","SSD: 512 GB","Pantalla: 14\" Liquid Retina XDR","Batería: hasta 18h"] },
  { id:4,  name:"Camisa Lino 'Nube'",        price:95000,  store:"divino",   type:"moda",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800",
    desc:"Lino premium, bordado artesanal.",
    specs:["Material: Lino 100%","Bordado: Artesanal","Colores: Beige, Blanco, Azul","Tallas: S–XXL","Cuidado: Lavado suave"] },
  { id:5,  name:"Bolso Cuero Artesanal",     price:210000, store:"divino",   type:"moda",
    img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
    desc:"Cuero genuino, costura a mano, edición limitada.",
    specs:["Material: Cuero vacuno genuino","Cierre: YKK dorado","Medidas: 35×25×12 cm","Interior: Forro de seda","Edición: Limitada 50 uds"] },
  { id:6,  name:"Victoria's Secret Amber Romance", price:10000, store:"divino", type:"fragancias",
    img:"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg",
    desc:"Ámbar resinoso y crema de vainilla. Un aroma cálido y sofisticadamente dulce.",
    specs:["Notas top: Bergamota, Pera","Notas corazón: Rosa, Jazmín","Notas base: Ámbar, Vainilla","Tipo: Eau de Parfum","Volumen: 50 ml"] },
  { id:7,  name:"NVIDIA RTX 4090 Lab",       price:1100000, store:"family",  type:"tech",
    img:"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg",
    desc:"24 GB GDDR6X, máxima potencia gráfica.",
    specs:["VRAM: 24 GB GDDR6X","CUDA Cores: 16,384","TDP: 450W","Interfaz: PCIe 4.0 x16","Salidas: 3x DP 1.4a + HDMI 2.1"] },
  { id:8,  name:"Teclado Custom 'Cell'",     price:145000, store:"family",   type:"tech",
    img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800",
    desc:"Switches mecánicos Cherry MX, aluminio CNC.",
    specs:["Switches: Cherry MX Red","Cuerpo: Aluminio CNC","RGB: 16M colores","Conexión: USB-C / Bluetooth 5.0","Keycaps: PBT Double-Shot"] },
  { id:9,  name:"iPhone 15 Pro Max",         price:980000, store:"family",   type:"tech",
    img:"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800",
    desc:"Titanio, cámara 48MP, chip A17 Pro.",
    specs:["CPU: Apple A17 Pro","Pantalla: 6.7\" Super Retina XDR","Cámara: 48+12+12 MP","Material: Titanio Grado 5","Batería: hasta 29h"] },
  { id:10, name:"AirPods Pro 2 Gen",          price:210000, store:"family",   type:"tech",
    img:"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800",
    desc:"Cancelación activa de ruido, audio espacial.",
    specs:["Chip: Apple H2","ANC: Adaptativa activa","Audio: Espacial personalizado","Batería: 6h + 30h estuche","Resistencia: IPX4"] },
  { id:11, name:'Monitor 4K OLED 32"',        price:620000, store:"family",   type:"tech",
    img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
    desc:"OLED, 120Hz, HDR True Black 400.",
    specs:["Panel: OLED 4K 3840×2160","Refresco: 120Hz","HDR: True Black 400","Resp: 0.1ms","Conectividad: 2x HDMI 2.1, USB-C 90W"] },
  { id:12, name:"Reloj Cronógrafo Noir",     price:890000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",
    desc:"Acero inoxidable, movimiento suizo, edición limitada.",
    specs:["Movimiento: Swiss Auto ETA 7750","Caja: Acero 316L 42mm","Cristal: Zafiro AR","Resistencia: 10 ATM","Correa: Piel cocodrilo italiana"] },
  { id:13, name:"Collar Perlas Barrocas",    price:350000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    desc:"Perlas de agua dulce, cierre de oro 18k.",
    specs:["Perlas: Agua dulce naturales","Tamaño: 9–11 mm","Cierre: Oro amarillo 18k","Largo: 45 cm ajustable","Certificado: GIA incluido"] },
  { id:14, name:"Perfume 'Ámbar Nuit'",      price:145000, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=800",
    desc:"Ámbar, oud y rosa. Fragancia exclusiva 50ml.",
    specs:["Notas top: Bergamota, Cardamomo","Notas corazón: Rosa búlgara, Oud","Notas base: Ámbar, Sándalo","Tipo: Extrait de Parfum","Volumen: 50 ml"] },
  { id:15, name:"Aretes Diamante Micro",     price:420000, store:"elegance", type:"joyería",
    img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    desc:"0.5ct VVS2, montura de platino.",
    specs:["Piedra: Diamante 0.5ct","Claridad: VVS2","Color: F","Corte: Brillante redondo","Montura: Platino 950"] },
  { id:16, name:"Perfume 'Blanche Iris'",    price:130000, store:"elegance", type:"fragancias",
    img:"https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800",
    desc:"Iris, musgo blanco y sándalo. 30ml.",
    specs:["Notas top: Bergamota, Aldehídos","Notas corazón: Iris florentino","Notas base: Musgo blanco, Sándalo","Tipo: Eau de Parfum","Volumen: 30 ml"] },
];

// Stock simulado
const stockLevels = {};
inventory.forEach(i => { stockLevels[i.id] = Math.floor(Math.random()*8)+2; });

// ─── ESTADO GLOBAL ──────────────────────────────────────────────────────────
let cart        = JSON.parse(localStorage.getItem('lm-cart')     || '[]');
let wishlist    = JSON.parse(localStorage.getItem('lm-wishlist') || '[]');
let recentViews = JSON.parse(localStorage.getItem('lm-recent')  || '[]');

function saveCart()     { localStorage.setItem('lm-cart',     JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('lm-wishlist', JSON.stringify(wishlist)); }
function saveRecent()   { localStorage.setItem('lm-recent',  JSON.stringify(recentViews)); }

// ─── CARRITO ────────────────────────────────────────────────────────────────
function addToCart(id) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty = (existing.qty||1)+1; }
  else { cart.push({...item, qty:1}); }
  saveCart();
  refreshCartUI();
  openCart();
  showToast(item.name + ' añadido', 'success');
  document.querySelectorAll('[data-add-id="'+id+'"]').forEach(btn => {
    btn.classList.add('added');
    setTimeout(()=>btn.classList.remove('added'), 900);
  });
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = (item.qty||1) + delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  refreshCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  refreshCartUI();
  showToast('Eliminado de la bolsa', 'info');
}

function clearCart() {
  if (!confirm('¿Vaciar toda la bolsa?')) return;
  cart = [];
  saveCart();
  refreshCartUI();
  showToast('Bolsa vaciada', 'info');
}

function refreshCartUI() {
  const count = cart.reduce((s,i)=>s+(i.qty||1),0);
  document.querySelectorAll('.cart-count').forEach(el=>{
    el.textContent = count;
    el.classList.add('bump');
    setTimeout(()=>el.classList.remove('bump'),300);
  });

  const wrap = document.getElementById('cart-items-wrap');
  if (!wrap) return;

  const subtitleRow = document.getElementById('cart-subtotal-row');

  if (cart.length===0) {
    wrap.innerHTML='<div class="cart-empty"><div class="cart-empty-icon">◻</div><div>Tu bolsa está vacía</div></div>';
    document.getElementById('cart-total').textContent='0';
    if(subtitleRow) subtitleRow.style.display='none';
    return;
  }
  if(subtitleRow) subtitleRow.style.display='flex';

  let total=0;
  wrap.innerHTML = cart.map(item=>{
    const sub = item.price*(item.qty||1);
    total += sub;
    return '<div class="cart-item">' +
      '<img class="cart-item-img" src="'+item.img+'" alt="'+item.name+'">' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">'+item.name+'</div>' +
        '<div class="cart-item-price">₡'+sub.toLocaleString()+'</div>' +
        '<div class="cart-qty-row">' +
          '<button class="qty-btn" onclick="changeQty('+item.id+',-1)">−</button>' +
          '<span class="qty-val">'+(item.qty||1)+'</span>' +
          '<button class="qty-btn" onclick="changeQty('+item.id+',1)">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="cart-item-remove" onclick="removeFromCart('+item.id+')" title="Eliminar">✕</button>' +
    '</div>';
  }).join('');
  document.getElementById('cart-total').textContent = total.toLocaleString();
}

function openCart()  { document.getElementById('cart-panel').classList.add('open'); document.getElementById('cart-overlay').classList.add('open'); }
function closeCart() { document.getElementById('cart-panel').classList.remove('open'); document.getElementById('cart-overlay').classList.remove('open'); }
function toggleCart(){ document.getElementById('cart-panel').classList.contains('open')?closeCart():openCart(); }

// ─── WHATSAPP ────────────────────────────────────────────────────────────────
function sendWhatsApp() {
  if (!cart.length) { showToast('Tu bolsa está vacía','info'); return; }
  const total = cart.reduce((s,i)=>s+i.price*(i.qty||1),0);
  const lines = cart.map(i=>'• '+i.name+(i.qty>1?' x'+i.qty:'')+'  —  ₡'+(i.price*(i.qty||1)).toLocaleString()).join('\n');
  const msg = '¡Hola! Quiero hacer un pedido 🛍️\n\n'+lines+'\n\n*TOTAL: ₡'+total.toLocaleString()+'*\n\n_Desde Luxury Mall_';
  window.open('https://wa.me/50687443315?text='+encodeURIComponent(msg),'_blank');
}

// ─── WISHLIST ────────────────────────────────────────────────────────────────
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx===-1) { wishlist.push(id); showToast('Guardado en favoritos ♥','success'); }
  else { wishlist.splice(idx,1); showToast('Eliminado de favoritos','info'); }
  saveWishlist();
  refreshWishlistBtns();
}
function refreshWishlistBtns() {
  document.querySelectorAll('[data-wish-id]').forEach(btn=>{
    const id=parseInt(btn.dataset.wishId);
    btn.classList.toggle('wishlisted',wishlist.includes(id));
    btn.textContent = wishlist.includes(id)?'♥':'♡';
  });
}

// ─── RECENT VIEWS ─────────────────────────────────────────────────────────────
function addRecentView(id) {
  recentViews = recentViews.filter(i=>i!==id);
  recentViews.unshift(id);
  if (recentViews.length>5) recentViews = recentViews.slice(0,5);
  saveRecent();
}
function renderRecentViews() {
  const section = document.getElementById('recent-views-section');
  if (!section) return;
  const items = recentViews.map(id=>inventory.find(i=>i.id===id)).filter(Boolean);
  if (!items.length) { section.style.display='none'; return; }
  section.style.display='block';
  const grid = section.querySelector('.recent-grid');
  if (!grid) return;
  grid.innerHTML = items.map(item=>
    '<div class="recent-card" onclick="openModal('+item.id+')">' +
      '<img src="'+item.img+'" alt="'+item.name+'">' +
      '<div class="recent-name">'+item.name+'</div>' +
      '<div class="recent-price">₡'+item.price.toLocaleString()+'</div>' +
    '</div>'
  ).join('');
}

// ─── MODAL DE PRODUCTO ───────────────────────────────────────────────────────
function openModal(id) {
  const item = inventory.find(i=>i.id===id);
  if (!item) return;
  addRecentView(id);
  renderRecentViews();

  const stock = stockLevels[id]||0;
  const inWish = wishlist.includes(id);
  const stockLabel = stock<=2
    ? '<div class="modal-stock urgent">⚠ Solo '+stock+' disponibles — ¡apúrate!</div>'
    : stock<=5
    ? '<div class="modal-stock low">'+stock+' unidades en stock</div>'
    : '<div class="modal-stock ok">✓ En stock</div>';

  const specsHtml = (item.specs||[]).map(s=>
    '<div class="modal-spec-row"><span class="spec-key">'+s.split(':')[0]+'</span><span class="spec-val">'+s.split(':').slice(1).join(':')+'</span></div>'
  ).join('');

  const related = inventory.filter(i=>i.store===item.store&&i.id!==item.id).slice(0,3);
  const relatedHtml = related.map(r=>
    '<div class="related-card" onclick="openModal('+r.id+')">' +
      '<img src="'+r.img+'" alt="'+r.name+'">' +
      '<div class="related-name">'+r.name+'</div>' +
      '<div class="related-price">₡'+r.price.toLocaleString()+'</div>' +
    '</div>'
  ).join('');

  let modal = document.getElementById('product-modal');
  if (!modal) { modal=document.createElement('div'); modal.id='product-modal'; document.body.appendChild(modal); }

  modal.innerHTML =
    '<div class="modal-backdrop" onclick="closeModal()"></div>' +
    '<div class="modal-box">' +
      '<button class="modal-close" onclick="closeModal()">✕</button>' +
      '<div class="modal-inner">' +
        '<div class="modal-left">' +
          '<div class="modal-img-wrap" onclick="zoomImage(this)">' +
            '<img id="modal-main-img" src="'+item.img+'" alt="'+item.name+'">' +
            '<div class="modal-zoom-hint">🔍 Clic para ampliar</div>' +
          '</div>' +
        '</div>' +
        '<div class="modal-right">' +
          '<div class="modal-meta">' +
            '<span class="modal-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>' +
            '<button class="modal-share-btn" onclick="shareProduct('+item.id+')" title="Compartir">↗ COMPARTIR</button>' +
          '</div>' +
          '<h2 class="modal-name">'+item.name+'</h2>' +
          '<div class="modal-price">₡'+item.price.toLocaleString()+'</div>' +
          stockLabel +
          '<p class="modal-desc">'+item.desc+'</p>' +
          (specsHtml?'<div class="modal-specs"><div class="modal-specs-title">ESPECIFICACIONES</div>'+specsHtml+'</div>':'') +
          '<div class="modal-actions">' +
            '<button class="btn-modal-add" data-add-id="'+item.id+'" onclick="addToCart('+item.id+')"><span>AGREGAR A LA BOLSA</span></button>' +
            '<button class="btn-modal-wish '+(inWish?'wishlisted':'')+'" data-wish-id="'+item.id+'" onclick="toggleWishlist('+item.id+')">'+(inWish?'♥':'♡')+'</button>' +
          '</div>' +
          (related.length?'<div class="modal-related"><div class="modal-related-title">MÁS DE ESTA TIENDA</div><div class="related-grid">'+relatedHtml+'</div></div>':'') +
        '</div>' +
      '</div>' +
    '</div>';

  modal.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal() {
  const m = document.getElementById('product-modal');
  if (m) { m.classList.remove('open'); document.body.style.overflow=''; }
}

function zoomImage(wrap) {
  const img = wrap.querySelector('img');
  if (!img) return;
  let zoom = document.getElementById('img-zoom-overlay');
  if (!zoom) {
    zoom = document.createElement('div');
    zoom.id = 'img-zoom-overlay';
    zoom.innerHTML = '<div class="zoom-backdrop" onclick="closeZoom()"></div><img src="'+img.src+'" alt="">';
    document.body.appendChild(zoom);
  }
  zoom.classList.add('open');
}
function closeZoom() {
  const z = document.getElementById('img-zoom-overlay');
  if (z) z.classList.remove('open');
}

function shareProduct(id) {
  const item = inventory.find(i=>i.id===id);
  if (!item) return;
  const text = '¡Mira esto! '+item.name+' — ₡'+item.price.toLocaleString()+' en Luxury Mall 🛍️';
  if (navigator.share) {
    navigator.share({ title: item.name, text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(text+' '+window.location.href);
    showToast('Enlace copiado al portapapeles','success');
  }
}

// ─── BÚSQUEDA EN TIEMPO REAL ─────────────────────────────────────────────────
let _searchTimer = null;
function onSearch(val, storeKey) {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(()=>{
    const q = val.toLowerCase().trim();
    const typeFilter = new URLSearchParams(window.location.search).get('type')||'all';
    let items = inventory.filter(i=>i.store===storeKey&&(typeFilter==='all'||i.type===typeFilter));
    if (q) items = items.filter(i=>i.name.toLowerCase().includes(q)||i.type.toLowerCase().includes(q)||i.desc.toLowerCase().includes(q));
    if (!items.length) {
      document.getElementById('product-grid').innerHTML = '<div class="no-results">Sin resultados para "<em>'+val+'</em>"</div>';
      return;
    }
    renderProducts(items);
  }, 250);
}

// ─── ORDENAR ──────────────────────────────────────────────────────────────────
function sortProducts(val, storeKey) {
  const typeFilter = new URLSearchParams(window.location.search).get('type')||'all';
  let items = inventory.filter(i=>i.store===storeKey&&(typeFilter==='all'||i.type===typeFilter));
  if (val==='price-asc')  items.sort((a,b)=>a.price-b.price);
  if (val==='price-desc') items.sort((a,b)=>b.price-a.price);
  if (val==='name')       items.sort((a,b)=>a.name.localeCompare(b.name));
  if (val==='newest')     items.sort((a,b)=>b.id-a.id);
  renderProducts(items);
}

// ─── RENDER PRODUCTOS ─────────────────────────────────────────────────────────
function renderProducts(items) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = items.map(item=>{
    const stock = stockLevels[item.id]||0;
    const badge = stock<=2
      ? '<div class="stock-badge urgent">¡Últimas '+stock+'!</div>'
      : stock<=5
      ? '<div class="stock-badge low">'+stock+' left</div>' : '';
    const inWish = wishlist.includes(item.id);
    return '<div class="product-card reveal-card" onclick="openModal('+item.id+')">' +
      badge +
      '<button class="wish-btn'+(inWish?' wishlisted':'')+'" data-wish-id="'+item.id+'" onclick="event.stopPropagation();toggleWishlist('+item.id+')">'+(inWish?'♥':'♡')+'</button>' +
      '<div class="product-img-wrap">' +
        '<img src="'+item.img+'" alt="'+item.name+'" loading="lazy">' +
        '<div class="product-img-overlay"><span>VER DETALLES</span></div>' +
      '</div>' +
      '<span class="product-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>' +
      '<div class="product-name">'+item.name+'</div>' +
      '<div class="product-price">₡'+item.price.toLocaleString()+'</div>' +
      '<p class="product-desc">'+item.desc+'</p>' +
      '<button class="add-btn" data-add-id="'+item.id+'" onclick="event.stopPropagation();addToCart('+item.id+')"><span>AGREGAR A LA BOLSA</span></button>' +
    '</div>';
  }).join('');

  initRevealCards();
  refreshWishlistBtns();
}

// ─── BUILD STORE ──────────────────────────────────────────────────────────────
function buildStore(storeKey) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const typeFilter = new URLSearchParams(window.location.search).get('type')||'all';
  document.querySelectorAll('.filter-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.type===typeFilter));
  const items = inventory.filter(i=>i.store===storeKey&&(typeFilter==='all'||i.type===typeFilter));
  if (!items.length) {
    grid.innerHTML='<div class="no-results">Sin productos en esta categoría</div>';
    return;
  }
  renderProducts(items);
  renderRecentViews();
}

function filterStore(type, storeKey) {
  const url = new URL(window.location);
  url.searchParams.set('type', type);
  history.replaceState({},'' ,url);
  buildStore(storeKey);
  const si = document.getElementById('search-input');
  if (si) si.value='';
}

// ─── TOAST PREMIUM ────────────────────────────────────────────────────────────
function showToast(msg, type) {
  type = type||'success';
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id='toast-wrap';
    Object.assign(wrap.style,{position:'fixed',bottom:'32px',right:'32px',zIndex:'99999',display:'flex',flexDirection:'column',gap:'8px'});
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className='toast toast-'+type;
  const icons={success:'✓',info:'·',error:'✕'};
  t.innerHTML='<span class="toast-icon">'+(icons[type]||'·')+'</span><span>'+msg+'</span>';
  wrap.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),400); },2800);
}

// ─── CURSOR ───────────────────────────────────────────────────────────────────
function initCursor() {
  const dot=document.getElementById('cursor-dot');
  const ring=document.getElementById('cursor-ring');
  if (!dot||!ring) return;
  let rx=0,ry=0,mx=0,my=0;
  document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  document.addEventListener('mouseover',e=>{
    if(e.target.closest('a,button,.product-card,.store-card')){
      dot.style.width='14px'; dot.style.height='14px';
      ring.style.width='54px'; ring.style.height='54px';
    }
  });
  document.addEventListener('mouseout',e=>{
    if(e.target.closest('a,button,.product-card,.store-card')){
      dot.style.width=''; dot.style.height='';
      ring.style.width=''; ring.style.height='';
    }
  });
  (function loop(){ rx+=(mx-rx)*0.1; ry+=(my-ry)*0.1; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function initNav() {
  const nav=document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>50),{passive:true});
}

// ─── PARALLAX ────────────────────────────────────────────────────────────────
function initParallax() {
  const bg=document.querySelector('.store-page-bg');
  if (!bg) return;
  window.addEventListener('scroll',()=>{ bg.style.transform='translateY('+(window.scrollY*0.3)+'px) scale(1.1)'; },{passive:true});
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initRevealCards() {
  const observer=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('revealed'),i*55); observer.unobserve(e.target); } });
  },{threshold:0.08});
  document.querySelectorAll('.reveal-card').forEach(c=>observer.observe(c));
}

// ─── PROGRESS BAR ────────────────────────────────────────────────────────────
function initProgressBar() {
  const bar=document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll',()=>{
    const h=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.width=(h>0?(window.scrollY/h)*100:0)+'%';
  },{passive:true});
}

// ─── BACK TO TOP ─────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn=document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll',()=>btn.classList.toggle('visible',window.scrollY>500),{passive:true});
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

// ─── KEYBOARD NAV ────────────────────────────────────────────────────────────
document.addEventListener('keydown',e=>{
  if (e.key==='Escape') { closeModal(); closeZoom(); closeCart(); }
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded',()=>{
  initCursor();
  initNav();
  initParallax();
  initProgressBar();
  initBackToTop();
  refreshCartUI();
  refreshWishlistBtns();
  const body=document.body;
  if (body.dataset.store) buildStore(body.dataset.store);
});
