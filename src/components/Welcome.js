import computer from '../images/computer.png'

const Welcome = () => {
 return (
  <div class="window">
   <span>
    <h4>Welcome</h4>
    <span class="close-btn">&times;</span>
   </span>
   <span>
    <span>
     <img src={computer} alt="computer" />
    </span>
   </span>
  </div>
 )
}

export default Welcome;