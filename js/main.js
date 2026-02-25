let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('side-cart').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCartUI();
    if(!document.getElementById('side-cart').classList.contains('active')) {
        toggleCart();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    
    cartCount.innerText = cart.length;
    cartTotal.innerText = total.toLocaleString('es-CR');
    
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.marginBottom = '15px';
        div.style.borderBottom = '1px solid #222';
        div.style.paddingBottom = '10px';
        div.innerHTML = `
            <span>${item.name}</span>
            <span style="color:#00f2ff">₡${item.price.toLocaleString('es-CR')}</span>
        `;
        cartItems.appendChild(div);
    });
}

function sendOrder() {
    if (cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let message = "*NUEVO PEDIDO - LUXURY MALL*%0A";
    message += "----------------------------%0A";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₡${item.price.toLocaleString('es-CR')}%0A`;
    });
    
    message += "----------------------------%0A";
    message += `*TOTAL A PAGAR: ₡${total.toLocaleString('es-CR')}*%0A%0A`;
    message += "¿Me indican los pasos para el pago y la entrega?";

    // REEMPLAZA ESTE NÚMERO (Ejemplo: 50688888888)
    const phoneNumber = "+506 8744 3315"; 
    const whatsappURL = `https://wa.me/${+50687443315}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
}

// BASE DE DATOS DE ESPECIFICACIONES
const productSpecs = {
    'hp': {
        title: 'HP Elite Book 15"',
        img: 'https://www.intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg',
        price: 235000,
        desc: [['Procesador', 'i3-N305'], ['RAM', '8GB'], ['Disco', '256GB SSD']]
    },
    'msi': {
        title: 'MSI Cyborg Gaming Z',
        img: 'https://www.intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg',
        price: 795000,
        desc: [['Gráfica', 'RTX 4060'], ['RAM', '16GB'], ['Pantalla', '144Hz']]
    }
};

function openSpecs(id) {
    const item = productSpecs[id];
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <h2 style="color:#00f2ff; font-family:Syncopate">${item.title}</h2>
        <img src="${item.img}" style="width:200px; margin: 20px 0;">
        <ul class="specs-list">
            ${item.desc.map(d => `<li>${d[0]}: <span>${d[1]}</span></li>`).join('')}
        </ul>
        <button class="checkout-btn" onclick="addToCart('${item.title}', ${item.price}); closeSpecs();">
            AÑADIR A LA BOLSA - ₡${item.price.toLocaleString('es-CR')}
        </button>
    `;
    document.getElementById('specs-modal').style.display = 'flex';
}

function closeSpecs() {
    document.getElementById('specs-modal').style.display = 'none';
}