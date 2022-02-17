import Links from '../components/Links';
import Welcome from '../components/windows/Welcome';
import Profile from '../components/windows/Profile';
import Music from '../components/windows/Music';
import Header from '../components/Header.js';
import { useState } from 'react';

const Desktop = () => {
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
  }
 })

 const [tabs, setTabs] = useState({
  about: false,
  skills: true,
  education: false
 })

 return (
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
   <Header
    windows={windows}
    setWindows={setWindows}
    muted={muted}
    setMuted={setMuted}
    setTabs={setTabs}
   />
  </div>
 )
}

export default Desktop