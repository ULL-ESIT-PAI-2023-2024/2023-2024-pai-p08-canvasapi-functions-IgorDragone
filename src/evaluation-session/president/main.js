"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 19, 2024
 * @desc Client Code
 */
Object.defineProperty(exports, "__esModule", { value: true });
const president_js_1 = require("./president.js");
const main = function () {
    const president = president_js_1.President.getPresident();
    console.log(president.getName());
    const anotherPresident = president_js_1.President.getPresident();
    console.log(anotherPresident.getName());
    // You can't do this:
    // const oneMorePresident = new President('Trump');
};
main();
