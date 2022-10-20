import {clearCanvas} from "./clearCanvas";
import {clear} from "./clear";
import {redrawStoredLines} from "./redrawStoredLines";

export const animate = (storedLines, context, canvas) => {
    //find max delta x
    let max = 0
    for (let i = 0; i < storedLines.length; i++) {
        let temp;
        temp = Math.abs(storedLines[i].x2 - storedLines[i].x1)
        if (temp > max) {
            max = temp;
        }
    }
    console.log('max ' , max)
    //count new coordinates
    let ratio;
    const shrink = () => {
        for (let i = 0; i < storedLines.length; i++) {
            if (storedLines[i].x1 === storedLines[i].x2) {
                continue;
            }
            ratio = Math.abs(storedLines[i].y2 - storedLines[i].y1) / Math.abs(storedLines[i].x2 - storedLines[i].x1)
            if (storedLines[i].y2 > storedLines[i].y1) {
                if (storedLines[i].x2 > storedLines[i].x1) {
                    storedLines[i].x2--;
                    storedLines[i].x1++;
                    storedLines[i].y2-= ratio;
                    storedLines[i].y1+= ratio;
                } else {
                    storedLines[i].x2++;
                    storedLines[i].x1--;
                    storedLines[i].y2-= ratio;
                    storedLines[i].y1+= ratio;
                }
            } else {
                if (storedLines[i].x2 > storedLines[i].x1) {
                    storedLines[i].x2--;
                    storedLines[i].x1++;
                    storedLines[i].y1-= ratio;
                    storedLines[i].y2+= ratio;
                } else {
                    storedLines[i].x2++;
                    storedLines[i].x1--;
                    storedLines[i].y2+= ratio;
                    storedLines[i].y1-= ratio;
                }
            }
            console.log('max ' , max)
            clearCanvas(context, canvas)
            redrawStoredLines(storedLines, context, canvas)
        }
        max--;
        if (max > 0) {
            setTimeout(shrink, 10)
        } else {
            clear(storedLines, context, canvas)
        }
    }
    shrink()
}