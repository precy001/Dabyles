import React from 'react'
import "../styles/general.css"
import Innovation from "../assets/icons/icons8-Innovation-60.png"
import Empowerment from "../assets/icons/icons8-clenched-fist-50.png"
import Protection from "../assets/icons/icons8-environment-care-50.png"
import Inspiraton from "../assets/icons/icons8-Inspiration-50.png"
import EachVision from './EachVision'

const Vision = () => {
  return (
    <div>
      <div className="section-head">
        Our Vision and Mission
      </div>

      <div className="mission-short-intro">
        We are dedicated to delivering innovative and sustainable engineering solutions with excellence, safety, and integrity. Guided by our vision, we redefine engineering to power industries, strengthen communities, protect the environment, and inspire progress for generations to come.
      </div>

      <div className="mission-container">
        <EachVision img={Innovation} head ="Innovation & Excellence" mission = "Deliver innovative, reliable, and sustainable engineering solutions with excellence, safety, and integrity to tackle complex challenges effectively."/>


        <EachVision img={Empowerment} head = "Empowering Communities" mission = "Strengthen industries and communities with solutions that provide reliable power, improve lives, and support long-term growth."/>


        <EachVision img={Protection} head="Protecting the Environment"  mission = "Promote clean, sustainable practices that safeguard the environment, minimize impact, and ensure a healthier planet for future generations."/>


        <EachVision img={Inspiraton} head="Inspiring Progress" mission = "Inspire progress by redefining engineering, creating smarter solutions, and fostering resilience for generations to come."/>
      </div>
    </div>
  )
}

export default Vision
