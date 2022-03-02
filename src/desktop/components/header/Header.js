import { useState } from 'react';
import NavBar from './NavBar';
import StartMenu from './StartMenu';
import AboutMenu from './AboutMenu';
import ProgramsMenu from './ProgramsMenu';

const Header = ({
 windows,
 setWindows,
 muted,
 setMuted,
 setTabs,
 bringToFront,
 setBringToFront
}) => {
 const [startMenu, setStartMenu] = useState(false);
 const [aboutMenu, setAboutMenu] = useState(false);
 const [programsMenu, setProgramsMenu] = useState(false);

 // const handleCloseMenus = () => {
 //  if (!!startMenu) {
 //   setStartMenu(false);
 //   setAboutMenu(false);
 //   setProgramsMenu(false);
 //  }
 // } 

 // useEffect(() => {
 //  document.addEventListener('click', handleCloseMenus)
 //  return () => {
 //   document.removeEventListener('click', handleCloseMenus)
 //  }
 // }, []);

 return (
  <div className="nav">
   <span className="row dropdowns">
    <StartMenu
     windows={windows}
     setWindows={setWindows}
     startMenu={startMenu}
     setStartMenu={setStartMenu}
     setProgramsMenu={setProgramsMenu}
     setAboutMenu={setAboutMenu}
     setBringToFront={setBringToFront}
    />

    <AboutMenu
     windows={windows}
     setWindows={setWindows}
     setStartMenu={setStartMenu}
     setTabs={setTabs}
     aboutMenu={aboutMenu}
     setAboutMenu={setAboutMenu}
     setBringToFront={setBringToFront}
    />

    <ProgramsMenu
     windows={windows}
     setWindows={setWindows}
     setStartMenu={setStartMenu}
     programsMenu={programsMenu}
     setProgramsMenu={setProgramsMenu}
     setAboutMenu={setAboutMenu}
     setBringToFront={setBringToFront}
    />
   </span>

   <NavBar
    windows={windows}
    setWindows={setWindows}
    startMenu={startMenu}
    setStartMenu={setStartMenu}
    setProgramsMenu={setProgramsMenu}
    setAboutMenu={setAboutMenu}
    bringToFront={bringToFront}
    setBringToFront={setBringToFront}
   />
  </div>
 )
}

export default Header;