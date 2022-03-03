import notebook from '../../../../images/notebook.png';
import globe from '../../../../images/globe.png';
import computer from '../../../../images/computer.png';
// import { setTimeout } from 'react';

const Projects = ({
 windows,
 setWindows,
 setBringToFront
}) => {
 return (
  <span className="row rev-border" id="projects">
   <div
    class="container clickable center column"
    onClick={() => {
     setTimeout(() => {
      setBringToFront("dreamjournal")
     }, 1);
     setWindows({
      ...windows,
      dreamjournal: {
       minimise: false,
       close: false
      }
     })
    }}
   >
    <img src={notebook} />
    <p class="hover_icon">DreamJournal</p>
   </div>
   <div
    class="container clickable center column"
    onClick={() => {
     setTimeout(() => {
      setBringToFront("glasshouse")
     }, 1);
     setWindows({
      ...windows,
      glasshouse: {
       minimise: false,
       close: false
      }
     })
    }}
   >
    <img src={computer} />
    <p class="hover_icon">Glasshouse</p>
   </div>
   <div
    class="container clickable center column"
    onClick={() => {
     setTimeout(() => {
      setBringToFront("apocalypto")
     }, 1);
     setWindows({
      ...windows,
      apocalypto: {
       minimise: false,
       close: false
      }
     })
    }}
   >
    <img src={globe} />
    <p class="hover_icon">Apocalypto</p>
   </div>
  </span>
 )
}

export default Projects;