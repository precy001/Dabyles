import React from 'react'
import "../styles/contact.css"
import GoogleMapEmbed from './GoogleMapEmbed'
import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const [email, setEmail] = useState("")
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const [message, setMessage] = useState("")
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
  return (
    <div>
        <center>
        <div className="section-head" id='contact'>
            Contact Us
        </div>
        <div className="contact-note">
            We value open communication and are always ready to connect with you. Whether you have inquiries about our engineering solutions, need technical support, or wish to discuss a new project, our team is here to assist. Please use the form provided or locate us easily through the map for direct visits.
        </div>
        </center>
      <div className="contact-section">
        <div className="contact-form">
            <label htmlFor="">Name</label>
            <input 
            type="text" 
            value={name}
            placeholder='John Doe'
            onChange={handleNameChange}
            />


            <label htmlFor="">Email Address</label>
            <input
             type="text"
             placeholder='johndoe@example.com'
             value={email}
             onChange={handleEmailChange}
             />

            <label htmlFor="">Message</label>
            <textarea 
            name="" id="" 
            placeholder='Type a message'
            value={message}
            onChange={handleMessageChange}
            >
            </textarea>
            <input type="submit" />
        </div>

        <div className="google-map">
           <GoogleMapEmbed width="100%"/> 
        </div>
      </div>

      
    </div>
  )
}

export default Contact
