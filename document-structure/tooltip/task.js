const allrefs = Array.from(document.querySelectorAll('.has-tooltip'));

let tip = document.querySelector('.tooltip')

const showTip = function(event) {
  event.preventDefault();
  if (document.querySelector('.tooltip_active')) {
    document.querySelector('.tooltip_active').classList.remove('tooltip_active');
  }

  console.log(this.getBoundingClientRect().left)
  tip.classList.add('tooltip_active');
  tip.innerText = this.getAttribute('title')
  tip.setAttribute('style', `left: ${this.getBoundingClientRect().left}px; top: ${this.getBoundingClientRect().top}px`)
  tip.setAttribute('data-position', 'top')
  this.appendChild(tip);
}


allrefs.forEach(ref => {
  ref.addEventListener('click', showTip)
})

//const body = document.getElementsByTagName('body')[0]
//body.insertBefore(tip, this.nextElementSibling);