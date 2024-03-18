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
    /**
     * Draws the function in the canvas
     */
    draw(context, scale) {
        const STROKE_STYLE = 'red';
        const LINE_WIDTH = 1;
        context.strokeStyle = STROKE_STYLE;
        context.lineWidth = LINE_WIDTH;
        const halfHeight = context.canvas.height / 2;
        const halfWidth = context.canvas.width / 2;
        context.beginPath();
        for (let i = -halfWidth; i < halfWidth; i++) {
            const xValue = i / scale; // From pixel to unit
            const yValue = this.evaluate(xValue);
            context.lineTo(halfWidth + i, halfHeight - yValue * scale);
        }
        context.stroke();
    }
}
