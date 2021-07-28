import React, { useState, useEffect } from 'react'

import ItemList from './items/ItemList'
import Checkout from './checkout/Checkout'

export default function Main() {
  let items = [
    { name: 'banana', price: 9.99 , amount: 1},
    { name: 'apple', price: 5.99 , amount: 1},
    { name: 'grapes', price: 3.99, amount: 1},
    { name: 'pineapple', price: 4.99, amount: 1},
    { name: 'coconut', price: 13.99, amount: 1}
  ]

  const [list, setList] = useState(items)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalAmount = list.reduce((total, item) => total = total + (item.price * item.amount), 0)
    setTotal(totalAmount)
  }, [list])

  const updateAmount = (id, amount) => {
    const newList = [...list]
    newList[id].amount = amount
    setList(
      newList
    )
  }
  return (
    <>
      <h1>This is the main component, where all code should be</h1>
      <ItemList
        list={list}
        total={total}
        setTotal={setTotal}
        updateAmount={updateAmount}
      />
      <Checkout total={ total }/>

    </>
  )
}