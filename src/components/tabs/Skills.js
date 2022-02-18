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
 return (
  <table className="skills">
  <tr>
    <th>Name</th>
    <th>Size</th>
    <th>Type</th>
  </tr>
  {skills.map(skill =>
  <tr>
    <td>{skill[0]}</td>
    <td>{skill[1]}</td>
    <td>{skill[2]}</td>
  </tr> )}
</table>
 )
}

export default Skills;