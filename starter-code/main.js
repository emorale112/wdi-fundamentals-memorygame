console.log("JS file is connected to HTML! Woo!");
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/* if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}
*/
var gameBoard = document.getElementById("game-board");
var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];

var createBoard = function() {
 for (var i = 0; i < cards.length; i++) {
   var newCard = document.createElement("div");
   newCard.className = "card";
   newCard.setAttribute("data-card", cards[i]);
   newCard.addEventListener("click", isTwoCards);
   gameBoard.appendChild(newCard);
 }
};
		
function isTwoCards() {
  cardInPlay.push(this.getAttribute("data-card"));
  this.innerHTML = '<img src=" " + this.getAttribute("data-card") + ".png">'
   if (cardInPlay.length === 2) {
   	 isMatch(cardInPlay);
   	 cardInPlay = [];
 }
};
 var isMatch = function(array){
    (array[0] === array[1]) ?   alert("You found a match!") :  alert("Sorry, try again.");
    for (var i = 0; i < cards.length; i++) {
 document.getElementsByClassName("card")[i].innerHTML = " ";
 }
};
createBoard();