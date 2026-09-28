export const FeaturesElem = ({image,children})=>{
    return <>
        <div className="min-w-[50px] cursor-pointer px-2 py-2 mx-2 my-2 flex flex-col bg-gray-300 rounded-md">
            <div className="flex justify-center">
                {image}
            </div>
            <span className="pt-1 min-w-[50px] block w-full text-center text-sm break-words">{children}</span>
        </div>
    </>
}