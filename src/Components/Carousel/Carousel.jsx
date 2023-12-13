import React, { useEffect, useState } from 'react'
import './Carousel.scss'


const Carousel = () => {
   const data = [
      {
         img: `/background-carousel.jpg`,
         name: `INDRA`

      },
      {
         img: `/doctor-carousel.jpg`,
         name: `HHH`
      },
      {
         img: `/background-carousel.jpg`,
         name: `AAASDFGH`
      },
      {
         img: `/background-carousel.jpg`,
         name: `dbfj`
      }
      // "1", "2","3","4","5"
   ]
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


                  {/* <h1 className='carousel-item'
            style={{transform: `translate(-${currIdx * 100}%)`}}
            key={index}>{item}</h1> */}
                  <div className='button-div'>

                     <h1>We Provide top Medical Services
                     </h1>
                     <h2>More than 30 professionals</h2>
                     <div className="all-button">
                        <button className='appointment'>Make an Appointment</button>
                        <button className='read-more'>Read More</button>
                     </div>

                  </div>

                  <div className='carousel-item'
                     style={{ transform: `translate(-${currIdx * 100}%)` }}
                     key={index}>
                     <h1>{item.name}</h1>
                  </div>

               </>)
         })
         }
      </div>
   )
}

export default Carousel
