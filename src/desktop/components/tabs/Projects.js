import notebook from '../../../images/notebook.png';
import globe from '../../../images/globe.png';
import computer from '../../../images/computer.png';

const Projects = ({ windows, setWindows }) => {
 return (
  <span className="row rev-border" id="projects">
   <div
    class="container clickable center column"
    onClick={() => setWindows({
     ...windows,
     dreamjournal: {
      minimise: false,
      close: false
     }
    })}
   >
    <img src={notebook} />
    <p class="hover_icon">DreamJournal</p>
   </div>
   <div
    class="container clickable center column"
    
    onClick={() => setWindows({
     ...windows,
     glasshouse: {
      minimise: false,
      close: false
     }
    })}
   >
    <img src={computer} />
    <p class="hover_icon">Glasshouse</p>
   </div>
   <div
    class="container clickable center column"
    onClick={() => setWindows({
     ...windows,
     apocalypto: {
      minimise: false,
      close: false
     }
    })}
   >
    <img src={globe} />
    <p class="hover_icon">Apocalypto</p>
   </div>
  </span>
 )
}

export default Projects;