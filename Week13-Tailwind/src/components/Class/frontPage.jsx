import '../../App.css'
import {useState} from "react"

import {Button} from "./Button"
import {Input} from "./Input"
import {AgeText} from "./AgeText"
import {Logo} from "./Logo"
import {Otp} from "./Otp"

export const FrontPage = ()=>{
    const [clicked,setClicked] = useState(false);
    return (
        <div className={`h-screen bg-rand-100 flex flex-col items-center`}>
            <div className="flex flex-col items-center">
                <Logo />
                <AgeText />
                <Input placeholder="Enter age"/>
                <Button onClick={()=>{}} clicked={clicked}>Sign up</Button>
            </div>
            <div className={`py-5`} >
                <Otp count={6}/>
            </div>
        </div>
    )
}