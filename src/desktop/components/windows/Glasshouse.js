import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import MarqueeBanner from '../MarqueeBanner';
import { useState, useEffect } from 'react';
import { randomNumber } from '../../../helpers/Helpers';

const Glasshouse = ({ windows, setWindows, bringToFront, setBringToFront }) => {
 // const [maximise, setMaximise] = useState(false);
 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(3, 6))
  setLeft(randomNumber(6, 30))
 }, [])

 return (
   <Draggable handle=".glasshouse">
    <ResizableBox
     className={
      `window border
      ${windows.glasshouse.minimise && "hidden"}
      ${(bringToFront === "glasshouse") && "bring-to-front"}
      `}
     id="glasshouse"
     onClick={() => setBringToFront("glasshouse")}
     style={{top: `${top}vh`, left: `${left}vw`}}
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
       {/* <button
        className="close-btn center"
        onClick={() => setMaximise(!maximise)}
       >▭</button> */}
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
      <div className="url rev-border">
       <a
        href="https://github.com/jmhar3/glasshouse"
        target="_blank"
       >
        <h4>jmhar3.github.io/glasshouse</h4>
       </a>
      </div>
      <div className="browser rev-border">
       <iframe src="https://jmhar3.github.io/glasshouse/"/>
       <MarqueeBanner github="https://github.com/jmhar3/glasshouse" languages="CSS JavaScript React AWS Firebase" />
      </div>
     </span>
    </ResizableBox>
   </Draggable >
 )
}

export default Glasshouse;