import React from 'react'
import SendButton from './SendButton'

function Login( item: 
    {
        sendForm: React.FormEventHandler<HTMLFormElement>,
        setEmail: React.Dispatch<React.SetStateAction<string>>,
        setPassword: React.Dispatch<React.SetStateAction<string>>,
        customFcnSave: React.MouseEventHandler<HTMLButtonElement>,
    }) {
  return (
    <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <h2>Admin Login</h2>
          <form onSubmit={ (evt) => item.sendForm(evt) }>
            <div className='mb-3'>
              <input required onChange={(evt) => item.setEmail(evt.target.value) } type='email' className='form-control' placeholder='E-Mail'/>
            </div>
            <div className='mb-3'>
              <input required onChange={(evt) => item.setPassword(evt.target.value) } type='password' className='form-control' placeholder='Password'/>
            </div>
            <button className='btn btn-success'>Send</button>
          </form>
        </div>
        <SendButton btnSendFnc={item.customFcnSave} title={'Save form'} />
        <div className='col-sm-4'></div>
      </div>
  )
}

export default Login