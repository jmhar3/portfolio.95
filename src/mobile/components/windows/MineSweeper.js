import Draggable from 'react-draggable';
import { useState, useRef, useEffect } from 'react';
import Board from '../components/minesweeper/Board'

const MineSweeper = ({ windows, setWindows }) => {
 const [gameOver, setGameOver] = useState(false);
 const [mineCount, setMineCount] = useState(10);
 const [timer, setTimer] = useState(0);
 const [isActive, setIsActive] = useState(false);
 const countRef = useRef(null);

 const handleStart = () => {
  setIsActive(true)
  countRef.current = setInterval(() => {
   setTimer((timer) => timer + 1)
  }, 1000)
 }

 const handleStop = () => {
  clearInterval(countRef.current)
  setIsActive(false)
}

 const counterValue = (num) => {
  if (num.length === 1) {
   return `00${num}`
  } else if (num.length === 2) {
   return `0${num}`
  } else {
   return num
  }
 }

 return (
  <Draggable handle=".minesweeper">
   <div
    className={`window border ${windows.minesweeper.minimise && "hidden"}`}
    id="minesweeper"
   >
    <span className="window-header row minesweeper">
     <h4>MINESWEEPER</h4>

     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        minesweeper: {
         minimise: true,
         close: false
        }
       })}
      >-</button>

      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        minesweeper: {
         minimise: false,
         close: true
        }
       })}
      >&times;</button>
     </span>
    </span>

    <span className="window-body">
     <span className="row center ms-header rev-border">
      <h2 className="counter">{counterValue(mineCount.toString())}</h2>
      <button
       onClick={() => {
        handleStop();
        setTimer(0);
        setGameOver(false);
       }}
       className="center"
      >
       <h3>{!gameOver ? "🙂" : "😵"}</h3>
      </button>
      <h2 className="counter">{counterValue(timer.toString())}</h2>
     </span>
     <span className="ms-body">
      <Board
       setGameOver={setGameOver}
       handleStart={handleStart}
       handleStop={handleStop}
       mineCount={mineCount}
       setMineCount={setMineCount}
      />
     </span>
    </span>
   </div>
  </Draggable>
 )
}

export default MineSweeper;