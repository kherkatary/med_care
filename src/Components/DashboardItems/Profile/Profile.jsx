import React from 'react'
import styles from './Profile.module.scss'
const Profile = ({ name, image, phone, dob, email, state, city, cover }) => {
    return (
        <div className={styles.container} style={{ backgroundImage: `url("${cover}")` }}>
            <div className={`${styles.avatar} ${styles.center}`}><img src={image} alt="Avatar profile" /></div>
            <div className={`${styles.heading}`}>
                <div className={styles.bio}>
                    <h3>{name}</h3>
                    <p>Phone : {phone}</p>
                    <p>Date of Birth: {dob}</p>
                    <p>Email: {email}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                </div>
            </div>

        </div>
    )
}

export default Profile