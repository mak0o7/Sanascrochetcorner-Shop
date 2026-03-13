const products = [
  {
    id: "rose-bouquet",
    name: "Signature Rose Bouquet",
    price: 48,
    category: "bouquets",
    badge: "Best seller",
    description: "A gift-ready crochet bouquet with layered roses, wrapped stems, and soft satin finishing.",
    leadTime: "Ready to order",
    colors: ["#d98e91", "#f2d3cb"]
  },
  {
    id: "sunflower-bundle",
    name: "Sunflower Glow Bundle",
    price: 54,
    category: "bouquets",
    badge: "Seasonal drop",
    description: "Bright sunflower heads paired with wheat-toned details for cheerful gifting moments.",
    leadTime: "Made in 3-4 days",
    colors: ["#c9832f", "#f0d47d"]
  },
  {
    id: "market-tote",
    name: "Everyday Market Tote",
    price: 42,
    category: "bags",
    badge: "Daily carry",
    description: "A textured crochet tote with a roomy silhouette for errands, books, and weekend market runs.",
    leadTime: "Ready to order",
    colors: ["#8a6d60", "#d7c0af"]
  },
  {
    id: "mini-heart-bag",
    name: "Mini Heart Crossbody",
    price: 36,
    category: "bags",
    badge: "Gift favorite",
    description: "A compact heart-shaped crochet bag sized for small essentials and a charming statement look.",
    leadTime: "Made in 4-5 days",
    colors: ["#b75b74", "#f4d4db"]
  },
  {
    id: "coaster-set",
    name: "Bloom Coaster Set",
    price: 24,
    category: "decor",
    badge: "Home edit",
    description: "A set of four floral coasters with a delicate finish designed for cozy tablescapes.",
    leadTime: "Ready to order",
    colors: ["#7a8f79", "#d9e6d1"]
  },
  {
    id: "wall-hanging",
    name: "Sunbeam Wall Hanging",
    price: 39,
    category: "decor",
    badge: "Studio piece",
    description: "Soft cotton yarn arranged in a sculptural wall piece that warms up reading nooks and bedrooms.",
    leadTime: "Made in 5-7 days",
    colors: ["#b17f5f", "#efe0ce"]
  },
  {
    id: "name-keychain",
    name: "Custom Name Keychain",
    price: 16,
    category: "gifts",
    badge: "Personalized",
    description: "A playful mini crochet charm personalized with initials or a short name tag.",
    leadTime: "Made in 2-3 days",
    colors: ["#6977aa", "#dce0f6"]
  },
  {
    id: "gift-box",
    name: "Keepsake Gift Box",
    price: 33,
    category: "gifts",
    badge: "Ready to gift",
    description: "A curated box with a mini bouquet, charm, and handwritten tag for celebrations and thank-yous.",
    leadTime: "Ready to order",
    colors: ["#af6a5e", "#f3dfd6"]
  },
  {
    id: "baby-booties",
    name: "Cloud Baby Booties",
    price: 22,
    category: "baby",
    badge: "Soft cotton",
    description: "Gentle crochet booties with tidy cuffs, designed as a sweet add-on for newborn gifting.",
    leadTime: "Made in 3-4 days",
    colors: ["#90aac4", "#edf3fb"]
  },
  {
    id: "nursery-mobile",
    name: "Moon & Star Mobile",
    price: 58,
    category: "baby",
    badge: "Nursery favorite",
    description: "A dreamy nursery mobile with plush moons, stars, and neutral-toned hanging accents.",
    leadTime: "Made in 6-7 days",
    colors: ["#7084a4", "#e7edf9"]
  },
  {
    id: "daisy-basket",
    name: "Daisy Storage Basket",
    price: 31,
    category: "decor",
    badge: "New arrival",
    description: "A structured crochet basket for vanity corners, yarn storage, or shelf styling.",
    leadTime: "Ready to order",
    colors: ["#a58d69", "#efe4cf"]
  },
  {
    id: "amigurumi-bunny",
    name: "Sleepy Bunny Plush",
    price: 29,
    category: "gifts",
    badge: "Collector piece",
    description: "A soft amigurumi bunny with embroidered features and a keepsake-friendly finish.",
    leadTime: "Made in 4-6 days",
    colors: ["#90756c", "#f1e0d6"]
  }
];

