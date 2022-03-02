import { useState, useEffect } from 'react';

const Contact = () => {
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

 useEffect(() => { setSubmitted(false) }, [])

 return (
  <>
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
  </>
 )
}

export default Contact;