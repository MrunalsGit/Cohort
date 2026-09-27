export const Task = ()=>{
    return (
        <div className={`flex `}>
            <div className={` duration-300 bg-red-100 h-screen w-10 md:w-64`}>
                <span className={`hidden md:block`}>Zoom.in</span>
                <span className={` pl-4 md:hidden`}>=</span>
            </div>
            <div className = {`bg-green-100 w-full h-screen`}>
                Home
            </div>
        </div>
    )
}