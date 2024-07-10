import {configureStore} from '@reduxjs/toolkit'
import productDataSlicer from './ProductSlice';
import ShopSlicer from './ShopSlice';

const ProductStore = configureStore({
    reducer:{
        product:productDataSlicer.reducer,
        shop:ShopSlicer.reducer
    }
})


export default ProductStore;