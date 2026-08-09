const express = require("express")
const app = express()

function middleware(req,res,next){
    const time = new Date();
    console.log(req.method);
    console.log(req.hostname + req.url);
    console.log(time)

    res.json({
        State : "Done"
    })
}

app.use(middleware);

// app.get("/");

app.listen(3010)