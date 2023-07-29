import React from 'react'

export default function Contact() {
    return (
        <>
            <div className=' container-fluid contact-box' id='contact'>
                <div className=' row'>
                    <div className=' col-6 contact-heading'>
                    
                        
                      

                        <div className='contact-details' >

                        <h1 className='text-center'>Contact</h1>
                        <div className='line mt-3'></div>
                        <h1 style={{ fontSize: "3rem"}} className='text-center mt-3' >Let's Discuss your project</h1>
                        <h4 className='text-center mt-3'>I'm always open to discussing product design work or partnerships.</h4>
                        <ul  >
                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
</svg>
<a href='Tel:+923045575062'>+923045575062</a></li>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
<a href='Mailto:saimsaeed640@gmail.com'>saimsaeed640@gmail.com</a>
                            </li>
                        </ul>
                      




                        </div>
                    </div>
                    <div className=' col-6'>

                        <div className='contact-form' >
                            <ul style={{ display: "flex", flexWrap: "wrap", listStyleType: "none" }}>
                                <li style={{ width: "100%", marginBottom: "10%", marginTop: "10%", }}><input type='text' style={{ width: "90%", margin: "0 auto", border: "none", backgroundColor: "rgb(215, 159, 17)", borderBottom: "1px solid grey", outline: "none" }} placeholder='Name *' />  </li>
                                <li style={{ width: "50%", marginBottom: "10%" }}><input type='text' placeholder='Email *' style={{ borderBottom: "1px solid grey",backgroundColor: "rgb(215, 159, 17)" }} />  </li>
                                <li style={{ width: "50%" }}><input type='text' placeholder='Subject *' style={{ borderBottom: "1px solid grey", marginLeft: "2%",backgroundColor: "rgb(215, 159, 17)" }} />  </li>
                                <li style={{ width: "100%" }}><textarea cols={50} rows={6} placeholder='Comment *' style={{ borderBottom: "1px solid grey", borderRight: "1px solid grey" }} />  </li>
                                <li style={{ width: "30%", margin: "0 auto" }}><button type='submit' className='contact-button' style={{ backgroundColor: "grey", padding: "10px 12px 10px 12px", borderRadius: "30px", marginTop: "30%", color: "white" }}>Send Message </button> </li>




                            </ul>








                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
