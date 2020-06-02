import { Component } from '@angular/core';
import { Game } from './game';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game = new Game();

  restart() {
    this.game.resetCards();
  }
}
