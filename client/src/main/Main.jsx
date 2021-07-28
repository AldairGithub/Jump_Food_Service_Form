import React, { useState, useEffect } from 'react'
import './Main.css'

import ItemList from './items/item_list/ItemList'
import Checkout from './checkout/Checkout'
import Banana from '../images/Banana.jpeg'
import Apple from '../images/Apple.jpeg'
import Grapes from '../images/Grapes.jpeg'
import Pineapple from '../images/Pineapple.jpeg'
import Coconut from '../images/Coconut.jpeg'

export default function Main() {
  let items = [
    { name: 'banana', price: 9.99, amount: 1, img: Banana },
    { name: 'apple', price: 5.99, amount: 1, img: Apple },
    { name: 'grapes', price: 3.99, amount: 1, img: Grapes },
    { name: 'pineapple', price: 4.99, amount: 1, img: Pineapple },
    { name: 'coconut', price: 13.99, amount: 1, img: Coconut }
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
      <h1>Jump Food Service Form</h1>
      <div className='main-container'>
        <ItemList
          list={list}
          total={total}
          setTotal={setTotal}
          updateAmount={updateAmount}
        />
        <Checkout total={total} />
      </div>
    </>
  )
}