import React, { useReducer, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { dataReducer, numx } from '../utils/dataReducer'

function Navbar() {

  const [state, dispatchData] = useReducer(dataReducer, numx)
  const [val, setVal] = useState('')

  return (
    <div>
        <NavLink to='/'>App</NavLink> | 
        <NavLink to='/profile'>Profile</NavLink>
        <hr></hr>
        <h3>{state}</h3>
        <input onChange={(evt) => setVal(evt.target.value)} placeholder='Val'></input>
    </div>
  )
}

export default Navbar