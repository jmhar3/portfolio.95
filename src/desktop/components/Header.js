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
 bringToFront,
 setBringToFront
}) => {
 const [startMenu, setStartMenu] = useState(false);
 const [aboutMenu, setAboutMenu] = useState(false);
 const [programsMenu, setProgramsMenu] = useState(false);
 const [date, setDate] = useState(new Date());

 function refreshClock() {
  setDate(new Date());
 }

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

 useEffect(() => {
  const timerId = setInterval(refreshClock, 1000);
  return function cleanup() {
   clearInterval(timerId);
  };
 }, []);

 const calculateHour = (hour) => {
  if (hour === 0) {
   return hour + 12
  } else if (hour <= 12) {
   return hour
  } else if (hour > 12) {
   return hour - 12
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
     {`${hour}:${minute}PM`}
    </span>
   </nav>
  </div>
 )
}

export default Header;