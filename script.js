/* ==========================================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (script.js)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. TOAST NOTIFICATION SYSTEM ---
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // --- 2. PRELOADER ---
    const loader = document.getElementById('zaria-loader');
    if (loader) {
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));
    }

    // --- 3. AUTHENTICATION & ROUTE GUARD ---
    const protectedPages = ['cart.html', 'checkout.html', 'wishlist.html'];
    const currentPageName = window.location.pathname.split('/').pop() || 'index.html';
    const isLoggedIn = localStorage.getItem('zaria-logged-in') === 'true';

    if (protectedPages.includes(currentPageName) && !isLoggedIn) {
        showToast('Redirecting to login for VIP access...');
        setTimeout(() => window.location.href = 'login.html', 1500);
    }

    const authForm = document.querySelector('.auth-form');
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('zaria-logged-in', 'true');
            showToast("Login successful. Redirecting...");
            setTimeout(() => window.location.href = "products.html", 1500);
        });
    }

    // --- 4. GLOBAL NAVIGATION & UI ---
    // Logo redirect
    document.querySelectorAll('.logo-container').forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => window.location.href = 'index.html');
    });

    // Dark Mode
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        if (localStorage.getItem('zaria-dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.textContent = '☀️';
        }
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('zaria-dark-mode', isDark ? 'enabled' : null);
        });
    }

    // --- 5. SEARCH & FILTER LOGIC ---
    const searchBtn = document.getElementById('nav-search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const searchInput = document.getElementById('nav-search-input');
            if (searchInput.classList.contains('active') && searchInput.value) {
                executeSearch(searchInput.value);
            } else {
                searchInput.classList.add('active');
                searchInput.focus();
            }
        });
    }

    function executeSearch(term) {
        if (window.location.pathname.includes('products.html')) {
            filterProducts(term);
        } else {
            localStorage.setItem('zaria-search', term);
            window.location.href = 'products.html';
        }
    }

    function filterProducts(term) {
        const query = term.toLowerCase();
        document.querySelectorAll('.product-card').forEach(card => {
            const title = card.querySelector('h4').innerText.toLowerCase();
            card.style.display = title.includes(query) ? 'block' : 'none';
        });
    }

    // --- 6. CART & QUANTITY LOGIC ---
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.parentElement.querySelector('.qty-input');
            if (e.target.classList.contains('plus')) input.value++;
            else if (input.value > 1) input.value--;
        });
    });

    // --- 7. RAZORPAY INTEGRATION ---
    const payBtn = document.querySelector('.btn-pay-now');
    if (payBtn) {
        payBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const total = payBtn.dataset.total || 3499;

            var options = {
                "key": "rzp_test_YOUR_API_KEY",
                "amount": total * 100,
                "currency": "INR",
                "name": "ZARIA",
                "description": "The Art of Gifting",
                "handler": function (res) {
                    showToast("Payment successful! Saving order...");
                    // Logic to send to your backend /order API goes here
                    window.location.href = "order-success.html";
                },
                "theme": { "color": "#722F37" }
            };
            new window.Razorpay(options).open();
        });
    }
});