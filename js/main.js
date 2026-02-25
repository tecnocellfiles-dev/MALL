let cart = [];
let total = 0;

// BASE DE DATOS DE PRODUCTOS
const productSpecs = {
    'hp': {
        title: 'HP Elite Book 15"',
        img: 'https://www.intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg',
        price: 235000,
        desc: [['Procesador', 'Intel Core i3'], ['Memoria', '8GB RAM'], ['Pantalla', '15.6" Touch']]
    },
    'asus': {
        title: 'ASUS Pro-Stream 14',
        img: 'https://www.intelec.co.cr/wp-content/uploads/2023/10/ASUS-X1404VA.jpg',
        price: 385000,
        desc: [['Procesador', 'Intel Core i7'], ['Memoria', '12GB RAM'], ['Disco', '512GB SSD']]
    },
    'msi': {
        title: 'MSI Cyborg Gaming Z',
        img: 'https://www.intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg',
        price: 795000,
        desc: [['Gráfica', 'RTX 4060'], ['Pantalla', '144Hz'], ['RAM', '16GB DDR5']]
    },
    'dell': {
        title: 'Dell Inspiron Ultra',
        img: 'https://www.intelec.co.cr/wp-content/uploads/2023/05/DELL-INSPIRON-3535.jpg',
        price: 295000,
        desc: [['Procesador', 'Ryzen 5'], ['SSD', '512GB'], ['OS', 'Windows 11']]
    }
};

function toggleCart() { document.getElementById('side-cart').classList.toggle('active'); }

function openSpecs(id) {
    const item = productSpecs[id];
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${item.img}" style="width:150px; margin-bottom:20px">
        <h2 style="color:var(--accent)">${item.title}</h2>
        <ul class="specs-list">
            ${item.desc.map(d => `<li>${d[0]}: <span>${d[1]}</span></li>`).join('')}
        </ul>
        <button class="btn-add" onclick="addToCart('${item.title}', ${item.price}); closeSpecs();">AÑADIR - ₡${item.price.toLocaleString()}</button>
    `;
    document.getElementById('specs-modal').style.display = 'flex';
}

function closeSpecs() { document.getElementById('specs-modal').style.display = 'none'; }

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
    if(!document.getElementById('side-cart').classList.contains('active')) toggleCart();
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total').innerText = total.toLocaleString();
    const list = document.getElementById('cart-items');
    list.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #111; padding-bottom:5px">
            <span>${item.name}</span>
            <span style="color:var(--accent)">₡${item.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function sendOrder() {
    let msg = "*NUEVO PEDIDO LUXURY MALL*%0A%0A";
    cart.forEach(i => msg += `- ${i.name} (₡${i.price.toLocaleString()})%0A`);
    msg += `%0A*TOTAL: ₡${total.toLocaleString()}*`;
    const num = "506XXXXXXXX"; // <-- PON TU NÚMERO AQUÍ
    window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
}
