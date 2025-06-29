import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {closeSidebar} from "../utils/sidebarslice";
import { useSearchParams } from "react-router-dom";
import Commentbox from "./Commentbox.jsx";
import { addToLivechat } from "../utils/livechatSlice";
import Livechat from "./Livechat.jsx";
import generateName from "../utils/helper.js";



const Videodetails=()=>{

    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(closeSidebar());
    },[])

    /**Live chat */
    useEffect(()=>{

      const interval=setInterval(()=>{
          dispatch(addToLivechat(
            {
                name:generateName(),
                msg:"hi how are you"
            }
          ));
      },3000);

      return()=>{
        clearInterval(interval);
      }

    },[])

//   const Name=  generateName();
// const LivechatConst={
//     name:Name,
//     msg:"hi how are you"
// }

  const showLivechat=useSelector((store)=>store.chat.chatList);




    // const queryParams = new URLSearchParams();

    // const videoId = queryParams.get('v');     // "abc123"

    // console.log(videoId);

     const [searchParams] = useSearchParams();
    //  console.log(searchParams);
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
        <div className="flex">
        <iframe
          src={"https://www.youtube.com/embed/"+val}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-[500px] w-8/12"
        ></iframe>
        <div className="mx-3 my-2 border border-black-200 w-4/12 h-[500px] mt-2 bg-gray-200  overflow-scroll flex flex-col-reverse">
          {/* <span>{showLivechat.name}</span>
          <span>{showLivechat.msg}</span> */}
          {showLivechat&& showLivechat.map((chat)=><Livechat chatDetails={chat}></Livechat>)}
        </div>
        </div>
        <h1>Comment</h1>
        {commentData.map((comment)=><Commentbox data={comment}></Commentbox>)}
        {/* <Commentbox data={commentData[0]}></Commentbox> */}
        </div>
  

    )
}

export default Videodetails;