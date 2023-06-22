import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container mt-2">
       <nav className="navbar" role="navigation" aria-label="main navigation">
  
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <Link to="/" className="navbar-item">
        خانه
      </Link>

      <Link to="/add" className="navbar-item">
        افزودن محصول
      </Link>
    </div>
  </div>

  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      تاپ لرن
    </a>
  </div>

  
</nav>
    </div>
  )
}

export default Navbar