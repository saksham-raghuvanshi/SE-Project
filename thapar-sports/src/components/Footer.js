import React from 'react'
import {Link} from 'react-router-dom';
import "./CSS/style.css"



export default function Footer() {
  return (
<body className="d-flex flex-column" id="footer">
<div className="container-fluid bg-body-tertiary mt-auto ">
<div className="container mt-5">
  <footer className="row">
    <div className="col-sm mb-3">
    <Link id="brand" className="navbar-brand" to="/"><img src="https://www.thapar.edu/images/logo.png" alt="Thapr-sports"></img></Link>
    </div>

    <div className="col-sm mb-3">
      <h5>About us</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link to="/about-us" className="nav-link p-0 text-muted">About</Link></li>
        <li className="nav-item mb-2"><Link to="/about-us" className="nav-link p-0 text-muted">Our mission</Link></li>
        <li className="nav-item mb-2"><Link to="/about-us" className="nav-link p-0 text-muted">Synthetic Track</Link></li>
        <li className="nav-item mb-2"><Link to="/about-us" className="nav-link p-0 text-muted">Motivation</Link></li>  
      </ul>
    </div>

    <div className="col-sm mb-3">
      <h5>Special pages</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/achievements" className="nav-link p-0 text-muted">Football</Link></li>
        <li className="nav-item mb-2"><Link to="/achievements" className="nav-link p-0 text-muted">Badminton</Link></li>
        <li className="nav-item mb-2"><Link to="/achievements" className="nav-link p-0 text-muted">Basketball</Link></li>
        <li className="nav-item mb-2"><Link to="/achievements" className="nav-link p-0 text-muted">Cricket</Link></li>
        <li className="nav-item mb-2"><Link to="/achievements" className="nav-link p-0 text-muted">Tennis</Link></li>
      </ul>
    </div>

    <div className="col-sm mb-3">
      <h5>Contact us</h5>
      <br/>
     <p>Phone<br>
     </br>
+91 1800 202 4100
<br/>
<br/>
E-mail: info@thapar.edu
<br/>
<br/>
Main Campus<br/>
Bhadson Rd, Adarsh Nagar, Prem Nagar, Patiala, Punjab 147004</p>
      </div>
      
      <div className="row">


      </div>
    
      <div className="row py-4 my-4 border-top">
      
      <p>&copy; 2023 Thapar University, Inc. All rights reserved.</p>
     
      </div>



  </footer>
</div> 
</div>       
</body>
        
  )
}

