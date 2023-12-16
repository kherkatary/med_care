import React, { useEffect, useState } from 'react'
import './Carousel.scss'
import Img1 from './Images/carousel-doctor.jpg'
import data from '../..navbardata.json'


const Carousel = () => {
  
   const [currIdx, setCurrIdx] = useState(0)
   const CarouselInfinteScroll = () => {
      if (currIdx == data.length - 1) {
         return setCurrIdx(0)
      }
      return setCurrIdx(currIdx + 1)
   }

   useEffect(() => {
      const interval = setInterval(() => { CarouselInfinteScroll() }, 4000)

      return () => clearInterval(interval)
   })

   return (
      <div className='carousel-container'>
         {data.map((item, index) => {
            return (
               <>

                  <div className='button-div'>
                     <div className="description">
                     <p className='heading-name'>We Provide top<br /> Medical Services </p>
                     <p className='heading-description'>More than 30 professionals</p>
                     </div>
                     <div className="all-button">
                        <button className='appointment'>Make an Appointment</button>
                        <button className='read-more'>Read More</button>
                     </div>

                  </div>

                  <div className='carousel-item'
                     style={{ transform: `translate(-${currIdx * 100}%)` }}
                     key={index}>
                     {/* <h1>{item.name}</h1> */}
                     <img key={item.id} src={item.src}></img>
                  </div>

               </>)
         })
         }
      </div>
   )
}

export default Carousel
