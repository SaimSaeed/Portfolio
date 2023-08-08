import React, { useState, useEffect } from 'react';
import {Link} from "react-scroll";


export default  function Intro(props) {

    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
      "Hi! I'm Saim Saeed"
      )
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 40)
        }
      }, [index])

  return (
    <>
<section className='container section1 ' id='intro'>
    <div className='row main-box'>
    <div className='col-4 text-box text-center'>
<h1 className=' main-text'>{text}</h1>
<h4 className=' second-text'>Full Stack Web Developer</h4>

<Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className='btn button'>See My Work</Link>
    </div>
     <div className='col-4 img'>
      <div className='color'>
   <img src={props.profile} alt='main-profile' style={{height:"100%",width:"100%",position:"absolute",bottom:"10%"}}/>

      </div>

  
    
    </div> 

    <div className='col-4'>
    <p className=' normal-text ' style={{marginTop:"70%",color:"white"}}>I am a Full Stack Developer in MERN Stack Techonology. I have been working as a Web Developer from 2 years and I have worked on various projects and gained lots of experience.
</p>
    </div>
    </div>
</section>
    </>
  )
}
