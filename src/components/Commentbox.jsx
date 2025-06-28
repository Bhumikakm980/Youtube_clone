const Commentbox=({data})=>{

    const {name,comment}=data;
    const replies=data?.reply;
    return(
        <>
        <div className="flex items-start m-2 w-6/12">
            <img src="https://img.icons8.com/?size=100&id=84020&format=png&color=000000" className="h-8 w-8 my-1"></img>
                <div className="ml-3 flex-1">
                    <div className="bg-gray-100 rounded-xl p-3">
                        <h1 className="">{name}</h1>
                        <p>{comment}</p>
                    </div>
                
                {/* {(data?.reply).map((item)=><Commentbox data={item.reply}></Commentbox>)} */}
                        <div className="mt-3 pl-6 border-l-2 border-gray-300">
                                {replies!=undefined &&(replies).map((item)=><Commentbox data={item}></Commentbox>)}
                        </div>
                </div>
       </div>
        </>
    )
}

export default Commentbox;