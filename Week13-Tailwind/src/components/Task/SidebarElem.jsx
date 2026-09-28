export const SidebarElem = ({children})=>{
    return <>
        <div className={`px-[10px] py-2 rounded-md text-white hover:cursor-pointer hover:bg-gray-700`} >
            {children}
        </div>
    </>
}