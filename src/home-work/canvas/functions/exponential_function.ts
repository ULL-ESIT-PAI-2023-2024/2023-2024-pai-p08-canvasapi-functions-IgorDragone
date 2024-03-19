/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Exponential function class
 */

import { Function } from "./function.js";

/**
 * Class for representing an exponential function
 */
export class ExponentialFunction extends Function {
  /**
   * Evaluates the function in a given point
   */
  evaluate(point: number): number {
    return Math.exp(point);
  }

  /**
   * Calculates the derivative of the function
   * @param grade grade of the derivative
   * @returns the derivative of the function
   */
  derivative(grade: number): Function {
    return new ExponentialFunction();
  }
}