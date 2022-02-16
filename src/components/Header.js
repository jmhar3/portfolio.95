import '../styling/header.css';
import logo from '../images/heart.png';
import email from '../images/email.png';
import { useState, useEffect } from 'react';

const Header = () => {
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
  <nav className="row">
   <navbar>
    <span className="row">
     <button className="border">
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
   </navbar>
   <span className="rev-border clock center">
    {`${hour}:${minute}PM`}
   </span>
  </nav>
 )
}

export default Header;