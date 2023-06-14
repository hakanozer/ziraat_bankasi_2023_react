import React, { useEffect } from 'react'
import { login } from '../services/DummyService'
import { Jwt } from '../models/Jwt'

function Login() {

  useEffect(() => {

    const sendJwt:Jwt = {
        username: 'kminchelle',
        password: '0lelplR'
    }
    login(sendJwt).then( res => {
        console.log(res.data.token)
    }).catch(err => {
        console.error(err)
    })

  }, [])
    

  return (
    <div>Login</div>
  )
}

export default Login
