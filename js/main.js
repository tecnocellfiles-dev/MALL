let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('side-cart').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    
    updateCartUI();
    
    // Abrir automáticamente el carrito para dar feedback al cliente
    if(!document.getElementById('side-cart').classList.contains('active')) {
        toggleCart();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    
    cartCount.innerText = cart.length;
    cartTotal.innerText = total;
    
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartItems.appendChild(div);
    });
}