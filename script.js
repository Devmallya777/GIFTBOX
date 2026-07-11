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
    // --- 3. SORT & FILTER LOGIC (REFINED) ---

// Helper: Extract ONLY the current (lowest) price from the price text
const getCurrentPrice = (pCard) => {
    const priceText = pCard.querySelector('.price').innerText;
    // Extract all numbers, convert to array of integers
    const numbers = priceText.match(/\d+/g).map(Number);
    // Return the minimum (the sale price or the actual price)
    return Math.min(...numbers);
};

// SORT LOGIC
const sortDropdown = document.querySelector('.sort-dropdown');
if (sortDropdown) {
    sortDropdown.addEventListener('change', (e) => {
        const grid = document.querySelector('.product-grid');
        const products = Array.from(grid.querySelectorAll('.product-card'));
        const val = e.target.value;

        products.sort((a, b) => {
            const priceA = getCurrentPrice(a);
            const priceB = getCurrentPrice(b);
            return val.includes('High') ? priceB - priceA : priceA - priceB;
        });

        // Re-append sorted elements
        products.forEach(p => grid.appendChild(p));
        showToast("Sorted successfully!");
    });
}

// FILTER LOGIC
const filterBtn = document.querySelector('.btn-apply-filters');
if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        const minInput = document.querySelector('input[placeholder="Min ₹"]');
        const maxInput = document.querySelector('input[placeholder="Max ₹"]');
        
        const min = parseInt(minInput.value) || 0;
        const max = parseInt(maxInput.value) || Infinity;
        
        const products = document.querySelectorAll('.product-card');

        products.forEach(p => {
            const price = getCurrentPrice(p);
            // Show only if within range
            if (price >= min && price <= max) {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        });
        showToast(`Showing items between ₹${min} and ₹${max}`);
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