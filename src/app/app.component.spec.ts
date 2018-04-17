import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { ChordsComponent } from './shape-page/chords/chords.component';
import { PentatonicsComponent } from './shape-page/pentatonics/pentatonics.component';
import { ScalesComponent } from './shape-page/scales/scales.component';
import { ArpeggiosComponent } from './shape-page/arpeggios/arpeggios.component';
import { OctaveShapesComponent } from './shape-page/octave-shapes/octave-shapes.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule
      ],
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
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Guitar Practice'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Guitar Practice');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Guitar Practice');
  }));
});
