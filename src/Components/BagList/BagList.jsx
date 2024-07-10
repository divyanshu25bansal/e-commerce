import React, { useContext, useEffect, useRef, useState } from 'react'
import './BagList.css'
import { StoreContext } from '../../Context'


const BagList = ({item}) => {
  const {bag,bagCount,setBagCount,removeItem} = useContext(StoreContext)


  return (
    <>
    <div className="bag-lists">
              <div className="bag-list">
                  <img src={item.imageUrl} alt="" />
                  <li>{bagCount[item.id]}</li>
                  <li>{item.price}</li>
                  <li>{bagCount[item.id]*item.price}</li>
                  <li className='cross' onClick={ () => removeItem(item.id)}>X</li>
                </div>
    </div>
 </>
  )
}

export default BagList