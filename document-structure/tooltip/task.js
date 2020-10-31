const allrefs = Array.from(document.querySelectorAll('.has-tooltip'));

const operateTip = function(event) {
  event.preventDefault();

  this.setAttribute('active', 'null');
  allrefs.forEach(function(ref) {
    if (!ref.hasAttribute('active')) {
      ref.nextElementSibling.className = 'tooltip';
    }
  })
  this.removeAttribute('active')

  const tip = this.nextElementSibling;
  tip.classList.toggle('tooltip_active');
  tip.innerText = this.getAttribute('title')
  tip.setAttribute('style', `left: ${this.getBoundingClientRect().left}px; top: ${this.getBoundingClientRect().top}px - 20 px`)
  tip.setAttribute('data-position', 'top');
}


allrefs.forEach(ref => {
  ref.insertAdjacentHTML('afterend', '<div class="tooltip" style="left: 0; top: 0">')
  ref.addEventListener('click', operateTip)
})

//const body = document.getElementsByTagName('body')[0]
//body.insertBefore(tip, this.nextElementSibling);