import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <NavLink to='/'>App</NavLink> | 
        <NavLink to='/profile'>Profile</NavLink>
    </div>
  )
}

export default Navbar