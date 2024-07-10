import React from 'react'
import './Navbar.css'
import { GiCrenelCrown } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
   <Link to={"/"}><GiCrenelCrown className='navbar-logo' /></Link>
   <div className="navbar-right">
      <Link  to={"/shop"}><li>Shop</li></Link>
      <Link to={"/sign-in"}><li>Sign-in</li></Link>
      <Link to={"/bag"} className="navbar-bag">
      <IoBag className='navbar-bag-img'/>
      </Link>
   </div>
  
    </div>
  )
}

export default Navbar