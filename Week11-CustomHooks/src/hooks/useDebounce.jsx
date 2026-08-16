import {useRef, useState, useEffect} from "react"

function useDebounce(backendReq, delay){
    const timerRef = useRef()
    
    const fn = ()=>{
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(backendReq, delay)
    }

    return fn;
}

function useDebounce2(input, delay){
    const timeRef = useRef();
    const [val, setVal] = useState(null);

    useEffect(()=>{
        timeRef.current = setTimeout(()=>{
            setVal(input)
        }, delay)

        return  ()=>{
            clearTimeout(timeRef.current)
        }
    },[input])

    return val;
}

export{
    useDebounce,
    useDebounce2
} 