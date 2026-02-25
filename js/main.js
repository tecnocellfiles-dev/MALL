let cart = [];
let total = 0;
const allProducts = {};

// 1. Modelos con URLs de imagen más estables y directas
const baseModels = [
    { brand: 'HP EliteBook Pro', price: 235000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/07/HP-15-FD0230WM.jpg', cpu: 'Intel i3' },
    { brand: 'ASUS Vivobook Ultra', price: 385000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/10/ASUS-X1404VA.jpg', cpu: 'Intel i7' },
    { brand: 'MSI Cyborg Gamer', price: 795000, img: 'https://www.intelec.co.cr/wp-content/uploads/2024/01/MSI-CYBORG-15.jpg', cpu: 'RTX 4060' },
    { brand: 'Dell Inspiron 3535', price: 295000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/05/DELL-INSPIRON-3535.jpg', cpu: 'Ryzen 5' },
    { brand: 'Lenovo IdeaPad Slim', price: 315000, img: 'https://www.intelec.co.cr/wp-content/uploads/2023/09/82VG00BJUS.jpg', cpu: 'Ryzen 3' }
];

function initStore() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    grid.innerHTML = ""; // Limpiar antes de generar

    for (let i = 1; i <= 59; i++) {
        const base = baseModels[i % baseModels.length];
        const id = `item-${i}`;
        const finalPrice = base.price + (i * 1200);
        
        allProducts[id] = {
            title: `${base.brand} Ver. ${i + 200}`,
            img: base.img,
            price: finalPrice,
            specs: [['Procesador', base.cpu], ['RAM', i % 2 === 0 ? '16GB' : '8GB'], ['Almacenamiento', '512GB SSD']]
        };

        grid.innerHTML += `
            <div class="product-card-premium">
                <div class="product-img-box" onclick="openSpecs('${id}')">
                    <img src="${base.img}" 
                         onerror="this.src='https://images.unsplash.com/photo-1517336712468-07a5f2297838?q=80&w=400&auto=format&fit=crop'" 
                         alt="Laptop">
                </div>
                <h3>${allProducts[id].title}</h3>
                <span class="price">₡${finalPrice.toLocaleString('es-CR')}</span>
                <button class="btn-add" onclick="openSpecs('${id}')">VER DETALLES</button>
            </div>
        `;
    }
}

// ... Mantener funciones de openSpecs, closeSpecs, toggleCart, addToCart y sendOrder que ya tenías ...
// Asegúrate de que sendOrder tenga tu número de WhatsApp real

window.onload = initStore;