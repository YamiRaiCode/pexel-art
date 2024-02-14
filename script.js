const gridContainer = document.getElementById('grid-container');
const addButton = document.getElementById('add-button');
const clearButton = document.getElementById('clear-button');
const rows = document.getElementById('grid-rows-input');
const columns = document.getElementById('grid-columns-input');
const columnSpan = document.getElementById('column-value');
const rowSpan = document.getElementById('row-value')
const colorInput = document.getElementById('color-selector');

const drawButton = document.querySelector("#draw-button");
const eraseButton = document.querySelector("#erase-button");
const mode = document.querySelector(".draw-mode");
let gridsInTable;

let color = colorInput.value;

let drawing = true;
let erasing = false;


columnSpan.textContent = columns.value;
rowSpan.textContent = rows.value;

columns.addEventListener('input', function() {    
    columnSpan.textContent = columns.value;
});
rows.addEventListener('input', function() {
    // Değeri güncelle
    rowSpan.textContent = rows.value;
});
colorInput.addEventListener("input", function(){
    color = colorInput.value;
});

addButton.addEventListener("click", addingGrids);
clearButton.addEventListener("click", clear);

drawButton.addEventListener("click", function(){
    drawing=true;
    erasing=false;
    mode.textContent="* Drawing Mode *";
});
eraseButton.addEventListener("click", function(){
    drawing=false;
    erasing=true;
    mode.textContent = "* Erasing Mode *"
});

function addingGrids() {
    const numRows = parseInt(rows.value);
    const numColumns = parseInt(columns.value);

        gridContainer.style.gridTemplateRows = `repeat(${numRows}, 12px)`;
        gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 12px)`;

    gridContainer.innerHTML = '';

    for(let i =0; i<rows.value; i++){
        for(let j=0; j<columns.value; j++){
            let addGrid = document.createElement('div');
            addGrid.className = 'grids';

            gridContainer.appendChild(addGrid);
        }
    }
    gridsInTable = document.querySelectorAll(".grids");
    draw();   
};

function clear(){
    for (let i = 0; i < gridsInTable.length; i++) {
        const grid = gridsInTable[i];
        grid.style.backgroundColor = "white";
    }
}

function draw(){
    for (let i = 0; i < gridsInTable.length; i++) {
        const element = gridsInTable[i];

        element.addEventListener("dragover", function(event) {
            var mouseX = event.clientX;
            var mouseY = event.clientY;
            var gridLeft = element.getBoundingClientRect().left.toFixed();
            var gridTop = element.getBoundingClientRect().top.toFixed();
            var gridWidth  = element.getBoundingClientRect().width.toFixed();
            var gridHeight = element.getBoundingClientRect().height.toFixed();
        
            console.log("x: " + mouseX);
            console.log("y: " + mouseY);
            console.log("Left: " + gridLeft);
            console.log("Top: " + gridTop);
            
            if (drawing === true) {
                // Eğer çizim modundaysa yapılacak işlemler
                if((mouseX >= gridLeft && mouseX <= gridLeft + gridWidth ) && (mouseY>= gridTop && mouseY<= gridTop+gridHeight)){
                    this.style.backgroundColor =color;
                }
            } else if (erasing === true) {
                // Eğer silme modundaysa yapılacak işlemler
                if((mouseX >= gridLeft && mouseX <= gridLeft + gridWidth ) && (mouseY>= gridTop && mouseY<= gridTop+gridHeight)){
                    this.style.backgroundColor ="white";
                }
            }
        });

        element.addEventListener("click", function(event) {
            var mouseX = event.clientX;
            var mouseY = event.clientY;
            var gridLeft = element.getBoundingClientRect().left.toFixed();
            var gridTop = element.getBoundingClientRect().top.toFixed();
            var gridWidth  = element.getBoundingClientRect().width.toFixed();
            var gridHeight = element.getBoundingClientRect().height.toFixed();
        
            console.log("x: " + mouseX);
            console.log("y: " + mouseY);
            console.log("Left: " + gridLeft);
            console.log("Top: " + gridTop);
            
            if (drawing === true) {
                // Eğer çizim modundaysa yapılacak işlemler
                if((mouseX >= gridLeft && mouseX <= gridLeft + gridWidth ) && (mouseY>= gridTop && mouseY<= gridTop+gridHeight)){
                    this.style.backgroundColor =color;
                }
            } else if (erasing === true) {
                // Eğer silme modundaysa yapılacak işlemler
                if((mouseX >= gridLeft && mouseX <= gridLeft + gridWidth ) && (mouseY>= gridTop && mouseY<= gridTop+gridHeight)){
                    this.style.backgroundColor ="white";
                }
            }
        });

        
    }

}
