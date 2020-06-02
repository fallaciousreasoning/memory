import { Card } from './card';

function* getCardUrls() {
    // Get a list of fifteen urls where all but one are duplicates.
    const urls = [...Array(15).keys()].map(i => `https://picsum.photos/id/${Math.round(i/2)*10}/200/300`);

    // Return the urls in a random order.
    while (urls.length !== 0) {
        const i = Math.floor(Math.random() * urls.length);
        console.log(urls[i])
        // Remove the url from our array and yield it.
        yield urls.splice(i, 1)[0]
    }
}

export class Game {
    // An array of cards in the game.
    cards: Card[];

    // The turn number.
    turn = 0;

    // A list of players in the game.
    players = ["John Doe", "Jane Smith"];

    // The player who's turn it currently is.
    get currentPlayer() {
        return this.players[this.turn % this.players.length];
    }

    constructor() {
        // Get a new set of cards.
        this.resetCards();
    }

    // The currently picked cards.
    getPickedCards() {
        return this.cards.filter(c => c.faceUp && !c.solved);
    }

    // The solved cards.
    getSolvedCards() {
        return this.cards.filter(c => c.solved);
    }

    // Reset the cards in the game.
    resetCards() {
        this.cards = [];
        for (const url of getCardUrls()) {
            this.cards.push({
                solved: false,
                faceUp: false,
                value: url
            });
        }
        console.log(Array.from(getCardUrls()))
    }

    pickCard(card: Card) {
        if (card.solved) {
            console.warn("Can't pick an already solved card!");
            return;
        }

        card.faceUp = true;

        const picked = this.getPickedCards();

        // The player hasn't finished picking their cards.
        if (picked.length < 2)
            return;

        // If there was a match, set the cards to solved and let the current player keep playing!
        if (picked[0].value === picked[1].value) {
            for (const card of picked)
                card.solved = true;
        } else {
            for (const card of picked)
                card.faceUp = false;
            this.turn++;
        }
    }
}