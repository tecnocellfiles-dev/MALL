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