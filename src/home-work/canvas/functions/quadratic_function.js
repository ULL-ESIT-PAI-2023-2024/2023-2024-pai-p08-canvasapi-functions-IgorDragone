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
}
