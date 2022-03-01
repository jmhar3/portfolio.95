import Clouds from '../background/Clouds.js';
import Stars from '../background/Stars.js';
import Moon from '../background/Moon.js';
import Links from './components/Links';
import Welcome from './components/windows/Welcome';
import Profile from './components/windows/Profile';
import DreamJournal from './components/windows/DreamJournal';
import Glasshouse from './components/windows/Glasshouse';
import Apocalypto from './components/windows/Apocalypto';
import Contact from './components/windows/Contact';
import Music from './components/windows/Music';
import MineSweeper from './components/windows/MineSweeper';
import Header from './components/Header.js';
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
  music: {
   minimise: true,
   close: false
  },
  minesweeper: {
   minimise: false,
   close: true
  }
 })

 const [tabs, setTabs] = useState({
  about: true,
  skills: false,
  education: false,
  work: false,
  projects: false
 })

 return (
  <>
   <div id="desktop">
    <Links />
    {!windows.welcome.close &&
     <Welcome
      windows={windows}
      setWindows={setWindows}
      bringToFront={bringToFront}
      setBringToFront={setBringToFront}
     />}
    {!windows.profile.close &&
     <Profile
      windows={windows}
      setWindows={setWindows}
      tabs={tabs}
      setTabs={setTabs}
      bringToFront={bringToFront}
      setBringToFront={setBringToFront}
     />}
    {!windows.dreamjournal.close &&
     <DreamJournal
      windows={windows}
      setWindows={setWindows}
      bringToFront={bringToFront}
      setBringToFront={setBringToFront}
     />}
    {!windows.glasshouse.close &&
     <Glasshouse
      windows={windows}
      setWindows={setWindows}
      bringToFront={bringToFront}
      setBringToFront={setBringToFront}
     />}
    {!windows.apocalypto.close &&
     <Apocalypto
      windows={windows}
      setWindows={setWindows}
      bringToFront={bringToFront}
      setBringToFront={setBringToFront}
     />}
     {!windows.contact.close &&
      <Contact
       windows={windows}
       setWindows={setWindows}
       bringToFront={bringToFront}
       setBringToFront={setBringToFront}
      />}
    {/* {!windows.music.close &&
     <Music
      windows={windows}
      setWindows={setWindows}
      muted={muted}
      setMuted={setMuted}
     />} */}
    {!windows.minesweeper.close &&
     <MineSweeper
      windows={windows}
      setWindows={setWindows}
      bringToFront={bringToFront}
      setBringToFront={setBringToFront}
     />}
    <Header
     windows={windows}
     setWindows={setWindows}
     muted={muted}
     setMuted={setMuted}
     setTabs={setTabs}
     bringToFront={bringToFront}
     setBringToFront={setBringToFront}
    />
   </div>

   <Stars />
   <Clouds />
   <Moon />
  </>
 )
}

export default Desktop