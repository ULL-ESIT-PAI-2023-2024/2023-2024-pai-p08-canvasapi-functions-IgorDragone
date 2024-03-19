/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Taylor Polynomial function class.
 * @see "https://en.wikipedia.org/wiki/Taylor_series"
 */
import { Function } from "./function.js";
export class TaylorPolynomialApproximation extends Function {
    grade;
    givenFunction;
    /**
     * Constructor
     * @param grade grade of the polynomial
     * @param givenFunction function passed
     */
    constructor(grade, givenFunction) {
        super();
        this.grade = grade;
        this.givenFunction = givenFunction;
    }
    /**
     * Evaluates the function in a given point
     */
    evaluate(point) {
        let sum = 0;
        sum += this.givenFunction.evaluate(0);
        for (let i = 1; i <= this.grade; i++) {
            sum += this.taylorPolynomialSeriesElement(point, i);
        }
        return sum;
    }
    /**
     * Calculates the derivative of the function
     * @param grade grade of the derivative
     * @returns the derivative of the function
     */
    derivative(grade) {
        return new TaylorPolynomialApproximation(grade, this.givenFunction);
    }
    /**
     * Taylor polynomial method
     * @param point
     * @param grade
     * @returns
     */
    taylorPolynomialSeriesElement(point, grade) {
        return (this.givenFunction.derivative(grade).evaluate(0) * Math.pow(point, grade)) / this.factorial(grade);
    }
    /**
     * Factorial method
     * @param number
     * @returns
     */
    factorial(number) {
        let sum = 1;
        for (let i = 1; i < number; i++) {
            sum *= i;
        }
        return sum;
    }
}
