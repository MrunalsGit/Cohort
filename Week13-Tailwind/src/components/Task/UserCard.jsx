export const UserCard = ()=>{
    return <>
        <div class={`shadow-2xl flex flex-col items-center outline outline-black bg-white rounded-sm py-5 w-4/6 -translate-y-[3vh] translate-x-[5vh]`}>
            <div className="mt-3 flex items-center justify-center">
                <img src="/horse.png"></img>
            </div>
            <div className="mt-5">
                <div className="font-bold break-works">Prab Sing Dhillon</div>
                <div className="flex justify-center">abc@gmail.com</div>
                <div className="flex justify-center">90989x0xxx</div>
                <div className="flex justify-center">Maharashtra, India</div>
            </div>
        </div>
    </>
}