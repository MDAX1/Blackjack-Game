/* Instructions*/

/* How black jack works ? */
// get a hand that sum get 21 and not above 21

// Facecards (King, queen, soldier) = 10
// Ace = 11

// if sum is less than or equel to 21 => win
// if sum is above 21 => lose


// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 15;
let secondCard = 8;
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;
// 3. Cashout
let hasBlackJack = false;
// 4. Create a variable called isAlive and assign it to true
let isAlive = true;
// 5. Flip its value to false in the appropriate code block 

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳");
    hasBlackJack = false;
} else {
    console.log("You're out of the game! 😭");
    isAlive = false;
}


console.log(isAlive);

