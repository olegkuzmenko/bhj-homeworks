const dropdown = document.querySelector('.dropdown__list');
const headOfDropdown = document.querySelector('.dropdown__value');
dropdown.classList.add('dropdown__list_active');

const listOfDropdownItems = document.querySelectorAll('.dropdown__item');

const setValue = function(event) {
  event.preventDefault();
  document.querySelector('.dropdown__value').textContent = this.textContent;

}

const closeDropdown = function(event) {
  event.preventDefault();
  document.querySelector('.dropdown__list_active').classList.remove('dropdown__list_active');
}

const operateDropdown = function(event) {
  event.preventDefault();
  dropdown.classList.toggle('dropdown__list_active');
}

listOfDropdownItems.forEach((node) => {
  node.addEventListener('click', setValue);
  node.addEventListener('click', closeDropdown);
})

headOfDropdown.addEventListener('click', operateDropdown)



