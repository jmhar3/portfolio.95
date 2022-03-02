const ProgramsMenu = ({
 programsMenu,
 setProgramsMenu,
 setStartMenu,
 setBringToFront,
 setWindows,
 windows,
 setAboutMenu
}) => {
 return (
  <ul
   className={`${!programsMenu && "remove"} border clickable`}
   onMouseLeave={() => setProgramsMenu(false)}
  >
   {/* <li
   onClick={() => {
    setStartMenu(false)
    setProgramsMenu(false)
    setBringToFront("music")
    setWindows({
     ...windows,
     music: {
      minimise: false,
      close: false
     }
    })
   }}
  >
   Music Player
  </li> */}

   <li
    className="row center clickable"
    onMouseEnter={() => setAboutMenu(false)}
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
    MineSweeper
   </li>
  </ul>
 )
}

export default ProgramsMenu;