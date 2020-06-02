import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { ScoresComponent } from './scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ScoresComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
