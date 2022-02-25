let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; // array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

// Make this function return a random number between 1 and 13
function getRandomCard(){
    let randNum = Math.floor(Math.random()*13)+1;
    return randNum;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){ 
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You lost, You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}

