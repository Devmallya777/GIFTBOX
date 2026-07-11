/* ==========================================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (LocalStorage Edition)
   ========================================================== */

// --- 0. THEME GUARDIAN (runs instantly on script load, on EVERY page) ---
// script.js is loaded at the end of <body>, so document.body already exists here.
// This is what makes dark/light mode global across the whole site instead of per-page.
(function() {
    if (localStorage.getItem('zaria-dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
})();

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
    if (document.getElementById('wishlist-grid')) renderWishlist(); // Auto-refresh wishlist page
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
        // Check if item is already in wishlist to color the heart
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

    // Re-attach hover effects manually since inline styles can be tricky
    grid.querySelectorAll('.product-image').forEach(img => {
        img.addEventListener('mouseenter', () => img.querySelector('.hover-actions').style.opacity = '1');
        img.addEventListener('mouseleave', () => img.querySelector('.hover-actions').style.opacity = '0');
    });

    const totalPages = Math.ceil(currentWorkingList.length / itemsPerPage);
    const nav = document.querySelector('.pagination');
    if (nav) {
        nav.innerHTML = Array.from({length: totalPages}, (_, i) => 
            `<button type="button" class="page-btn ${currentGridPage === i+1 ? 'active' : ''}" onclick="goToPage(${i+1})" style="width: 40px; height: 40px; margin: 0 5px; background: ${currentGridPage === i+1 ? 'var(--text-gold)' : 'transparent'}; border: 1px solid var(--text-gold); color: ${currentGridPage === i+1 ? 'var(--bg-wine-dark)' : 'var(--text-muted)'}; cursor: pointer;">${i+1}</button>`
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

// --- 3b. SEARCH (only active on products.html / product.html) ---
window.performSearch = () => {
    const input = document.getElementById("nav-search-input");
    if (!input) return;

    const query = input.value.trim().toLowerCase();

    if (query === "") {
        currentWorkingList = [...allProducts];
    } else {
        currentWorkingList = allProducts.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
    }

    currentGridPage = 1;
    updateProductView();
};
// --- 4. RENDER WISHLIST PAGE ---
window.renderWishlist = () => {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;
    const wish = getData('zaria-wishlist');

    if (wish.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.2rem; padding: 40px;">Your wishlist is empty. Discover our treasures!</p>`;
        return;
    }

    grid.innerHTML = wish.map(p => `
        <div class="product-card" style="background: var(--bg-wine-dark); border-radius: 12px; overflow: hidden; position: relative;">
            <div class="product-image" style="background-color: ${p.color}; height: 280px; position: relative;">
                <button type="button" onclick="toggleWishlist('${p.id}'); renderWishlist();" style="position: absolute; top: 15px; right: 15px; background: white; border: none; border-radius: 50%; width: 35px; height: 35px; color: #d9534f; cursor: pointer; z-index: 10; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="product-info" style="padding: 20px; text-align: center;">
                <h4 style="margin-bottom: 10px; color: var(--text-pink);">${p.name}</h4>
                <p class="price" style="margin-bottom: 15px; color: var(--text-pink); font-weight: bold;">₹${p.price}</p>
                <button type="button" class="add-to-cart" onclick="addToCart('${p.id}', '${p.name}', ${p.price}, '${p.color}')" style="width: 100%; padding: 12px; border: 2px solid var(--text-gold); background: transparent; color: var(--text-gold); border-radius: 25px; cursor: pointer; text-transform: uppercase; font-weight: bold;">Move to Cart</button>
            </div>
        </div>
    `).join('');
};

// --- 5. RENDER CART PAGE ---
window.updateCartQty = (id, change) => {
    let cart = getData('zaria-cart');
    let item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        saveData('zaria-cart', cart);
        renderCart();
    }
};

window.renderCart = () => {
    const container = document.querySelector('.cart-items-container');
    if (!container) return;
    const cart = getData('zaria-cart');
    let subtotal = 0;
    
    if (cart.length === 0) {
        container.innerHTML = `<p style="padding:40px 20px; text-align:center; color: var(--text-muted);">Your cart is empty. Let's go shopping!</p>`;
        if (document.querySelector('.cart-summary')) document.querySelector('.cart-summary').style.display = 'none';
        return;
    }

    if (document.querySelector('.cart-summary')) document.querySelector('.cart-summary').style.display = 'block';

    container.innerHTML = `<div class="cart-header" style="display: grid; grid-template-columns: 2fr 1fr 1fr; border-bottom: 1px solid rgba(208, 184, 188, 0.2); padding-bottom: 15px; margin-bottom: 20px; color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase;"><span>Product</span><span>Quantity</span><span>Total</span></div>` + 
    cart.map((item) => {
        subtotal += (item.price * item.quantity);
        return `
        <div class="cart-item" style="display: grid; grid-template-columns: 2fr 1fr 1fr; align-items: center; padding: 20px 0; border-bottom: 1px solid rgba(208, 184, 188, 0.1);">
            <div class="item-info" style="display: flex; gap: 20px; align-items: center;">
                <div class="item-image" style="background-color: ${item.color}; width:90px; height:90px; border-radius:8px;"></div>
                <div class="item-details">
                    <h4 style="margin-bottom: 5px; color: var(--text-pink); font-family: 'Playfair Display', serif; font-size: 1.1rem;">${item.name}</h4>
                    <p class="item-price" style="margin-bottom: 8px; color: var(--text-muted);">₹${item.price}</p>
                    <button type="button" class="btn-remove" onclick="updateCartQty('${item.id}', -999)" style="background:none; border:none; color:#d9534f; cursor:pointer; text-decoration:underline; font-size: 0.85rem;">Remove</button>
                </div>
            </div>
            <div class="item-quantity">
                <div class="quantity-selector" style="display: flex; align-items: center; gap: 5px;">
                    <button type="button" onclick="updateCartQty('${item.id}', -1)" style="width:30px; height:30px; background:transparent; border:1px solid var(--text-muted); color:var(--text-pink); cursor:pointer;">-</button>
                    <input type="number" value="${item.quantity}" style="width:45px; height:30px; text-align:center; background:transparent; border:1px solid var(--text-muted); color:var(--text-pink);" readonly>
                    <button type="button" onclick="updateCartQty('${item.id}', 1)" style="width:30px; height:30px; background:transparent; border:1px solid var(--text-muted); color:var(--text-pink); cursor:pointer;">+</button>
                </div>
            </div>
            <div class="item-total" style="color: var(--text-pink); font-weight: bold;"><p>₹${item.price * item.quantity}</p></div>
        </div>
    `}).join('');

    if (document.getElementById('subtotal')) document.getElementById('subtotal').innerText = `₹${subtotal}`;
    if (document.getElementById('total')) document.getElementById('total').innerText = `₹${subtotal}`;
};

window.loadCheckoutSummary = () => {
    const container = document.getElementById('checkout-items');
    if (!container) return;
    const cart = getData('zaria-cart');
    let subtotal = 0;
    
    container.innerHTML = cart.map(item => {
        subtotal += (item.price * item.quantity);
        return `<div class="checkout-item" style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
            <div class="img-box" style="background-color: ${item.color}; width:60px; height:60px; border-radius:4px;"></div>
            <div class="checkout-item-info"><h4>${item.name} (x${item.quantity})</h4></div>
            <p style="margin-left:auto;">₹${item.price * item.quantity}</p>
        </div>`;
    }).join('');
    
    if (document.getElementById('subtotal')) document.getElementById('subtotal').innerText = `₹${subtotal}`;
    if (document.getElementById('total')) document.getElementById('total').innerText = `₹${subtotal}`;
};

// --- 6. GLOBAL EVENT LISTENERS & INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
   const searchInput = document.getElementById("nav-search-input");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const value = this.value.trim();

        if (document.getElementById("product-grid")) {

            performSearch();

            if (value === "")
                history.replaceState({}, "", "products.html");
            else
                history.replaceState({}, "", "?search=" + encodeURIComponent(value));

        } else {

            window.location.href = "products.html?search=" + encodeURIComponent(value);

        }

    });

}
    
    // Page Initializers
    updateProductView();
    // AUTO SEARCH FROM URL
