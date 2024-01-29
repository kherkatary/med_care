import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './News.scss'
import { Link } from 'react-router-dom'
import data from "../../assets/data.json"
import NewsData from '../../assets/NewsData.json'
import TileDescriptor from '../../Components/TileDesc/TileDesc'
import NewsDesc from '../../Components/NewsDesc/NewsDesc'
import NewsPreview from '../../Components/footerComponents/NewsPreview'
import Emergency from '../../Components/Emergency/Emergency'
import Appointment from '../../Components/Appointment/Appointment'


const News = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllData();
  }, [])

  const getAllData = () => {
    axios.get("http://localhost:3000/blogs") // add api link to fetch news data
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='news'>
      <TileDescriptor name='NEWS' description='NEWS' />
      <div className="all-news-contents">

        <div className="all-left-portion">
         


        {posts?.map(newsdata => (
          <div key={newsdata.id}> 
            <NewsDesc heading={newsdata.title} date={newsdata.date}
             author={newsdata.author} speciality={newsdata.speciality} comments={newsdata.comments}
             description = {newsdata.html}
             src={newsdata.urlToImage}/>
             </div>

          ))}



         <div className="pages-number">
          <div className='number'>1</div>
          <div className='number'>2</div>
          <div className='number'>3</div>
         </div>
        </div>
        <div className="all-right-portion">

          <div className="for-emergencies">
            <Emergency/>
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
            <Appointment/>
          </div>

        </div>
      </div>
    </div>

  )
}

export default News