const usdToInrRate = 92.31;
const keychainProducts = [
  {
    id: "keychain-flag-pouch",
    name: "Flag Pouch Charm",
    price: 3.7807,
    category: "keychains",
    description: "Soft crochet flag-shaped pouch charm from the latest drop.",
    leadTime: "Made in 2-4 days",
    colors: ["#c95d54", "#f7d5cf"]
  },
  {
    id: "keychain-flat-flag",
    name: "Flat Flag Charm",
    price: 4.1057,
    category: "keychains",
    description: "A compact flat flag charm available to order through Instagram DM.",
    leadTime: "Made in 2-4 days",
    colors: ["#2d6f8f", "#d8ecf7"]
  },
  {
    id: "keychain-flag-pocket",
    name: "Flag Pocket Charm",
    price: 4.3224,
    category: "keychains",
    description: "Great for gifting, keepsakes, and custom color requests.",
    leadTime: "Made in 2-4 days",
    colors: ["#5f8652", "#dce9d3"]
  },
  {
    id: "keychain-heart",
    name: "Heart Charm",
    price: 4.6474,
    category: "keychains",
    description: "A playful heart-shaped crochet charm from the current collection.",
    leadTime: "Made in 2-4 days",
    colors: ["#bf5a79", "#f4d7e2"]
  },
  {
    id: "keychain-tall-flag",
    name: "Tall Flag Charm",
    price: 4.864,
    category: "keychains",
    description: "DM for pricing, availability, and customization.",
    leadTime: "Made in 2-4 days",
    colors: ["#906f4e", "#efe0cd"]
  },
  {
    id: "keychain-mini-scarf",
    name: "Mini Scarf Charm",
    price: 5.189,
    category: "keychains",
    description: "Part of the latest handmade charm batch with a cozy scarf shape.",
    leadTime: "Made in 2-4 days",
    colors: ["#bf6d4d", "#f7ddcc"]
  },
  {
    id: "keychain-paw-print",
    name: "Paw Print Charm",
    price: 5.4057,
    category: "keychains",
    description: "Ask about colors, stock, and custom options on Instagram.",
    leadTime: "Made in 2-4 days",
    colors: ["#4d4947", "#e2dbd8"]
  },
  {
    id: "keychain-cherry-pair",
    name: "Cherry Pair Charm",
    price: 5.7307,
    category: "keychains",
    description: "Made for gifting, bag charms, and everyday accessories.",
    leadTime: "Made in 2-4 days",
    colors: ["#9f3145", "#f5d4dd"]
  },
  {
    id: "keychain-luffy-doll",
    name: "Luffy Doll Charm",
    price: 5.9474,
    category: "keychains",
    description: "Part of the newest photo set added to the collection.",
    leadTime: "Made in 3-5 days",
    colors: ["#d7a04a", "#f8e8c7"]
  },
  {
    id: "keychain-bear-rattle",
    name: "Bear Rattle Keepsake",
    price: 6.2723,
    category: "keychains",
    description: "Available to ask about through Instagram DM.",
    leadTime: "Made in 3-5 days",
    colors: ["#8f735b", "#ebdfd2"]
  },
  {
    id: "keychain-tulip-slipper",
    name: "Tulip Slipper Pair",
    price: 6.489,
    category: "keychains",
    description: "Ask about colors, stock, and custom options on Instagram.",
    leadTime: "Made in 3-5 days",
    colors: ["#b95a6a", "#f2d8df"]
  }
];
const cartCatalog = [...products, ...keychainProducts];
const shippingThreshold = 80;
const state = {
  filter: "all",
  search: "",
  cart: loadCart()
};

const productGrid = document.querySelector("#product-grid");
const keychainGrid = document.querySelector(".keychain-grid");
const filterButtons = document.querySelectorAll(".filter-pill");
const searchInput = document.querySelector("#search-products");
const cartCount = document.querySelector("#cart-count");
const cartPanel = document.querySelector("#cart-panel");
const openCartButton = document.querySelector("#open-cart");
const closeCartButton = document.querySelector("#close-cart");
const backdrop = document.querySelector("#backdrop");
const cartItems = document.querySelector("#cart-items");
const cartSubtotal = document.querySelector("#cart-subtotal");
const shippingMessage = document.querySelector("#shipping-message");
const shippingProgress = document.querySelector("#shipping-progress");
const copyOrderButton = document.querySelector("#copy-order");
const toast = document.querySelector("#toast");

