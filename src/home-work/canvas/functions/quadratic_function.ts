/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Quadratic function class
 */

import { Function } from "./function.js";

/**
 * Class for representing a cuadratic function
 */
export class QuadraticFunction extends Function {
  /**
   * Constructor for the cuadratic function
   * @param coefficientOfCuadraticTerm The coefficient of the cuadratic term in the cuadratic function
   * @param coefficientOfLinearTerm The coefficient of the linear term in the cuadratic function
   * @param independentTerm The independent term in the cuadratic function
   */
  constructor(private coefficientOfCuadraticTerm: number, private coefficientOfLinearTerm: number = 0, private independentTerm: number = 0) {
    super();
  }

  /**
   * Evaluates the function in a given point
   */
  evaluate(point: number): number {
    return this.coefficientOfCuadraticTerm * Math.pow(point, 2) + this.coefficientOfLinearTerm * point + this.independentTerm;
  }

  /**
   * Calculates the derivative of the function
   * @param grade grade of the derivative
   * @returns the derivative of the function
   */
  derivative(grade: number): Function {
    // if (grade === 0) {
    //   return this;
    // } else if (grade === 1) {
    //   return new LinealFunction(2 * this.coefficientOfCuadraticTerm, this.coefficientOfLinearTerm);
    // } else {
    //   return new ConstantFunction(2 * this.coefficientOfCuadraticTerm);
    // }
    return new QuadraticFunction(2 * this.coefficientOfCuadraticTerm, this.coefficientOfLinearTerm);
  }
}