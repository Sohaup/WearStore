import { getCategory } from "@/services/category";
import { categoryDataStateType } from "@/types/categoryTypes";
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoryData = createAsyncThunk("category/get" , getCategory);

const initialState:categoryDataStateType = {
    isLoading:false ,
    isError:false ,
    category:{}
}

const categorySlice = createSlice({
    name:"category slice" ,
    initialState ,
    reducers:{

    } ,
    extraReducers:async (builder) => {
        builder.addCase(getCategoryData.pending , (prevState)=>{
            prevState.isLoading = true;
            prevState.isError = false; 
        });
        builder.addCase(getCategoryData.rejected , (prevState)=> {
            prevState.isError = true;
            prevState.isLoading = false;
        });
        builder.addCase(getCategoryData.fulfilled , (prevState , action)=> {
            prevState.isLoading = false;
            prevState.isError = false;
            prevState.category = action.payload;
        });
    }
});

export default categorySlice.reducer;