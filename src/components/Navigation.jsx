import React from 'react'
import "../styles/header.css"

const Navigation = () => {
 
  return (
    <div>
      <div className="nav-links">
        <div>
        <a href="" className='active-link'>Home</a>

        </div>

        <div>
        <a href="#about" className='link'>About</a>
        </div>

        <div>
        <a href="#services" className='link'>Services</a>
        </div>


        <div>
        <a href="#contact" className='link'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation
