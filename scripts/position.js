const cols = document.querySelectorAll('.column');

export const Position = (p) => {
  let row = parseInt(determineRow(p));
  let col = parseInt(determineCol(p));
  return {row,col};
}


const determineRow = (path)=>{
  let row = path[1]
  return row.id;
}

const determineCol = (path)=>{
  let col = path[0]
  return col.id;
}

