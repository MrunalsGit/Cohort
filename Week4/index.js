const express = require("express");
const app = express();

function check(m){
    if(m >= 100) return true;
    else return false
}

app.get("/route1", (req,res)=>{
    if(check(req.query.rs)){
        res.json({
            "message" : "Works"
        })
    }
    else{
        res.status(411).json({
            "message" : "Earn more"
        })
    }
})

app.listen(3000);