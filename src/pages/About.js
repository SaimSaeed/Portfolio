import React from 'react'

export default function About(props) {
    return (
        <>
            <div className=' container-fluid about-box' id='about'>
                <div className=' row'>
                    <div className=' col-12 about-heading'>
                        <h1>About Me</h1>
                        <div className='line'></div>



                    </div>
                    <div className='col-12 col-sm-12 col-md-6 mt-3  aboutdata text-center mt-3'>
<div >
                        <img src={props.profile} alt='Profile' className='img-fluid mb-5 w-50'  style={{ borderRadius: "10px", boxShadow: "3px 3px 3px 3px grey"  }} />
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 mt-3 about-detail'>
                        <h2><b>I'm Saim Saeed.</b></h2>
                        <h5><b>A <span style={{ color: "rgb(215, 159, 17)" }}>Full Stack</span> Web App Developer</b></h5>

                        <p className='about-text' style={{ width: "100%" }}>
                            <br />  Self-motivated Senior Web App Developer with a high level of experience working on multiple projects.
                            Passionate and hardworking with a penchant for meeting deadlines.
                            Interested in role with the company promoting best practices and offering diverse customer projects.<br/>
                            I design and develop services for customers specializing creating stylish, modern websites, web services and online stores.
                             My passion is to design digital user experiences through meaningful interactions.
                            <br />
            
                        </p>
                        <hr style={{ width: "100%" ,margin:"auto"}} />
                       
                        <h5 className='mt-2'><b>Personal Info</b></h5>
                        <div className='container-fluid'>
                        <ul  className='row' style={{listStyle:"none"}} >
                            <li  className='col-6 col-sm-6 col-md-6 mb-3'>  <strong>Name:</strong> M Saim Saeed</li>
                            <li  className='col-6 col-sm-6 col-md-6'> <strong>Email:</strong> saimsaeed640@gmail.com</li>
                            <li  className='col-6 col-sm-6 col-md-6 mb-3'> <strong>Phone/Whatsapp:</strong> +923045575062</li>
                            <li className='col-6 col-sm-6 col-md-6'>  <strong>Nationality:</strong> Pakistani<br /></li>
                            <li className='col-6 col-sm-6 col-md-6'>  <strong>Language:</strong> Urdu,English,Japanese<br /></li>
                            <li className='col-6 col-sm-6 col-md-6'>  <strong>Freelance:</strong> Available<br /></li>
                           
                        </ul>

                        </div>
                        
                    </div>

                </div>
            </div>


        </>
    )
}
