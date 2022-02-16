import Desktop from './pages/Desktop'
import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import './App.css';
import './styling/general.css';
import './styling/desktop.css';
import Clouds from './components/background/Clouds.js';
import Stars from './components/background/Stars.js';
import Moon from './components/background/Moon.js';
import Waves from './components/background/Waves.js';

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Desktop />} />
   </Routes>
   <Stars />
   <Moon />
   <Clouds />
   {/* <Waves /> */}
  </BrowserRouter>
 );
}

export default App;
