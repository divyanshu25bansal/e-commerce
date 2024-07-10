import {createContext, useState,useEffect} from 'react'
import SHOP_DATA from './assets/MainData'
import { bagData } from './assets/MainData';



export const StoreContext = createContext();


const StoreApp = (props) => {

    const [bag,setBag] = useState([])
    const [bagCount,setBagCount] = useState({})
    const [total,setTotal] = useState()

    const totalAmount = () => {
        let amount = 0
        bagData.forEach((item) => {
            if(bagCount[item.id]){
                amount += bagCount[item.id] * item.price
                return amount
            }
        })  
        setTotal(amount)
      }
    
      useEffect(() => {
        totalAmount()
      },[bagCount])


    const bagQuantity= (item) => {
            if(!bagCount[item.id]){
                setBagCount(prev => {
                    return (
                        {...prev,[item.id]:1}
                    )
                })
            }else {
                setBagCount(prev => {
                    return (
                        {...prev,[item.id]:prev[item.id]+1}
                    )
                })
            }
        ;
    }

    const removeItem = (itemId) => {
        setBagCount((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const value = {
        bag,
        setBag,
        bagCount,
        setBagCount,
        bagQuantity,
        total,
        setTotal,
        removeItem
    }

    return (
        <StoreContext.Provider value={value}>
              {props.children}
        </StoreContext.Provider>
    )
}


export default StoreApp;