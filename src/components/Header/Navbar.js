import React ,{useState} from 'react';
import {Link} from "react-scroll"
import upwork from "../../assets/upwork.png"
import fiverr from "../../assets/fiverr.png"

export default function Navbar() {

  const [navbar,setNavbar] = useState(false)

  const changeBackground = ()=>{
if(window.scrollY >= 100){
setNavbar(true)



}else{
  setNavbar(false)
}





  }

  window.addEventListener("scroll",changeBackground)
 







  return (
    <>
  
      <nav className={`${navbar ? "navbar bg-secondary": "navbar bg-primary"} navbar-dark navbar-expand-lg fixed-top  `}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Saim Saeed</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mx-auto mb-lg-0 nav-list">
              <li className="nav-item items ">
                <Link to="intro" spy={true} smooth={true} offset={-50} duration={300} className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item items">
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={300} className="nav-link">Skills</Link>
              </li>
              <li className="nav-item items">
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={300} className="nav-link">Projects</Link>
              </li>
              <li className="nav-item items">
                <Link to="services" spy={true} smooth={true} offset={-50} duration={300} className="nav-link" >Services</Link>
              </li>
              <li className="nav-item items">
                <Link to="about" spy={true} smooth={true} offset={-50} duration={300}  className="nav-link">About</Link>
              </li>
              
            </ul>
           <div className='social'>
     <a href='https://www.linkedin.com/in/muhammad-saim-saeed-full-stack-developer/' target='_blank'  className='logo'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a>
     <a href='https://www.upwork.com/freelancers/~01a0d70c2e548c0171' className='logo'><img src={upwork} alt='upwork logo' style={{width:"25px",height:"auto"}}/></a>
     <a href='https://www.fiverr.com/users/saimsaeed663' className='logo'><img src={fiverr} alt='upwork logo' style={{width:"28px",height:"auto"}}/></a>
           </div>

          </div>
        </div>
      </nav>




      





    </>
  )
}
