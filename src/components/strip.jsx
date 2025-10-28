import React from 'react'
import { FaIndustry, FaCogs, FaTools } from "react-icons/fa"
import "../styles/strip.css"
const strip = () => {
  return (
    <div>
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
  )
}

export default strip
