// Enhanced script for home_appliences.html

// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
    // Hide loader if any
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  
    // --- Search Functionality ---
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");
  
    searchIcon?.addEventListener("click", () => {
      const query = searchInput.value.trim();
      alert(query ? `You searched for: ${query}` : "Please enter a search term.");
    });
  
    // --- Sign In Redirect ---
    const signInLink = document.querySelector(".signin-content .btn button");
    signInLink?.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  
    // --- Scroll To Top (if footer added) ---
    const backToTop = document.querySelector(".foot-panel1 a");
    backToTop?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // --- Theme Toggle Button ---
    const themeToggleBtn = document.createElement("button");
    themeToggleBtn.textContent = "Toggle Theme";
    themeToggleBtn.style.cssText =
      "position:fixed;bottom:20px;right:20px;padding:10px;z-index:999;cursor:pointer;border:none;";
    document.body.appendChild(themeToggleBtn);
  
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
      );
    });
  
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    // --- Cart Feature ---
    const cartIcon = document.querySelector(".nav-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function updateCartDisplay() {
      const cartSpan = document.querySelector(".nav-cart span");
      if (cartSpan) cartSpan.textContent = `Cart (${cart.length})`;
    }
  
    cartIcon.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  
    updateCartDisplay();
  
    // --- Add to Cart Buttons ---
    document.querySelectorAll(".box").forEach(box => {
      const btn = box.querySelector("button");
      const name = box.querySelector(".img-des a")?.textContent.trim();
      const priceText = box.querySelector(".price span")?.textContent.trim();
      const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
  
      btn?.addEventListener("click", () => {
        cart.push({ name, price, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
        alert(`${name} added to cart!`);
      });
    });
  
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

    if (window.innerWidth <= 768) toggleMenu();
    navToggle.addEventListener("click", toggleMenu);
  });
  