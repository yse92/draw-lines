import {calculateIntersection} from "./calculateIntersection";
import {drawPoint} from "./drawPoint";

export const checkIntersectionPoints = (storedLines, context) => {
    for (let i = 0; i < storedLines.length - 1; i++) {
        for(let j = i + 1; j < storedLines.length; j++) {
            let point = calculateIntersection(
                {x: storedLines[i].x1, y: storedLines[i].y1},
                {x: storedLines[i].x2, y: storedLines[i].y2},
                {x: storedLines[j].x1, y: storedLines[j].y1},
                {x: storedLines[j].x2, y: storedLines[j].y2}
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
}