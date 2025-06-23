import { useDispatch, useSelector } from "react-redux";
import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";




const Body=()=>{

    const showSide=useSelector((store)=>store.app.sidebarState);
    console.log(showSide);
 
    return(
        <>
        {/* <h1>Body</h1> */}
        <div className="grid grid-flow-col">
        {/* <Sidebar></Sidebar> */}
        {showSide&&<Sidebar></Sidebar>}
        <Maincontainer></Maincontainer>
        </div>
        </>
    )
}

export default Body;