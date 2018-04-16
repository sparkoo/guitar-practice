import { Component } from '@angular/core';
import { ShapeBaseComponent } from '../shape-page/shape-base.component';
import { ArpeggiosService } from '../shape-page/arpeggios/arpeggios.service';
import { SelectionService } from '../shape-page/selection.service';
import { DbServiceBase } from '../db/db-service-base';
import { ChordsService } from '../shape-page/chords/chords.service';
import { OctaveShapesService } from '../shape-page/octave-shapes/octave-shapes.service';
import { PentatonicService } from '../shape-page/pentatonics/pentatonic.service';
import { ScalesService } from '../shape-page/scales/scales.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['../shape-page/shape-base.component.scss', './practice.component.scss']
})
export class PracticeComponent extends ShapeBaseComponent {

  databases: DbServiceBase[];
  typeDatabases: {};
  types: string[];
  selectedType: string;
  showFretboard: boolean;

  locks = {
    type: { name: 'type', lock: false },
    tone: { name: 'tone', lock: false },
    shapeNo: { name: 'shapeNo', lock: false },
    tonality: { name: 'tonality', lock: false }
  };

  constructor(private selectionService: SelectionService,
              private chordsService: ChordsService,
              private arpeggiosService: ArpeggiosService,
              private octaveShapesService: OctaveShapesService,
              private pentatonicsService: PentatonicService,
              private scalesService: ScalesService) {
    super(selectionService);
    this.typeDatabases = {
      'Octave Shape': this.octaveShapesService,
      'Chord': this.chordsService,
      'Pentatonic': this.pentatonicsService,
      'Arpeggio': this.arpeggiosService,
      'Scales': this.scalesService
    };
    this.types = Object.keys(this.typeDatabases);
    this.databases = Object.values(this.typeDatabases);
    this.selectedType = this.types[1];
  }

  private static getRandomElementFromArray(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  private static getRandomElementFromObject(object: Object) {
    return object[Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)]];
  }

  getDbService(): DbServiceBase {
    return this.typeDatabases[this.selectedType];
  }

  randomizeSelection() {
    if (!this.locks.type.lock) {
      this.selectedType = PracticeComponent.getRandomElementFromArray(this.types);
    }
    if (!this.locks.tone.lock) {
      this.selectionService.selectTone(PracticeComponent.getRandomElementFromObject(this.ToneUp));
    }
    if (!this.locks.shapeNo.lock) {
      this.selectionService.selectShapeNo(PracticeComponent.getRandomElementFromArray(this.ShapeNo));
    }
    if (!this.locks.tonality.lock) {
      this.selectionService.selectTonality(PracticeComponent.getRandomElementFromObject(this.Tonality));
    }
    this.drawShape();
  }

  selectType(type: string) {
    this.selectedType = type;
    this.drawShape();
  }

  toggleFretboard() {
    this.showFretboard = !this.showFretboard;
  }

  toggleLock(type: { name: string, lock: boolean }) {
    this.locks[type.name].lock = !type.lock;
  }
}
