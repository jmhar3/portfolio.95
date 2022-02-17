import computer from '../../images/computer.png';
import Draggable from 'react-draggable';

const Welcome = ({ windows, setWindows }) => {
 return (
  <Draggable handle=".welcome">
   <div
    className={`window border ${windows.welcome.minimise && "hidden"}`}
    id="welcome"
   >
    <span className="window-header row welcome">
     <h4>WELCOME</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        welcome: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        welcome: {
         minimise: false,
         close: true
        }
       })}
      >&times;</button>
     </span>
    </span>
    <span className="window-body">
     <span className="row center">
      <img src={computer} alt="computer" />
      <span className="column">
       {/* <h5>My name is Jessica Harriman</h5> */}
       <p>Hi, my name is Jessica Harriman.</p>
      </span>
     </span>
     <button
      onClick={() => setWindows({
       ...windows,
       welcome: {
        minimise: false,
        close: true
       },
       profile: {
        minimise: false,
        close: false
       }})}>
        Learn More
     </button>
   </span>
  </div>
  </Draggable >
 )
}

export default Welcome;