import {useState, useRef} from "react"

export default function UseRefClock(){
    const [count,setCount] = useState(0);
    const timer = useRef(null);

    function Start(){
        let val = setInterval(()=>{
            setCount(c => c+1)
        }, 100)
        timer.current = val
    }

    function Stop(){
        clearInterval(timer.current)
    }

    return <div>
        <div>{count}</div>
        <br/>
        <button onClick={Start}>Start</button>
        {/* <br/> */}
        <button onClick={Stop}>Stop</button>
    </div>
}