import { createSlice } from "@reduxjs/toolkit";

const cacheslice=createSlice({
    name:"cache",
    initialState:{}
        // searchcache:{},
        // time complexity for array to search key is 0(n) order of n
        // for obj o(1) so we are using obj to collect key val
    ,
        reducers:{
            setCache:(state,action)=>{
                // state.searchcache={...state.searchcache,...action.payload}
              state= Object.assign(state,action.payload)
            }
        }
    
});

export const {setCache}=cacheslice.actions;
export default cacheslice.reducer;