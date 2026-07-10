/* ==========================================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (script.js)
   Fully integrated for all pages and components
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. SESSION & ROUTE PROTECTION ---
    const isLoggedIn = localStorage.getItem('zaria-logged-in') === 'true';
    const isGuest = localStorage.getItem('zaria-guest') === 'true';
    const currentPage = window.location.pathname.split('/').pop();

    if (!isLoggedIn && !isGuest && currentPage !== 'login.html' && currentPage !== 'register.html') {
        window.location.href = 'login.html';
    }

    // --- 2. PREMIUM TOAST SYSTEM ---
    function showToast(message, type = 'success') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            Object.assign(container.style, { position: 'fixed', bottom: '20px', right: '20px', zIndex: '10000', display: 'flex', flexDirection: 'column', gap: '10px' });
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.innerText = message;
        Object.assign(toast.style, { background: '#c69c6d', color: '#3a1119', padding: '12px 24px', borderRadius: '4px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', fontWeight: '600', fontSize: '0.9rem' });
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // --- 3. PRELOADER ---
    const loader = document.getElementById('zaria-loader');
    if (loader) {
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));
    }

    // --- 4. AUTH LOGIC ---
    const loginForm = document.getElementById('zaria-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('zaria-logged-in', 'true');
            localStorage.setItem('zaria-guest', 'false');
            showToast("Welcome back to ZARIA!");
            setTimeout(() => window.location.href = "index.html", 1000);
        });
    }

    window.skipLogin = () => {
        localStorage.setItem('zaria-guest', 'true');
        window.location.href = "index.html";
    };

    // --- 5. CART & QUANTITY LOGIC ---
    // Handle +/- buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('qty-btn')) {
            const input = e.target.parentElement.querySelector('.qty-input');
            let val = parseInt(input.value);
            if (e.target.innerText === '+') input.value = val + 1;
            else if (e.target.innerText === '-' && val > 1) input.value = val - 1;
        }
    });

    // Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card') || e.target.closest('.product-details');
            const name = card.querySelector('h4').innerText;
            showToast(`${name} added to cart!`);
        });
    });

    // --- 6. DARK MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        if (localStorage.getItem('zaria-dark-mode') === 'true') document.body.classList.add('dark-mode');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('zaria-dark-mode', document.body.classList.contains('dark-mode'));
        });
    }

    // --- 7. ACCORDIONS (FAQ & Product) ---
    document.querySelectorAll(".accordion").forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            const icon = this.querySelector('i');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                icon.classList.replace('fa-minus', 'fa-plus');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                icon.classList.replace('fa-plus', 'fa-minus');
            }
        });
    });

    // --- 8. SEARCH ---
    const searchBtn = document.getElementById('nav-search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const term = document.getElementById('nav-search-input').value;
            if(term) alert("Searching for: " + term);
        });
    }

    // --- 9. RAZORPAY ---
    const payBtn = document.querySelector('.btn-pay-now');
    if (payBtn) {
        payBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const options = {
                key: "rzp_test_YOUR_API_KEY",
                amount: 1026400,
                currency: "INR",
                name: "ZARIA",
                description: "Order Payment",
                handler: (res) => window.location.href = "order-success.html"
            };
            new Razorpay(options).open();
        });
    }
    // --- ADD TO CART FUNCTION ---
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('zaria-cart')) || [];
    cart.push(product);
    localStorage.setItem('zaria-cart', JSON.stringify(cart));
    showToast(`${product.name} added!`);
}

// --- RENDER CART ON cart.html ---
function renderCart() {
    const cartContainer = document.querySelector('.cart-items-container');
    if (!cartContainer) return;
    
    let cart = JSON.parse(localStorage.getItem('zaria-cart')) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartContainer.innerHTML = ""; // Clear existing hard-coded HTML
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <div class="item-image" style="background-color: ${item.color};"></div>
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p class="item-price">₹${item.price}</p>
                        <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
                <div class="item-quantity">
                    <div class="quantity-selector">
                        <button class="qty-btn">-</button>
                        <input type="number" value="1" class="qty-input">
                        <button class="qty-btn">+</button>
                    </div>
                </div>
                <div class="item-total"><p>₹${item.price}</p></div>
            </div>
        `;
    });
}

// --- REMOVE FROM CART ---
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('zaria-cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('zaria-cart', JSON.stringify(cart));
    renderCart(); // Refresh view
}
});