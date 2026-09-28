import { MeetingContent } from "./MeetingContent"

export const Meetings = ()=>{
    return <>
        <div className={` items-center  sm:px-2 sm:pl-10 flex flex-col`}>
            <span>Monday, 28 September</span>
            <span className={`pt-5 text-3xl text--600`}>Hello Prab</span>
        </div>
        <div className={`py-8 flex justify-center`} >
            <div className={`flex flex-col p-2 rounded-md outline outline-black w-5/6`}>
                <div className={`px-2 rounded-sm flex items-center bg-gray-100 h-10`} >
                    Monday, 28 Sept
                </div>

                <MeetingContent time={"11 : 30 AM"}>UX Webinar</MeetingContent>
                <hr/>
                <MeetingContent time={"11 : 30 AM"}>UX Webinar</MeetingContent>
                <hr/>
                <MeetingContent time={"11 : 30 AM"}>UX Webinar</MeetingContent>
                
            </div>
        </div>
    </>
}