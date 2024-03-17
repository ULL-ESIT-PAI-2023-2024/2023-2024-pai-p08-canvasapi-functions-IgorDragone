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
   * Constructor for the sin function
   * @param scale The scale of the canvas, this is, the number of pixels that represent a unit in the canvas
   */
  constructor(scale: number) {
    super(scale);
  }

  /**
   * Evaluates the function in a given point
   */
  evaluate(point: number): number {
    return Math.sin(point);
  }
}

/**
 * Class for representing a cos function
 */
export class CosFunction extends Function {
  /**
   * Constructor for the cos function
   * @param scale The scale of the canvas, this is, the number of pixels that represent a unit in the canvas
   */
  constructor(scale: number) {
    super(scale);
  }

  /**
   * Evaluates the function in a given point
   */
  evaluate(point: number): number {
    return Math.cos(point);
  }
}