const WindowButtons = ({
 name,
 windows,
 setWindows,
 maximise,
 setMaximise
}) => {
 const maximisableWindow =
  name === "apocalypto" ||
  name === "glasshouse" ||
  name === "dreamjournal";

 return (
  <span className="row window-buttons">
   <button
    className="close-btn center"
    onClick={() => setWindows({
     ...windows,
     [name]: {
      minimise: true,
      close: false
     }
    })}
   >-</button>
   {maximisableWindow && <button
   className="close-btn center"
   onClick={() => setMaximise(!maximise)}
  >▭</button>}
   <button
    className="close-btn center"
    onClick={() => setWindows({
     ...windows,
     [name]: {
      minimise: false,
      close: true
     }
    })}
   >&times;</button>
  </span>
 )
}

export default WindowButtons;