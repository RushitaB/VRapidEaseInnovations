import React from 'react'

function Navigationbar() {
  return (
    <nav id="navbar" className="navbar">
    <ul>
      <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
      <li><a className="nav-link scrollto" href="#about">About</a></li>
      <li><a className="nav-link scrollto" href="#services">Services</a></li>
      <li><a className="nav-link scrollto" href="#operations">Operations</a></li>
      <li><a className="nav-link scrollto" href="#assets">Benefits</a></li>
      <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>
  )
}

export default Navigationbar
