import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';

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
        const randomCard = (seed: string|number) => `https://picsum.photos/seed/${seed}/200/300`
        this.game.cards = [];
        for (let i = 0; i < 15; ++i) {
            this.game.cards.push({
                faceUp: false,
                value: randomCard(i)
            });
        }

        console.log(this.game.cards)
    }

    ngOnInit() {
        console.log(this.game.cards)

    }
}