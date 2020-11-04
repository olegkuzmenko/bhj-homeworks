const file = document.querySelector('#form')

file.addEventListener('submit', (e) => {
  let formData = new FormData(file)
  let xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  
  xhr.upload.onprogress = function (event) {
    const progress = document.getElementById( 'progress' );
    progress.value += event.loaded / event.total ; 
  }

  xhr.send(formData)
  
  e.preventDefault()

});

