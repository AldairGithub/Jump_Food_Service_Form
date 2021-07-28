import React from 'react'

export default function Checkout(props) {
  const { total } = props
  
  return (
    <>
      <div>
        <h1>Total:</h1>
        <h1>{ total }</h1>
      </div>
    </>
  )
}