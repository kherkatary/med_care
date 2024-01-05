import "./Cards.scss"

import { Icon } from "@iconify/react"
const Cards = ({ name, designation, photoSrc, bio }) => {
  const socialLink = "https://www.youtube.com/watch?v=vGsi0OeNiKw"
  return (
      <div className='cardContainer centerElements'>
        <div className="profileOutline centerElements">
          <div className="profile">
            <img src={photoSrc} alt="profile" />
          </div>
        </div>
        <h3 className="heading">{name}</h3>
        <p className="designation">{designation}</p>
        <p className="bio">{bio}</p>
        <div className="social centerElements">
          <a href={socialLink} target="_blank" rel="noreferrer"><Icon icon="ri:github-line" color="white" /></a>
          <a href={socialLink} target="_blank" rel="noreferrer"><Icon icon="ri:facebook-fill" color="white" /></a>
          <a href={socialLink} target="_blank" rel="noreferrer"><Icon icon="mdi:instagram" color="white" /></a>
          <a href={socialLink} target="_blank" rel="noreferrer"><Icon icon="ic:outline-email" color="white" /></a>
        </div>


      </div>

    

  )
}

export default Cards