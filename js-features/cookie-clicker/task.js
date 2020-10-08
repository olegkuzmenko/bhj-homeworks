

const amountOfClicks = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed_counter');
const image = document.getElementById('cookie');
let start = Number(amountOfClicks.textContent)
let previousTime = Date.now();

image.onclick = function() {
  amountOfClicks.textContent = start += 1;
  if (start % 2 !== 0) {
    image.width = 250;
  } else {
    image.width = 200;
  }
  let newTime = Date.now();
  speed.textContent = 1 / ((newTime - previousTime) / 1000) ;
  previousTime = newTime;
};
  
