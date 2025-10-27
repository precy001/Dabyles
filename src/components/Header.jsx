import React from 'react'
import Navigation from './Navigation'
import "../styles/header.css"
import Logo from "../assets/images/Dabyles_logo.png"

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
            <img src={Logo} alt="" width={82}/>
        </div>

        <div className="navigation">
            <Navigation />
        </div>

        <div className="ex-link">
            <a href="">Get in touch</a>
        </div>
      </div>
    </div>
  )
}

export default Header
