import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { DbService } from './db.service';


@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
