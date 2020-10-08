
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')
const set = (index) => document.getElementById(`hole${index}`)

for (let i = 1; i <= 9; i += 1) {
  const hole = set(i);
  hole.onclick = function() {
    if (hole.className.includes( 'hole_has-mole' )) {
      if (Number(dead.textContent) < 10) {
        dead.textContent = Number(dead.textContent) + 1;
      }
      if (Number(dead.textContent) === 10) {
        alert('Вы победили!')
        dead.textContent = 0;
      }
    } else {
      if (Number(lost.textContent) < 5) {
        lost.textContent = Number(lost.textContent) + 1;
      }
      if (Number(lost.textContent) === 5) {
        alert('Вы проиграли')
        lost.textContent = 0;
      }
    }
  }
}