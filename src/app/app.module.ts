import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { OctaveShapesService } from './shape-page/octave-shapes/octave-shapes.service';
import { ChordsService } from './shape-page/chords/chords.service';
import { PentatonicService } from './shape-page/pentatonics/pentatonic.service';
import { ArpeggiosService } from './shape-page/arpeggios/arpeggios.service';
import { AppRoutingModule } from './app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { ChordsComponent } from './shape-page/chords/chords.component';
import { OctaveShapesComponent } from './shape-page/octave-shapes/octave-shapes.component';
import { ArpeggiosComponent } from './shape-page/arpeggios/arpeggios.component';
import { PentatonicsComponent } from './shape-page/pentatonics/pentatonics.component';
import { SelectionService } from './shape-page/selection.service';
import { ScalesComponent } from './shape-page/scales/scales.component';
import { ScalesService } from './shape-page/scales/scales.service';


@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent,
    PracticeComponent,
    ChordsComponent,
    OctaveShapesComponent,
    ArpeggiosComponent,
    PentatonicsComponent,
    ScalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OctaveShapesService,
    ChordsService,
    PentatonicService,
    ArpeggiosService,
    SelectionService,
    ScalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
