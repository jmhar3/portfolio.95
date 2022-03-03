const DropdownTab = ({
 setBringToFront,
 setWindows,
 windows,
 setSelectedTab,
 name,
 label
}) => {
 return (
  <li
   style={{ textTransform: 'capitalize' }}
   onClick={() => {
    setBringToFront(name)

    setWindows({
     ...windows,
     [name]: {
      minimise: false,
      close: false
     }
    })

    name === "profile" && setSelectedTab([label])
   }}
  >
   {label}
  </li>
 )
}

export default DropdownTab;