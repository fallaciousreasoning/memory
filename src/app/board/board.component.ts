import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    game = new Game();

    constructor() {
    }

    ngOnInit() {
        console.log(this.game.cards)
    }

    onCardClicked(card: Card) {
        card.faceUp = true;
        setTimeout(() => this.game.pickCard(card), 0);
        // this.game.pickCard(card);
    }
}