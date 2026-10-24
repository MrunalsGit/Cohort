"use client"
import {Input} from "@repo/ui/input-box"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [val,setVal] = useState("")
  const router = useRouter()
  return (
    <div style={{
      height:"100vh", width:"100vw",
      display:"flex", justifyContent:"center", justifyItems:"center"
    }}>
      <div style={{
        display:"flex", flexDirection:"column", justifyContent:'center'
      }}>
        <Input placeholder="Enter RoomId" onChange={(e)=>{setVal(e.target.value)}} />
        <button style={{padding:5}} onClick={()=>{
          router.push(`/chat/${val}`)
        }}>Join</button>
      </div>
    </div>
  );
}
