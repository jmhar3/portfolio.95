import computer from '../../../images/computer.png';

const StartMenu = ({
 windows,
 setWindows,
 startMenu,
 setStartMenu,
 setProgramsMenu,
 setAboutMenu,
 setBringToFront
}) => {
 return (
  <ul
   className={`${!startMenu && "hidden"} border start-menu`}
  >

   <li
    className="row center"
    onMouseEnter={() => {
     setAboutMenu(true)
     setProgramsMenu(false)
    }}>
    <span className="row center">
     <img src={computer} />
     Profile
    </span>
    ►
   </li>

   {/* <li
      className="row center clickable"
      onMouseEnter={() => {
       setAboutMenu(false)
      }}
      onClick={() => {
       setStartMenu(false)
       setBringToFront("resume")
       setWindows({
        ...windows,
        resume: {
         minimise: false,
         close: false
        }
       })
      }}
     >
      <span className="row center">
       <img src={computer} />
       Resume
      </span>
     </li> */}

   {/* <li
      className="row center"
      onMouseEnter={() => {
       setAboutMenu(false)
       setProgramsMenu(true)
      }}>
      <span className="row center">
       <img src={computer} />
       Programs
      </span>
      ►
     </li> */}

   <li
    className="row center clickable"
    onClick={() => {
     setStartMenu(false)
     setBringToFront("minesweeper")
     setWindows({
      ...windows,
      minesweeper: {
       minimise: false,
       close: false
      }
     })
    }}
   >
    <span className="row center">
     <img src={computer} />
     MineSweeper
    </span>
   </li>

   <li
    onMouseEnter={() => {
     setAboutMenu(false)
     setProgramsMenu(false)
    }}
    className="row center clickable"
    onClick={() => {
     setStartMenu(false)
     setBringToFront("welcome")
     setWindows({
      ...windows,
      welcome: {
       minimise: false,
       close: false
      }
     })
    }}
   >
    <span className="row center">
     <img src={computer} />
     <span>
      Run
     </span>
    </span>
   </li>
  </ul>
 )
}

export default StartMenu;