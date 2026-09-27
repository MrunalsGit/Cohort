import {useRef, useState} from "react"
import {Button} from "./Button"

export const Otp = ({count})=>{
    const ref = useRef(Array(count).fill(0))

    return <div className="flex flex-col items-center">
        <div className="flex justify-center my-4">
            { Array(count).fill(1).map((x,i) =>{
                return <InputBoxes reference={(e)=> ref.current[i] = e} key={i}
                onDone={()=>{
                    if(i<count-1)ref.current[i+1].focus();
                }}
                goLeft={()=>{
                    if(i) ref.current[i-1].focus();
                }}
                goRight={()=>{
                    if(i < count-1) ref.current[i+1].focus();
                }}
                />
            })}
        </div>
        <Button >Verify</Button>
    </div>
}

const InputBoxes = ({reference, onDone, goLeft, goRight})=>{
    const [val,setVal] = useState("")
    return <div>
        <input value={val} ref={reference} onKeyUp={(e)=>{
            if(e.key == "Backspace") {
                setVal("")
                goLeft();
            }
            if(e.key >= "0" && e.key <= "9"){
                const newVal = parseInt(e.key)
                if(newVal >= 0 && newVal <= 9 ) {
                    setVal(newVal)
                    onDone()
                }
            }
            if(e.key == "ArrowLeft") goLeft();
            if(e.key == "ArrowRight") goRight();
        }} 
        type="text" className={`text-center w-10 h-13 rounded-xl bg-blue-200 mx-1 outline-none`} />
    </div>
}