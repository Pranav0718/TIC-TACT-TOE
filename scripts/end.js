let cols = document.querySelectorAll('.column');
let restartBtn = document.getElementById('play-again');

export function Reset() {
  for(let i = 0; i < cols.length; i++){
    cols[i].innerHTML = '';
  }
  enable();
}

export function disable() {
  restartBtn.style.display = 'block';
  for(let i = 0; i < cols.length; i++){
    cols[i].style.setProperty('pointer-events', 'none');
  }
}

function enable() {
  restartBtn.style.display = 'none';
  for(let i = 0; i < cols.length; i++){
    cols[i].style.setProperty('pointer-events', 'auto');
  }
}

restartBtn.addEventListener('click', ()=>{
  Reset()
})