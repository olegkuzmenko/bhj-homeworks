
/*
const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success')
const btnMain = main.getElementsByClassName('btn btn_danger modal__close show-success')
const closeScs = success.getElementsByClassName('modal__close modal__close_times')
main.className = 'modal modal_active'

btnMain[0].onclick = function() {
  main.className = 'modal';
  success.className = 'modal modal_active'
}

closeScs.item(0).onclick = function() {
  success.className = 'modal'
}
*/


const allModals = Array.from(document.querySelectorAll('.modal'));

allModals[0].className = 'modal modal_active';

allModals[0].getElementsByTagName('a')[0].onclick = function() {
  allModals[0].className = 'modal';
  allModals[1].className = 'modal modal_active'
}

allModals[0].getElementsByTagName('a')[0].previousElementSibling.onclick = function() {
  allModals[0].className = 'modal';
}


allModals[1].getElementsByTagName('a')[0].previousElementSibling.onclick = function() {
  allModals[1].className = 'modal';
}




