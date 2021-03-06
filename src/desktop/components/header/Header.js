import { useState } from 'react';
import NavBar from './NavBar';
import StartMenu from './StartMenu';
import AboutMenu from './AboutMenu';
import ProgramsMenu from './ProgramsMenu';

const Header = (props) => {
 const [startMenu, setStartMenu] = useState(false);
 const [aboutMenu, setAboutMenu] = useState(false);
 const [programsMenu, setProgramsMenu] = useState(false);

 const menuProps = {
  ...props,
  startMenu,
  setStartMenu,
  aboutMenu,
  setAboutMenu,
  programsMenu,
  setProgramsMenu
 };
 
 return (
  <div className="nav">
   <span className="row dropdowns">
    <StartMenu {...menuProps} />

    <AboutMenu {...menuProps} />

    <ProgramsMenu {...menuProps} />
   </span>

   <NavBar {...menuProps} />
  </div>
 )
}

export default Header;