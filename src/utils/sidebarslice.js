import { createSlice } from "@reduxjs/toolkit";

const sidebarslice= createSlice({
    name:"sidebar",
    initialState:{
        sidebarState:true,
    },
    reducers:{
        showSidebar:(state)=>{
            state.sidebarState=!state.sidebarState;
        }
    }
});

export const {showSidebar}=sidebarslice.actions

export default sidebarslice.reducer;