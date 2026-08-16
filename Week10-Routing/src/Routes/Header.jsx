import {Link} from "react-router-dom"

export default function Header(){
    return <div style={{display:"flex", height:"10vh"}}>
        <div><Link to="/" style={{margin:"0 20px"}}>Home</Link></div>
        |
        <div><Link to="/profile" style={{margin:"0 20px"}}>Profile</Link></div>
        |
        <div><Link to="/balance" style={{margin:"0 20px"}}>Balance</Link></div>
        |
        <div><Link to="/useRefFocus" style={{margin:"0 20px"}}>useRefFocus</Link></div>
        |
        <div><Link to="/useRefClock" style={{margin:"0 20px"}}>useRefClock</Link></div>
    </div>
}