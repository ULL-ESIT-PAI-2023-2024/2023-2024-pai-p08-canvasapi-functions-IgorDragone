/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Class for representing a grid in the canvas
 */

/**
 * Class for representing a grid in the canvas
 * This is, the horizontal and vertical lines that divide the canvas
 */
export class Grid {
  /**
   * Constructor for the grid
   * @param scale 
   */
  constructor(private scale: number) {}

  /**
   * Draws the grid in the canvas
   */
  drawGrid(context: CanvasRenderingContext2D): void {
    const STROKE_STYLE = 'lightgray';
    const LINE_WIDTH = 0.5;

    context.strokeStyle = STROKE_STYLE;
    context.lineWidth = LINE_WIDTH;

    this.drawHorizontalLines(context);
    this.drawVerticalLines(context);
  }

  /**
   * Draws the vertical lines in the canvas
   * @param context context of the canvas
   */
  private drawVerticalLines(context: CanvasRenderingContext2D): void {
    const HALF_WIDTH = context.canvas.width / 2;

    for (let i = HALF_WIDTH; i < context.canvas.width; i += this.scale) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
    }

    for (let i = HALF_WIDTH; i > 0; i -= this.scale) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
    }
  }

  /**
   * Draws the horizontal lines in the canvas
   * @param context context of the canvas
   */
  private drawHorizontalLines(context: CanvasRenderingContext2D): void {
    const HALF_HEIGHT = context.canvas.height / 2;

    for (let i = HALF_HEIGHT; i < context.canvas.height; i += this.scale) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
    }

    for (let i = HALF_HEIGHT; i > 0; i -= this.scale) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
    }
  }
}