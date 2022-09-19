const container=document.querySelector('#container');
const clear=document.querySelector('#clear');
const lKnob=document.querySelector('#sizeKnob');
const rKnob=document.querySelector('#colorKnob');
const sizeValue=document.querySelector('#size');
let size = 16;

//Changes color when mouse is hovering
function changeColor(e){
    e.target.style.backgroundColor = "black";
};

//Makes grid
function makeGrid(){
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

//Update size text above left knob
function sizeUpdate(size){
    sizeValue.innerHTML = `${size} x ${size}`
};

//Reload grid
clear.onclick = () => reloadGrid()

function reloadGrid(){
    container.innerHTML = '';
    makeGrid(size);
    
};
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

// Changes size by rotating left knob
lKnob.addEventListener('mousedown', function() {
    lKnob.addEventListener('mousemove', makeSize);
        function makeSize(e) {
            const result = Math.floor(calculateLeftDegree(e));
            lKnob.style.transform = `rotate(${result}deg)`;
            //Changes size of grid
            if(result < 70){
                size = 16;
            }else if(result >= 70 && result < 140){
                size = 24;
            }else if (result >= 140 && result < 230){
                size = 32;
            }else if (result >= 230 && result < 290){
                size = 48;
            }else if (result >= 290 && result < 360){
                size = 64;
            };
            sizeUpdate(size);
            reloadGrid();
        }
        lKnob.addEventListener('mouseup', function() {
            lKnob.removeEventListener('mousemove', makeSize);
    });
    
});

document.addEventListener('click', calculateLeftDegree);

//Right knob center point
let rightCenterX = rKnob.offsetLeft + rKnob.offsetWidth / 2;
let rightCenterY = rKnob.offsetTop + rKnob.offsetHeight / 2;

//Calculates degree from where mouse clicks to where it drags
function calculateRightDegree(e){
    const rightX = e.clientX;
    const rightY = e.clientY;

    const rad = Math.atan2(rightX - rightCenterX, rightY - rightCenterY);
    const deg = (rad * (180/Math.PI) * -1) + 180;
    return deg;
};

// Changes size by rotating right knob
rKnob.addEventListener('mousedown', function() {
    rKnob.addEventListener('mousemove', rotate);
        function rotate(e) {
            const result = Math.floor(calculateRightDegree(e));
            rKnob.style.transform = `rotate(${result}deg)`;
        };
        rKnob.addEventListener('mouseup', function() {
            rKnob.removeEventListener('mousemove', rotate);
    });
});

document.addEventListener('click', calculateRightDegree);

window.onload = () => {
    makeGrid(size);
};
