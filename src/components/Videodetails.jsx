import { useEffect} from "react";
import { useDispatch } from "react-redux";
import {closeSidebar} from "../utils/sidebarslice";
import { useSearchParams } from "react-router-dom";



const Videodetails=()=>{




    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeSidebar());
    },[])



    // const queryParams = new URLSearchParams();

    // const videoId = queryParams.get('v');     // "abc123"

    // console.log(videoId);

     const [searchParams] = useSearchParams();
     console.log(searchParams);
     const val=searchParams.get("v");


    return(
       
  <iframe
    
    src={"https://www.youtube.com/embed/"+val}
    allow="autoplay; encrypted-media"
    allowFullScreen
    className="h-[500px] w-6/12"
  ></iframe>
  

    )
}

export default Videodetails;