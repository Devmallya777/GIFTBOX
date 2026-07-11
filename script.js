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

window.addToCart = (id, name, price, color) => {
    let cart = getData('zaria-cart');
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({ id, name, price, color, quantity: 1 });
    saveData('zaria-cart', cart);
    showToast(`${name} added to cart!`);
};

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
        const inWishlist = getData('zaria-wishlist').some(w => w.id === p.id);
        const heartClass = inWishlist ? 'fa-solid' : 'fa-regular';
        return `
        <div class="product-card" style="background: var(--bg-wine-dark); border-radius: 12px; overflow: hidden; border: 1px solid rgba(208, 184, 188, 0.05);">
            <div class="product-image" style="background-color: ${p.color}; height: 280px; position: relative;">
                <div class="hover-actions" style="position: absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.4); display:flex; justify-content:center; align-items:center; gap:15px; opacity:0; transition:0.3s;">
                    <button type="button" onclick="event.preventDefault(); toggleWishlist('${p.id}', '${p.name}', ${p.price}, '${p.color}'); updateProductView();" style="width:45px; height:45px; border-radius:50%; border:none; cursor:pointer; color: ${inWishlist ? '#d9534f' : '#5b1d2a'};"><i class="${heartClass} fa-heart"></i></button>
                    <button type="button" onclick="window.location.href='product.html?id=${p.id}'" style="width:45px; height:45px; border-radius:50%; border:none; cursor:pointer; color: #5b1d2a;"><i class="fa-regular fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info" style="padding: 20px; text-align: center;">
                <h4 style="color: var(--text-pink); margin-bottom: 10px;">${p.name}</h4>
                <p class="price" style="color: var(--text-pink); font-size: 1.2rem; font-weight: 600; margin-bottom: 15px;">₹${p.price}</p>
                <button type="button" class="add-to-cart" onclick="event.preventDefault(); addToCart('${p.id}', '${p.name}', ${p.price}, '${p.color}')" style="width: 100%; padding: 10px; background: transparent; border: 2px solid var(--text-gold); color: var(--text-gold); border-radius: 25px; cursor: pointer; text-transform: uppercase; font-weight: bold;">Add to Cart</button>
            </div>
        </div>
    `}).join('');

    grid.querySelectorAll('.product-image').forEach(img => {
        img.addEventListener('mouseenter', () => img.querySelector('.hover-actions').style.opacity = '1');
        img.addEventListener('mouseleave', () => img.querySelector('.hover-actions').style.opacity = '0');
    });

    const nav = document.querySelector('.pagination');
    if (nav) {
        const totalPages = Math.ceil(currentWorkingList.length / itemsPerPage);
        nav.innerHTML = Array.from({length: totalPages}, (_, i) => 
            `<button type="button" class="page-btn ${currentGridPage === i+1 ? 'active' : ''}" onclick="goToPage(${i+1})">${i+1}</button>`
        ).join('');
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

    currentWorkingList = allProducts.filter(p => (p.price >= min && p.price <= max) && (checkedCats.length === 0 || checkedCats.includes(p.category)));
    
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        if (sortDropdown.value === 'Low to High') currentWorkingList.sort((a, b) => a.price - b.price); 
        else if (sortDropdown.value === 'High to Low') currentWorkingList.sort((a, b) => b.price - a.price); 
    }
    currentGridPage = 1;
    updateProductView();
}

window.renderWishlist = () => {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;
    const wish = getData('zaria-wishlist');
    grid.innerHTML = wish.length === 0 ? `<p style="text-align:center;">Your wishlist is empty.</p>` : wish.map(p => `<div>${p.name}</div>`).join('');
};

window.renderCart = () => {
    const container = document.querySelector('.cart-items-container');
    if (!container) return;
    const cart = getData('zaria-cart');
    container.innerHTML = cart.map(item => `<div>${item.name}</div>`).join('');
};

// --- 5. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    updateProductView();
    renderWishlist();
    renderCart();

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

    document.querySelector('.sort-dropdown')?.addEventListener('change', applyFiltersAndSort);
    document.querySelector('.btn-apply-filters')?.addEventListener('click', (e) => { e.preventDefault(); applyFiltersAndSort(); });
    
    document.getElementById('zaria-loader')?.classList.add('hidden');
});