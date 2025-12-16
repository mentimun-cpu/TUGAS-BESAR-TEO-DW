// ============================
// COFFEEBEAN - MAIN SCRIPT
// ============================
console.log("CoffeeBean Script Loading...");

// ============================
// GLOBAL VARIABLES
// ============================
const menuList = [
  { name: "Americano", price: 25000, img: "images/foto_menu/hot/Americano.png", category:"hot" },
  { name: "Cappuccino", price: 30000, img: "images/foto_menu/hot/Cappuccino.jpeg" , category:"hot"},
  { name: "Espresso", price: 28000, img: "images/foto_menu/hot/Espresso.jpeg", category:"hot" },
  { name: "Latte", price: 32000, img: "images/foto_menu/hot/Latte.jpeg" , category:"hot"},
  { name: "Macchiato", price: 22000, img:"images/foto_menu/hot/Macchiato.jpeg", category:"hot" },
  { name: "Mocha", price: 29000, img: "images/foto_menu/hot/Mocha.jpeg", category:"hot" },

  { name: "Iced Ameri", price: 22000, img: "images/foto_menu/cold/Iced Americano.jpeg", category:"cold" },
  { name: "Cold Brew", price: 28000, img: "images/foto_menu/cold/Cold Brew.jpeg", category:"cold"},
  { name: "Cappu Ice", price: 30000, img: "images/foto_menu/cold/Iced Cappuccino.png", category:"cold" },
  { name: "Iced Mocha", price: 32000, img: "images/foto_menu/cold/Iced Mocha.jpeg" , category:"cold"},
  { name: "Black Coffee", price: 20000, img:"images/foto_menu/cold/Cold Black Coffee.jpeg", category:"cold" },

  { name: "Caramel", price: 32000, img: "images/foto_menu/spesial/Caramel Macchiato.jpeg", category:"spesial" },
  { name: "Affogato", price: 35000, img:"images/foto_menu/spesial/Affogato.jpeg", category:"spesial"},
  { name: "Flavored", price: 33000, img:"images/foto_menu/spesial/Flavored Latte.jpeg", category:"spesial" },
  { name: "Viet Drip", price: 36000, img:"images/foto_menu/spesial/Vietnam Drip.png", category:"spesial" },

];
let cart = [];
let qtyData = Array(menuList.length).fill(0);

// ============================
// DEBUG NAVBAR VISIBILITY
// ============================
function debugNavbar() {
  console.log("=== NAVBAR DEBUG INFO ===");
  
  const nav = document.querySelector('nav');
  console.log("Nav element found:", !!nav);
  
  if (nav) {
    console.log("Nav display:", window.getComputedStyle(nav).display);
    console.log("Nav visibility:", window.getComputedStyle(nav).visibility);
    console.log("Nav position:", window.getComputedStyle(nav).position);
    console.log("Nav z-index:", window.getComputedStyle(nav).zIndex);
    console.log("Nav classList:", nav.classList);
  }
  
  const desktopMenu = document.querySelector('.hidden.md\\:flex') || document.querySelector('[class*="md:flex"]');
  console.log("Desktop menu found:", !!desktopMenu);
  
  if (desktopMenu) {
    console.log("Desktop menu classes:", desktopMenu.classList);
    console.log("Desktop menu display:", window.getComputedStyle(desktopMenu).display);
  }
}

// ============================
// FORCE NAVBAR VISIBILITY
// ============================
function forceNavbarVisibility() {
  console.log("Forcing navbar visibility...");
  
  const nav = document.querySelector('nav');
  if (nav) {
    // Remove any hiding classes
    nav.classList.remove('hidden');
    
    // Force visibility styles
    nav.style.display = 'block';
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.zIndex = '1000';
    nav.style.backgroundColor = 'white';
    nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    nav.style.width = '100%';
    
    console.log("Navbar visibility forced successfully");
  } else {
    console.error("Navbar element not found!");
  }
  
  // Force desktop menu visibility
  const desktopMenu = document.querySelector('.hidden.md\\:flex') || document.querySelector('[class*="md:flex"]');
  if (desktopMenu) {
    desktopMenu.classList.remove('hidden');
    desktopMenu.style.display = 'flex';
    desktopMenu.style.visibility = 'visible';
    console.log("Desktop menu visibility forced");
  }
}

