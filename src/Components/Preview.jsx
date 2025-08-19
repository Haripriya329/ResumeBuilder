import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FaDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit'

function Preview() {
    return (
        <div >

            <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }} >
                <Stack direction={'row'}>
                    {/* download */}
                    <button className='btn fs-1 text-primary ' ><FaDownload />
                    </button>
                    {/* edit */}
                    <div><Edit/></div>
                    {/* history */}
                    <Link to={'/history'} className='btn  fs-1 text-primary' >
                        <FaHistory />
                    </Link>
                    {/* back */}
                    <Link to={'/resume'} className='btn text-primary'>Back</Link>
                </Stack>
            </Stack>

            <Box component="section" >
                <Paper elevation={3} sx={{ my: 5 ,p: 2, textAlign: 'center' }}>
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

                </Paper>
            </Box>

        </div>
    )
}

export default Preview