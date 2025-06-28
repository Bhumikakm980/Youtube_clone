import { useEffect} from "react";
import { useDispatch } from "react-redux";
import {closeSidebar} from "../utils/sidebarslice";
import { useSearchParams } from "react-router-dom";
import Commentbox from "./Commentbox.jsx";



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

    /**comment section */

    const commentData=[
      {
        name:"spandana",
        comment:"Amazing song",
        reply:[
          {
              name:"spandana1",
              comment:"Amazing song1",
              reply:[
                {
                  name:"spandana2",
                  comment:"Amazing song2",
                  reply:[
                        {
                          name:"spandana3",
                          comment:"Amazing song3",         
                        }
                    ]
                }
                
              ]
          },
          {
            name:"spandana11",
            comment:"Amazing song11",
            // reply:[
            //   {
            //     name:"spandana11",
            //     comment:"Amazing song11",
            //   },
            //   {
            //     name:"spandana11",
            //     comment:"Amazing song11",
            //   }
            // ]
          }
        ],
        
      },
      {
         name:"spandana 21",
        comment:"Amazing song",
        reply:[
          {
            name:"spandana11",
            comment:"Amazing song11",
            reply:[
              {
                name:"spandana11",
                comment:"Amazing song11",
              }
            ]
          }
        ]

      },
      {
         name:"spandana 31",
        comment:"Amazing song",

      },
      {
         name:"spandana 41",
        comment:"Amazing song",

      },
      {
         name:"spandana 51",
        comment:"Amazing song",

      }
    ]


    return(
       
      <div>
        <iframe
          src={"https://www.youtube.com/embed/"+val}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-[500px] w-6/12"
        ></iframe>
        <h1>Comment</h1>
        {commentData.map((comment)=><Commentbox data={comment}></Commentbox>)}
        {/* <Commentbox data={commentData[0]}></Commentbox> */}
        </div>
  

    )
}

export default Videodetails;