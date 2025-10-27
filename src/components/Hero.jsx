import React from 'react'
import { FaIndustry, FaCogs, FaTools } from "react-icons/fa"
import Header from './Header'
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
            <span className='special'> Sustainable Solutions.</span>
          </div>
        </div>

        <div className="explore-btn">
          <a href="">Explore</a>
        </div>

       
        <div className="industry-strip">
          <div className="industry-boxleft">
            <FaIndustry className="icon" />
            <h3>Industrial Solutions</h3>
            <p>We build systems that power growth and efficiency in modern industries.</p>
          </div>

          <div className="industry-boxcenter">
            <FaCogs className="icon" />
            <h3>Mechanical Solutions</h3>
            <p>Innovative designs that keep operations smooth and reliable.</p>
          </div>

          <div className="industry-boxright">
            <FaTools className="icon" />
            <h3>Welding Solutions</h3>
            <p>Precision welding and fabrication services built for durability and strength.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
