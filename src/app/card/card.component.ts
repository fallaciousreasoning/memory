import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Card } from '../card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
    @Input()
    card: Card;

    constructor() { }

    ngOnInit() {
        console.log("init")
    }

    onClick() {
        this.card = {
            ...this.card,
            faceUp: !this.card.faceUp
        }
        console.log('Clicked?')
    }
}