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

  getDbService(): DbServiceBase {
    console.log(this.selectedType);
    console.log(this.typeDatabases[this.selectedType]);
    return this.typeDatabases[this.selectedType];
  }

  randomizeSelection() {
    const randomTone = this.getRandomElementFromObject(this.ToneUp);
    const randomShapeNo = this.getRandomElementFromArray(this.ShapeNo);
    const randomTonality = this.getRandomElementFromObject(this.Tonality);
    const randomType = this.getRandomElementFromArray(this.types);
    this.selectionService.selectTone(randomTone);
    this.selectionService.selectShapeNo(randomShapeNo);
    this.selectionService.selectTonality(randomTonality);
    this.selectedType = randomType;
    this.drawShape();
  }

  selectType(type: string) {
    this.selectedType = type;
    this.drawShape();
  }

  getRandomElementFromArray(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getRandomElementFromObject(object: Object) {
    return object[Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)]];
  }

  toggleFretboard() {
    this.showFretboard = !this.showFretboard;
  }
}
