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

// --- 2. CART & WISHLIST LOGIC ---
const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const saveData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

window.addToCart = (id, name, price, color) => {
    let cart = getData('zaria-cart');
    cart.push({ id, name, price, color });
    saveData('zaria-cart', cart);
    showToast(`${name} added to cart!`);
};

window.toggleWishlist = (id) => {
    showToast("Wishlist Updated! 💖");
};


// --- 3. STATE MANAGEMENT (Products, Sort, Filter, Pagination) ---
let products = [
    { id: 1, name: "Midnight Velvet Box", price: 3499, category: "Wedding Hampers", color: "#d0b8bc" },
    { id: 2, name: "Golden Hour Hamper", price: 5200, color: "#f9f0f0", category: "Wedding Hampers" },
    { id: 3, name: "Classic Silk Essentials", price: 2100, category: "Festive Specials", color: "#c69c6d" },
    { id: 4, name: "Luxury Corporate Set", price: 2800, category: "Corporate Gifting", color: "#5b1d2a" },
    { id: 5, name: "Anniversary Bloom Box", price: 3900, category: "Anniversary", color: "#d0b8bc" },
    { id: 6, name: "Festive Joy Hamper", price: 4500, category: "Festive Specials", color: "#c69c6d" },
    { id: 7, name: "Extra Special Gift", price: 3200, category: "Wedding Hampers", color: "#3a1119" }
];

let filteredProducts = [...products];
let currentPage = 1;
const itemsPerPage = 3; // Exactly 3 products per page

function render() {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Prevent errors on non-shop pages
    
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filteredProducts.slice(start, start + itemsPerPage);

    grid.innerHTML = paginated.map(p => `
        <div class="product-card">
            <div class="product-image" style="background-color: ${p.color};">
                <div class="hover-actions">
                    <button onclick="toggleWishlist('${p.id}')"><i class="fa-regular fa-heart"></i></button>
                    <button onclick="alert('Quick View!')"><i class="fa-regular fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="price">₹${p.price}</p>
                <button class="add-to-cart" onclick="addToCart('${p.id}', '${p.name}', ${p.price}, '${p.color}')">Add to Cart</button>
            </div>
        </div>
    `).join('');

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const nav = document.querySelector('.pagination');
    if (!nav) return;
    
    nav.innerHTML = Array.from({length: totalPages}, (_, i) => 
        `<button class="page-btn ${currentPage === i+1 ? 'active' : ''}" onclick="changePage(${i+1})">${i+1}</button>`
    ).join('');
}

window.changePage = (p) => { currentPage = p; render(); };


// --- 4. GLOBAL EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
    
    // Trigger initial render for shop page
    render();

    // --- SORT & FILTER ---
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            const val = e.target.value;
            filteredProducts.sort((a, b) => val === 'Price: Low to High' ? a.price - b.price : b.price - a.price);
            currentPage = 1; // Reset to page 1
            render();
        });
    }

    const filterBtn = document.querySelector('.btn-apply-filters');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            const min = parseInt(document.querySelector('input[placeholder="Min ₹"]').value) || 0;
            const max = parseInt(document.querySelector('input[placeholder="Max ₹"]').value) || Infinity;
            
            // Get checked categories
            const checked = Array.from(document.querySelectorAll('.custom-checkbox input:checked')).map(el => el.parentElement.innerText.trim());

            filteredProducts = products.filter(p => {
                const matchesPrice = p.price >= min && p.price <= max;
                const matchesCat = checked.length === 0 || checked.includes(p.category);
                return matchesPrice && matchesCat;
            });

            currentPage = 1;
            render();
            showToast("Filters applied!");
        });
    }

    // --- PRELOADER ---
    const loader = document.getElementById('zaria-loader');
    if (loader) window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));

    // --- UI INTERACTIVITY ---
    document.addEventListener('click', (e) => {
        // Quantity Buttons
        if (e.target.classList.contains('qty-btn')) {
            const input = e.target.parentElement.querySelector('.qty-input');
            let val = parseInt(input.value);
            if (e.target.innerText === '+') input.value = val + 1;
            else if (e.target.innerText === '-' && val > 1) input.value = val - 1;
        }
    });

    // Dark Mode
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Accordions
    document.querySelectorAll(".accordion").forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});