// ============================
// HAMBURGER MENU FUNCTIONALITY
// ============================
function initializeHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  
  if (!hamburger || !navMenu) {
    console.error("Hamburger or nav menu elements not found!");
    return;
  }
  
  hamburger.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    navMenu.classList.toggle("hidden");
    hamburger.classList.toggle("open");
    
    console.log("Hamburger clicked, menu hidden:", navMenu.classList.contains("hidden"));
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener("click", function(e) {
    if (!navMenu.classList.contains("hidden")) {
      const isClickInsideMenu = navMenu.contains(e.target);
      const isClickOnHamburger = hamburger.contains(e.target);
      
      if (!isClickInsideMenu && !isClickOnHamburger) {
        navMenu.classList.add("hidden");
        hamburger.classList.remove("open");
      }
    }
  });
  
  // Mobile navigation buttons
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      if (target) {
        showSlide(target);
        navMenu.classList.add("hidden");
        hamburger.classList.remove("open");
      }
    });
  });
}

// ============================
// DESKTOP NAVIGATION
// ============================
function initializeDesktopNavigation() {
  // Desktop navigation buttons
  document.querySelectorAll('.nav-desktop-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const slideId = this.textContent.trim().toLowerCase();
      showSlide(slideId === 'home' ? 'home' : 
                slideId === 'menu' ? 'menu' : 
                slideId === 'about' ? 'about' : 
                slideId === 'order' ? 'order' : 'home');
    });
  });
  
  // Direct onclick handlers for buttons with onclick attributes
  document.querySelectorAll('button[onclick*="showSlide"]').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick');
    if (onclickAttr && onclickAttr.includes('showSlide')) {
      const slideId = onclickAttr.match(/showSlide\('(.+)'\)/);
      if (slideId && slideId[1]) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          showSlide(slideId[1]);
        });
      }
    }
  });
}

// ============================
// CART FUNCTIONALITY
// ============================
function initializeCart() {
  // Cart buttons
  document.querySelectorAll('#cart-button, #cart-button-mobile, .cart-desktop-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      showSlide('order');
    });
  });
}

// ============================
// SLIDE MANAGEMENT
// ============================
function showSlide(slideId) {
  console.log("Showing slide:", slideId);
  
  // Hide all slides
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.add('hidden');
  });
  
  // Show selected slide
  const targetSlide = document.getElementById(slideId);
  if (targetSlide) {
    targetSlide.classList.remove('hidden');
    
    // Special actions for specific slides
    switch(slideId) {
      case 'menu':
        setTimeout(renderMenu, 50);
        break;
      case 'order':
        renderCart();
        break;
      case 'about':
        setTimeout(animateAboutSection, 50);
        break;
    }
  } else {
    console.error("Slide not found:", slideId);
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Ensure navbar is still visible
  setTimeout(forceNavbarVisibility, 100);
}

// ============================
// MENU RENDERING
// ============================
function renderMenu() {
  const menuContainer = document.getElementById("menu-items");
  const template = document.getElementById("menu-template");
  
  if (!menuContainer || !template) {
    console.error("Menu container or template not found!");
    return;
  }
  
  menuContainer.innerHTML = "";
  
  menuList.forEach((item, index) => {
    const clone = template.content.cloneNode(true);

    // Set data
    const menuImg = clone.querySelector(".menu-img");
    if (menuImg) {
      menuImg.src = item.img;
      menuImg.alt = item.name;
    }
    
    const title = clone.querySelector(".title");
    if (title) title.textContent = item.name;
    
    const price = clone.querySelector(".price");
    if (price) price.textContent = "Rp " + item.price.toLocaleString();

    const qtySpan = clone.querySelector(".qty");
    if (qtySpan) qtySpan.textContent = qtyData[index];

    // Plus button
    const plusBtn = clone.querySelector(".plus");
    if (plusBtn) {
      plusBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        qtyData[index]++;
        if (qtySpan) qtySpan.textContent = qtyData[index];
        updateCart();
      });
    }

    // Minus button
    const minusBtn = clone.querySelector(".minus");
    if (minusBtn) {
      minusBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (qtyData[index] > 0) {
          qtyData[index]--;
          if (qtySpan) qtySpan.textContent = qtyData[index];
          updateCart();
        }
      });
    }

    // Add to cart button
    const addToCartBtn = clone.querySelector(".add-to-cart-btn");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        qtyData[index]++;
        if (qtySpan) qtySpan.textContent = qtyData[index];
        updateCart();
        
        // Feedback animation
        addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Ditambahkan!';
        addToCartBtn.classList.remove('from-amber-500', 'to-amber-600');
        addToCartBtn.classList.add('from-green-500', 'to-green-600');
        
        setTimeout(() => {
          addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Tambah ke Keranjang';
          addToCartBtn.classList.remove('from-green-500', 'to-green-600');
          addToCartBtn.classList.add('from-amber-500', 'to-amber-600');
        }, 1500);
      });
    }

    menuContainer.appendChild(clone);
  });
  
  console.log("Menu rendered successfully");
}

