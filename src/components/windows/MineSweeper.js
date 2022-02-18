import Draggable from 'react-draggable';
import { useState } from 'react';
import Board from '../minesweeper/Board'

const MineSweeper = ({ windows, setWindows }) => {
 const [gameOver, setGameOver] = useState(false)
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
      <h2 className="counter">048</h2>
      <button className="center">
       <h3>{!gameOver ? "🙂" : "😵"}</h3>
      </button>
      <h2 className="counter">003</h2>
     </span>
     <span className="ms-body">
      <Board/>
     </span>
    </span>
   </div>
  </Draggable>
 )
}

export default MineSweeper;