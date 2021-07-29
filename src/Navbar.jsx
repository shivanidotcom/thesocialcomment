 import React from 'react';
 import "./Navbar.css";
 import { Link } from 'react-router-dom';
 
 const Navbar = () => {
     return (
         <div className="container mt-2">
             <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid ml-5 mr-5">
    <a class="navbar-brand" href="#"><Link to="/home"><img src="https://www.pngarea.com/pngs/67/6492820_kickstarter-logo-png-triangle-logo-design-png-hd.png" width="50" height="50"></img></Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
        <li class="nav-item ml-5">
          <a class="nav-link active" aria-current="page" href="#"><b><Link to="/integration">Integration</Link></b></a>
        </li>
        <li class="nav-item ml-5">
          <a class="nav-link active" href="#"><b><Link to="/pricing">Pricing</Link></b></a>
        </li>
        <li class="nav-item ml-5">
          <a class="nav-link active" href="#"><b><Link to="/blog">Blog</Link></b></a>
        </li>
        <li class="nav-item ml-5">
          <a class="nav-link active" href="#"><b><Link to="/aboutus">About Us</Link></b></a>
        </li>
        
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-primary" type="submit"><b>Get early access</b></button>
      </form>
    </div>
  </div>
</nav>
         </div>
     );
 };
 
 export default Navbar;