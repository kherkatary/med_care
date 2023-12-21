import React from 'react'
import './styles.scss'

const NewsPreview = ({image,heading,date}) => {
  return (
    <div className='newsPreview'>
        <div>
        <img className='newsImage' src={image} alt="image one" />
        </div>
        <div className='newsHeading'>
        <p>Phasellus at nunc orci. Donec ipsum</p>
        <span>Dec 02, 2022</span>
        </div>
    </div>
  )
}

export default NewsPreview