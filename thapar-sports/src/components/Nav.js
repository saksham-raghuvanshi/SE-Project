import React from 'react'
import "./CSS/Nav.css"
//import {Link} from 'react-router-dom'

const Nav=()=>{
  return(


    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a id="brand" class="navbar-brand" href="#"><img src="https://www.thapar.edu/images/logo.png" alt="Thapr-sports"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facilitics
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Cricket</a></li>
            <li><a class="dropdown-item" href="#">Football</a></li>
            <li><a class="dropdown-item" href="#">Basketball</a></li>
          </ul>
          </li>
          
          <li class="nav-item">
          <a class="nav-link" href="#">Achievements</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Faculty</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-user"></i></a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>




  );
}

export default Nav;