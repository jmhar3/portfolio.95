import Marquee from "react-fast-marquee";

const MarqueeBanner = ({ github, languages }) => {
 return (
  <Marquee gradient={false}>
   <h4>
    {Array(30).fill("").map(() =>
     <>
      <a
       href={github}
       target="_blank"
      >
       GitHub
      </a>
      {` • Built with ${languages} • `}
     </>
    )}
   </h4>
  </Marquee>
 )
}

export default MarqueeBanner;