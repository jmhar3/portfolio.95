import Clouds from '../background/Clouds.js';
import Stars from '../background/Stars.js';
import Moon from '../background/Moon.js';
import Links from './components/Links';
import Welcome from './components/windows/Welcome';
import Profile from './components/windows/Profile';
import Music from './components/windows/Music';
import MineSweeper from './components/windows/MineSweeper';
import Header from './components/Header.js';
import { useState } from 'react';
import '../styling/desktop.css';
import '../styling/header.css';
import '../styling/links.css';

const Desktop = ({isMobile}) => {
 const [muted, setMuted] = useState(false)
 const [windows, setWindows] = useState({
  welcome: {
   minimise: false,
   close: false
  },
  profile: {
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
     />}
    {!windows.profile.close &&
     <Profile
      windows={windows}
      setWindows={setWindows}
      tabs={tabs}
      setTabs={setTabs}
     />}
    {!windows.music.close &&
     <Music
      windows={windows}
      setWindows={setWindows}
      muted={muted}
      setMuted={setMuted}
     />}
    {!windows.minesweeper.close &&
     <MineSweeper
      windows={windows}
      setWindows={setWindows}
     />}
    <Header
     windows={windows}
     setWindows={setWindows}
     muted={muted}
     setMuted={setMuted}
     setTabs={setTabs}
    />
   </div>

   <Stars />
   <Clouds />
   <Moon />
  </>
 )
}

export default Desktop