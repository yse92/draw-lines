export const clearCanvas = (context, canvas) => {
    context.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
}