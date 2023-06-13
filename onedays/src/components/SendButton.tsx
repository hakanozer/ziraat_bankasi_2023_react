import React from 'react'
import '../App.css'

function SendButton( item: { 
    btnSendFnc: React.MouseEventHandler<HTMLButtonElement>,
    title?: string
    } ) {


  return (
    <button 
    className='btn btn-danger btnSave'
    style={{ marginBottom: 10 }}
    onClick={item.btnSendFnc}
    >
        {item.title != null ? item.title : "Save"}
    </button>
  )
}

export default SendButton