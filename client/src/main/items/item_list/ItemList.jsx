import React from 'react'
import './ItemList.css'

import Item from '../item/Item'

export default function ItemList(props) {
  const { list, total, setTotal, updateAmount } = props

  return (
    <>
      {list.map((item, index) => (
        <div className='items-container' key={index}>
          <Item list={list} updateAmount={updateAmount} item={item} itemId={ index } total={ total } setTotal={ setTotal }/>
        </div>
      ))}
    </>
  )
}