import { Document, Page } from 'react-pdf';
import resume from '../../../files/Jessica Harriman - Resume.pdf';

const Resume = () => {
 return (
  <Document file={resume}>
   <Page />
  </Document>
 )
}

export default Resume;