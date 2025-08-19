import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div style={{height:'400px', backgroundColor:'purple'}} className='d-flex justify-content-center align-items-center text-light' >
     <div className='text-center'>
        <h1>Contact us</h1>
        <h5><CiMail />resumebuilder@gmail.com</h5>
        <h5><CiPhone />8589929549</h5>
        <h4>Connect with Us</h4>
<div className='d-flex justify-content-evenly fs-4 mt-3'>
  <FaWhatsapp className='me-3'/>
  <FaFacebookF className='me-3'/>
  <CiInstagram className='me-3' />
</div>
<p className='mt-3'>Designated and built with ❤️ using react</p>

     </div>
    </div>
  )
}

export default Footer