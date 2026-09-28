import { FeaturesElem } from "./FeaturesElem"

export const FeaturesTable = ()=>{
    return <>
        <div className={`flex flex-wrap justify-around px-2 py-3 outline outline-black rounded-md`} >
            <FeaturesElem image={<img className="w-[30px] h-8" src="/calendar.png" />} >Calandar</FeaturesElem>
            <FeaturesElem image={<img className="w-[30px] h-8" src="/plus.png" />} >Join Meet</FeaturesElem>
            <FeaturesElem image={<img className="w-[30px] h-8" src="/calendar.png" />} >Join Meet</FeaturesElem>
        </div>
    </>
}