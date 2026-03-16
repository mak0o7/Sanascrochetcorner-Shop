const products = [
  {
    id: "signature-rose-bouquet",
    name: "Signature Rose Bouquet",
    price: 48,
    category: "bouquets",
    badge: "Best seller",
    description: "A gift-ready bouquet wrap with soft plush pairing and boutique presentation for special moments.",
    leadTime: "Ready to order",
    colors: ["#d8a0a2", "#f5e0dd"],
    image: "./uploads/photos/instagram_1773388690717.png"
  },
  {
    id: "mini-bouquet-charm",
    name: "Mini Bouquet Charm",
    price: 22,
    category: "bouquets",
    badge: "Small bouquet",
    description: "A petite bouquet-style charm with ribbon finishing for bags, keys, and keepsake add-ons.",
    leadTime: "Made in 2-4 days",
    colors: ["#be8a7e", "#efe2d8"],
    image: "./uploads/photos/instagram_1773266054127.png"
  },
  {
    id: "sunflower-charm-pair",
    name: "Sunflower Charm Pair",
    price: 24,
    category: "bouquets",
    badge: "Bright drop",
    description: "Sunny handmade charm pairings that bring a cheerful crochet accent to gifts and display corners.",
    leadTime: "Ready to order",
    colors: ["#d09a36", "#f2e0aa"],
    image: "./uploads/photos/instagram_1773266054214.png"
  },
  {
    id: "moss-octopus-pair",
    name: "Moss Octopus Pair",
    price: 18,
    category: "decor",
    badge: "Shelf detail",
    description: "A playful squishy pair sized for desks, display shelves, and cozy room styling moments.",
    leadTime: "Made in 2-3 days",
    colors: ["#6f7f56", "#dce7cf"],
    image: "./uploads/photos/instagram_1773266053996.png"
  },
  {
    id: "lavender-doll-keepsake",
    name: "Lavender Doll Keepsake",
    price: 31,
    category: "decor",
    badge: "Display piece",
    description: "A handcrafted doll keepsake designed to sit beautifully in bedrooms, gift corners, and memory shelves.",
    leadTime: "Made in 4-6 days",
    colors: ["#9076a7", "#ece2f6"],
    image: "./uploads/photos/instagram_1773388690682.png"
  },
  {
    id: "puffy-flower-charm",
    name: "Puffy Flower Charm",
    price: 14,
    category: "gifts",
    badge: "Gift extra",
    description: "A soft little flower charm that works as a sweet add-on for keys, packages, and surprise gifts.",
    leadTime: "Ready to order",
    colors: ["#d8a9b4", "#f7e5e8"],
    image: "./uploads/photos/instagram_1773266053945.png"
  },
  {
    id: "keepsake-gift-box",
    name: "Keepsake Gift Box",
    price: 28,
    category: "gifts",
    badge: "Ready to gift",
    description: "A crochet-led presentation piece with thoughtful packaging that feels complete from the first look.",
    leadTime: "Ready to order",
    colors: ["#b27258", "#f3ddd1"],
    image: "./uploads/photos/instagram_1773388544841.png"
  },
  {
    id: "sleepy-puppy-plush",
    name: "Sleepy Puppy Plush",
    price: 29,
    category: "gifts",
    badge: "Plush favorite",
    description: "A soft puppy plush made for cozy gifting moments, display shelves, and collectible crochet corners.",
    leadTime: "Made in 4-5 days",
    colors: ["#9f7d66", "#efe0d7"],
    image: "./uploads/photos/instagram_1773388690643.png"
  },
  {
    id: "mr-beans-teddy",
    name: "Mr. Beans Teddy",
    price: 32,
    category: "gifts",
    badge: "Collector piece",
    description: "A long-limbed teddy with a warm handmade look and the kind of finish people keep for years.",
    leadTime: "Made in 4-6 days",
    colors: ["#7e5844", "#e8d3c8"],
    image: "./uploads/photos/instagram_1773388690663.png"
  },
  {
    id: "cloud-baby-booties",
    name: "Cloud Baby Booties",
    price: 22,
    category: "baby",
    badge: "Newborn favorite",
    description: "A gentle booties-and-cap set prepared for baby gifting, first photos, and memory boxes.",
    leadTime: "Made in 3-4 days",
    colors: ["#8cb6d7", "#e6f2fb"],
    image: "./uploads/photos/instagram_1773388614160.png"
  },
  {
    id: "blossom-baby-frock-set",
    name: "Blossom Baby Frock Set",
    price: 58,
    category: "baby",
    badge: "Occasion set",
    description: "A full frock set with floral trims for baby showers, milestone gifts, and twin-set requests.",
    leadTime: "Made in 5-7 days",
    colors: ["#b67b87", "#f2e0df"],
    image: "./uploads/photos/instagram_1773388614232.png"
  },
  {
    id: "headband-shoes-box",
    name: "Headband & Shoes Box",
    price: 26,
    category: "baby",
    badge: "Boxed set",
    description: "A soft shoes-and-headband pairing packed neatly for simple, thoughtful newborn gifting.",
    leadTime: "Ready to order",
    colors: ["#bea387", "#f3e7dd"],
    image: "./uploads/photos/instagram_1773388614176.png"
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
    colors: ["#c95d54", "#f7d5cf"],
    image: "./images/keychains-jpg/IMG_5364.jpg"
  },
  {
    id: "keychain-flat-flag",
    name: "Flat Flag Charm",
    price: 4.1057,
    category: "keychains",
    description: "A compact flat flag charm available to order through Instagram DM.",
    leadTime: "Made in 2-4 days",
    colors: ["#2d6f8f", "#d8ecf7"],
    image: "./images/keychains-jpg/IMG_5360.jpg"
  },
  {
    id: "keychain-flag-pocket",
    name: "Flag Pocket Charm",
    price: 4.3224,
    category: "keychains",
    description: "Great for gifting, keepsakes, and custom color requests.",
    leadTime: "Made in 2-4 days",
    colors: ["#5f8652", "#dce9d3"],
    image: "./images/keychains-jpg/IMG_5358.jpg"
  },
  {
    id: "keychain-heart",
    name: "Heart Charm",
    price: 4.6474,
    category: "keychains",
    description: "A playful heart-shaped crochet charm from the current collection.",
    leadTime: "Made in 2-4 days",
    colors: ["#bf5a79", "#f4d7e2"],
    image: "./images/keychains-jpg/IMG_1165.jpg"
  },
  {
    id: "keychain-tall-flag",
    name: "Tall Flag Charm",
    price: 4.864,
    category: "keychains",
    description: "DM for pricing, availability, and customization.",
    leadTime: "Made in 2-4 days",
    colors: ["#906f4e", "#efe0cd"],
    image: "./images/keychains-jpg/IMG_5359.jpg"
  },
  {
    id: "keychain-mini-scarf",
    name: "Mini Scarf Charm",
    price: 5.189,
    category: "keychains",
    description: "Part of the latest handmade charm batch with a cozy scarf shape.",
    leadTime: "Made in 2-4 days",
    colors: ["#bf6d4d", "#f7ddcc"],
    image: "./images/keychains-jpg/IMG_3129.jpg"
  },
  {
    id: "keychain-paw-print",
    name: "Paw Print Charm",
    price: 5.4057,
    category: "keychains",
    description: "Ask about colors, stock, and custom options on Instagram.",
    leadTime: "Made in 2-4 days",
    colors: ["#4d4947", "#e2dbd8"],
    image: "./images/keychains-jpg/IMG_3455.jpg"
  },
  {
    id: "keychain-cherry-pair",
    name: "Cherry Pair Charm",
    price: 5.7307,
    category: "keychains",
    description: "Made for gifting, bag charms, and everyday accessories.",
    leadTime: "Made in 2-4 days",
    colors: ["#9f3145", "#f5d4dd"],
    image: "./images/keychains-jpg/IMG_1201.jpg"
  },
  {
    id: "keychain-luffy-doll",
    name: "Luffy Doll Charm",
    price: 5.9474,
    category: "keychains",
    description: "Part of the newest photo set added to the collection.",
    leadTime: "Made in 3-5 days",
    colors: ["#d7a04a", "#f8e8c7"],
    image: "./images/keychains-jpg/IMG_6547.jpg"
  }
];

