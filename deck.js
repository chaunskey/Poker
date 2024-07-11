// Step 1: Represent the Deck
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

function createDeck() {
  const deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({rank: rank, suit: suit });
    }
  }
  return deck;
}

// Step 2: Shuffle the Deck using Fisher-Yates Algorithm
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Step 3: Draw a Card
function drawCard(deck) {
  if (deck.length === 0) {
    return 'No more cards in the deck!';
  }
  return deck.pop();
}

// Create, Shuffle, and Draw
const deck = createDeck();
const shuffledDeck = shuffleDeck(deck);
console.log('Shuffled Deck:', shuffledDeck);

function drawCardFromDeck() {
  const card = drawCard(shuffledDeck);
  if (card) {
    console.log('Drawn Card:', card);
    document.getElementById('card-display').textContent = `${card.rank} of ${card.suit}`;
    document.getElementById('card-image').src = `img/${card.rank}_of_${card.suit}.png`;
    } else {
        document.getElementById('card-display').textContent = 'No more cards in the deck!';
        document.getElementById('card-image').src = '';
    }
}
