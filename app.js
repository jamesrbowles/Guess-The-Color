// global variables
let numSquares = 6;
let colors = [];
const colorDisplay = document.getElementById("color-display");
const squares = document.querySelectorAll(".square");
const reset = document.getElementById("reset");
const easy = document.querySelector(".easy")
const hard = document.querySelector(".hard")

// random RGB color generator from start


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

console.log(genRandomColor(numSquares))


// Easy or Hard

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

// Generate random Colors

const genColors = () => {
    colors = genRandomColor(numSquares)
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
}

// random RGB from reset

reset.addEventListener("click", genColors);

genColors()