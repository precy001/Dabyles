import Header from './Header'
import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <Header />
        <div className="short-intro">
        <div className="top-text">
            Engineering and Construction Services for Energy Infrastructure.
        </div>
            <div className="text">
            Driven By Passion For 
             <span className='special'>Sustainable Solutions.</span>
            </div>
        </div>

        <div className="explore-btn"><a href="">Explore</a></div>
      </div>
    </div>
  )
}

export default Hero
