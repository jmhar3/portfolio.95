import About from './tabs/About';
import Skills from './tabs/Skills';
import Education from './tabs/Education';
import Work from './tabs/Work';
import Projects from './tabs/Projects';

const Profile = ({
 windows,
 setWindows,
 tabs,
 setBringToFront
}) => {
 return (
  <>
   {tabs.about && <About />}
   {tabs.skills && <Skills />}
   {tabs.education && <Education />}
   {tabs.work && <Work />}
   {tabs.projects &&
    <Projects
     windows={windows}
     setWindows={setWindows}
     setBringToFront={setBringToFront}
    />}
  </>
 )
}

export default Profile;