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
    coefficientOfCuadraticTerm;
    coefficientOfLinearTerm;
    independentTerm;
    /**
     * Constructor for the cuadratic function
     * @param coefficientOfCuadraticTerm The coefficient of the cuadratic term in the cuadratic function
     * @param coefficientOfLinearTerm The coefficient of the linear term in the cuadratic function
     * @param independentTerm The independent term in the cuadratic function
     */
    constructor(coefficientOfCuadraticTerm, coefficientOfLinearTerm = 0, independentTerm = 0) {
        super();
        this.coefficientOfCuadraticTerm = coefficientOfCuadraticTerm;
        this.coefficientOfLinearTerm = coefficientOfLinearTerm;
        this.independentTerm = independentTerm;
    }
    /**
     * Evaluates the function in a given point
     */
    evaluate(point) {
        return this.coefficientOfCuadraticTerm * Math.pow(point, 2) + this.coefficientOfLinearTerm * point + this.independentTerm;
    }
    /**
     * Calculates the derivative of the function
     * @param grade grade of the derivative
     * @returns the derivative of the function
     */
    derivative(grade) {
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
