import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link to='/'>
        <img src='./logo_magnolia2.svg' width='70' alt=''></img>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">

        <li class="nav-item">
          <Link class="nav-link " to='/' >Inicio</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link " to='/nosotros' >Nosotros</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link " to='/items' >Items</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar