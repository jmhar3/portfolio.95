import Draggable from 'react-draggable';

const Glasshouse = ({ windows, setWindows }) => {
 return (
  <Draggable handle=".glasshouse">
   <div
    className={`window border ${windows.glasshouse.minimise && "hidden"}`}
    id="glasshouse"
   >
    <span className="window-header row glasshouse">
     <h4>GLASSHOUSE</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        glasshouse: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        glasshouse: {
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

export default Glasshouse;