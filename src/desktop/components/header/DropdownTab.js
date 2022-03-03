const DropdownTab = ({
 setStartMenu,
 setAboutMenu,
 setProgramsMenu,
 setBringToFront,
 setWindows,
 windows,
 setSelectedTab,
 selectedTab,
 name,
 label
}) => {
 return (
  <li
   style={{ textTransform: 'capitalize' }}
   onClick={() => {
    setStartMenu(false)
    setBringToFront(name)

    setWindows({
     ...windows,
     [name]: {
      minimise: false,
      close: false
     }
    })

    if (name === "profile") {
     setAboutMenu(false)
     setSelectedTab([label])
    } else {
     setProgramsMenu(false)
    }
   }}
  >
   {label}
  </li>
 )
}

export default DropdownTab;