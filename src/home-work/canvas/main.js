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
export function main() {
    let scale = 30;
    const view = new View(scale);
    view.drawGrid();
    view.drawAxis();
    let functions = [];
    // functions.push(new LinealFunction(3, 2));
    // functions.push(new QuadraticFunction(1, 0, 0));
    // functions.push(new ExponentialFunction);
    // functions.push(new SquareRootFunction);
    // functions.push(new LogarithmicFunction);
    // functions.push(new SinFunction);
    // functions.push(new CosFunction);
    view.drawFunctions(functions);
}
main();
