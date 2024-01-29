import React, { useEffect, useState } from 'react'
import './Carousel.scss'
import Img1 from './Images/carousel-doctor.jpg'


const Carousel = () => {
   const data = [
      { id: 1, src: Img1, },
      { id: 2, src: "https://imgs.search.brave.com/4HStLvark6VBeYRheD5JH7RJfhvBr-6yso7VRFVFs_c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE5/OTIwMjAyL3Bob3Rv/L2RvY3Rvci1pbi1h/LWhvc3BpdGFsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1s/QzNucVQ3VWRFdGY3/Ym03ejc1eGdWaU5z/QjctN01MUzQxLWll/cWJEZEVZPQ", },
      { id: 3, src: "https://imgs.search.brave.com/ERv628Lao6F0-ecwDvrH5plSlz1jX0PS7hvqyz4x8Qo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kb2N0/b3ItbWVkaWNhbC1i/bHVlLWJhY2tncm91/bmQtMjE1Nzg2MjYu/anBn", },
      { id: 4, src: Img1, }
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

                     <div className='button-div'>
                        <div className="description">
                           <p className='heading-name'>We Provide top<br /> Medical Services </p>
                           <p className='Heading-Description'>More than 30 professionals</p>
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
