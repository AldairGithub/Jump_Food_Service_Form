import React from 'react'

import Item from './Item'

export default function ItemList(props) {
  const { list, total, setTotal, updateAmount } = props

  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          <Item list={list} updateAmount={updateAmount} item={item} itemId={ index } total={ total } setTotal={ setTotal }/>
        </div>
      ))}
    </>
  )
}