const CART_KEY = "tcc_cart";

export function readCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeCart(items) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart:updated"));
}

export function addToCart(product) {
  const cart = readCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  writeCart(cart);
}

export function updateQuantity(productId, quantity) {
  const cart = readCart();
  const next = cart
    .map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(0, Number(quantity) || 0) }
        : item
    )
    .filter((item) => item.quantity > 0);

  writeCart(next);
}

export function removeFromCart(productId) {
  const cart = readCart();
  writeCart(cart.filter((item) => item.id !== productId));
}

export function clearCart() {
  writeCart([]);
}

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
