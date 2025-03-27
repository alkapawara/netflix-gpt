import { createSlice } from "@reduxjs/toolkit";

 const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowplayonhMovie:null
    },
    reducers:{
        addnowplayonhMovie:(state,action)=>{
            state.nowplayonhMovie=action.payload
        }
    }
})
export const {addnowplayonhMovie}=movieSlice.actions;
export default movieSlice.reducer;