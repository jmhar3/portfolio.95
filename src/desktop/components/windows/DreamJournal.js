import dreamJournal from '../../../images/dreamJournal.jpg';
import MarqueeBanner from '../MarqueeBanner';

const DreamJournal = () => {
 // const [maximise, setMaximise] = useState(false);

 return (
  <>
   <div className="url rev-border">
    <a
     href="https://github.com/jmhar3/DreamJournal_app/tree/master"
     target="_blank"
    >
     <h4>github.com/jmhar3/DreamJournal</h4>
    </a>
   </div>
   <div className="browser rev-border">
    {/* <iframe src="https://github.com/jmhar3/DreamJournal_app/tree/master"/> */}
    <img src={dreamJournal} />
    <MarqueeBanner github="https://github.com/jmhar3/DreamJournal_app/tree/master" languages="CSS JavaScript React Ruby Rails PostgreSQL" />
   </div>
  </>
 )
}

export default DreamJournal;