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
        {/* <Link className="nav-link" to="/login"><i className="fa-solid fa-user"></i></Link> */}

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
    <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

    <div class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX-2">Password</label>
    </div>

    <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
    </div>

    </div>
    <div className="modal-footer d-flex justify-content-center">
    <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
    </div>
  </div>
</div>
</div>

  </div>















  )
  
}

export default Nav