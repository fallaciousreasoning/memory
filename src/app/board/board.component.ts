import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    game: Game = {
        cards: undefined,
        turn: 0,
        players: ["John Smith", "Jane Doe"]
    }

    constructor() {
        this.game.cards = [];
        for (let i = 0; i < 15; ++i) {
            this.game.cards.push({
                faceUp: false,
                value: '2000'
            })
        }

        console.log(this.game.cards)
    }

    ngOnInit() {
        console.log(this.game.cards)

    }
}