const params = new URLSearchParams(window.location.search);
const search = params.get("search");

if (search && document.getElementById("product-grid")) {

    const input = document.getElementById("nav-search-input");
    if (input) input.value = search;

    currentWorkingList = allProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    currentGridPage = 1;
    updateProductView();
}
    renderWishlist();
    renderCart();
    if (document.getElementById('checkout-items')) loadCheckoutSummary();

    // Filters and Sort Listeners
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) sortDropdown.addEventListener('change', applyFiltersAndSort);

    const filterBtn = document.querySelector('.btn-apply-filters');
    if (filterBtn) {
        filterBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            applyFiltersAndSort();
            showToast("Filters applied!");
        });
    }
    
    // Preloader
    const loader = document.getElementById('zaria-loader');
    if (loader) window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));

    // --- DARK MODE TOGGLE (class already applied globally by the Theme Guardian above) ---
    const themeToggle = document.getElementById('theme-toggle');
    const isDark = localStorage.getItem('zaria-dark-mode') === 'true';
    if (themeToggle) themeToggle.innerText = isDark ? '☀️' : '🌙';

    themeToggle?.addEventListener('click', (e) => {
        e.preventDefault();
        const newState = document.body.classList.toggle('dark-mode');
        localStorage.setItem('zaria-dark-mode', newState);
        themeToggle.innerText = newState ? '☀️' : '🌙';
    });

    // Accordions
    document.querySelectorAll(".accordion").forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) panel.style.maxHeight = null;
            else panel.style.maxHeight = panel.scrollHeight + "px";
        });
    });
});