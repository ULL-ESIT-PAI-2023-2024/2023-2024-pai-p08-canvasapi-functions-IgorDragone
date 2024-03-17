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
export class Function {
    scale;
    /**
     * Constructor for the function
     * @param scale The scale of the canvas, this is, the number of pixels that represent a unit in the canvas
     */
    constructor(scale) {
        this.scale = scale;
    }
    /**
     * Draws the function in the canvas
     */
    draw(context) {
        const STROKE_STYLE = 'red';
        const LINE_WIDTH = 1;
        context.strokeStyle = STROKE_STYLE;
        context.lineWidth = LINE_WIDTH;
        const halfHeight = context.canvas.height / 2;
        const halfWidth = context.canvas.width / 2;
        context.beginPath();
        for (let i = -halfWidth; i < halfWidth; i++) {
            const x = i;
            const y = this.evaluate(i / this.scale) * this.scale;
            context.lineTo(halfWidth + x, halfHeight - y);
        }
        context.stroke();
    }
}
