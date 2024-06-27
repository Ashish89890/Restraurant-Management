import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './cart.css'
import { useNavigate } from 'react-router-dom'
const cart = () => {
    const navigate = useNavigate()
    
    const {cartItems,food_list,RemoveFromCart,CartTotal,url} = useContext(StoreContext)
  return (
      <div className='cart'>
          <div className="cart-items">
              <div className="cart-item-title">
                  <p>items</p>
                  <p>Title</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Remove</p>

                  

              </div>
              <br />
              <hr />
              {food_list.map((item, index) => {
                  if (cartItems[item._id] > 0) {
                      return (
                          <div>
                               <div className='cart-item-title cart-items-item'>
                              <img src={url+"/images/"+item.image} alt="" />
                              <p>{item.name}</p>
                              <p>{item.price*30}</p>
                              <p>{cartItems[item._id]}</p>
                              <p> {item.price*cartItems[item._id]*30}</p>
                              <p onClick={()=>RemoveFromCart(item._id)} className='cross'>X</p>
                              </div>
                              <hr />
                          </div>
                         
                          
                      )
                  }
              })}
          </div>
          <div className="cart-bottom">
              <div className="cart-total">
                  <h2>your Orders</h2>
                  <div className="cart-total-details">
                      <p>Subtotal</p>
                      <p>{CartTotal()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                      <p>Extra charges (5% gst)</p>
                      <p>{CartTotal()*0.05}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                      <p>total</p>
                      <b>{CartTotal()*1.05}</b>
                  </div>
                  <button onClick={()=>navigate('/placeorder')}>Proceed</button>
              </div>
              
          </div>
          
    </div>
  )
}

export default cart
