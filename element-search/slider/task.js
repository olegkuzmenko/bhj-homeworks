const nav = Array.from(document.querySelectorAll('.slider__arrow'));
const images = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));

const setActive = (position) => {
  images[position].classList.add('slider__item_active');
  dots[position].classList.add('slider__dot_active');
}

const findCurrentPosition = () => {
  const position = images.findIndex((item) => item.classList.contains('slider__item_active'));
  return position;
}

const deleteActive = (position) => {
  images[position].classList.remove('slider__item_active');
  dots[position].classList.remove('slider__dot_active');
}

const setActiveByArrows = function () {
  const position = findCurrentPosition();
  deleteActive(position);
  let newPosition;
  if (this.classList.contains('slider__arrow_prev')) {
    newPosition = position === 0 ? images.length - 1 : position - 1;
  } else {
    newPosition = position === images.length - 1 ? 0 : position + 1;
  }
  setActive(newPosition);
}


const setActiveByDots = function() {
  const position = findCurrentPosition();
  deleteActive(position);
  this.classList.add('slider__dot_active')
  const newPosition = dots.findIndex((item) => item.classList.contains('slider__dot_active'));
  setActive(newPosition);
}

setActive(findCurrentPosition());

nav.forEach((node) => {
  node.addEventListener('click', setActiveByArrows)
})

dots.forEach((node) => {
  node.addEventListener('click', setActiveByDots)
})

