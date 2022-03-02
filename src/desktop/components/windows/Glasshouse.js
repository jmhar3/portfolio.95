import MarqueeBanner from '../MarqueeBanner';

const Glasshouse = () => {
 // const [maximise, setMaximise] = useState(false);

 return (
  <>
   <div className="url rev-border">
    <a
     href="https://github.com/jmhar3/glasshouse"
     target="_blank"
    >
     <h4>jmhar3.github.io/glasshouse</h4>
    </a>
   </div>
   <div className="browser rev-border">
    <iframe src="https://jmhar3.github.io/glasshouse/" />
    <MarqueeBanner github="https://github.com/jmhar3/glasshouse" languages="CSS JavaScript React AWS Firebase" />
   </div>
  </>
 )
}

export default Glasshouse;