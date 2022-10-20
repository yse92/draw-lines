export const drawPoint = (x,y, context) => {
    context.current.beginPath();
    context.current.arc(x, y, 3, 0, 2*Math.PI, false);
    context.current.fillStyle = 'red';
    context.current.fill();
    context.current.lineWidth = 2;
    context.current.strokeStyle = 'red';
    context.current.stroke();

}