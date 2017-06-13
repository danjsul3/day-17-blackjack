/*handTotal
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



function handValue (hand) {
 var handTotal = 0;
 var cardValue;

  for (let i = 0; i < hand.length; i++) {
    if(hand[i] != "A") {

      if(hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
        cardValue = 10;
      }
      else {
        cardValue = parseInt(hand[i]);
      }
      handTotal = handTotal + cardValue;
    }
  }
 for (let j = 0; j < hand.length; j++) {
   if (hand[j] === "A") {
     if (handTotal <= 10 ) {
       cardValue = 11;
     }
     else {
       cardValue = 1;
     }
     handTotal = handTotal + cardValue;
   }
 }

  return handTotal;
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
