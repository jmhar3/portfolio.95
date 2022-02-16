import Links from '../components/Links';
import Welcome from '../components/windows/Welcome';
import Profile from '../components/windows/Profile';
import Header from '../components/Header.js';
import { useState } from 'react';

const Desktop = () => {
 const [windows, setWindows] = useState({
  welcome: {
   minimise: false,
   close: false
  },
  profile: {
   minimise: false,
   close: true
  }
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
    />}
   <Header
    windows={windows}
    setWindows={setWindows}
   />
  </div>
 )
}

export default Desktop