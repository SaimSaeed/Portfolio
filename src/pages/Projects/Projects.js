import React from 'react'
import Cards from './Cards'

export default function Projects() {
  
    const data = [
        {
            id: 1,
            title: "TextUtils",
            description:"TextUtils is a Text Editing App",
            imgUrl:"https://drive.google.com/uc?export=view&id=1tKxPLM3F5HfxyP-UOSBmj_ZVIF7UhIli",
            Url:"https://textutils00.surge.sh/"
        },
        {
            id: 2,
            title: "NewsMonkey",
            description:"NewsMonkey is a News Reading App",
            imgUrl:"https://drive.google.com/uc?export=view&id=1hj18_kfb5V32jaZLoG_jBOCK_xSmjWuJ",
            Url:"https://textutils00.surge.sh/"
    
        },
        {
            id: 3,
            title: "TextUtils",
            description:"TextUtils is a Text Editing App",
            imgUrl:"https://drive.google.com/uc?export=view&id=1tKxPLM3F5HfxyP-UOSBmj_ZVIF7UhIli",
            Url:"https://textutils00.surge.sh/"
        },
        {
            id: 4,
            title: "TextUtils",
            description:"TextUtils is a Text Editing App",
            imgUrl:"https://drive.google.com/uc?export=view&id=1tKxPLM3F5HfxyP-UOSBmj_ZVIF7UhIli",
            Url:"https://textutils00.surge.sh/"
        },
        {
            id: 5,
            title: "TextUtils",
            description:"TextUtils is a Text Editing App",
            imgUrl:"https://drive.google.com/uc?export=view&id=1tKxPLM3F5HfxyP-UOSBmj_ZVIF7UhIli",
            Url:"https://textutils00.surge.sh/"
        },
        {
            id: 6,
            title: "TextUtils",
            description:"TextUtils is a Text Editing App",
            imgUrl:"https://drive.google.com/uc?export=view&id=1tKxPLM3F5HfxyP-UOSBmj_ZVIF7UhIli",
            Url:"https://textutils00.surge.sh/"
        },
    
    
    
    ]


   

    return (
        <>
            <div className=' container project-box' id='projects'>
                <div className=' row'  >
                    <iv className=' col-12 project-heading'>
                        <h1>Projects</h1>
                        <div className='line'></div>

                    </iv>
{
                   data.map((element)=>{
             return       <Cards   key={element.id} title={element.title} description={element.description} img={element.imgUrl}  Url={element.Url}/>
                   }
                   )
}

                </div>
            </div>












        </>
    )
}
