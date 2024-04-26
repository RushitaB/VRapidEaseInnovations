import React from 'react'
import Navigationbar from './navigationbar'

function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between">

      <div className="logo">
        <h1><a href="#">Rapid Ease Innovations</a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
      </div>
        <Navigationbar/>
    </div>
  </header>

  )
}

export default Header
