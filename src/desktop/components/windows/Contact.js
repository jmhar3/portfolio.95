import { useState, useEffect } from 'react';

const Contact = () => {
 const [submitted, setSubmitted] = useState(false)
 const [values, setValues] = useState({
  email: "",
  subject: "",
  message: ""
 });

 // CREATE THANK YOU MESSAGE ON SUBMISSION

 const sendMessage = (e) => {
  e.preventDefault();
  console.log(values);

  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 10000);
 }

 useEffect(() => { setSubmitted(false) }, [])

 return (
  <>
   <form
    className="column"
    action="https://formkeep.com/f/8395fde77958"
    accept-charset="UTF-8"
    enctype="multipart/form-data"
    method="POST"
    target="_blank"
   >
    <div className="row center">
     <h5 className="border">To:</h5>
     <a
      href="mailto:jmhar@protonmail.com"
      target="_blank"
      className="rev-border"
     >
      jmhar@protonmail.com
     </a>
    </div>
    <div className="row center">
     <h5 className="border">From:</h5>
     <input
      type="email"
      name="email"
      className="rev-border"
     />
    </div>
    <div className="row center">
     <h5>Subject:</h5>
     <input
      type="text"
      name="subject"
      className="rev-border"
     />
    </div>
    <div className="column center">
     <textarea
      name="message"
      className="rev-border"
     />
     <div className="footer">
      <button>
       <a href="tel:+61499833390">
        0499833390
       </a>
      </button>
      <button type="submit">Send</button>
     </div>
    </div>
   </form>
  </>
 )
}

export default Contact;