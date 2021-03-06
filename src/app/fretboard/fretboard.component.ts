import { Component, Input, OnInit } from '@angular/core';
import { Shape } from '../model/shape';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnInit {
  loopNumbers = [];

  @Input() shape: Shape;

  constructor() { }

  ngOnInit() {
    this.loopNumbers = Array(this.shape.frets).fill(1).map((x, i) => i);
    console.log('drawing shape: ', this.shape);
  }

}
