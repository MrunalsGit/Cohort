export const Input = ({
    placeholder
})=>{
    return <div className={`
        flex justify-center bg-rand-200 rounded-md px-10 w-50 mb-7 mt-2
    `}>
        <input placeholder={placeholder} className={`
            w-50 placeholder:text-gray-400 placeholder:text-sm px-5 h-7
            outline-none caret-white text-gray-100
        `}></input>
    </div>
}