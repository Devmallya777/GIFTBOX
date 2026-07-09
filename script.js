<<<<<<< HEAD
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
=======
/* ==========================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (script.js)
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. GLOBAL NAVIGATION & UI
    // ==========================================

    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        // Check memory for dark mode preference
        if (localStorage.getItem('zaria-dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.textContent = '☀️';
        }
        
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = '☀️';
                localStorage.setItem('zaria-dark-mode', 'enabled');
            } else {
                themeToggleBtn.textContent = '🌙';
                localStorage.setItem('zaria-dark-mode', null);
            }
        });
    }

    // Header Logo Click -> Go Home
    const logos = document.querySelectorAll('.logo-container');
    logos.forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => window.location.href = 'index.html');
    });

    // Newsletter Footer Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thank you! ${email} has been added to our exclusive VIP list.`);
            newsletterForm.reset();
        });
    }

    // ==========================================
    // 2. SEARCH & FILTER LOGIC
    // ==========================================

    const searchIcon = document.querySelector('.fa-magnifying-glass');
    if (searchIcon) {
        searchIcon.style.cursor = 'pointer';
        searchIcon.addEventListener('click', () => {
            const searchTerm = prompt("What luxury gift are you looking for?");
            
            if (searchTerm) {
                // If we are already on the products page, filter them
                if (window.location.pathname.includes('products.html')) {
                    filterProducts(searchTerm);
                } else {
                    // Otherwise, save the search and redirect to the shop
                    localStorage.setItem('zaria-search', searchTerm);
                    window.location.href = 'products.html';
                }
            }
        });
    }

    // Check if we arrived on the shop page with a saved search
    if (window.location.pathname.includes('products.html')) {
        const savedSearch = localStorage.getItem('zaria-search');
        if (savedSearch) {
            filterProducts(savedSearch);
            localStorage.removeItem('zaria-search'); // Clear it after filtering
        }
    }

    function filterProducts(term) {
        const query = term.toLowerCase();
        let found = false;
        const products = document.querySelectorAll('.product-card');
        
        products.forEach(card => {
            const title = card.querySelector('h4').innerText.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        const resultCount = document.querySelector('.result-count');
        if (resultCount) {
            resultCount.innerText = found ? `Showing search results for "${term}"` : `No results found for "${term}"`;
        }
    }

    // ==========================================
    // 3. PRODUCT CART & MATH LOGIC
    // ==========================================

    // Quantity Selectors
    const qtySelectors = document.querySelectorAll('.quantity-selector');
    qtySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.qty-btn:first-child');
        const plusBtn = selector.querySelector('.qty-btn:last-child');
        const input = selector.querySelector('.qty-input');

        if (minusBtn && plusBtn && input) {
            minusBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (parseInt(input.value) > 1) {
                    input.value = parseInt(input.value) - 1;
                }
            });
            plusBtn.addEventListener('click', (e) => {
                e.preventDefault();
                input.value = parseInt(input.value) + 1;
            });
        }
    });

    // Remove from Checkout Math
    const checkoutRemoveBtns = document.querySelectorAll('.remove-checkout-item');
    checkoutRemoveBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const item = btn.closest('.checkout-item');
            const priceElement = item.querySelector('.checkout-item-price');
            
            let itemPrice = parseInt(priceElement.getAttribute('data-price'));
            const summaryRows = document.querySelectorAll('.summary-row span:nth-child(2)');
            const totalDisplay = document.querySelector('.summary-total span:nth-child(2)');
            const payButton = document.querySelector('.btn-pay-now');

            if (item && summaryRows.length > 0 && totalDisplay) {
                let currentSubtotalText = summaryRows[0].innerText.replace('₹', '').replace(',', '');
                let newSubtotal = parseInt(currentSubtotalText) - itemPrice;
                summaryRows[0].innerText = '₹' + newSubtotal.toLocaleString('en-IN');
                
                let currentTotalText = totalDisplay.innerText.replace('₹', '').replace(',', '');
                let newTotal = parseInt(currentTotalText) - itemPrice;
                totalDisplay.innerText = '₹' + newTotal.toLocaleString('en-IN');
                
                if(payButton) {
                    // Update the button data attribute for Razorpay
                    payButton.setAttribute('data-total', newTotal);
                    payButton.innerHTML = `Pay ₹${newTotal.toLocaleString('en-IN')} Now <i class="fa-solid fa-lock"></i>`;
                }
                item.remove();
            }
        });
    });

    // ==========================================
    // 4. RAZORPAY INTEGRATION (Checkout)
    // ==========================================
    
    const payBtn = document.querySelector('.btn-pay-now');
    if (payBtn) {
        payBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 1. Get the current total from the button (default to 10264 if not set)
            let currentTotal = payBtn.getAttribute('data-total') || 10264;
            
            // 2. Razorpay requires the amount in Paise (multiply by 100)
            let amountInPaise = parseInt(currentTotal) * 100;

            // 3. Configure Razorpay Options (Test Mode)
            var options = {
                "key": "rzp_test_YOUR_API_KEY", // Replace with your actual Test Key from Razorpay Dashboard
                "amount": amountInPaise, 
                "currency": "INR",
                "name": "ZARIA",
                "description": "The Art of Gifting",
                "image": "logo.png", // Ensure logo.png is in your folder
                "handler": function (response){
                    // This runs when the payment is SUCCESSFUL
                    console.log(response);
                    alert("Payment Successful! 🎉\nPayment ID: " + response.razorpay_payment_id + "\nYour luxurious gift box is being prepared.");
                    window.location.href = "index.html"; 
                },
                "prefill": {
                    "name": "Devmallya Chakraborty", // Auto-filling based on checkout form
                    "email": "user@example.com",
                    "contact": "9999999999"
                },
                "theme": {
                    "color": "#722F37" // ZARIA's signature wine color for the Razorpay popup!
                }
            };

            // 4. Open the Razorpay Checkout Window
            var rzp1 = new Razorpay(options);
            
            rzp1.on('payment.failed', function (response){
                alert("Payment Failed. Reason: " + response.error.description);
            });
            
            rzp1.open();
        });
    }

>>>>>>> 0260079728ac1199b6244234002175db1949fb84
});