const cartCatalog = [...products, ...keychainProducts];
const collectionPanels = [
  {
    label: "Decor",
    title: "Decor",
    detail: "Moss Octopus Pair + Lavender Doll Keepsake",
    priceBase: 18,
    pricePrefix: "From ",
    note: "Soft decor-style uploads now support the Decor section, with the earlier bags and bouquet media folded into the same calm showcase.",
    files: [
      "instagram_1773266054214.png",
      "instagram_1773388544841.png",
      "instagram_1773266054127.png",
      "instagram_1773388690682.png",
      "instagram_1773388588860.png",
      "instagram_1773388589119.png",
      "instagram_1773388690717.png",
      "instagram_1773388690651.png",
      "instagram_1773388588995.png",
      "instagram_1773266053970.png",
      "instagram_1773388588839.png",
      "instagram_1773388614198.png"
    ]
  },
  {
    label: "Gifts",
    title: "Gifts",
    detail: "Puffy Flower Charm + Keepsake Gift Box",
    priceBase: 14,
    pricePrefix: "From ",
    note: "Gift-ready charms, plush pieces, and packaging-led uploads now sit together under the Gifts section.",
    files: [
      "instagram_1773388588820.png",
      "instagram_1773388588852.png",
      "instagram_1773388588907.png",
      "instagram_1773388588890.png"
    ]
  },
  {
    label: "Baby",
    title: "Baby",
    detail: "Cloud Baby Booties + Blossom Baby Frock Set",
    priceBase: 22,
    pricePrefix: "From ",
    note: "Baby uploads now live together so the section feels complete and the entry pricing matches the catalog.",
    files: [
      "instagram_1773388614160.png",
      "instagram_1773388614176.png",
      "instagram_1773388614182.png",
      "instagram_1773388614232.png"
    ]
  }
];

