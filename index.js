// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Mehrdad",
    chips: "100"
}
let cards = []; // array - ordered list of items
let sum = 0; // by default
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");
console.log(playerEl);
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10;
    } else if (randomNumer === 1) {
        return 11;
    } else {
        return randomNumer;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
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
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}
