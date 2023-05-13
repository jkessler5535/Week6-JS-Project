//Rules of the card game War:
//Player is dealt half of a shuffled deck of cards.
//Each player plays a card from the of their deck.
//The player with the highest card wins a point.
//If there is a tie, both players earn zero points.
//The game continues until all cards have been played.
//The player with the most points at the end of the game wins.

// Define class for Card.

class Card{
  constructor(suit,rank) {
    this.suit = suit; //Spade,Heart,Diamond or club.
    this.rank = rank; //2 to 14,Ace is 14, King is 13, Queen is 12, Jack is 11.
  }
}

//Define a class for Deck.

class Deck{
  constructor(){
    this.cards = []; //An array to hold all the cards.
    const suits =["Spade", "Heart","Diamond", "Club"];
      for (let suit of suits) {
        for (let rank = 2; rank <= 14; rank++){
          this.cards.push(new Card (suit,rank));//Create a new card and add to deck.
        }
      }
   }

   shuffle(){
    for (let i = this.cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random()* (i+1)); //Pick random index from 0-i
      const temp = this.cards[i];  //swap the cards
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
   }

   deal() {
    return this.cards.pop(); //remove and return the last card from deck
   }
}
//Define a class for the player

class Player {
  constructor(name){
    this.name = name;
    this.score = 0; //initialize the score to zero.
    this.hand = []; //An array to hold the players cards.
  }

  playCard(){
    return this.hand.pop(); //Remove and return the last card in the players hand.
  }

  addScore(point){
    this.score += point; //Add the point to the players score.
  }
}

//create a deck and shuffle it

const deck = new Deck();
deck.shuffle();

//create two players and deal half of the deck to each player

const player1 = new Player ("Player 1");
const player2 = new Player ("Player 2");
  for (let i = 0; i < 26; i++){
    player1.hand.push(deck.deal());
    //Deal a card to player 1
    player2.hand.push(deck.deal());
    //Deal a card to player 2
  }

  //iterate through the turns where each player plays a card

  while (player1.hand.length > 0 && player2.hand.length > 0){
    const card1 = player1.playCard();
    const card2 = player2.playCard();
      if(card1.rank > card2.rank){
        player1.addScore(1); //Player one wins the turn and gets a point
      }else if (card1.rank < card2.rank){
         player2.addScore(1); //Player two wins the turn and gets a point.
      }
   }

   //Display the score and declare the winner

   console.log(`${player1.name} has scored ${player1.score} points`);

   console.log(`${player2.name} has scored ${player2.score} points`);

   if (player1.score > player2.score){
    console.log(`${player1.name} wins the game!`);
   }else if (player1.score < player2.score){
    console.log(`${player2.name} wins the game!`);
   }else {
    console.log("It's a tie!");
   }



  
