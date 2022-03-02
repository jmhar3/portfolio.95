import logo from '../../../images/heart.png';
import email from '../../../images/email.png';
import Clock from '../../../helpers/Clock';

const NavBar = ({
 windows,
 setWindows,
 startMenu,
 setStartMenu,
 setProgramsMenu,
 setAboutMenu,
 bringToFront,
 setBringToFront
}) => {
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
      <button
       className="border"
       onClick={() => {
        (bringToFront === "welcome" && !windows.welcome.minimise || windows.welcome.minimise) &&
         setWindows({
          ...windows,
          welcome: {
           minimise: !windows.welcome.minimise,
           close: false
          }
         })
        setBringToFront("welcome")
       }}
      >
       Welcome
      </button>}

     {!windows.profile.close &&
      <button
       className="border"
       onClick={() => {
        (bringToFront === "profile" && !windows.profile.minimise || windows.profile.minimise) &&
         setWindows({
          ...windows,
          profile: {
           minimise: !windows.profile.minimise,
           close: false
          }
         })
        setBringToFront("profile")
       }}
      >
       Profile
      </button>}

     {!windows.dreamjournal.close &&
      <button
       className="border"
       onClick={() => {
        (bringToFront === "dreamjournal" && !windows.dreamjournal.minimise || windows.dreamjournal.minimise) &&
         setWindows({
          ...windows,
          dreamjournal: {
           minimise: !windows.dreamjournal.minimise,
           close: false
          }
         })
        setBringToFront("dreamjournal")
       }}
      >
       DreamJournal
      </button>}

     {!windows.glasshouse.close &&
      <button
       className="border"
       onClick={() => {
        (bringToFront === "glasshouse" && !windows.glasshouse.minimise || windows.glasshouse.minimise) &&
         setWindows({
          ...windows,
          glasshouse: {
           minimise: !windows.glasshouse.minimise,
           close: false
          }
         })
        setBringToFront("glasshouse")
       }}
      >
       Glasshouse
      </button>}

     {!windows.apocalypto.close &&
      <button
       className="border"
       onClick={() => {
        (bringToFront === "apocalypto" && !windows.apocalypto.minimise || windows.apocalypto.minimise) &&
         setWindows({
          ...windows,
          apocalypto: {
           minimise: !windows.apocalypto.minimise,
           close: false
          }
         })
        setBringToFront("apocalypto")
       }}
      >
       Apocalypto
      </button>}

     {!windows.contact.close &&
      <button
       className="border"
       onClick={() => {
        (bringToFront === "contact" && !windows.contact.minimise || windows.contact.minimise) &&
         setWindows({
          ...windows,
          contact: {
           minimise: !windows.contact.minimise,
           close: false
          }
         })
        setBringToFront("contact")
       }}
      >
       Contact
      </button>}

     {/* {!windows.music.close &&
     <button
      className="border"
      onClick={() => {
       (bringToFront === "music" && !windows.music.minimise || windows.music.minimise) &&
       setWindows({
        ...windows,
        music: {
         minimise: !windows.music.minimise,
         close: false
        }
       })
       setBringToFront("music")
     }}
     >
      Music Player
     </button>} */}

     {!windows.minesweeper.close &&
      <button
       className="border"
       onClick={() => {
        (bringToFront === "minesweeper" && !windows.minesweeper.minimise || windows.minesweeper.minimise) &&
         setWindows({
          ...windows,
          minesweeper: {
           minimise: !windows.minesweeper.minimise,
           close: false
          }
         })
        setBringToFront("minesweeper")
       }}
      >
       MineSweeper
      </button>}
    </span>
   </navbar>

   <span className="rev-border clock center row">
    {/* <img
    src={logo}
    onClick={() => setMuted(!muted)}
    className="clickable mute"
   /> */}
    <Clock/>PM
   </span>
  </nav>
 )
}

export default NavBar;