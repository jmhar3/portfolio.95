import '../styling/links.css';
import about from '../images/id-card.png';
import skills from '../images/brain.png';
import education from '../images/ai.png';
import work from '../images/cpu.png';
import projects from '../images/city.png';
import music from '../images/cd.png';
import github from '../images/malware.png';
import blog from '../images/hacker.png';
import email from '../images/circuit.png';
import dreamJournal from '../images/coding.png';
import glassHouse from '../images/machine.png';
import apocalypto from '../images/sword.png';
import { Link } from "react-router-dom";
import Stars from '../background/Stars.js';

const Menu = () => {
 return (
  <>
   <nav id="menu" className="center column">
    <ul className="row">
     <li className="icon center">
      <Link to="/about">
       <img src={about} />
       <h5>About</h5>
      </Link>
     </li>
     <li className="icon center">
      <Link to="/skills">
       <img src={skills} />
       <h5>Skills</h5>
      </Link>
     </li>
     <li className="icon center">
      <Link to="/education">
       <img src={education} />
       <h5>Education</h5>
      </Link>
     </li>
     <li className="icon center">
      <Link to="/work">
       <img src={work} />
       <h5>Work</h5>
      </Link>
     </li>
     {/* <li className="icon center">
      <Link to="/projects">
       <img src={projects} />
       <h5>Projects</h5>
      </Link>
     </li> */}
     {/* <li className="icon center">
      <Link to="/music">
       <img src={music} />
       <h5>Music</h5>
      </Link>
     </li> */}
     <li className="icon center">
      <a
       href="https://github.com/jmhar3"
       target="_blank"
      >
       <img src={github} />
       <h5>Github</h5>
      </a>
     </li>
     <li className="icon center">
      <a
       href="https://medium.com/@jmhar"
       target="_blank"
      >
       <img src={blog} />
       <h5>Blog</h5>
      </a>
     </li>
     <li className="icon center">
      <a href="mailto:jmhar@protonmail.com" target="_blank">
       <img src={email} />
       <h5>Email</h5>
      </a>
     </li>
    </ul>

    {/* projects icons */}
    <ul className="row projects">
     <li className="icon center">
      <a
       href="https://github.com/jmhar3/DreamJournal_app/tree/master"
       target="_blank"
      >
       <img src={dreamJournal} />
       <h5>DreamJournal</h5>
      </a>
     </li>
     <li className="icon center">
      <a
       href="https://github.com/jmhar3/glasshouse"
       target="_blank"
      >
       <img src={glassHouse} />
       <h5>Glasshouse</h5>
      </a>
     </li>
     <li className="icon center">
      <a
       href="https://github.com/jmhar3/apocalypto"
       target="_blank"
      >
       <img src={apocalypto} />
       <h5>Apocalypto</h5>
      </a>
     </li>
    </ul>
   </nav>

   <Stars />
  </>
 )
}

export default Menu