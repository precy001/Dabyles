import React from 'react'
import "../styles/general.css"
import "../styles/services.css"
import ServicesCard from './ServicesCard'
import materialScienceEngineering from "../assets/images/materialsEngineering.jpg"
import environmentalEngineering from "../assets/images/environmentalEngineering.jpg"
import energyInfrastructure from "../assets/images/energyInfrastructure.jpg";
import training from "../assets/images/training.jpg"

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="section-head">
        Our services
      </div>


    <div className="services-card-container">
      <ServicesCard bgImg= {materialScienceEngineering} title="Material Science Engineering" desc="We develop innovative materials with advanced properties, ensuring durability, sustainability, and efficiency across diverse engineering and industrial applications."/>


      <ServicesCard bgImg = {environmentalEngineering} title="Environmental Engineering Services" desc="We deliver sustainable environmental engineering services, addressing pollution control, waste management, and eco-friendly practices for a cleaner future."/>


      <ServicesCard bgImg = {energyInfrastructure} title="Energy Infrastructure Solutions" desc="Our energy solutions focus on designing, implementing, and maintaining reliable systems for power generation, transmission, and sustainable infrastructure development."/>


      <ServicesCard bgImg = {training} title="Training Services" desc="We provide specialized training programs that enhance technical expertise, safety practices, and industry knowledge for engineers and professionals."/>
    </div>
    </div>
  )
}

export default Services
