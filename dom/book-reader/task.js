const fonts = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('#book')
const fontColors = Array.from(document.querySelector('.book__control_color').children)
  .filter(item => item.classList.contains('color'));
const backgroundColors = Array.from(document.querySelector('.book__control_background').children)
  .filter(item => item.classList.contains('color'));


const removeClass = function(element, string) {
  const allClasses = element.className.split(' ');
  const newClasses = allClasses.filter(item => !item.includes(string))
  element.className = newClasses.join(' ');
} 

const setFontSize = function(event) {
  event.preventDefault();
  removeClass(book, 'book_fs');
  fonts.forEach(item => item.classList.remove('font-size_active'))
  if (this.hasAttribute('data-size')) {
    const data = this.getAttribute('data-size');
    book.classList.add(`book_fs-${data}`)
  }
  this.classList.add('font-size_active')
}

const setFontColor = function(event) {
  event.preventDefault();
  removeClass(book, 'book_color');
  fontColors.forEach(item => item.classList.remove('color_active'));
  const data = this.getAttribute('data-text-color');
  book.classList.add(`book_color-${data}`)
  this.classList.add('color_active')
}

const setFontBackground = function(event) {
  event.preventDefault();
  removeClass(book, 'book_bg');
  backgroundColors.forEach(item => item.classList.remove('color_active'));
  const data = this.getAttribute('data-bg-color');
  book.classList.add(`book_bg-${data}`)
  this.classList.add('color_active')
}

fonts.forEach(item => {
  item.addEventListener('click', setFontSize);
})

fontColors.forEach(item => {
  item.addEventListener('click', setFontColor);
})

backgroundColors.forEach(item => {
  item.addEventListener('click', setFontBackground);
})