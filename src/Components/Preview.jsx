import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';




function Preview({userInput}) {
  console.log(userInput);
  
  return (

    <>
      {
        userInput.personelData.name!="" &&
      <>
        <Stack direction={'row'} sx={{marginTop:'20px',justifyContent:'flex-end'}}>
          <Stack direction={'row'} sx={{alignItems:'center'}}>
            {/* Download */}
            <button className='btn  text-primary' ><FaFileDownload /></button>
            {/* edit */}
            <div>
              <Edit/>
            </div>
            {/* history */}
            <Link to={'/history'}><button className='btn  text-primary' ><FaHistory /></button></Link>
            <Link to={'/resume'}><button className='btn text-primary' >BACK</button></Link>
          </Stack>
        </Stack>
        <Box component="section">
        
        <Paper sx={{ my:5,p:5,textAlign:'center'}}>
          <h2>{userInput.personelData.name}</h2>
          <h4>{userInput.personelData.jobTitle}</h4>
          <p><span>{userInput.personelData.location}</span> | <span>{userInput.personelData.email}</span> | <span>{userInput.personelData.phone}</span></p>
          <p>
              <Link href={""}>{userInput.personelData.github} </Link> |
              <Link href={""}>{userInput.personelData.linkedin} </Link> |
              <Link href={""}> {userInput.personelData.portfolio}</Link>
          </p>
          <Divider sx={{fontSize:"25px"}}>Summary</Divider>
          <p className='fs-5 text-start'>{userInput.summary}</p>
          <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Education</Divider>
          <h5>{userInput.education.course}</h5>
          <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span></p>
          
          <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Professional Experience</Divider>
          <h5>{userInput.experience.jobRole}</h5>
          <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
          
          <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Skills</Divider>
          <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
        {
          userInput.skills?.map(skill=>(<Button variant="contained">{skill}</Button>

          ))
        }
        
        
      </Stack>
        </Paper>
      </Box>
      </>
      }
    </>
  )
}

export default Preview