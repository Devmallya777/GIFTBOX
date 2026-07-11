/* ==========================================================
   ZARIA ULTIMATE FUNCTIONAL SCRIPT (MongoDB Enabled)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
   // --- 2. MONGODB DATA FETCHING (Now with Filter & Sort) ---
let allProducts = []; // Store fetched products globally to filter without re-fetching

async function fetchProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    try {
        const response = await fetch('/api/products');
        allProducts = await response.json(); // Save to global array
        renderProducts(allProducts); // Render initial state
    } catch (err) { console.error("Error loading products:", err); }
}

function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p._id}">
                <div class="product-image" style="background-color: ${p.color};">
                    <div class="hover-actions">
                        <button onclick="event.preventDefault(); toggleWishlist('${p._id}')"><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </a>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="price" data-price="${p.price}">₹${p.price}</p>
                <button class="add-to-cart" onclick="addToCart('${p._id}', '${p.name}', ${p.price}, '${p.color}')">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// --- FILTER & SORT HANDLERS ---
document.addEventListener("DOMContentLoaded", () => {
    // Sort Event
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            let sorted = [...allProducts];
            if (e.target.value.includes('Low to High')) sorted.sort((a, b) => a.price - b.price);
            if (e.target.value.includes('High to Low')) sorted.sort((a, b) => b.price - a.price);
            renderProducts(sorted);
        });
    }

    // Filter Event
    const filterBtn = document.querySelector('.btn-apply-filters');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            // Example: Only show products under a certain price or specific criteria
            // Add your logic here based on checkboxes
            showToast("Filters Applied!");
        });
    }
    
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

    // --- 2. MONGODB DATA FETCHING ---
    async function fetchProducts() {
        const grid = document.getElementById('product-grid');
        if (!grid) return;
        try {
            const response = await fetch('/api/products');
            const products = await response.json();
            grid.innerHTML = products.map(p => `
                <div class="product-card">
                    ${p.isNew ? '<div class="badge badge-new">NEW</div>' : ''}
                    <a href="product.html?id=${p._id}">
                        <div class="product-image" style="background-color: ${p.color};">
                            <div class="hover-actions">
                                <button onclick="event.preventDefault(); toggleWishlist('${p._id}')"><i class="fa-regular fa-heart"></i></button>
                                <button onclick="event.preventDefault(); alert('Quick View Active')"><i class="fa-regular fa-eye"></i></button>
                            </div>
                        </div>
                    </a>
                    <div class="product-info">
                        <h4>${p.name}</h4>
                        <p class="price">₹${p.price}</p>
                        <button class="add-to-cart" onclick="addToCart('${p._id}', '${p.name}', ${p.price}, '${p.color}')">Add to Cart</button>
                    </div>
                </div>
            `).join('');
        } catch (err) { console.error("Error loading products:", err); }
    }

    // RENDER CART PAGE
    window.renderCart = async () => {
        const container = document.querySelector('.cart-items-container');
        if (!container) return;
        try {
            const response = await fetch('/api/cart');
            const cart = await response.json();
            container.innerHTML = `<div class="cart-header"><span>Product</span><span>Quantity</span><span>Total</span></div>` + 
            cart.map((item, index) => `
                <div class="cart-item">
                    <div class="item-info">
                        <div class="item-image" style="background-color: ${item.color};"></div>
                        <div class="item-details">
                            <h4>${item.name}</h4>
                            <p class="item-price">₹${item.price}</p>
                            <button class="btn-remove" onclick="removeFromCart('${item.productId}')">Remove</button>
                        </div>
                    </div>
                    <div class="item-quantity">
                        <div class="quantity-selector">
                            <button class="qty-btn">-</button><input type="number" value="${item.quantity}" class="qty-input" readonly><button class="qty-btn">+</button>
                        </div>
                    </div>
                    <div class="item-total"><p>₹${item.price * item.quantity}</p></div>
                </div>
            `).join('');
        } catch (err) { console.error("Cart Load Error:", err); }
    };

    async function loadCheckoutSummary() {
        const container = document.getElementById('checkout-items');
        if (!container) return;
        try {
            const response = await fetch('/api/cart');
            const cart = await response.json();
            let subtotal = 0;
            container.innerHTML = cart.map(item => {
                subtotal += (item.price * item.quantity);
                return `<div class="checkout-item"><div class="img-box" style="background-color: ${item.color};"></div><div class="checkout-item-info"><h4>${item.name}</h4></div><p>₹${item.price}</p></div>`;
            }).join('');
            document.getElementById('subtotal').innerText = `₹${subtotal}`;
            document.getElementById('total').innerText = `₹${subtotal}`;
        } catch (err) { console.error("Checkout Load Error:", err); }
    }

    // --- 3. MONGODB CART LOGIC ---
    window.addToCart = async (productId, name, price, color) => {
        try {
            const response = await fetch('/api/cart/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId, name, price, color, quantity: 1 })
            });
            if (response.ok) showToast(`${name} added to cart!`);
        } catch (err) { console.error("Cart Error:", err); }
    };

    window.removeFromCart = async (productId) => {
        try {
            await fetch(`/api/cart/remove/${productId}`, { method: 'DELETE' });
            showToast("Item removed.");
            location.reload(); 
        } catch (err) { console.error("Remove Error:", err); }
    };

    // --- 4. INITIALIZATION ---
    fetchProducts();
    renderCart();
    loadCheckoutSummary();

    // --- 5. GLOBAL EVENT LISTENERS ---
    const loader = document.getElementById('zaria-loader');
    if (loader) window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));

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

    // Dark Mode & Accordions (unchanged)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
    document.querySelectorAll(".accordion").forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
        });
    });
});
    
});