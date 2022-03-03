import StartTab from './StartTab';

const StartMenu = (props) => {
 const { startMenu } = props

 return (
  <ul
   className={`${!startMenu && "hidden"} border start-menu`}
  >
   <StartTab
    {...props}
    clickable={false}
    name="about"
    label="Profile"
   />

   {/* <StartTab
    {...props}
    clickable={true}
    name="resume"
    label="Resume"
   />

   <StartTab
    {...props}
    clickable={false}
    name="programs"
    label="Programs"
   /> */}

   <StartTab
    {...props}
    clickable={true}
    name="minesweeper"
    label="MineSweeper"
   />

   <StartTab
    {...props}
    clickable={true}
    name="welcome"
    label="Run"
   />
  </ul>
 )
}

export default StartMenu;