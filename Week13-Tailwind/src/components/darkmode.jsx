import {useState} from "react" 

export const DarkMode = ()=>{
    const [Dmode,setMode] = useState(false);

    return <>
        <div className={` bg:white h-screen w-full dark:bg-black `}>
            <button onClick={()=>{
                document.querySelector("html").classList.toggle("dark");
            }} className={`cursor-pointer text-black dark:text-white `} >Toggle Mode</button>
        </div>
    </>
} 