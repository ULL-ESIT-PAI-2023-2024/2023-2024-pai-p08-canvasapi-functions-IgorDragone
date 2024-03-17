/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Client code
 */

import { View } from './view/view.js';

export function main(): void {
  const view: View = new View();
  view.drawGrid();
  view.drawAxis();
}

main();
