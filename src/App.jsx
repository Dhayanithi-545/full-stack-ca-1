import React from 'react'
import Servicecard from './components/ServiceCard'

const data = [
  {
    "title"  : "Web Development",
    "description"  :"We offer Full Stack WebDevelopment services to all the emerging small scale business, we offer special service discounts for women entrepreneurs"
  },
  {
    "title"  : "Web Development",
    "description"  :"We offer Full Stack WebDevelopment services to all the emerging small scale business, we offer special service discounts for women entrepreneurs"
  },
  {
    "title"  : "Web Development",
    "description"  :"We offer Full Stack WebDevelopment services to all the emerging small scale business, we offer special service discounts for women entrepreneurs"
  },
  {
    "title"  : "Web Development",
    "description"  :"We offer Full Stack WebDevelopment services to all the emerging small scale business, we offer special service discounts for women entrepreneurs"
  },
  {
    "title"  : "Web Development",
    "description"  :"We offer Full Stack WebDevelopment services to all the emerging small scale business, we offer special service discounts for women entrepreneurs"
  },
  {
    "title"  : "Web Development",
    "description"  :"We offer Full Stack WebDevelopment services to all the emerging small scale business, we offer special service discounts for women entrepreneurs"
  },
]

const App = () => {
  return (
    <div className=' w-full bg-green-400 items-center align-center justify-center grid p-6 ' >

      <h1 className='align-center items-center font-bold' > Service Listing - FSWD CA-1 </h1>

      <h1 className=' items-center align-center font-bold' >Giving data manually</h1>
      <Servicecard 
        title="Web Development" 
        description = "We offer Full Stack WebDevelopment services to all the emerging small scale business, we offer special service discounts for women entrepreneurs"
       />
       <h1 className='font-bold' >   Using Map function to display all the data inside the array
       </h1>

        {
          data.map((data,index)=>(
            <div  >
            <Servicecard {...data} />
            </div>
          ))
        }
      <Servicecard 
        title="Marketing Agency" 
        description = "Our Marketing Agency specifically focuses the small scale business in rural areas, we offer specialised advertisements for those small scale business"
       />
      <Servicecard 
        title="Video Editing Agency" 
        description = "Our Agency is giving all kind of editing styles to Influencers in Youtube, Instagram we also run advertisement for youtubers to show  their youtube channel world wise via Google SEO" 
        />



    </div>
  )
}

export default App
