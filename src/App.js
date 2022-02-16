import Desktop from './pages/Desktop'
import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import './App.css';
import './styling/general.css';
import './styling/desktop.css';
import Clouds from './components/Clouds.js';
import Stars from './components/Stars.js';
import Moon from './components/Moon.js';
import Waves from './components/Waves.js';

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
