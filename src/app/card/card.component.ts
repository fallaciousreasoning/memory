import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    card: Card = {
        value: '',
        faceUp: false
    }

    constructor() { }

    ngOnInit() {
        console.log("init")
    }
}