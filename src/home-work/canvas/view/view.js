/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Igor Dragone <alu0101469652>
 * @since Mar 17, 2024
 * @desc Class for representing the canvas view
 */
import { Axis } from './axis.js';
import { Grid } from './grid.js';
/**
 * Class for representing the canvas view
 */
export class View {
    scale;
    /* Properties */
    static canvas = document.getElementById('canvas');
    static context = View.canvas.getContext('2d');
    /**
     * Constructor for the view
     * @param scale The scale of the canvas, this is, the number of pixels that represent a unit in the canvas
     */
    constructor(scale = 30) {
        this.scale = scale;
    }
    /**
     * Draws the grid in the canvas
     */
    drawGrid() {
        const grid = new Grid(this.scale);
        grid.drawGrid(View.context);
    }
    /**
     * Draws the axis in the canvas
     */
    drawAxis() {
        const axis = new Axis(this.scale);
        axis.drawAxis(View.context);
        axis.drawNumbersInAxis(View.context);
    }
    /**
     * Draws the function in the canvas
     * @param functionsToDraw The functions to draw
     */
    drawFunctions(functionsToDraw) {
        for (let functionToDraw of functionsToDraw) {
            functionToDraw.draw(View.context, this.scale);
        }
    }
}
