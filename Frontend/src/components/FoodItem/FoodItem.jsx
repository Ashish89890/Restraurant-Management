import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addtoCart, RemoveFromCart,url } = useContext(StoreContext);

    

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url+"/images/"+image} alt={name} />
                {
                    !cartItems[id]
                        ? <img className='add' onClick={() => addtoCart(id)} src={assets.add_icon_white} alt="Add" />
                        : <div className="food-item-counter">
                            <img onClick={() => RemoveFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addtoCart(id)} src={assets.add_icon_green} alt="Add More" />
                          </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                   
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-descr">
                    {description}
                </p>
            
                <p className="food-item-price">
                    ₹{price}
                </p>
            </div>
        </div>
    );
}

export default FoodItem;
