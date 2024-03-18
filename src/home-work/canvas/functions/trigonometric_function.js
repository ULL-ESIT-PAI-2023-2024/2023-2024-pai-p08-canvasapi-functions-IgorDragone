/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Trigonometric function class
 */
import { Function } from "./function.js";
/**
 * Class for representing a sin function
 */
export class SinFunction extends Function {
    /**
     * Evaluates the function in a given point
     */
    evaluate(point) {
        return Math.sin(point);
    }
}
/**
 * Class for representing a cos function
 */
export class CosFunction extends Function {
    /**
     * Evaluates the function in a given point
     */
    evaluate(point) {
        return Math.cos(point);
    }
}
