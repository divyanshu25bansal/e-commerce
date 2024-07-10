import React, { useContext, useState ,useEffect} from 'react'
import './Bag.css'
import { StoreContext } from '../../Context'
import SHOP_DATA, { bagData } from '../../assets/MainData'
import BagList from '../BagList/BagList'

const Bag = () => {

    const {bag,bagCount,setBagCount,total} = useContext(StoreContext)

  return (
    <div className='bag'>
        <div className="bag-titles">
            <ul>
                <li>Item</li>
                <li>Quantity</li>
                <li>Price</li>
                <li>Item Total</li>
            </ul>
        </div>
        {bagData.map((item,index)=> {
           if(bagCount[item.id]){
            return (
                <BagList key={index} item ={item}/>
            )
           }
        })}
        <div className="bag-total">
        <p>Total - ${total}</p>
        </div>

        <div className="check-out">
            <h2>Check-Out</h2>
            <button>Pay Now</button>
        </div>
    </div>
  )
}

export default Bag