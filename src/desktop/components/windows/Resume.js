import Draggable from 'react-draggable';
import { randomNumber } from '../../../helpers/Helpers';
import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../../../files/Jessica Harriman - Resume.pdf';
import WindowButtons from './WindowButtons';

const Resume = ({ windows, setWindows, bringToFront, setBringToFront }) => {
 // const [maximise, setMaximise] = useState(false);
 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(3, 6))
  setLeft(randomNumber(6, 30))
 }, [])

 return (
  <Draggable handle=".resume">
   <div
    className={
     `window border
     ${windows.resume.minimise && "hidden"} 
     ${(bringToFront === "resume") && "bring-to-front"}`
    }
    id="resume"
    onClick={() => setBringToFront("resume")}
    style={{top: `${top}vh`, left: `${left}vw`}}
   >
    <header className="window-header row resume">
     <h4>RESUME</h4>
     <WindowButtons
      name="resume"
      windows={windows}
      setWindows={setWindows} 
     />
    </header>
    <span className="window-body">
     <Document file={resume}>
      <Page/>
     </Document>
    </span>
   </div>
  </Draggable >
 )
}

export default Resume;