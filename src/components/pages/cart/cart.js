import React, { useContext } from 'react'
import {StoreContext}  from '/home/modestnerds/Desktop/deployedapps/food_ordering_app_reactjs/src/context/StoreContext.js'
import './cart.css'
import { food_list } from '../../../assets/assets';

function Cart() {

  const {cartItems,food_list, removeFromCart} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div>

              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>

              </div>
              <hr />
              </div>
      
            )
          }
        })}


      </div>
    </div>
  )
}

export default Cart
