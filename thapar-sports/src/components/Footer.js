import React from 'react'
import "./CSS/style.css"


export default function Footer() {
  return (
<body className="d-flex flex-column " id="footer">
<div className="container-fluid bg-body-tertiary mt-auto ">
<div className="container mt-5">
  <footer className="row">
    <div className="col-sm mb-3">
    <a id="brand" className="navbar-brand" href="#"><img src="https://www.thapar.edu/images/logo.png" alt="Thapr-sports"></img></a>
    </div>

    <div className="col-sm mb-3">
      <h5>About us</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="/about-us" className="nav-link p-0 text-muted">About</a></li>
        <li className="nav-item mb-2"><a href="/about-us" className="nav-link p-0 text-muted">Our mission</a></li>
        <li className="nav-item mb-2"><a href="/about-us" className="nav-link p-0 text-muted">Synthetic Track</a></li>
        <li className="nav-item mb-2"><a href="/about-us" className="nav-link p-0 text-muted">Motivation</a></li>  
      </ul>
    </div>

    <div className="col-sm mb-3">
      <h5>Special pages</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div className="col-sm mb-3">
      <h5>Contact us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
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

