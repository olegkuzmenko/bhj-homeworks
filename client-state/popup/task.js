const modal = document.querySelector('.modal')

const modalClose = document.querySelector('.modal__close')



const getCookie = (name) => {
  const value= "; " + document.cookie;
  let parts = value.split("; "+ name+ "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
  }
  return null;
}

localStorage.modalStatus = 'modal_active';

const setModalStatus = () => {
  if (getCookie('modalstatus')) {
    modal.classList.remove('modal_active')
  };
}

const closeModal = () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalstatus=closed'
}

window.addEventListener('load', setModalStatus);

modalClose.addEventListener('click', closeModal)