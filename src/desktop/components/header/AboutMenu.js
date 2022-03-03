import DropdownTab from './DropdownTab';

const AboutMenu = (props) => {
 const {
  aboutMenu,
  setAboutMenu
 } = props;

 return (
  <ul
   className={`${!aboutMenu && "remove"} border clickable`}
   onMouseLeave={() => setAboutMenu(false)}
  >
   <DropdownTab
    {...props}
    name="profile"
    label="about"
   />

   <DropdownTab
    {...props}
    name="profile"
    label="skills"
   />

   <DropdownTab
    {...props}
    name="profile"
    label="education"
   />

   <DropdownTab
    {...props}
    name="profile"
    label="work"
   />

   <DropdownTab
    {...props}
    name="profile"
    label="projects"
   />
  </ul>
 )
}

export default AboutMenu;