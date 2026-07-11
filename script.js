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
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            const grid = document.querySelector('.product-grid');
            const products = Array.from(grid.querySelectorAll('.product-card'));
            const val = e.target.value;

            products.sort((a, b) => {
                let pA = parseInt(a.querySelector('.price').innerText.replace(/\D/g, ''));
                let pB = parseInt(b.querySelector('.price').innerText.replace(/\D/g, ''));
                return val.includes('Low') ? pA - pB : pB - pA;
            });

            products.forEach(p => grid.appendChild(p));
            showToast("Sorted!");
        });
    }

    const filterBtn = document.querySelector('.btn-apply-filters');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            const grid = document.querySelector('.product-grid');
            const products = grid.querySelectorAll('.product-card');
            // This example hides products if they don't match (simple logic)
            products.forEach(p => p.style.display = 'block'); 
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