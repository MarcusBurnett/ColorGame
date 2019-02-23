var header = document.getElementById('header');
var square = document.getElementsByClassName('square');
var newColours = document.getElementById('newColours');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var active = document.querySelector('.active');
var numSquares = 6;
var colours = generateColours(numSquares);
var colourDisplay = document.getElementById('rgb');
var pickedColour = colours[Math.floor(Math.random() * numSquares)];
var result = document.getElementById('result');

colourDisplay.textContent = pickedColour;

squareColours();

function squareColours(){
    for (var i = 0; i < square.length; i++){
        if(colours[i]){
            square[i].style.backgroundColor = colours[i];
            square[i].style.display = 'block';

        } else {
            square[i].style.display = 'none';
        }
        square[i].addEventListener('click', function(){

        var clickedColour = this.style.backgroundColor;

            if(clickedColour === pickedColour){
                header.style.backgroundColor = pickedColour;
                for( var i = 0; i < numSquares; i++){
                square[i].style.backgroundColor = pickedColour;
                result.textContent = "Correct!";
                newColours.textContent = "PLAY AGAIN";
                }
            } else {
                this.style.backgroundColor = 'rgb(41, 41, 41)';
                result.textContent = "Try Again";

            }
        })
    };
}

newColours.addEventListener('click', reset);

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

function generateColours(numSquares) {
    var arr = [];

    for ( var i = 0; i < numSquares; i++){
            arr.push(randomColour());
    } return arr;
}

function randomColour() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset(){
    colours = generateColours(numSquares);
    pickedColour = colours[Math.floor(Math.random() * numSquares)];
    colourDisplay.textContent = pickedColour;
    header.style.backgroundColor = 'rgb(71, 123, 165)';
    squareColours();
    result.textContent = "";
    newColours.textContent = "NEW COLOURS";
}
