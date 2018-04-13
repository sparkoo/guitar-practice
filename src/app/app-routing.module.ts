import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { OctaveShapesComponent } from './octave-shapes/octave-shapes.component';
import { ChordsComponent } from './chords/chords.component';
import { PentatonicsComponent } from './pentatonics/pentatonics.component';
import { ArpeggiosComponent } from './arpeggios/arpeggios.component';

const routes: Routes = [
  { path: '', component: PracticeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'octaveShapes', component: OctaveShapesComponent },
  { path: 'chords', component: ChordsComponent },
  { path: 'pentatonics', component: PentatonicsComponent },
  { path: 'arpeggios', component: ArpeggiosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
