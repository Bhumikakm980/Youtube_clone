import { useContext, useState } from "react";
import userNameContext from "../utils/userNameContext";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { showSidebar } from "../utils/sidebarslice";


const Header=()=>{


    

    // function changeSidebar(){
    //     setSidebar(preVal=>!preVal);
        
    // }

    const dispatch=useDispatch();

    const handleToffleSidebar=()=>dispatch(showSidebar());


    const {userName}=useContext(userNameContext);
    // console.log(userName);

     function searchVideo(e){
        
     }

    return(
        <>
        <div className="flex justify-between shadow-lg p-3"> 
            <div className="flex">
            <div>
                <img alt="hamerburge" src="https://www.svgrepo.com/show/489710/burger-menu.svg" className="h-15 cursor-pointer" onClick={()=>handleToffleSidebar()}></img>
                
            </div>
            <div>
                <img alt="youtube logo" src="https://img.phonandroid.com/2017/08/youtube-nouveau-logo.jpg" className="w-30"></img>
            </div>
            </div>
            <div className="mt-4 justify-between">
                <input className="rounded-2xl border-2 border-gray-400 w-2xl p-1" onChange={()=>searchVideo(e)}></input>
                <img alt="search" src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png" className="w-12 absolute top-7  right-99"></img>
            </div>
            <div className="mt-4  mr-3">
                <h1 className="">Welcome {userName}</h1>
            </div>
        </div>
        {/* {openSidebar&&<Sidebar></Sidebar>} */}
        </>
    )
}

export default Header;