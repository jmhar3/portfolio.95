import Draggable from 'react-draggable';
import React, { useState, useEffect, useRef } from 'react';
import CreateBoard from '../minesweeper/CreateBoard';
import { revealed } from "../minesweeper/Reveal";
import Cell from '../minesweeper/Cell';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MineSweeper = ({
 windows,
 setWindows,
 bringToFront,
 setBringToFront
}) => {
 const [gameOver, setGameOver] = useState(false);
 const [grid, setGrid] = useState([]);
 const [nonMinecount, setNonMinecount] = useState(0);
 const [mineLocation, setmineLocation] = useState([]);
 const [isFreshBoard, setIsFreshBoard] = useState(true);
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

 const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 'fit-content'
 }

 useEffect(() => {
  freshBoard();
 }, []);

 const freshBoard = () => {
  const newBoard = CreateBoard(9, 9, 10);
  setmineLocation(newBoard.mineLocation);
  setGrid(newBoard.board);
  setIsFreshBoard(true);
  setMineCount(10);
 }

 const updateFlag = (e, x, y) => {
  e.preventDefault();
  let newGrid = JSON.parse(JSON.stringify(grid));
  newGrid[x][y].flagged = true;
  console.log(newGrid[x][y]);
  if (newGrid[x][y].value === "X") setMineCount(mineCount - 1)
  setGrid(newGrid);
 }

 const revealcell = (x, y) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  if (newGrid[x][y].value === "X") {
   // GAME OVER
   for (let i = 0; i < mineLocation.length; i++) {
    newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
   }
   setGrid(newGrid);
   setGameOver(true);
  }
  if (mineCount === 0) {
   // WINNER WINNER CHICKEN DINNER
   handleStop();
   toast(
    <div className="center column">
     <h4>YOU WIN!</h4>
     <h5>Congratulations on winning MineSweeper!</h5>
    </div>
   )
  }
  else {
   let revealedboard = revealed(newGrid, x, y, nonMinecount);
   setGrid(revealedboard.arr);
   setNonMinecount(revealedboard.newNonMines);
  }
 }

 return (
  <Draggable handle=".minesweeper">
   <div
    className={`window border ${windows.minesweeper.minimise && "hidden"} ${(bringToFront === "minesweeper") && "bring-to-front"}`}
    id="minesweeper"
    onClick={() => setBringToFront("minesweeper")}
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
        freshBoard();
       }}
       className="center"
      >
       <h3>{!gameOver ? "🙂" : "😵"}</h3>
      </button>
      <h2 className="counter">{counterValue(timer.toString())}</h2>
     </span>
     <span className="ms-body">
      <div className="rev-border">
       {grid.map((singlerow, index1) => {
        return (
         <div style={style} key={index1}>
          {singlerow.map((singlecol, index2) => {
           return <Cell
            details={singlecol}
            key={index2}
            updateFlag={updateFlag}
            revealcell={revealcell}
            handleStart={handleStart}
            isFreshBoard={isFreshBoard}
            setIsFreshBoard={setIsFreshBoard}
            mineCount={mineCount}
            setMineCount={setMineCount}
           />
          })}

         </div>
        )
       })}
      </div>
     </span>
    </span>
   </div>
  </Draggable>
 )
}

export default MineSweeper;