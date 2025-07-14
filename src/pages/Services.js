import React from 'react'
import custom from "../assets/custom.png"
import api from  "../assets/api.png"
import admin from "../assets/admin.png"
import deploy from "../assets/deploy.png"

export default function About() {

    const cardsData = [
  {
    title: "Custom Web Application Development",
    description: "Building responsive web applications using React, Vue.js, or Next.js with Node.js and Express, integrating SQL or NoSQL databases for efficient data handling.",
    image: custom,
    link: "#",
  },
  {
    title: "API Development & Integration",
    description: "Developing secure RESTful APIs with JWT or OAuth, integrating third-party services like Stripe and PayPal for seamless data exchange.",
    image: api,
    link: "#",
  },
  {
    title: "Admin Panels & CMS Development",
    description: "Creating custom admin dashboards and CMS with role-based access, dynamic forms, and clean UI using Vuexy, Vuetify,Bootstrap, Shadcn UI or Tailwind CSS.",
    image: admin,
    link: "#",
  },
  {
    title: "Deployment, Maintenance & Optimization",
    description: "Deploying apps using Docker, AWS, or Vercel with ongoing performance optimization, security hardening, and server/database management.",
    image: deploy,
    link: "#",
  },
];

    return (
        <>
            <div className='container-fluid service-box' id='services'>
                <div className=' row justify-content-center'>
                    <div className=' col-12 service-heading'>
                        <h1>Services I Offer</h1>
                        <div className='line'></div>
                    </div>

              <div className="col-12 container my-5 mx-auto">
  <div className="d-flex flex-wrap justify-content-center g-4 text-center">
    {cardsData.map((item, index) => (
      <div
        key={index}
        className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center my-3"
      >
        <div className="card shadow border-0 rounded-4 h-100 px-5 pb-5 " style={{width:"500px"}}>
          <img src={item.image}/>
          <div className="card-body">
            <h5 className="card-title fw-bold">{item.title}</h5>
            <p className="card-text text-muted">{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


                 
                </div>
            </div>


        </>
    )
}
