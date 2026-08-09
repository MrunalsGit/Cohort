import { useState, useEffect } from "react";

function App() {
  let [check,setCheck] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setCheck(check => !check);
    }, 5000);
  },[])

  return <div>
    <b>
      hellow
    </b>
    {check ? <Counter /> : null}
  </div>
}

function Counter(){
  const [count, setCount] = useState(0);

  console.log("Function Call")
  
  useEffect( ()=>{
    const clock = setInterval(()=>{
      setCount(count => count + 1 )
    },1000);

    return ()=>{
      clearInterval(clock)
    }
  },[]);

  function incrCount(){
    setCount( count + 1);
  }

  function decrCount(){
    setCount(count - 1);
  }

  function resetCount(){
    setCount(0);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={incrCount}>Increase Counter</button>
    <button onClick={decrCount}>Decrease Counter</button>
    <button onClick={resetCount}>Reset</button>
  </div>
}

export default App
