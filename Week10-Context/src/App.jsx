import {useState, useContext, createContext} from "react"

const CountContext = createContext();

function CountProvider({children}){
  const [count,setCount] = useState(0);
  return <div>
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  </div>
}

function App() {

  return <div>
    <Counter />
  </div>
}

function Counter(){
  return <div>
    <br/>
    <CountProvider>
      <Increase />
      <Decrease />
      <Count />
    </CountProvider>
  </div>
}

function Increase(){
  const {setCount} = useContext(CountContext)

  return <button onClick={()=> setCount(c => c+1)}>Increase</button>
}

function Decrease(){
  const {setCount} = useContext(CountContext);

  return<button onClick={()=> setCount(c => c-1)}>Decrease</button>
}

function Count(){
  const {count} = useContext(CountContext)

  return <div>
    Count : {count}
  </div>
}

export default App
