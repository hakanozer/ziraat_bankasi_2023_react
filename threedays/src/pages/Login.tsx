import React, { useEffect, useState } from 'react'
import { login } from '../services/DummyService'
import { Jwt } from '../models/Jwt'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()  

  const [username, setUsername] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR') 


  const sendForm = (evt:React.FormEvent) => {
    evt.preventDefault()
    if ( username == "" ) {
        toast.error("Username Empity!")
    }else if ( password == "" ) {
        toast.error("Passsword Empity!")
    }else {
        const sendJwt:Jwt = {
            username: username,
            password: password
        }
        login(sendJwt).then( res => {
            console.log('1', "1")
            if ( res != null && res.status === 200 && res.data.token ) {
                console.log('2', "2")
                sessionStorage.setItem("token", res.data.token)
                navigate('/dashboard')
            }
        })
    }

  }
    

  return (
    <form onSubmit={sendForm} className='col-sm-4'>
    <h2>Admin Login</h2>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input value={username} onChange={(evt) => setUsername(evt.target.value)} type="text" className="form-control" id="exampleInputEmail1"/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input value={password} onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3 form-check">
        <input  type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login
