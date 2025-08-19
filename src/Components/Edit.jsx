import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen} className='btn  fs-1 text-primary' >
                <FaEdit />
            </button>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
{/* personal details */}

          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" />
            <TextField id="standard-basic-location" label=" Location" variant="standard" />
          </div>

          {/* contact details */}
            <h3>Contact Details</h3>
                    <div className="d-flex row p-3">
                      <TextField id="standard-basic-email" label="Email " variant="standard" />
                      <TextField id="standard-basic-phone" label="Phone " variant="standard" />
                      <TextField id="standard-basic-github" label=" Github" variant="standard" />
                      <TextField id="standard-basic-linkedin" label=" Linkedin" variant="standard" />
                      <TextField id="standard-basic-portfolio" label=" Portfolio" variant="standard" />
          
                    </div>
        
        {/* education details */}
          <h3>Education Details</h3>
                  <div className="d-flex row p-3">
                    <TextField id="standard-basic-course" label="Course Name " variant="standard" />
                    <TextField id="standard-basic-college" label=" College" variant="standard" />
                    <TextField id="standard-basic-university" label=" University" variant="standard" />
                    <TextField id="standard-basic-year" label=" Year of Passing" variant="standard" />
        
                  </div>

                  {/* professional details */}
                   <div className="d-flex row p-3">
                              <TextField id="standard-basic-internship" label="Job or Internship " variant="standard" />
                              <TextField id="standard-basic-company" label=" Company name" variant="standard" />
                              <TextField id="standard-basic-location" label=" Location" variant="standard" />
                              <TextField id="standard-basic-duration" label=" Duration" variant="standard" />
                  
                            </div>

                            {/* skill */}
                            <h3>Skills</h3>
                             <div className="d-flex align-items-center justify-content-between p-3">
                                        <TextField sx={{width:'400px'}} id="standard-basic-skills" label="Add skills" variant="standard" />
                                        <button variant='text' >Add</button>
                                      </div>
                                       <h5>Added skills : </h5>
            <div className="d-flex flex-wrap justify-content-between my-3">
              {/* span must duplicate according to the user added skill */}
         <span className='btn btn-outline-primary d-flex align-items-center'>React <button className='text-light btn'>X</button></span>
          </div>

                            {/* /summary */}
                             <h3>Professional Summary</h3>
                                      <div className="d-flex row p-3">
                                        <TextField id="standard-basic-internship" label="  Write a short summary of yourself  " multiline rows={4} variant="standard" />   
                                      </div>
          </Typography>
          <button>Update</button>
        </Box>
      </Modal>
        </>
    )
}

export default Edit