/* Instructions*/

/* How black jack works ? */
// get a hand that sum get 21 and not abov 21

// Facecards (King, queen, soldier) = 10
// Ace = 11

// if sum is less than or equel to 21 => win
// if sum is above 21 => lose


// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 13;
let secondCard = 8;
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;
// Cashout
let hasBlackJack = false;


// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳");
    hasBlackJack = true;
} else {
    console.log("You're out of the game! 😭");
}


console.log(hasBlackJack);

