import DropdownTab from './DropdownTab';

const ProgramsMenu = (props) => {
 const {
  programsMenu,
  setProgramsMenu
 } = props;

 return (
  <ul
   className={`${!programsMenu && "remove"} border clickable`}
   onMouseLeave={() => setProgramsMenu(false)}
  >
   <DropdownTab
   {...props}
   name="music"
   label="Music Player"
   />
   
   <DropdownTab
   {...props}
   name="minesweeper"
   label="MineSweeper"
   />
  </ul>
 )
}

export default ProgramsMenu;