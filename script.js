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
    Object.assign(toast.style, { background: '#c69c6d', color: '#3a1119', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold' });
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
};

// --- 2. LOCALSTORAGE HELPERS (CART & WISHLIST) ---
const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const saveData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// Add to Cart Logic
window.addToCart = (id, name, price, color) => {
    let cart = getData('zaria-cart');
    // Check if item already exists in cart to increase quantity instead of duplicating
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, color, quantity: 1 });
    }
    saveData('zaria-cart', cart);
    showToast(`${name} added to cart!`);
};

window.removeFromCart = (id) => {
    let cart = getData('zaria-cart');
    cart = cart.filter(item => item.id !== id);
    saveData('zaria-cart', cart);
    showToast("Item removed from cart.");
    if (window.renderCart) window.renderCart(); // Refresh cart UI if on cart page
};

// Wishlist Logic
window.toggleWishlist = (id, name, price, color) => {
    let wish = getData('zaria-wishlist');
    const existingIndex = wish.findIndex(item => item.id === id);
    
    if (existingIndex > -1) {
        wish.splice(existingIndex, 1); // Remove if it's already there
        showToast("Removed from wishlist.");
    } else {
        wish.push({ id, name, price, color }); // Add if it's not there
        showToast("Added to treasures! 💖");
    }
    saveData('zaria-wishlist', wish);
};


// --- 3. STATE MANAGEMENT & FLIPKART-STYLE FILTERING (Shop Page) ---
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
    if (!grid) return; // Exit if not on the products page

    const start = (currentGridPage - 1) * itemsPerPage;
    const paginated = currentWorkingList.slice(start, start + itemsPerPage);

    grid.innerHTML = paginated.map(p => `
        <div class="product-card">
            <div class="product-image" style="background-color: ${p.color};">
                <div class="hover-actions">
                    <button type="button" onclick="event.preventDefault(); toggleWishlist('${p.id}', '${p.name}', ${p.price}, '${p.color}')" title="Add to Wishlist"><i class="fa-regular fa-heart"></i></button>
                    <button type="button" onclick="event.preventDefault(); alert('Quick View: ${p.name}')" title="Quick View"><i class="fa-regular fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="price">₹${p.price}</p>
                <button type="button" class="add-to-cart" onclick="event.preventDefault(); addToCart('${p.id}', '${p.name}', ${p.price}, '${p.color}')">Add to Cart</button>
            </div>
        </div>
    `).join('');

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

window.goToPage = (p) => { 
    currentGridPage = p; 
    updateProductView(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
};

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
        const val = sortDropdown.value;
        if (val === 'Low to High') currentWorkingList.sort((a, b) => a.price - b.price); 
        else if (val === 'High to Low') currentWorkingList.sort((a, b) => b.price - a.price); 
    }

    currentGridPage = 1;
    updateProductView();
}

// --- 4. RENDER CART & CHECKOUT PAGES ---
window.renderCart = () => {
    const container = document.querySelector('.cart-items-container');
    if (!container) return;
    const cart = getData('zaria-cart');
    
    if (cart.length === 0) {
        container.innerHTML = `<div class="cart-header"><span>Product</span><span>Quantity</span><span>Total</span></div><p style="padding:20px; text-align:center;">Your cart is empty.</p>`;
        document.querySelector('.cart-summary') && (document.querySelector('.cart-summary').style.display = 'none');
        return;
    }

    container.innerHTML = `<div class="cart-header"><span>Product</span><span>Quantity</span><span>Total</span></div>` + 
    cart.map((item) => `
        <div class="cart-item">
            <div class="item-info">
                <div class="item-image" style="background-color: ${item.color}; width:80px; height:80px; border-radius:8px;"></div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="item-price">₹${item.price}</p>
                    <button type="button" class="btn-remove" onclick="removeFromCart('${item.id}')" style="background:none; border:none; color:#d9534f; cursor:pointer; text-decoration:underline;">Remove</button>
                </div>
            </div>
            <div class="item-quantity">
                <div class="quantity-selector">
                    <button class="qty-btn" type="button">-</button>
                    <input type="number" value="${item.quantity}" class="qty-input" readonly>
                    <button class="qty-btn" type="button">+</button>
                </div>
            </div>
            <div class="item-total"><p>₹${item.price * item.quantity}</p></div>
        </div>
    `).join('');
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


// --- 5. GLOBAL EVENT LISTENERS & INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize Pages
    updateProductView();
    if (document.querySelector('.cart-items-container')) renderCart();
    if (document.getElementById('checkout-items')) loadCheckoutSummary();

    // Dark Mode Memory Check on Load
    if (localStorage.getItem('zaria-dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Filters and Sort Initialization
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

    // UI Interactivity (Clicks)
    document.addEventListener('click', (e) => {
        // Quantity Buttons inside Cart
        if (e.target.classList.contains('qty-btn')) {
            const input = e.target.parentElement.querySelector('.qty-input');
            let val = parseInt(input.value);
            if (e.target.innerText === '+') input.value = val + 1;
            else if (e.target.innerText === '-' && val > 1) input.value = val - 1;
            // Note: A real cart would update LocalStorage and re-render here. 
        }
    });

    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            // Save preference to memory
            localStorage.setItem('zaria-dark-mode', document.body.classList.contains('dark-mode'));
        });
    }

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