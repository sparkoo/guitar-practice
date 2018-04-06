import { Component } from '@angular/core';
import { DbService } from './db/db.service';
import { Type } from './model/type';
import { Tone } from './model/tone';
import { Shape } from './model/shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Guitar Practice';

  constructor(public dbService: DbService) {

  }

  getOctaveShape(key: string): Shape {
    return this.dbService.getOctaveShape(key);
  }

  getChord(key: string): Shape {
    return this.dbService.getChord(key);
  }
}
