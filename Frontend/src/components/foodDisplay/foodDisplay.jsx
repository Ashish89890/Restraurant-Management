import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const foodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
  return (
    <div className='foodDisplay' id='foodDisplay'>
          <h2>
              Top dishes for you 
          </h2>
      <div className="food-display-list">
      
        {food_list.map((item, index) => {
          if (category === "All" || category===item.category) {
         
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={30 * item.price} image={item.image} />
          }
         

         
          

          

          
              })}
          </div>
    </div>
  )
}

export default foodDisplay
