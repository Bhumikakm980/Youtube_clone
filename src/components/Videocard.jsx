import { Link } from "react-router-dom";


const Videocard=({videoDetails})=>{
    console.log(videoDetails);

const details=videoDetails.snippet;

const {snippet,statistics}=videoDetails;
const{channelTitle,thumbnails,title}=snippet;

    return (
        <>
       
      <div className="m-2 rounded-lg shadow-lg  hover:shadow-2xl hover:p-3">
        <img src={thumbnails.high.url} className=""></img>
        <ui className="list-none">
            <li>{title}</li>
            <li className="font-bold">{channelTitle}</li>
            <li>{Math.round(statistics.viewCount/100000)}K Views</li>
        </ui>
      </div>
     
        </>
    )

   
}

 export const RedItem=({videoDetails})=>{
  if(videoDetails.statistics.likeCount>100000){
    return (
        <>
        <div className="relative">
          <span className="absolute left-2 text-white">#Trending</span>
          <Videocard videoDetails={videoDetails}></Videocard>
          </div>
          </>
    )
  }
  else{
    return <Videocard videoDetails={videoDetails}></Videocard>
  }
      
  // return <Videocard></Videocard>
    }

export default Videocard;