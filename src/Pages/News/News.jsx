import React, {useEffect, useState} from 'react'
import './News.scss'
import { Link } from 'react-router-dom'
import data from "../../assets/data.json"
import NewsData from '../../assets/NewsData.json'
import TileDescriptor from '../../Components/TileDesc/TileDesc'
import NewsDesc from '../../Components/NewsDesc/NewsDesc'
import NewsPreview from '../../Components/footerComponents/NewsPreview'

const News = () => {

  return (
    <div className='news'>
      <TileDescriptor name='NEWS' description='NEWS' />
      <div className="all-news-contents">

        <div className="all-left-portion">
         


        {NewsData?.map(newsdata => (
            <NewsDesc key={newsdata.id} heading={newsdata.title} date={newsdata.date}
             author={newsdata.author} speciality={newsdata.speciality} comments={newsdata.comments}
             details={newsdata.description} src={newsdata.urlToImage}/>

          ))}



         <div className="pages-number">
          <div className='number'>1</div>
          <div className='number'>2</div>
          <div className='number'>3</div>
         </div>
        </div>
        <div className="all-right-portion">

          <div className="for-emergencies">
            <h3>For Emergencies</h3>
            <h2><span>+0080 954 4557 884</span></h2>
            <h4>Ambulance bulao jaldi jaldi...</h4>
          </div>
          <div className="for-categories">
            <h2>Categories</h2>
            <ul>
              <li>Radiology <hr /></li>
              <li>Cardiology<hr /></li>
              <li>Gastroentrology<hr /></li>
              <li>Neurology<hr /></li>
              <li>Surgery<hr /></li>
            </ul>
          </div>
          <div className="newComponents">
            <h3> LATEST NEWS</h3>
            {data?.map(news => (
              <NewsPreview key={news.heading} image={news.image} heading={news.heading} date={news.date} />

            ))}
          </div>
          <div className="book-an-appointment">
            <h2>Book an Appointment</h2>
            <form> 
              <input className='input-form' type="text" placeholder='Name'/>
              <input className='input-form' type="text" placeholder='Phone' name="name" />
              <input className='input-form' type="text" placeholder='E-mail' name="name" />
              <button className='appointment'>Make an Appointment</button>
              
            </form>
          </div>

        </div>
      </div>
    </div>

  )
}

export default News
