import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";
import cacheslice from "./cacheslice";
import livechatSlice from "../utils/livechatSlice";

const sidebarStore=configureStore({
    reducer:{
        app:sidebarslice,
        cache:cacheslice,
        chat:livechatSlice
       
    }
})

export default sidebarStore;
