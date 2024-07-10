import {configureStore, createSlice} from '@reduxjs/toolkit'
import SHOP_DATA from '../assets/MainData';

const productDataSlicer = createSlice({
    name:"product",
    initialState:SHOP_DATA,
    reducers:{
        
    }
})

export const productDataActions = productDataSlicer.actions;

export default productDataSlicer;