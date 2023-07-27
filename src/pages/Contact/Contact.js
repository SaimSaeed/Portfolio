import React from 'react'

export default function Contact() {
    return (
        <>
            <div className=' container-fluid contact-box' id='contact'>
                <div className=' row'>
                    <div className=' col-6 contact-heading'>
                        <h1 className='mt-5'>Contact</h1>
                        <div className='line'></div>

                        <h4>Let's Discuss your project</h4>
                    </div>
                    <div className=' col-6'>

         <div  className='contact-form' >
           <ul style={{display:"flex",flexWrap:"wrap",listStyleType:"none"}}>
<li  style={{width:"100%",marginBottom:"10%",marginTop:"10%",}}><input type='text'  style={{width:"90%",margin:"0 auto",border:"none",backgroundColor:"rgb(215, 159, 17)",borderBottom:"1px solid grey",outline:"none"}} placeholder='Name *'/>  </li>
<li  style={{width:"50%",marginBottom:"10%"}}><input type='text'  placeholder='Email *' style={{borderBottom:"1px solid grey"}}/>  </li>
<li  style={{width:"50%"}}><input type='text'   placeholder='Subject *'  style={{borderBottom:"1px solid grey",marginLeft:"2%"}}/>  </li>
<li  style={{width:"100%"}}><textarea cols={50} rows={6} placeholder='Comment *'   style={{borderBottom:"1px solid grey",borderRight:"1px solid grey"}}/>  </li>
<li  style={{width:"30%",margin:"0 auto"}}><input type='submit' name='Submit'  style={{backgroundColor:"grey",padding:"10px 30px 10px 30px",borderRadius:"10px",marginTop:"30%",color:"white"}}/>  </li>




           </ul>








         </div>
                    </div>

                </div>
            </div>

        </>
    )
}
