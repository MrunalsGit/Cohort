const express = require("express");
const app = express();

let users = [
    // {
    // "name":"mrunal",
    // "kidney":[{
        // healthy:true,
    // },{
        // healthy:false,
    // }
    // ]
// }
]

app.use(express.json());

function ifPresent(name){

    for(let i of users){
        if(i.name == name)return 1;
    }
    return 0;
}

app.get("/", function(req,res){
    let q = req.query.name;
    if(!q){
        return res.send("Enter Name");
    }

    let check = 1;

    for(let i of users){
        if(i.name == q){
            check = 0;
            return res.send(i.kidney);
        }
    }

    if(check){
        res.json({
            "msg":"Users not available"
        })
        return
    }
})

app.post("/", function(req,res){
        
    const h = req.body.kidney[0].healthy;
    const n= req.body.name;

    if(ifPresent(n)){

        for(let i of users){
            if(i.name == n){
                i.kidney.push({"healthy": h})
                res.json({
                    "msg" : "Added to ", n
                })
                return
            }
        }
    }

    users.push({
        "name":n,
        "kidney":[{
            "healthy":h
        }]   
    })

    res.json({
        "msg" : "New User added"
    })
})

app.put("/", function(req,res){
    
    const n = req.body.name;

    if(ifPresent(n) == 0) {
        res.json({
            "msg" : "User not available"
        })
        return
    }

    for(let i of users){
        if(i.name == n){
            for(let j of i.kidney){
                if(j.healthy == false){
                    j.healthy = true
                }
            }
        }
    }

    res.json({
        "msg" : "Kidney purified"
    })
    return
})

app.delete("/", function(req,res){
    
    const n = req.body.name;
    if(ifPresent(n) == 0){
        res.json({
            "msg" : "User not present"
        })
        return
    }

    for(let i = 0; i < users.length; i++){
        if(users[i].name == n){
            users.splice(i,1)
        }
    }

    res.json({
        "msg" : "Deleted"
    })
    return
})

app.listen(3000);