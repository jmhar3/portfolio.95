import computer from '../images/computer.png';
import Draggable from 'react-draggable';

const Welcome = () => {
 return (
  <Draggable>
   <div class="window">
    <span className="row">
     <h4>JESSICA HARRIMAN</h4>
     <span class="close-btn">&times;</span>
    </span>
    <span>
     <span className="row">
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