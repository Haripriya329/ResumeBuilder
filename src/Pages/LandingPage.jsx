import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>

      <section className='container-fluid first' style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://executivedrafts.com/wp-content/uploads/2014/08/shutterstock_198854402.jpg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} id='part1'>

        <div className="row p-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center" style={{backgroundColor:'rgb(255,255,255,0.3)'}}>
            <h3>Designed to get hired</h3>
            <h4>Your skills, your story, your next job - all in one</h4>
            <Link to={'/resume'}>
              <button className='btn btn-primary' >Make you resume </button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      {/* tools */}
      <section className='tools p-5'>
        <h1 className='text-center'>Tools</h1>

      <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6">
            <h4>Resume</h4>
            <p>Create Unlimited nre resumes and easily edit them afterwards</p>

            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and revelant jobs postings</p>

            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an oraganized manner</p>
  
          </div>
          <div className="tool-image col-12 col-md-6">
            <img className='w-75 ms-5' src="https://www.myperfectresume.com/wp-content/uploads/2024/02/a-resume-format-hero.png?w=768" alt="tools" />
          </div>

      </div>
      </section>

      {/* image */}
          <section className='second' style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://www.thoughtco.com/thmb/uyuzenkkolOKR0Tz6pkxHF3BLqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537436868-58e097d93df78c5162fcf65e.jpg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} id='part1'>
      </section>

{/* testimony */}
<section className='tools p-5'>
        <h1 className='text-center'>Testimony</h1>

      <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6">
            <h4>Resume</h4>
            <p>Create Unlimited nre resumes easily edit them afterwards Easily write professional cover letters
            Automatically receive new and revelant jobs postings Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, laboriosam. Hic rerum labore impedit soluta, nobis sunt dolor mollitia quibusdam saepe provident optio similique beatae sint at velit natus molestias.</p>

          
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in, aspernatur laborum, beatae similique excepturi cupiditate voluptate maxime aut sed delectus ad fugit modi unde expedita ipsam, ducimus sit eaque. Effortlessly manage and track your job applications in an oraganized manner</p>
  
          </div>
          <div className="tool-image col-12 col-md-6">
           <div className="row ">
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
           </div>
           <div className="row my-3">
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
           </div>
           <div className="row my-3">
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
            <div className="col-3">
              <img className='w-100' src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" alt="" /></div>
           </div>
          </div>

      </div>
      </section>

      {/* image */}
          <section className='second' style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://www.thoughtco.com/thmb/uyuzenkkolOKR0Tz6pkxHF3BLqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537436868-58e097d93df78c5162fcf65e.jpg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} id='part1'>
      </section>


    </>
  )
}

export default LandingPage
