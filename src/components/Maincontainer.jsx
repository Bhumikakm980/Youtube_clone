import Buttonlist from "./Buttonlist";
import Videocontainer from "./Videocontainer";

const Maincontainer=()=>{
    return(
        <>
        {/* <h1>Main container</h1> */}
        <div className="col-span-11">
        <Buttonlist></Buttonlist>
        <Videocontainer></Videocontainer>
        </div>
        </>
    )
}

export default Maincontainer;