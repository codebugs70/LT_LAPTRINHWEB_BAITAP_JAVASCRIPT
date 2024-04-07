document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const name = this.getAttribute("data-name");
      const price = parseFloat(this.getAttribute("data-price"));
      addToCart(name, price);
    });
  });

  function addToCart(name, price) {
    let cart = localStorage.getItem("BT12_CART");
    cart = cart ? JSON.parse(cart) : [];
    cart.push({ name, price });
    localStorage.setItem("BT12_CART", JSON.stringify(cart));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.getElementById("cart");
  let cart = localStorage.getItem("BT12_CART");
  cart = cart ? JSON.parse(cart) : [];

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price}</span>
        `;
    cartContainer.appendChild(cartItem);
  });
});
