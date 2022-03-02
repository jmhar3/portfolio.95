import ReactAudioPlayer from 'react-audio-player';
import Draggable from 'react-draggable';
import lofi from '../../../music/lofi.ogg';
import { useState, useEffect } from 'react';
import play from '../../../images/play.png';
import pause from '../../../images/pause.png';
import speed from '../../../images/speed.png';
import mute from '../../../images/heart.png';
import { randomNumber } from '../../../helpers/Helpers';
import WindowButtons from './WindowButtons';

const Music = ({
 windows,
 setWindows,
 muted,
 bringToFront,
 setBringToFront
}) => {
 const [playing, setPlaying] = useState(true);
 const [duration, setDuration] = useState(3.41);
 const [current, setCurrent] = useState(2.18);
 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(10, 30))
  setLeft(randomNumber(20, 60))
 }, [])

 // const removeDecimal = (value) => value.split(".").join(":")

 return (
  <Draggable handle=".music">
   <div
    className={`window border ${windows.music.minimise && "hidden"} ${(bringToFront === "music") && "bring-to-front"}`}
    id="music"
    onClick={() => setBringToFront("music")}
    style={{ top: `${top}vh`, left: `${left}vw` }}
   >
    <span className="window-header row music">
     <h4>MUSIC PLAYER</h4>
     <WindowButtons
      name="music"
      windows={windows}
      setWindows={setWindows} 
     />
    </span>
    <span className="window-body">
     <span className="column">
      <ReactAudioPlayer
       src={lofi}
       // controls={true}
       autoPlay={true}
       loop={true}
       muted={muted}
      />


      <audio id="audio">
       <source src={lofi} />
       Your browser does not support the <code>audio</code> element.
      </audio>

      <div className="audio-player">
       <h4>lofi_beats_to_study_to.mp3</h4>

       <span className="row center">
        <button id="rewind-icon">
         <img src={speed} />
        </button>

        <button id="play-pause"
         onClick={() => {
          setPlaying(!playing)
         }}
        >
         {playing ?
          <img src={pause} /> :
          <img src={play} />}
        </button>

        <button id="forward-icon">
         <img src={speed} style={{ transform: "rotate(180deg)" }} />
        </button>
       </span>

       <span className="row center">
        <span class="time">{current} / {duration}</span>
        <input
         type="range"
         id="seek-slider"
         className="clickable"
         max={duration}
         value={current}
         onChange={(e, newValue) => console.log(newValue)}
        />

        <img
         src={mute}
         id="mute-icon"
         className="clickable"
        />
        {/* <input type="range" id="volume-slider" max="100" value="100" /> */}
       </span>
      </div>
     </span>
    </span>
   </div>
  </Draggable>
 )
}

export default Music;