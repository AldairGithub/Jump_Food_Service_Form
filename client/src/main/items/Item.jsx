import React, {useState} from 'react'

export default function Item(props) {
  const { updateAmount, item, itemId } = props

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [currentItem, setCurrentItem] = useState({
    name: item.name,
    price: item.price,
    amount: item.amount
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
      <div>
        <h3>{currentItem.name}</h3>
        <p>{currentItem.price}</p>
        <select onChange={handleChange}>
          {numbers.map(num => (
            <option name='amount' value={ num }>{ num }</option>
          ))}
        </select>
      </div>
    </>
  )
}