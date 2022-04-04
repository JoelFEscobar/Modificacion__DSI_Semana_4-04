/**
 * Funcion que implementa la strategia de busqueda por ordenacion en burbuja
 */
import {Strategy} from './strategy';
export class Bubble implements Strategy {
  /**
   * Funcion encargada de hacer la ordenacion por burbuja
   * @param array array numerico que se ordenara
   * @returns devuelve el array ordenado
   */
  public algorithmSort(array: number[]): number[] {
    // console.log(`Array inicial es: ${array}`);
    let swap: number = 0;
    array = array.slice();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j+1]) {
          swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
      }
    }
    // console.log(`Array ordenado es: ${array}`);
    return array;
  }
}
