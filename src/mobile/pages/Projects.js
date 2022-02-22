import '../../styling/mobile.css';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
 let navigate = useNavigate();

 const handlers = useSwipeable({
  onSwipedRight: () => navigate("/work"),
  onSwipedLeft: () => navigate("/about")
 });

 return (
  <span className="projects" {...handlers}>
   <p>I'm a Software Developer and UI designer currently working at HealthAide. When I'm not hard at work I'm cuddling with my dog, playing video games or (more often than not) a bit of both. In my off time I enjoy building and creating in many ways, from Lego and puzzles to coding my own fun little projects.</p>
  </span>
 )
}

export default Projects;