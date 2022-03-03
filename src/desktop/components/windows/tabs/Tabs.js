const Tabs = ({ selectedTab, setSelectedTab }) => {
 const tab = (name) => {
  return (
   <li
    className={`tab ${selectedTab === name && "selected-tab"}`}
    onClick={() => setSelectedTab(name)}
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