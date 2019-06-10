let contentArea = document.getElementById('contentArea');
contentArea.innerHTML = '<table class="chess"> <tr> <td><img src="images/pawn.png" id="pawn" draggable="true"></td> <td><img src="images/bishop.png" id="bishop"></td> <td><img src="images/knight.png" id="knight"></td> </tr> <tr> <td><img src="images/rook.png" id="rook"></td> <td><img src="images/queen.png" id="queen"></td> <td><img src="images/king.png" id="king"></td> </tr> </table> <table id="chessTable" class="chessboard"> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> <tr class="chessboard"> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> <td class="chessboard"></td> </tr> </table>';
const chessFigures = document.getElementsByClassName('chess')[0].getElementsByTagName('img');
const chessCells = document.getElementById('chessTable').getElementsByTagName('td');
let chessTable = document.getElementById('chessTable').firstElementChild;
let selected;
let selectedCell;

function clearField() {
  Array.prototype.forEach.call(chessCells, cell => cell.removeAttribute('style'));
}

Array.prototype.forEach.call(chessFigures, figure => {
  figure.addEventListener('click', function () {
    selected = figure.id;
    console.log(figure.id);
  });
  figure.addEventListener('dragstart', function () {
    selected = figure.id;
    console.log(figure.id);
  });
});
let showMoves = function (cell) {
  if(!selected) return;
  clearField();
  selectedCell = cell;
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

Array.prototype.forEach.call(chessCells, function (cell) {
  cell.addEventListener('click', function () {
    //debugger;
    showMoves(cell);
  });
  cell.addEventListener('drop', function() {
    debugger;
    showMoves(cell);
  });
  cell.addEventListener('dragover', function (event) {
    event.preventDefault();
  });
  cell.addEventListener('dragenter', function (event) {
    event.preventDefault();
  });
});
document.addEventListener('keyup', function (event) {
  event.preventDefault();
  debugger;
  if (event.code === 'ArrowUp') {
    console.log(selectedCell);
    showMoves(chessTable.children[selectedCell.parentElement.rowIndex - 1].children[selectedCell.cellIndex]);
  }
  if (event.code === 'ArrowDown') {
    showMoves(chessTable.children[selectedCell.parentElement.rowIndex + 1].children[selectedCell.cellIndex]);
  }
  if (event.code === 'ArrowLeft') {
    showMoves(chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex - 1]);
  }
  if (event.code === 'ArrowRight') {
    showMoves(chessTable.children[selectedCell.parentElement.rowIndex].children[selectedCell.cellIndex + 1]);
  }
});
