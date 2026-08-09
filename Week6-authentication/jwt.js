const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ThisIsASecretKey";

let users = [];

app.use(express.json());

app.post("/signup", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        "username" : username,
        "password" : password
    })

    res.json({
        "message" : "Account created"
    })
})

app.post("/signin", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((i)=>{
        if(i.username == username && i.password == password) return i;
    })

    if(user){
        const token = jwt.sign({
            "username": username //
        }, JWT_SECRET);

        res.json({
            "message" : "Welcome",
            "token" : token,
        })
    }
    else{
        res.status(403).json({
            "message" : "Invalid username or password"
        })
    }
})

app.get("/me", (req,res)=>{
    const token = req.headers.authorization;
    const data = jwt.verify(token,JWT_SECRET);

    console.log(data);

    const user = users.find((i)=>{
        if(i.username == data.username) return i;
    })

    if(user){
        res.json({
            "username" : data.username,
            "password" : user.password
        })
    }
    else{
        res.json({
            "message" : "No data found"
        })
    }
})

app.listen(3001);