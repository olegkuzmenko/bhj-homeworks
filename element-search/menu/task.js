

const allMenu = Array.from(document.querySelectorAll('.menu__link'));

allMenu.forEach((node) => {
  node.onclick = function() {
  
    let active = document.querySelector('.menu_active')
    if (active && active !== node.nextElementSibling) {
      active.classList.remove('menu_active');
    }

    node.nextElementSibling.classList.toggle('menu_active');
    return false;
  }
})


