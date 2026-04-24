// ═══════════════════════════════════════════════════════════
// AUTH.JS — Sistema de usuarios + notificaciones EmailJS
// ═══════════════════════════════════════════════════════════

(function() {

// ─── EMAILJS CONFIG ──────────────────────────────────────
// 1. Ve a https://www.emailjs.com y crea una cuenta gratis
// 2. Crea un servicio Gmail y una plantilla
// 3. Llena las variables de abajo con tus datos
const EMAILJS_PUBLIC_KEY  = 'TU_PUBLIC_KEY';   // En Account > General
const EMAILJS_SERVICE_ID  = 'TU_SERVICE_ID';   // En Email Services
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';  // En Email Templates
const ADMIN_NOTIFY_EMAIL  = 'jydtecnocell@gmail.com'; // Tu correo personal

// ─── CREDENCIALES ADMIN ──────────────────────────────────
const ADMIN_EMAIL = '0000';
const ADMIN_PASS  = '0000';
const ADMIN_CODE  = '0000';

// ─── CONFIG ──────────────────────────────────────────────
const STORE_KEY   = 'lm-users';
const SESSION_KEY = 'lm-session';

let users   = JSON.parse(localStorage.getItem(STORE_KEY)   || '{}');
let session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');

function saveUsers()   { localStorage.setItem(STORE_KEY,   JSON.stringify(users)); }
function saveSession() { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); }
function currentUser() { return session ? users[session.email] : null; }
function isAdmin()     { const u = currentUser(); return u && u.role === 'admin'; }

// ─── PRE-SEED ADMIN (siempre disponible) ─────────────────
if (!users[ADMIN_EMAIL]) {
  users[ADMIN_EMAIL] = {
    name: 'Administrador JyD',
    email: ADMIN_EMAIL,
    password: btoa(ADMIN_PASS),
    role: 'admin',
    orders: [], favorites: [],
    joined: new Date().toLocaleDateString('es-CR')
  };
  saveUsers();
}

// ─── EMAILJS: cargar SDK ──────────────────────────────────
function loadEmailJS(cb) {
  if (window.emailjs) { cb(); return; }
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  s.onload = function() { window.emailjs.init(EMAILJS_PUBLIC_KEY); cb(); };
  document.head.appendChild(s);
}

function sendRegistrationEmail(name, email, role) {
  if (EMAILJS_PUBLIC_KEY === 'TU_PUBLIC_KEY') return; // no configurado
  loadEmailJS(function() {
    window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email:   ADMIN_NOTIFY_EMAIL,
      from_name:  name,
      from_email: email,
      user_role:  role === 'admin' ? 'ADMINISTRADOR' : 'Cliente',
      date:       new Date().toLocaleString('es-CR'),
      reply_to:   email
    }).catch(function(e) { console.warn('EmailJS error:', e); });
  });
}

// ─── HISTORIAL DE PEDIDOS ─────────────────────────────────
function saveOrder(cart) {
  if (!session) return;
  const u = users[session.email]; if (!u) return;
  if (!u.orders) u.orders = [];
  const total = cart.reduce((s,i) => s + i.price*(i.qty||1), 0);
  u.orders.unshift({ id: Date.now(), date: new Date().toLocaleDateString('es-CR'), items: cart.map(i=>({name:i.name,qty:i.qty||1,price:i.price})), total });
  if (u.orders.length > 20) u.orders = u.orders.slice(0,20);
  saveUsers();
}
window.saveOrderToAccount = saveOrder;

// ─── FAVORITOS ────────────────────────────────────────────
function getFavorites() {
  const u = currentUser();
  return u ? (u.favorites||[]) : JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
}
function toggleFavorite(id) {
  if (session) {
    const u = users[session.email];
    if (!u.favorites) u.favorites = [];
    const idx = u.favorites.indexOf(id);
    if (idx===-1) u.favorites.push(id); else u.favorites.splice(idx,1);
    saveUsers(); syncFavoriteBadges(); return idx===-1;
  } else {
    let favs = JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
    const idx = favs.indexOf(id);
    if (idx===-1) favs.push(id); else favs.splice(idx,1);
    localStorage.setItem('lm-wishlist', JSON.stringify(favs));
    syncFavoriteBadges(); return idx===-1;
  }
}
window.toggleFavorite   = toggleFavorite;
window.getFavorites     = getFavorites;

function syncFavoriteBadges() {
  const favs = getFavorites();
  document.querySelectorAll('[data-wish]').forEach(btn => {
    btn.classList.toggle('wishlisted', favs.includes(Number(btn.dataset.wish)));
  });
}
window.syncFavoriteBadges = syncFavoriteBadges;

