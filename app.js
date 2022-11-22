// global variables
let numSquares = 6;
let colors = [];
const colorDisplay = document.getElementById("color-display");
const squares = document.querySelectorAll(".square");
const reset = document.getElementById("reset");
const easy = document.querySelector(".easy")
const hard = document.querySelector(".hard")
const h1Header = document.querySelector("h1")
const message = document.getElementById("message");


// Random colors array
const makeColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`
};

const genRandomColor = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr;
}


// Easy or Hard buttons

easy.addEventListener('click', function() {
    if(!easy.classList.contains('selected')){
        easy.classList.add('selected')
        hard.classList.remove('selected')
    }
    numSquares = 3
    for (let i = 3; i < squares.length; ++i) {
        squares[i].classList.remove('square');
     }
     genColors()
})

hard.addEventListener('click', function() {
    if(!hard.classList.contains('selected')){
        hard.classList.add('selected')
        easy.classList.remove('selected')
    }
    numSquares = 6
    for (let i = 0; i < squares.length; ++i) {
        squares[i].classList.add('square');
     }
     genColors()
})


// Reset Values at end of game
const resetValues = () => {
    squares.forEach(square => square.classList.remove('faded'));
    message.innerHTML = ''
    h1Header.style.backgroundColor = '#2C8E99'
    reset.innerHTML = 'New Colors'
}

// Generate and pick random colors
const genColors = () => {
    resetValues()
    //Random RGB value displayed
    colors = genRandomColor(numSquares)
    let randIndex = Math.floor(Math.random()*numSquares)
    let displayedColor = colors[randIndex]
    colorDisplay.innerHTML = displayedColor

    //Color the squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }

    // functionality for picking a square
    squares.forEach(square => square.addEventListener('click', function(){
        square.classList.add('faded')
        if (square.style.backgroundColor === displayedColor) {
            squares.forEach(square => square.classList.remove('faded'));
            h1Header.style.backgroundColor = displayedColor
            message.innerHTML = 'Correct'
            reset.innerHTML = 'Play Again'
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = displayedColor
            }
        } else {
            message.innerHTML = 'Try Again'
        }
    }));

    // New colors reset button
    reset.addEventListener("click", genColors);
}


genColors()