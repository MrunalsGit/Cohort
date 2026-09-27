import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"
import {counterAtom} from "./store/atoms/counterAtom"
import {memo, useState, useEffect} from "react"
import { evenSelector } from "./store/selectors/evenSelector"

function App() {

  return <>
    <RecoilRoot>
      <Counter />
    </RecoilRoot>

    <div><br/></div>

    <div>
      <CounterMemo/>
    </div>

    <div><br/></div>

    <RecoilRoot>
      <Count />
      <IncrBy2 />
      <Dec />
      <EvenSelector />
    </RecoilRoot>
  </>
}

function Counter(){
  return <>
    <Count/>
    <Incr/>
    <Dec/>
  </>
}

function Count(){
  const count = useRecoilValue(counterAtom)
  return <div>{count}</div>
}

function Incr(){
  const setCount = useSetRecoilState(counterAtom)
  return <button onClick={()=> setCount(c=> c+1)}>Increase</button>
}

function Dec(){
  const setCount = useSetRecoilState(counterAtom)
  return <button onClick={()=> setCount(c=>c-1)}>Decrease</button>
}

function CounterMemo(){
  const [count,setCount] = useState(0)

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount(c=>c+1)
    },3000)

    return ()=>{
      clearInterval(timer)
    }
  },[])

  return <>
    <CountMemo count={count} />
    <br/>
    <SampleButton />
  </>
}

function CountMemo({count}){
  return <div>{count}</div>
}

const SampleButton = memo(()=>{
  console.log("Rerendered")
  return <button >No re renders</button>
})

function IncrBy2(){
  const setCount = useSetRecoilState(counterAtom)
  return <button onClick={()=>setCount(c=>c+2)}>Increase2</button>
}

function EvenSelector(){
  const even = useRecoilValue(evenSelector)

  return <div>
    {even ? "Even" : "Odd"}
  </div>
}



export default App
