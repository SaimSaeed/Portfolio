import React from "react";
import {Link} from "react-scroll";


export default  function Intro(props) {

   

  return (
    <>
<section className='container section1 ' id='intro'>
    <div className='row main-box'>
    <div className='col-12 col-sm-12 col-md-4 text-box'>
   
<h1 className=' main-text text-left'>Hi!,<br/> I'm Saim Saeed</h1>
<Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className='btn button' >See My Work</Link>



    </div>
     <div className='col-12 col-sm-12 col-md-4 second-box'>
      <div className='color mx-auto'>
      <img src={props.profile} alt='main-profile' style={{height:"100%",width:"100%",position:"absolute",bottom:"8%",right:"8%",borderRadius:"10%",border:"2px solid black"}}/>
      </div>
      
    </div> 

    <div className='col-12 col-sm-12 col-md-4 third-box'>
    <p className=' normal-text  ' style={{marginTop:"35%",color:"white",marginLeft:"40%",fontSize:"3rem",fontFamily:" 'Bricolage Grotesque', sans-serif"}}>UX/UI <br/>Full Stack  <br/> MERN<br/>React JS</p>
    </div>
    </div>
</section>
    </>
  )
}
