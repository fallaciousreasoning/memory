import { Card } from './card';

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
        const randomCard = (seed: string | number) => `https://picsum.photos/seed/${seed}/200/300`;

        this.cards = [];
        for (let i = 0; i < 15; ++i) {
            this.cards.push({
                solved: false,
                faceUp: false,
                value: randomCard(i)
            });
        }
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