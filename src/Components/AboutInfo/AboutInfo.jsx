import React from 'react'
import './AboutInfo.scss'
import { Icon } from '@iconify/react';
const AboutInfo = ({ heading, content, imageLink,icon_name }) => {
    return (
        <div className='about_container '>
            <div className="content centerElements">
                <div>
            <Icon icon={icon_name} width="100" color="#48b0e0" />
                    <h2 className='heading'>{heading}</h2>
                    <p className='para'>{content}</p>
                </div>
            </div>
            <div className="aboutImage centerElements">
                <img src={imageLink} alt="blog info descriptor" />
            </div>
        </div>
    )
}

export default AboutInfo