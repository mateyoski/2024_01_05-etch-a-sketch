const canvas = document.getElementById('canvas');
const resetButton = document.getElementById('reset');

function createGrid () {
    for( let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for( let j = 0; j < 16; j++) {
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

createGrid();

resetButton.addEventListener('click', function () {
    canvas.innerHTML = "";
    createGrid();
})