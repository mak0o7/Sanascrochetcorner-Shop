async function loadProducts(containerId, limit) {
  try {
    const res = await fetch('products.json');
    const products = await res.json();
    const container = document.getElementById(containerId);
    if (!container) return;
    const list = limit ? products.slice(0, limit) : products;
    let html = '';
    list.forEach(p => {
      html += `
      <div class="product" data-name="${p.name}" data-price="${p.price}">
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <span>$${p.price.toFixed(2)}</span>
        <button class="add-to-cart">Add to Cart</button>
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
  }
}
