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

//Below is for the left knob to rotate when dragged with mouse
//Left knob center point
let leftCenterX = lKnob.offsetLeft +lKnob.offsetWidth / 2;
let leftCenterY = lKnob.offsetTop + lKnob.offsetHeight / 2;

//Calculates degree from where mouse clicks to where it drags
function calculateLeftDegree(e){
    const leftX = e.clientX;
    const leftY = e.clientY;

    const rad = Math.atan2(leftX - leftCenterX, leftY - leftCenterY);
    const deg = (rad * (180/Math.PI) * -1) + 180;
    return deg;
};

// rotates left knob with mouse
lKnob.addEventListener('mousedown', function() {
    lKnob.addEventListener('mousemove', rotate);
        function rotate(e) {
            const result = Math.floor(calculateLeftDegree(e));
            lKnob.style.transform = `rotate(${result}deg)`;
        }
        lKnob.addEventListener('mouseup', function() {
            lKnob.removeEventListener('mousemove', rotate);
        });
});

document.addEventListener('click', calculateLeftDegree);

//Below is for the right knob to rotate when dragged with mouse
//Right knob center point
let rCenterX = rKnob.offsetLeft +rKnob.offsetWidth / 2;
let rCenterY = rKnob.offsetTop + rKnob.offsetHeight / 2;

//Calculates degree from where mouse clicks to where it drags
function calculateRightDegree(e){
    const rightX = e.clientX;
    const rightY = e.clientY;

    const rad = Math.atan2(rightX - rCenterX, rightY - rCenterY);
    const deg = (rad * (180/Math.PI) * -1) + 180;
    return deg;
};

// rotates left knob with mouse
rKnob.addEventListener('mousedown', function() {
    rKnob.addEventListener('mousemove', rotate);
        function rotate(e) {
            const result = Math.floor(calculateRightDegree(e));
            rKnob.style.transform = `rotate(${result}deg)`;
        }
        rKnob.addEventListener('mouseup', function() {
            rKnob.removeEventListener('mousemove', rotate);
        });
});

document.addEventListener('click', calculateRightDegree);

clear.onclick = () => reloadGrid()

function reloadGrid(){
    container.innerHTML = '';
    makeGrid(size);
};

window.onload = () => {
    makeGrid(size)
    
};
