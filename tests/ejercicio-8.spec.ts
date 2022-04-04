import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/solver';
import {Bubble} from '../src/bubblesort';
import {Merge} from "../src/mergesort";

const arrayNumber: Solver = new Solver([3, 4, 1, 2], new Bubble());
const arrayNumber2: Solver = new Solver([7, 8, 3, 2], new Bubble());
const arrayNumber3: Solver = new Solver([0, 4, 12, 9], new Bubble());
describe('Test de la clase ', ()=>{
  it('Instancia de los array numericos', ()=>{
    expect(arrayNumber).not.null;
    expect(arrayNumber2).not.null;
    expect(arrayNumber3).not.null;
  });
  it('prueba de la ordenacion por burbuja', ()=>{
    expect(arrayNumber.sort()).to.be.eql([1, 2, 3, 4]);
    expect(arrayNumber2.sort()).to.be.eql([2, 3, 7, 8]);
    expect(arrayNumber3.sort()).to.be.eql([0, 4, 9, 12]);
  });
  it('prueba de la ordenacion por Merge', ()=>{
    arrayNumber.setStrategy(new Merge());
    expect(arrayNumber.sort()).to.be.eql([3, 4, 1, 2]);
  });
});

