import {configureStore} from '@reduxjs/toolkit'
import productsReducer from "./slices/productSlice"
import categoryReducer from "./slices/categorySlice"

const store = configureStore({
    reducer:{
        productsReducer ,
        categoryReducer
    }
});

export type storeType = ReturnType<typeof store.getState>;
export type dispatchType = typeof store.dispatch;
export default store;