import React from 'react'
import './head.css'
import logo from './logo1.svg'

function Head() {
    return(
        <div>
            <div className='headBox'>
                <button className='homeBtn'>Home</button>
                <button className='aboutBtn'>About</button>
                <img alt='' src={logo} className='logoImg'/>
                <button className='photoBtn'>Photo</button>
                <button className='memberBtn'>Members</button>
            </div>
        </div>
    )
}
export default Head