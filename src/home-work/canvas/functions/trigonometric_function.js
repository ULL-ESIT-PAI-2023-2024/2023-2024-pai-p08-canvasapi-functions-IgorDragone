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
    /**
     * Calculates the derivative of the function
     * @param grade grade of the derivative
     * @returns the derivative of the function
     */
    derivative(grade) {
        if (grade === 1) {
            return new CosFunction();
        }
        else {
            return new CosFunction().derivative(grade - 1);
        }
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
    /**
     * Calculates the derivative of the function
     * @param grade grade of the derivative
     * @returns the derivative of the function
     */
    derivative(grade) {
        if (grade === 1) {
            return new SinFunction();
        }
        else {
            return new SinFunction().derivative(grade - 1);
        }
    }
}
