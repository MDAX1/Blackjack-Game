let firstCard = 10;
let secondCard = 5;
let cards = [firstCard, secondCard]; // array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
    let card = 2;
    sum += card;
    // Push the card to the cards array
    cards.push(card);
    console.log(cards);
    renderGame();
}

