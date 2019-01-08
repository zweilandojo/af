import React from 'react'
import { NavLink } from 'react-router-dom'

const NavFooter = () => {
  return (
    <div id="NavFooter" className="nav-footer">
      <NavLink to="/" exact className="nav-footer_link" activeClassName="active">
        <div className="nav-icon nav-icon-home"></div>
        <div className="">
          Home
        </div>
      </NavLink>
      {/*
      <NavLink to="/search" className="nav-footer_link" activeClassName="active">
        <div className="nav-icon nav-icon-search"></div>
        <div className="">
          Search
        </div>
      </NavLink>
      */}
      <NavLink to="/account/profile" className="nav-footer_link" activeClassName="active">
        <div className="nav-icon nav-icon-profile"></div>
        <div className="">
          Profile
        </div>
      </NavLink>
    </div>
  )
}

export default NavFooter
