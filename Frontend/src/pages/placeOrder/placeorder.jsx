import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const placeorder = () => {
  const {CartTotal} = useContext(StoreContext)

  return (
    <div className='totalpage'>
    <div className='orderplace'>
        <div className="order-left">
          <div className='left-part' >
          <button className='selecttable'>Select Your Table  <select className='options' name="SELECT" id="">
        <option value="1">1</option>          
        <option value="1">2</option>          
        <option value="1">3</option>          
        <option value="1">4</option>          

        </select>
        </button>
          </div>
          <div className='pay-bill'>
            <button>
              PROCEED TO PAY
            </button>
          </div>
        
       
      </div>
      <div className="order-right">
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
        </div>
       
      </div>
      
      </div>
  )
}

export default placeorder
