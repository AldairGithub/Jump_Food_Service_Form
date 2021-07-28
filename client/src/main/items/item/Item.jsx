import React, { useState } from 'react'
import './Item.css'

export default function Item(props) {
  const { updateAmount, item, itemId } = props

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [currentItem, setCurrentItem] = useState({
    name: item.name,
    price: item.price,
    amount: item.amount,
    img: item.img
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setCurrentItem({
      ...currentItem,
      [name]: parseInt(value)
    })
    updateAmount(itemId, parseInt(value))
  }

  return (
    <>
      <div className="item-container">
        <div className='img-container'>
          <img alt={currentItem.name} className='img' src={currentItem.img}/>
        </div>
        <h3>{currentItem.name}</h3>
        <p>$ {currentItem.price}</p>
        <select className='select' onChange={handleChange}>
          {numbers.map(num => (
            <option name='amount' value={ num }>{ num }</option>
          ))}
        </select>
      </div>
    </>
  )
}