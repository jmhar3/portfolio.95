import Clouds from '../background/Clouds.js';
import Stars from '../background/Stars.js';
import Moon from '../background/Moon.js';
import Links from './components/Links';
import Window from './components/windows/Window';
import Welcome from './components/windows/Welcome';
import Profile from './components/windows/Profile';
import DreamJournal from './components/windows/DreamJournal';
import Glasshouse from './components/windows/Glasshouse';
import Apocalypto from './components/windows/Apocalypto';
import Contact from './components/windows/Contact';
import Resume from './components/windows/Resume';
import Music from './components/windows/Music';
import MineSweeper from './components/windows/MineSweeper';
import Header from './components/header/Header.js';
import { useState } from 'react';

const Desktop = ({ isMobile }) => {
 const [muted, setMuted] = useState(false);

 const [bringToFront, setBringToFront] = useState("welcome");

 const [windows, setWindows] = useState({
  welcome: {
   minimise: false,
   close: false
  },
  profile: {
   minimise: false,
   close: true
  },
  dreamjournal: {
   minimise: false,
   close: true
  },
  glasshouse: {
   minimise: false,
   close: true
  },
  apocalypto: {
   minimise: false,
   close: true
  },
  contact: {
   minimise: false,
   close: true
  },
  resume: {
   minimise: false,
   close: true
  },
  music: {
   minimise: true,
   close: false
  },
  minesweeper: {
   minimise: false,
   close: true
  }
 })

 const [selectedTab, setSelectedTab] = useState("about")

 const props = {
  windows: windows,
  setWindows: setWindows,
  bringToFront: bringToFront,
  setBringToFront: setBringToFront,
  muted: muted,
  setMuted: setMuted,
  selectedTab: selectedTab,
  setSelectedTab: setSelectedTab
 }

 return (
  <>
   <div id="desktop">
    <Links />

    <Header {...props} />

    {!windows.welcome.close &&
     <Window
      {...props}
      name="welcome"
      topValues={[5, 50]}
      leftValues={[15, 60]}
      body={<Welcome {...props} />}
     />}

    {!windows.profile.close &&
     <Window
      {...props}
      name="profile"
      topValues={[5, 15]}
      leftValues={[15, 50]}
      body={<Profile {...props} />}
     />}

    {!windows.dreamjournal.close &&
     <Window
      {...props}
      name="dreamjournal"
      topValues={[3, 6]}
      leftValues={[6, 30]}
      body={<DreamJournal />}
     />}

    {!windows.glasshouse.close &&
     <Window
      {...props}
      name="glasshouse"
      topValues={[3, 6]}
      leftValues={[6, 30]}
      body={<Glasshouse />}
     />}

    {!windows.apocalypto.close &&
     <Window
      {...props}
      name="apocalypto"
      topValues={[3, 6]}
      leftValues={[6, 30]}
      body={<Apocalypto />}
     />}

    {!windows.contact.close &&
     <Window
      {...props}
      name="contact"
      topValues={[10, 30]}
      leftValues={[10, 60]}
      body={<Contact />}
     />}

    {!windows.resume.close &&
     <Window
      {...props}
      name="resume"
      topValues={[3, 6]}
      leftValues={[6, 30]}
      body={<Resume />}
     />}

    {!windows.music.close &&
     <Window
      {...props}
      name="music"
      topValues={[10, 30]}
      leftValues={[20, 60]}
      body={<Music {...props} />}
     />
    }

    {!windows.minesweeper.close &&
     <Window
      {...props}
      name="minesweeper"
      topValues={[10, 30]}
      leftValues={[20, 60]}
      body={<MineSweeper />}
     />}
   </div>

   <Stars />
   <Clouds />
   <Moon />
  </>
 )
}

export default Desktop