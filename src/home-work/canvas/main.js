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
export function main() {
    let scale = 30;
    const view = new View(scale);
    view.drawGrid();
    view.drawAxis();
    // let linealFunction: LinealFunction = new LinealFunction(scale, 3, 2);
    // let quadraticFunction: QuadraticFunction = new QuadraticFunction(scale, 1, 0, 0);
    let exponentialFunction = new ExponentialFunction(scale);
    // let squareRootFunction: SquareRootFunction = new SquareRootFunction(scale);
    // let logarithmicFunction: LogarithmicFunction = new LogarithmicFunction(scale);
    // let sinFunction: SinFunction = new SinFunction(scale);
    // let cosFunction: CosFunction = new CosFunction(scale);
    view.drawFunction(exponentialFunction);
}
main();
