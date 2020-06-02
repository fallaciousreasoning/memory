import { Component, Input } from '@angular/core';
import { Game } from '../game';
import { Card } from '../card';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {
    @Input()
    game: Game;

    onCardClicked(card: Card) {
      card.faceUp = true;
      setTimeout(() => this.game.pickCard(card), 0);
    }
}