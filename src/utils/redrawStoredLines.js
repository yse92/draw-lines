import {clearCanvas} from "./clearCanvas";
import {calculateIntersection} from "./calculateIntersection";
import {drawPoint} from "./drawPoint";
import {checkIntersectionPoints} from "./checkIntersectionPoints";

export const redrawStoredLines = (storedLines, context, canvas) => {
    clearCanvas(context, canvas)
    if (storedLines.length === 0) {
        return;
    }
    for (let i = 0; i < storedLines.length; i++) {
        context.current.beginPath();
        context.current.moveTo(storedLines[i].x1, storedLines[i].y1);
        context.current.lineTo(storedLines[i].x2, storedLines[i].y2);
        context.current.stroke();
    }
    checkIntersectionPoints(storedLines, context)
}