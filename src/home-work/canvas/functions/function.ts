/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Interface for a function
 */

/**
 * Interface for a drawable object
 */
interface Drawable {
  /**
   * Draws the object in the canvas
   */
  draw(context: CanvasRenderingContext2D, scale: number): void;
}

export abstract class Function implements Drawable {
  /**
   * Draws the function in the canvas
   */
  abstract evaluate(point: number): number;

  /**
   * Draws the function in the canvas
   */
  draw(context: CanvasRenderingContext2D, scale: number): void {
    const STROKE_STYLE = 'red';
    const LINE_WIDTH = 1;
    context.strokeStyle = STROKE_STYLE;
    context.lineWidth = LINE_WIDTH;

    const halfHeightOfCanvas = context.canvas.height / 2;
    const halfWidthOfCanvas = context.canvas.width / 2;

    context.beginPath();
    for (let xPositionInCanvas = 0; xPositionInCanvas < context.canvas.width; xPositionInCanvas++) {
      const xValue = (xPositionInCanvas - halfWidthOfCanvas) / scale;  // From pixel to unit
      const yValue = this.evaluate(xValue);
      const yPositionInCanvas = halfHeightOfCanvas - yValue * scale;
      context.lineTo(xPositionInCanvas, yPositionInCanvas);
    }
    context.stroke();
  }
}