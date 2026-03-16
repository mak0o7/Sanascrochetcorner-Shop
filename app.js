const products = [
  {
    id: "signature-rose-bouquet",
    name: "Signature Rose Bouquet",
    price: 499,
    category: "bouquets",
    badge: "Best seller",
    description: "Single stem bouquet wrapped cleanly with ribbon for classic gifting.",
    leadTime: "Ready to order",
    colors: ["#9d3033", "#f6e6e2"],
    image: "./uploads/photos/studio-refresh/hero-rose-bouquet.jpg"
  },
  {
    id: "blush-tulips",
    name: "Blush Tulips",
    price: 649,
    category: "bouquets",
    badge: "Soft bloom",
    description: "Three-stem tulips with crisp wrapping and a softer studio palette.",
    leadTime: "Made in 2-4 days",
    colors: ["#d2abbc", "#f8ebef"],
    image: "./uploads/photos/studio-refresh/rail-tulips.webp"
  },
  {
    id: "crochet-lily",
    name: "Crochet Lily",
    price: 549,
    category: "bouquets",
    badge: "Fresh stem",
    description: "A delicate floral stem made for bouquets, desk styling, and custom bunches.",
    leadTime: "Made in 2-4 days",
    colors: ["#8d4f73", "#f6dfec"],
    image: "./uploads/photos/studio-refresh/product-lily.jpg"
  },
  {
    id: "bunny-bouquet-box",
    name: "Bunny & Bouquet Box",
    price: 699,
    category: "gifts",
    badge: "Giftable",
    description: "A bunny plush paired with a bouquet in a box-style keepsake presentation.",
    leadTime: "Made in 3-5 days",
    colors: ["#e0c6d4", "#f8f0f4"],
    image: "./uploads/photos/studio-refresh/product-bunny-bouquet-box.jpg"
  },
  {
    id: "heart-quran-cover",
    name: "Heart Quran Cover",
    price: 799,
    category: "gifts",
    badge: "Thoughtful gift",
    description: "A soft crochet Quran cover with stitched heart panels and a keepsake feel.",
    leadTime: "Made in 3-5 days",
    colors: ["#dcb6c6", "#f9ecf2"],
    image: "./uploads/photos/studio-refresh/product-heart-quran-cover.jpg"
  },
  {
    id: "batman-crochet-plush",
    name: "Batman Crochet Plush",
    price: 799,
    category: "gifts",
    badge: "Collector piece",
    description: "A compact amigurumi character plush for collectors and playful gifting.",
    leadTime: "Made in 4-6 days",
    colors: ["#40435a", "#e2e5ef"],
    image: "./uploads/photos/studio-refresh/product-batman.jpg"
  },
  {
    id: "baby-gift-box",
    name: "Baby Gift Box Set",
    price: 899,
    category: "baby",
    badge: "New baby",
    description: "A boxed baby set that feels ready for welcome-home gifts and memory photos.",
    leadTime: "Made in 3-5 days",
    colors: ["#a2c2d3", "#eff7fb"],
    image: "./uploads/photos/studio-refresh/product-baby-gift-box.jpg"
  },
  {
    id: "baby-bow-booties",
    name: "Baby Bow Booties",
    price: 499,
    category: "baby",
    badge: "Soft cotton",
    description: "Tiny bow booties styled for newborn gifting and baby keepsake boxes.",
    leadTime: "Ready to order",
    colors: ["#d4b6bc", "#fbf0f2"],
    image: "./uploads/photos/studio-refresh/product-baby-booties.webp"
  },
  {
    id: "card-holder",
    name: "Crochet Card Holder",
    price: 349,
    category: "decor",
    badge: "Daily use",
    description: "A textured card holder in a soft neutral palette for everyday carry.",
    leadTime: "Ready to order",
    colors: ["#9a9a7d", "#eeece0"],
    image: "./uploads/photos/studio-refresh/rail-card-holder.jpg"
  },
  {
    id: "rose-coaster",
    name: "Rose Coaster",
    price: 449,
    category: "decor",
    badge: "Home edit",
    description: "A floral crochet coaster designed to soften trays, shelves, and bedside corners.",
    leadTime: "Ready to order",
    colors: ["#c593af", "#f3e2ea"],
    image: "./uploads/photos/studio-refresh/rail-rose-coaster.jpg"
  },
  {
    id: "airpods-charger-cover",
    name: "AirPods & Charger Cover",
    price: 499,
    category: "decor",
    badge: "Everyday carry",
    description: "A matching crochet set for your AirPods and charger with a handmade finish.",
    leadTime: "Ready to order",
    colors: ["#a9a0b8", "#efebf6"],
    image: "./uploads/photos/studio-refresh/hero-spotlight-tech.jpg"
  },
  {
    id: "granny-square-bag",
    name: "Granny Square Bag",
    price: 749,
    category: "decor",
    badge: "Studio knit",
    description: "A classic crochet bag with a more styled, boutique presentation.",
    leadTime: "Made in 3-5 days",
    colors: ["#6c534b", "#efe4df"],
    image: "./uploads/photos/studio-refresh/product-granny-square-bag.jpg"
  },
  {
    id: "crossbody-plushie-bag",
    name: "Crossbody Plushie Bag",
    price: 699,
    category: "decor",
    badge: "Cozy carry",
    description: "A soft crossbody bag with chunky straps and a playful plushie touch.",
    leadTime: "Made in 3-5 days",
    colors: ["#25253a", "#f2ece6"],
    image: "./uploads/photos/studio-refresh/product-crossbody-bag.jpg"
  },
  {
    id: "cherry-ribbon-bag",
    name: "Cherry Ribbon Bag",
    price: 549,
    category: "decor",
    badge: "Coquette edit",
    description: "A ribbon-led bag detail styled for soft, feminine everyday accessories.",
    leadTime: "Made in 2-4 days",
    colors: ["#b52d36", "#f9e5e6"],
    image: "./uploads/photos/studio-refresh/product-cherry-ribbon-bag.jpg"
  },
  {
    id: "sunflower-bag-charm",
    name: "Sunflower Bag Charm",
    price: 299,
    category: "decor",
    badge: "Bag favorite",
    description: "A tiny sunflower charm that adds a handmade finish to bags and gifts.",
    leadTime: "Made in 2-4 days",
    colors: ["#cc9a30", "#f9edb7"],
    image: "./uploads/photos/studio-refresh/product-sunflower-bag-charm.jpg"
  }
];

