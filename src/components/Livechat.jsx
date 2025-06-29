const Livechat=({chatDetails})=>{
    return(
       <>
       <div>
          <span className=" font-bold mx-3 my-14 py-3">{chatDetails.name}</span>
          <span>{chatDetails.msg}</span>
          </div>
        </>
    )
}

export default Livechat;