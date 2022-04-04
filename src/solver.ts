import {Strategy} from './strategy';


export class Solver {
  constructor(private dataNumber: number[], private strategy: Strategy) {
  }

  setStrategy(newStrategy: Strategy) {
    this.strategy = newStrategy;
  }

  sort(): number[] {
    let resultado: number[] = [];
    resultado = this.strategy.bubbleSort(this.dataNumber);
    // console.log(`el resultado de ordenacion es: ${resultado}`);
    return resultado;
  }
}