const keychainProducts = [
  {
    id: "keychain-flag-pouch",
    name: "Flag Pouch Charm",
    price: 349,
    category: "keychains",
    description: "Soft crochet flag-shaped pouch charm from the latest drop.",
    leadTime: "Made in 2-4 days",
    colors: ["#c95d54", "#f7d5cf"],
    image: "./images/keychains-jpg/IMG_5364.jpg"
  },
  {
    id: "keychain-flat-flag",
    name: "Flat Flag Charm",
    price: 379,
    category: "keychains",
    description: "A compact flat flag charm with a clean handmade finish.",
    leadTime: "Made in 2-4 days",
    colors: ["#2d6f8f", "#d8ecf7"],
    image: "./images/keychains-jpg/IMG_5360.jpg"
  },
  {
    id: "keychain-flag-pocket",
    name: "Flag Pocket Charm",
    price: 399,
    category: "keychains",
    description: "Great for gifting, keepsakes, and custom color requests.",
    leadTime: "Made in 2-4 days",
    colors: ["#5f8652", "#dce9d3"],
    image: "./images/keychains-jpg/IMG_5358.jpg"
  },
  {
    id: "keychain-heart",
    name: "Heart Charm",
    price: 429,
    category: "keychains",
    description: "A playful heart-shaped crochet charm from the current collection.",
    leadTime: "Made in 2-4 days",
    colors: ["#bf5a79", "#f4d7e2"],
    image: "./images/keychains-jpg/IMG_1165.jpg"
  },
  {
    id: "keychain-tall-flag",
    name: "Tall Flag Charm",
    price: 449,
    category: "keychains",
    description: "A taller stitched silhouette for a softer keepsake look.",
    leadTime: "Made in 2-4 days",
    colors: ["#906f4e", "#efe0cd"],
    image: "./images/keychains-jpg/IMG_5359.jpg"
  },
  {
    id: "keychain-mini-scarf",
    name: "Mini Scarf Charm",
    price: 479,
    category: "keychains",
    description: "Part of the latest handmade charm batch with a cozy scarf shape.",
    leadTime: "Made in 2-4 days",
    colors: ["#bf6d4d", "#f7ddcc"],
    image: "./images/keychains-jpg/IMG_3129.jpg"
  },
  {
    id: "keychain-paw-print",
    name: "Paw Print Charm",
    price: 499,
    category: "keychains",
    description: "Playful and giftable, with room for color customization.",
    leadTime: "Made in 2-4 days",
    colors: ["#4d4947", "#e2dbd8"],
    image: "./images/keychains-jpg/IMG_3455.jpg"
  },
  {
    id: "keychain-cherry-pair",
    name: "Cherry Pair Charm",
    price: 529,
    category: "keychains",
    description: "Made for gifting, bag charms, and everyday accessories.",
    leadTime: "Made in 2-4 days",
    colors: ["#9f3145", "#f5d4dd"],
    image: "./images/keychains-jpg/IMG_1201.jpg"
  },
  {
    id: "keychain-luffy-doll",
    name: "Luffy Doll Charm",
    price: 549,
    category: "keychains",
    description: "A character charm for anime-loving crochet collectors.",
    leadTime: "Made in 3-5 days",
    colors: ["#d7a04a", "#f8e8c7"],
    image: "./images/keychains-jpg/IMG_6547.jpg"
  }
];

