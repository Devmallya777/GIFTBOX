/* ==========================================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (script.js)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. SESSION MANAGEMENT (Auth/Guest) ---
    const isLoggedIn = localStorage.getItem('zaria-logged-in') === 'true';
    const isGuest = localStorage.getItem('zaria-guest') === 'true';
    const currentPage = window.location.pathname.split('/').pop();

    // Route Protection: If not logged in AND not a guest, force to login
    if (!isLoggedIn && !isGuest && currentPage !== 'login.html' && currentPage !== 'register.html') {
        window.location.href = 'login.html';
    }

    // --- 2. TOAST SYSTEM ---
    function showToast(message, type = 'success') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerText = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // --- 3. LOGIN/REGISTER LOGIC ---
    const loginForm = document.querySelector('.auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('zaria-logged-in', 'true');
            localStorage.setItem('zaria-guest', 'false');
            showToast("Welcome back to ZARIA!");
            setTimeout(() => window.location.href = "index.html", 1000);
        });
    }

    // "Skip for now" function (Add this to your login.html buttons)
    window.skipLogin = () => {
        localStorage.setItem('zaria-guest', 'true');
        window.location.href = "index.html";
    };

    // --- 4. PRELOADER & LOGO ---
    const loader = document.getElementById('zaria-loader');
    if (loader) {
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));
    }

    // --- 5. CART LOGIC (Persistent) ---
    // Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = e.target.closest('.product-card');
            const name = product.querySelector('h4').innerText;
            showToast(`${name} added to cart!`);
            // Store in LocalStorage if needed
        });
    });

    // --- 6. DARK MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('zaria-dark-mode', document.body.classList.contains('dark-mode'));
        });
    }

    // --- 7. RAZORPAY (Checkout Page) ---
    const payBtn = document.querySelector('.btn-pay-now');
    if (payBtn) {
        payBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // This triggers your payment modal
            const options = {
                key: "rzp_test_YOUR_API_KEY",
                amount: 1026400, // Amount in paise
                currency: "INR",
                name: "ZARIA",
                description: "Order Payment",
                handler: (res) => window.location.href = "order-success.html"
            };
            new Razorpay(options).open();
        });
    }
});