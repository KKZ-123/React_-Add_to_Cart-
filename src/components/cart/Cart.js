import React, { useContext } from 'react'
import './Cart.css';
import ItemContext from '../../context/ItemContext';


function Cart() {
  const { cartItems, dispatchCart } = useContext(ItemContext);
  console.log("cartItems", cartItems);
  return (
    <div className = 'cart'>
      <h3>Cart({cartItems.length})</h3>
      {cartItems.length  < 1 ? 
      (<div>Cart is Empty</div>) :
      (cartItems.map((cartItem) => 
      <div className = 'cartItem' key = {cartItem.id}>
        <span className='cartItemName'>{cartItem.name}</span>
        <span className = 'cartItemPrice'>{cartItem.price}</span>
        <button className = 'cartItemButton' onClick={() => dispatchCart({type : "REMOVE_FROM_CART", payload : cartItem})}>Remove</button>
      </div>))}
    </div>
  )
}

export default Cart;
