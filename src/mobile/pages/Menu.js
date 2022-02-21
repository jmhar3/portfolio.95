import { useState } from 'react';
import '../../styling/mobile.css';
import '../../styling/links.css';
import about from '../../images/heart.png';
import skills from '../../images/email.png';
import education from '../../images/globe.png';
import work from '../../images/computer.png';
import projects from '../../images/heart.png';
import music from '../../images/globe.png';
import github from '../../images/computer.png';
import blog from '../../images/notebook.png';
import email from '../../images/email.png';
import dreamJournal from '../../images/notebook.png';
import glassHouse from '../../images/heart.png';
import apocalypto from '../../images/globe.png';
import { Link } from "react-router-dom";

const Desktop = () => {
 const [muted, setMuted] = useState(false)
 const [windows, setWindows] = useState({
  welcome: {
   minimise: false,
   close: false
  },
  profile: {
   minimise: false,
   close: true
  },
  music: {
   minimise: true,
   close: false
  },
  minesweeper: {
   minimise: false,
   close: true
  }
 })

 const [tabs, setTabs] = useState({
  about: true,
  skills: false,
  education: false,
  work: false,
  projects: false
 })

 return (
  <nav id="menu" className="center column">
   <ul className="row">
    <li className="icon">
     <Link to="/about">
      <img src={about} />
      <h5>About</h5>
     </Link>
    </li>
    <li className="icon">
     <Link to="/skills">
      <img src={skills} />
      <h5>Skills</h5>
     </Link>
    </li>
    <li className="icon">
     <Link to="/education">
      <img src={education} />
      <h5>Education</h5>
     </Link>
    </li>
   </ul>
   <ul className="row">
    <li className="icon">
     <Link to="/work">
      <img src={work} />
      <h5>Work</h5>
     </Link>
    </li>
    <li className="icon">
     <Link to="/projects">
      <img src={projects} />
      <h5>Projects</h5>
     </Link>
    </li>
    <li className="icon">
     <Link to="/music">
      <img src={music} />
      <h5>Music</h5>
     </Link>
    </li>
   </ul>
   <ul className="row">
    <li className="icon">
     <a
      href="https://github.com/jmhar3"
      target="_blank"
     >
      <img src={github} />
      <h5>Github</h5>
     </a>
    </li>
    <li className="icon">
     <a
      href="https://medium.com/@jmhar"
      target="_blank"
     >
      <img src={blog} />
      <h5>Blog</h5>
     </a>
    </li>
    <li className="icon">
     <a href="mailto:jmhar@protonmail.com" target="_blank">
      <img src={email} />
      <h5>Email</h5>
     </a>
    </li>
   </ul>

   {/* projects icons */}
   <ul className="row projects">
    <li className="icon">
     <a
      href="https://github.com/jmhar3"
      target="_blank"
     >
      <img src={dreamJournal} />
      <h5>DreamJournal</h5>
     </a>
    </li>
    <li className="icon">
     <a
      href="https://github.com/jmhar3"
      target="_blank"
     >
      <img src={glassHouse} />
      <h5>Glasshouse</h5>
     </a>
    </li>
    <li className="icon">
     <a
      href="https://github.com/jmhar3"
      target="_blank"
     >
      <img src={apocalypto} />
      <h5>Apocalypto</h5>
     </a>
    </li>
   </ul>
  </nav>
 )
}

export default Desktop