export enum Tone {
  Aflat, A, Asharp,
  Bflat, B, Bsharp,
  Cflat, C, Csharp,
  Dflat, D, Dsharp,
  Eflat, E, Esharp,
  Fflat, F, Fsharp,
  Gflat, G, Gsharp
}

export enum ToneUp {
  C = 'C',
  Csharp = 'C#',
  D = 'D',
  Dsharp = 'D#',
  E = 'E',
  F = 'F',
  Fsharp = 'F#',
  G = 'F',
  Gsharp = 'G#',
  A = 'A',
  Asharp = 'A#',
  B = 'B',
}

export const ToneUpNames = Object.values(ToneUp);
export const ToneUpKeys = Object.keys(ToneUp);

export enum Tonality {
  MAJOR, MINOR
}
