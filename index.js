/* Instructions*/

/* How black jack works ? */
// get a hand that sum get 21 and not abov 21

// Facecards (King, queen, soldier) = 10
// Ace = 11

// if sum is less than or equel to 21 => win
// if sum is above 21 => lose

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 10;
let secondCard = 9;
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;



if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Blackjack! You scored 21, You Win!")
} else {
    console.log("Games over. You lost!")
}

console.log(sum);
