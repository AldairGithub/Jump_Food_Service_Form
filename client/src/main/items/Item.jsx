import React, {useState} from 'react'

export default function Item(props) {
  const { updateAmount, item, itemId } = props

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
        <input
          type='number'
          name='amount'
          min='0'
          max='999'
          value={currentItem.amount}
          onChange={handleChange}
        />
      </div>
    </>
  )
}