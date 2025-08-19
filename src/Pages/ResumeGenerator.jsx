import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div className='container-fluid'>

      <h2 className='my-5 text-center' >Create a job-winning resume in minutes</h2>

      <div style={{ height: '60vh' }} className='row row  justify-content-center align-items-center'>
        <div className='col-4 border shadow p-5 text-center'>
          <IoIosDocument className='text-primary fs-1 mb-3' />
<h4>Add you information</h4>
<p>add pre-written examples to each section</p>
<h5>step 1</h5>
        </div>
        <div className="col-1"></div>
        <div className='col-4 border shadow p-5 text-center'>
          <FaDownload className='text-primary fs-1 mb-3'/>
          <h4>download your resume</h4>
          <p>download and start start applying</p>
          <h5>step 2</h5>

        </div>
      </div>
      <div className="text-center mb-5">
        <Link to={'/form'} className='btn text-light' style={{backgroundColor:'purple'}}>Lets Start</Link>
      </div>
    </div>

  )
}

export default ResumeGenerator