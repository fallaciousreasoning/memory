import { Component } from '@angular/core';
import { Card } from '../card';
import { Game } from '../game';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {
    game = new Game();

    constructor() {
    }

    onCardClicked(card: Card) {
        card.faceUp = true;
        setTimeout(() => this.game.pickCard(card), 0);
    }
}