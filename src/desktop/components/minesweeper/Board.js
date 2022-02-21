import React, { useState, useEffect } from 'react';
import CreateBoard from './CreateBoard';
import { revealed } from "./Reveal";
import Cell from './Cell';

function Board({ setGameOver, handleStart, handleStop, mineCount, setMineCount }) {
 const [grid, setGrid] = useState([]);
 const [nonMinecount, setNonMinecount] = useState(0);
 const [mineLocation, setmineLocation] = useState([]);
 const [isFreshBoard, setIsFreshBoard] = useState(true);

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
  setNonMinecount(9 * 9 - 10);
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

 const newfresh = () => {
  freshBoard();
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
   handleStop();
   // setTimeout(newfresh, 500);
  }
  if (nonMinecount === 0) {
   // WINNER WINNER CHICKEN DINNER
   handleStop();
   // setTimeout(newfresh, 500);
  }
  else {
   let revealedboard = revealed(newGrid, x, y, nonMinecount);
   setGrid(revealedboard.arr);
   setNonMinecount(revealedboard.newNonMines);
  }

 }

 return (
  <div className="parent">
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

  </div>
 )
}
export default Board;