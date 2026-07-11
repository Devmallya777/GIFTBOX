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

    // 3. SORT & FILTER LOGIC (Works on the DOM directly)
    // --- 3. SORT & FILTER LOGIC (FIXED) ---
const sortDropdown = document.querySelector('.sort-dropdown');
if (sortDropdown) {
    sortDropdown.addEventListener('change', (e) => {
        const grid = document.querySelector('.product-grid');
        const products = Array.from(grid.querySelectorAll('.product-card'));
        const val = e.target.value;

        products.sort((a, b) => {
            // This regex extracts all numbers and picks the last one (the current price)
            const getPrice = (el) => {
                const priceText = el.querySelector('.price').innerText;
                const numbers = priceText.match(/\d+/g).map(Number);
                return Math.min(...numbers); // Returns the actual active price
            };
            
            return val.includes('Low') ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
        });

        products.forEach(p => grid.appendChild(p));
        showToast("Sorted!");
    });
}

const filterBtn = document.querySelector('.btn-apply-filters');
if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        const min = parseInt(document.querySelector('input[placeholder="Min ₹"]').value) || 0;
        const max = parseInt(document.querySelector('input[placeholder="Max ₹"]').value) || Infinity;
        const products = document.querySelectorAll('.product-card');

        products.forEach(p => {
            const priceText = p.querySelector('.price').innerText;
            const price = Math.min(...priceText.match(/\d+/g).map(Number));
            
            // Toggle display based on range
            p.style.display = (price >= min && price <= max) ? 'block' : 'none';
        });
        showToast("Filters applied!");
    });
}

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