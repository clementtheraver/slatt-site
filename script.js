let cart = [];

function addToCart(name, price, sizeId = null) {
  let size = sizeId ? document.getElementById(sizeId).value : "N/A";
  if (sizeId && size === "Select Size") {
    alert("Please select a size.");
    return;
  }
  cart.push({ name, price, size });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.size}) - ₦${item.price.toLocaleString()}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toLocaleString();
}

function submitOrder(event) {
  event.preventDefault();
  alert("✅ Order submitted! We'll contact you via WhatsApp or Email to confirm.");
  cart = [];
  updateCart();
  event.target.reset();
}


