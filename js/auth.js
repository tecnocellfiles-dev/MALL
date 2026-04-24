// ═══════════════════════════════════════════════════════════
//  AUTH.JS — Autenticación limpia y compatible con admin.html
// ═══════════════════════════════════════════════════════════

(function () {

  // ─── CREDENCIALES ───────────────────────────────────────
  var ADMIN_USER = "admin";
  var ADMIN_PASS = "mall2025";
  // ────────────────────────────────────────────────────────

  var SESSION_KEY = "mall_session";

  function saveSession() {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ role: 'admin', ts: Date.now() }));
  }

  function getSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (Date.now() - s.ts > 8 * 60 * 60 * 1000) {
        localStorage.removeItem(SESSION_KEY);
        return null;
      }
      return s;
    } catch (e) { return null; }
  }

  // ── API global ────────────────────────────────────────
  window.Auth = {
    isAdmin: function () {
      var s = getSession();
      return !!(s && s.role === 'admin');
    },
    login: function (user, pass) {
      if (user.trim() === ADMIN_USER && pass === ADMIN_PASS) {
        saveSession();
        return true;
      }
      return false;
    },
    logout: function () {
      localStorage.removeItem(SESSION_KEY);
      window.location.href = 'index.html';
    }
  };

  // ── Solo actúa en admin.html ───────────────────────────
  var page = location.pathname.split('/').pop() || 'index.html';
  if (page !== 'admin.html') return;

  // Esperar DOM y mostrar login si no hay sesión válida
  function initAdminGate() {
    var session = getSession();
    var loginGate = document.getElementById('login-gate');
    var appLayout = document.getElementById('app-layout');

    if (!loginGate || !appLayout) return; // admin.html no cargó aún

    if (session && session.role === 'admin') {
      // Ya autenticado: mostrar panel
      loginGate.style.display = 'none';
      appLayout.style.display = 'flex';
      var nameEl = document.getElementById('sidebar-user-name');
      if (nameEl) nameEl.textContent = 'Administrador';
      if (typeof initAdmin === 'function') initAdmin();
    } else {
      // Mostrar pantalla de login
      loginGate.style.display = 'flex';
      appLayout.style.display = 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminGate);
  } else {
    initAdminGate();
  }

})();
