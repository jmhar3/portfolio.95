import '../styling/stars.css';
import { useEffect } from 'react';

const Stars = () => {
 function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
 }

 const generateLocation = () => {
  var stars = document.getElementsByClassName('star');

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
 
  for (var i = 0; i < stars.length; i++) {
   var star = stars[i];
 
   let randomTop = getRandomNumber(0, winHeight);
   let randomLeft = getRandomNumber(0, winWidth);
   // let randomSize = getRandomNumber(6, 12);
 
   star.style.top = randomTop + "px";
   star.style.left = randomLeft + "px";
   // star.style.height = randomSize + "px";
   // star.style.width = randomSize + "px";
  }
 }

 useEffect(() => {
  generateLocation()
 }, [])

 return (
  <div id="stars">
   <div className="star s1" />
   <div className="star s2" />
   <div className="star s3" />
   <div className="star s4" />
   <div className="star s5" />
   <div className="star s6" />
   <div className="star s7" />
   <div className="star s8" />
   <div className="star s9" />
   <div className="star s1" />
   <div className="star s2" />
   <div className="star s3" />
   <div className="star s4" />
   <div className="star s5" />
   <div className="star s6" />
   <div className="star s7" />
   <div className="star s8" />
   <div className="star s9" />
   <div className="star s1" />
   <div className="star s2" />
   <div className="star s3" />
   <div className="star s4" />
   <div className="star s5" />
   <div className="star s6" />
   <div className="star s7" />
   <div className="star s8" />
   <div className="star s9" />
   <div className="star s1" />
   <div className="star s2" />
   <div className="star s3" />
   <div className="star s4" />
   <div className="star s5" />
   <div className="star s6" />
   <div className="star s7" />
   <div className="star s8" />
   <div className="star s9" />
   <div className="star s1" />
   <div className="star s2" />
   <div className="star s3" />
   <div className="star s4" />
   <div className="star s5" />
   <div className="star s6" />
   <div className="star s7" />
   <div className="star s8" />
   <div className="star s9" />
   <div className="star s1" />
   <div className="star s2" />
   <div className="star s3" />
   <div className="star s4" />
   <div className="star s5" />
   <div className="star s6" />
   <div className="star s7" />
   <div className="star s8" />
   <div className="star s9" />
  </div>
 )
}

export default Stars;