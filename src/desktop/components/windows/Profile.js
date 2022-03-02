import Draggable from 'react-draggable';
import About from '../tabs/About';
import Skills from '../tabs/Skills';
import Education from '../tabs/Education';
import Work from '../tabs/Work';
import Projects from '../tabs/Projects';
import { useState, useEffect } from 'react';
import { randomNumber } from '../../../helpers/Helpers';
import WindowButtons from './WindowButtons';
import Tabs from '../tabs/Tabs';

const Profile = ({
 windows,
 setWindows,
 tabs,
 setTabs,
 bringToFront,
 setBringToFront
}) => {
 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(5, 15))
  setLeft(randomNumber(15, 50))
 }, [])

 return (
  <Draggable handle=".profile">
   <div
    className={`window border ${windows.profile.minimise && "hidden"} ${(bringToFront === "profile") && "bring-to-front"}`}
    id="profile"
    onClick={() => setBringToFront("profile")}
    style={{ top: `${top}vh`, left: `${left}vw`}}
   >
    <span className="window-header row profile">
     <h4>PROFILE</h4>
     <WindowButtons
      name="profile"
      windows={windows}
      setWindows={setWindows} 
     />
    </span>
    <Tabs tabs={tabs} setTabs={setTabs} />
    <span className="window-body">
     {tabs.about && <About/>}
     {tabs.skills && <Skills/>}
     {tabs.education && <Education/>}
     {tabs.work && <Work/>}
     {tabs.projects &&
      <Projects
      windows={windows}
      setWindows={setWindows}
      setBringToFront={setBringToFront}
      />}
    </span>
   </div>
  </Draggable>
 )
}

export default Profile;