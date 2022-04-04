export type methodStrategy = 'Bubble' | 'Merge';
export interface Strategy {
  bubbleSort(array: number[], type: methodStrategy ): number[];
}
