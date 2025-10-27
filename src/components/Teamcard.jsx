import React from 'react'
import noProfile from "../assets/images/noprofile.jpeg"


const Teamcard = (props) => {
  return (
    <div>
      <div className="card">
                    <div className="img">
                        <img src={props.img} alt="" draggable={false} width={200}/>
                    </div>
                    <h2>{props.memberName}</h2>
                    <span>{props.designation}</span>
                    <div className="mail"><a href={`mailto:${props.mail}`}>{props.mail}</a></div>
        </div>
    </div>
  )
}

export default Teamcard
