import { Meetings } from "./Meetings"
import {Sidebar} from "./Sidebar"
import { FeaturesTable } from "./FeaturesTable"
import { UserCard } from "./UserCard"

export const Task = ()=>{
    return (
        <div className={`h-full flex`}>
            <Sidebar/>
            
            <div className = {`ml-10 xl:ml-64 min-w-[400px]  bg-white w-full h-full`}>

                <img className={`duration-300 p-0 m-0 w-full h-[20vh]`} src="/header.jpeg" />

                <div className={` flexflex-col sm:flex-row sm:grid sm:grid-cols-16 h-[80vh]`}>

                    <div className={`hidden xl:block px-1 col-span-5 h-screen `}>
                        <UserCard />
                    </div>

                    <div className={`py-2 flex flex-col sm:h-screen sm:col-span-10 xl:col-span-7 `}>
                        <Meetings />
                    </div>
            
                    <div className={`flex justify-center sm:py-20 px-3 py-5 items-start px-1 sm:col-span-6 xl:col-span-4 h-full `}>
                        <FeaturesTable />
                    </div>
                    

                    
                </div>

            </div>
        </div>
    )
}