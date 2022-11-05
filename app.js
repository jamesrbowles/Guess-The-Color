// global variables
let numSquares = 6;
let colors = [];
const colorDisplay = document.getElementById("color-display");
const squares = document.querySelectorAll(".square");
const reset = document.getElementById("reset");

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

genRandomColor(numSquares)

// random RGB from reset

reset.addEventListener("click", function() {
    colors = genRandomColor(numSquares)
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = genRandomColor(numSquares)
    }
});

/*
// color guess function
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        randomColor()
        
    },{once : true})
}
*/