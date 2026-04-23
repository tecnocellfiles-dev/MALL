// ═══════════════════════════════════════════════════════════
// MAIN.JS — Luxury Mall · v4 (auto-generado por Admin)
// ═══════════════════════════════════════════════════════════

const DEFAULT_INVENTORY = [
  {
    "id": 1,
    "name": "Saco 'Cielo' Silk-Line",
    "price": 285000,
    "stock": 8,
    "store": "divino",
    "type": "moda",
    "img": "https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800", "isMain": true}],
    "desc": "Saco de seda fría premium, corte estructurado y forro de satén italiano.",
    "specs": {"Material": "Seda fría premium", "Corte": "Slim Fit", "Origen": "Italia"}
  },
  {
    "id": 2,
    "name": "Vestido Gala Nightfall",
    "price": 320000,
    "stock": 3,
    "store": "divino",
    "type": "moda",
    "img": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800", "isMain": true}],
    "desc": "Vestido de alta costura, seda negra profunda con detalles en encaje francés.",
    "specs": {"Silueta": "Sirena", "Tela": "Seda Genuina", "Ocasión": "Gala"}
  },
  {
    "id": 3,
    "name": "MacBook Pro M3 Elite",
    "price": 1850000,
    "stock": 5,
    "store": "family",
    "type": "tech",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800", "isMain": true}],
    "desc": "El pináculo del poder portátil. Chip M3 Pro, 18GB RAM y pantalla Liquid Retina XDR.",
    "specs": {"Chip": "Apple M3 Pro", "RAM": "18GB", "Pantalla": "Liquid Retina XDR"}
  },
  {
    "id": 7,
    "name": "NVIDIA RTX 4090 Lab Edition",
    "price": 1100000,
    "stock": 4,
    "store": "family",
    "type": "tech",
    "img": "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800", "isMain": true}],
    "desc": "24GB GDDR6X de pura potencia. La tarjeta gráfica más rápida del planeta para creadores y gamers.",
    "specs": {"VRAM": "24GB GDDR6X", "Núcleos": "16384 CUDA"}
  },
  {
    "id": 9,
    "name": "iPhone 15 Pro Max Titanium",
    "price": 980000,
    "stock": 6,
    "store": "family",
    "type": "celulares",
    "img": "https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800", "isMain": true}],
    "desc": "Forjado en titanio aeroespacial. Cámara de 48MP y el chip A17 Pro.",
    "specs": {"Material": "Titanio Grado 5", "Chip": "A17 Pro", "Cámara": "48MP Pro"}
  },
  {
    "id": 10,
    "name": "AirPods Pro Max Obsidian",
    "price": 420000,
    "stock": 8,
    "store": "family",
    "type": "accesorios",
    "img": "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800", "isMain": true}],
    "desc": "Cancelación de ruido líder en la industria y audio espacial personalizado.",
    "specs": {"Audio": "Espacial", "Batería": "20 horas", "ANC": "Activa"}
  },
  {
    "id": 11,
    "name": "Monitor OLED 4K Ultrawide",
    "price": 750000,
    "stock": 3,
    "store": "family",
    "type": "tech",
    "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800", "isMain": true}],
    "desc": "Negros infinitos y una tasa de refresco de 175Hz para la experiencia visual definitiva.",
    "specs": {"Panel": "OLED 4K", "Refresco": "175Hz", "HDR": "HDR1000"}
  },
  {
    "id": 12,
    "name": "Sony Alpha A7 IV Kit",
    "price": 1450000,
    "stock": 2,
    "store": "family",
    "type": "tech",
    "img": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    "gallery": [{"url": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800", "isMain": true}],
    "desc": "Cámara Mirrorless Full-Frame de 33MP. El estándar para fotografía y video profesional.",
    "specs": {"Sensor": "33MP Full-Frame", "Video": "4K 60p"}
  },
  {
    "id": 6,
    "name": "Victoria's Secret Amber Romance",
    "price": 12000,
    "stock": 20,
    "store": "divino",
    "type": "fragancias",
    "img": "https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg",
    "gallery": [{"url": "https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg", "isMain": true}],
    "desc": "Ámbar resinoso y crema de vainilla. Una fragancia cálida y seductora.",
    "specs": {"Familia": "Oriental", "Notas": "Ámbar, Vainilla"}
  }
];


function getInventory() {
  // Use admin-saved inventory if available, otherwise use default
  try {
    var saved = localStorage.getItem('admin-inventory');
    if (saved) {
      var parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return DEFAULT_INVENTORY;
}

var inventory = getInventory();
window._inventory = inventory;



var cart = [];
try { cart = JSON.parse(localStorage.getItem('lm-cart') || '[]'); } catch(e) { cart = []; }

function saveCart() { localStorage.setItem('lm-cart', JSON.stringify(cart)); }

function addToCart(id) {
  inventory = getInventory(); window._inventory = inventory;
  var item = inventory.find(function(i) { return i.id === id; });
  if (!item) return;
  var existing = cart.find(function(i) { return i.id === id; });
  if (existing) { existing.qty = (existing.qty || 1) + 1; }
  else { cart.push({ id:item.id, name:item.name, price:item.price, img:item.img, store:item.store, qty:1 }); }
  saveCart(); refreshCartUI(); openCart(); showToast(item.name + ' añadido', 'success');
}

function removeFromCart(id) { cart = cart.filter(function(i){return i.id!==id;}); saveCart(); refreshCartUI(); }
function changeQty(id, delta) {
  var item = cart.find(function(i){return i.id===id;}); if(!item) return;
  item.qty = (item.qty||1) + delta;
  if(item.qty<=0){removeFromCart(id);return;}
  saveCart(); refreshCartUI();
}
function clearCart() { cart=[]; saveCart(); refreshCartUI(); }

function refreshCartUI() {
  var count = cart.reduce(function(s,i){return s+(i.qty||1);},0);
  document.querySelectorAll('.cart-count').forEach(function(el){
    el.textContent=count; el.classList.add('bump'); setTimeout(function(){el.classList.remove('bump');},300);
  });
  var wrap=document.getElementById('cart-items-wrap'); if(!wrap) return;
  if(cart.length===0){
    wrap.innerHTML='<div class="cart-empty"><div class="cart-empty-icon">◻</div><div>Tu bolsa está vacía</div></div>';
    document.querySelectorAll('#cart-total').forEach(function(el){el.textContent='0';}); return;
  }
  var grandTotal=0;
  var html=cart.map(function(item){
    var qty=item.qty||1; var lineTotal=item.price*qty; grandTotal+=lineTotal;
    return '<div class="cart-item">'+
      '<img class="cart-item-img" src="'+item.img+'" alt="'+item.name+'">'+
      '<div class="cart-item-info">'+
        '<div class="cart-item-name">'+item.name+'</div>'+
        '<div class="cart-item-price">₡'+lineTotal.toLocaleString()+'</div>'+
        '<div class="cart-qty-row">'+
          '<button class="qty-btn" onclick="changeQty('+item.id+',-1)">−</button>'+
          '<span class="qty-val">'+qty+'</span>'+
          '<button class="qty-btn" onclick="changeQty('+item.id+',1)">+</button>'+
        '</div></div>'+
      '<button class="cart-item-remove" onclick="removeFromCart('+item.id+')" title="Eliminar">✕</button></div>';
  }).join('');
  wrap.innerHTML=html;
  document.querySelectorAll('#cart-total').forEach(function(el){el.textContent=grandTotal.toLocaleString();});
}

function openCart(){document.getElementById('cart-panel').classList.add('open');var o=document.getElementById('cart-overlay');if(o)o.classList.add('open');}
function closeCart(){document.getElementById('cart-panel').classList.remove('open');var o=document.getElementById('cart-overlay');if(o)o.classList.remove('open');}
function toggleCart(){document.getElementById('cart-panel').classList.contains('open')?closeCart():openCart();}

function sendWhatsApp(){
  if(cart.length===0) return;
  if(window.saveOrderToAccount) window.saveOrderToAccount(cart);
  var total=cart.reduce(function(s,i){return s+i.price*(i.qty||1);},0);
  var lines=cart.map(function(i){var q=i.qty||1;return '• '+i.name+(q>1?' ×'+q:'')+' — ₡'+(i.price*q).toLocaleString();}).join('\n');
  var msg='¡Hola! Quiero hacer un pedido 🛍️\n\n'+lines+'\n\n*TOTAL: ₡'+total.toLocaleString()+'*';
  // Store-specific WhatsApp links
  var waLinks = {
    divino:   'https://api.whatsapp.com/message/LQMOAQKS3LFII1?autoload=1&app_absent=0&utm_source=ig',
    family:   'https://web.whatsapp.com/send?phone=50687443315&text=',
    elegance: 'https://api.whatsapp.com/message/FW6MOU7RBY2LJ1?autoload=1&app_absent=0&utm_source=ig'
  };
  var store = (window._currentStore || document.body.dataset.store || 'family');
  var waBase = waLinks[store] || waLinks.family;
  if (store === 'family') {
    window.open(waBase + encodeURIComponent(msg), '_blank');
  } else {
    window.open(waBase, '_blank');
  }
}

function showToast(msg,type){
  type=type||'info'; var wrap=document.getElementById('toast-wrap');
  if(!wrap){wrap=document.createElement('div');wrap.id='toast-wrap';document.body.appendChild(wrap);}
  var t=document.createElement('div'); t.className='toast toast-'+type;
  t.innerHTML='<span class="toast-icon">'+({success:'✓',info:'◈',error:'✕'}[type]||'◈')+'</span>'+msg;
  wrap.appendChild(t); requestAnimationFrame(function(){t.classList.add('show');});
  setTimeout(function(){t.classList.remove('show');setTimeout(function(){t.remove();},400);},2500);
}
window.showToast=showToast;

function initCursor(){
  if(window.__cursorInit) return;
  window.__cursorInit = true;

  var dot  = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');

  // On touch devices: hide custom cursor elements and do NOT apply cursor:none
  if(window.matchMedia('(pointer:coarse)').matches || !window.matchMedia('(hover:hover)').matches){
    if(dot)  dot.style.display  = 'none';
    if(ring) ring.style.display = 'none';
    // Restore normal cursor for touch users
    document.documentElement.style.cursor = 'auto';
    document.body.style.cursor = 'auto';
    return;
  }

  // Desktop: apply cursor:none to body only, then show custom cursor
  document.body.style.cursor = 'none';

  if(!dot){
    dot = document.createElement('div');
    dot.id = 'cursor-dot'; dot.className = 'cursor-dot';
    document.body.appendChild(dot);
  }
  if(!ring){
    ring = document.createElement('div');
    ring.id = 'cursor-ring'; ring.className = 'cursor-ring';
    document.body.appendChild(ring);
  }
  dot.style.cssText  += 'display:block;position:fixed;pointer-events:none;z-index:99999;';
  ring.style.cssText += 'display:block;position:fixed;pointer-events:none;z-index:99998;';

  var rx = window.innerWidth/2, ry = window.innerHeight/2;
  var mx = rx, my = ry, visible = false;

  document.addEventListener('mousemove', function(e){
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    if(!visible){ visible = true; dot.style.opacity = '1'; ring.style.opacity = '1'; }
  });
  document.addEventListener('mouseleave', function(){
    dot.style.opacity = '0'; ring.style.opacity = '0'; visible = false;
  });
  document.addEventListener('mouseenter', function(){
    if(mx > 0){ dot.style.opacity = '1'; ring.style.opacity = '1'; visible = true; }
  });

  // Hover effect on interactive elements
  var hoverEls = 'a, button, [onclick], .product-card, .store-card, .filter-btn, .add-btn, .wish-btn, .recent-card, .related-card';
  document.addEventListener('mouseover', function(e){
    if(e.target.closest(hoverEls)){
      ring.style.width  = '56px'; ring.style.height = '56px';
      ring.style.borderColor = 'rgba(201,168,76,0.5)';
    }
  });
  document.addEventListener('mouseout', function(e){
    if(e.target.closest(hoverEls)){
      ring.style.width  = '36px'; ring.style.height = '36px';
      ring.style.borderColor = 'rgba(245,240,232,0.6)';
    }
  });

  (function loop(){
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
}

function initNav(){
  var nav=document.querySelector('nav'),btn=document.getElementById('back-to-top'),bar=document.getElementById('progress-bar');
  window.addEventListener('scroll',function(){
    var y=window.scrollY; if(nav)nav.classList.toggle('scrolled',y>50);
    if(btn)btn.classList.toggle('visible',y>400);
    if(bar){var h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(h>0?y/h*100:0)+'%';}
  });
  if(btn)btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
}

function getStockBadge(s){if(s===undefined||s===null)return '';if(s<=0)return '<span class="stock-badge urgent">AGOTADO</span>';if(s<=2)return '<span class="stock-badge urgent">¡ÚLTIMAS '+s+'!</span>';if(s<=5)return '<span class="stock-badge low">POCAS UNIDADES</span>';return '';}
function getStockClass(s){return(!s&&s!==0)||s>5?'ok':s<=2?'urgent':'low';}
function getStockLabel(s){if(s===undefined||s===null)return'Disponible';if(s<=0)return'AGOTADO';if(s<=2)return'¡Últimas '+s+' unidades!';if(s<=5)return'Pocas unidades ('+s+')';return s+' en stock';}

var recentViews=[];try{recentViews=JSON.parse(localStorage.getItem('lm-recent')||'[]');}catch(e){}
function addRecentView(item){recentViews=recentViews.filter(function(i){return i.id!==item.id;});recentViews.unshift({id:item.id,name:item.name,img:item.img,price:item.price,store:item.store});if(recentViews.length>8)recentViews.pop();localStorage.setItem('lm-recent',JSON.stringify(recentViews));}
function renderRecentViews(storeKey){var section=document.getElementById('recent-views-section');if(!section)return;var rel=recentViews.filter(function(i){return i.store===storeKey;}).slice(0,6);if(rel.length<2){section.style.display='none';return;}section.style.display='block';var grid=section.querySelector('.recent-grid');if(grid)grid.innerHTML=rel.map(function(item){return '<div class="recent-card" onclick="openModal('+item.id+')">'+'<img src="'+item.img+'" alt="'+item.name+'" loading="lazy">'+'<div class="recent-name">'+item.name+'</div>'+'<div class="recent-price">₡'+item.price.toLocaleString()+'</div></div>';}).join('');}

// ── GALERÍA EN MODAL ──────────────────────────────────────────────────────────
function getGalleryUrls(item) {
  if (item.gallery && item.gallery.length > 0) return item.gallery.map(function(g){return g.url;});
  return item.img ? [item.img] : [];
}
function getMainImg(item) {
  if (item.gallery && item.gallery.length > 0) {
    var m = item.gallery.find(function(g){return g.isMain;});
    return m ? m.url : item.gallery[0].url;
  }
  return item.img || '';
}

var _modalGallery = [];
var _modalGalleryIdx = 0;

function renderModalGallery(urls, activeIdx) {
  _modalGallery = urls; _modalGalleryIdx = activeIdx;
  var wrap = document.getElementById('modal-gallery-wrap');
  if (!wrap) return;
  var mainImg = urls[activeIdx];
  var thumbsHTML = urls.length > 1
    ? '<div class="modal-thumbs">' +
      urls.map(function(u, i){
        return '<div class="modal-thumb '+(i===activeIdx?'active':'')+'" onclick="switchModalImg('+i+')">'+'<img src="'+u+'" alt="foto '+(i+1)+'"></div>';
      }).join('') +
      '</div>' : '';

  wrap.innerHTML =
    '<div class="modal-img-wrap" id="modal-main-img-wrap" onclick="zoomImg(''+mainImg+'')" style="cursor:zoom-in;">'+
      '<img id="modal-main-img" src="'+mainImg+'" alt="">'+
      '<div class="modal-zoom-hint">CLICK PARA AMPLIAR</div>'+
      (urls.length>1?'<button class="modal-gallery-prev" onclick="event.stopPropagation();switchModalImg('+((activeIdx-1+urls.length)%urls.length)+')">‹</button>'+
                     '<button class="modal-gallery-next" onclick="event.stopPropagation();switchModalImg('+((activeIdx+1)%urls.length)+')">›</button>':'') +
    '</div>' + thumbsHTML;
}

function switchModalImg(idx) {
  _modalGalleryIdx = idx;
  // Actualizar imagen principal
  var img = document.getElementById('modal-main-img');
  if (img) {
    img.style.opacity='0'; img.style.transition='opacity 0.2s';
    setTimeout(function(){ img.src = _modalGallery[idx]; img.style.opacity='1'; }, 180);
  }
  // Actualizar wrap onclick para zoom
  var wrap = document.getElementById('modal-main-img-wrap');
  if (wrap) wrap.setAttribute('onclick', 'zoomImg(''+_modalGallery[idx]+'')');
  // Actualizar prev/next
  var prev = wrap && wrap.querySelector('.modal-gallery-prev');
  var next = wrap && wrap.querySelector('.modal-gallery-next');
  if (prev) prev.setAttribute('onclick', 'event.stopPropagation();switchModalImg('+((idx-1+_modalGallery.length)%_modalGallery.length)+')');
  if (next) next.setAttribute('onclick', 'event.stopPropagation();switchModalImg('+((idx+1)%_modalGallery.length)+')');
  // Actualizar thumbs activos
  document.querySelectorAll('.modal-thumb').forEach(function(t,i){ t.classList.toggle('active',i===idx); });
}

function openModal(id){
  inventory=getInventory();window._inventory=inventory;
  var item=inventory.find(function(i){return i.id===id;});if(!item)return;
  addRecentView(item);if(window._currentStore)renderRecentViews(window._currentStore);

  var favs=window.getFavorites?window.getFavorites():JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
  var inWish=favs.includes(item.id);
  var related=inventory.filter(function(i){return i.store===item.store&&i.type===item.type&&i.id!==item.id;}).slice(0,3);

  var specsHTML='';
  if(item.specs&&Object.keys(item.specs).length>0){
    specsHTML='<div class="modal-specs"><div class="modal-specs-title">ESPECIFICACIONES</div>'+
      Object.entries(item.specs).map(function(p){return '<div class="modal-spec-row"><span class="spec-key">'+p[0]+'</span><span class="spec-val">'+p[1]+'</span></div>';}).join('')+
    '</div>';
  }

  var relatedHTML=related.length>0?'<div class="modal-related"><div class="modal-related-title">TAMBIÉN TE PUEDE GUSTAR</div><div class="related-grid">'+related.map(function(r){return '<div class="related-card" onclick="openModal('+r.id+')">'+'<img src="'+r.img+'" alt="'+r.name+'" loading="lazy">'+'<div class="related-name">'+r.name+'</div>'+'<div class="related-price">₡'+r.price.toLocaleString()+'</div></div>';}).join('')+'</div></div>':'';

  var galleryUrls = getGalleryUrls(item);
  var mainIdx = item.gallery ? item.gallery.findIndex(function(g){return g.isMain;}) : 0;
  if (mainIdx < 0) mainIdx = 0;

  var modal=document.getElementById('product-modal');
  modal.innerHTML=
    '<div class="modal-backdrop" onclick="closeModal()"></div>'+
    '<div class="modal-box">'+
      '<button class="modal-close" onclick="closeModal()">✕</button>'+
      '<div class="modal-inner">'+
        '<div class="modal-left"><div id="modal-gallery-wrap"></div></div>'+
        '<div class="modal-right">'+
          '<div class="modal-meta">'+
            '<span class="modal-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>'+
            '<button class="modal-share-btn" onclick="shareProduct('+item.id+')">COMPARTIR ↗</button>'+
          '</div>'+
          '<div class="modal-name">'+item.name+'</div>'+
          '<div class="modal-price">₡'+item.price.toLocaleString()+'</div>'+
          '<div class="modal-stock '+getStockClass(item.stock)+'">'+getStockLabel(item.stock)+'</div>'+
          '<div class="modal-desc">'+item.desc+'</div>'+
          specsHTML+
          '<div class="modal-actions">'+
            '<button class="btn-modal-add" onclick="addToCart('+item.id+');closeModal()"><span>AGREGAR A LA BOLSA</span></button>'+
            '<button class="btn-modal-wish '+(inWish?'wishlisted':'')+'" data-wish="'+item.id+'" onclick="wishFromModal('+item.id+',this)">♡</button>'+
          '</div>'+
          relatedHTML+
        '</div>'+
      '</div>'+
    '</div>';

  // Inyectar estilos de galería si no existen
  if (!document.getElementById('gallery-modal-styles')) {
    var st = document.createElement('style');
    st.id = 'gallery-modal-styles';
    st.textContent = `
      .modal-thumbs { display:flex; gap:6px; margin-top:10px; flex-wrap:wrap; }
      .modal-thumb { width:56px; height:56px; border:1px solid rgba(245,240,232,0.1); overflow:hidden; cursor:pointer; transition:border-color 0.2s; flex-shrink:0; }
      .modal-thumb img { width:100%; height:100%; object-fit:contain; }
      .modal-thumb.active { border-color:var(--gold,#c9a84c); }
      .modal-thumb:hover { border-color:rgba(201,168,76,0.5); }
      .modal-gallery-prev,.modal-gallery-next {
        position:absolute; top:50%; transform:translateY(-50%);
        background:rgba(8,8,8,0.6); border:1px solid rgba(245,240,232,0.15);
        color:#fff; width:32px; height:32px; font-size:1.2rem;
        cursor:pointer; display:flex; align-items:center; justify-content:center;
        transition:background 0.2s; z-index:3;
      }
      .modal-gallery-prev { left:6px; }
      .modal-gallery-next { right:6px; }
      .modal-gallery-prev:hover,.modal-gallery-next:hover { background:rgba(201,168,76,0.3); }
    `;
    document.head.appendChild(st);
  }

  renderModalGallery(galleryUrls, mainIdx);
  modal.classList.add('open'); document.body.style.overflow='hidden';
}

function wishFromModal(id,btn){var added=window.toggleFavorite?window.toggleFavorite(id):false;btn.classList.toggle('wishlisted',added);showToast(added?'Guardado en favoritos':'Eliminado de favoritos','info');}
function closeModal(){var m=document.getElementById('product-modal');if(m)m.classList.remove('open');document.body.style.overflow='';}
function zoomImg(src){var o=document.getElementById('img-zoom-overlay');if(!o){o=document.createElement('div');o.id='img-zoom-overlay';o.innerHTML='<div class="zoom-backdrop"></div><img>';o.addEventListener('click',function(){o.classList.remove('open');});document.body.appendChild(o);}o.querySelector('img').src=src;o.classList.add('open');}
function shareProduct(id){var item=inventory.find(function(i){return i.id===id;});if(!item)return;if(navigator.share)navigator.share({title:item.name,text:item.name+' — ₡'+item.price.toLocaleString(),url:window.location.href}).catch(function(){});else navigator.clipboard.writeText(item.name+' — ₡'+item.price.toLocaleString()).then(function(){showToast('Copiado','info');}).catch(function(){});}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){closeModal();closeCart();}
  if(e.key==='ArrowLeft'&&_modalGallery.length>1)switchModalImg((_modalGalleryIdx-1+_modalGallery.length)%_modalGallery.length);
  if(e.key==='ArrowRight'&&_modalGallery.length>1)switchModalImg((_modalGalleryIdx+1)%_modalGallery.length);
});

function buildStore(storeKey){
  inventory=getInventory();window._inventory=inventory;window._currentStore=storeKey;
  var params=new URLSearchParams(window.location.search);
  var typeFilter=params.get('type')||'all',searchVal=(params.get('q')||'').toLowerCase(),sortVal=params.get('sort')||'';
  document.querySelectorAll('.filter-btn').forEach(function(btn){btn.classList.toggle('active',btn.dataset.type===typeFilter);});
  var si=document.getElementById('search-input');if(si&&searchVal)si.value=searchVal;
  var filtered=inventory.filter(function(item){
    return item.store===storeKey&&(typeFilter==='all'||item.type===typeFilter)&&
      (!searchVal||item.name.toLowerCase().includes(searchVal)||(item.desc||'').toLowerCase().includes(searchVal)||item.type.toLowerCase().includes(searchVal));
  });
  if(sortVal==='price-asc')filtered.sort(function(a,b){return a.price-b.price;});
  if(sortVal==='price-desc')filtered.sort(function(a,b){return b.price-a.price;});
  if(sortVal==='name')filtered.sort(function(a,b){return a.name.localeCompare(b.name);});
  if(sortVal==='newest')filtered.sort(function(a,b){return b.id-a.id;});
  renderGrid(filtered);renderRecentViews(storeKey);
}

function renderGrid(items){
  var grid=document.getElementById('product-grid');if(!grid)return;
  if(items.length===0){grid.innerHTML='<div class="no-results">Sin productos · <em>prueba con otro filtro</em></div>';return;}
  var favs=window.getFavorites?window.getFavorites():JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
  grid.innerHTML=items.map(function(item){
    var inWish=favs.includes(item.id),hasSpecs=item.specs&&Object.keys(item.specs).length>0;
    var mainImg=getMainImg(item);
    var galleryCount=item.gallery?item.gallery.length:1;
    return '<div class="product-card reveal-card">'+getStockBadge(item.stock)+
      '<button class="wish-btn '+(inWish?'wishlisted':'')+'" data-wish="'+item.id+'" onclick="cardWish('+item.id+',this)" title="Guardar">♡</button>'+
      '<div class="product-img-wrap">'+
        '<img src="'+mainImg+'" alt="'+item.name+'" loading="lazy">'+
        (galleryCount>1?'<div class="product-gallery-dot">📷 '+galleryCount+'</div>':'')+
        '<div class="product-img-overlay" onclick="openModal('+item.id+')"><span>VER DETALLES</span></div>'+
      '</div>'+
      '<span class="product-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>'+
      '<div class="product-name">'+item.name+'</div>'+
      '<div class="product-price">₡'+item.price.toLocaleString()+'</div>'+
      '<p class="product-desc">'+item.desc+'</p>'+
      (hasSpecs?'<button class="add-btn" style="margin-bottom:10px;border-color:rgba(245,240,232,0.1);" onclick="openModal('+item.id+')"><span>VER ESPECIFICACIONES</span></button>':'')+
      '<button class="add-btn" onclick="addToCart('+item.id+')"><span>AGREGAR A LA BOLSA</span></button>'+
    '</div>';
  }).join('');

  // Inyectar estilo de badge de galería si no existe
  if(!document.getElementById('gallery-badge-style')){
    var s=document.createElement('style'); s.id='gallery-badge-style';
    s.textContent='.product-gallery-dot{position:absolute;bottom:8px;right:8px;font-size:0.6rem;background:rgba(8,8,8,0.75);color:rgba(245,240,232,0.7);padding:3px 7px;letter-spacing:1px;pointer-events:none;}';
    document.head.appendChild(s);
  }

  var observer=new IntersectionObserver(function(entries){entries.forEach(function(e,i){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('revealed');},i*55);observer.unobserve(e.target);}});},{threshold:0.06});
  grid.querySelectorAll('.reveal-card').forEach(function(c){observer.observe(c);});
}

function cardWish(id,btn){var added=window.toggleFavorite?window.toggleFavorite(id):false;btn.classList.toggle('wishlisted',added);showToast(added?'Guardado en favoritos':'Eliminado','info');}
function filterStore(type,storeKey){var url=new URL(window.location);url.searchParams.set('type',type);url.searchParams.delete('q');history.replaceState({},'',url);buildStore(storeKey);}
function onSearch(val,storeKey){var url=new URL(window.location);if(val)url.searchParams.set('q',val);else url.searchParams.delete('q');history.replaceState({},'',url);buildStore(storeKey);}
function sortProducts(val,storeKey){var url=new URL(window.location);if(val)url.searchParams.set('sort',val);else url.searchParams.delete('sort');history.replaceState({},'',url);buildStore(storeKey);}

window.addEventListener('DOMContentLoaded',function(){
  initCursor();initNav();refreshCartUI();
  if(document.body.dataset.store)buildStore(document.body.dataset.store);
});
