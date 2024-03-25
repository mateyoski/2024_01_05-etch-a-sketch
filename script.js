const canvas = document.getElementById('canvas');
function createGrid () {
    for( let i = 0; i > 15; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for( let j = 0; j < 15; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "1px solid black"
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}