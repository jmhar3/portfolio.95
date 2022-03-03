import Draggable from 'react-draggable';
import WindowButtons from './WindowButtons';
import { useState, useEffect } from 'react';
import { randomNumber } from '../../../helpers/Helpers';
import Tabs from './tabs/Tabs';

const Window = ({
 selectedTab,
 setSelectedTab,
 windows,
 setWindows,
 bringToFront,
 setBringToFront,
 name,
 topValues,
 leftValues,
 body
}) => {
 const [maximise, setMaximise] = useState(false);

 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(...topValues))
  setLeft(randomNumber(...leftValues))
 }, [])

 return (
  <Draggable handle={`.${name}`}>
   <div
    className={
     `window border
     ${windows[name].minimise && "hidden"}
     ${(bringToFront === name) && "bring-to-front"}
     ${maximise && 'maximise'}`
    }
    id={name}
    onClick={() => setBringToFront(name)}
    style={{ top: `${top}vh`, left: `${left}vw` }}
   >
    <span className={`window-header row ${name}`}>
     <h4>{name.toUpperCase()}</h4>
     <WindowButtons
      name={name}
      windows={windows}
      setWindows={setWindows}
      maximise={maximise}
      setMaximise={setMaximise}
     />
    </span>
    {name === "profile" && 
    <Tabs
     selectedTab={selectedTab}
     setSelectedTab={setSelectedTab}
    />}
    <span
     className="window-body"
    >
     {body}
    </span>
   </div>
  </Draggable>
 )
}

export default Window;