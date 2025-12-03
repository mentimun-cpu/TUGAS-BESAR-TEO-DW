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
function showSlide(id) {
  document.querySelectorAll(".slide").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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
  { name: "Espresso", price: 25000, img: "foto_menu_kopi/menu_ekspresso.jpg" },
  { name: "Cappuccino", price: 30000, img: "foto_menu_kopi/menu_capucino.jpg" },
  { name: "Latte", price: 28000, img: "foto_menu_kopi/menu_kopilate.jpg" },
  { name: "Mocha", price: 32000, img: "foto_menu_kopi/menu_kopimocha.jpg" },
  { name: "Americano", price: 22000, img: "foto_menu_kopi/menu_americano.jpg" },
  { name: "Macchiato", price: 29000, img: "foto_menu_kopi/menu_kopimacchiato.jpg" }
];

const menuContainer = document.getElementById("menu-items");
const template = document.getElementById("menu-template");

let cart = [];
let qtyData = Array(menuList.length).fill(0);

// Render menu dari template (JS tanpa styling)
menuList.forEach((item, index) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".menu-img").src = item.img;
  clone.querySelector(".title").textContent = item.name;
  clone.querySelector(".price").textContent = "Rp " + item.price.toLocaleString();

  const qtySpan = clone.querySelector(".qty");

  clone.querySelector(".plus").addEventListener("click", () => {
    qtyData[index]++;
    qtySpan.textContent = qtyData[index];
    updateCart();
  });

  clone.querySelector(".minus").addEventListener("click", () => {
    if (qtyData[index] > 0) qtyData[index]--;
    qtySpan.textContent = qtyData[index];
    updateCart();
  });

  menuContainer.appendChild(clone);
});

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
