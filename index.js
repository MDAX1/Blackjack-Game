// 2. Use getRandomCard() to set the values of firstCard and secondCard
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

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    return 5;
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
    // 3. Use the getRandomCard() to set the value of card
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}

