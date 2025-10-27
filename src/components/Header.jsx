import React from 'react'
import '../Styles/Header.css'
import logo from '../assets/images/Dabylesint.png'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo"><img src={logo} width={60} /></div>

       <div className="navigation">
<Navigation />
       </div>

        <button className="cta-btn">
          Get in touch
        </button>
      </div>
    </header>
  )
}

export default Header
