/* Instructions*/

/* How black jack works ? */
// get a hand that sum get 21 and not above 21

// Facecards (King, queen, soldier) = 10
// Ace = 11

// if sum is less than or equel to 21 => win
// if sum is above 21 => lose


let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
// 1. Declare a variable called message and assign its value to an empty string
let message = "";
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

// 3. Log it out!
console.log(message);