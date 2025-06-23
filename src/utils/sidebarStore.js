import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";

const sidebarStore=configureStore({
    reducer:{
        app:sidebarslice
    }
})

export default sidebarStore;
