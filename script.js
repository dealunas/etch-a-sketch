const container=document.querySelector('#container');

let size=32;

function changeColor(e){
    e.target.style.backgroundColor = "black";
};

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

window.onload = () => {
    makeGrid(size)
    
};
