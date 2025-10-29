import React, { useRef } from 'react'
import { FaIndustry, FaCogs, FaTools } from "react-icons/fa"
import Header from './Header'
import "../styles/hero.css"
import "../styles/strip.css"
import defaultBg from '../assets/images/engbg2.jpg'
import industrial from '../assets/images/126330.jpg'
import mechanical from '../assets/images/76125.jpg'
import welding from '../assets/images/19574.jpg'

const Hero = () => {
  const boxLeftRef = useRef(null)
 
   const boxCenterRef = useRef(null)
 
   const boxRightRef = useRef(null)

   const heroRef = useRef(null)
 
   const clickChange = (boxWhich) => {
     if(boxWhich == "left"){
       boxLeftRef.current.style.backgroundColor = "var(--primary-color)"
       boxCenterRef.current.style.backgroundColor = "#fff"
       boxRightRef.current.style.backgroundColor = "#fff"
 
       boxLeftRef.current.style.color = "#fff"
       boxCenterRef.current.style.color = "#666"
       boxRightRef.current.style.color = "#666"

       heroRef.current.style.background =`linear-gradient(#000, rgba(0, 0, 0, 0.5)), url(${industrial})`;
       heroRef.current.style.backgroundSize = "cover";
       heroRef.current.style.backgroundPosition = "center";
       heroRef.current.style.backgroundRepeat  = "no-repeat"

      setTimeout(()=> {
        heroRef.current.style.background =`linear-gradient(#000, rgba(0, 0, 0, 0.5)), url(${defaultBg})`;
        heroRef.current.style.backgroundSize = "cover";
       heroRef.current.style.backgroundPosition = "center";
       heroRef.current.style.backgroundRepeat  = "no-repeat"
      }, 5000)

     }else if(boxWhich == "center"){
       boxLeftRef.current.style.backgroundColor = "#fff"
       boxCenterRef.current.style.backgroundColor = "var(--primary-color)"
       boxRightRef.current.style.backgroundColor = "#fff"
 
       boxLeftRef.current.style.color = "#666"
       boxCenterRef.current.style.color = "#fff"
       boxRightRef.current.style.color = "#666"

       heroRef.current.style.background =`linear-gradient(#000, rgba(0, 0, 0, 0.5)), url(${mechanical})`;
       heroRef.current.style.backgroundSize = "cover";
       heroRef.current.style.backgroundPosition = "center";
       heroRef.current.style.backgroundRepeat  = "no-repeat"

      setTimeout(()=> {
        heroRef.current.style.background =`linear-gradient(#000, rgba(0, 0, 0, 0.5)), url(${defaultBg})`;
        heroRef.current.style.backgroundSize = "cover";
       heroRef.current.style.backgroundPosition = "center";
       heroRef.current.style.backgroundRepeat  = "no-repeat"
      }, 5000)

     }else if(boxWhich == "right"){
       boxLeftRef.current.style.backgroundColor = "#fff"
       boxCenterRef.current.style.backgroundColor = "#fff"
       boxRightRef.current.style.backgroundColor = "var(--primary-color)"
 
       boxLeftRef.current.style.color = "#666"
       boxCenterRef.current.style.color = "#666"
       boxRightRef.current.style.color = "#fff"

        heroRef.current.style.background =`linear-gradient(#000, rgba(0, 0, 0, 0.5)), url(${welding})`;
       heroRef.current.style.backgroundSize = "cover";
       heroRef.current.style.backgroundPosition = "center";
       heroRef.current.style.backgroundRepeat  = "no-repeat"

      setTimeout(()=> {
        heroRef.current.style.background =`linear-gradient(#000, rgba(0, 0, 0, 0.5)), url(${defaultBg})`;
        heroRef.current.style.backgroundSize = "cover";
       heroRef.current.style.backgroundPosition = "center";
       heroRef.current.style.backgroundRepeat  = "no-repeat"
      }, 5000)
     }
   }

  return (
    <div>
      <div className="hero" ref={heroRef}>
        <Header />

        <div className="short-intro">
          <div className="top-text">
            Engineering and Construction Services for Energy Infrastructure.
          </div>

          <div className="text">
            Driven by Passion for 
            <span className='special'> Sustainable Solutions.</span>
          </div>
        </div>

        <div className="explore-btn">
          <a href="">Explore</a>
        </div>

       
      
      </div>
      <center>
         <div className="industry-strip">
           <div className="industry-boxleft" ref={boxLeftRef} onClick={() => clickChange("left")}>
             <FaIndustry className="icon" />
             <h3>Industrial Solutions</h3>
             <p>We build systems that power growth and efficiency in modern industries.</p>
           </div>
 
           <div className="industry-boxcenter" ref={boxCenterRef} onClick={() => clickChange("center")}>
             <FaCogs className="icon" />
             <h3>Mechanical Solutions</h3>
             <p>Innovative designs that keep operations smooth and reliable.</p>
           </div>
 
           <div className="industry-boxright" ref={boxRightRef} onClick={() => clickChange("right")}>
             <FaTools className="icon" />
             <h3>Welding Solutions</h3>
             <p>Precision welding and fabrication services built for durability and strength.</p>
           </div>
         </div>
         </center> 

    </div>
  )
}

export default Hero
