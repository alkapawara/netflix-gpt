import { createSlice } from "@reduxjs/toolkit";

 const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowplayonhMovie:null,
        trailerVideo:null
    },
    reducers:{
        addnowplayonhMovie:(state,action)=>{
            state.nowplayonhMovie=action.payload
        },
        addTrailervideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})
export const {addnowplayonhMovie,addTrailervideo}=movieSlice.actions;
export default movieSlice.reducer;