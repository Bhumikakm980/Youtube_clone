import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";




const Body=({openSidebar})=>{
    return(
        <>
        {/* <h1>Body</h1> */}
        {/* <Sidebar></Sidebar> */}
        {openSidebar&&<Sidebar></Sidebar>}
        <Maincontainer></Maincontainer>
        </>
    )
}

export default Body;