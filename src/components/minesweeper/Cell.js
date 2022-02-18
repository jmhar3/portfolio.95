import React from 'react'

export default function Cell({ details, updateFlag, revealcell }) {
 const style = {
  cellStyle: {
   width: 15,
   height: 15,
   backgroundColor: details.revealed && details.value !== 0 ? details.value === 'X' ? 'red' : ' rgb(246, 236, 255)' : details.revealed && details.value === 0 ? 'rgb(246, 236, 255)' : 'rgb(246, 236, 255)',
   fontSize: '12px',
   color: '#55036b',
   fontWeight: '1000'
  },
 }

 // Playing Sound on differents Clicks

 const click = () => {
  if (details.value === 'X') {
  } else {
  }
  // calling revealcell for specific cell x and y
  revealcell(details.x, details.y);
 }

 // Right Click Function

 const rightclick = (e) => {
  updateFlag(e, details.x, details.y)
 }
 // rendering the cell component and showing the different values on right and left clicks 

 return (
  <div
   style={style.cellStyle}
   onClick={click}
   onContextMenu={rightclick}
   className="border center"
  >
   {!details.revealed && details.flagged ? (
    "🚩"
   ) : details.revealed && details.value !== 0 ? (
    details.value === "X" ? (
     "💣"
    ) : (
     details.value
    )
   ) : (
    ""
   )}
  </div>
 )
}
