import {calculateIntersection} from "./calculateIntersection";
import {drawPoint} from "./drawPoint";

export const checkWhileMouseMoving = (storedLines, context, currentLine) => {
    for (let i = 0; i < storedLines.length; i++) {
            let point = calculateIntersection(
                {x: storedLines[i].x1, y: storedLines[i].y1},
                {x: storedLines[i].x2, y: storedLines[i].y2},
                {x: currentLine.x1, y: currentLine.y1},
                {x: currentLine.x2, y: currentLine.y2}
            )
            if (point) {
                // draw red circle
                drawPoint(point.x, point.y, context)
                context.current.lineWidth = 1;
            }
            context.current.strokeStyle = 'black';
            context.current.fillStyle = 'black';
        }
}