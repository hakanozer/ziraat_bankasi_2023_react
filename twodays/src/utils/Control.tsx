import React from 'react'
import NavBar from '../components/NavBar'
import { Navigate } from 'react-router-dom'

function Control(
    item: { component: JSX.Element }
) {

  const user = localStorage.getItem("user")
  return (
    <>
    { user != null 
        ?
         <>
            { user == "10" && 
                <>
                    <NavBar />
                    {item.component} 
                </> 
            }
         </>

        :
         <Navigate to={'/'} replace />
    }
    
    </>
    
  )
}

export default Control