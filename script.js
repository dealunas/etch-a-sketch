const container=document.querySelector('#container');
const clear=document.querySelector('#clear');
const lKnob=document.querySelector('#left-knob');
const lDot=document.querySelector('#left-dot');
const rKnob=document.querySelector('#right-knob');
const rDot=document.querySelector('#right-dot');

let size=32;

//Changes color when mouse is hovering
function changeColor(e){
    e.target.style.backgroundColor = "black";
};

//Makes grid
function makeGrid(size){
    container.style.gridTemplateColumns=`repeat(${size}, 2fr)`
    container.style.gridTemplateRows=`repeat(${size/2}, 1fr)`

    for(i=0; i<size*(size/2); i++){
        const grid=document.createElement('div');
        grid.classList.add('grid');
        if(i===0){
            grid.setAttribute('style', 'border-radius: 10px 0px 0px 0px;');
        } else if (i === size-1){
            grid.setAttribute('style', 'border-radius: 0px 10px 0px 0px;');
        } else if (i === size*(size/2)-(size)){
            grid.setAttribute('style', 'border-radius: 0px 0px 0px 10px;');
        } else if (i === size*(size/2)-1){
            grid.setAttribute('style', 'border-radius: 0px 0px 10px 0px;');
        } else{
        grid.addEventListener('mouseover', changeColor);
        container.appendChild(grid);
        }
        grid.addEventListener('mouseover', changeColor);
        container.appendChild(grid);
    }
};

/*
//Left knob center point
let leftCenterX = lDot.offsetLeft +lDot.offsetWidth / 2;
let leftCenterY = rDot.offsetTop + lDot.offsetHeight / 2;

console.log(leftCenterX, leftCenterY);

//Right knob center point
let rCenterX = rDot.offsetLeft +rDot.offsetWidth / 2;
let rCenterY = rDot.offsetTop + rDot.offsetHeight / 2;

console.log(rCenterX, rCenterY);
*/

/*Calculates degree from where mouse clicks to where is drags
function calculateLeftDegree(e){
    const leftKnobPos = lKnob.getBoundingClientRect();
    const leftX1 = leftKnobPos.x;
    const leftY1 = leftKnobPos.y;
    const leftX2 = e.clientX;
    const leftY2 = e.clientY;
    
    const leftDeltaX = leftX2 - leftX1;
    const leftDeltaY = leftY2 - leftY1;

    const rad = Math.atan2(leftDeltaY, leftDeltaX);
    let deg = (180/Math.PI) * rad;
    console.log(deg)
    return deg;
};
*/

/* rotates knob with mouse
lKnob.addEventListener('mousedown', function() {
    lKnob.addEventListener('mousemove', rotate);
        function rotate(e) {
            const result = Math.floor(calculateLeftDegree(e));
            console.log(result);
            lKnob.style.transform = `rotate(${result}deg)`;
        }
        lKnob.addEventListener('mouseup', function() {
            lKnob.removeEventListener('mousemove', rotate);
        });
});

document.addEventListener('click', calculateLeftDegree);
*/

clear.onclick = () => reloadGrid()

function reloadGrid(){
    container.innerHTML = '';
    makeGrid(size);
};

window.onload = () => {
    makeGrid(size)
    
};
