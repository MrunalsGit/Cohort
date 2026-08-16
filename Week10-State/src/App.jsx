import {useState} from "react"

function App() {

  return <div>
    <Light />
  </div>
}

function Light(){
  const [light, setLight] = useState(true)

  return <div>
    <CurrLight light={light}/>
    <ToggleLight setLight={setLight}/>
  </div>
}

function CurrLight(props){
  return <div>
    {props.light ? "Light On" : "Light Off"}
  </div>
}

function ToggleLight(props){

  function toggle(){
    props.setLight(c => !c)
  }
  
  return <div>
    <button onClick={toggle} >Toggle</button>
  </div>
}

export default App
