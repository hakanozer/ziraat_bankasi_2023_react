import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomNavLink( item: { to:string, title: string } ) {
  return (
    <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to={item.to}>{item.title}</NavLink>
  )
}

export default CustomNavLink