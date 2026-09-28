export const UserCard = ()=>{
    return <>
        <div class={`flex flex-col items-center outline outline-black bg-white rounded-sm py-5 w-5/6 -translate-y-[3vh] translate-x-[2vh]`}>
            <div className="mt-3 flex items-center justify-center">
                <img src="/horse.png"></img>
            </div>
            <div className="mt-5">
                <div className="font-bold break-works">Prab Sing Dhillon</div>
                <div>abc@gmail.com</div>
                <div>9046840557</div>
                <div>Vishnupuri, Nanded</div>
            </div>
        </div>
    </>
}