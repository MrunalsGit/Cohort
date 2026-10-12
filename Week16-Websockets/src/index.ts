import {WebSocketServer} from 'ws'
const wss = new WebSocketServer({port : 8080})

wss.on('connection', (socket)=>{
    
    socket.on('message', (e)=>{
        console.log(e.toString())
        if(e.toString() == "Ping"){
            socket.send("Pong")
        }
    })
})