const express = require("express")
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_KEY = "KeepItSecret"

app.use(cors())

app.use(express.json());

let users = [];

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username == username)){
        return res.json({
            "message" : "Username already taken"
        })
    }

    users.push({
        "username" : username,
        "password" : password
    })

    res.status(200).json({
        "message" : "Account created"
    })  
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find( u =>{
        if(u.username == username && u.password == password){
            return u;
        }
    })

    if(user){
        const token = jwt.sign({
            "username": username
        }, JWT_KEY);

        user.token = token;

        res.json({
            "message" : "logged in",
            "token" : token
        })
    }
    else{
        return res.json({
            "message" : "Invalid username or password"
        })
    }
})

app.use((req,res,next)=>{
    const token = req.headers.authorization;
    const data = jwt.verify(token,JWT_KEY);

    if(data.username) {
        req.user = data.username;
        next();
    }
    else{
        res.json({
            "message" : "Login first!"
        })
    }
})

app.get("/me", (req,res)=>{
    // const token = req.headers.authorization;
    // const data = jwt.verify(token,JWT_KEY);
    // const username = data.username;

    const username = req.user;

    const user = users.find(u => u.username == username);

    if(user){
        res.json({
            "username" : username,
            "password" : user.password
        })
    }
    else{                                              // no need of else block if auth middleware is used
        return res.json({
            "message" : "Invalid token recieved"
        })
    }
})

app.listen(3111);