const uploadedVideos = [
  "instagram_1773388690637.mp4",
  "instagram_1773388690703.mp4",
  "instagram_1773388690710.mp4",
  "instagram_1773388690623.mp4",
  "instagram_1773388690631.mp4",
  "instagram_1773388675432.mp4",
  "instagram_1773388614208.mp4",
  "instagram_1773388614248.mp4",
  "instagram_1773388614215.mp4",
  "instagram_1773388614240.mp4",
  "instagram_1773388588826.mp4",
  "instagram_1773388588977.mp4",
  "instagram_1773388589036.mp4",
  "instagram_1773388589077.mp4",
  "instagram_1773388588930.mp4",
  "instagram_1773388589097.mp4",
  "instagram_1773388589045.mp4",
  "instagram_1773388589066.mp4",
  "instagram_1773388589024.mp4",
  "instagram_1773388588953.mp4",
  "instagram_1773388588945.mp4",
  "instagram_1773388589004.mp4",
  "instagram_1773388589014.mp4",
  "instagram_1773388588833.mp4",
  "instagram_1773388588937.mp4",
  "instagram_1773388588986.mp4",
  "instagram_1773388589056.mp4",
  "instagram_1773388588899.mp4",
  "instagram_1773388588969.mp4",
  "instagram_1773388589130.mp4",
  "instagram_1773388588915.mp4",
  "instagram_1773388589087.mp4",
  "instagram_1773388588961.mp4",
  "instagram_1773388544821.mp4",
  "instagram_1773388544849.mp4",
  "instagram_1773388544828.mp4",
  "instagram_1773388544833.mp4"
];

const shippingThreshold = 80;
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
                Ask
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
                        alt="${panel.label} crochet product photo ${index + 1}"
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
