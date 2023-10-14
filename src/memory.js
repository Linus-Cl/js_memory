const gridContainer = document.querySelector('.grid-cols-8');
const numberOfCards = 40;
const pictures = ['bg-ape', 'bg-cat', 'bg-cutie', 'bg-dachshund', 'bg-dax', 'bg-dear', 'bg-dog', 'bg-eagle', 'bg-fox', 'bg-giraffe', 'bg-kangaroo', 'bg-marter', 'bg-meerkat', 'bg-panda', 'bg-parrot', 'bg-pavian', 'bg-pig', 'bg-pug', 'bg-tiger', 'bg-varan'];
const picIterator = pictures.values();
const randomCard = randomCardsGenerator();
const cardPairs = getPairArray();
const defaultCardStyle = 'card w-40 h-40 bg-primary grid-square hover:bg-accent transition transform hover:scale-105s';
const pictureCardSuffix = ' card w-40 h-40  bg-cover bg-center bg-no-repeat grid square hover:transition transform hover:scale-105';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setup() {
    console.log("setup");
    for (let i = 0; i < 40; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.id = i;
        gridSquare.onclick = function () { flip(i); };
        gridSquare.className = defaultCardStyle;
        gridContainer.appendChild(gridSquare);
    }
}

function flip(id) {
    let activeTuple;
    for (let i = 0; i < cardPairs.length; ++i) {
        let tuple = cardPairs[i];
        if (tuple[0] === id || tuple[1] === id) {
            activeTuple = tuple;
            break;
        }
    }
    console.log("flip");
    document.getElementById(id).className = activeTuple[2] + pictureCardSuffix;
}

function* randomCardsGenerator() {
    let cards = new Set();

    while (cards.size < numberOfCards) {
        let randomIndex = Math.floor(Math.random() * numberOfCards);
        if (!cards.has(randomIndex)) {
            cards.add(randomIndex);
            yield randomIndex;
        }
    }
}

function getPairArray() {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        console.log("test" + i);
        arr.push([randomCard.next().value, randomCard.next().value, picIterator.next().value]);
    }
    return arr;
}