// ============================
// FILTER FUNCTIONALITY
// ============================
function initializeFilter() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  if (categoryButtons.length === 0) {
    console.log("No category buttons found");
    return;
  }
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-amber-700', 'text-white');
        btn.classList.add('bg-white', 'text-amber-700');
      });
      
      // Add active class to clicked button
      this.classList.remove('bg-white', 'text-amber-700');
      this.classList.add('active', 'bg-amber-700', 'text-white');
      
      // Filter menu items
      const category = this.getAttribute('data-category');
      filterMenuItems(category);
    });
  });
}

function filterMenuItems(category) {
  const menuCards = document.querySelectorAll('#menu-items .card');
  
  if (menuCards.length === 0) {
    console.log("No menu cards found for filtering");
    return;
  }
  
  menuCards.forEach((card, index) => {
    const item = menuList[index];
    
    if (!item) return;
    
    if (category === 'all' || item.category === category) {
      card.style.display = 'flex';
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    } else {
      card.style.display = 'none';
    }
  });
}

// ============================
// CART MANAGEMENT
// ============================
function updateCart() {
  cart = [];

  menuList.forEach((item, i) => {
    if (qtyData[i] > 0) {
      cart.push({
        name: item.name,
        price: item.price,
        qty: qtyData[i],
        subtotal: qtyData[i] * item.price
      });
    }
  });

  renderCart();
  updateCartCount();
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (!cartList) {
    console.error("Cart list element not found!");
    return;
  }

  cartList.innerHTML = "";

  let totalQty = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    const emptyDiv = document.createElement("div");
    emptyDiv.id = "empty-cart";
    emptyDiv.className = "text-center py-12";
    emptyDiv.innerHTML = `
      <i class="fas fa-shopping-cart text-4xl text-gray-300 mb-4"></i>
      <p class="text-gray-500 text-lg">Keranjang masih kosong</p>
      <p class="text-gray-400 text-sm mt-2">Tambahkan menu favorit Anda dari halaman menu</p>
      <button onclick="showSlide('menu')" 
              class="mt-4 bg-amber-600 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-700 transition">
        Lihat Menu
      </button>
    `;
    cartList.appendChild(emptyDiv);
  } else {
    cart.forEach(item => {
      totalQty += item.qty;
      totalPrice += item.subtotal;

      const cartItem = document.createElement("div");
      cartItem.className = "flex justify-between items-center bg-amber-50 p-4 rounded-lg mb-3";
      cartItem.innerHTML = `
        <div>
          <h4 class="font-bold text-gray-800">${item.name}</h4>
          <p class="text-gray-600 text-sm">Rp ${item.price.toLocaleString()} × ${item.qty}</p>
        </div>
        <div class="text-right">
          <p class="font-bold text-amber-700">Rp ${item.subtotal.toLocaleString()}</p>
          <button class="remove-item text-red-500 text-sm hover:text-red-700 mt-1" data-name="${item.name}">
            <i class="fas fa-trash"></i> Hapus
          </button>
        </div>
      `;
      
      cartList.appendChild(cartItem);
    });

    // Add remove event listeners
    setTimeout(() => {
      document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
          const itemName = this.getAttribute('data-name');
          removeFromCart(itemName);
        });
      });
    }, 100);
  }

  // Update cart count and total
  if (cartCount) {
    cartCount.textContent = `${totalQty} item${totalQty !== 1 ? 's' : ''}`;
  }
  
  if (cartTotal) {
    cartTotal.textContent = `Rp ${totalPrice.toLocaleString()}`;
  }
}

function removeFromCart(itemName) {
  const index = menuList.findIndex(item => item.name === itemName);
  if (index !== -1) {
    qtyData[index] = 0;
    updateCart();
    
    // Reset quantity display in menu
    const qtySpans = document.querySelectorAll('.qty');
    if (qtySpans[index]) {
      qtySpans[index].textContent = '0';
    }
    
    // Show feedback
    alert(`${itemName} telah dihapus dari keranjang`);
  }
}

