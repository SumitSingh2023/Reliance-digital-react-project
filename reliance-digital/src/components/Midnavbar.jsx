import React from 'react'
import "../styles/Midnavbar.css"
import {Link} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faLocationDot,faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons';




const Midnavbar = () => {
  return (
    <div className='midnavbar'>
        <div className="logo">
            <img style={{width:"150px",height:"50px"}} src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="reliance-logo" />
        </div>
        <div className="search-bar">
            <input className='input'
                type="text" 
                placeholder='Find your favorite products'
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            
        </div>
        <div className="cartlogin">
            <div className="location">
                <Link to="/location" className='midnav3'>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",padding:"5px",fontSize:"18px"}}  />Location
                    <span style={{color:"white",padding:"5px"}}>|</span>
                </Link>
                
            </div>
            <div className="cart">
                <Link to="/cart" className='midnav3'>
                    <FontAwesomeIcon icon={faShoppingCart } style={{color: "#ffffff",padding:"5px",fontSize:"18px"}} />Cart
                    <span style={{color:"white",padding:"5px"}}>|</span>
                </Link>
                
            </div>
            <div className="login">
               <Link to="./login" className='midnav3'>
                    <FontAwesomeIcon icon={faUser} className="user-icon" style={{ color: '#ffffff',padding:"5px",fontSize:"18px"}} />Login
               </Link>
               
            </div>
        </div>
    </div>
        
           
  )
}

export default Midnavbar