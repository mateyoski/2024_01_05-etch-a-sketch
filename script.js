const grid = document.querySelector('.container');

function createDivs() {
for (let i = 1; i < 16; i++) {
    const node = document.createElement('div');
    for(let j = 1; j < 16; j++) {
        const div = document.createElement('div');
        node.appendChild(div);
    }
    grid.appendChild(node)
}
}

createDivs();

