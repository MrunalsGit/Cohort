"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Signup(){
    const [name,setName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    return <>
        <div>
            <div>
                <input className="border p-2 mx-2 text-white" placeholder="Enter name" onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <input className="border p-2 mx-2 text-white" placeholder="Enter password" onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button className="border p-2 mx-2 cursor-pointer hover:bg-gray-100 text-white" onClick={async()=>{
                    if(name === "" || password == ""){
                        return alert("Enter name and password")
                    }
                    await axios.post("http://localhost:3000/api/v1/signup",{
                        name,password
                    })
                    router.push("/signin")
                }} >Sign up</button>
            </div>
        </div>
    </>
}