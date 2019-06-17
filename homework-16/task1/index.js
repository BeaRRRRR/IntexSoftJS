let contentArea = document.getElementById('contentArea');
contentArea.innerHTML = '<form> <input id="numberInput" class="input" type="number" max="30"> <input id="submit" type="submit" value="Отправить"> <input id="reset" type="reset" value="Очистить"> </form> <div id="figures"> <div class="square"></div> <div class="circle"></div> <div class="strangeFigureRight"></div> <div class="strangeFigureLeft"></div> </div> <div id="drawArea"> </div>'
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');
let input = document.getElementById('numberInput');
let figures = document.getElementById('figures').getElementsByTagName('div');
let drawArea = document.getElementById('drawArea');
let selectedFigure;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

reset.addEventListener('click',function(){
  drawArea.innerHTML = '';
});

Array.prototype.forEach.call(figures,figure => figure.addEventListener('click',function () {
  selectedFigure = figure.className;
}));


let listener = function (event) {
  event.preventDefault();
  drawArea.innerHTML = '';
  let number = input.value;
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      drawArea.innerHTML += `<div class="${selectedFigure}" style="background-color: ${getRandomColor()}"></div>`;
    }
    drawArea.innerHTML+= '<br>'
  }
};
submit.addEventListener('click',listener);
