//Rules of the card game War:
//Player is dealt half of a shuffled deck of cards.
//Each player plays a card from the of their deck.
//The player with the highest card wins a point.
//If there is a tie, both players earn zero points.
//The game continues until all cards have been played.
//The player with the most points at the end of the game wins.



class Card { //Define class for Card.
  constructor(rank, suit) {
    this.rank = rank;//2 to 14, Ace is 14, King is 13, Queen is 12, Jack is 11.
    this.suit = suit;// Spade, Heart, Diamond or Club.
  }
}
class Deck { //Define class for Deck.
  constructor(){
    this.cards = []; //Empty array that will hold cards.

    const ranks = ["Ace", "2", "3","4", "5", "6", "7", "8", "9", "10", 
    "Jack", "Queen", "King"]; // storing and declairing ranks.

    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];//storing declairing suits.

    ranks.forEach(rank => {
      suits.forEach(suit => {
        this.cards.push(new Card(rank, suit)); //Create a new card and add to deck.
      });
    });
  }

  shuffle(){ //Pick random index from 0 - i & swap cards.
    for (let i = this.cards.length -1; i > 0; i--) { //iterate through cards
      const j = Math.floor(Math.random()* (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      
    }
  }

  dealCard(){ //declare deal card function
    return this.cards.pop(); //remove and return the last card from deck.
  }
}

 class Player{ //define Player class
  constructor(name){
    this.name = name; //stating name; player 1/player 2
    this.hand = []; // An array to hold players cards.
    this.points = 0;//initialize the score to zero.
  }

  playCard() { //will play card
    return this.hand.pop();
  }

  addPoints(){ //Add the point to the players score.
    this.points++;
  }
 }

 class Game{ //declare Game class
  constructor(){
    this.deck = new Deck();  //create deck
    this.player1 = new Player("Player 1");//create two players. Player1
    this.player2 = new Player("Player 2");//create player 2.
  }

  dealCards() {
    this.deck.shuffle(); //create deck and shuffle.
    for (let i = 0; i < 26; i++){ //iterate through cards
      this.player1.hand.push(this.deck.dealCard());//Deal card to player 1
      this.player2.hand.push(this.deck.dealCard());//Deal card to player 2
    }
  }

  play(){
    for (let i = 0; i < 26; i++){ //iterate through cards.
      const card1 = this.player1.playCard(); //player1 turn, play card
      const card2 = this.player2.playCard();//player 2 turn, play card


      // concatinate to console which player played what rank/suit.
      console.log(`${this.player1.name} played ${card1.rank} of ${card1.suit}.`);
      console.log(`${this.player2.name} played ${card2.rank} of ${card2.suit}.`);



      //Declare the score and declare winner. 

        if(card1.rank === card2.rank) { //conditional statement comparing card.
          console.log("It's a tie. No points awarded.");
    }else if(card1.rank > card2.rank){ //if card1 is greater then card 2, add points
      this.player1.addPoints(); //add points
      console.log(`${this.player1.name} wins!`);//print to console if true
    }else{
      this.player2.addPoints();
      console.log(`${this.player2.name} wins!`)//otherwise print this
    }
  }


  //using template literals to concatinate string with results to console
  console.log(`Final Score: ${this.player1.name}: ${this.player1.points},
          ${this.player2.name}: ${this.player2.points}`);


        //Conditional statement seeing who has higher points and declaring winner!
        //if player one is greater print, "Player one wins!" otherwise "player 2 wins!"
          if (this.player1.points === this.player2.points){
            console.log("It's a tie!"); //print to console if card are tie
          }else if (this.player1.points > this.player2.points) {
            console.log(`${this.player1.name} wins!`);
          }else{
            console.log(`${this.player2.name} wins!`);
          }
        }
      }


      //functions called
      const game = new Game();//storing game results
      game.dealCards(); //activating card dealing
      game.play(); //game will play

  
