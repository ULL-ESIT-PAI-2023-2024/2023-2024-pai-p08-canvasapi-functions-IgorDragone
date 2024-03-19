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
import { ExponentialFunction } from './functions/exponential_function.js';
import { TaylorPolynomialApproximation } from './functions/taylor_polynomial.js';
export function main() {
    let scale = 50;
    const view = new View(scale);
    view.drawView();
    let functions = [];
    // let sinFunction: SinFunction =  new SinFunction;
    // functions.push(sinFunction);
    let exponentialFunction = new ExponentialFunction;
    functions.push(exponentialFunction);
    const TAYLOR_POLYNOMIAL_GRADE = 14;
    let taylorPolynomial = new TaylorPolynomialApproximation(TAYLOR_POLYNOMIAL_GRADE, exponentialFunction);
    functions.push(taylorPolynomial);
    view.drawFunctions(functions);
}
main();
