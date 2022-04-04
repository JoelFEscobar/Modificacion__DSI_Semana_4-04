import {Strategy} from "./strategy";

export class Merge implements Strategy {
  public algorithmSort(array: number[]): number[] {
    console.log(`Estoy ordenando ${array} por Merge`);
    return array;
  }
}

