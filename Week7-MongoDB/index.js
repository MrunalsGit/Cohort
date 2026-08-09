require("dotenv").config()
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_Key = "very_very secret";
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {z} = require("zod");
const{UserModel, TodoModel} = require("./db");
const mongoUrl = process.env.mongoUrl

mongoose.connect(mongoUrl)

app.use(cors());
app.use(express.json());

app.post("/signup", async(req,res)=>{
    try{

        const userSchema = z.object({
            name : z.string(),
            password : z.string().min(3,"Password must be of at least 3 char").max(15,"Password must be of max 15 char"),
            email : z.string().email("Invalid email format")
        })

        const result = userSchema.safeParse(req.body); // use userSchema.safeParse not using try catch as it wont throw error, itll add result{success:false} if wrong info else true
        if(!result.success){
            res.status(400).json({
                "message": result.error.issues[0].message
            })
            return;
        }

        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        const hashed = await bcrypt.hash(password,5);

        await UserModel.create({
            name,
            password : hashed,
            email
        })     
        res.json({
            "message" : "Sign Up successful",
            "hashed" : hashed
        })   
    }
    catch(err){
        res.json({
            "message" : "Error occured : ", err
        })
    }
})

app.post("/signin", async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email
    })

    if(!user){
        res.status(403).json({
            "message":"User not found with this email"
        })
        return;
    }

    const hashed = await bcrypt.compare(password,user.password);

    if(!hashed){
        res.status(403).json({
            "message":"Incorrect credentials!"
        })
        return;
    }

    const token = jwt.sign({
        id: user._id.toString(),
    }, JWT_Key);

    res.json({
        "message": "Siggned in successfully",
        "token" : token
    })

    
    
})

async function auth (req,res,next){
    const token = req.headers.authorization;
    const verified = jwt.verify(token,JWT_Key);


    if(verified) {
        req.userId = verified.id;
        next();
    }
    else{
        res.status(403).json({
            "message":"Sign In first!!"
        })
    }
}

app.post("/todo",auth, async (req,res)=>{
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        "message" : "Todo added"
    })
})

app.get("/todos",auth,async (req,res)=>{
    const userId = req.userId;

    const user = await TodoModel.find({
        userId
    })

    res.json({
        user
    });
})

app.listen(3000);