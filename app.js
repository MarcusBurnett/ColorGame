var header = document.getElementById('header');
var square = document.getElementsByClassName('square');
var newColors = document.getElementById('newColours');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var active = document.querySelector('.active');
var numSquares = 6;
var colors = generateColors(numSquares);
var colorDisplay = document.getElementById('rgb');
var pickedColor = colors[Math.floor(Math.random() * numSquares)];
var result = document.getElementById('result');

colorDisplay.textContent = pickedColor;

squareColors();

function squareColors(){
    for (var i = 0; i < square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = 'block';

        } else {
            square[i].style.display = 'none';
        }
        square[i].addEventListener('click', function(){

        var clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor){
                header.style.backgroundColor = pickedColor;
                for( var i = 0; i < numSquares; i++){
                square[i].style.backgroundColor = pickedColor;
                result.textContent = "Correct!";
                newColors.textContent = "Play Again";
                }
            } else {
                this.style.backgroundColor = 'rgb(41, 41, 41)';
                result.textContent = "Try Again";

            }
        })
    };
}

newColors.addEventListener('click', reset);

easy.addEventListener('click', function(){
    numSquares = 3;
    this.classList.add('active');
    hard.classList.remove('active');
    reset();
})

    
hard.addEventListener('click', function(){
    numSquares = 6;
    this.classList.add('active');
    easy.classList.remove('active');
    reset();
})

function generateColors(numSquares) {
    var arr = [];

    for ( var i = 0; i < numSquares; i++){
            arr.push(randomColor());
    } return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset(){
    colors = generateColors(numSquares);
    pickedColor = colors[Math.floor(Math.random() * numSquares)];
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = 'rgb(71, 123, 165)';
    squareColors();
    result.textContent = "";
    newColors.textContent = "NEW COLOURS";
}
