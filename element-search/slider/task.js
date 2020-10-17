const nav = Array.from(document.querySelectorAll('.slider__arrow'));
const images = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));

dots[0].classList.add('slider__dot_active');

nav[1].onclick = function() {
  const position = images.reduce((acc, image, index) => {
    if (image.classList.contains('slider__item_active') && index !== images.length - 1) {
      acc = index + 1;
    }
    image.classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    return acc;
  }, 0)
  images[position].classList.add('slider__item_active');
  dots[position].classList.add('slider__dot_active');
}

nav[0].onclick = function() {
  const position = images.reduce((acc, image, index) => {
    if (image.classList.contains('slider__item_active') && index !== 0) {
      acc = index - 1;
    }
    image.classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    return acc;
  }, images.length - 1)
  images[position].classList.add('slider__item_active');
  dots[position].classList.add('slider__dot_active');
}

dots.forEach((node, index) => {
  node.onclick = function() {
    let activeImage = document.querySelector('.slider__item_active')
    let activeDot = document.querySelector('.slider__dot_active')
    if (activeDot && activeDot !== node) {
      activeImage.classList.remove('slider__item_active');
      activeDot.classList.remove('slider__dot_active');
    }
    node.classList.add('slider__dot_active')
    images[index].classList.add('slider__item_active')
  }
})