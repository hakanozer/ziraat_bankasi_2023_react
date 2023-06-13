import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

  const params = useParams()
  console.log(params)

  return (
    <>
        <div>Detail</div>
        <h3>{ params.id }</h3>
        <div>{ JSON.stringify(params) }</div>
    </>
  )
}

export default Detail