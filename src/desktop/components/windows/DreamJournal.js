import Draggable from 'react-draggable';
import dreamJournal from '../../../images/dreamJournal.jpg';

const DreamJournal = ({ windows, setWindows, bringToFront, setBringToFront }) => {
 return (
  <Draggable handle=".dreamjournal">
   <div
    className={`window border ${windows.dreamjournal.minimise && "hidden"} ${(bringToFront === "dreamjournal") && "bring-to-front"}`}
    id="dreamjournal"
    onClick={() => setBringToFront("dreamjournal")}
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
     <div className="url rev-border">
      <a
       href="https://github.com/jmhar3/DreamJournal_app/tree/master"
       target="_blank"
      >
       <h4>github.com/jmhar3/DreamJournal</h4>
      </a>
     </div>
      <div className="browser rev-border">
       {/* <iframe src="https://github.com/jmhar3/DreamJournal_app/tree/master"/> */}
       <img src={dreamJournal}/>
      </div>
    </span>
   </div>
  </Draggable >
 )
}

export default DreamJournal;