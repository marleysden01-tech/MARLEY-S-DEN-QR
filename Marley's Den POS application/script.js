let cart = [];

function addItem(name, price) {
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({
      name: name,
      price: price,
      qty: 1
    });
  }

  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cartItems");
  let totalElement = document.getElementById("total");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          ₹${item.price} x ${item.qty}
        </div>

        <div>
          <button onclick="increaseQty(${index})">+</button>
          <button onclick="decreaseQty(${index})">-</button>
        </div>
      </div>
    `;
  });

  totalElement.innerText = total;
}

function increaseQty(index) {
  cart[index].qty++;
  updateCart();
}

function decreaseQty(index) {
  cart[index].qty--;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function printBill() {
  window.print();
}