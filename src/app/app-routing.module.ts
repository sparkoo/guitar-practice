import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { OctaveShapesComponent } from './shape-page/octave-shapes/octave-shapes.component';
import { ChordsComponent } from './shape-page/chords/chords.component';
import { PentatonicsComponent } from './shape-page/pentatonics/pentatonics.component';
import { ArpeggiosComponent } from './shape-page/arpeggios/arpeggios.component';

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
