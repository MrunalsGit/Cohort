import { useEffect, useRef, useState } from "react"

function App (){
  const [socket,setSocket] = useState()
  const inputRef = useRef(null)

  function sendMessage(){
    //@ts-ignore
    socket.send(inputRef.current.value)
  }

  useEffect(()=>{
    const ws = new WebSocket("http://localhost:8080")
    //@ts-ignore
    setSocket(ws)

    ws.onmessage = (ev)=>{
      alert(ev.data)
    }
  },[])

  return <>
    <div>
      <input ref={inputRef} placeholder="Enter message..." ></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  </>
}

export default App