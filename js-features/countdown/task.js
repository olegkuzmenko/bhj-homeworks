

const timerData = document.getElementById('timer');
let startData = timerData.textContent;

const timerId = setInterval(function() { 
    const seconds = startData % 60;
    const minutes = startData / 60 % 60;
    const hour = startData / 3600 % 60;
    let timeInString = `
      ${String(Math.trunc(hour)).padStart(2,'0')}:
      ${String(Math.trunc(minutes)).padStart(2,'0')}:
      ${String(Math.trunc(seconds)).padStart(2,'0')}
    `;
    if (Number(startData) < 0) {
      clearInterval(timerId);
      alert('Вы победили!')
    } else {
      timerData.textContent = timeInString;
      startData -= 1;
    }
  }, 1000
);







 