import computer from '../../images/computer.png';
import Draggable from 'react-draggable';

const Welcome = ({ windows, setWindows }) => {
 return (
  <Draggable handle=".profile">
   <div
    className={`window border ${windows.profile.minimise && "hidden"}`}
    id="profile"
   >
    <span className="window-header row profile">
     <h4>PROFILE</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        profile: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        profile: {
         minimise: false,
         close: true
        }
       })}
      >&times;</button>
     </span>
    </span>
    <span className="window-body">
     <p>I'm a Software Developer and UI designer currently working at HealthAide. When I'm not hard at work I'm cuddling with my dog, playing video games or (more often than not) a bit of both. In my off time I enjoy building and creating in many ways, from Lego and puzzles to coding my own fun little projects.</p>
    </span>
   </div>
  </Draggable>
 )
}

export default Welcome;