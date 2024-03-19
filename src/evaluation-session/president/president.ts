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

export class President {
  /* Private instance of president */
  private static president: President;
  
  /**
   * Static method that checks if the president instance has already been created
   * If it is the case, it returns that instance, else, it creates the current president, Joe Biden
   * @returns President
   */
  public static getPresident(): President {
    if (President.president === undefined) return new President('Biden');
    return President.president;
  }

  /**
   * Gets the name of the president
   * @returns name of the president
   */
  public getName(): string {
    return this.name
  }

  /**
   * Constructor
   * @param name Name Of The President
   */
  private constructor(private name: string) {}
}