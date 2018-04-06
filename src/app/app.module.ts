import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { DbService } from './db/db.service';
import { OctaveShapesService } from './db/octave-shapes.service';
import { ChordsService } from './db/chords.service';


@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DbService, OctaveShapesService, ChordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
