import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MdDelete } from "react-icons/md";


function History() {
  return (
    <div>

     <div className=''>
        <h1 className='text-center my-5'>Resume Downloaded History</h1>
        <span><Link to={'/'} style={{marginTop:'80px'}}  className='float-end me-5'>Back</Link></span>
     </div>

       <Box component="section"  className='container-fluid' >
                <div className='row' >
                 <div className='col-md-4'>
                    
                      <Paper elevation={3} sx={{ my: 5 ,p: 2, textAlign: 'center' }}>
                       <div className='d-flex align-items-center justify-content-evenly'>
                          <h6>Reviewed at :<br/> 24/6/2025, 7:55:23 pm</h6>
                          <button className='btn  fs-5 ms-5'><MdDelete /> </button>
                       </div>
                        <div className='border rounded p-3'>
                            <h2>Name</h2>
                            <h4>Job Title</h4>
                            <p>
                                <span>Location</span>|<span>Email</span>|<span>Phone</span>
                            </p>
                            <p>
                                <Link href={''}>GITHUB | </Link>
                                <Link href={''}>LINKEDIN |  </Link>
                                <Link href={''}>PORTFOLIO</Link>
                            </p>
                            <Divider sx={{ fontSize: '25' }}>Summary</Divider>
                            <p className='fs-5 text-start'>
                                User summary
                            </p>
                            <Divider sx={{ fontSize: '25', marginBottom: '10px' }}>Education</Divider>
                            <h4>User education</h4>
                            <p>
                                <span>College</span>|<span>University</span>|<span>Year</span>
                            </p>
                            <p></p>
        
                            <Divider sx={{ fontSize: '25', marginBottom: '10px' }}>Professional Experience</Divider>
                            <h6>User JOb</h6>
                            <p>
                                <span>Company</span>|
                                <span>Location</span>|<span>Duration</span>
                            </p>
                            <Divider sx={{ fontSize: '25', marginBottom: '10px' }}> Skills</Divider>
        
                            <Stack justifyContent={'space-evenly'} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
        
                                <Button variant="contained">User skill</Button>
                                <Button variant="contained">User skill</Button>
                                <Button variant="contained">User skill</Button>
                                <Button variant="contained">User skill</Button>
                                <Button variant="contained">User skill</Button>
                                <Button variant="contained">User skill</Button>
                                <Button variant="contained">User skill</Button>
                            </Stack>
                        </div>
      
                      </Paper>
                    
                 </div>
                </div>
            </Box>

            </div>
  )
}

export default History