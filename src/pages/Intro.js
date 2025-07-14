import React from "react";
import {Link} from "react-scroll";



export default  function Intro(props) {

   

  return (
    <>
    <div className="custom-background mt-5 ">
     
<div className='container-fluid px-5 min-vh-100 ' id='intro'>
    <div className='row main-box'>
    <div className='col-12 col-sm-12 col-md-4 text-box my-auto pt-5 '>
      <div>
<p className='  text-white text-left display-3 '>Hi!,<br/> I'm Saim Saeed</p>
<div className= "mt-3 ">
<Link to="projects" spy={true} smooth={true} offset={-50} duration={200} className='btn btn-secondary text-white' >See My Work</Link>
<Link to="projects" className="btn btn-secondary text-white" style={{marginLeft:"1%"}}>Download CV</Link>
</div>
</div>


    </div>
     <div className='col-12 col-sm-12 col-md-4 my-auto pt-5 second-box'>
      <div className=' w-100  mx-auto text-center mt-5 pt-0'>
      <img src={props.profile} alt='main-profile'  className="img-fluid border  border-5 border-primary rounded-pill"/>
    
      </div>
      
    </div> 

    <div className='col-12 col-sm-12 col-md-4 third-box my-auto '>
      
      <p className=' intro-text text-white pl-5 display-3 mt-5 pt-5 float-end' >UX/UI <br/>React<br/> Bootstrap<br/>MERN</p>
     
    </div>
    </div>
</div>
</div>
    </>
  )
}
