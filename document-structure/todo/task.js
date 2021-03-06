const task = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add')


const removeTask = function() {
  this.closest('.task').remove()
}


const setTask = (event) => {
  if (event.key === 'Enter' || event.type === 'click') {
    event.preventDefault();
    if (task.value !== '') {
      list.insertAdjacentHTML("afterbegin", `
      <div class="task">
        <div class="task__title">
          ${task.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
      `) 
      task.value = '';
      list.querySelector('.task__remove').addEventListener('click', removeTask)
    }
  }
};

document.addEventListener('keydown', setTask)
button.addEventListener('click', setTask)


