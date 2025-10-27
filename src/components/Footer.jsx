import React from "react";
import "../styles/footer.css";
import Logo from "../assets/images/Dabyles_logo.png"

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
              2, Adegbola Street, Success Estate, Ijede, Ikorodu, Lagos
            </address>
            <a className="contact-mail" href="mailto:info@solnergy.com">info@dabyles.com</a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom area */}
        <div className="footer-bottom">
          <div className="copyright">&copy; {new Date().getFullYear()} Dabyles. All rights reserved</div>

          <div className="socials" aria-label="social links">
            <a className="social-btn" href="#" aria-label="X">
              {/* simple X icon */}
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </a>

            <a className="social-btn" href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zM12 8.7a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zM17.2 6.3v.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </a>

            <a className="social-btn" href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path d="M4 3.5A1.5 1.5 0 102 5a1.5 1.5 0 002-1.5zM3.5 8.5H6.5V20H3.5zM9 8.5h2.8v1.5h.04c.39-.75 1.34-1.5 2.76-1.5 2.95 0 3.5 1.94 3.5 4.46V20h-3V14.5c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95V20H9z" fill="currentColor"/></svg>
            </a>

            <a className="social-btn" href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.2c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H20l-1 3h-2v7A10 10 0 0022 12z" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
