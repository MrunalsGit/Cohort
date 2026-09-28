import { SidebarElem } from "./SidebarElem"

export const Sidebar = ()=>{
    return (
        <div className={`fixed  duration-300 bg-black md:bg-rand-300 h-full w-10 xl:w-64`}>
            <div>
                <span className={`p-2 hidden text-white text-xl xl:block`}>Zoom.in</span>
                <span className={`pt-2 flex justify-center items-center  xl:hidden`}>
                    <img className={`cursor-pointer p-0 m-0 h-7 flex justify-center items-center`} src="/menu.svg" />
                </span>
            </div>
            <div className={`p-4 hidden xl:block`}>
                <SidebarElem>Home</SidebarElem>
                <SidebarElem>Calender</SidebarElem>
                <SidebarElem>Start Meet</SidebarElem>
                <SidebarElem>Settings</SidebarElem>
            </div>
        </div>
    )
}