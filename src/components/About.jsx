import React from 'react'
import "../styles/general.css"
import "../styles/about.css"

const About = () => {
  return (
    <div>
      <div className="section-head" id='about'>
        About Us
      </div>

      <div className="about-us">
        <span className="paragraph">
            Dablyes Engineering provides dependable and inventive industrial, mechanical, and welding solutions 
            that advance society and strengthen local economies.  
        </span>

        <span className="paragraph">
            With a focus on precision, safety, and sustainability, we turn challenging issues into innovative, 
            practical solutions, building a stronger, more resilient future with every project.
        </span>

        <span className="paragraph">
            The company continues to push the boundaries of engineering innovation, driven by a commitment 
            to excellence, ethics, and safety, with a focus on environmental sustainability and societal impact. 
        </span>
      </div>
    </div>
  )
}

export default About
