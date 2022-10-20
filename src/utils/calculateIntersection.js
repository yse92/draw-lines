export const calculateIntersection = (p1, p2, p3, p4) => {
    let c2x = p3.x - p4.x; // (x3 - x4)
    let c3x = p1.x - p2.x; // (x1 - x2)
    let c2y = p3.y - p4.y; // (y3 - y4)
    let c3y = p1.y - p2.y; // (y1 - y2)

    let d  = c3x * c2y - c3y * c2x;
    if (d === 0) {
        console.log('No intersection points!');
    }

    let u1 = p1.x * p2.y - p1.y * p2.x; // (x1 * y2 - y1 * x2)
    let u4 = p3.x * p4.y - p3.y * p4.x; // (x3 * y4 - y3 * x4)

    let px = (u1 * c2x - c3x * u4) / d;
    let py = (u1 * c2y - c3y * u4) / d;
    if (isNaN(px)||isNaN(py)) {
        return;
    } else {
        if (p1.x>=p2.x) {
            if (!(p2.x<=px && px<=p1.x)) {return;}
        } else {
            if (!(p1.x<=px && px<=p2.x)) {return;}
        }
        if (p1.y>=p2.y) {
            if (!(p2.y<=py && py<=p1.y)) {return;}
        } else {
            if (!(p1.y<=py && py<=p2.y)) {return;}
        }
        if (p3.x>=p4.x) {
            if (!(p4.x<=px && px<=p3.x)) {return;}
        } else {
            if (!(p3.x<=px && px<=p4.x)) {return;}
        }
        if (p3.y>=p4.y) {
            if (!(p4.y<=py && py<=p3.y)) {return;}
        } else {
            if (!(p3.y<=py && py<=p4.y)) {return;}
        }
    }
    return {x: px, y: py};
}