import computer from '../../../images/computer.png';

const StartTab = ({
 setStartMenu,
 setAboutMenu,
 setProgramsMenu,
 setWindows,
 setBringToFront,
 windows,
 clickable,
 name,
 label
}) => {
 return (
  <li
   onMouseEnter={() => {
    setAboutMenu(name === "about")
    setProgramsMenu(name === "programs")
   }}
   className={`row center ${clickable && "clickable"}`}
   onClick={() => {
    if (clickable) {
     setStartMenu(false)
     setBringToFront(name)
     setWindows({
      ...windows,
      [name]: {
       minimise: false,
       close: false
      }
     })
    }
   }}
  >
   <span className="row center">
    <img src={computer} />
    {label}
   </span>
   {!clickable && "►"}
  </li>
 )
}

export default StartTab;