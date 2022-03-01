import { useState, useEffect } from 'react';
import message from '../images/coding.png';
import { useNavigate } from "react-router-dom";
import Clouds from '../background/Clouds.js';
import Stars from '../background/Stars.js';
import Typewriter from 'typewriter-effect';

const Mobile = () => {
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

 const calculateWeekday = (day) => {
  switch (day) {
   case 0: return "Sunday";
   case 1: return "Monday";
   case 2: return "Tuesday";
   case 3: return "Wednesday";
   case 4: return "Thursday";
   case 5: return "Friday";
   case 6: return "Saturday";
  }
 }

 const calculateMonth = (month) => {
  switch (month) {
   case 0: return "January";
   case 1: return "February";
   case 2: return "March";
   case 3: return "April";
   case 4: return "May";
   case 5: return "June";
   case 6: return "July";
   case 7: return "August";
   case 8: return "September";
   case 9: return "October";
   case 10: return "November";
   case 11: return "December";
  }
 }

 const hour = calculateHour(date.getHours());
 const minute = calculateMinute(date.getMinutes());
 const weekday = calculateWeekday(date.getDay());
 const month = calculateMonth(date.getMonth());
 const day = date.getDate();

 let navigate = useNavigate();

 return (
  <>
   <button
    id="lockscreen"
    className="column center"
    onClick={() => navigate('/home')}
   >
    <h1>{`${hour}:${minute}`}</h1>
    <h3>{`${weekday}, ${month} ${day}`}</h3>
    <div
     className={`window border`}
     id="notification"
    >
     <span className="window-header row welcome">
      <h4>WELCOME</h4>
      <span className="row window-buttons">
      </span>
     </span>
     <span className="window-body">
      <span className="row center intro">
       <span className="column">
        <h4><Typewriter
         onInit={(typewriter) => {
          typewriter.typeString("Hi, my name's Jessica")
           .start();
         }}
        /></h4>
       </span>
      </span>
     </span>
    </div>
    <span className="unlock column center">
     <div className="ripple-container center">
      <div className="ripple"></div>
      <div className="ripple"></div>
     </div>
     <h3>touch to open</h3>
    </span>
   </button>

   <Stars />
   {/* <Clouds /> */}
  </>
 )
}

export default Mobile;