const cartCatalog = [...products, ...keychainProducts];

const collectionPanels = [
  {
    label: "Signature",
    title: "Signature pieces",
    detail: "Bouquets + meaningful gifting pieces",
    priceBase: 499,
    pricePrefix: "From ",
    note: "The newest bouquet and gift uploads now sit together so the storefront opens with the same soft, styled feel as your reference video.",
    files: [
      "studio-refresh/hero-rose-bouquet.jpg",
      "studio-refresh/rail-tulips.webp",
      "studio-refresh/product-bunny-bouquet-box.jpg",
      "studio-refresh/product-heart-quran-cover.jpg"
    ]
  },
  {
    label: "Decor",
    title: "Decor",
    detail: "Card holders + bags + soft utility",
    priceBase: 349,
    pricePrefix: "From ",
    note: "The bags stay merged into decor here, alongside card holders, tech covers, and rose coasters for a more useful home-and-carry edit.",
    files: [
      "studio-refresh/rail-card-holder.jpg",
      "studio-refresh/product-granny-square-bag.jpg",
      "studio-refresh/product-crossbody-bag.jpg",
      "studio-refresh/hero-spotlight-tech.jpg"
    ]
  },
  {
    label: "Baby",
    title: "Baby & keepsakes",
    detail: "Gift boxes + booties + careful packaging",
    priceBase: 499,
    pricePrefix: "From ",
    note: "Baby pieces now read as keepsake gifts, with boxed sets, soft booties, and packaging shots that feel closer to the video.",
    files: [
      "studio-refresh/product-baby-gift-box.jpg",
      "studio-refresh/product-baby-booties.webp",
      "studio-refresh/story-packaging.jpg",
      "studio-refresh/story-anniversary-cake.jpg"
    ]
  }
];

const uploadedVideos = [
  "instagram_1773388690637.mp4",
  "instagram_1773388690703.mp4",
  "instagram_1773388614208.mp4",
  "instagram_1773388614248.mp4",
  "instagram_1773388588977.mp4",
  "instagram_1773388544849.mp4"
];

const shippingThreshold = 1800;

const state = {
  filter: "all",
  search: "",
  cart: loadCart()
};

