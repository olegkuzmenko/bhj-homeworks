

const allModals = Array.from(document.querySelectorAll('.modal'));
const allModalsCloses = Array.from(document.querySelectorAll('.modal__close'))

allModals[0].className = 'modal modal_active';

allModals[0].getElementsByTagName('a')[0].onclick = function() {
  allModals[0].className = 'modal';
  allModals[1].className = 'modal modal_active'
}


const closeModal = function() {
  this.closest('.modal').classList.remove('modal_active')
}

allModalsCloses.forEach((node) => {
  node.addEventListener('click', closeModal)
})