function loadCart() {
  try {
    const saved = window.localStorage.getItem("crochet-corner-cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  window.localStorage.setItem("crochet-corner-cart", JSON.stringify(state.cart));
}

function formatPrice(value) {
  const inrValue = value * usdToInrRate;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(inrValue);
}

function getFilteredProducts() {
  return products.filter((product) => {
    const matchesFilter = state.filter === "all" || product.category === state.filter;
    const normalizedSearch = state.search.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 ||
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.description.toLowerCase().includes(normalizedSearch) ||
      product.category.toLowerCase().includes(normalizedSearch);

    return matchesFilter && matchesSearch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>No items match that search yet</h3>
        <p>Try a different keyword or switch back to another category to keep browsing the collection.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card">
          <div
            class="product-card__visual"
            style="--visual-start: ${product.colors[0]}; --visual-end: ${product.colors[1]};"
            aria-hidden="true"
          >
            <div class="visual-stitch"></div>
          </div>
          <div class="product-card__meta">
            <span class="product-card__badge">${product.badge}</span>
            <span class="product-card__category">${product.category}</span>
          </div>
          <div class="product-card__details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <div class="product-card__footer">
            <div class="price-stack">
              <strong>${formatPrice(product.price)}</strong>
              <small>${product.leadTime}</small>
            </div>
            <button class="button button--primary add-to-cart" type="button" data-id="${product.id}">
              Add to cart
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function getCartSubtotal() {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCart() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = getCartSubtotal();
  const remaining = Math.max(shippingThreshold - subtotal, 0);
  const progress = Math.min((subtotal / shippingThreshold) * 100, 100);

  cartCount.textContent = String(totalItems);
  cartSubtotal.textContent = formatPrice(subtotal);
  shippingProgress.style.width = `${progress}%`;
  shippingMessage.textContent =
    subtotal >= shippingThreshold
      ? "Complimentary gift wrapping unlocked for this order."
      : `Add ${formatPrice(remaining)} more to unlock complimentary gift wrapping.`;

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is still empty</h3>
        <p>Add a few handmade pieces from the catalog or keychain drop and this panel will build an Instagram-ready order summary.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <article class="cart-item">
          <div
            class="cart-item__swatch"
            style="--swatch-start: ${item.colors[0]}; --swatch-end: ${item.colors[1]};"
            aria-hidden="true"
          ></div>
          <div class="cart-item__content">
            <strong>${item.name}</strong>
            <p>${formatPrice(item.price)} each</p>
            <small>${item.leadTime}</small>
          </div>
          <div class="cart-item__controls">
            <button class="qty-button" type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">
              -
            </button>
            <strong>${item.quantity}</strong>
            <button class="qty-button" type="button" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">
              +
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function addToCart(productId) {
  const product = cartCatalog.find((entry) => entry.id === productId);

  if (!product) {
    return;
  }

  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} added to cart`);
}

function updateQuantity(productId, delta) {
  const item = state.cart.find((entry) => entry.id === productId);

  if (!item) {
    return;
  }

  item.quantity += delta;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== productId);
  }

  saveCart();
  renderCart();
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("is-open", isOpen);
  cartPanel.setAttribute("aria-hidden", String(!isOpen));
  backdrop.hidden = !isOpen;
  openCartButton.setAttribute("aria-expanded", String(isOpen));
}

function buildOrderSummary() {
  if (state.cart.length === 0) {
    return "";
  }

  const lines = [
    "Hello thecrochet_.corner, I would like to order:",
    "",
    ...state.cart.map(
      (item) => `- ${item.name} x${item.quantity} (${formatPrice(item.price * item.quantity)})`
    ),
    "",
    `Subtotal: ${formatPrice(getCartSubtotal())}`,
    "Please let me know the available colors and next steps. Thank you."
  ];

  return lines.join("\n");
}

async function copyOrderSummary() {
  const summary = buildOrderSummary();

  if (!summary) {
    showToast("Add items to the cart before copying the order summary");
    return;
  }

  try {
    await navigator.clipboard.writeText(summary);
    showToast("Order summary copied. You can paste it into Instagram DM.");
  } catch {
    showToast("Clipboard access is unavailable in this browser.");
  }
}

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((entry) => entry.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter || "all";
    renderProducts();
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-id]");

  if (!trigger) {
    return;
  }

  addToCart(trigger.dataset.id);
});

keychainGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-id]");

  if (!trigger) {
    return;
  }

  addToCart(trigger.dataset.id);
});

cartItems.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action][data-id]");

  if (!trigger) {
    return;
  }

  const delta = trigger.dataset.action === "increase" ? 1 : -1;
  updateQuantity(trigger.dataset.id, delta);
});

openCartButton.addEventListener("click", () => setCartOpen(true));
closeCartButton.addEventListener("click", () => setCartOpen(false));
backdrop.addEventListener("click", () => setCartOpen(false));
copyOrderButton.addEventListener("click", copyOrderSummary);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setCartOpen(false);
  }
});

renderProducts();
renderCart();
