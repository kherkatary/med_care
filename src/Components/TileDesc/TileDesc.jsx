import React from 'react'
import './TileDesc.scss'

const TileDesc=(props)=> {
  return (
   <>
    <div className='overall-div'>
      <p className='heading'>{props.name}</p>
      <p className='small-heading'>HOME | {props.description}</p>
    </div>
   </>
  )
}

export default TileDesc
