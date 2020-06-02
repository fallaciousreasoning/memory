import { Component, OnInit, Input } from '@angular/core';
import { Scores } from '../scores';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  @Input()
  scores: Scores;
  
  constructor() { }

  ngOnInit(): void {
  }

}
