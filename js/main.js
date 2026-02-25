let cart = [];
let total = 0;
const allProducts = {};

// 1. Modelos Base (Intelec Inventory)
const baseModels = [
    { brand: 'HP EliteBook Pro', price: 235000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg', cpu: 'Intel i3-N305' },
    { brand: 'ASUS Vivobook Ultra', price: 385000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/10/ASUS-X1404VA.jpg', cpu: 'Intel i7-1355U' },
    { brand: 'MSI Cyborg Gamer', price: 795000, img: 'https://www.intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg', cpu: 'NVIDIA RTX 4060' },
    { brand: 'Dell Inspiron 3535', price: 295000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/05/DELL-INSPIRON-3535.jpg', cpu: 'AMD Ryzen 5' },
    { brand: 'Lenovo IdeaPad Slim', price: 315000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/09/82VG00BJUS.jpg', cpu: 'AMD Ryzen 3' }
];

// 2. Generador de Inventario (59 Productos)
function initStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    for (let i = 1; i <= 59; i++) {
        const base = baseModels[i % baseModels.length];
        const id = `laptop-${i}`;
        const finalPrice = base.price + (i * 1200); // Variación de precio para reventa
        
        allProducts[id] = {
            title: `${base.brand} Ver. ${i + 200}`,
            img: base.img,
            price: finalPrice,
            specs: [['Procesador', base.cpu], ['Memoria', i % 2 === 0 ? '16GB RAM' : '8GB RAM'], ['Almacenamiento', '512GB SSD'], ['Garantía', '12 Meses']]
        };

        grid.innerHTML += `
            <div class="product-card-premium">
                <div class="product-img-box" onclick="openSpecs('${id}')">
                    <img src="${base.img}" alt="Laptop">
                </div>
                <h3>${allProducts[id].title}</h3>
                <span class="price">₡${finalPrice.toLocaleString('es-CR')}</span>
                <button class="btn-add" onclick="openSpecs('${id}')">VER DETALLES</button>
            </div>
        `;
    }
}

// 3. Funciones de Interfaz
function openSpecs(id) {
    const item = allProducts[id];
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${item.img}" style="width:140px; margin-bottom:15px">
        <h2 style="color:var(--accent); font-family:Syncopate">${item.title}</h2>
        <ul class="specs-list">
            ${item.specs.map(s => `<li>${s[0]}: <span>${s[1]}</span></li>`).join('')}
        </ul>
        <button class="btn-add" onclick="addToCart('${item.title}', ${item.price}); closeSpecs();">AÑADIR - ₡${item.price.toLocaleString('es-CR')}</button>
    `;
    document.getElementById('specs-modal').style.display = 'flex';
}

function closeSpecs() { document.getElementById('specs-modal').style.display = 'none'; }
function toggleCart() { document.getElementById('side-cart').classList.toggle('active'); }

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
    if(!document.getElementById('side-cart').classList.contains('active')) toggleCart();
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total.toLocaleString('es-CR');
    document.getElementById('cart-items').innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; padding:10px; background:#111; border-radius:5px">
            <span style="font-size:0.8rem">${i.name}</span>
            <span style="color:var(--accent); font-weight:bold">₡${i.price.toLocaleString('es-CR')}</span>
        </div>
    `).join('');
}

// 4. Envío de Pedido Profesional
function sendOrder() {
    if(cart.length === 0) return alert("Tu bolsa está vacía");
    let msg = "*NUEVO PEDIDO - LUXURY MALL*%0A%0A";
    cart.forEach(i => msg += `- ${i.name} (₡${i.price.toLocaleString('es-CR')})%0A`);
    msg += `%0A*TOTAL FINAL: ₡${total.toLocaleString('es-CR')}*`;
    
    const phoneNumber = "506XXXXXXXX"; // <-- CAMBIA ESTO POR TU CELULAR
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
}

window.onload = initStore;

function closeSpecs() {
    document.getElementById('specs-modal').style.display = 'none';

}
