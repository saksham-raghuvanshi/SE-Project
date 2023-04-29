import React from 'react'
import contact from "../img/contact.webp"
import "./CSS/Contactus.css"

export default function Contactus() {
  return (
    <div>
        <div className="container-fluid" id="achieve">
                <img src={contact} alt="Snow" id="background"/>
                    <div className="centered">Contact us</div>
        </div>

<div className='contactus'>

  <h1>Contact Us</h1>
  <form>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your name" required />
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Your email" required />
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" placeholder="Enter your message here" required ></textarea>
    
    <button type="submit">Submit</button>

  </form>
  </div>

      
    </div>
  )
}
