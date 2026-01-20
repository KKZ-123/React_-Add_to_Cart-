import React from 'react'
import './Item.css'


function Item({item}) {
  return (
    <div className="item">
      <div className="itemName">{item.name}</div>
      <div className="itemPrice">${item.price}</div>
      <button className="itemButton">Add to Cart</button>
    </div>
  )
}

export default Item
