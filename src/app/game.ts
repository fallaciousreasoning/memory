import { Card } from './card';

export interface Game {
    // An array of the cards in the game.
    cards: Card[];

    // The turn number.
    turn: number;

    // A list of the players involved in the game.
    players: string[];
}