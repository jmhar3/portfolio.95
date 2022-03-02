const NavTab = ({
 name,
 windows,
 setWindows,
 bringToFront,
 setBringToFront
}) => {
 return (
  <button
   className="border"
   style={{ textTransform: 'capitalize'}}
   onClick={() => {
    (bringToFront === name && !windows[name].minimise || windows[name].minimise) &&
     setWindows({
      ...windows,
      [name]: {
       minimise: !windows[name].minimise,
       close: false
      }
     })
    setBringToFront(name)
   }}
  >
   {name}
  </button>
 )
}

export default NavTab;