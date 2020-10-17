

const allMenu = Array.from(document.querySelectorAll('.menu__link'));

allMenu.forEach((node) => {
  node.onclick = function() {
  
    let active = document.querySelector('.menu_active')
    if (active && active !== node.nextElementSibling) {
      active.classList.remove('menu_active');
    }

    if (!node.nextElementSibling.classList.contains('menu_active')) {
      node.nextElementSibling.classList.add('menu_active');
    } else {
      node.nextElementSibling.classList.remove('menu_active');
    }
    return false;
  }
})