import Draggable from 'react-draggable';
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { randomNumber } from '../../../helpers/Helpers';

const Welcome = ({
 windows,
 setWindows,
 setTabs,
 bringToFront,
 setBringToFront
}) => {
 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(5, 50))
  setLeft(randomNumber(15, 60))
 }, [])

 return (
  <Draggable handle=".welcome">
   <div
    className={`window border ${windows.welcome.minimise && "hidden"} ${(bringToFront === "welcome") && "bring-to-front"}`}
    id="welcome"
    onClick={() => setBringToFront("welcome")}
    style={{ top: `${top}vh`, left: `${left}vw`}}
   >
    <span className="window-header row welcome">
     <h4>WELCOME</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        welcome: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        welcome: {
         minimise: false,
         close: true
        }
       })}
      >&times;</button>
     </span>
    </span>
    <span className="window-body">
     <span className="row center intro">
      {/* <img src={computer} alt="computer" /> */}
      <span className="column">
       <h4><Typewriter
        onInit={(typewriter) => {
         typewriter.typeString("Hi, my name's Jessica")
          .start();
        }}
       /></h4>
      </span>
     </span>
     <button
      onClick={() => {
       setWindows({
        ...windows,
        welcome: {
         minimise: false,
         close: true
        },
        profile: {
         minimise: false,
         close: false
        }})
        setTabs({
         about: true,
         skills: false,
         education: false,
         work: false,
         projects: false
        })
      }}>
        Learn More
     </button>
   </span>
  </div>
  </Draggable >
 )
}

export default Welcome;