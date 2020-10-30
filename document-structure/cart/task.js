const adders = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const subtractors = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const cart = document.querySelector('.cart__products')
const buttons = Array.from(document.querySelectorAll('.product__add'))


const addition = function() {
  this.previousElementSibling.textContent = Number(this.previousElementSibling.textContent) + 1;
}

const addProductToCart = function() {
  const list = Array.from(cart.querySelectorAll('.cart__product'))
  const quantity = this.closest('.product').querySelector('.product__quantity-value').textContent
  const id = this.closest('.product').getAttribute('data-id');
  const src = this.closest('.product').querySelector('.product__image').getAttribute('src');
  const index = list.findIndex(item => item.getAttribute('data-id') === id);
  if (index !== -1) {
    list[index].querySelector('.cart__product-count').textContent = Number(list[index].querySelector('.cart__product-count').textContent) + Number(quantity);
  } else {
    cart.innerHTML += `
    <div class="cart__product" data-id="${id}">
      <img class="cart__product-image" src="${src}">
      <div class="cart__product-count">${quantity}</div>
    </div>
    `;
  }
  this.closest('.product').querySelector('.product__quantity-value').textContent = 1;
}

const subtracting = function() {
  const previousQuantity = Number(this.nextElementSibling.textContent)
  if (previousQuantity !== 1) {
    this.nextElementSibling.textContent = previousQuantity - 1;
  }
}

adders.forEach(item => {
  item.addEventListener('click', addition)
})

buttons.forEach(item => {
  item.addEventListener('click', addProductToCart)

})

subtractors.forEach(item => {
  item.addEventListener('click', subtracting)
})




