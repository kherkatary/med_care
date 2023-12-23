import React from 'react'
import './styles.scss'

const NewsPreview = ({image,heading,date}) => {
  return (
    <div className='newsPreview'>
        <div>
        <img className='newsImage' src={image} alt="image one" />
        </div>
        <div className='newsHeading'>
        <p>{heading}</p>
        <span>{date}</span>
        </div>
    </div>
  )
}

export default NewsPreview