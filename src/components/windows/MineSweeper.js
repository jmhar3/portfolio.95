import Draggable from 'react-draggable';

const MineSweeper = ({ windows, setWindows }) => {
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
     <h1>Hello World</h1>
    </span>
   </div>
  </Draggable>
 )
}

export default MineSweeper;