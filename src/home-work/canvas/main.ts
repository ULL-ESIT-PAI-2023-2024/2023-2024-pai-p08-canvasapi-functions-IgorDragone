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
import { Function } from './functions/function.js';
import { LinealFunction } from './functions/lineal_function.js';
import { QuadraticFunction } from './functions/quadratic_function.js';
import { ExponentialFunction } from './functions/exponential_function.js';
import { SquareRootFunction } from './functions/square_root.js';
import { LogarithmicFunction } from './functions/logartitmic_function.js';
import { SinFunction, CosFunction } from './functions/trigonometric_function.js';
import { TaylorPolynomialApproximation } from './functions/taylor_polynomial.js';


export function main(): void {
  let scale: number = 50;
  const view: View = new View(scale);
  view.drawView();

  let functions: Function[] = [];

  let exponentialFunction = new ExponentialFunction;
  functions.push(exponentialFunction);

  const TAYLOR_POLYNOMIAL_GRADE = 14;
  let exponentialApproximation: TaylorPolynomialApproximation = new TaylorPolynomialApproximation(TAYLOR_POLYNOMIAL_GRADE, exponentialFunction);
  functions.push(exponentialApproximation);

  view.drawFunctions(functions);
}

main();
