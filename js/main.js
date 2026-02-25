const backupImg = "https://images.unsplash.com/photo-1517336712468-07a5f2297838?q=80&w=400&auto=format&fit=crop";

function init() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    for (let i = 1; i <= 59; i++) {
        const price = 245000 + (i * 1500);
        grid.innerHTML += `
            <div class="product-card-premium">
                <div class="product-img-box">
                    <img src="${backupImg}" alt="Laptop">
                </div>
                <div class="category" style="font-size:0.7rem">High Performance</div>
                <h3 style="font-family:Syncopate; font-size:0.9rem; margin:10px 0">PREMIUM LAPTOP v.${100+i}</h3>
                <span class="price">₡${price.toLocaleString('es-CR')}</span>
                <button class="btn-explore" style="width:100%; cursor:pointer" onclick="alert('Añadido al carrito')">AÑADIR AL CARRITO</button>
            </div>
        `;
    }
}

window.onload = init;