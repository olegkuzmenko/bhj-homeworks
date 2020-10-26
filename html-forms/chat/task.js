const sideButton = document.querySelector('.chat-widget__side')
sideButton.addEventListener('click', () => document
  .querySelector('.chat-widget').classList.add('chat-widget_active'))

const message = document.querySelector('#chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

const answer = [
  'Добрый вечер',
  'Доброе утро',
  'Добрый день',
]

const getMessage = () =>  {
  const index =  Math.floor(Math.random() * answer.length);
  return answer[index]
}

const recieveMessage = (message = getMessage()) => {
  const timeRecived = new Date;
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${timeRecived.getHours()}:${timeRecived.getMinutes()}</div>
    <div class="message__text">${message}</div>
  </div>
  `;
}

let lastMessageTime = Date.now()

const sendMessage = (event) => {
  if (event.key === 'Enter' && message.value !== '') {
    const timeSent = new Date;
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${timeSent.getHours()}:${timeSent.getMinutes()}</div>
      <div class="message__text">
        ${message.value}
      </div>
    </div>
    `;
    message.value = '';
    lastMessageTime = timeSent.getTime()
    setTimeout(recieveMessage, 2000);
  }
}

timerId = setInterval(() => {
  if (Date.now() - lastMessageTime > 30000) {
    recieveMessage('Вы еще тут?');
    clearInterval(timerId)
  }
}, 1000);

document.addEventListener('keydown', sendMessage)






