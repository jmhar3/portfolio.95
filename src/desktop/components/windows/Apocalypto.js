import Draggable from 'react-draggable';
import apocalypto from '../../../images/apocalypto.jpg';
import MarqueeBanner from "../MarqueeBanner";
import { randomNumber } from '../../../helpers/Helpers';
import { useState, useEffect } from 'react';
import WindowButtons from './WindowButtons';

const Apocalypto = ({ windows, setWindows, bringToFront, setBringToFront }) => {
 // const [maximise, setMaximise] = useState(false);
 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(3, 6))
  setLeft(randomNumber(6, 30))
 }, [])

 return (
  <Draggable handle=".apocalypto">
   <div
    className={
     `window border
     ${windows.apocalypto.minimise && "hidden"} 
     ${(bringToFront === "apocalypto") && "bring-to-front"}`
    }
    id="apocalypto"
    onClick={() => setBringToFront("apocalypto")}
    style={{top: `${top}vh`, left: `${left}vw`}}
   >
    <header className="window-header row apocalypto">
     <h4>APOCALYPTO</h4>
     <WindowButtons
      name="apocalypto"
      windows={windows}
      setWindows={setWindows} 
     />
    </header>
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
      <img src={apocalypto} />
      <MarqueeBanner github="https://github.com/jmhar3/apocalypto" languages="Ruby"/>
     </div>
    </span>
   </div>
  </Draggable >
 )
}

export default Apocalypto;