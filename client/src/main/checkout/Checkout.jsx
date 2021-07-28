import React, { useState, useEffect } from 'react'
import './Checkout.css'

export default function Checkout(props) {
  const { total } = props
  const tax = 0.05

  const [showCustomTip, setShowCustomTip] = useState(false)
  const [customTip, setCustomTip] = useState({
    number: 0
  })
  const [final, setFinal] = useState(0)

  useEffect(() => {
    const totalWithTax = total + (total * tax)

    setFinal(totalWithTax)

  }, [total])

  const handleCustomTip = (e) => {
    const { name, value } = e.target

    setCustomTip({
      [name]: value
    })
    if (value === '') {
      setCustomTip({
        number: 0
      })
      setFinal(
        total + (total * tax)
      )
    } else {
      setFinal(
        total + (total * tax) + parseInt(value)
      )
    }


  }

  const handleTip = (e) => {
    const { value } = e.target

    if (value === "custom") {
      setShowCustomTip(true)
    } else {
      setShowCustomTip(false)
      setFinal(
        total + (total * tax) + (total * value)
      )
    }
    
  }
  
  return (
    <>
      <div className='checkout-container'>
        <h1>Total: $ { total.toFixed(2) }</h1>
        <h3 style={{color: 'red'}}>Tax: {tax * 100}%</h3>
        <h3>Tip:
          <select style={{width: '150px', marginLeft: '10px'}} onChange={handleTip}>
            <option selected disabled>Select tip</option>
            <option value={0 / 100}>No tip</option>
            <option value={10 / 100}>10%</option>
            <option value={15 / 100}>15%</option>
            <option value={20 / 100}>20%</option>
            <option value="custom">Custom tip</option>
          </select>
          {showCustomTip &&
            <>
              <h3>Custom amount:
                <input
                  style={{marginLeft: '10px', height: '20px'}}
                  placeholder="Add your tip here"
                  type="number"
                  name="number"
                  value={customTip.number}
                  min="0"
                  max="999"
                  onChange={ handleCustomTip }
                />
              </h3>
            </>
          }

        </h3>
        <h1 style={{color: 'green'}}>Checkout: $ {final.toFixed(2)}</h1>
      </div>
    </>
  )
}