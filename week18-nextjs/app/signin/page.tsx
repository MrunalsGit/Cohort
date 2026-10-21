"use client"
import { useState } from "react"
import axios from "axios"

export default function Signin(){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return <>
        <div>
            <div>
                <input className="border p-2 mx-2" placeholder="Enter name" onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <input className="border p-2 mx-2" placeholder="Enter password" onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button className="border p-2 mx-2 cursor-pointer hover:bg-gray-100" onClick={async()=>{
                    await axios.post("http:localhost:3000/api/v1/signin",{
                        name,password
                    })
                }} >Sign in</button>
            </div>
        </div>
    </>
}