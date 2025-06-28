import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";
import cacheslice from "./cacheslice";

const sidebarStore=configureStore({
    reducer:{
        app:sidebarslice,
        cache:cacheslice
       
    }
})

export default sidebarStore;
