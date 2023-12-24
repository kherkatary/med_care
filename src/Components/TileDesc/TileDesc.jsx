import React from 'react'
import './TileDesc.scss'

function TileDesc(props) {
  return (
   <>
    <div className='overall-div'>
      <p className='heading'>{props.name}</p>
      <p className='small-heading'>HOME | {props.name}</p>
    </div>
   </>
  )
}

export default TileDesc
