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

import {President} from './president.js';

const main = function (): void {
  const president: President = President.getPresident();
  console.log(president.getName());
  const anotherPresident: President = President.getPresident();
  console.log(anotherPresident.getName());
  // You can't do this:
  // const oneMorePresident = new President('Trump');
}

main();
