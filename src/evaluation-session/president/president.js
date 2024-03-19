"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 19, 2024
 * @desc President class using Singleton Pattern
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.President = void 0;
class President {
    name;
    /* Private instance of president */
    static president;
    /**
     * Static method that checks if the president instance has already been created
     * If it is the case, it returns that instance, else, it creates the current president, Joe Biden
     * @returns President
     */
    static getPresident() {
        if (President.president === undefined)
            return new President("Biden");
        return President.president;
    }
    /**
     * Gets the name of the president
     * @returns name of the president
     */
    getName() {
        return this.name;
    }
    /**
     * Constructor
     * @param name Name Of The President
     */
    constructor(name) {
        this.name = name;
    }
}
exports.President = President;
