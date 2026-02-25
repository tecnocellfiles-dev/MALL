let cart = [];
let total = 0;
const allProducts = {};

// USAMOS IMÁGENES QUE SÍ EXISTEN
const baseModels = [
    { brand: 'HP Pavilion Master', price: 235000, img: 'https://intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg' },
    { brand: 'ASUS Vivobook Gold', price: 385000, img: 'https://intelec.co.cr/wp-content/uploads/2023/10/ASUS-X1404VA.jpg' },
    { brand: 'MSI Cyborg Gamer', price: 795000, img: 'https://intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg' },
    { brand: 'Dell Inspiron Series', price: 295000, img: 'https://intelec.co.cr/wp-content/uploads/2023/05/DELL-INSPIRON-3535.jpg' }
];

function initStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    grid.innerHTML = ""; // Limpiar

    for (let i = 1; i <= 59; i++) {
        const base = baseModels[i % baseModels.length];
        const id = `lap-${i}`;
        const finalPrice = base.price + (i * 1300);
        
        allProducts[id] = {
            title: `${base.brand} #${i + 100}`,
            img: base.img,
            price: finalPrice,
            specs: [['RAM', '16GB DDR4'], ['SSD', '512GB NVMe'], ['Garantía', '12 Meses']]
        };

        grid.innerHTML += `
            <div class="product-card-premium">
                <div class="product-img-box" onclick="openSpecs('${id}')">
                    <img src="${base.img}" onerror="this.src='https://via.placeholder.com/300x200?text=Laptop+Premium'">
                </div>
                <h3>${allProducts[id].title}</h3>
                <span class="price">₡${finalPrice.toLocaleString('es-CR')}</span>
                <button class="btn-add" onclick="openSpecs('${id}')">VER DETALLES</button>
            </div>
        `;
    }
}

function openSpecs(id) {
    const item = allProducts[id];
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${item.img}" style="width:120px; margin-bottom:15px">
        <h2 style="color:var(--accent)">${item.title}</h2>
        <ul style="list-style:none; padding:0; text-align:left; margin:20px 0">
            ${item.specs.map(s => `<li style="border-bottom:1px solid #222; padding:5px 0; display:flex; justify-content:space-between">
                ${s[0]}: <span style="color:var(--accent)">${s[1]}</span>
            </li>`).join('')}
        </ul>
        <button class="btn-add" onclick="addToCart('${item.title}', ${item.price}); closeSpecs();">AÑADIR A LA BOLSA</button>
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
        <div style="display:flex; justify-content:space-between; padding:8px; border-bottom:1px solid #222; font-size:0.8rem">
            <span>${i.name}</span><span>₡${i.price.toLocaleString('es-CR')}</span>
        </div>
    `).join('');
}

function sendOrder() {
    if(cart.length === 0) return;
    let msg = "*NUEVO PEDIDO LUXURY MALL*%0A";
    cart.forEach(i => msg += `- ${i.name} (₡${i.price.toLocaleString()})%0A`);
    msg += `%0A*TOTAL: ₡${total.toLocaleString()}*`;
    window.open(`https://wa.me/506XXXXXXXX?text=${msg}`, '_blank'); // TU NÚMERO AQUÍ
}

window.onload = initStore;
