/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Class for representing the axis of the canvas. This is, the x and y axis
 */

/**
 * Class for representing the axis of the canvas. This is, the x and y axis
 */
export class Axis {
  /**
   * Constructor for the axis
   * @param scale The scale of the canvas, this is, the number of pixels that represent a unit in the canvas
   */
  constructor(private scale: number) {}

  /**
   * Draws the axis in the canvas
   */
  drawAxis(context: CanvasRenderingContext2D): void {
    const STROKE_STYLE = 'black';
    const LINE_WIDTH = 1;
    context.strokeStyle = STROKE_STYLE;
    context.lineWidth = LINE_WIDTH;

    context.beginPath();
    context.moveTo(0, context.canvas.height / 2);
    context.lineTo(context.canvas.width, context.canvas.height / 2);
    context.stroke();

    context.beginPath();
    context.moveTo(context.canvas.width / 2, 0);
    context.lineTo(context.canvas.width / 2, context.canvas.height);
    context.stroke();
  }

  /**
   * Draws the numbers in the axis
   */
  drawNumbers(context: CanvasRenderingContext2D): void {
    const FONT = '10px Arial';
    const FILL_STYLE = 'black';
    const TEXT_ALIGN = 'center';
    const TEXT_BASELINE = 'middle';

    context.font = FONT;
    context.fillStyle = FILL_STYLE;
    context.textAlign = TEXT_ALIGN;
    context.textBaseline = TEXT_BASELINE;

    this.drawOrigin(context);
    this.drawNumbersInXAxis(context);
    this.drawNumbersInYAxis(context);
  }

  /**
   * Draws the origin in the canvas, this is, the point (0, 0), represented by the number 0
   * @param context The context of the canvas
   */
  private drawOrigin(context: CanvasRenderingContext2D): void {
    const ZERO_X_POSITION = context.canvas.width / 2 - 10;
    const ZERO_Y_POSITION = context.canvas.height / 2 + 10;
    context.fillText('0', ZERO_X_POSITION, ZERO_Y_POSITION);
  }

  /**
   * Draws the numbers in the x axis. It draws only even numbers
   * @param context The context of the canvas
   */
  private drawNumbersInXAxis(context: CanvasRenderingContext2D): void {
    const NUMBERS_Y_POSITION = context.canvas.height / 2 + 10;
    const HALF_WIDTH = context.canvas.width / 2;

    for (let i = HALF_WIDTH + this.scale; i < context.canvas.width; i += this.scale) {
      const number: number = ((i - HALF_WIDTH) / this.scale);
      if (number % 2 !== 0) continue;
      context.fillText(number.toString(), i, NUMBERS_Y_POSITION);
    }

    for (let i = HALF_WIDTH - this.scale; i > 0; i -= this.scale) {
      const number: number = ((i - HALF_WIDTH) / this.scale);
      if (number % 2 !== 0) continue;
      context.fillText(number.toString(), i, NUMBERS_Y_POSITION);
    }
  }

  /**
   * Draws the numbers in the y axis. It draws only even numbers
   * @param context The context of the canvas
   */
  private drawNumbersInYAxis(context: CanvasRenderingContext2D): void {
    const NUMBERS_X_POSITION = context.canvas.width / 2 - 10;
    const HALF_HEIGHT = context.canvas.height / 2;

    for (let i = HALF_HEIGHT + this.scale; i < context.canvas.height; i += this.scale) {
      const number: number = ((HALF_HEIGHT - i) / this.scale);
      if (number % 2 !== 0) continue;
      context.fillText(number.toString(), NUMBERS_X_POSITION, i);
    }

    for (let i = HALF_HEIGHT - this.scale; i > 0; i -= this.scale) {
      const number: number = ((HALF_HEIGHT - i) / this.scale);
      if (number % 2 !== 0) continue;
      context.fillText(number.toString(), NUMBERS_X_POSITION, i);
    }
  }
}