export interface Shape {
  frets: number;
  base: number;
  fingers: { [fret: number]: Array<string> };
}
