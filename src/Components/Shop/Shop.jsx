import React, { useState } from 'react'
import './Shop.css'
import {useSelector} from 'react-redux'
import ShopCard from '../ShopCard/ShopCard'
import SHOP_DATA from '../../assets/MainData'


const Shop = () => {
  return (
    <div className="shop">
    {SHOP_DATA.map((item,index)=>{
        return (
            <div key={index} className="shop-cards">
                <div className="shop-title">
                <h2>{item.title}</h2>
                </div>
                <div className="shop-products">
                   <ShopCard item={item}/>
                </div>
            </div>
            
        )
    })}
</div>
  )
}

export default Shop