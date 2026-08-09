const express = require("express");
const app = express();

let users=[];

app.use(express.json());

function genToken(){
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z',
                'A','B','C','D','E','F','G','H','I','J','K','L','M',
                'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                '0','1','2','3','4','5','6','7','8','9'];

    let token = "";
    for(let i = 0; i < 32; i++){
        token += arr[Math.floor(Math.random()*arr.length)];
    }

    return token;
}

app.post("/signup",(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username : username,
        password : password
    })

    res.json({
        message : "Signup Done!"
    })
    console.log(users);
    console.log();
});

app.post("/signin", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let user = users.find((u) =>{
        if(u.username == username && u.password == password){
            return u;
        }
    })

    if(user){
        const token = genToken();
        user.token = token;
        res.json({
            "message" : "welcome",
            "token" : token 
        })
    }
    else{
        return res.status(403).json({
            "message" : "No user found"
        })
    }

    console.log(users);
});

app.get("/me", (req,res)=>{
    const token = req.headers.authorization;

    const user = users.find((u) =>{
        if(u.token == token) return u;
    })

    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }
    else{
        return res.json({
            "message" : "Login first"
        })
    }
})

app.listen(3000);