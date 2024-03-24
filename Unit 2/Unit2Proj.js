//class created for suit and value along with method for object
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    displayCard() {
        return `Suit: ${this.suit}, Value: ${this.value}`;
    }
}
//event listener for button with anonymous funciton
document.getElementById("displayButton").addEventListener("click", function() {
    // Create a new card with random suit and value
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = Math.floor(Math.random() * 13) + 1;//ace is equal to 1
    const card = new Card(suit, value);

    // Display the card details on the page by calling method
    document.getElementById("cardDisplay").textContent = card.displayCard();});