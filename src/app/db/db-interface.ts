import { Shape } from '../model/shape';

export interface DbServiceInterface {
  get(key: string): Shape;
  query(query: any): Shape;
}
