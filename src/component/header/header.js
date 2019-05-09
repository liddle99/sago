import React from 'react'
import './header.css'
import logo from './logo1.svg'

function header() {
  return (
    <div>
      <div className='headBox'>
        <a href="/"className='homeBtn'>Home</a>
        <a className='aboutBtn'>About</a>
        <img alt='' src={logo} className='logoImg'/>
        <a href="/photo"className='photoBtn'>Photo</a>
        <a href="/members" className='memberBtn'>Members</a>
      </div>
    </div>
  )
}

export default header
