import logo from '../../../images/heart.png';
import email from '../../../images/email.png';
import Clock from '../../../helpers/Clock';
import NavTab from './NavTab';

const NavBar = (props) => {
 const {
  windows,
  setWindows,
  startMenu,
  setStartMenu,
  setProgramsMenu,
  setAboutMenu,
  bringToFront,
  setBringToFront,
  muted,
  setMuted
 } = props;

 return (
  <nav className="row">
   <navbar>
    <span className="row start">
     <button
      className="border"
      onClick={() => {
       setStartMenu(!startMenu)
       if (startMenu) {
        setAboutMenu(false)
        setProgramsMenu(false)
       }
      }}>
      <img src={logo} alt="JH" />
      Start
     </button>
     <hr />
    </span>
    <hr className="border" />
    <img
     className="clickable"
     src={email} alt="E-Mail"
     onClick={() => {
      setStartMenu(false)
      setWindows({
       ...windows,
       contact: {
        minimise: false,
        close: false
       }
      })
      setBringToFront("contact")
     }}
    />
    <hr className="border" />

    <span className="window-buttons row">
     {!windows.welcome.close &&
      <NavTab {...props} name="welcome"/>}

     {!windows.profile.close &&
      <NavTab {...props} name="profile"/>}

     {!windows.dreamjournal.close &&
      <NavTab {...props} name="dreamjournal"/>}

     {!windows.glasshouse.close &&
      <NavTab {...props} name="glasshouse"/>}

     {!windows.apocalypto.close &&
      <NavTab {...props} name="apocalypto"/>}

     {!windows.contact.close &&
      <NavTab {...props} name="contact"/>}

     {/* {!windows.music.close &&
      <NavTab {...props} name="music"/>} */}

     {!windows.minesweeper.close &&
      <NavTab {...props} name="minesweeper"/>}
    </span>
   </navbar>

   <span className="rev-border clock center row">
    <img
    src={logo}
    onClick={() => setMuted(!muted)}
    className="clickable mute"
   />
    <Clock/>PM
   </span>
  </nav>
 )
}

export default NavBar;