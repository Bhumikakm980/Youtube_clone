
const Header=()=>{
    return(
        <>
        <div className="flex justify-between"> 
            <div className="flex">
            <div>
                <img alt="hamerburge" src="https://www.svgrepo.com/show/489710/burger-menu.svg" className="h-15"></img>
                
            </div>
            <div>
                <img alt="youtube logo" src="https://img.phonandroid.com/2017/08/youtube-nouveau-logo.jpg" className="w-30"></img>
            </div>
            </div>
            <div className="mt-4 justify-between">
                <input className="rounded-2xl border-2 border-gray-400 w-2xl p-1"></input>
                <img alt="search" src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png" className="w-12 absolute top-3  right-95"></img>
            </div>
            <div className="mt-4  mr-3">
                <h1 className="">mini movie</h1>
            </div>
        </div>
        </>
    )
}

export default Header;