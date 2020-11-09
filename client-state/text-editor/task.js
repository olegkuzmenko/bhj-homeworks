const editor = document.querySelector('#editor');
const btn = document.querySelector('#btn');

const saveLocal = () => {
  localStorage.text = editor.value;
}

const setContent = () => {
  editor.value = localStorage.getItem('text');
}

const clearAll = () => {
  editor.value = '';
}

window.addEventListener('load', setContent) 
editor.addEventListener('change', saveLocal)
btn.addEventListener('click', clearAll)