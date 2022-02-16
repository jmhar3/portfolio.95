import '../styling/header.css';
import logo from '../images/heart.png';
import email from '../images/email.png';
import computer from '../images/computer.png';
import { useState, useEffect } from 'react';

const Header = ({ windows, setWindows }) => {
 const [startMenu, setStartMenu] = useState(false);
 const [aboutMenu, setAboutMenu] = useState(false);
 const [programmingMenu, setProgrammingMenu] = useState(false);
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
  } else if (hour > 11) {
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
   <span className="row">
    <ul
     className={`${!startMenu && "hidden"} border`}
    >
     <li
      className="row center"
      onMouseEnter={() => {
       setAboutMenu(true)
       setProgrammingMenu(false)
      }}>
      <span className="row center">
       <img src={computer} />
       About
      </span>
      ►
     </li>

     <li
      className="row center"
      onMouseEnter={() => {
       setAboutMenu(false)
       setProgrammingMenu(true)
      }}>
      <span className="row center">
       <img src={computer} />
       Programming
      </span>
      ►
     </li>

     <li
      className="row center clickable"
      onMouseEnter={() => {
       setAboutMenu(false)
       setProgrammingMenu(false)
      }}
      onClick={() => {
       setStartMenu(false)
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

    <ul
     className={`${!aboutMenu && "remove"} border clickable`}
     onMouseLeave={() => setAboutMenu(false)}
    >
     <li>Profile</li>
     <li>Skills</li>
     <li>Education</li>
    </ul>
    
    <ul
     className={`${!programmingMenu && "remove"} border clickable`}
     onMouseLeave={() => setProgrammingMenu(false)}
    >
     <li>Work</li>
     <li>Projects</li>
    </ul>
   </span>


   <nav className="row">
    <navbar>
     <span className="row">
      <button
       className="border"
       onClick={() => {
        setStartMenu(!startMenu)
        if (startMenu) {
         setAboutMenu(false)
         setProgrammingMenu(false)
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
     {!windows.welcome.close &&
      <button
       className="border"
       onClick={() => setWindows({
        ...windows,
        welcome: {
         minimise: !windows.welcome.minimise,
         close: false
        }
       })}
      >
       Welcome
      </button>}
    </navbar>

    <span className="rev-border clock center">
     {`${hour}:${minute}PM`}
    </span>
   </nav>
  </div>
 )
}

export default Header;