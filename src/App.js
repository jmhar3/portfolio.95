import Desktop from './pages/Desktop'
import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import './App.css';
import './styling/general.css';
import Clouds from './components/Clouds.js';
import Stars from './components/Stars.js';
import Moon from './components/Moon.js';
import Waves from './components/Waves.js';
import Header from './components/Header.js';

function App() {
 return (
  <BrowserRouter>
   <Stars />
   <Moon />
   <Clouds />
   {/* <Waves /> */}
   <Header />
   <Routes>
    <Route path="/" element={<Desktop />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
