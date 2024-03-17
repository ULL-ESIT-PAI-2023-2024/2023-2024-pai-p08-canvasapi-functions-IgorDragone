/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Square root function class
 */
import { Function } from "./function.js";
/**
 * Class for representing a square root function
 */
export class SquareRootFunction extends Function {
    /**
     * Constructor for the square root function
     * @param scale The scale of the canvas, this is, the number of pixels that represent a unit in the canvas
     */
    constructor(scale) {
        super(scale);
    }
    /**
     * Evaluates the function in a given point
     */
    evaluate(point) {
        return Math.sqrt(point);
    }
}
