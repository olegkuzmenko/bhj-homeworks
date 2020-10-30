const allrefs = Array.from(document.querySelectorAll('.has-tooltip'));

let tip = document.querySelector('.tooltip')

const operateTip = function(event) {
  event.preventDefault();
  tip.classList.toggle('tooltip_active');
  tip.innerText = this.getAttribute('title')
  tip.setAttribute('style', `left: ${this.getBoundingClientRect().left}px; top: ${this.getBoundingClientRect().top}px - 20 px`)
  tip.setAttribute('data-position', 'top')
  this.appendChild(tip);
}


allrefs.forEach(ref => {
  ref.addEventListener('click', operateTip)
})

//const body = document.getElementsByTagName('body')[0]
//body.insertBefore(tip, this.nextElementSibling);