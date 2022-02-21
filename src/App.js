import Desktop from './desktop/Desktop';
import Mobile from './mobile/pages/Mobile';
import Menu from './mobile/pages/Menu';
import About from './mobile/pages/About';
import Education from './mobile/pages/Education';
import Music from './mobile/pages/Music';
import Projects from './mobile/pages/Projects';
import Skills from './mobile/pages/Skills';
import Work from './mobile/pages/Work';
import { useState, useEffect } from 'react';
import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import './App.css';
import Clouds from './background/Clouds.js';
import Stars from './background/Stars.js';
import Moon from './background/Moon.js';
import Waves from './background/Waves.js';

function App() {
 const [isMobile, setIsMobile] = useState(true);

 useEffect(() => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   setIsMobile(true)
  }
 })

 return (
  <BrowserRouter>
   {isMobile ?
   <Routes>
    <Route path="/" element={<Mobile />} />
    <Route path="home" element={<Menu />} />
    <Route path="about" element={<About />} />
    <Route path="skills" element={<Skills />} />
    <Route path="education" element={<Education />} />
    <Route path="work" element={<Work />} />
    <Route path="music" element={<Music />} />
    <Route path="projects" element={<Projects />} />
   </Routes> :
   <Routes>
   <Route path="/" element={<Desktop />} />
  </Routes>}
   <Stars />
   <Clouds />
   {!isMobile && <Moon />}
   {/* <Waves /> */}
  </BrowserRouter>
 );
}

export default App;
