import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const Work = () => {
 let navigate = useNavigate();

 const handlers = useSwipeable({
  onSwipedRight: () => navigate("/education"),
  onSwipedLeft: () => navigate("/projects")
 });

 return (
  <div className="work app" {...handlers}>
   <div className="mobile-header row center">
    <Link to="/home" className="row center">
     <h2>{`<`}</h2>
     <h3>Home</h3>
    </Link>
    <h3>
     Work
    </h3>
   </div>
   <div className="work-body">
    <ul>
     <li>
      <Link to="/healthaide" className="row center">
       <span className="column">
        <h3>HealthAide</h3>
        <p>Software Developer | Jan '22 - Mar '22</p>
       </span>
       <h2>{`>`}</h2>
      </Link>
     </li>
     <li>
      <Link to="/lurey" className="row center">
       <span className="column">
        <h3>Lurey</h3>
        <p>Self Employed | July '15 - Dec '21</p>
       </span>
       <h2>{">"}</h2>
      </Link>
     </li>
    </ul>
   </div>
  </div>
 )
}

export default Work;