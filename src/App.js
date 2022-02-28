import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';
import Menu from './mobile/Menu';
import About from './mobile/pages/About';
import Education from './mobile/pages/Education';
import Music from './mobile/pages/Music';
import Projects from './mobile/pages/Projects';
import Skills from './mobile/pages/Skills';
import Work from './mobile/pages/Work';
import HealthAide from './mobile/pages/HealthAide';
import Lurey from './mobile/pages/Lurey';
import { useState, useEffect } from 'react';
import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import './App.css';
import './styling/desktop.css';
import './styling/header.css';
import './styling/links.css';
import './styling/mobile.css';
import { ToastContainer } from 'react-toastify';

function App() {
 const [isMobile, setIsMobile] = useState(true);

 useEffect(() => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   setIsMobile(true)
  }
 })

 return (
  <BrowserRouter basename='/portfolio.95'>
  <ToastContainer
   closeOnClick={true}
   draggable={false}
   hideProgressBar={true}
   position="top-center"
   autoClose={500000000}
  />
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
    <Route path="healthAide" element={<HealthAide />} />
    <Route path="lurey" element={<Lurey />} />
   </Routes> :
   <Routes>
   <Route path="/" element={<Desktop />} />
  </Routes>}
  </BrowserRouter>
 );
}

export default App;