function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  
  // Update badge di navbar
  const badgeDesktop = document.getElementById('cart-count-badge');
  const badgeMobile = document.getElementById('cart-count-badge-mobile');
  
  if (badgeDesktop) badgeDesktop.textContent = totalItems;
  if (badgeMobile) badgeMobile.textContent = totalItems;
  
  // Update cart count di CTA button homepage
  const ctaCartCount = document.getElementById('cta-cart-count');
  if (ctaCartCount) ctaCartCount.textContent = totalItems;
  
  console.log("Cart count updated:", totalItems);
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong! Tambahkan menu terlebih dahulu.");
    return;
  }

  const total = cart.reduce((sum, i) => sum + i.subtotal, 0);
  
  let message = "======= RINCIAN PESANAN =======\n\n";
  cart.forEach(i => {
    message += `• ${i.name} x${i.qty} = Rp ${i.subtotal.toLocaleString()}\n`;
  });
  message += `\nTOTAL: Rp ${total.toLocaleString()}\n`;
  message += `\nTerima kasih telah memesan di CoffeeBean!`;
  message += `\n\nPesanan akan diproses segera.`;

  const confirmCheckout = confirm(message + "\n\nKlik OK untuk konfirmasi checkout.");
  
  if (confirmCheckout) {
    alert("✅ Pesanan berhasil! Terima kasih telah berbelanja di CoffeeBean.");
    
    // Reset cart
    qtyData.fill(0);
    updateCart();
    
    // Reset quantity displays
    document.querySelectorAll(".qty").forEach(q => q.textContent = 0);
    
    // Go back to home
    setTimeout(() => {
      showSlide('home');
    }, 500);
  }
}

// ============================
// ABOUT SECTION ANIMATION
// ============================
function animateAboutSection() {
  const aboutItems = document.querySelectorAll('.about-item');
  if (aboutItems.length > 0) {
    aboutItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('opacity-100', 'translate-y-0');
      }, index * 200);
    });
  }
}

// ============================
// NEWSLETTER FUNCTIONALITY
// ============================
function initializeNewsletter() {
  const newsletterBtn = document.querySelector('.newsletter-btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function() {
      const emailInput = document.querySelector('input[type="email"]');
      if (emailInput && emailInput.value && emailInput.value.includes('@')) {
        // Success state
        newsletterBtn.innerHTML = '<i class="fas fa-check"></i> Terima kasih!';
        newsletterBtn.classList.remove('bg-white', 'text-amber-900', 'hover:bg-amber-100');
        newsletterBtn.classList.add('bg-green-500', 'text-white', 'hover:bg-green-600');
        
        setTimeout(() => {
          alert('Terima kasih telah berlangganan newsletter CoffeeBean! Anda akan menerima info terbaru dari kami.');
          emailInput.value = '';
          newsletterBtn.innerHTML = 'Berlangganan';
          newsletterBtn.classList.remove('bg-green-500', 'text-white', 'hover:bg-green-600');
          newsletterBtn.classList.add('bg-white', 'text-amber-900', 'hover:bg-amber-100');
        }, 500);
      } else {
        // Error state
        emailInput.classList.add('ring-2', 'ring-red-500');
        setTimeout(() => {
          emailInput.classList.remove('ring-2', 'ring-red-500');
        }, 2000);
        alert('Silakan masukkan alamat email yang valid.');
        emailInput.focus();
      }
    });
  }
}

// ============================
// INITIALIZE APP
// ============================
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM Content Loaded - Initializing CoffeeBean App");
  
  // Debug first
  debugNavbar();
  
  // Force navbar visibility immediately
  forceNavbarVisibility();
  
  // Initialize all components
  initializeHamburgerMenu();
  initializeDesktopNavigation();
  initializeCart();
  initializeFilter();
  initializeNewsletter();
  
  // Set default slide
  setTimeout(() => {
    showSlide('home');
    renderMenu();
    updateCartCount();
    
    // Final check
    setTimeout(() => {
      console.log("CoffeeBean App Initialized Successfully!");
      console.log("Cart items:", cart.length);
      console.log("Menu items:", menuList.length);
    }, 500);
  }, 100);
});

// ============================
// WINDOW LOAD EVENT - FINAL INIT
// ============================
window.addEventListener('load', function() {
  console.log("Window Loaded - Finalizing App");
  
  // One more check for navbar
  setTimeout(forceNavbarVisibility, 500);
  
  // Add some visual feedback for debugging
  const nav = document.querySelector('nav');
  if (nav) {
    setTimeout(() => {
      nav.style.transition = 'all 0.3s ease';
    }, 1000);
  }
});

// ============================
// EXPORT FUNCTIONS FOR GLOBAL USE
// ============================
// Make functions available globally for onclick attributes
window.showSlide = showSlide;
window.checkout = checkout;
window.updateCart = updateCart;
window.renderMenu = renderMenu;
window.forceNavbarVisibility = forceNavbarVisibility;


