const adders = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const subtractors = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const quantity = Array.from(document.querySelectorAll('.product__quantity-value'))
const cart = document.querySelector('.cart__products')

const addition = function() {
  this.previousElementSibling.textContent = Number(this.previousElementSibling.textContent) + 1;
  this.closest('.product');
  addProductToCart(this)
}

const subtracting = function() {
  const previousQuantity = Number(this.nextElementSibling.textContent)
  const id = this.closest('.product').getAttribute('data-id');
  const list = Array.from(cart.querySelectorAll('.cart__product'))
  const index = list.findIndex(item => item.getAttribute('data-id') === id);
  console.log(index)
  if (previousQuantity === 1) {
    removeProductFromCart(index);
  } else {
    this.nextElementSibling.textContent = previousQuantity - 1;
    const quantity = this.nextElementSibling.textContent
    list[index].querySelector('.cart__product-count').textContent = quantity;
  }

}

adders.forEach(item => {
  item.addEventListener('click', addition)
})

subtractors.forEach(item => {
  item.addEventListener('click', subtracting)
})




const addProductToCart = function(node) {
  const list = Array.from(cart.querySelectorAll('.cart__product'))
  const quantity = node.previousElementSibling.textContent
  const id = node.closest('.product').getAttribute('data-id');
  const src = node.closest('.product').querySelector('.product__image').getAttribute('src');
  const index = list.findIndex(item => item.getAttribute('data-id') === id);
  if (index !== -1) {
    list[index].querySelector('.cart__product-count').textContent = quantity;
  } else {
    cart.innerHTML += `
    <div class="cart__product" data-id="${id}">
      <img class="cart__product-image" src="${src}">
      <div class="cart__product-count">${quantity}</div>
    </div>
    `;
  }
}


const removeProductFromCart = function(index) {
  const actualCart = document.getElementsByClassName('cart__products')
  actualCart[index].remove();
}

