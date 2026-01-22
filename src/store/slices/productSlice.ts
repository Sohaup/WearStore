import { getProducts } from "@/services/products";
import { productStateType } from "@/types/productTypes";
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState:productStateType = {
    isLoading:false ,
    isError:false ,
    products:[]
}

export const getProductsData = createAsyncThunk("get/products" , getProducts);

const productsSlice = createSlice({
    name:"products slice" ,
    initialState ,
    reducers:{

    } ,
    extraReducers:async (builder) =>{
        builder.addCase(getProductsData.pending , (prevState)=> {
            prevState.isLoading = true;
            prevState.isError = true;
        });
        builder.addCase(getProductsData.rejected , (prevState)=>{
            prevState.isError = true;
            prevState.isLoading = false;
        });
        builder.addCase(getProductsData.fulfilled , (prevState , action)=>{
            prevState.isLoading = false;
            prevState.isError = false;
            prevState.products = action.payload;
        });
    }
});

export default productsSlice.reducer;
