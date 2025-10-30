import React from "react";
import "../styles/footer.css";
import Logo from "../assets/images/DABYLES ENG LTD XD.png"
import whatsapp from '../assets/icons/icons8-whatsapp-50.png'
import tiktok from '../assets/icons/icons8-tiktok-50.png'
import x from '../assets/icons/icons8-x-50.png'
import instagram from '../assets/icons/icons8-instagram-50.png'
import linkedin from '../assets/icons/icons8-linkedin-50.png'
import facebook from '../assets/icons/icons8-facebook-50.png'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Top area: 4 columns */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={Logo} width={82} />
          </div>

          {/* Small copy of tagline to keep same visual distribution */}
          <div className="footer-tagline">
            <h4 className="muted-accent">Powering a</h4>
            <p className="muted-small">Sustainable future</p>
          </div>

          <div className="footer-links">
            <h4 className="muted-accent">Explore</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="muted-accent">Connect with us</h4>
            <address className="muted-small">
              4A Scintilla Close, Opposite Lekki Paradise 1 Estate, Chevron Alternative Drive, Lekki Lagos.
            </address>
            <a className="contact-mail" href="mailto:info@dabyles.com.ng">info@dabyles.com.ng</a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom area */}
        <div className="footer-bottom">
          <div className="copyright">&copy; {new Date().getFullYear()} Dabyles. All rights reserved</div>

          <div className="socials" aria-label="social links">
            <a className="social-btn" href="https://wa.me/2348032175753" aria-label="X">
              <img src={whatsapp} width={30} alt="" />
            </a>

            <a className="social-btn" href="#" aria-label="X">
              <img src={tiktok} width={30} alt="" />
            </a>

            <a className="social-btn" href="https//x.com/dabylesint" aria-label="X">
              <img src={x} width={30} alt="" />
            </a>

            <a className="social-btn" href="#" aria-label="Instagram">
              <img src={instagram} width={30} alt="" />
            </a>

            <a className="social-btn" href="#" aria-label="LinkedIn">
              <img src={linkedin} width={30} alt="" />
            </a>

            <a className="social-btn" href="#" aria-label="Facebook">
              <img src={facebook} width={30} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
