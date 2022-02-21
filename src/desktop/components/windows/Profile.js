import Draggable from 'react-draggable';
import About from '../tabs/About';
import Skills from '../tabs/Skills';
import Education from '../tabs/Education';
import Work from '../tabs/Work';
import Projects from '../tabs/Projects';

const Profile = ({ windows, setWindows, tabs, setTabs }) => {
 return (
  <Draggable handle=".profile">
   <div
    className={`window border ${windows.profile.minimise && "hidden"}`}
    id="profile"
   >
    <span className="window-header row profile">
     <h4>PROFILE</h4>

     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        profile: {
         minimise: true,
         close: false
        }
       })}
      >-</button>

      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        profile: {
         minimise: false,
         close: true
        }
       })}
      >&times;</button>
     </span>

    </span>
     <ul className="row tabs clickable">
      <li
       className={`tab ${tabs.about && "selected-tab"}`}
       onClick={() => setTabs({
        about: true,
        skills: false,
        education: false,
        work: false,
        projects: false
       })}
      >
       About
      </li>
      <li
       className={`tab ${tabs.skills && "selected-tab"}`}
       onClick={() => setTabs({
        about: false,
        skills: true,
        education: false,
        work: false,
        projects: false
       })}
      >
       Skills
      </li>
      <li
       className={`tab ${tabs.education && "selected-tab"}`}
       onClick={() => setTabs({
        about: false,
        skills: false,
        education: true,
        work: false,
        projects: false
       })}
      >
       Education
      </li>
      <li
       className={`tab ${tabs.work && "selected-tab"}`}
       onClick={() => setTabs({
        about: false,
        skills: false,
        education: false,
        work: true,
        projects: false
       })}
      >
       Work
      </li>
      <li
       className={`tab ${tabs.projects && "selected-tab"}`}
       onClick={() => setTabs({
        about: false,
        skills: false,
        education: false,
        work: false,
        projects: true
       })}
      >
       Projects
      </li>
     </ul>
    <span className="window-body">
     {tabs.about && <About/>}
     {tabs.skills && <Skills/>}
     {tabs.education && <Education/>}
     {tabs.work && <Work/>}
     {tabs.projects && <Projects/>}
    </span>
   </div>
  </Draggable>
 )
}

export default Profile;