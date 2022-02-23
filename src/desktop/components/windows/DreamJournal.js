import Draggable from 'react-draggable';

const DreamJournal = ({ windows, setWindows }) => {
 return (
  <Draggable handle=".dreamjournal">
   <div
    className={`window border ${windows.dreamjournal.minimise && "hidden"}`}
    id="dreamjournal"
   >
    <span className="window-header row dreamjournal">
     <h4>DREAMJOURNAL</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        dreamjournal: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        dreamjournal: {
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
  </Draggable >
 )
}

export default DreamJournal;