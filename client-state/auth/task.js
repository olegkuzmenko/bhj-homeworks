
const signin = document.querySelector('.signin');
const button = document.querySelector('.btn');
const user = document.querySelector('#signin__form');
const welcome = document.querySelector('.welcome');
const id = document.querySelector('#user_id')
signin.classList.add('signin_active')

const setUser = (user_id, success = true) => {
  if (success === true) {
    welcome.classList.add('welcome_active');
    id.textContent = user_id;
    signin.classList.remove('signin_active');
  } else {
    alert('Неверный логин/пароль');
  }
}

if (localStorage.user_id) {
  setUser(localStorage.user_id)
}

const setSignInData = (event) => {
  event.preventDefault()
  const form = new FormData(user)
  const xhr = new XMLHttpRequest()
  const url =  'https://netology-slow-rest.herokuapp.com/auth.php'
  xhr.open('POST', url);
  xhr.send(form);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
      const currentSuccess = JSON.parse(xhr.responseText).success;
      const currentUserId = JSON.parse(xhr.responseText).user_id;
      setUser(currentUserId, currentSuccess);
      if (currentSuccess === true) {
        localStorage.user_id = currentUserId;
      }
    }
  }
}




button.addEventListener('click', setSignInData)