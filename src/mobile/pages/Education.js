import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const Education = () => {
 let navigate = useNavigate();

 const handlers = useSwipeable({
  onSwipedRight: () => navigate("/skills"),
  onSwipedLeft: () => navigate("/work")
 });
 
 return (
  <div className="education app" {...handlers}>
   <div className="mobile-header row center">
    <Link to="/home" className="row center">
     <h2>{`<`}</h2>
     <h3>Home</h3>
    </Link>
    <h3>
     Education
    </h3>
   </div>
   <div className="education-body">
    <table className="education">
     <tr>
      <th>Title</th>
      <th>Institution</th>
      <th>Date</th>
     </tr>
     <tr>
      <td>Software Engineering</td>
      <td>Academy Xi</td>
      <td>Jul '21 - Dec '21</td>
     </tr>
     <tr>
      <td>Civil Engineering</td>
      <td>Griffith University</td>
      <td>Jun '13 - Dec '14</td>
     </tr>
    </table>
   </div>
  </div>

 )
}

export default Education;