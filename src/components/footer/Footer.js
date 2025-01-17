import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
       <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non aperiam incidunt labore ducimus quae enim soluta, molestias consequuntur iure saepe quasi, illum repudiandae nihil ut sed sequi excepturi quas! </p>
           <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon}alt="" />
           </div>
       </div>
       <div className="footer-content-center">
          <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
          </div>
       <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
             <li>+263-784-320-423</li>
             <li>contact@tomato.com</li>
             
          </ul>
          </div>
     </div>
         <hr />
         <p className="footer-copyright">Copyright 2024 @ Tomato.com - All rights Reserved</p>
    </div>
  )
}

export default Footer
