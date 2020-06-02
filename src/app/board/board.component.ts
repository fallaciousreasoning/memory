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
      // Don't actually pick the card this frame.
      // This gives angular a chance to apply the
      // class we want and play the animation to
      // fade out.
      setTimeout(() => this.game.pickCard(card), 0);
    }
}