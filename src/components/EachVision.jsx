import React from 'react'
import "../styles/vision.css"

const EachVision = (props) => {
  return (
    <div>
      <div className="mission-card">
        <img src={props.img} alt="" width={40}/>

      <div className="mission-head">
        {props.head}
      </div>

        <div className="missions">
            {props.mission}
        </div>
      </div>
    </div>
  )
}

export default EachVision
