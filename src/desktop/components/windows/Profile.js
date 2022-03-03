import About from './tabs/About';
import Skills from './tabs/Skills';
import Education from './tabs/Education';
import Work from './tabs/Work';
import Projects from './tabs/Projects';

const Profile = ({
 windows,
 setWindows,
 selectedTab,
 setBringToFront
}) => {
 return (
  <>
   {selectedTab == "about" && <About />}
   {selectedTab == "skills" && <Skills />}
   {selectedTab == "education" && <Education />}
   {selectedTab == "work" && <Work />}
   {selectedTab == "projects" &&
    <Projects
     windows={windows}
     setWindows={setWindows}
     setBringToFront={setBringToFront}
    />}
  </>
 )
}

export default Profile;