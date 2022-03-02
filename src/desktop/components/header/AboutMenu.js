const AboutMenu = ({
 windows,
 setWindows,
 setStartMenu,
 aboutMenu,
 setAboutMenu,
 setBringToFront,
 setTabs
}) => {
 return (
  <ul
   className={`${!aboutMenu && "remove"} border clickable`}
   onMouseLeave={() => setAboutMenu(false)}
  >
   <li
    onClick={() => {
     setStartMenu(false)
     setAboutMenu(false)
     setBringToFront("profile")
     setWindows({
      ...windows,
      profile: {
       minimise: false,
       close: false
      }
     })
     setTabs({
      about: true,
      skills: false,
      education: false,
      work: false,
      projects: false
     })
    }}
   >
    About
   </li>
   <li
    onClick={() => {
     setStartMenu(false)
     setAboutMenu(false)
     setBringToFront("profile")
     setWindows({
      ...windows,
      profile: {
       minimise: false,
       close: false
      }
     })
     setTabs({
      about: false,
      skills: true,
      education: false,
      work: false,
      projects: false
     })
    }}
   >
    Skills
   </li>
   <li
    onClick={() => {
     setStartMenu(false)
     setAboutMenu(false)
     setBringToFront("profile")
     setWindows({
      ...windows,
      profile: {
       minimise: false,
       close: false
      }
     })
     setTabs({
      about: false,
      skills: false,
      education: true,
      work: false,
      projects: false
     })
    }}
   >
    Education
   </li>
   <li
    onClick={() => {
     setStartMenu(false)
     setAboutMenu(false)
     setBringToFront("profile")
     setWindows({
      ...windows,
      profile: {
       minimise: false,
       close: false
      }
     })
     setTabs({
      about: false,
      skills: false,
      education: false,
      work: true,
      projects: false
     })
    }}
   >
    Work
   </li>
   <li
    onClick={() => {
     setStartMenu(false)
     setAboutMenu(false)
     setBringToFront("profile")
     setWindows({
      ...windows,
      profile: {
       minimise: false,
       close: false
      }
     })
     setTabs({
      about: false,
      skills: false,
      education: false,
      work: false,
      projects: true
     })
    }}
   >
    Projects
   </li>
  </ul>
 )
}

export default AboutMenu;