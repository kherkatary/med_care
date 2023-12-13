import React, {useEffect, useState} from 'react'
import './Carousel.scss'

const Carousel =()=>{
  const data = ["1", "222", "33", "44"]
  const [currIdx, setCurrIdx]=useState(0)
  const CarouselInfinteScroll =() =>{
   if(currIdx==data.length-1){
      return setCurrIdx(0)
   }
   return setCurrIdx(currIdx+1)
  }

  useEffect(()=>{
   const interval = setInterval(()=>{CarouselInfinteScroll()},3500)

   return ()=> clearInterval(interval)})

   return (
      <div className='carousel-container'>
         { data.map((item, index)=>{
            return <h1 className='carousel-item'
            style={{transform: `translate(-${currIdx * 100}%)`}}
            key={index}>{item}</h1>})
         }
      </div>
   )
}

export default Carousel
