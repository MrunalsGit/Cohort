import {useState, useEffect} from "react";
import { PostComponent }  from "./post";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [curr, setCurr] = useState("profile");

  

  const postIt = posts.map( info => {
    return <PostComponent name={info.name} subtitle={info.subtitle} time={info.time} image={info.image} description={info.description} />
  })

  function AddFunction(){
    setPosts([...posts, {
      name:"Mrunal",
      subtitle:"123 followers",
      time:"5 min ago",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIE7dK_YemrfjU85-JfxGzufeve7UUFqprNhISCsEmFA&s=10",
      description:"We will learn react "
    }])
  }

  function incrCount(){
    setCount(count+1);
  }

  return (
  <>
    <div id="topBar" style={{display:"flex", justifyContent:"center"}}>
      <div onClick={()=> {
        {curr=="noti" && setCount(0)}
        setCurr("profile")
      }} style={{borderBottom: curr=="profile" ? "1px solid #ccc":null}} id="profile">
       
        <br/>
        <img style={{height:60,width:60,borderRadius:60, margin:"8px 0 0 0",cursor:"pointer"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt1shm9SEE2i0QazCSrDJoQEA70C7pYDhAd5muxT_dw&s=10"/>
        { curr == "profile" && <div> 
          <button onClick={AddFunction}>Add Post</button>
          <div style={{display:"flex", justifyContent:"center"}}>
            <div>
              {postIt}
            </div>
          </div>
        </div>
        }
      
      </div>

      <div onClick={()=> setCurr("noti")} style={{borderBottom: curr=="noti" ? "1px solid #ccc":null}} id="noti">
        <div onClick={incrCount} style={{cursor:"pointer",backgroundColor:"red",margin:"0 0 0 30px", height:30, width:30, borderRadius:50, display:"flex", justifyContent:"center", alignItems:"center"}}>
          {count}
        </div>
        <img style={{cursor:"pointer", height:60, width:60, borderRadius:60,padding:0,margin:0}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZM4ZEiJk3MO3VfKWnT0jwhaIq-8liQOIPUBtgJcrTg&s=10"/>
      </div>

      <div onClick={()=> {
        {curr=="noti" && setCount(0)}
        setCurr("logs")
      }} style={{borderBottom: curr=="logs" ? "1px solid #ccc":null}} id="logs">
        <br />
        <img style={{cursor:"pointer",margin:"22px 0 0 0",height:40, width:40}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_vCx_yK9cYyVRE5ukbt_oYiBykuVx45UB02H8ZhOhA&s=10" />
      </div>
      
    </div>
  </>
  )
}


export default App
