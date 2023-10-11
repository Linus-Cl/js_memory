const gridContainer = document.querySelector('.grid-cols-8');

function setup() {
    console.log("setup");
    for (let i = 0; i < 40; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.id = i;
        gridSquare.onclick = function () { flip(i); }
        gridSquare.classList.add('card', 'w-40', 'h-40', 'bg-primary', 'grid-square', 'hover:bg-accent', 'transition', 'transform', 'hover:scale-105');
        gridContainer.appendChild(gridSquare);
    }
}


function flip(id) {
    console.log("flip");
    document.getElementById(id).className = "card w-40 h-40 bg-goat bg-cover bg-center bg-no-repeat grid square hover:transition transform hover:scale-105";
}