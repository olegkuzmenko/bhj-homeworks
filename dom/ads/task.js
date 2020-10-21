const rotators = Array.from(document.querySelectorAll('.rotator__case'))


const setRotator = () => {
  const index = rotators.findIndex((item) => 
    item.classList.contains('rotator__case_active'))

  rotators[index].classList.remove('rotator__case_active');

  let newIndex = 0;
  if (index !== rotators.length - 1) {
    newIndex = index + 1;
  }
  rotators[newIndex].style.color = rotators[newIndex].getAttribute('data-color');
  rotators[newIndex].classList.add('rotator__case_active');
  setTimeout(setRotator, document.getElementsByClassName('rotator__case_active')[0].getAttribute('data-speed'))
}

setTimeout(setRotator, 10)
