import ReactAudioPlayer from 'react-audio-player';
import Draggable from 'react-draggable';
import lofi from '../../music/lofi.ogg';

const Music = ({ windows, setWindows, muted }) => {
 return (
  <Draggable handle=".profile">
   <div
    className={`window border ${windows.music.minimise && "hidden"}`}
    id="profile"
   >
    <span className="window-header row profile">
     <h4>MUSIC PLAYER</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        music: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        music: {
         minimise: false,
         close: true
        }
       })}
      >&times;</button>
     </span>
    </span>
    <span className="window-body">
     <ReactAudioPlayer
      src={lofi}
      autoPlay={true}
      controls={true}
      loop={true}
      muted={muted}
     />
    </span>
   </div>
  </Draggable>
 )
}

export default Music;