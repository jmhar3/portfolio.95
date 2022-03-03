const DropdownTab = ({
 setStartMenu,
 setAboutMenu,
 setProgramsMenu,
 setBringToFront,
 setWindows,
 windows,
 setTabs,
 tabs,
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
     setTabs({
      ...Object.keys(tabs).forEach(v => tabs[v] = false),
      [label]: true
     })
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