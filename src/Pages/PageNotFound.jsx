import React from 'react'
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div style={{height:'60vh'}} className="d-flex justify-content-center align-items-center text-center my-5">
    <div>
        <img width={'300px'} src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif" alt="" />
        <h1>Page Not Found</h1>
        <h5>Sorry,We couldnt find the page</h5>
        <Link to={'/'} className='btn btn-primary '> Back to Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound