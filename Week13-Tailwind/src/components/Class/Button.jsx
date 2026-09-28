export const Button = ({
    children,onClick
})=>{
    return <span onClick={onClick}  className={`
    cursor-pointer bg-gray-800 flex hover:bg-green-100 justify-center
    py-1 rounded-md text-md w-30 
    `}>
        {children}
    </span>
}  