// ─── ESTILOS ──────────────────────────────────────────────
const css = `
.auth-btn { display:flex;align-items:center;gap:8px;font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;background:none;border:1px solid rgba(245,240,232,0.1);color:rgba(245,240,232,0.6);padding:9px 16px;cursor:pointer;transition:0.3s;white-space:nowrap;position:relative; }
.auth-btn:hover { border-color:var(--gold);color:var(--gold); }
.auth-btn .auth-avatar { width:22px;height:22px;border-radius:50%;background:var(--gold);color:#000;font-size:0.6rem;font-weight:700;letter-spacing:0;display:flex;align-items:center;justify-content:center; }
.auth-btn .admin-dot { width:7px;height:7px;border-radius:50%;background:#00e5ff;position:absolute;top:6px;right:6px; }
#auth-overlay { position:fixed;inset:0;z-index:9500;display:flex;align-items:flex-start;justify-content:flex-end;padding-top:72px;padding-right:6%;pointer-events:none;opacity:0;transition:opacity 0.25s; }
#auth-overlay.open { opacity:1;pointer-events:all; }
.auth-panel { width:min(380px,95vw);background:#0e0e0e;border:1px solid rgba(245,240,232,0.1);box-shadow:0 24px 80px rgba(0,0,0,0.8);transform:translateY(-10px);transition:transform 0.3s;max-height:85vh;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.08) transparent; }
#auth-overlay.open .auth-panel { transform:translateY(0); }
.auth-panel-head { padding:28px 28px 20px;border-bottom:1px solid rgba(245,240,232,0.07);display:flex;justify-content:space-between;align-items:center; }
.auth-panel-title { font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:4px;color:var(--gold); }
.auth-close { background:none;border:none;color:rgba(245,240,232,0.3);font-size:1.1rem;cursor:pointer;transition:color 0.2s;padding:4px; }
.auth-close:hover { color:var(--white); }
.auth-tabs { display:flex;border-bottom:1px solid rgba(245,240,232,0.07); }
.auth-tab { flex:1;padding:12px;background:none;border:none;font-size:0.6rem;letter-spacing:3px;text-transform:uppercase;color:rgba(245,240,232,0.3);cursor:pointer;transition:0.2s;border-bottom:2px solid transparent;margin-bottom:-1px; }
.auth-tab.active { color:var(--gold);border-bottom-color:var(--gold); }
.auth-body { padding:24px 28px 28px; }
.auth-field { margin-bottom:14px; }
.auth-label { display:block;font-size:0.6rem;letter-spacing:3px;text-transform:uppercase;color:rgba(245,240,232,0.3);margin-bottom:6px; }
.auth-input { width:100%;background:rgba(245,240,232,0.04);border:1px solid rgba(245,240,232,0.1);color:var(--white);padding:10px 14px;font-family:'DM Sans',sans-serif;font-size:0.85rem;outline:none;transition:border-color 0.2s; }
.auth-input:focus { border-color:rgba(245,240,232,0.25); }
.auth-submit { width:100%;padding:13px;background:var(--gold);color:#000;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:0.65rem;font-weight:700;letter-spacing:4px;text-transform:uppercase;transition:0.2s;margin-top:4px; }
.auth-submit:hover { background:var(--gold-light,#f0d080); }
.auth-error { font-size:0.72rem;color:#e05050;margin-top:10px;padding:8px 12px;background:rgba(224,80,80,0.08);border:1px solid rgba(224,80,80,0.2);display:none; }
.auth-hint { font-size:0.65rem;color:rgba(245,240,232,0.25);margin-top:10px;line-height:1.6;text-align:center; }
.auth-user-head { padding:24px 28px 20px;display:flex;align-items:center;gap:16px; }
.auth-user-avatar { width:44px;height:44px;border-radius:50%;background:var(--gold);color:#000;font-size:1rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
.auth-user-avatar.admin-avatar { background:#00e5ff; }
.auth-user-name { font-size:0.9rem;font-weight:500;margin-bottom:3px; }
.auth-user-role { font-size:0.58rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold); }
.auth-user-role.role-admin { color:#00e5ff; }
.auth-menu { padding:0 28px 8px; }
.auth-menu-item { display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid rgba(245,240,232,0.05);font-size:0.78rem;color:rgba(245,240,232,0.55);cursor:pointer;transition:color 0.2s;background:none;border-left:none;border-right:none;border-top:none;width:100%;text-align:left; }
.auth-menu-item:hover { color:var(--white); }
.auth-menu-item .item-icon { font-size:1rem;width:20px;text-align:center; }
.auth-menu-item.admin-link { color:#00e5ff; }
.auth-menu-item.admin-link:hover { color:#80f4ff; }
.auth-logout { display:block;width:calc(100% - 56px);margin:16px 28px 24px;padding:11px;background:none;border:1px solid rgba(245,240,232,0.1);color:rgba(245,240,232,0.3);font-size:0.6rem;letter-spacing:3px;text-transform:uppercase;cursor:pointer;transition:0.2s; }
.auth-logout:hover { border-color:#e05050;color:#e05050; }
.auth-orders,.auth-favs { padding:0 28px 24px; }
.auth-section-title { font-size:0.58rem;letter-spacing:4px;text-transform:uppercase;color:rgba(245,240,232,0.25);margin-bottom:14px;margin-top:4px; }
.order-card { background:rgba(245,240,232,0.03);border:1px solid rgba(245,240,232,0.07);padding:14px;margin-bottom:8px; }
.order-head { display:flex;justify-content:space-between;margin-bottom:8px; }
.order-date { font-size:0.65rem;color:rgba(245,240,232,0.3);letter-spacing:1px; }
.order-total { font-family:'Bebas Neue',sans-serif;font-size:1rem;color:var(--gold);letter-spacing:2px; }
.order-item { font-size:0.72rem;color:rgba(245,240,232,0.45);padding:3px 0; }
.fav-item { display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(245,240,232,0.05);cursor:pointer;transition:opacity 0.2s; }
.fav-item:hover { opacity:0.75; }
.fav-item img { width:44px;height:44px;object-fit:contain;background:rgba(245,240,232,0.04);border:1px solid rgba(245,240,232,0.08); }
.fav-name { font-size:0.78rem;flex:1;line-height:1.3; }
.fav-price { font-family:'Bebas Neue',sans-serif;font-size:0.9rem;color:var(--gold);letter-spacing:1px; }
.no-favs { font-size:0.72rem;color:rgba(245,240,232,0.25);text-align:center;padding:20px 0;letter-spacing:2px; }
#auth-backdrop { position:fixed;inset:0;z-index:9499;display:none; }
#auth-backdrop.open { display:block; }
.nav-admin-badge { font-size:0.55rem;letter-spacing:2px;background:rgba(0,229,255,0.12);border:1px solid rgba(0,229,255,0.3);color:#00e5ff;padding:3px 8px;text-transform:uppercase; }
`;
const styleEl = document.createElement('style');
styleEl.textContent = css;
document.head.appendChild(styleEl);

