/* ==========================================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (LocalStorage Edition)
   ========================================================== */

// --- 1. TOAST SYSTEM ---
window.showToast = (message, type = 'success') => {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        Object.assign(container.style, { position: 'fixed', bottom: '20px', right: '20px', zIndex: '10000', display: 'flex', flexDirection: 'column', gap: '10px' });
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.innerText = message;
    Object.assign(toast.style, { background: '#c69c6d', color: '#3a1119', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' });
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
};

// --- 2. LOCALSTORAGE HELPERS ---
const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const saveData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// Add to Cart
window.addToCart = (id, name, price, color) => {
    let cart = getData('zaria-cart');
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({ id, name, price, color, quantity: 1 });
    saveData('zaria-cart', cart);
    showToast(`${name} added to cart!`);
};

// Wishlist Logic
window.toggleWishlist = (id, name, price, color) => {
    let wish = getData('zaria-wishlist');
    const existingIndex = wish.findIndex(item => item.id === id);
    
    if (existingIndex > -1) {
        wish.splice(existingIndex, 1);
        showToast("Removed from wishlist.");
    } else {
        wish.push({ id, name, price, color });
        showToast("Added to treasures! 💖");
    }
    saveData('zaria-wishlist', wish);
    if (document.getElementById('wishlist-grid')) renderWishlist(); 
};

// --- 3. STATE MANAGEMENT & SHOP PAGE ---
const allProducts = [
    { id: '1', name: "Midnight Velvet Box", price: 3499, category: "Wedding Hampers", color: "#d0b8bc" },
    { id: '2', name: "Golden Hour Hamper", price: 5200, category: "Wedding Hampers", color: "#f9f0f0" },
    { id: '3', name: "Classic Silk Essentials", price: 2100, category: "Festive Specials", color: "#c69c6d" },
    { id: '4', name: "Luxury Corporate Set", price: 2800, category: "Corporate Gifting", color: "#5b1d2a" },
    { id: '5', name: "Anniversary Bloom Box", price: 3900, category: "Anniversary", color: "#d0b8bc" },
    { id: '6', name: "Festive Joy Hamper", price: 4500, category: "Festive Specials", color: "#c69c6d" },
    { id: '7', name: "Extra Special Gift", price: 3200, category: "Wedding Hampers", color: "#3a1119" }
];

let currentWorkingList = [...allProducts];
let currentGridPage = 1;
const itemsPerPage = 3; 

function updateProductView() {
    const grid = document.getElementById('product-grid');
    if (!grid) return; 

    const start = (currentGridPage - 1) * itemsPerPage;
    const paginated = currentWorkingList.slice(start, start + itemsPerPage);

    grid.innerHTML = paginated.map(p => {
        return `
        <div class="product-card">
            <div class="product-image" style="background-color: ${p.color};">
                <div class="hover-actions">
                    <button type="button" onclick="event.preventDefault(); toggleWishlist('${p.id}', '${p.name}', ${p.price}, '${p.color}')"><i class="fa-regular fa-heart"></i></button>
                    <button type="button" onclick="window.location.href='product.html?id=${p.id}'"><i class="fa-regular fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="price">₹${p.price}</p>
                <button type="button" class="add-to-cart" onclick="addToCart('${p.id}', '${p.name}', ${p.price}, '${p.color}')">Add to Cart</button>
            </div>
        </div>
    `}).join('');

    const totalPages = Math.ceil(currentWorkingList.length / itemsPerPage);
    const nav = document.querySelector('.pagination');
    if (nav) {
        nav.innerHTML = Array.from({length: totalPages}, (_, i) => 
            `<button type="button" class="page-btn ${currentGridPage === i+1 ? 'active' : ''}" onclick="goToPage(${i+1})">${i+1}</button>`
        ).join('');
    }
    
    const resultCount = document.querySelector('.result-count');
    if (resultCount) {
        const end = Math.min(start + itemsPerPage, currentWorkingList.length);
        resultCount.innerText = `Showing ${currentWorkingList.length === 0 ? 0 : start + 1}-${end} of ${currentWorkingList.length} results`;
    }
}

window.goToPage = (p) => { currentGridPage = p; updateProductView(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

function applyFiltersAndSort() {
    const minInput = document.querySelector('input[placeholder="Min ₹"]');
    const maxInput = document.querySelector('input[placeholder="Max ₹"]');
    const min = minInput && minInput.value ? parseInt(minInput.value) : 0;
    const max = maxInput && maxInput.value ? parseInt(maxInput.value) : Infinity;
    
    const checkboxes = document.querySelectorAll('.custom-checkbox input:checked');
    const checkedCats = Array.from(checkboxes).map(el => el.parentElement.innerText.trim());

    currentWorkingList = allProducts.filter(p => {
        const matchesPrice = p.price >= min && p.price <= max;
        const matchesCat = checkedCats.length === 0 || checkedCats.includes(p.category);
        return matchesPrice && matchesCat;
    });

    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        if (sortDropdown.value === 'Low to High') currentWorkingList.sort((a, b) => a.price - b.price); 
        else if (sortDropdown.value === 'High to Low') currentWorkingList.sort((a, b) => b.price - a.price); 
    }

    currentGridPage = 1;
    updateProductView();
}

// --- 4. RENDER WISHLIST PAGE ---
window.renderWishlist = () => {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;
    const wish = getData('zaria-wishlist');
    grid.innerHTML = wish.length === 0 ? `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.2rem; padding: 40px;">Your wishlist is empty.</p>` : wish.map(p => `<div class="product-card"><h4>${p.name}</h4><p>₹${p.price}</p><button type="button" onclick="toggleWishlist('${p.id}'); renderWishlist();">Remove</button></div>`).join('');
};

window.renderCart = () => {
    const container = document.querySelector('.cart-items-container');
    if (!container) return;
    const cart = getData('zaria-cart');
    let subtotal = 0;
    if (cart.length === 0) { container.innerHTML = `<p>Your cart is empty.</p>`; return; }
    container.innerHTML = cart.map(item => {
        subtotal += (item.price * item.quantity);
        return `<div class="cart-item"><h4>${item.name}</h4><p>₹${item.price}</p></div>`;
    }).join('');
    if (document.getElementById('subtotal')) document.getElementById('subtotal').innerText = `₹${subtotal}`;
};

// --- 5. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    updateProductView();
    renderWishlist();
    renderCart();

    // Dark Mode + Search
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('zaria-dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerText = '☀️';
    }

    themeToggle?.addEventListener('click', (e) => {
        e.preventDefault();
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('zaria-dark-mode', isDark);
        themeToggle.innerText = isDark ? '☀️' : '🌙';
    });

    const searchBtn = document.getElementById('nav-search-btn');
    searchBtn?.addEventListener('click', () => {
        const query = document.getElementById('nav-search-input').value.toLowerCase();
        currentWorkingList = allProducts.filter(p => p.name.toLowerCase().includes(query));
        currentGridPage = 1;
        updateProductView();
    });

    // Listeners
    document.querySelector('.sort-dropdown')?.addEventListener('change', applyFiltersAndSort);
    document.querySelector('.btn-apply-filters')?.addEventListener('click', (e) => { e.preventDefault(); applyFiltersAndSort(); });

    // Preloader
    const loader = document.getElementById('zaria-loader');
    if (loader) window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));
});