const tabs = Array.from(document.querySelectorAll('.tab'))
const tabsContents = Array.from(document.querySelectorAll('.tab__content'))

const getUnactive = function() {
  tabs.forEach((node) => {
    if (node.classList.contains('tab_active')) {
      node.classList.remove('tab_active')
    }
  })
  tabsContents.forEach((node) => {
    if (node.classList.contains('tab__content_active')) {
      node.classList.remove('tab__content_active')
    }
  })
}

const setActive = function() {
  getUnactive()
  this.classList.add('tab_active');
  index = tabs.findIndex(item => item.classList.contains('tab_active'))
  tabsContents[index].classList.add('tab__content_active')
}


tabs.forEach((node) => {
  node.addEventListener('click', setActive)
})