import ReactAudioPlayer from 'react-audio-player';
import lofi from '../../../music/lofi.ogg';
import { useState } from 'react';
import play from '../../../images/play.png';
import pause from '../../../images/pause.png';
import speed from '../../../images/speed.png';
import mute from '../../../images/heart.png';

const Music = ({
 muted
}) => {
 const [playing, setPlaying] = useState(true);
 const [duration, setDuration] = useState(3.41);
 const [current, setCurrent] = useState(2.18);

 // const removeDecimal = (value) => value.split(".").join(":")

 return (
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
 )
}

export default Music;