// ─── NAV BUTTON ───────────────────────────────────────────
function injectNavButton() {
  const navRight = document.querySelector('.nav-right');
  if (!navRight || document.getElementById('auth-nav-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'auth-nav-btn'; btn.className = 'auth-btn';
  btn.onclick = toggleAuthPanel;
  navRight.appendChild(btn);
  updateNavButton();
}

function updateNavButton() {
  const btn = document.getElementById('auth-nav-btn'); if (!btn) return;
  const u = currentUser();
  if (u) {
    const initials = u.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
    btn.innerHTML = `<span class="auth-avatar ${u.role==='admin'?'admin-avatar':''}">${initials}</span>${u.name.split(' ')[0]}${u.role==='admin'?'<span class="admin-dot"></span>':''}`;
  } else {
    btn.innerHTML = '◎ CUENTA';
  }
}

// ─── PANEL ────────────────────────────────────────────────
let panelOpen = false;
let currentView = 'main';

function toggleAuthPanel() { panelOpen ? closeAuthPanel() : openAuthPanel(); }
function openAuthPanel() {
  panelOpen = true; currentView = 'main'; renderPanel();
  const o = document.getElementById('auth-overlay');
  const b = document.getElementById('auth-backdrop');
  if (o) o.classList.add('open'); if (b) b.classList.add('open');
}
function closeAuthPanel() {
  panelOpen = false;
  const o = document.getElementById('auth-overlay');
  const b = document.getElementById('auth-backdrop');
  if (o) o.classList.remove('open'); if (b) b.classList.remove('open');
}
window.closeAuthPanel = closeAuthPanel;

function renderPanel() {
  const overlay = document.getElementById('auth-overlay'); if (!overlay) return;
  const u = currentUser();
  overlay.innerHTML = `<div class="auth-panel">${u ? renderLoggedIn(u) : renderLoginForm()}</div>`;
  attachPanelEvents();
}

function renderLoggedIn(u) {
  const initials = u.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  if (currentView==='orders') return renderOrders(u);
  if (currentView==='favs')   return renderFavs(u);
  return `
    <div class="auth-panel-head">
      <div class="auth-panel-title">MI CUENTA</div>
      <button class="auth-close" onclick="closeAuthPanel()">✕</button>
    </div>
    <div class="auth-user-head">
      <div class="auth-user-avatar ${u.role==='admin'?'admin-avatar':''}">${initials}</div>
      <div>
        <div class="auth-user-name">${u.name}</div>
        <div class="auth-user-role ${u.role==='admin'?'role-admin':''}">${u.role==='admin'?'◈ ADMINISTRADOR':'◎ CLIENTE'}</div>
        <div style="font-size:0.65rem;color:rgba(245,240,232,0.25);margin-top:2px;">${u.email}</div>
      </div>
    </div>
    <div class="auth-menu">
      <button class="auth-menu-item" onclick="authView('orders')">
        <span class="item-icon">◳</span> Mis Pedidos <span style="margin-left:auto;font-family:'Bebas Neue';font-size:0.9rem;color:var(--gold);">${(u.orders||[]).length}</span>
      </button>
      <button class="auth-menu-item" onclick="authView('favs')">
        <span class="item-icon">♡</span> Favoritos <span style="margin-left:auto;font-family:'Bebas Neue';font-size:0.9rem;color:var(--gold);">${getFavorites().length}</span>
      </button>
      ${u.role==='admin'?`<button class="auth-menu-item admin-link" onclick="window.open('admin.html','_blank');closeAuthPanel()"><span class="item-icon">⚙</span> Panel de Administración →</button>`:''}
    </div>
    <button class="auth-logout" onclick="authLogout()">CERRAR SESIÓN</button>`;
}

function renderOrders(u) {
  const orders = u.orders||[];
  return `
    <div class="auth-panel-head">
      <button class="auth-close" onclick="authView('main')" style="font-size:0.7rem;letter-spacing:2px;color:rgba(245,240,232,0.4);">← VOLVER</button>
      <button class="auth-close" onclick="closeAuthPanel()">✕</button>
    </div>
    <div class="auth-orders">
      <div class="auth-section-title">HISTORIAL DE PEDIDOS</div>
      ${orders.length===0?'<div class="no-favs">Sin pedidos aún</div>':orders.map(o=>`
        <div class="order-card">
          <div class="order-head"><span class="order-date">${o.date}</span><span class="order-total">₡${o.total.toLocaleString()}</span></div>
          ${o.items.map(i=>`<div class="order-item">${i.qty>1?i.qty+'× ':''}${i.name}</div>`).join('')}
        </div>`).join('')}
    </div>`;
}

function renderFavs(u) {
  const favIds = getFavorites();
  const inv = window._inventory||[];
  const favItems = inv.filter(i=>favIds.includes(i.id));
  return `
    <div class="auth-panel-head">
      <button class="auth-close" onclick="authView('main')" style="font-size:0.7rem;letter-spacing:2px;color:rgba(245,240,232,0.4);">← VOLVER</button>
      <button class="auth-close" onclick="closeAuthPanel()">✕</button>
    </div>
    <div class="auth-favs">
      <div class="auth-section-title">MIS FAVORITOS</div>
      ${favItems.length===0?'<div class="no-favs">Sin favoritos aún</div>':favItems.map(item=>`
        <div class="fav-item" onclick="if(window.openModal)openModal(${item.id});closeAuthPanel()">
          <img src="${item.img}" alt="${item.name}">
          <span class="fav-name">${item.name}</span>
          <span class="fav-price">₡${item.price.toLocaleString()}</span>
        </div>`).join('')}
    </div>`;
}

function loginFormHTML() {
  return `
    <div class="auth-field">
      <label class="auth-label">Correo electrónico</label>
      <input class="auth-input" type="email" id="auth-email" placeholder="tucorreo@gmail.com" onkeydown="if(event.key==='Enter')doAuthLogin()">
    </div>
    <div class="auth-field">
      <label class="auth-label">Contraseña</label>
      <input class="auth-input" type="password" id="auth-pass" placeholder="••••••••" onkeydown="if(event.key==='Enter')doAuthLogin()">
    </div>
    <div class="auth-error" id="auth-error"></div>
    <button class="auth-submit" onclick="doAuthLogin()">INGRESAR</button>`;
}

function registerFormHTML() {
  return `
    <div class="auth-field">
      <label class="auth-label">Nombre completo</label>
      <input class="auth-input" type="text" id="auth-name" placeholder="Tu nombre">
    </div>
    <div class="auth-field">
      <label class="auth-label">Correo electrónico</label>
      <input class="auth-input" type="email" id="auth-email" placeholder="tucorreo@gmail.com">
    </div>
    <div class="auth-field">
      <label class="auth-label">Contraseña</label>
      <input class="auth-input" type="password" id="auth-pass" placeholder="Mínimo 6 caracteres" onkeydown="if(event.key==='Enter')doAuthRegister()">
    </div>
    <div class="auth-field">
      <label class="auth-label">Código admin <span style="color:rgba(245,240,232,0.2);font-size:0.55rem;">(opcional)</span></label>
      <input class="auth-input" type="text" id="auth-code" placeholder="Déjalo vacío si eres cliente">
    </div>
    <div class="auth-error" id="auth-error"></div>
    <button class="auth-submit" onclick="doAuthRegister()">CREAR CUENTA</button>
    <div class="auth-hint">Si tienes un código de administrador,<br>ingrésalo para obtener acceso completo.</div>`;
}

function renderLoginForm() {
  return `
    <div class="auth-panel-head">
      <div class="auth-panel-title">BIENVENIDO</div>
      <button class="auth-close" onclick="closeAuthPanel()">✕</button>
    </div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">INGRESAR</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">REGISTRO</button>
    </div>
    <div class="auth-body" id="auth-form-body">${loginFormHTML()}</div>`;
}

function attachPanelEvents() {}

// ─── FUNCIONES GLOBALES ───────────────────────────────────
window.authView = function(view) { currentView = view; renderPanel(); };

window.switchTab = function(tab) {
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
  const el = document.getElementById('tab-'+tab); if(el) el.classList.add('active');
  const body = document.getElementById('auth-form-body');
  if(body) body.innerHTML = tab==='login' ? loginFormHTML() : registerFormHTML();
};

window.doAuthLogin = function() {
  const email = (document.getElementById('auth-email')?.value||'').trim().toLowerCase();
  const pass  = document.getElementById('auth-pass')?.value||'';
  const errEl = document.getElementById('auth-error');
  if (!email||!pass) { showErr(errEl,'Completa todos los campos'); return; }
  const u = users[email];
  if (!u) { showErr(errEl,'Correo no registrado'); return; }
  if (u.password !== btoa(pass)) { showErr(errEl,'Contraseña incorrecta'); return; }
  session = { email }; saveSession(); closeAuthPanel(); updateNavButton();
  if (window.showToast) window.showToast('Bienvenido, '+u.name.split(' ')[0]+' 👋','success');
};

window.doAuthRegister = function() {
  const name  = (document.getElementById('auth-name')?.value||'').trim();
  const email = (document.getElementById('auth-email')?.value||'').trim().toLowerCase();
  const pass  = document.getElementById('auth-pass')?.value||'';
  const code  = (document.getElementById('auth-code')?.value||'').trim();
  const errEl = document.getElementById('auth-error');
  if (!name||!email||!pass) { showErr(errEl,'Completa todos los campos'); return; }
  if (pass.length < 6) { showErr(errEl,'Contraseña mínimo 6 caracteres'); return; }
  if (users[email]) { showErr(errEl,'Ese correo ya está registrado'); return; }
  if (code && code !== ADMIN_CODE) { showErr(errEl,'Código de administrador inválido'); return; }
  const role = (code===ADMIN_CODE) ? 'admin' : 'client';
  users[email] = { name, email, password: btoa(pass), role, orders:[], favorites:[], joined: new Date().toLocaleDateString('es-CR') };
  saveUsers();
  session = { email }; saveSession(); closeAuthPanel(); updateNavButton();
  if (window.showToast) window.showToast('Cuenta creada. ¡Bienvenido'+(role==='admin'?' administrador':'')+', '+name.split(' ')[0]+'!','success');
  // Notificar al admin por email
  sendRegistrationEmail(name, email, role);
};

window.authLogout = function() {
  session = null; localStorage.removeItem(SESSION_KEY);
  closeAuthPanel(); updateNavButton();
  if (window.showToast) window.showToast('Sesión cerrada','info');
};

function showErr(el, msg) {
  if (!el) return; el.textContent = msg; el.style.display = 'block';
  setTimeout(()=>{ if(el) el.style.display='none'; }, 3500);
}

// ─── INYECTAR DOM ─────────────────────────────────────────
function injectContainers() {
  if (!document.getElementById('auth-overlay')) {
    const o = document.createElement('div'); o.id = 'auth-overlay';
    document.body.appendChild(o);
  }
  if (!document.getElementById('auth-backdrop')) {
    const b = document.createElement('div'); b.id = 'auth-backdrop';
    b.onclick = closeAuthPanel; document.body.appendChild(b);
  }
}

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  injectContainers();
  injectNavButton();
  window.authIsAdmin     = isAdmin;
  window.authCurrentUser = currentUser;
});

})();
