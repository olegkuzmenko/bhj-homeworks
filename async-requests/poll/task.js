let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText).data

    const title = data.title
    const answers = data.answers
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', 
      `<div class="poll">
        <div class="poll__title" id="poll__title">
          ${title}
        </div>
        <div class="poll__answers poll__answers_active" id="poll__answers">
          ${answers.map(answer => `<button class="poll__answer">${answer}</button>`).join('')}
        </div>
      </div>
    `)
    const buttons = document.querySelectorAll('.poll__answers')
    buttons.forEach(button => {
      button.addEventListener('click', () => alert('Спасибо'))
    })
  }
}