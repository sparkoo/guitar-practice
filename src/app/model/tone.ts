export interface ToneValue {
  key: string;
  name: string;
}

export enum Tone {
  Aflat, A, Asharp,
  Bflat, B, Bsharp,
  Cflat, C, Csharp,
  Dflat, D, Dsharp,
  Eflat, E, Esharp,
  Fflat, F, Fsharp,
  Gflat, G, Gsharp
}

export const ToneUp = {
  'C': { key: 'C', name: 'C' },
  'Csharp': { key: 'Csharp', name: 'C#' },
  'D': { key: 'D', name: 'D' },
  'Dsharp': { key: 'Dsharp', name: 'D#' },
  'E': { key: 'E', name: 'E' },
  'F': { key: 'F', name: 'F' },
  'Fsharp': { key: 'Fsharp', name: 'F#' },
  'G': { key: 'G', name: 'G' },
  'Gsharp': { key: 'Gsharp', name: 'G#' },
  'A': { key: 'A', name: 'A' },
  'Asharp': { key: 'Asharp', name: 'A#' },
  'B': { key: 'B', name: 'B' }
};

export const ToneUpNames = Object.values(ToneUp).map(t => t.name);
export const ToneUpKeys = Object.keys(ToneUp);

export enum Tonality {
  MAJOR, MINOR
}

export const ShapeNo = [1, 2, 3, 4, 5];
