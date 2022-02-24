import logo from '../../images/heart.png';
import email from '../../images/email.png';
import computer from '../../images/computer.png';
import { useState, useEffect } from 'react';

const Header = ({
 windows,
 setWindows,
 muted,
 setMuted,
 tabs,
 setTabs,
 setBringToFront
}) => {
 const [startMenu, setStartMenu] = useState(false);
 const [aboutMenu, setAboutMenu] = useState(false);
 const [programsMenu, setProgramsMenu] = useState(false);
 const [date, setDate] = useState(new Date());

 function refreshClock() {
  setDate(new Date());
 }

 useEffect(() => {
  const timerId = setInterval(refreshClock, 1000);
  return function cleanup() {
   clearInterval(timerId);
  };
 }, []);

 const calculateHour = (hour) => {
  if (hour === 0) {
   return hour + 12
  } else if (hour < 12) {
   return hour
  } else if (hour > 12) {
   return hour - 12
  } else {
   return hour
  }
 }

 const calculateMinute = (minute) => {
  if (minute < 10) {
   return `0${minute}`
  } else {
   return minute
  }
 }

 const hour = calculateHour(date.getHours());
 const minute = calculateMinute(date.getMinutes());

 return (
  <div className="nav">
   <span className="row dropdowns">
    <ul
     className={`${!startMenu && "hidden"} border start-menu`}
    >
     <li
      className="row center"
      onMouseEnter={() => {
       setAboutMenu(true)
       setProgramsMenu(false)
      }}>
      <span className="row center">
       <img src={computer} />
       Profile
      </span>
      ►
     </li>

     {/* <li
      className="row center"
      onMouseEnter={() => {
       setAboutMenu(false)
       setProgramsMenu(true)
      }}>
      <span className="row center">
       <img src={computer} />
       Programs
      </span>
      ►
     </li> */}

     <li
      className="row center clickable"
      onClick={() => {
       setStartMenu(false)
       setBringToFront("minesweeper")
       setWindows({
        ...windows,
        minesweeper: {
         minimise: false,
         close: false
        }
       })
      }}
     >
     <span className="row center">
      <img src={computer} />
      MineSweeper
     </span>
     </li>

     <li
      onMouseEnter={() => {
       setAboutMenu(false)
       setProgramsMenu(false)
      }}
      className="row center clickable"
      onClick={() => {
       setStartMenu(false)
       setBringToFront("welcome")
       setWindows({
        ...windows,
        welcome: {
         minimise: false,
         close: false
        }
       })
      }}
     >
      <span className="row center">
       <img src={computer} />
       <span>
        Run
       </span>
      </span>
     </li>
    </ul>

    {/* About Menu */}
    <ul
     className={`${!aboutMenu && "remove"} border clickable`}
     onMouseLeave={() => setAboutMenu(false)}
    >
     <li
      onClick={() => {
       setStartMenu(false)
       setAboutMenu(false)
       setBringToFront("profile")
       setWindows({
        ...windows,
        profile: {
         minimise: false,
         close: false
        }
       })
       setTabs({
        about: true,
        skills: false,
        education: false,
        work: false,
        projects: false
       })
      }}
     >
      About
     </li>
     <li
      onClick={() => {
       setStartMenu(false)
       setAboutMenu(false)
       setBringToFront("profile")
       setWindows({
        ...windows,
        profile: {
         minimise: false,
         close: false
        }
       })
       setTabs({
        about: false,
        skills: true,
        education: false,
        work: false,
        projects: false
       })
      }}
     >
      Skills
     </li>
     <li
      onClick={() => {
       setStartMenu(false)
       setAboutMenu(false)
       setBringToFront("profile")
       setWindows({
        ...windows,
        profile: {
         minimise: false,
         close: false
        }
       })
       setTabs({
        about: false,
        skills: false,
        education: true,
        work: false,
        projects: false
       })
      }}
     >
      Education
     </li>
     <li
      onClick={() => {
       setStartMenu(false)
       setAboutMenu(false)
       setBringToFront("profile")
       setWindows({
        ...windows,
        profile: {
         minimise: false,
         close: false
        }
       })
       setTabs({
        about: false,
        skills: false,
        education: false,
        work: true,
        projects: false
       })
      }}
     >
      Work
     </li>
     <li
      onClick={() => {
       setStartMenu(false)
       setAboutMenu(false)
       setBringToFront("profile")
       setWindows({
        ...windows,
        profile: {
         minimise: false,
         close: false
        }
       })
       setTabs({
        about: false,
        skills: false,
        education: false,
        work: false,
        projects: true
       })
      }}
     >
      Projects
     </li>
    </ul>

    {/* Programs Menu */}
    <ul
     className={`${!programsMenu && "remove"} border clickable`}
     onMouseLeave={() => setProgramsMenu(false)}
    >
     {/* <li
      onClick={() => {
       setStartMenu(false)
       setProgramsMenu(false)
       setBringToFront("music")
       setWindows({
        ...windows,
        music: {
         minimise: false,
         close: false
        }
       })
      }}
     >
      Music Player
     </li> */}

     <li
      className="row center clickable"
      onMouseEnter={() => setAboutMenu(false)}
      onClick={() => {
       setStartMenu(false)
       setBringToFront("minesweeper")
       setWindows({
        ...windows,
        minesweeper: {
         minimise: false,
         close: false
        }
       })
      }}
     >
      MineSweeper
     </li>
    </ul>
   </span>


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
     <a
      href="mailto:jmhar@protonmail.com" className="center"
     >
      <img src={email} alt="E-Mail" />
     </a>
     <hr className="border" />

     <span className="window-buttons row">
      {!windows.welcome.close &&
       <button
        className="border"
        onClick={() => {
       setBringToFront("welcome")
         setWindows({
         ...windows,
         welcome: {
          minimise: !windows.welcome.minimise,
          close: false
         }
        })}}
       >
        Welcome
       </button>}

      {!windows.profile.close &&
       <button
        className="border"
        onClick={() => {
         setBringToFront("profile")
         setWindows({
         ...windows,
         profile: {
          minimise: !windows.profile.minimise,
          close: false
         }
        })}}
       >
        Profile
       </button>}

      {!windows.dreamjournal.close &&
       <button
        className="border"
        onClick={() => {
         setBringToFront("dreamjournal")
         setWindows({
         ...windows,
         dreamjournal: {
          minimise: !windows.dreamjournal.minimise,
          close: false
         }
         })}}
       >
        DreamJournal
       </button>}

      {!windows.glasshouse.close &&
       <button
        className="border"
        onClick={() => {
         setBringToFront("glasshouse")
         setWindows({
         ...windows,
         glasshouse: {
          minimise: !windows.glasshouse.minimise,
          close: false
         }
         })}}
       >
        Glasshouse
       </button>}

      {!windows.apocalypto.close &&
       <button
        className="border"
        onClick={() => {
         setBringToFront("apocalypto")
         setWindows({
         ...windows,
         apocalypto: {
          minimise: !windows.apocalypto.minimise,
          close: false
         }
          })}}
       >
        Apocalypto
       </button>}

      {/* {!windows.music.close &&
       <button
        className="border"
        onClick={() => {
       setBringToFront("music")
       setWindows({
         ...windows,
         music: {
          minimise: !windows.music.minimise,
          close: false
         }
        })}}
       >
        Music Player
       </button>} */}

      {!windows.minesweeper.close &&
       <button
        className="border"
        onClick={() => {
         setBringToFront("minesweepr")
         setWindows({
         ...windows,
         minesweeper: {
          minimise: !windows.minesweeper.minimise,
          close: false
         }
        })}}
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
     {`${hour}:${minute}PM`}
    </span>
   </nav>
  </div>
 )
}

export default Header;