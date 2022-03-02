import Typewriter from 'typewriter-effect';
import Window from './Window';

const Welcome = ({
 windows,
 setWindows,
 setTabs,
 tabs
}) => {
 return (
  <>
   <span className="row center intro">
    {/* <img src={computer} alt="computer" /> */}
    <span className="column">
     <h4><Typewriter
      onInit={(typewriter) => {
       typewriter.typeString("Hi, my name's Jessica")
        .start();
      }}
     /></h4>
    </span>
   </span>
   <button
    onClick={() => {
     setWindows({
      ...windows,
      welcome: {
       minimise: false,
       close: true
      },
      profile: {
       minimise: false,
       close: false
      }
     })
     setTabs({
      ...Object.keys(tabs).forEach(v => tabs[v] = false),
      about: true
     })
    }}>
    Learn More
   </button>
  </>
 )
}

export default Welcome;