import Draggable from 'react-draggable';
import { useState, useEffect } from 'react';
import { randomNumber } from '../../../Helpers';

const Contact = ({
 windows,
 setWindows,
 bringToFront,
 setBringToFront
}) => {
 const [top, setTop] = useState(0);
 const [left, setLeft] = useState(0);

 useEffect(() => {
  setTop(randomNumber(10, 30))
  setLeft(randomNumber(10, 50))
 }, [])

 const [submitted, setSubmitted] = useState(false)
 const [values, setValues] = useState({
  sender: "",
  subject: "",
  message: ""
 });

 const sendMessage = (e) => {
  e.preventDefault();
  console.log(values);

  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 10000);
 }

 useEffect(() => {setSubmitted(false)}, [])

 return (
  <Draggable handle=".contact">
   <div
    className={
     `window border
     ${windows.contact.minimise && "hidden"}
     ${(bringToFront === "contact") && "bring-to-front"}`
    }
    id="contact"
    onClick={() => setBringToFront("contact")}
    style={{ top: `${top}vh`, left: `${left}vw` }}
   >
    <span className="window-header row contact">
     <h4>CONTACT</h4>
     <span className="row window-buttons">
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        contact: {
         minimise: true,
         close: false
        }
       })}
      >-</button>
      <button
       className="close-btn center"
       onClick={() => setWindows({
        ...windows,
        contact: {
         minimise: false,
         close: true
        }
       })}
      >&times;</button>
     </span>
    </span>
    <span
     className="window-body"
    >
     {submitted ?
      <>
       <h3>Thank you!</h3>
       <h4>I'll be in touch soon!</h4>
      </> :
      <form
       className="column"
       onSubmit={sendMessage}
      >
       <div className="row center">
        <h5>To:</h5>
        <a
         href="mailto:jmhar@protonmail.com"
         target="_blank"
         className="rev-border"
        >
         jmhar@protonmail.com
        </a>
       </div>
       <div className="row center">
        <h5>From:</h5>
        <input
         type="text"
         name="sender"
         className="rev-border"
         value={values.sender}
         onChange={(e) => setValues({
          ...values,
          sender: e.target.value
         })}
        />
       </div>
       <div className="row center">
        <h5>Subject:</h5>
        <input
         type="text"
         name="subject"
         className="rev-border"
         value={values.subject}
         onChange={(e) => setValues({
          ...values,
          subject: e.target.value
         })}
        />
       </div>
       <div className="column center">
        <textarea
         name="message"
         className="rev-border"
         value={values.message}
         onChange={(e) => setValues({
          ...values,
          message: e.target.value
         })}
        />
        <div className="right">
         <button type="submit">Send</button>
        </div>
       </div>
      </form>}
    </span>
   </div>
  </Draggable >
 )
}

export default Contact;