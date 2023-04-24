import React from 'react';
import "./CSS/style.css";
import {Link} from 'react-router-dom'

const Nav = () =>{
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container">
  <Link id="brand" className="navbar-brand" to="/"><img src="https://www.thapar.edu/images/logo.png" alt="Thapr-sports"></img></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">About us</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/facilities">
        Facilities
        </Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="/achievements">Achievements</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/faculty">Faculty</Link>
        
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/events">Events</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" data-toggle="modal" data-target="#modalLoginForm"><i className="fa-solid fa-user"></i></Link>

        {/* <div className="text-center">
<Link to="" className="btn btn-default btn-rounded mb-4"  >Launch
  Modal Login Form</Link>
</div> */}


        

      </li>
    </ul>
    
  </div>
</div>
</nav>


<div className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header text-center">
      <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
      <button type="button" className="close btn btn-primary" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body mx-3">
      <div className="md-form mb-5">
        <i className="fas fa-user prefix grey-text"></i>
        <label data-error="wrong" data-success="right" for="defaultForm-number">Your Rollno</label>
        <input placeholder="Enter Your Rollno" type="number" id="defaultForm-number" className="form-control validate"/>
        
      </div>

      <div className="md-form mb-4">
        <i className="fas fa-lock prefix grey-text"></i>
        <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
        <input placeholder="Enter Your Password" type="password" id="defaultForm-pass" className="form-control validate"/>
        
      </div>

    </div>
    <div className="modal-footer d-flex justify-content-center">
      <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
</div>

  </div>















  )
  
}

export default Nav