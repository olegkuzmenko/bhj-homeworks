let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText).response.Valute
    for (let currency in data) {
      const list = document.querySelector('#items');
      list.insertAdjacentHTML('afterbegin', 
      `<div class="item">
        <div class="item__code">
        ${data[currency].CharCode}
        </div>
        <div class="item__value">
        ${data[currency].Value}
        </div>
        <div class="item__currency">
        руб.
        </div>
      </div>
      `)
    }

    document.querySelector('.loader').classList.remove('loader_active');
    
  };
};
