import React from 'react'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <a href="/">
            <img src={logo} className="img-fluid float-left" alt="Logo" />
          </a>
          <div className="ml-4 container">
            <div className="row">
              <h3 className="text-light mt-1 mb-1">
                Equipment
              </h3>
            </div>
            <div className="row">
              <h6 className="text-primary">
                Pathfinder Inventory List
              </h6>
            </div>
          </div>
          {/* sidebar toggle */}
        </div>
      </div>
    </nav>
  )
}

export default Header
