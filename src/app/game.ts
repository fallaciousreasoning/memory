import { Card } from './card';
import { Scores } from './scores';

function* getCardUrls() {
    // Get a list of fifteen urls where all but one are duplicates. The times ten is because the cards near
    // each other are really similar, which makes the game super hard.
    const urls = [...Array(15).keys()].map(i => `https://picsum.photos/id/${Math.round(i/2)*10}/200/300`);

    // Return the urls in a random order.
    while (urls.length !== 0) {
        const i = Math.floor(Math.random() * urls.length);
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

    get over() {
        // The game is finished if there is one unsolved card left over (because we have an odd number of cards).
        return this.getSolvedCards().length === this.cards.length - 1;
    }

    get scores(): Scores {
        const scores: Scores = {};
        for (const player of this.players)
            scores[player] = 0;

        for (const card of this.cards) {
            // Card isn't solved, so doesn't contribute to score.
            if (!card.solver)
                continue;

            // There are two cards in a match, so each one scores half a point.
            scores[card.solver] += 0.5;
        }
        return scores;
    }

    constructor() {
        // Get a new set of cards.
        this.resetCards();
    }

    // The currently picked cards.
    getPickedCards() {
        return this.cards.filter(c => c.faceUp && !c.solver);
    }

    // The solved cards.
    getSolvedCards() {
        return this.cards.filter(c => c.solver);
    }

    // Reset the cards in the game.
    resetCards() {
        this.cards = [];
        for (const url of getCardUrls()) {
            this.cards.push({
                faceUp: false,
                value: url
            });
        }
    }

    pickCard(card: Card) {
        if (card.solver) {
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
                card.solver = this.currentPlayer;
        } else {
            for (const card of picked)
                card.faceUp = false;
            this.turn++;
        }
    }
}