const reveal = Array.from(document.querySelectorAll('.reveal'));

const showScrolledElement = function() {
  reveal.forEach((node) => {
    const viewPortHight = window.innerHeight;
    const elementTop = node.getBoundingClientRect().top;

    if ((elementTop < viewPortHight) && (elementTop >= 0)) {
      node.classList.add('reveal_active');
    } else {
      node.classList.remove('reveal_active');
    }
  })
}

document.addEventListener('scroll', showScrolledElement)



