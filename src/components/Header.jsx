import { useContext, useEffect, useState } from "react";
import userNameContext from "../utils/userNameContext";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { showSidebar } from "../utils/sidebarslice";
import { SEARCH_SUGGESTION_API } from "../utils/constants";
import Searchlist from "./Searchlist";


const Header=()=>{


    

    // function changeSidebar(){
    //     setSidebar(preVal=>!preVal);
        
    // }

    const dispatch=useDispatch();

    const handleToffleSidebar=()=>dispatch(showSidebar());


    const {userName}=useContext(userNameContext);
    // console.log(userName);

    /* search bar implementation using de-bouncing method*/ 

    const[serachValue,setSearchVal]=useState("");
    const[searchpage,setSearchpage]=useState();
    const[isSearch,setIssearch]=useState(false);

    useEffect(()=>{
        // _callSearchSuggestion();
        const timer=setTimeout(()=>{
            _callSearchSuggestion()
        },100)

        return()=>{
            clearTimeout(timer);
        }

    },[serachValue]);

    async function _callSearchSuggestion(){
        
        const val=await fetch(SEARCH_SUGGESTION_API+serachValue);
        const mod=await val.json();
        console.log(mod[1]);
        setSearchpage(mod[1]);
        
        // if(mod[1].length>0){
        // setIssearch(true);
        // }
        // else if(mod[1].length==0){
        //     setIssearch(false);
        // }
    }

    

    return(
        <>
        <div className=" relative">
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
                <input className="rounded-2xl border-2 border-gray-400 w-2xl p-1" 
                onChange={(e)=>setSearchVal(e.target.value)}
                onBlur={()=>setIssearch(false)}
                onFocus={()=>setIssearch(true)
                
                }
                ></input>
                <img alt="search" src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png" className="w-12 absolute top-7  right-99"></img>
            </div>
            <div className="mt-4  mr-3">
                <h1 className="">Welcome {userName}</h1>
            </div>
        </div>


        <div className="bg-white absolute z-30  left-[27.5rem]  top-17   w-2xl  border border-gray-300 rounded-lg shadow-lg">
             {/* {isSearch && searchpage.map((i)=>{
                return   <Searchlist listitem={i}></Searchlist>
             })} */}

             {isSearch && searchpage.map((i)=>{
                return  ( <ul className="my-1 mx-2">
                             <li>{i}</li>
                        </ul>
                )
             })}
             </div>
        </div>

        {/* {openSidebar&&<Sidebar></Sidebar>} */}
        {/* {searchpage && searchpage.map((i)=>{
         return   <Searchlist listitem={i}></Searchlist>
        })} */}
        </>
    )
}

export default Header;