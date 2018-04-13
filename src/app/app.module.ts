import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { DbService } from './db/db.service';
import { OctaveShapesService } from './db/octave-shapes.service';
import { ChordsService } from './db/chords.service';
import { PentatonicService } from './db/pentatonic.service';
import { ArpeggiosService } from './db/arpeggios.service';
import { AppRoutingModule } from './app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { ChordsComponent } from './chords/chords.component';
import { OctaveShapesComponent } from './octave-shapes/octave-shapes.component';
import { ArpeggiosComponent } from './arpeggios/arpeggios.component';
import { PentatonicsComponent } from './pentatonics/pentatonics.component';


@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent,
    PracticeComponent,
    ChordsComponent,
    OctaveShapesComponent,
    ArpeggiosComponent,
    PentatonicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DbService,
    OctaveShapesService,
    ChordsService,
    PentatonicService,
    ArpeggiosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
