import computer from '../../../../images/computer.png'

const About = () => {
 return (
  <div id="about">
   <span className="row center">
    <img src={computer} />
    <span className="column">
     <h4>Jessica Harriman</h4>
     <h5>Software Engineer + UI Designer</h5>
    </span>
   </span>
   <div className="rev-border">
    <p>From the moment I started learning to code I was drawn to the possibilities these skills opened up to me. I'm so fascinated
     with being able to create anything I put my mind to. Although I'm just getting started, I love constantly improving and growing
     my skills, regularly seeking extra challenges so I can learn and grow even more. I don't like setting my
     limits by my knowledge but rather aspiring to things that interest me and learning what I have to to get it done.</p>
    <p>When I'm not hard at work I'm cuddling with my dog, playing video games or (more often than not) a bit of both. In my off time I enjoy building and creating in many ways, from Lego and puzzles to coding my own fun little projects.</p>
   </div>
  </div>
 )
}

export default About;