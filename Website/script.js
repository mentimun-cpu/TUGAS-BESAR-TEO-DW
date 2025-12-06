// ============================
// HAMBURGER MENU
// ============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden"); 
  hamburger.classList.toggle("open");
});

// ============================
// SLIDE SWITCHER
// ============================
function showSlide(slideId) {
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.add('hidden');
  });
  
  document.getElementById(slideId).classList.remove('hidden');
  
  if (slideId === 'menu') {
    setTimeout(() => {
      renderMenu();
    }, 100);
  }
  
  if (slideId === 'order') {
    renderCart();
  }
  
  if (slideId === 'about') {
    setTimeout(() => {
      animateAboutSection();
    }, 100);
  }
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================
// ANIMATE ABOUT SECTION
// ============================
function animateAboutSection() {
  const aboutItems = document.querySelectorAll('.about-item');
  aboutItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('opacity-100', 'translate-y-0');
    }, index * 200);
  });
}


document.addEventListener('DOMContentLoaded', function() {

  const mobileMenuItems = document.querySelectorAll('#nav-menu button');
  mobileMenuItems.forEach(item => {
    item.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      showSlide(target);
      navMenu.classList.add('hidden');
      hamburger.classList.remove('open');
    });
  });
  

  const cartButtons = document.querySelectorAll('#cart-button, #cart-button-mobile');
  cartButtons.forEach(button => {
    button.addEventListener('click', function() {
      showSlide('order');
    });
  });
  

  showSlide('home');
  

  renderMenu();
});

// ============================
// NEWSLETTER FUNCTIONALITY
// ============================
document.addEventListener('DOMContentLoaded', function() {

  const newsletterBtn = document.querySelector('.newsletter-btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function() {
      const emailInput = document.querySelector('input[type="email"]');
      if (emailInput && emailInput.value && emailInput.value.includes('@')) {

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
        emailInput.classList.add('ring-2', 'ring-red-500');
        setTimeout(() => {
          emailInput.classList.remove('ring-2', 'ring-red-500');
        }, 2000);
        alert('Silakan masukkan alamat email yang valid.');
        emailInput.focus();
      }
    });
  }
});

document.querySelectorAll("#nav-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    showSlide(target);
    navMenu.classList.add("hidden");
    hamburger.classList.remove("open");
  });
});

// ============================
// MENU KOPI
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

const menuContainer = document.getElementById("menu-items");
const template = document.getElementById("menu-template");
let qtyData = Array(menuList.length).fill(0);

function renderMenu(filterCategory = "all") {
  menuContainer.innerHTML = "";

  menuList.forEach((item, index) => {
    if (filterCategory !== "all" && item.category !== filterCategory) return;

    const clone = template.content.cloneNode(true);

    clone.querySelector(".menu-img").src = item.img;
    clone.querySelector(".title").textContent = item.name;
    clone.querySelector(".price").textContent = "Rp " + item.price.toLocaleString();

    const qtySpan = clone.querySelector(".qty");

    clone.querySelector(".plus").addEventListener("click", () => {
      qtyData[index]++;
      qtySpan.textContent = qtyData[index];
      updateCart?.();
    });

    clone.querySelector(".minus").addEventListener("click", () => {
      if (qtyData[index] > 0) qtyData[index]--;
      qtySpan.textContent = qtyData[index];
      updateCart?.();
    });

    menuContainer.appendChild(clone);
  });
}

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.getAttribute("data-category");

    renderMenu(cat);

    document.querySelectorAll(".cat-btn").forEach(b => {
      b.classList.remove("bg-amber-700", "text-amber-100");
      b.classList.add("text-amber-700"); 
    });
    btn.classList.add("bg-amber-700", "text-amber-100");
  });
});

renderMenu();

// ============================
// CART
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
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const cartCount = document.getElementById("cart-count");
  const badgeDesktop = document.getElementById("cart-count-badge");
  const badgeMobile = document.getElementById("cart-count-badge-mobile");

  cartList.innerHTML = "";

  let totalQty = 0;

  cart.forEach(item => {
    totalQty += item.qty;

    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty} - Rp ${item.subtotal.toLocaleString()}`;
    cartList.appendChild(li);
  });

  cartCount.textContent = totalQty;
  badgeDesktop.textContent = totalQty;
  badgeMobile.textContent = totalQty;
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  const total = cart.reduce((sum, i) => sum + i.subtotal, 0);

  alert(
    cart.map(i => `${i.name} x${i.qty} = Rp${i.subtotal.toLocaleString()}`).join("\n") +
    `\n\nTOTAL: Rp${total.toLocaleString()}`
  );

  qtyData.fill(0);
  updateCart();
  document.querySelectorAll(".qty").forEach(q => q.textContent = 0);
}

// Klik cart icon = buka halaman order
document.getElementById("cart-button").addEventListener("click", () => showSlide("order"));
document.getElementById("cart-button-mobile").addEventListener("click", () => showSlide("order"));

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Update badge di navbar
  document.getElementById('cart-count-badge').textContent = totalItems;
  document.getElementById('cart-count-badge-mobile').textContent = totalItems;
  
  // Update cart count di order page
  document.getElementById('cart-count').textContent = totalItems;
  
  // Update cart count di CTA
  document.getElementById('cta-cart-count').textContent = totalItems;
}


