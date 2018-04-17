import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { OctaveShapesService } from './db/octave-shapes.service';
import { ChordsService } from './db/chords.service';
import { PentatonicService } from './db/pentatonic.service';
import { ArpeggiosService } from './db/arpeggios.service';
import { AppRoutingModule } from './app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { SelectionService } from './shape-page/selection.service';
import { ScalesService } from './db/scales.service';


@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent,
    PracticeComponent,
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
