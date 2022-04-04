import {Strategy} from './strategy';
import {methodStrategy} from './strategy';
export class Bubble implements Strategy {
  public bubbleSort(array: number[], type: methodStrategy ): number[] {
    if (type == 'Bubble') {

    }
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
