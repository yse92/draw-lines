import {clearCanvas} from "./clearCanvas";

export const clear = (storedLines, context, canvas) => {
    storedLines.length = 0;
    clearCanvas(context, canvas)
}