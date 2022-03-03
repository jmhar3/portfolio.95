import Typewriter from 'typewriter-effect';
import Window from './Window';

const Welcome = ({
 windows,
 setWindows,
 setSelectedTab,
 selectedTab
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
     setSelectedTab("about")
    }}>
    Learn More
   </button>
  </>
 )
}

export default Welcome;