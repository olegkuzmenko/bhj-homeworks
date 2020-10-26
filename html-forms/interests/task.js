
const allInterests = document.querySelectorAll('.interest__check')

const setCheckStatus = function() {
  const parent = this.closest('.interest');
  const children = Array.from(parent.querySelectorAll('.interest__check'))

  children.forEach(item => {
    this.checked ? item.checked = true : item.checked = false ;
  })

  if (parent.parentElement.closest('.interest')) {
    const grandParent = parent.parentElement.closest('.interest');
    this.checked ? grandParent.firstElementChild.firstElementChild.indeterminate = true : grandParent.firstElementChild.firstElementChild.indeterminate = false;
  }
}

allInterests.forEach(node => {
  node.addEventListener('change', setCheckStatus) 
});