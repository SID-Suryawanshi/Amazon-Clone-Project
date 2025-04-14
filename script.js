document.addEventListener("DOMContentLoaded", function () {
    // --- Search Functionality ---
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    searchIcon.addEventListener("click", () => {
        const query = searchInput.value.trim();
        alert(query ? `You searched for: ${query}` : "Please enter a search term.");
    });

    // --- Sign In Redirect ---
    const signInButton = document.querySelector(".signin-content .btn button");
    if (signInButton) {
        signInButton.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

    // --- Scroll To Top ---
    document.querySelector(".foot-panel1 a").addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // --- Cart System with localStorage ---
    const cartIcon = document.querySelector(".nav-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartIcon.addEventListener("click", () => {
        alert(`You have ${cart.length} item(s) in your cart.`);
    });

    function addToCart(item) {
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartCount = document.querySelector(".nav-cart span");
        cartCount.textContent = `Cart (${cart.length})`;
    }

    updateCartDisplay();

    // --- Theme Switcher ---
    const themeToggleBtn = document.createElement("button");
    themeToggleBtn.textContent = "Toggle Theme";
    themeToggleBtn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px;border:none;z-index:999;cursor:pointer;";
    document.body.appendChild(themeToggleBtn);

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Handle Add to Cart Buttons
document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const productBox = btn.closest(".box-content");
        const item = {
            name: productBox.dataset.name,
            price: parseFloat(productBox.dataset.price)
        };

        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
        alert(`${item.name} added to cart!`);
    });
});

const item = {
    name: productBox.dataset.name,
    price: parseFloat(productBox.dataset.price),
    quantity: 1
  };
  
// --- Mobile Navbar Toggle ---
const navToggle = document.querySelector(".nav2-all");
const navLinks = document.querySelectorAll(".navbar2 .nav2-position:not(.nav2-all)");

let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;
  navLinks.forEach(link => {
    link.style.display = isOpen ? "flex" : "none";
  });
}

// Init: hide links on small screens
if (window.innerWidth <= 768) toggleMenu();

navToggle.addEventListener("click", toggleMenu);


});
