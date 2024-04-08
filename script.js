const DEFAULT_SIZE = 16;

const canvas = document.getElementById('canvas');
const resetButton = document.getElementById('reset');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');

function createGrid (size) {
    for( let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for( let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "1px solid black"

            square.addEventListener('mouseover', function(){
                square.style.backgroundColor = 'black';
            })

            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}


resetButton.addEventListener('click', function () {
    canvas.innerHTML = "";
    createGrid(sizeSlider.value);
})

sizeSlider.addEventListener("input", function() {
    canvas.innerHTML = "";
    createGrid(sizeSlider.value);
    sizeSlider.innerHTML = sizeSlider.value;
    updateSizeValue(sizeSlider.value);
})

window.onload = () => {
    createGrid(DEFAULT_SIZE)
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }