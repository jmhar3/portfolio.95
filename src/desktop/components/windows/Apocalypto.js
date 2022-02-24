import Draggable from 'react-draggable';
import apocalypto from '../../../images/apocalypto.jpg';

const Apocalypto = ({ windows, setWindows, bringToFront, setBringToFront }) => {
 return (
  <Draggable handle=".apocalypto">
   <div
    className={`window border ${windows.apocalypto.minimise && "hidden"} ${(bringToFront === "apocalypto") && "bring-to-front"}`}
    id="apocalypto"
    onClick={() => setBringToFront("apocalypto")}
   >
    <span className="window-header row apocalypto">
     <h4>APOCALYPTO</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        apocalypto: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        apocalypto: {
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
       href="https://github.com/jmhar3/apocalypto"
       target="_blank"
      >
       <h4>github.com/jmhar3/apocalypto</h4>
      </a>
     </div>
     <div className="browser rev-border">
       {/* <iframe src="https://github.com/jmhar3/apocalypto"/> */}
       <img src={apocalypto}/>
     </div>
    </span>
   </div>
  </Draggable >
 )
}

export default Apocalypto;