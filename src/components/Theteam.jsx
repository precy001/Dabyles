import React from 'react'
import "../styles/general.css"
import "../styles/theteam.css"
import Teamcard from './Teamcard'
import popoola from "../assets/images/popoola.jpg"
import noProfile from "../assets/images/noprofile.jpeg"
import adesusi from "../assets/images/adesusi.jpg"

const Theteam = () => {
  return (
    <div>
      <div className="section-head">
        Meet The Team
      </div>
      
      <div className="team-container">
        <Teamcard memberName = "Mr. Adedayo Osore" designation = "Director" mail = "dayoosore@dabyles.com " img = {noProfile}/>
        <Teamcard memberName = "Mr. Abayomi Popoola" designation = "Director" mail = "yomipopoola@dabyles.com" img = {popoola}/>
           <Teamcard memberName = "Dr. Olanrewaju Adesusi" designation = "Director" mail = "lanreadesusi@dabyles.com" img = {adesusi}/>
      </div>
    </div>
  )
}

export default Theteam
