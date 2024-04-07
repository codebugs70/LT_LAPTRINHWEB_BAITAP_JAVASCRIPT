document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cart = [];

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const product = this.parentNode;
      const productName = product.querySelector(".product-name").innerText;
      const productPrice = product.querySelector(".product-price").innerText;
      cart.push({ name: productName, price: productPrice });
      updateCart();
    });
  });

  function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price}</span>
            `;
      cartContainer.appendChild(cartItem);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const price = urlParams.get("price");

  if (name && price) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <span>${name}</span>
            <span>${price}</span>
        `;
    document.getElementById("cart").appendChild(cartItem);
  }
});
