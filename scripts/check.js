import { X, O } from "./index.js";

const checkRow = (pos,char) => {
  const row = document.getElementById(pos.row);
  let cols = row.children;
  let inp = document.createElement("img");
  inp.src = (char == 0)? O : X;
  for(let i = 0; i < cols.length; i++) {
    let check = cols[i].firstChild;
    if (!check || check.src != inp.src ) return false;
  }
  return true;
}


const checkCol = (pos,char) => {
  const col = pos.col;
  const rows = document.querySelectorAll('.row');
  let inp = document.createElement("img");
  inp.src = (char == 0)? O : X;
  for(let i = 0; i < rows.length; i++) {
    let check = rows[i].children[col - 1].firstChild;
    if (!check || check.src != inp.src ) return false;
  }
  return true;
}

const checkBackDiag = (pos,char) => {
  let validDiags = [{'row': 1, 'col': 1},{'row': 2, 'col': 2},{'row': 3, 'col': 3}];
  let checkValid = () => {
    let res = false;
    validDiags.forEach(x =>{
      if (x.row == pos.row && x.col == pos.col) {
        res = true;
      }
    })
    return res;
  }
  if (checkValid()) {
    let inp = document.createElement("img");
    inp.src = (char == 0)? O : X;
    
    for(let i = 0; i < validDiags.length; i++) {
      let check = getValue(validDiags[i].row, validDiags[i].col);
      if(!check || check.src != inp.src) return false;
    }
    return true;
  }
  return false;
}

const checkFrontDiag = (pos,char) => {
  let validDiags = [{'row': 1, 'col': 3},{'row': 2, 'col': 2},{'row': 3, 'col': 1}];
  let checkValid = () => {
    let res = false;
    validDiags.forEach(x =>{
      if (x.row == pos.row && x.col == pos.col) {
        res = true;
      }
    })
    return res;
  }
  if (checkValid()) {
    let inp = document.createElement("img");
    inp.src = (char == 0)? O : X;
    
    for(let i = 0; i < validDiags.length; i++) {
      let check = getValue(validDiags[i].row, validDiags[i].col);
      if(!check || check.src != inp.src) return false;
    }
    return true;
  }
  return false;
}

function getValue(r, c) {
  let row = document.getElementById(r);
  let col = row.children[c - 1];
  return col.firstChild;
}

export default function Check(pos,char) {
  let row = checkRow(pos,char)
  let col =  checkCol(pos,char)
  let bdiag = checkBackDiag(pos,char)
  let fdiag = checkFrontDiag(pos,char)
  // console.log({row, col, bdiag, fdiag})
  return row || col || bdiag || fdiag;
}