import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from './FilterSlice'


export const Store = configureStore({



    reducer: {


        Filter:FilterReducer

        
    }


}) 