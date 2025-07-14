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
                        <img src={props.profile} alt='Profile' className='img-fluid mb-5 w-75'  style={{ borderRadius: "10px", boxShadow: "3px 3px 3px 3px grey"  }} />
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 mt-3 about-detail'>
                        <h2><b>I'm Saim Saeed.</b></h2>
                        <h5><b>A <span style={{ color: "rgb(215, 159, 17)" }}>Full Stack</span> Web App Developer</b></h5>

                        <p className='about-text w-100' >
                            <br /> Self-motivated Senior Web App Developer with a high level of experience working on multiple projects.
                            Passionate and hardworking with a penchant for meeting deadlines.
                            Interested in role with the company promoting best practices and offering diverse customer projects.<br/>
                            I design and develop services for customers specializing creating stylish, modern websites, web services and online stores.
                             My passion is to design digital user experiences through meaningful interactions.
                            <br />
            
                        </p>
                        <hr style={{ width: "100%" ,margin:"auto"}} />
                       
                        <h6 className='mt-2 '><b>Personal Info</b></h6>
                       <div className="container-fluid mt-4">
  <ul className="row list-unstyled">
    <li className="col-12 col-sm-6 mb-4 about-text"><strong>Name:</strong> Saim Saeed</li>
    <li className="col-12 col-sm-6 mb-4 about-text"><strong>Phone/Whatsapp:</strong> +923045575062</li>

    <li className="col-12 col-sm-6 mb-4 about-text"><strong>Nationality:</strong> Pakistani</li>
    <li className="col-12 col-sm-6 mb-4 about-text"><strong>Email:</strong>  saimsaeed640@gmail.com</li>

    <li className="col-12 col-sm-6 mb-4 about-text"><strong>Language:</strong> Urdu, English</li>
    <li className="col-12 col-sm-6 mb-4 about-text"><strong>Freelance:</strong> Available</li>
  </ul>
</div>

                        
                    </div>

                </div>
            </div>


        </>
    )
}
