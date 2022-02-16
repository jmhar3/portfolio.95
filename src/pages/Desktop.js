import Links from '../components/Links';
import Welcome from '../components/Welcome';
import Header from '../components/Header.js';
import { useState } from 'react';

const Desktop = () => {
 const [windows, setWindows] = useState({
  welcome: {
   minimise: false,
   close: false
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
   <Header
    windows={windows}
    setWindows={setWindows}
   />
  </div>
 )
}

export default Desktop