const gridContainer = document.querySelector('.grid-cols-8');

function setup() {
    console.log("setup");
    for (let i = 0; i < 40; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('w-40', 'h-40', 'bg-primary', 'grid-square', 'hover:bg-accent', 'transition', 'transform', 'hover:scale-105');
        gridContainer.appendChild(gridSquare);
    }
}


