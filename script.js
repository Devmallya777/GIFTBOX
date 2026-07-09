/* ==========================================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (script.js)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // --- TOAST NOTIFICATION SYSTEM ---
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

    // --- 0. PRELOADER ---
    const loader = document.getElementById('zaria-loader');
    if (loader) {
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));
    }

    // --- 1. AUTHENTICATION & ROUTE GUARD ---
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

    // --- 2. GLOBAL NAVIGATION & UI ---
    document.querySelectorAll('.logo-container').forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => window.location.href = 'index.html');
    });

    const searchInput = document.getElementById('nav-search-input');
    const searchBtn = document.getElementById('nav-search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (searchInput.classList.contains('active')) {
                executeSearch(searchInput.value);
            } else {
                searchInput.classList.add('active');
                searchInput.focus();
            }
        });
    }

    function executeSearch(term) {
        if (!term.trim()) return;
        if (window.location.pathname.includes('products.html')) {
            const query = term.toLowerCase();
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.display = card.querySelector('h4').innerText.toLowerCase().includes(query) ? 'block' : 'none';
            });
        } else {
            localStorage.setItem('zaria-search', term);
            window.location.href = 'products.html';
        }
    }

    // --- 3. PRODUCT ACTIONS (Accordion) ---
    document.querySelectorAll(".accordion").forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
            this.querySelector('i').classList.toggle('fa-chevron-down');
            this.querySelector('i').classList.toggle('fa-chevron-up');
        });
    });

    const buyNow = document.querySelector('.btn-buy-now');
    if (buyNow) {
        buyNow.addEventListener('click', (e) => {
            e.preventDefault();
            if (!isLoggedIn) {
                showToast("Please log in to proceed.");
                setTimeout(() => window.location.href = 'login.html', 1500);
            } else {
                window.location.href = 'checkout.html';
            }
        });
    }

    // --- 4. RAZORPAY INTEGRATION ---
    const payBtn = document.querySelector('.btn-pay-now');
    if (payBtn) {
        payBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('user-email');
            const addressInput = document.getElementById('user-address');
            const userEmail = emailInput ? emailInput.value : "customer@example.com";
            const userAddress = addressInput ? addressInput.value : "Not provided";
            const total = payBtn.dataset.total || 3499;

            new window.Razorpay({
                key: "rzp_test_YOUR_API_KEY",
                amount: total * 100,
                currency: "INR",
                name: "ZARIA",
                description: "The Art of Gifting",
                handler: function (res) {
                    showToast("Payment verified. Saving order...");
                    fetch('http://localhost:5000/api/order', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            paymentId: res.razorpay_payment_id,
                            email: userEmail,
                            address: userAddress,
                            total: total 
                        })
                    })
                    .then(r => r.json())
                    .then(data => {
                        if(data.success) {
                            window.location.href = "order-success.html";
                        } else {
                            showToast("Order save failed!");
                        }
                    })
                    .catch(err => {
                        console.error("Fetch Error:", err);
                        showToast("Order processed locally.");
                        window.location.href = "order-success.html";
                    });
                },
                prefill: { email: userEmail },
                theme: { color: "#5b1d2a" }
            }).open();
        });
    }
    // Add this to your script.js if you don't have it yet!
document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const input = e.target.parentElement.querySelector('.qty-input');
        if (e.target.classList.contains('plus')) input.value++;
        else if (input.value > 1) input.value--;
        
        // After changing input.value, trigger a function to re-calculate totals
        updateCartTotals(); 
    });
});
});