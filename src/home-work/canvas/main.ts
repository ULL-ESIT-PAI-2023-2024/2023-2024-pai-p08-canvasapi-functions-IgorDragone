/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Client code
 */

import { View } from './view/view.js';
import { LinealFunction } from './functions/lineal_function.js';
import { QuadraticFunction } from './functions/quadratic_function.js';
import { ExponentialFunction } from './functions/exponential_function.js';
import { SquareRootFunction } from './functions/square_root.js';
import { LogarithmicFunction } from './functions/logartitmic_function.js';import { log } from 'console';
import { SinFunction, CosFunction } from './functions/trigonometric_function.js';


export function main(): void {
  let scale: number = 30;
  const view: View = new View(scale);
  view.drawGrid();
  view.drawAxis();

  // let linealFunction: LinealFunction = new LinealFunction(scale, 3, 2);
  // let quadraticFunction: QuadraticFunction = new QuadraticFunction(scale, 1, 0, 0);
  let exponentialFunction: ExponentialFunction = new ExponentialFunction(scale);
  // let squareRootFunction: SquareRootFunction = new SquareRootFunction(scale);
  // let logarithmicFunction: LogarithmicFunction = new LogarithmicFunction(scale);
  // let sinFunction: SinFunction = new SinFunction(scale);
  // let cosFunction: CosFunction = new CosFunction(scale);

  view.drawFunction(exponentialFunction);
}

main();
