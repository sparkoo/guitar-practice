import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../position.model';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnInit {
  loopNumbers = [];

  @Input() position: Position;

  constructor() { }

  ngOnInit() {
    this.loopNumbers = Array(this.position.frets - 1).fill(1).map((x, i) => i + 1);
  }

}
