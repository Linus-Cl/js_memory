const gridContainer = document.querySelector('.grid-cols-8');
const randomCard = randomCardsGenerator(40);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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


/**
 * 
 *  [0 1 2 3 4 5 ...... 39]
 * 
 * randint(40) => 4
 * arr.pop(4);
 * randint(40) => 
 * arr.pop(18);
 * 
 * 
 */

function* randomCardsGenerator(numberOfCards) {
    let cards = new Set();

    while (cards.size < numberOfCards) {
        let randomIndex = Math.floor(Math.random() * numberOfCards);
        if (!cards.has(randomIndex)) {
            cards.add(randomIndex);
            yield randomIndex;
        }
    }
}
