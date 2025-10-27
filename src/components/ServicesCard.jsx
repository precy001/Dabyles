import React from 'react'
import "../styles/services.css"

const ServicesCard = (props) => {
  return (
    <div>
      <div className="each-service-card" style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${props.bgImg})` }}>

        <div className="texts">
        <div className="each-head-text">
          {props.title}
        </div>

        <div className="service-desc">
          {props.desc}
        </div>

        </div>
      </div>
    </div>
  )
}

export default ServicesCard
