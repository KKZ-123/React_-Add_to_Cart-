import React, {useContext} from 'react'
import './Item.css'
import ItemContext from '../../context/ItemContext'

function Item({item}) {
  const {dispatchCart} = useContext(ItemContext);
  return (
    <div className="item">
      <div className="itemName">{item.name}</div>
      <div className="itemPrice">${item.price}</div>
      <button className="itemButton" onClick = {() => dispatchCart({type : "ADD_TO_CART", payload : item})}>Add to Cart</button>
    </div>
  )
}

export default Item
