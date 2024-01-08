import React, { PureComponent } from 'react'

import './MedicaIntro.scss'
import IntroToAdd from '../../Components/IntroToAdd/IntroToAdd'
import Emergency from '../../Components/Emergency/Emergency'
import Doctors from '../../Components/Doctors/Doctors'
import Appointment from '../../Components/Appointment/Appointment'

const MedicaIntro = () => {
  return (
    <div className='MedicaIntroContainer'>
      <span><Emergency /></span>
      <span><Doctors /></span>
      <span className='SpanAppoint'><Appointment /></span>
    </div>
  )
}
export default MedicaIntro