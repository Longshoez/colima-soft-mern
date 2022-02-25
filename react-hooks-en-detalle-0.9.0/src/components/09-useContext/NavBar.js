import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" to="#">useContext</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink activeclassname="active" className="nav-item nav-link" to="/">Home</NavLink>
          <NavLink activeclassname="active" className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink activeclassname="active" className="nav-item nav-link" to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  )
}

{/**

  NavLink vs Link
  Link works as a default nav link to a certain route
  NavLink works the same way, the only difference is that we can make use of the activeClassName
  property which allows us to set an active styling class in case a specific link is currently active
  in our navigation bar

  you used to have to use the 'exact' property so the main link url wouldnt show as selected
  but it seems on this version of react router (v6) its no longer needed

 */}

export default NavBar