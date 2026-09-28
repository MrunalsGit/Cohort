export const MeetingContent = ({time,children})=>{
    return <>
        <div className={`my-2 flex items-center`}>
            <span className={`shrink-0`} >{time}</span>
            <div className={`mx-2 w-px outline h-full bg-black `} ></div>
            <span className={`break-words`} >{children}</span>
        </div>
    </>
}