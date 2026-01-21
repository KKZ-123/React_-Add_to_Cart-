import React from 'react'
import ItemList from './components/itemlist/ItemList'
import Cart from './components/cart/Cart'


function view() {
  return (
    <div className='container'>
      <ItemList></ItemList>
      <Cart></Cart>
    </div>
  )
}

export default view
