const express = require("express")
const app = express()

let cnt = 0;

function counter(req,res,next){
    cnt++;
    console.log(req.method + " " + req.url);
    if(req.path === "/getCount") next();
    else[
        console.log("Incremented")
    ]
}

app.use(counter);

app.get("/getCount", (req,res) =>{
    res.status(400).json({
        Count : cnt
    })
})

app.listen(3002);