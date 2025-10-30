import React from 'react'
import '../Styles/Header.css'
import logo from '../assets/images/DABYLES ENG LTD XD.png'
import Navigation from './Navigation'
import { useRef } from 'react'

const Header = () => {

  const menuBtn = useRef(null)
  const mobileMenu = useRef(null)

  const handleMenuClick = () => {
    menuBtn.current.classList.toggle('is-active')
    mobileMenu.current.classList.toggle('is-active')
  }

  return (
    <header className="header">
      <center>
      <div className="nav-container">
        <div className="logo"><img src={logo} width={60} /></div>

        
     <button className="hamburger" ref={menuBtn}onClick={handleMenuClick}>
        <div className="bar"></div>
      </button>
      <div className="mobile-nav" ref={mobileMenu}>
        <button><a href="">Home</a></button>
        <button><a href='#about'>About</a></button>
        <button><a href='#services'>Contact</a></button>
        <button><a href='#contact'>Contact Us</a></button> 
      </div>

       <div className="navigation">
<Navigation />
       </div>

        <button className="cta-btn">
          Get in touch
        </button>
      </div>
      </center>
    </header>
  )
}

export default Header
