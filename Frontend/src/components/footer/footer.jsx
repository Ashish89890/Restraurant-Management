import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam velit iusto libero quam animi laborum alias non eum consectetur dolor at quidem voluptate inventore cupiditate quisquam, id qui. Harum?</p>
                  <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
                   </div>
              </div>
              <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      
                      <li>Privacy policy</li>
                  </ul>
              </div>
              <div className="footer-content-right">
                  <h2>Get in touch</h2>
                  <li>5364-634-287</li>
                  <li>contact@gmail.com</li>
              </div>
          </div>
          <hr className='h' />
          <p className="footer-copyright">
              Copyright 2024 mera company- All right reserved
          </p>
      </div>
      
  )
}

export default footer
