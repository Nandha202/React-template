import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid menu">
    <a class="navbar-brand col-4 text-light one2" href="#">REHABPY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-8 " id="navbarNav">
      <ul class="navbar-nav one1">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="#">Locations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="#">Conditions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light">Learning</a>
        </li>
        <button type="button" class="btn btn-light ">Contact Us</button>
        
      </ul>
      <i class="fa-solid fa-magnifying-glass one"></i>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar