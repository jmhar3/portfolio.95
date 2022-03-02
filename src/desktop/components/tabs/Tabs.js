const Tabs = ({ tabs, setTabs }) => {
 const tab = (name) => {
  return (
   <li
    className={`tab ${tabs[name] && "selected-tab"}`}
    onClick={() => setTabs({
     ...Object.keys(tabs).forEach(v => tabs[v] = false),
     [name]: true
    })}
    style={{textTransform: 'capitalize'}}
   >
    {name}
   </li>
  )
 }

 return (
  <ul className="row tabs clickable">
   {tab("about")}
   {tab("skills")}
   {tab("education")}
   {tab("work")}
   {tab("projects")}
  </ul>
 )
}

export default Tabs;