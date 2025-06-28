import { createSlice } from "@reduxjs/toolkit";

const sidebarslice= createSlice({
    name:"sidebar",
    initialState:{
        sidebarState:true,
        
    },
    reducers:{
        showSidebar:(state)=>{
            state.sidebarState=!state.sidebarState;
        },
        closeSidebar:(state)=>{
            state.sidebarState=false;
        }
    }
});

export const {showSidebar,closeSidebar}=sidebarslice.actions;

export default sidebarslice.reducer;