import React from 'react'
import { assets } from '../../assets/assets'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
const sidebar = () => {
  return (
    <div>
          <div className="sidebar">
              <div className="sidebar-options">
                  <NavLink to='/add' className="sidebar-option">
                      <img src={assets.add_icon} alt="" />
                      <p>add Dishes</p>
                   </NavLink>
                  <NavLink to='/list' className="sidebar-option">
                      <img src={assets.order_icon} alt="" />
                      <p>List Dishes</p>
                   </NavLink>
                  <NavLink to='/orders' className="sidebar-option">
                      <img src={assets.order_icon} alt="" />
                      <p>orders</p>
                   </NavLink>
              </div> 
      </div>
    </div>
  )
}

export default sidebar
