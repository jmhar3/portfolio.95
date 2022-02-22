import '../../styling/mobile.css';
import { Link } from "react-router-dom";

const HealthAide = () => {
 return (
  <div className="app">
   <div className="mobile-header row center">
    <Link to="/work" className="row center">
     <h2>{`<`}</h2>
     <h3>Work</h3>
    </Link>
    <h3>
     HealthAide
    </h3>
   </div>
   <div className="wi-body">
    <ul>
     <li>
      <span>
       Hello
      </span>
     </li>
     <li>
      <span>
       World
      </span>
     </li>
    </ul>
   </div>
  </div>
 )
}

export default HealthAide;