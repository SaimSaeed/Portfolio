import React from 'react'


export default function Cards(props) {
  return (
    <>
      <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-2' key={props.id}>
                        <div className="card  mx-auto" style={{ width: "20rem",backgroundColor:"white",border:"2px solid grey" }} >
                            <img className="card-img-top" src={props.img} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description}</p>
                                <a href={props.Url} target='_blank' rel="noreferrer" className="btn"  style={{backgroundColor:'grey',color:"white"}} >Visit</a>
                            </div>
                        </div>
                    </div>

    </>
  )
}
