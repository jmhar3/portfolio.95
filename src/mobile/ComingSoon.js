import github from '../images/github-cs.png';
import email from '../images/email-cs.png';
import linkedin from '../images/linkedin-cs.png';

const ComingSoon = () => {
 return (
  <div id="coming-soon" className="column center" style={{height: '100vh'}}>
   <h3 style={{color: 'black'}}>Portfolio.95 mobile edition coming soon</h3>
   <span className="row center">
    <div class="container">
     <a href="https://www.linkedin.com/in/jessica-harriman-a2a249217/" target="_blank"><img style={{width: '69px'}} src={linkedin} /></a>
    </div>
    <div class="container">
     <a href="https://github.com/jmhar3" target="_blank">
      <img style={{width: '69px'}} src={github} />
     </a>
    </div>
    <div class="container">
     <a href="mailto:jmhar@protonmail.com" target="_blank">
      <img style={{width: '69px'}} src={email} />
     </a>
    </div>
   </span>
  </div>
 )
}

export default ComingSoon;