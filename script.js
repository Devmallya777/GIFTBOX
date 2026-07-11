/* ==========================================================
   ZARIA CLEANED FUNCTIONAL SCRIPT (LocalStorage Edition)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Toast System
    window.showToast = (msg) => {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            Object.assign(container.style, { position: 'fixed', bottom: '20px', right: '20px', zIndex: '10000', display: 'flex', flexDirection: 'column', gap: '10px' });
            document.body.appendChild(container);
        }
        const t = document.createElement('div');
        t.innerText = msg;
        Object.assign(t.style, { background: '#c69c6d', padding: '12px 20px', color: '#3a1119', fontWeight: 'bold', borderRadius: '4px' });
        container.appendChild(t);
        setTimeout(() => t.remove(), 2000);
    };

    // 2. Cart & Wishlist Helper
    const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
    const saveData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

    window.addToCart = (id, name, price, color) => {
        let cart = getData('zaria-cart');
        cart.push({ id, name, price, color });
        saveData('zaria-cart', cart);
        showToast(`${name} added to cart!`);
    };

   // --- DATABASE (Replace with fetch('/api/products') later) ---
const allProducts = [
    { id: 1, name: "Midnight Velvet Box", price: 3499, color: "#d0b8bc", category: "Wedding Hampers" },
    { id: 2, name: "Golden Hour Hamper", price: 5200, color: "#f9f0f0", category: "Wedding Hampers" },
    { id: 3, name: "Classic Silk Essentials", price: 2100, color: "#c69c6d", category: "Festive Specials" },
    { id: 4, name: "Luxury Corporate Set", price: 2800, color: "#5b1d2a", category: "Corporate Gifting" },
    { id: 5, name: "Anniversary Bloom Box", price: 3900, color: "#d0b8bc", category: "Anniversary" },
    { id: 6, name: "Festive Joy Hamper", price: 4500, color: "#c69c6d", category: "Festive Specials" },
    { id: 7, name: "Extra Special Gift", price: 3200, color: "#3a1119", category: "Wedding Hampers" }
];

let currentPage = 1;
const itemsPerPage = 6;

function renderProducts(data) {
    const grid = document.getElementById('product-grid');
    const start = (currentPage - 1) * itemsPerPage;
    const paginatedItems = data.slice(start, start + itemsPerPage);

    grid.innerHTML = paginatedItems.map(p => `
        <div class="product-card">
            <div class="product-image" style="background-color: ${p.color};">
                <div class="hover-actions">
                    <button onclick="toggleWishlist('${p.id}')"><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="price">₹${p.price}</p>
                <button class="add-to-cart" onclick="addToCart('${p.id}', '${p.name}', ${p.price}, '${p.color}')">Add to Cart</button>
            </div>
        </div>
    `).join('');

    renderPagination(data.length);
}

function renderPagination(totalItems) {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = Array.from({length: pageCount}, (_, i) => 
        `<button class="page-btn ${currentPage === i+1 ? 'active' : ''}" onclick="changePage(${i+1})">${i+1}</button>`
    ).join('');
}

window.changePage = (page) => {
    currentPage = page;
    renderProducts(allProducts);
};

// --- SORT LOGIC ---
document.querySelector('.sort-dropdown').addEventListener('change', (e) => {
    const sorted = [...allProducts].sort((a, b) => e.target.value === 'Low to High' ? a.price - b.price : b.price - a.price);
    renderProducts(sorted);
});

// --- FILTER LOGIC ---
document.querySelector('.btn-apply-filters').addEventListener('click', () => {
    const min = parseInt(document.querySelector('input[placeholder="Min ₹"]').value) || 0;
    const max = parseInt(document.querySelector('input[placeholder="Max ₹"]').value) || Infinity;
    const filtered = allProducts.filter(p => p.price >= min && p.price <= max);
    renderProducts(filtered);
});

// Init
document.addEventListener("DOMContentLoaded", () => renderProducts(allProducts));

    // 4. Global Interactivity (Click Delegation)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('qty-btn')) {
            const input = e.target.parentElement.querySelector('.qty-input');
            let val = parseInt(input.value);
            if (e.target.innerText === '+') input.value = val + 1;
            else if (e.target.innerText === '-' && val > 1) input.value = val - 1;
        }
        
        if (e.target.closest('.fa-heart')) {
            e.preventDefault();
            e.target.closest('.fa-heart').classList.toggle('fa-solid');
            showToast("Wishlist Updated!");
        }
    });

    // Dark Mode
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
    }
});