import {Strategy} from './strategy';

/**
 * Clase encargada de resolver a traves del patron de diseño Strategy
 */
export class Solver {
  constructor(private dataNumber: number[], private strategy: Strategy) {
  }
  /**
   * Metodo que establece una nueva strategia
   * @param newStrategy nueva estrategia que sera utilizada para resolver
   */
  setStrategy(newStrategy: Strategy) {
    this.strategy = newStrategy;
  }
  /**
   * metodo encargado de realizar la ordenacion y devolverla
   */
  sort(): number[] {
    let resultado: number[] = [];
    resultado = this.strategy.algorithmSort(this.dataNumber);
    // console.log(`el resultado de ordenacion es: ${resultado}`);
    return resultado;
  }
}
