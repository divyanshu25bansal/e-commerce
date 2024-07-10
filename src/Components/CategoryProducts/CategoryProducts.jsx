import React from 'react'
import './CategoryProducts.css'
import { useSelector } from 'react-redux'
import CategoryProductList from '../CategoryProductList/CategoryProductList'
import SHOP_DATA from '../../assets/MainData'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {

    const {id} = useParams()

  return (
    <div className="category-products">
        {SHOP_DATA.map((item,index) => {
           return (
            <CategoryProductList key={index} item={item} id={id}/>
           )
            }
        )}
    </div>
  )
}

export default CategoryProducts