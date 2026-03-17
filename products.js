async function loadProducts(containerId, limit) {
  try {
    const res = await fetch('products.json');
    if (!res.ok) {
      // make it easy to diagnose missing/404 JSON file
      throw new Error(`Unable to fetch products.json – status ${res.status}`);
    }
    const products = await res.json();
    const container = document.getElementById(containerId);
    if (!container) return;
    const list = limit ? products.slice(0, limit) : products;
    let html = '';
    list.forEach(p => {
      html += `
      <div class="product" data-name="${p.name}" data-price="${p.price}">
        <img src="${p.image}" alt="${p.name}">
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-price">&#8377;${p.price}</div>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>`;
    });
    container.innerHTML = html;
    container.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prod = e.target.closest('.product');
        const name = prod.dataset.name;
        const price = parseFloat(prod.dataset.price);
        addToCart(name, price);
      });
    });
  } catch (err) {
    console.error('Failed to load products:', err);
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '<p class="error">Sorry, we could not load the product list at this time.</p>';
    }
  }
}
