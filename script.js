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


// --- 3. STATE MANAGEMENT & FLIPKART-STYLE FILTERING ---
const allProducts = [
    { id: 1, name: "Midnight Velvet Box", price: 3499, category: "Wedding Hampers", color: "#d0b8bc" },
    { id: 2, name: "Golden Hour Hamper", price: 5200, category: "Wedding Hampers", color: "#f9f0f0" },
    { id: 3, name: "Classic Silk Essentials", price: 2100, category: "Festive Specials", color: "#c69c6d" },
    { id: 4, name: "Luxury Corporate Set", price: 2800, category: "Corporate Gifting", color: "#5b1d2a" },
    { id: 5, name: "Anniversary Bloom Box", price: 3900, category: "Anniversary", color: "#d0b8bc" },
    { id: 6, name: "Festive Joy Hamper", price: 4500, category: "Festive Specials", color: "#c69c6d" },
    { id: 7, name: "Extra Special Gift", price: 3200, category: "Wedding Hampers", color: "#3a1119" }
];

let currentWorkingList = [...allProducts]; // The actively displayed list
let currentGridPage = 1;
const itemsPerPage = 3; 

// The Master Function that draws the products onto the screen
function updateProductView() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // 1. Slice array for pagination (e.g., items 1 to 3)
    const start = (currentGridPage - 1) * itemsPerPage;
    const paginated = currentWorkingList.slice(start, start + itemsPerPage);

    // 2. Draw Cards (Added type="button" to prevent page reload bugs!)
    grid.innerHTML = paginated.map(p => `
        <div class="product-card">
            <div class="product-image" style="background-color: ${p.color};">
                <div class="hover-actions">
                    <button type="button" onclick="event.preventDefault(); toggleWishlist('${p.id}')"><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="price">₹${p.price}</p>
                <button type="button" class="add-to-cart" onclick="event.preventDefault(); addToCart('${p.id}', '${p.name}', ${p.price}, '${p.color}')">Add to Cart</button>
            </div>
        </div>
    `).join('');

    // 3. Draw Pagination Buttons
    const totalPages = Math.ceil(currentWorkingList.length / itemsPerPage);
    const nav = document.querySelector('.pagination');
    if (nav) {
        nav.innerHTML = Array.from({length: totalPages}, (_, i) => 
            `<button type="button" class="page-btn ${currentGridPage === i+1 ? 'active' : ''}" onclick="goToPage(${i+1})">${i+1}</button>`
        ).join('');
    }
    
    // 4. Update the "Showing 1-3 of 7 results" text dynamically
    const resultCount = document.querySelector('.result-count');
    if (resultCount) {
        const end = Math.min(start + itemsPerPage, currentWorkingList.length);
        resultCount.innerText = `Showing ${currentWorkingList.length === 0 ? 0 : start + 1}-${end} of ${currentWorkingList.length} results`;
    }
}

// Function to change page and scroll smoothly to the top of the products
window.goToPage = (p) => { 
    currentGridPage = p; 
    updateProductView(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
};

// The Master Engine that handles Both Filtering AND Sorting together
function applyFiltersAndSort() {
    // A. Apply Filters (Price + Categories)
    const minInput = document.querySelector('input[placeholder="Min ₹"]');
    const maxInput = document.querySelector('input[placeholder="Max ₹"]');
    const min = minInput && minInput.value ? parseInt(minInput.value) : 0;
    const max = maxInput && maxInput.value ? parseInt(maxInput.value) : Infinity;
    
    const checkboxes = document.querySelectorAll('.custom-checkbox input:checked');
    const checkedCats = Array.from(checkboxes).map(el => el.parentElement.innerText.trim());

    currentWorkingList = allProducts.filter(p => {
        const matchesPrice = p.price >= min && p.price <= max;
        // If no checkboxes are ticked, show EVERYTHING (Flipkart style)
        const matchesCat = checkedCats.length === 0 || checkedCats.includes(p.category);
        return matchesPrice && matchesCat;
    });

    // B. Apply Sort to the newly filtered list
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        const val = sortDropdown.value;
        
        // STRICT matching to fix the High/Low bug
        if (val === 'Price: Low to High') {
            currentWorkingList.sort((a, b) => a.price - b.price); // Lowest price first
        } else if (val === 'Price: High to Low') {
            currentWorkingList.sort((a, b) => b.price - a.price); // Highest price first
        }
        // If "Featured" is selected, it leaves the array as-is
    }

    // C. Reset to Page 1 and Draw
    currentGridPage = 1;
    updateProductView();
}

// --- 4. GLOBAL EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
    
    // Listen for Sort Changes
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', applyFiltersAndSort);
    }

    // Listen for Filter Button Click
    const filterBtn = document.querySelector('.btn-apply-filters');
    if (filterBtn) {
        filterBtn.addEventListener('click', (e) => {
            e.preventDefault(); // SUPER IMPORTANT: Stops the page from refreshing!
            applyFiltersAndSort();
            showToast("Filters applied!");
        });
    }
    
    // Draw the grid when the page first loads
    updateProductView();
    
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


