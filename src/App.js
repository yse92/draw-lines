import './App.css';
import {useEffect, useRef, useState} from "react";
import {clear} from "./utils/clear";
import {animate} from "./utils/animate";
import {redrawStoredLines} from "./utils/redrawStoredLines";
import {observer} from 'mobx-react';
import store from "./store/store";

// let startPosition = {x: 0, y: 0};
// let storedLines = [];

const App = observer(() => {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)

  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(()=> {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    const ctx = canvas.getContext("2d")
    ctx.scale(2,2)
    ctx.lineCap = "round"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1
    ctxRef.current = ctx;
  }, [])
  const mouseDownListener = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    store.startPosition.x = offsetX
    store.startPosition.y = offsetY
    setIsDrawing(true)
  }
  const mouseUpListener = ({nativeEvent}) => {
    setIsDrawing(false)
    const {offsetX, offsetY} = nativeEvent
    store.storedLines.push({
      x1: store.startPosition.x,
      y1: store.startPosition.y,
      x2: offsetX,
      y2: offsetY
    });
    redrawStoredLines(store.storedLines, ctxRef, canvasRef);
  }

  const mouseMoveListener = ({nativeEvent}) => {
    if(!isDrawing)
      return
    const {offsetX, offsetY} = nativeEvent
    redrawStoredLines(store.storedLines, ctxRef, canvasRef)

    ctxRef.current.beginPath()
    ctxRef.current.moveTo(store.startPosition.x, store.startPosition.y)
    ctxRef.current.lineTo(offsetX, offsetY)
    ctxRef.current.stroke()
  }

  return (
      <div className="App">
        <p>
          By Yaroslav Moroz
        </p>
        <button onClick={() =>clear(store.storedLines, ctxRef, canvasRef)}>Clear</button>
        <button onClick={() => animate(store.storedLines, ctxRef, canvasRef)}>Collapse</button>
        <br/><br/>
        <canvas
            ref={canvasRef}
            onMouseMove={mouseMoveListener}
            onMouseDown={mouseDownListener}
            onMouseUp={mouseUpListener}
            style={{border: '1px solid #000000'}}>
        </canvas>
      </div>
  );
})

export default App;