const productGrid = document.querySelector("#product-grid");
const keychainGrid = document.querySelector(".keychain-grid");
const uploadedPhotoGrid = document.querySelector("#uploaded-photo-grid");
const uploadedVideoRail = document.querySelector("#uploaded-video-rail");
const uploadedPhotoCount = document.querySelector("#uploaded-photo-count");
const uploadedVideoCount = document.querySelector("#uploaded-video-count");
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
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
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

  if (!productGrid) {
    return;
  }

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>No items match that search yet</h3>
        <p>Try another keyword or switch sections to keep browsing the collection.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card">
          <figure class="product-card__media">
            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              decoding="async"
            >
          </figure>
          <div class="product-card__meta">
            <span class="product-card__category">${product.category}</span>
            <span class="product-card__badge">${product.badge}</span>
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
            <div class="product-card__actions">
              <button class="button button--primary add-to-cart" type="button" data-id="${product.id}">
                Add to cart
              </button>
              <a
                class="product-card__link"
                href="https://www.instagram.com/thecrochet_.corner/"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderUploadedMedia() {
  if (uploadedPhotoGrid) {
    uploadedPhotoGrid.innerHTML = collectionPanels
      .map(
        (panel) => `
          <article class="collection-card">
            <div class="collection-card__header">
              <div>
                <p class="eyebrow">${panel.label}</p>
                <h4>${panel.title}</h4>
                <strong>${panel.detail}</strong>
              </div>
              <span class="collection-price">${panel.pricePrefix}${formatPrice(panel.priceBase)}</span>
            </div>
            <p class="collection-note">${panel.note}</p>
            <div class="collection-media-grid">
              ${panel.files
                .map(
                  (fileName, index) => `
                    <figure class="collection-media-card">
                      <img
                        src="./uploads/photos/${fileName}"
                        alt="${panel.label} crochet photo ${index + 1}"
                        loading="lazy"
                        decoding="async"
                      >
                    </figure>
                  `
                )
                .join("")}
            </div>
          </article>
        `
      )
      .join("");
  }

  if (uploadedVideoRail) {
    uploadedVideoRail.innerHTML = uploadedVideos
      .map(
        (fileName, index) => `
          <article class="upload-video-card">
            <video
              controls
              playsinline
              muted
              preload="metadata"
              title="Uploaded crochet product video ${index + 1}"
            >
              <source src="./uploads/videos/${fileName}" type="video/mp4">
            </video>
          </article>
        `
      )
      .join("");
  }

  if (uploadedPhotoCount) {
    uploadedPhotoCount.textContent = `${collectionPanels.length} sections`;
  }

  if (uploadedVideoCount) {
    uploadedVideoCount.textContent = `${uploadedVideos.length} videos`;
  }
}

function getCartSubtotal() {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCart() {
  if (!cartCount || !cartSubtotal || !shippingProgress || !shippingMessage || !cartItems) {
    return;
  }

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
        <p>Add a few handmade pieces from the storefront or keychain drop and this panel will build an Instagram-ready order summary.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <article class="cart-item">
          ${
            item.image
              ? `<img class="cart-item__thumb" src="${item.image}" alt="" loading="lazy" decoding="async">`
              : `<div
                  class="cart-item__swatch"
                  style="--swatch-start: ${item.colors[0]}; --swatch-end: ${item.colors[1]};"
                  aria-hidden="true"
                ></div>`
          }
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
  if (!cartPanel || !backdrop || !openCartButton) {
    return;
  }

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
  if (!toast) {
    return;
  }

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

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });
}

if (productGrid) {
  productGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-id]");

    if (!trigger) {
      return;
    }

    addToCart(trigger.dataset.id);
  });
}

if (keychainGrid) {
  keychainGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-id]");

    if (!trigger) {
      return;
    }

    addToCart(trigger.dataset.id);
  });
}

if (cartItems) {
  cartItems.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-action][data-id]");

    if (!trigger) {
      return;
    }

    const delta = trigger.dataset.action === "increase" ? 1 : -1;
    updateQuantity(trigger.dataset.id, delta);
  });
}

if (openCartButton) {
  openCartButton.addEventListener("click", () => setCartOpen(true));
}

if (closeCartButton) {
  closeCartButton.addEventListener("click", () => setCartOpen(false));
}

if (backdrop) {
  backdrop.addEventListener("click", () => setCartOpen(false));
}

if (copyOrderButton) {
  copyOrderButton.addEventListener("click", copyOrderSummary);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setCartOpen(false);
  }
});

renderProducts();
renderUploadedMedia();
renderCart();
