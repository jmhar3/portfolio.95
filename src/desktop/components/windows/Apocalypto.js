import apocalypto from '../../../images/apocalypto.jpg';
import MarqueeBanner from "../MarqueeBanner";

const Apocalypto = () => {
 return (
  <>
   <div className="url rev-border">
    <a
     href="https://github.com/jmhar3/apocalypto"
     target="_blank"
    >
     <h4>github.com/jmhar3/apocalypto</h4>
    </a>
   </div>
   <div className="browser rev-border">
    {/* <iframe src="https://github.com/jmhar3/apocalypto"/> */}
    <img src={apocalypto} />
    <MarqueeBanner github="https://github.com/jmhar3/apocalypto" languages="Ruby" />
   </div>
  </>
 )
}

export default Apocalypto;