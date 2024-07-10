import React from 'react'
import './ShopCard.css'


const ShopCard = ({item}) => {
  return (
    <div className='shop-card-pack'>
        {item.items.map((i,e)=>{
            return (
                <div key={e} className='shop-cards'>
                    <img src={i.imageUrl} alt="" />
                    <div className="shop-card-btn">
                        <button>Add to Cart</button>
                    </div>
                    <div className="shop-card-info">
                        <p>{i.name}</p>
                        <p>${i.price}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ShopCard