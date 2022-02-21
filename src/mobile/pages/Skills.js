import '../../styling/mobile.css';
import { Link } from "react-router-dom";

const Skills = () => {
 const skills = [
  ["CSS", "360 KB", "Front End"],
  ["Javascript", "390 KB", "Front End"],
  ["React", "360 KB", "Front End"],
  ["Redux", "300 KB", "Front End"],
  ["Ruby", "240 KB", "Back End"],
  ["Rails", "210 KB", "Back End"],
  ["PostgreSQL", "330 KB", "Database"],
  ["Mongo", "300 KB", "Database"],
  ["Node", "180 KB", "Back End"],
  ["Express", "180 KB", "Back End"]
 ]

 const renderSkill = (skill) => {
  return (
   <li className="row center">
    <h5>{skill[0]}</h5>
    <p>{skill[1]}</p>
   </li>
  )
 }

 return (
  <div className="skills">
   <div className="skills-header row center">
    <Link to="/home" className="row center">
     <h2>{`<`}</h2>
     <h3>Home</h3>
    </Link>
    <h3>
     Skills
    </h3>
   </div>
   <div className="skills-body">
    <ul>
     {skills.filter(skill => skill[2] === "Front End")
      .map(skill => renderSkill(skill))}
    </ul>
    <ul>
     {skills.filter(skill => skill[2] === "Back End")
      .map(skill => renderSkill(skill))}
    </ul>
    <ul>
     {skills.filter(skill => skill[2] === "Database")
      .map(skill => renderSkill(skill))}
    </ul>
   </div>
  </div>
 )
}

export default Skills;