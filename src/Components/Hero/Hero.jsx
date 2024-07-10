import React from 'react'
import './Hero.css'
import SHOP_DATA from '../../assets/MainData'
import { Link } from 'react-router-dom'

const Hero = () => {


  return (
    <div className="hero">
        {SHOP_DATA.map((item,index) => {
            return (
                <Link to={`/category/${item.title}`} key={index} className='hero-banner' >
                    <img src={item.items[0].imageUrl} alt="" />
                    <p>{item.title}</p>
                </Link>
            )
        })}
    </div>
  )
}

export default Hero