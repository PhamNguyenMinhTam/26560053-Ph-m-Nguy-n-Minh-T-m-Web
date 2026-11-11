const cards = [...document.querySelectorAll('.product-card')];
const searchToggle = document.querySelector('#search-toggle');
const searchPanel = document.querySelector('#search-panel');
const search = document.querySelector('#search');
const cartToggle = document.querySelector('#cart-toggle');
const cartPanel = document.querySelector('#cart-panel');
const cartItems = document.querySelector('#cart-items');
const status = document.querySelector('#status');
const cart = new Map();
let toastTimer;

searchToggle.addEventListener('click', () => {
  searchPanel.hidden = !searchPanel.hidden;
  searchToggle.setAttribute('aria-expanded', String(!searchPanel.hidden));
  if (!searchPanel.hidden) search.focus();
});

search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  cards.forEach(card => {
    card.hidden = !card.querySelector('.product-info').textContent.toLowerCase().includes(query);
    if (!card.hidden) count++;
  });
  document.querySelector('#product-count').textContent = `${count} products`;
  document.querySelector('#empty-results').hidden = count !== 0;
});

function updateCart() {
  cartItems.replaceChildren();
  let count = 0;
  let total = 0;
  cart.forEach((item, name) => {
    count += item.quantity;
    total += item.price * item.quantity;
    const row = document.createElement('li');
    row.textContent = `${name} × ${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`;
    cartItems.append(row);
  });
  if (!count) {
    const row = document.createElement('li');
    row.textContent = 'Your cart is empty. Find something you love.';
    cartItems.append(row);
  }
  document.querySelector('#cart-count').textContent = count;
  cartToggle.setAttribute('aria-label', `View cart, ${count} items`);
  document.querySelector('#cart-total').textContent = `$${total.toFixed(2)}`;
  document.querySelector('#cart-clear').disabled = count === 0;
}

document.querySelectorAll('.add-button[data-price]').forEach(button => {
  const name = button.closest('.product-card').querySelector('h3').textContent;
  button.setAttribute('aria-label', `Add ${name} to cart`);
  button.addEventListener('click', () => {
    const item = cart.get(name) || { price: Number(button.dataset.price), quantity: 0 };
    item.quantity++;
    cart.set(name, item);
    updateCart();
    status.textContent = `${name} added to cart.`;
    status.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => status.classList.remove('visible'), 2500);
  });
});

function closeCart() {
  cartPanel.hidden = true;
  cartToggle.setAttribute('aria-expanded', 'false');
  cartToggle.focus();
}
cartToggle.addEventListener('click', () => {
  cartPanel.hidden = !cartPanel.hidden;
  cartToggle.setAttribute('aria-expanded', String(!cartPanel.hidden));
  if (!cartPanel.hidden) document.querySelector('#cart-close').focus();
});
document.querySelector('#cart-close').addEventListener('click', closeCart);
document.querySelector('#cart-clear').addEventListener('click', () => { cart.clear(); updateCart(); });
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!cartPanel.hidden) closeCart();
  if (!searchPanel.hidden) {
    searchPanel.hidden = true;
    searchToggle.setAttribute('aria-expanded', 'false');
    searchToggle.focus();
  }
});
updateCart();
