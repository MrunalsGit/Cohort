export const SidebarElem = ({children})=>{
    return <>
        <div className={`p-[10px] hover:cursor-pointer hover:bg-gray-400`} >
            {children}
        </div>
    </>
}