import {useRef} from "react"

export default function UseRefFocus(){
    const inputRef = useRef(null);

    function submitIt(){
        inputRef.current.placeholder = ""
        inputRef.current.value = ""
        inputRef.current.focus()
    }

    return <div>
        <input ref={inputRef} placeholder="Enter name"/>
        <button onClick={submitIt}>Submit</button>
    </div>
}