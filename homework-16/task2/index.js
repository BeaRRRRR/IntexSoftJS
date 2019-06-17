const contentArea = document.getElementById('contentArea');
contentArea.innerHTML = '<table class="chess"> <tr> <td><img src="images/pawn.png" id="pawn" draggable="true"></td> <td><img src="images/bishop.png" id="bishop"></td> <td><img src="images/knight.png" id="knight"></td> </tr> <tr> <td><img src="images/rook.png" id="rook"></td> <td><img src="images/queen.png" id="queen"></td> <td><img src="images/king.png" id="king"></td> </tr> </table> <table id="chessTable" class="chessboard"> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> </table>';
const chessFigures = document.getElementsByClassName('chess')[0].getElementsByTagName('img');
const chessFiguresTable = document.getElementsByClassName('chess')[0];
const chessCells = document.getElementById('chessTable').getElementsByTagName('td');
const chessTable = document.getElementById('chessTable').firstElementChild;
let selected;
let selectedCell;

function clearField() {
  Array.prototype.forEach.call(chessCells, cell => cell.removeAttribute('style'));
}

let showMoves = function (event,cell) {
  if(event) {
    if (!selected || event.target.tagName != 'TD') return;
  }
  clearField();
  selectedCell = event ? event.target : cell;
  if (selected === 'pawn') {
    if (chessTable.children[selectedCell.parentElement.rowIndex - 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex].style = 'background-color : green;background-image : url(images/pawn.png);background-repeat : no-repeat;background-position: center';
    }
  }
  if (selected === 'knight') {
    if (chessTable.children[selectedCell.parentElement.rowIndex - 2] && chessTable.children[selectedCell.parentElement.rowIndex - 2].children[selectedCell.cellIndex - 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 2].children[selectedCell.cellIndex - 1].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex - 2] && chessTable.children[selectedCell.parentElement.rowIndex - 2].children[selectedCell.cellIndex + 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 2].children[selectedCell.cellIndex + 1].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex - 1] && chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex - 2]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex - 2].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex - 1] && chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex + 2]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex + 2].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex + 2] && chessTable.children[selectedCell.parentElement.rowIndex + 2].children[selectedCell.cellIndex - 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex + 2].children[selectedCell.cellIndex - 1].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex + 2] && chessTable.children[selectedCell.parentElement.rowIndex + 2].children[selectedCell.cellIndex + 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex + 2].children[selectedCell.cellIndex + 1].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex + 1] && chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex - 2]) {
      chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex - 2].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex + 1] && chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex + 2]) {
      chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex + 2].style = 'background-color : green;background-image : url(images/knight.png);background-repeat : no-repeat;background-position: center';
    }
  }
  if (selected === 'rook') {
    Array.prototype.forEach.call(chessTable.children[selectedCell.parentElement.rowIndex].children, cell => cell.style = 'background-color : green;background-image : url(images/rook.png);background-repeat : no-repeat;background-position: center');
    Array.prototype.forEach.call(chessTable.children, row => row.children[selectedCell.cellIndex].style = 'background-color : green;background-image : url(images/rook.png);background-repeat : no-repeat;background-position: center');
  }
  if (selected === 'bishop') {
    Array.prototype.forEach.call(chessTable.children, row => {
      //debugger;
      let child = row.children[selectedCell.cellIndex - Math.abs(row.rowIndex - selectedCell.parentElement.rowIndex)];
      if (child) {
        child.style = 'background-color : green;background-image : url(images/bishop.png);background-repeat : no-repeat;background-position: center';
      }
      let child2 = row.children[selectedCell.cellIndex + Math.abs(row.rowIndex - selectedCell.parentElement.rowIndex)];
      if (child2) {
        child2.style = 'background-color : green;background-image : url(images/bishop.png);background-repeat : no-repeat;background-position: center';
      }
    });
  }
  if (selected === 'queen') {
    Array.prototype.forEach.call(chessTable.children, row => {
      //debugger;
      let child = row.children[selectedCell.cellIndex - Math.abs(row.rowIndex - selectedCell.parentElement.rowIndex)];
      if (child) {
        child.style = 'background-color : green;background-image : url(images/queen.png);background-repeat : no-repeat;background-position: center';
      }
      let child2 = row.children[selectedCell.cellIndex + Math.abs(row.rowIndex - selectedCell.parentElement.rowIndex)];
      if (child2) {
        child2.style = 'background-color : green;background-image : url(images/queen.png);background-repeat : no-repeat;background-position: center';
      }
    });
    Array.prototype.forEach.call(chessTable.children[selectedCell.parentElement.rowIndex].children, cell => cell.style = 'background-color : green;background-image : url(images/queen.png);background-repeat : no-repeat;background-position: center');
    Array.prototype.forEach.call(chessTable.children, row => row.children[selectedCell.cellIndex].style = 'background-color : green;background-image : url(images/queen.png);background-repeat : no-repeat;background-position: center');
  }
  if (selected === 'king') {
    if (chessTable.children[selectedCell.parentElement.rowIndex - 1] && chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex - 1] && chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex + 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex + 1].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex - 1] && chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex - 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex - 1].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex + 1] && chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex]) {
      chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex + 1] && chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex + 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex + 1].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex + 1] && chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex - 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex - 1].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex] && chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex - 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex - 1].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
    if (chessTable.children[selectedCell.parentElement.rowIndex] && chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex + 1]) {
      chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex + 1].style = 'background-color : green;background-image : url(images/king.png);background-repeat : no-repeat;background-position: center';
    }
  }
  selectedCell.style = 'background-color : red';
};
chessFiguresTable.addEventListener('click', function (event) {
  let target = event.target;
  if (target.tagName == 'IMG') {
    selected = target.id;
  }
});


chessFiguresTable.addEventListener('dragstart', function (event) {
  let target = event.target;
  if (target.tagName == 'IMG') {
    selected = target.id;
  }
});

chessTable.addEventListener('click',function(event){
  showMoves(event)
});
chessTable.addEventListener('drop',function (event) {
  event.preventDefault();
  showMoves(event)
});
chessTable.addEventListener('dragover',function (event) {
  event.preventDefault();
});
chessTable.addEventListener('dragenter',function (event) {
  event.preventDefault();
});


document.addEventListener('keyup', function (event) {
  event.preventDefault();
  if (event.code === 'ArrowUp') {
    showMoves(undefined,chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex]);
  }
  if (event.code === 'ArrowDown') {
    showMoves(undefined,chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex]);
  }
  if (event.code === 'ArrowLeft') {
    showMoves(undefined,chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex - 1]);
  }
  if (event.code === 'ArrowRight') {
    showMoves(undefined, chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex + 1]);
  }
});
