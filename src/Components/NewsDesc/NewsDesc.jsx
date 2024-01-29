import React from 'react'
import './NewsDesc.scss'
import { Link } from 'react-router-dom'

const  NewsDesc=(props)=> {
  return (
    <div>
     <div className="overall-items">
        <div className="left-side">
          <div className="image-tile" style={{
          backgroundImage: `url(${props.src})`
        }}>
            <div className="date"><p className='p-date'>{props.date}</p></div>
          </div>
          <div className="content-tile">
            <div className="news_wrapper">
            <p className='p-heading'>{props.heading}</p>
            <p className='p-author'>Author:<span id='blue-color'>{props.author} </span>| in <span id='blue-color'> {props.speciality}</span> | {props.comments} Comments</p>
            <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
            </div>
            <Link><p className='read-more'><span id='blue-color'>Read More</span></p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default  NewsDesc