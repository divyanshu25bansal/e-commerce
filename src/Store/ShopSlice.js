import { createSlice} from '@reduxjs/toolkit'
import SHOP_DATA from '../assets/MainData';

const ShopSlicer = createSlice({
    name:"shop",
    initialState:[],
    reducers:{
        gatherCategoryData:(state,action) => {
            state.push(action.payload)
        }
    }
})

export const ShopActions = ShopSlicer.actions;

export default ShopSlicer;