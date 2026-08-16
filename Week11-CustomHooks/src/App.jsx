import {useCounter} from "./hooks/counter"
import {useFetch} from "./hooks/useFetch"
import {useDebounce, useDebounce2} from "./hooks/useDebounce"
import {useState, useEffect, useRef} from "react"

function App() {
  return <div>
    <Counter />
    <FetchedData />
    <Debounce />
    <Debounce2 />
  </div>
}

function Counter(){
  const {count, Incr} = useCounter();

  return <div>
    <button onClick={Incr}>Increase {count}</button>
  </div>
}

function FetchedData(){
  const [endPoint,setEndPoint] = useState(1);
  const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/todos/" + endPoint)

  return <div>
    <button onClick={()=> setEndPoint(1)}>Fetch1</button>
    <button onClick={()=> setEndPoint(2)}>Fetch2</button>
    <br />
    {loading ? <h4>Loading.....</h4> : JSON.stringify(data)}
  </div>
}

function Debounce(){
  
  function backendReq(){
    fetch("www.google.com")
  }

  const debounceReq = useDebounce(backendReq,2000)

  return <div>
    <input onChange={debounceReq} />
  </div>
}

function Debounce2(){
  const [input, setInput] = useState("");
  const debounced = useDebounce2(input, 2000)

  function updateInput(e){
    setInput(e.target.value)
  }

  useEffect(()=>{
    fetch("www.google.com")
  },[debounced])

  return <div>
    <input onChange={updateInput} />
  </div>
}

export default App
