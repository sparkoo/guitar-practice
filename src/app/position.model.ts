export interface Position {
  frets: number;
  fingers: { [fret: number]: Array<number> };
}
