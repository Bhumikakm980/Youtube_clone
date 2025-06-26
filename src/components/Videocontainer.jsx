import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Videocard from "./Videocard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Videocontainer=()=>{

    const[videoList,setVideoList]=useState(null);

    useEffect(()=>{
     getVideo();
    },[])

    const getVideo=async ()=>{
        const response=await fetch(YOUTUBE_VIDEO_API);
        const updatedResponse=await response.json();
        console.log(updatedResponse.items);
        setVideoList(updatedResponse.items);
        
    }
    if(videoList==null){
        return <Shimmer></Shimmer>
    }
    else{
    return(
        
       
        <div className="flex flex-wrap h-full">
            
        {videoList.map((i)=>(
            <Link to={"/watch?v="+i.id} key={i.id} className="block w-2/12 ">
            <Videocard videoDetails={i}  />
            </Link>
            ))}
        
        </div>
        
        
       
    )
}
}

export default Videocontainer;