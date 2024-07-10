import React, { useContext } from 'react'
import './CategoryProductList.css'
import { StoreContext } from '../../Context'

const CategoryProductList = ({item,id}) => {

  const {setBag,bag,bagCount,setBagCount,bagQuantity} = useContext(StoreContext)
  const addtobag = (i) => {
    setBag(prev => [...prev,i])
    bagQuantity(i)
  }


  return (
    <div className='category-card-pack'>
     {item.title === id ? 
     item.items.map((i,e) => {
        return (
            <div key={e} className='category-cards'>
                    <img src={i.imageUrl} alt="" />
                    <div className="category-card-btn">
                        <button onClick={() => addtobag(i)}>Add to Cart</button>
                    </div>
                    <div className="category-card-info">
                        <p>{i.name}</p>
                        <p>${i.price}</p>
                    </div>
                </div>
        )
     })
     :""}
    </div>
  )
}

export default CategoryProductList