import computer from '../images/computer.png';
import Draggable from 'react-draggable';

const Welcome = () => {
 return (
  <Draggable
  handle=".welcome"
  >
   <div className="window border">
    <span className="window-header row welcome">
     <h4>JESSICA HARRIMAN</h4>
     <button class="close-btn center">&times;</button>
    </span>
    <span className="window-body">
     <span className="row center">
      <img src={computer} alt="computer" />
      <span className="column">
       {/* <h5>My name is Jessica Harriman</h5> */}
       <p>Welcome to my portfolio.</p>
      </span>
     </span>
     <button>Enter</button>
    </span>
   </div>
  </Draggable>
 )
}

export default Welcome;