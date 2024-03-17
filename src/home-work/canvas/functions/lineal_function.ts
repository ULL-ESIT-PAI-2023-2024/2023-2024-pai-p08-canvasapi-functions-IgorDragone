/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Lineal function class
 */

import { Function } from "./function.js";

/**
 * Class for representing a lineal function
 */
export class LinealFunction extends Function {
  /**
   * Constructor for the lineal function
   * @param scale The scale of the canvas, this is, the number of pixels that represent a unit in the canvas
   * @param slope The slope of the lineal function, this is the number that multiplies the x in the lineal function
   * @param yIntercept The y intercept of the lineal function, this is the number that adds to the result of the slope multiplied by x
   */
  constructor(scale: number, private slope: number = 1, private yIntercept: number = 0) {
    super(scale);
  }

  /**
   * Evaluates the function in a given point
   */
  evaluate(point: number): number {
    return this.slope * point + this.yIntercept;
  }
}