import React from 'react'
import './photo.css'

function Photo({photo}) {
  return (
    <div>
        <div className="scollBox">
            <img className="scollImg" src={photo} alt=""/>
        </div>
    </div>
  )
}

export default Photo