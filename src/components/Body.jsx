import {useSelector } from "react-redux";
import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";




const Body=()=>{

    /**subscribing to store */
    const showSide=useSelector((store)=>store.app.sidebarState);
   
 
    return(
        <>
        <div className="grid grid-flow-col">
        {showSide&&<Sidebar></Sidebar>}
        {/* <Maincontainer></Maincontainer> */}
        <Outlet></Outlet>
        </div>
        </>
    )
}

export default Body;