function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
function addToCart(name, price) {
  const cart = getCart();
  const item = cart.find(i => i.name === name);
  if (item) item.qty += 1;
  else cart.push({ name, price, qty: 1 });
  setCart(cart);
  alert('Added to cart!');
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}
async function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  // attempt to refresh prices from products.json
  let priceMap = {};
  try {
    const res = await fetch('products.json');
    if (!res.ok) {
      throw new Error(`fetch products.json failed (${res.status})`);
    }
    const products = await res.json();
    products.forEach(p => priceMap[p.name] = p.price);
  } catch (e) {
    console.warn('Could not load products for price update', e);
  }

  let html = '<ul>';
  let total = 0;
  cart.forEach(item => {
    // use updated price if available
    const currentPrice = priceMap[item.name] || item.price;
    html += `<li>${item.name} x${item.qty} — &#8377;${(currentPrice * item.qty).toFixed(0)}</li>`;
    total += currentPrice * item.qty;
  });
  html += `</ul><p style="margin-top:1em;font-family:var(--font-serif);font-size:1rem;"><strong>Total: &#8377;${total.toFixed(0)}</strong></p>`;
  container.innerHTML = html;
}
function checkout() {
  alert('This is a demo checkout. Please contact us on Instagram to place your order!');
  setCart([]);
  renderCart();
}
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
});