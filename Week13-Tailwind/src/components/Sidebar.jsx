import { SidebarElem } from "./SidebarElem"

export const Sidebar = ()=>{
    return (
        <div className={` duration-300 bg-gray-500 h-screen w-8 md:w-64`}>
            <div>
                <span className={`p-2 hidden text-xl md:block`}>Zoom.in</span>
                <span className={` flex justify-center items-center  md:hidden`}>=</span>
            </div>
            <div className={`pt-5 hidden md:block`}>
                <SidebarElem>Home</SidebarElem>
                <SidebarElem>Calender</SidebarElem>
                <SidebarElem>Start Meet</SidebarElem>
                <SidebarElem>Settings</SidebarElem>
            </div>
        </div>
    )
}