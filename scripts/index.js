import { Position } from "./position.js";
import Check from "./check.js";
import { Reset, disable } from "./end.js";

export const X = './img/x-thin-svgrepo-com.svg'
export const O = './img/smile-o-svgrepo-com.svg'
let turnX = true;

function renderGame(el) {
  // console.log('I have played')
  if (turnX) {
    let x = document.createElement("img");
    x.src = X;
    el.append(x);
    turnX = false;
    return 1;
  } else {
    let o = document.createElement("img");
    o.src = O;
    el.append(o);
    turnX = true;
    return 0;
  }
}

let boxes = document.querySelectorAll('.column');

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', (e)=>{
    if(e.composedPath()[0].innerHTML == '' && e.composedPath()[0].classList.contains('column')) {
      let char = renderGame(e.composedPath()[0])
      let pos = Position(e.composedPath());
      let result = Check(pos,char);
      if (result) {
        disable();
        if (char == 0) {
          alert('O wins!');
        } else {
          alert('X wins!')
        }
      }
    } else {
      console.log('already played here')
    }
  })
}